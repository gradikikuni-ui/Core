import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CAREERS, CAREER_VALUES } from "../data.js";

export default function Careers() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow reveal">Carrières</div>
          <h1 className="reveal">
            Construisez des produits <span className="grad">qui comptent</span>.
          </h1>
          <p className="reveal">
            Nous sommes une équipe de développeurs qui aime la technologie
            bien faite. Si vous aussi, parlons-en.
          </p>
        </div>
      </section>

      <section className="careers">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Profils recherchés</div>
            <h2>Les expertises que nous aimerions rencontrer.</h2>
          </div>
          <div className="role-grid">
            {CAREERS.map((role) => {
              const Icon = role.icon;
              return (
                <div className="value-card spot reveal" key={role.id}>
                  <Icon className="icon-plain" aria-hidden="true" />
                  <h4>{role.title}</h4>
                  <p className="card-text">{role.description}</p>
                  <ul className="tag-row">
                    {role.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="card-link">
                    Postuler <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="culture">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Notre façon de travailler</div>
            <h2>Ce qui compte pour nous.</h2>
          </div>
          <div className="why-grid">
            {CAREER_VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div className="value-card spot reveal" key={value.title}>
                  <Icon className="icon-plain" aria-hidden="true" />
                  <h4>{value.title}</h4>
                  <p className="card-text">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="cta-band cta-band-solo reveal">
          <div>
            <h2>Pas de poste qui correspond ?</h2>
            <p>
              Envoyez-nous une candidature spontanée : présentez-vous en
              quelques lignes et dites-nous ce que vous aimeriez construire.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">
                Candidature spontanée
              </Link>
              <Link to="/about" className="btn btn-ghost">
                En savoir plus sur nous
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}