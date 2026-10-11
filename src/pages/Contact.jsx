import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="wrap">
        <div className="contact-layout">
          <div className="contact-info reveal">
            <div className="eyebrow">Contact</div>
            <h1>Un projet en tête ? Parlons-en.</h1>
            <p>
              Décrivez-nous votre besoin — nous revenons vers vous sous 24h
              avec un premier avis concret, pas un discours commercial.
            </p>
            <div className="contact-detail">
              <div>
                <span>Réponse</span>
                <strong>Sous 24h ouvrées</strong>
              </div>
              <div>
                <span>Premier échange</span>
                <strong>Sans engagement</strong>
              </div>
              <div>
                <span>Accompagnement</span>
                <strong>De l&apos;idée à la mise en ligne</strong>
              </div>
            </div>
          </div>
          <div className="contact-card reveal">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}