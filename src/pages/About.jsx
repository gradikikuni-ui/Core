import { Link } from "react-router-dom";
import CardCarousel from "../components/CardCarousel.jsx";
import { WHY_US } from "../data.js";

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow reveal">Qui sommes-nous ?</div>
          <h1 className="reveal">
            Une équipe de développeurs au service de vos idées.
          </h1>
        </div>
      </section>

      <section className="about-intro">
        <div className="wrap">
          <p className="reveal">
            Nous sommes une équipe de développeurs passionnés par la
            technologie et la création de solutions numériques.
          </p>
          <p className="reveal">
            Nous accompagnons les entreprises, les entrepreneurs et les
            particuliers dans la conception, le développement et
            l&apos;amélioration de leurs produits numériques.
          </p>
          <p className="reveal">
            Qu&apos;il s&apos;agisse de créer un site web, une application
            mobile, une plateforme SaaS ou de moderniser un logiciel
            existant, nous développons des solutions adaptées à vos besoins.
          </p>
          <p className="reveal">
            Notre objectif est simple : transformer vos idées et vos besoins
            en produits numériques performants, modernes et évolutifs.
          </p>
        </div>
      </section>

      <section className="culture">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Pourquoi nous choisir</div>
            <h2>Pourquoi travailler avec nous ?</h2>
          </div>
          <div className="reveal">
            <CardCarousel label="Pourquoi travailler avec nous">
              {WHY_US.map((value) => {
                const Icon = value.icon;
                return (
                  <div className="value-card spot" key={value.title}>
                    <Icon className="icon-plain" aria-hidden="true" />
                    <h4>{value.title}</h4>
                    <p className="card-text">{value.description}</p>
                  </div>
                );
              })}
            </CardCarousel>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="cta-band cta-band-solo reveal">
          <div>
            <h2>Envie de rencontrer l&apos;équipe ?</h2>
            <p>
              Parlons de votre projet et de la manière dont nous pouvons vous
              accompagner.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">
                Discuter de votre projet
              </Link>
              <Link to="/careers" className="btn btn-ghost">
                Rejoindre l&apos;équipe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}