/* ═══════════════════════════════════════════════
   DESIGN TOKENS
   ═══════════════════════════════════════════════ */

export const C = {
  bg:       "#F7F5F2",
  surface:  "#FFFFFF",
  card:     "#F0EDE8",
  border:   "#E2DDD6",
  accent:   "#2D4A3E",
  accentLt: "#486A5C",
  gold:     "#7A6248",
  goldLt:   "#9C7E62",
  text:     "#1A1916",
  muted:    "#7A7670",
  subtle:   "#C8C3BB",
};

/* Animation variants */
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
