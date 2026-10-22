// Two-tone sunflower back-to-top button: yellow petals, black center.
import { useEffect, useState } from "react";

export default function SunflowerFAB() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 280);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);
  const petals = Array.from({ length: 16 });
  const seeds = Array.from({ length: 9 });
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-12 right-6 z-40 hidden h-14 w-14 transition-all duration-300 hover:scale-110 hover:rotate-12 md:block ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
    >
      <svg viewBox="0 0 200 200" className="h-full w-full drop-shadow" aria-hidden="true">
        <g>
          {petals.map((_, i) => (
            <ellipse
              key={i}
              cx="100"
              cy="36"
              rx="11"
              ry="32"
              fill="hsl(var(--yellow))"
              stroke="hsl(var(--gold-deep))"
              strokeWidth="1.5"
              transform={`rotate(${(i * 360) / 16} 100 100)`}
            />
          ))}
        </g>
        <circle cx="100" cy="100" r="33" fill="hsl(var(--foreground))" />
        <g fill="hsl(var(--yellow))">
          {seeds.map((_, i) => {
            const a = i * 0.78;
            const r = 8 + (i % 3) * 6;
            return (
              <circle
                key={i}
                cx={100 + Math.cos(a) * r}
                cy={100 + Math.sin(a) * r}
                r="2.6"
              />
            );
          })}
        </g>
      </svg>
    </button>
  );
}
