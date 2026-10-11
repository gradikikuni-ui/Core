import { useCallback, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./styles.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function useRevealOnScroll(containerRef, deps) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const els = container.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default function Layout() {
  const containerRef = useRef(null);
  const location = useLocation();

  // Haut de page à chaque navigation, sauf si une ancre (#id) est demandée.
  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  useRevealOnScroll(containerRef, [location.pathname]);

  // Effet "spotlight" : la lumière suit la souris sur les cartes .spot.
  const onMouseMove = useCallback((e) => {
    const card = e.target.closest?.(".spot");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div ref={containerRef} className="ct-root" onMouseMove={onMouseMove}>
      <div className="ct-bg" aria-hidden="true" />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}