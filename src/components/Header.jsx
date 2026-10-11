import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_LINKS, NAV_MENU } from "../data.js";

const topLinkClass = ({ isActive }) => (isActive ? "active" : undefined);
const itemClass = ({ isActive }) => (isActive ? "dd-item is-active" : "dd-item");

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const progressRef = useRef(null);
  const ddRef = useRef(null);

  const groupActive = NAV_MENU.items.some((item) => pathname.startsWith(item.to));

  // Ferme les menus à chaque changement de page.
  useEffect(() => {
    setDdOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Fond translucide au scroll + barre de progression de lecture.
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        const ratio = max > 0 ? Math.min(1, y / max) : 0;
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  // Dropdown : clic extérieur + touche Échap.
  useEffect(() => {
    if (!ddOpen) return undefined;
    const onDown = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) setDdOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setDdOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [ddOpen]);

  return (
    <header className={`${scrolled ? "scrolled" : ""} ${mobileOpen ? "menu-open" : ""}`}>
      <div className="nav-bar">
        <NavLink to="/" className="logo" end>
          <span className="logo-mark">
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#1a4fd6" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <polygon
                points="20,3 35,11.5 35,28.5 20,37 5,28.5 5,11.5"
                fill="none"
                stroke="url(#logoGrad)"
                strokeWidth="2.2"
              />
              <circle cx="20" cy="20" r="6" fill="url(#logoGrad)" />
            </svg>
          </span>
          CORE TECHNOLOGIES
        </NavLink>

        <nav className="nav-links" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={topLinkClass}
            >
              {link.label}
            </NavLink>
          ))}

          <div className={`nav-dd ${ddOpen ? "open" : ""}`} ref={ddRef}>
            <button
              type="button"
              className={`dd-trigger ${groupActive ? "active" : ""}`}
              aria-expanded={ddOpen}
              aria-controls="company-menu"
              onClick={() => setDdOpen((v) => !v)}
            >
              {NAV_MENU.label}
              <ChevronDown size={16} aria-hidden="true" />
            </button>
            <ul className="dd-menu" id="company-menu">
              {NAV_MENU.items.map(({ to, label, description, icon: Icon }) => (
                <li key={to}>
                  <NavLink to={to} className={itemClass}>
                    <Icon className="dd-icon" size={20} aria-hidden="true" />
                    <span>
                      <strong>{label}</strong>
                      <small>{description}</small>
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="nav-actions">
          <NavLink to="/contact" className="btn btn-primary nav-cta">
            Discuter de votre projet
          </NavLink>
          <button
            type="button"
            className="burger"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-menu" id="mobile-menu">
          <ul>
            {[...NAV_LINKS, ...NAV_MENU.items].map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === "/"} className={topLinkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
    </header>
  );
}