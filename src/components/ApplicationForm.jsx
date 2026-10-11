import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CAREERS, EMAIL_PATTERN, FIELD_LIMITS } from "../data.js";

const SPONTANEOUS = "spontaneous";
const URL_PATTERN = /^https?:\/\/\S+$/i;

export default function ApplicationForm() {
  const [params] = useSearchParams();
  const requested = params.get("role");
  const initialRole = CAREERS.some((r) => r.id === requested) ? requested : SPONTANEOUS;

  const [values, setValues] = useState({
    name: "",
    email: "",
    role: initialRole,
    link: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitted

  const handleChange = useCallback(
    (field) => (e) => {
      const raw = e.target.value;
      const limit = FIELD_LIMITS[field];
      const next = typeof limit === "number" ? raw.slice(0, limit) : raw;
      setValues((prev) => ({ ...prev, [field]: next }));
    },
    []
  );

  const validate = useCallback((v) => {
    const next = {};
    if (!v.name.trim()) next.name = "Merci d'indiquer votre nom.";
    if (!v.email.trim() || !EMAIL_PATTERN.test(v.email.trim())) {
      next.email = "Merci d'indiquer un email valide.";
    }
    if (v.link.trim() && !URL_PATTERN.test(v.link.trim())) {
      next.link = "Le lien doit commencer par http:// ou https://.";
    }
    if (!v.message.trim()) next.message = "Présentez-vous en quelques lignes.";
    return next;
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const validation = validate(values);
      setErrors(validation);
      if (Object.keys(validation).length > 0) return;

      // Aucun backend n'est connecté dans cette démo : rien n'est envoyé
      // ni stocké. Lors d'une intégration réelle, envoyez ces données via
      // HTTPS vers une API qui revalide et échappe chaque champ côté serveur.
      setStatus("submitted");
      setValues((prev) => ({ name: "", email: "", role: prev.role, link: "", message: "" }));
      window.setTimeout(() => setStatus("idle"), 2600);
    },
    [validate, values]
  );

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="app-role">Poste visé</label>
      <select id="app-role" value={values.role} onChange={handleChange("role")}>
        {CAREERS.map((role) => (
          <option key={role.id} value={role.id}>
            {role.title}
          </option>
        ))}
        <option value={SPONTANEOUS}>Candidature spontanée</option>
      </select>

      <label htmlFor="app-name">Nom</label>
      <input
        id="app-name"
        type="text"
        autoComplete="name"
        placeholder="Votre nom"
        value={values.name}
        onChange={handleChange("name")}
        maxLength={FIELD_LIMITS.name}
        aria-invalid={Boolean(errors.name)}
        aria-describedby={errors.name ? "app-name-error" : undefined}
      />
      {errors.name && (
        <span id="app-name-error" className="form-error">
          {errors.name}
        </span>
      )}

      <label htmlFor="app-email">Email</label>
      <input
        id="app-email"
        type="email"
        autoComplete="email"
        placeholder="vous@exemple.com"
        value={values.email}
        onChange={handleChange("email")}
        maxLength={FIELD_LIMITS.email}
        aria-invalid={Boolean(errors.email)}
        aria-describedby={errors.email ? "app-email-error" : undefined}
      />
      {errors.email && (
        <span id="app-email-error" className="form-error">
          {errors.email}
        </span>
      )}

      <label htmlFor="app-link">Lien GitHub, LinkedIn ou portfolio (optionnel)</label>
      <input
        id="app-link"
        type="url"
        autoComplete="url"
        placeholder="https://github.com/votre-profil"
        value={values.link}
        onChange={handleChange("link")}
        maxLength={FIELD_LIMITS.link}
        aria-invalid={Boolean(errors.link)}
        aria-describedby={errors.link ? "app-link-error" : undefined}
      />
      {errors.link && (
        <span id="app-link-error" className="form-error">
          {errors.link}
        </span>
      )}

      <label htmlFor="app-message">Présentez-vous</label>
      <textarea
        id="app-message"
        placeholder="Votre parcours, vos projets, ce que vous aimeriez construire chez nous..."
        value={values.message}
        onChange={handleChange("message")}
        maxLength={FIELD_LIMITS.message}
        aria-invalid={Boolean(errors.message)}
        aria-describedby={errors.message ? "app-message-error" : undefined}
      />
      {errors.message && (
        <span id="app-message-error" className="form-error">
          {errors.message}
        </span>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        style={{ justifyContent: "center", marginTop: 6 }}
      >
        {status === "submitted" ? "Candidature envoyée ✓" : "Envoyer ma candidature"}
      </button>
    </form>
  );
}