'use client';

import { useEffect, type RefObject } from 'react';

/* Depth for a section that the NEXT section slides over (sticky stack on wide screens). Sets --out
   (0 to 1) on the section: how far the next section has risen over it. CSS then settles and dims the
   section's content a little (transform and opacity only). Idle below 1121px wide or on short
   screens, where the sections are not stacked. */
export function useCoverDepth(ref: RefObject<HTMLElement | null>, nextSelector: string) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const stacked = window.matchMedia('(min-width: 1121px) and (min-height: 680px)');
    let raf = 0;

    const update = () => {
      raf = 0;
      const next = document.querySelector(nextSelector);
      if (!stacked.matches || !next) {
        el.style.removeProperty('--out');
        return;
      }
      const vh = window.innerHeight;
      const out = Math.min(1, Math.max(0, 1 - next.getBoundingClientRect().top / vh));
      el.style.setProperty('--out', out.toFixed(3));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref, nextSelector]);
}
