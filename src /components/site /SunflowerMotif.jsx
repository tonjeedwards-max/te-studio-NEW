// Faded, non-realistic sunflower motif — single color (currentColor),
// placed with low opacity to act as a background graphic.
export default function SunflowerMotif({ className = "", style }) {
  const petals = Array.from({ length: 16 });
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      aria-hidden="true"
      fill="currentColor"
    >
      <g>
        {petals.map((_, i) => (
          <ellipse
            key={i}
            cx="100"
            cy="36"
            rx="11"
            ry="32"
            opacity="0.45"
            transform={`rotate(${(i * 360) / 16} 100 100)`}
          />
        ))}
      </g>
      <circle cx="100" cy="100" r="33" opacity="0.9" />
      <g opacity="0.85">
        {Array.from({ length: 9 }).map((_, i) => {
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
  );
}
