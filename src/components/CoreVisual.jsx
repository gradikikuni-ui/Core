import { useEffect, useRef } from "react";
import { BrainCircuit, Globe, Smartphone } from "lucide-react";

const HUES = ["26,79,214", "6,182,212", "79,70,229"];

export default function CoreVisual() {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let cx = 0;
    let cy = 0;
    let particles = [];

    function makeParticle() {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.max(w, h) * (0.55 + Math.random() * 0.25);
      return {
        angle,
        radius,
        speed: 0.15 + Math.random() * 0.35,
        size: 0.8 + Math.random() * 1.6,
        hue: HUES[Math.floor(Math.random() * HUES.length)],
      };
    }

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      w = canvas.width;
      h = canvas.height;
      cx = w / 2;
      cy = h / 2;
    }

    function init() {
      resize();
      particles = Array.from({ length: 56 }, makeParticle);
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.radius -= p.speed;
        if (p.radius < 40) {
          Object.assign(p, makeParticle());
          return;
        }
        const x = cx + Math.cos(p.angle) * p.radius;
        const y = cy + Math.sin(p.angle) * p.radius;
        const fade = Math.min(1, (Math.max(w, h) * 0.8 - p.radius) / (Math.max(w, h) * 0.4));
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue}, ${0.5 * (1 - fade) + 0.14})`;
        ctx.fill();
      });
      if (!reduceMotion) {
        frameRef.current = requestAnimationFrame(tick);
      }
    }

    init();
    tick();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="core-stage reveal">
      <canvas ref={canvasRef} aria-hidden="true" />
      <svg className="core-svg" viewBox="0 0 400 400" aria-hidden="true">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1a4fd6" />
            <stop offset="0.6" stopColor="#4f46e5" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#bfd0ff" />
            <stop offset="100%" stopColor="#2a4bd7" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle
          className="ring ring-1"
          cx="200"
          cy="200"
          r="170"
          stroke="url(#ringGrad)"
          strokeWidth="0.8"
          strokeOpacity="0.55"
          strokeDasharray="2 10"
        />
        <circle
          className="ring ring-2"
          cx="200"
          cy="200"
          r="135"
          stroke="url(#ringGrad)"
          strokeWidth="1.2"
          strokeOpacity="0.7"
          strokeDasharray="1 6"
        />
        <polygon
          className="ring ring-3"
          points="200,80 305,140 305,260 200,320 95,260 95,140"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="1.2"
          strokeOpacity="0.65"
        />

        <g className="core-pulse">
          <circle cx="200" cy="200" r="56" fill="url(#coreGlow)" />
          <circle cx="200" cy="200" r="14" fill="url(#ringGrad)" />
        </g>

        <g stroke="#4f46e5" strokeWidth="1.4" strokeOpacity="0.55">
          <circle cx="200" cy="80" r="4" fill="#1a4fd6" />
          <circle cx="305" cy="140" r="4" fill="#06b6d4" />
          <circle cx="305" cy="260" r="4" fill="#1a4fd6" />
          <circle cx="200" cy="320" r="4" fill="#06b6d4" />
          <circle cx="95" cy="260" r="4" fill="#1a4fd6" />
          <circle cx="95" cy="140" r="4" fill="#06b6d4" />
        </g>
      </svg>

      <div className="chip chip-1" aria-hidden="true">
        <Globe size={18} /> Web
      </div>
      <div className="chip chip-2" aria-hidden="true">
        <Smartphone size={18} /> Mobile
      </div>
      <div className="chip chip-3" aria-hidden="true">
        <BrainCircuit size={18} /> IA
      </div>
    </div>
  );
}