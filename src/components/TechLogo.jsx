import { useState } from "react";

/**
 * Affiche le logo d'une technologie.
 * - `logo` string  → image (Devicon)
 * - `logo` composant → icône lucide (quand aucun logo officiel n'existe)
 * - échec de chargement → pastille avec les 2 premières lettres
 */
export default function TechLogo({ logo, name, className = "tech-logo" }) {
  const [failed, setFailed] = useState(false);

  if (typeof logo === "string" && !failed) {
    return (
      <img
        className={className}
        src={logo}
        alt=""
        width="28"
        height="28"
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    );
  }

  if (logo && typeof logo !== "string") {
    const Icon = logo;
    return <Icon className={`${className} tech-icon`} strokeWidth={1.6} aria-hidden="true" />;
  }

  return (
    <span className={`${className} tech-fallback`} aria-hidden="true">
      {name.slice(0, 2)}
    </span>
  );
}