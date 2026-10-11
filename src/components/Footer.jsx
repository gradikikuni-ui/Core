import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <p>© 2026 CORE TECHNOLOGIES — TOUS DROITS RÉSERVÉS</p>
        <div className="footer-links">
          <Link to="/services">Services</Link>
          <Link to="/technologies">Technologies</Link>
          <Link to="/process">Processus</Link>
          <Link to="/about">À propos</Link>
          <Link to="/careers">Carrières</Link>
          <Link to="/contact">Contact</Link>
          <a
            href="https://www.linkedin.com/company/core-technologies0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}