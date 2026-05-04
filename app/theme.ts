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
  // Light Mode - Black & White Palette
  bg:           '#ffffff',
  surface:      '#ffffff',
  surfaceLow:   '#f5f5f5',
  surfaceLower: '#e5e5e5',
  onSurface:    '#000000',
  onMuted:      '#666666',
  outline:      '#e0e0e0',
  outlineLight: '#f0f0f0',

  // Dark Mode - Black & White Palette
  dark: {
    bg:           '#000000',
    surface:      '#111111',
    surfaceLow:   '#1a1a1a',
    surfaceLower: '#222222',
    onSurface:    '#ffffff',
    onMuted:      '#a0a0a0',
    outline:      '#333333',
    outlineLight: '#222222',
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
  nav:        '0 2px 32px rgba(0,0,0,0.05), 0 1px 0 rgba(255,255,255,0.8) inset',
  navScrolled:'0 4px 32px rgba(0,0,0,0.1)',
  card:       '0 30px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)',
  btnPrimary: '0 2px 12px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.1) inset',
  btnHover:   '0 8px 24px rgba(0,0,0,0.4)',
  input:      '0 0 0 3px rgba(0,0,0,0.05)',
  modal:      '0 24px 64px rgba(0,0,0,0.3)',
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
  '--surface-lower': colors.surfaceLower,
  '--outline':     colors.outline,
  '--outline-light': colors.outlineLight,
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
