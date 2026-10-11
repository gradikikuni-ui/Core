import { Link } from "react-router-dom";
import { PROCESS } from "../data.js";

export default function Process() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow reveal">Comment ça fonctionne</div>
          <h1 className="reveal">Notre processus</h1>
          <p className="reveal">
            Un déroulé simple et transparent, de la première conversation à
            la maintenance de votre solution.
          </p>
        </div>
      </section>

      <section className="process">
        <div className="wrap">
          <ol className="process-list">
            {PROCESS.map((step) => {
              const Icon = step.icon;
              return (
                <li className="process-step spot reveal" key={step.number}>
                  <div className="process-num">{step.number}</div>
                  <div>
                    <h3>
                      <Icon className="icon-plain icon-sm" aria-hidden="true" />
                      {step.title}
                    </h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="contact">
        <div className="cta-band cta-band-solo reveal">
          <div>
            <h2>Prêt à démarrer la première étape ?</h2>
            <p>
              Parlons de votre projet — la première conversation ne vous
              engage à rien.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">
                Discuter de votre projet
              </Link>
              <Link to="/services" className="btn btn-ghost">
                Voir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}