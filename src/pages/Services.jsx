import { Link } from "react-router-dom";
import { SERVICES } from "../data.js";

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow reveal">Nos services</div>
          <h1 className="reveal">
            Cinq expertises, une seule équipe pour piloter votre projet.
          </h1>
          <p className="reveal">
            Du site vitrine à la plateforme SaaS intégrant de l&apos;IA, nous
            couvrons l&apos;ensemble de la chaîne technique — sans jamais
            sous-traiter une partie de votre produit.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <div className="service-grid">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  className="service-card spot reveal"
                  key={service.id}
                  id={service.id}
                >
                  <div>
                    <div className="service-tag">
                      <Icon className="icon-plain icon-sm" aria-hidden="true" />
                      <span>
                        {service.number} — {service.title}
                      </span>
                    </div>
                    <h3>{service.subtitle}</h3>
                    <p className="desc">{service.description}</p>
                  </div>
                  <div>
                    {service.items.length > 0 && (
                      <ul className="service-list">
                        {service.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {service.note && <p className="service-note">{service.note}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="cta-band cta-band-solo reveal">
          <div>
            <h2>Une idée de projet à préciser ?</h2>
            <p>
              Dites-nous ce que vous voulez construire — nous vous aidons à
              choisir la bonne approche technique.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">
                Discuter de votre projet
              </Link>
              <Link to="/technologies" className="btn btn-ghost">
                Voir notre stack
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}