import { useCallback, useState } from "react";
import { EMAIL_PATTERN, FIELD_LIMITS } from "../data.js";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitted

  const handleChange = useCallback(
    (field) => (e) => {
      const raw = e.target.value;
      const limit = FIELD_LIMITS[field];
      // Coupe toute saisie au-delà de la limite autorisée, côté client,
      // en plus de l'attribut maxLength sur le champ.
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
    if (!v.message.trim()) next.message = "Décrivez brièvement votre projet.";
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
      setValues({ name: "", email: "", message: "" });
      window.setTimeout(() => setStatus("idle"), 2600);
    },
    [validate, values]
  );

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">Nom</label>
      <input
        id="name"
        type="text"
        autoComplete="name"
        placeholder="Votre nom"
        value={values.name}
        onChange={handleChange("name")}
        maxLength={FIELD_LIMITS.name}
        aria-invalid={Boolean(errors.name)}
        aria-describedby={errors.name ? "name-error" : undefined}
      />
      {errors.name && (
        <span id="name-error" className="form-error">
          {errors.name}
        </span>
      )}

      <label htmlFor="email">Email professionnel</label>
      <input
        id="email"
        type="email"
        autoComplete="email"
        placeholder="vous@entreprise.com"
        value={values.email}
        onChange={handleChange("email")}
        maxLength={FIELD_LIMITS.email}
        aria-invalid={Boolean(errors.email)}
        aria-describedby={errors.email ? "email-error" : undefined}
      />
      {errors.email && (
        <span id="email-error" className="form-error">
          {errors.email}
        </span>
      )}

      <label htmlFor="message">Votre projet</label>
      <textarea
        id="message"
        placeholder="Quelques lignes sur ce que vous voulez construire..."
        value={values.message}
        onChange={handleChange("message")}
        maxLength={FIELD_LIMITS.message}
        aria-invalid={Boolean(errors.message)}
        aria-describedby={errors.message ? "message-error" : undefined}
      />
      {errors.message && (
        <span id="message-error" className="form-error">
          {errors.message}
        </span>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        style={{ justifyContent: "center", marginTop: 6 }}
      >
        {status === "submitted" ? "Demande envoyée ✓" : "Envoyer la demande"}
      </button>
    </form>
  );
}