import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import TechLogo from "../components/TechLogo.jsx";
import { CAREERS, STACK } from "../data.js";

// Retrouve logo + nom d'une techno à partir de son nom (source unique : STACK).
const TECH_BY_NAME = new Map(
  STACK.flatMap((group) => group.items).map((tech) => [tech.name, tech])
);

function CheckList({ items }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Check size={18} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Une seule page pour tous les postes : le contenu change selon l'URL
 * (/careers/fullstack, /careers/mobile, /careers/ai, ...).
 */
export default function CareerDetail() {
  const { roleId } = useParams();
  const role = CAREERS.find((r) => r.id === roleId);

  if (!role) return <Navigate to="/careers" replace />;

  const Icon = role.icon;
  const techs = role.stack.map((name) => TECH_BY_NAME.get(name)).filter(Boolean);
  const others = CAREERS.filter((r) => r.id !== role.id);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link to="/careers" className="back-link reveal">
            <ArrowLeft size={16} aria-hidden="true" /> Tous les postes
          </Link>
          <div className="eyebrow reveal">Carrières</div>
          <h1 className="role-title reveal">
            <Icon className="icon-plain" aria-hidden="true" />
            {role.title}
          </h1>
          <p className="reveal">{role.tagline}</p>
          <ul className="tag-row reveal">
            {role.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="detail">
        <div className="wrap">
          <div className="detail-grid">
            <div className="detail-main">
              <div className="detail-block reveal">
                <h2>Vos missions</h2>
                <CheckList items={role.missions} />
              </div>

              <div className="detail-block reveal">
                <h2>Profil recherché</h2>
                <CheckList items={role.profile} />
              </div>

              <div className="detail-block reveal">
                <h2>Atouts appréciés</h2>
                <CheckList items={role.nice} />
              </div>

              <div className="detail-block reveal">
                <h2>Environnement technique</h2>
                <ul className="tech-grid">
                  {techs.map((tech) => (
                    <li className="tech-tile" key={tech.name}>
                      <TechLogo logo={tech.logo} name={tech.name} />
                      <span>{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="detail-aside reveal">
              <h3>Ce poste vous intéresse ?</h3>
              <p>Présentez-vous en quelques lignes, nous reviendrons vers vous.</p>
              <Link to={`/careers/apply?role=${role.id}`} className="btn btn-primary">
                Postuler à ce poste
                <ArrowRight size={16} aria-hidden="true" />
              </Link>

              <div className="other-roles">
                <span>Autres postes</span>
                {others.map((other) => {
                  const OtherIcon = other.icon;
                  return (
                    <Link to={`/careers/${other.id}`} key={other.id}>
                      <OtherIcon size={18} aria-hidden="true" />
                      {other.title}
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}