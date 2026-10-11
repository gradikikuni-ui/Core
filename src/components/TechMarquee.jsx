import { STACK } from "../data.js";
import TechLogo from "./TechLogo.jsx";

// Uniquement les technos qui ont un vrai logo (image), sans doublon.
const LOGOS = (() => {
  const seen = new Set();
  return STACK.flatMap((group) => group.items).filter((item) => {
    if (typeof item.logo !== "string" || seen.has(item.logo)) return false;
    seen.add(item.logo);
    return true;
  });
})();

function MarqueeSet({ hidden }) {
  return (
    <div className="marquee-set" aria-hidden={hidden || undefined}>
      {LOGOS.map((tech) => (
        <div className="m-item" key={tech.name}>
          <TechLogo logo={tech.logo} name={tech.name} />
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="marquee-band" aria-label="Technologies que nous maîtrisons">
      <div className="wrap">
        <div className="eyebrow marquee-label">Technologies que nous maîtrisons</div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          <MarqueeSet />
          <MarqueeSet hidden />
        </div>
      </div>
    </section>
  );
}