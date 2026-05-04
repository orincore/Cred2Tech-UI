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
  // Light Mode
  bg:           '#f8fafc',
  surface:      '#ffffff',
  surfaceLow:   '#f6f3f2',
  onSurface:    '#0b2147',
  onMuted:      '#4a5d73',
  outline:      '#e2e8f0',

  // Dark Mode
  dark: {
    bg:           '#050b18',
    surface:      '#0b2147',
    surfaceLow:   '#122a55',
    onSurface:    '#e6edf7',
    onMuted:      '#94a3b8',
    outline:      '#1e293b',
  },
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
  navGlass:   'rgba(255,255,255,0.72)',
} as const;

// ─────────────────────────────────────────────
// SHADOWS
// ─────────────────────────────────────────────
export const shadows = {
  nav:        '0 2px 32px rgba(11,33,71,0.07), 0 1px 0 rgba(255,255,255,0.8) inset',
  navScrolled:'0 4px 32px rgba(11,33,71,0.12)',
  card:       '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.15)',
  btnPrimary: '0 2px 12px rgba(11,33,71,0.3), 0 1px 0 rgba(255,255,255,0.15) inset',
  btnHover:   '0 8px 24px rgba(11,33,71,0.35)',
  input:      '0 0 0 3px rgba(11,33,71,0.08)',
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
  '--bg':          colors.bg,
  '--surface':     colors.surface,
  '--surface-low': colors.surfaceLow,
  '--outline':     colors.outline,
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
