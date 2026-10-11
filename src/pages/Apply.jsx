import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ApplicationForm from "../components/ApplicationForm.jsx";

export default function Apply() {
  return (
    <section className="contact-page">
      <div className="wrap">
        <div className="contact-layout">
          <div className="contact-info reveal">
            <Link to="/careers" className="back-link">
              <ArrowLeft size={16} aria-hidden="true" /> Tous les postes
            </Link>
            <div className="eyebrow">Candidature</div>
            <h1>Rejoignez l&apos;équipe.</h1>
            <p>
              Choisissez le poste qui vous correspond, ou envoyez-nous une
              candidature spontanée. Quelques lignes sur vous suffisent pour
              démarrer la conversation.
            </p>
            <div className="contact-detail">
              <div>
                <span>Postes</span>
                <strong>Full-Stack, Mobile, IA ou spontanée</strong>
              </div>
              <div>
                <span>À partager</span>
                <strong>Votre parcours et un lien GitHub ou portfolio</strong>
              </div>
            </div>
          </div>
          <div className="contact-card reveal">
            <ApplicationForm />
          </div>
        </div>
      </div>
    </section>
  );
}