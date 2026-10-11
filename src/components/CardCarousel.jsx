import { Children, useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Carrousel de cartes avec flèches < >, accroche (scroll-snap),
 * barre de progression et navigation clavier.
 */
export default function CardCarousel({ label, children }) {
  const trackRef = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const [thumb, setThumb] = useState(1);
  const [progress, setProgress] = useState(0);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdge({ start: el.scrollLeft <= 2, end: el.scrollLeft >= max - 2 });
    setThumb(el.scrollWidth > 0 ? Math.min(1, el.clientWidth / el.scrollWidth) : 1);
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByCard = useCallback((direction) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".carousel-item");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 24;
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * step, behavior: reduce ? "auto" : "smooth" });
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByCard(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByCard(-1);
    }
  };

  const showControls = !(edge.start && edge.end);
  const thumbShift = thumb > 0 && thumb < 1 ? progress * ((1 - thumb) / thumb) * 100 : 0;

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        ref={trackRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {Children.map(children, (child) => (
          <div className="carousel-item">{child}</div>
        ))}
      </div>

      {showControls && (
        <div className="carousel-controls">
          <div className="carousel-progress" aria-hidden="true">
            <span style={{ width: `${thumb * 100}%`, transform: `translateX(${thumbShift}%)` }} />
          </div>
          <div className="carousel-buttons">
            <button
              type="button"
              className="carousel-btn"
              onClick={() => scrollByCard(-1)}
              disabled={edge.start}
              aria-label="Cartes précédentes"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="carousel-btn"
              onClick={() => scrollByCard(1)}
              disabled={edge.end}
              aria-label="Cartes suivantes"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}