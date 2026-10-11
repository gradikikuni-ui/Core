import { Link } from "react-router-dom";
import TechLogo from "../components/TechLogo.jsx";
import { STACK } from "../data.js";

export default function Technologies() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow reveal">Notre stack</div>
          <h1 className="reveal">Des outils choisis, pas empilés.</h1>
          <p className="reveal">
            Nous sélectionnons les technologies les plus adaptées à chaque
            projet, et gardons une stack volontairement restreinte pour
            maîtriser chaque brique de bout en bout.
          </p>
        </div>
      </section>

      <section className="stack">
        <div className="wrap">
          <div className="stack-grid">
            {STACK.map((group) => {
              const Icon = group.icon;
              return (
                <article className="stack-card spot reveal" key={group.category}>
                  <div className="stack-head">
                    <Icon className="icon-plain icon-sm" aria-hidden="true" />
                    <div>
                      <h3>{group.category}</h3>
                      <p>{group.blurb}</p>
                    </div>
                  </div>
                  <ul className="tech-grid">
                    {group.items.map((tech) => (
                      <li className="tech-tile" key={tech.name}>
                        <TechLogo logo={tech.logo} name={tech.name} />
                        <span>{tech.name}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="cta-band cta-band-solo reveal">
          <div>
            <h2>Une contrainte technique particulière ?</h2>
            <p>
              Système existant, hébergement imposé, intégration spécifique —
              parlons-en avant de démarrer.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">
                Discuter de votre projet
              </Link>
              <Link to="/process" className="btn btn-ghost">
                Voir notre processus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}