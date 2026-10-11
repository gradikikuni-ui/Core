import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CoreVisual from "../components/CoreVisual.jsx";
import CardCarousel from "../components/CardCarousel.jsx";
import TechMarquee from "../components/TechMarquee.jsx";
import { SERVICES, WHY_US, HERO_STATS } from "../data.js";

export default function Home() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-grid">
          <div>
            <div className="badge reveal">
              <span className="dot" aria-hidden="true" />
              Développement web, mobile & intelligence artificielle
            </div>
            <h1 className="reveal">
              Nous créons des <span className="grad">solutions numériques</span>{" "}
              adaptées à vos besoins.
            </h1>
            <p className="lede reveal">
              Sites web, applications mobiles, logiciels et plateformes SaaS
              conçus sur mesure pour les entreprises et les particuliers.
            </p>
            <p className="sub reveal">
              Besoin d&apos;un site internet, d&apos;une application mobile ou
              d&apos;améliorer un logiciel existant ? Notre équipe de
              développeurs vous accompagne de l&apos;idée jusqu&apos;au
              produit final.
            </p>
            <div className="hero-ctas reveal">
              <Link to="/contact" className="btn btn-primary">
                Discuter de votre projet
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/services" className="btn btn-ghost">
                Voir nos services
              </Link>
            </div>
            <div className="hero-stats reveal">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <CoreVisual />
        </div>
      </section>

      <TechMarquee />

      <section className="services">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Ce que nous faisons</div>
            <h2>Une équipe, deux disciplines.</h2>
            <p>
              Nous ne sous-traitons pas l&apos;IA à une autre boîte. Les
              mêmes ingénieurs pensent le logiciel et les modèles qui le font
              tourner.
            </p>
          </div>

          <div className="reveal">
            <CardCarousel label="Nos services">
              {SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    to={`/services#${service.id}`}
                    key={service.id}
                    className="value-card spot svc-card"
                  >
                    <div className="card-top">
                      <Icon className="icon-plain" aria-hidden="true" />
                      <span className="card-num">{service.number}</span>
                    </div>
                    <h4>{service.title}</h4>
                    <p className="card-sub">{service.subtitle}</p>
                    <p className="card-desc">{service.description}</p>
                    <span className="card-link">
                      En savoir plus <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </CardCarousel>
          </div>
        </div>
      </section>

      <section className="culture">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Pourquoi nous choisir</div>
            <h2>Une approche pensée pour votre projet.</h2>
          </div>
          <div className="why-grid">
            {WHY_US.slice(0, 4).map((value) => {
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
        <div className="cta-band reveal">
          <div>
            <h2>Un projet en tête ? Parlons-en.</h2>
            <p>
              Décrivez-nous votre besoin — nous revenons vers vous sous 24h
              avec un premier avis concret, pas un discours commercial.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">
                Discuter de votre projet
              </Link>
              <Link to="/about" className="btn btn-ghost">
                En savoir plus sur nous
              </Link>
            </div>
          </div>
          <div className="contact-detail">
            <div>
              <span>Étape 1</span>
              <strong>On discute de votre projet, sans engagement.</strong>
            </div>
            <div>
              <span>Étape 2</span>
              <strong>Nous vous proposons une solution technique concrète.</strong>
            </div>
            <div>
              <span>Étape 3</span>
              <strong>Votre équipe de développeurs se met au travail.</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}