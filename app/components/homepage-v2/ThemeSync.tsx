'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

/**
 * The ported v2 sections (Hero, PartnerWorkspace) style themselves off a
 * `data-theme="dark"|"light"` attribute on <html> (v2's own convention).
 * The rest of Cred2Tech-UI drives its theme through next-themes' `class`
 * attribute instead. This bridges the two: whenever the real site theme
 * (toggled from the site Header) changes, mirror it onto `data-theme` so
 * the homepage sections stay in sync instead of being stuck on one mode.
 */
export function ThemeSync() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  }, [resolvedTheme]);

  return null;
}
