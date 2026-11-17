// Static stand-in for the 3D hero (no WebGL, reduced motion, or still loading): the same red stethoscope loop and hearts.
export default function HeroFallback() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="A red stethoscope loop with three purple hearts">
      <path d="M90 60 C 40 160, 80 300, 200 320 C 320 340, 360 240, 300 170" fill="none" stroke="#a00010" strokeWidth="14" strokeLinecap="round" />
      <circle cx="300" cy="160" r="22" fill="#fff" stroke="#787878" strokeWidth="8" />
      <g fill="#8000f8">
        <path d="M120 120c-12-18-40-6-30 16 8 16 30 28 30 28s22-12 30-28c10-22-18-34-30-16z" transform="translate(10 20)" />
        <path d="M120 120c-12-18-40-6-30 16 8 16 30 28 30 28s22-12 30-28c10-22-18-34-30-16z" transform="translate(190 70) scale(0.8)" />
        <path d="M120 120c-12-18-40-6-30 16 8 16 30 28 30 28s22-12 30-28c10-22-18-34-30-16z" transform="translate(130 215) scale(0.6)" />
      </g>
    </svg>
  );
}
