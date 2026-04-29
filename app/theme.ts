/**
 * theme.ts — Single source of truth for all design tokens
 *
 * Usage:
 *   import { colors, fonts, gradients, shadows, radii, easing } from '@/app/theme';
 *
 *   // In JSX inline styles:
 *   <div style={{ background: gradients.hero, color: colors.onSurface }} />
 *
 *   // In Tailwind arbitrary values:
 *   <div className={`text-[${colors.primary}] font-[${fonts.ui}]`} />
 *
 *   // In script strings (GSAP / vanilla JS):
 *   el.style.color = colors.accent;
 */

// ─────────────────────────────────────────────
// COLORS
// ─────────────────────────────────────────────
export const colors = {
  // Brand
  primary:      '#003f7d',
  primaryHover: '#0056a7',
  primaryDim:   '#a8c8ff',
  primaryFix:   '#d6e3ff',

  secondary:    '#006d3f',
  secondaryFix: '#58ffa5',

  accent:       '#22c55e',
  accentDark:   '#16a34a',
  accentBlue:   '#1565d8',
  accentBlueDark: '#0056a7',

  // Surfaces
  bg:           '#fcf9f8',
  surface:      '#ffffff',
  surfaceLow:   '#f6f3f2',
  surfaceMid:   '#f0eded',
  surfaceHigh:  '#eae7e7',

  // Text
  onSurface:    '#1b1c1c',
  onMuted:      '#424751',
  outline:      '#727783',
  outlineVar:   '#c2c6d3',

  // Semantic
  error:        '#ba1a1a',
  errorBg:      '#ffdad6',

  // Hero gradient stops
  heroBlue1:    '#1e3a8a',
  heroBlue2:    '#3b82f6',
  heroBlue3:    '#2563eb',
  heroBlue4:    '#1d4ed8',
  heroBlue5:    '#1e40af',

  // Card
  cardFront1:   '#0a1f5c',
  cardFront2:   '#0d3a8e',
  cardFront3:   '#1565d8',
  cardFront4:   '#0a2a6e',
  cardBack1:    '#071540',
  cardBack2:    '#0a1f5c',
} as const;

// ─────────────────────────────────────────────
// FONTS
// ─────────────────────────────────────────────
export const fonts = {
  // Primary highly-legible Sans for UI elements, labels, buttons
  ui:       'var(--font-inter)',

  // Neutral Sans for paragraph text and body reading
  body:     'var(--font-inter)',

  // Geometric, modern Sans for dramatic headlines and big numbers
  display:  'var(--font-outfit)',

  // Technical Mono for badges, codes, and small details
  mono:     'var(--font-jb-mono)',
} as const;

// ─────────────────────────────────────────────
// GRADIENTS
// ─────────────────────────────────────────────
export const gradients = {
  hero:       `linear-gradient(135deg, ${colors.heroBlue1} 0%, ${colors.heroBlue2} 25%, ${colors.heroBlue3} 50%, ${colors.heroBlue4} 75%, ${colors.heroBlue5} 100%)`,
  primary:    `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryHover} 100%)`,
  cardFront:  `linear-gradient(135deg, ${colors.cardFront1} 0%, ${colors.cardFront2} 35%, ${colors.cardFront3} 65%, ${colors.cardFront4} 100%)`,
  cardBack:   `linear-gradient(135deg, ${colors.cardBack1} 0%, ${colors.cardBack2} 100%)`,
  accentLine: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
  navGlass:   'rgba(255,255,255,0.72)',
} as const;

// ─────────────────────────────────────────────
// SHADOWS
// ─────────────────────────────────────────────
export const shadows = {
  nav:        '0 2px 32px rgba(0,63,125,0.07), 0 1px 0 rgba(255,255,255,0.8) inset',
  navScrolled:'0 4px 32px rgba(0,63,125,0.12)',
  card:       '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.15)',
  btnPrimary: '0 2px 12px rgba(0,63,125,0.3), 0 1px 0 rgba(255,255,255,0.15) inset',
  btnHover:   '0 8px 24px rgba(0,63,125,0.35)',
  input:      '0 0 0 3px rgba(0,63,125,0.08)',
  modal:      '0 24px 64px rgba(0,0,0,0.22)',
} as const;

// ─────────────────────────────────────────────
// BORDER RADIUS
// ─────────────────────────────────────────────
export const radii = {
  sm:   '8px',
  md:   '12px',
  lg:   '16px',
  xl:   '20px',
  xxl:  '24px',
  card: '20px',
  nav:  '16px',
  pill: '999px',
} as const;

// ─────────────────────────────────────────────
// EASING
// ─────────────────────────────────────────────
export const easing = {
  smooth:   'cubic-bezier(0.22, 1, 0.36, 1)',
  spring:   'cubic-bezier(0.34, 1.56, 0.64, 1)',
  standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

// ─────────────────────────────────────────────
// SPACING (nav heights, section padding)
// ─────────────────────────────────────────────
export const spacing = {
  navHeight:        '68px',
  navHeightScrolled:'56px',
  sectionPadY:      '96px',
  containerMaxW:    '1280px',
} as const;

// ─────────────────────────────────────────────
// FONT SIZES
// ─────────────────────────────────────────────
export const fontSizes = {
  navLink:  '15px',
  navBtn:   '14px',
  eyebrow:  '10px',
} as const;
export const breakpoints = {
  sm:  '640px',
  md:  '768px',
  lg:  '1024px',
  xl:  '1280px',
} as const;

// ─────────────────────────────────────────────
// CSS VARIABLE MAP (for globals.css sync)
// These match the :root vars in globals.css exactly
// ─────────────────────────────────────────────
export const cssVars = {
  '--primary':     colors.primary,
  '--primary-c':   colors.primaryHover,
  '--primary-dim': colors.primaryDim,
  '--primary-fix': colors.primaryFix,
  '--secondary':   colors.secondary,
  '--accent':      colors.accent,
  '--bg':          colors.bg,
  '--surface':     colors.surface,
  '--surface-low': colors.surfaceLow,
  '--outline':     colors.outline,
  '--outline-var': colors.outlineVar,
  '--on-surface':  colors.onSurface,
  '--on-muted':    colors.onMuted,
} as const;

// ─────────────────────────────────────────────
// DEFAULT EXPORT — full theme object
// ─────────────────────────────────────────────
const theme = {
  colors,
  fonts,
  fontSizes,
  gradients,
  shadows,
  radii,
  easing,
  spacing,
  breakpoints,
  cssVars,
} as const;

export default theme;
