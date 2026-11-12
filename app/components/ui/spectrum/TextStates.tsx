'use client';

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';

/* Spectrum UI "Text States" (transitions.dev text-swap recipe): a label that swaps its text in
   place, the old text exiting up with a touch of blur, the new one entering from below.
   Ported without the shadcn `cn` helper; styles live in spectrum.css (.t-text-swap). */

interface TextStatesProps {
  text: string;
  /** Swap duration in ms (each phase). */
  duration?: number;
  /** Travel distance in px. */
  translateY?: number;
  /** Blur amount in px. */
  blur?: number;
  className?: string;
}

export function TextStates({ text, duration = 180, translateY = 6, blur = 3, className = '' }: TextStatesProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(text);

  // phase 1: exit the old text, then commit the new one after one duration
  useEffect(() => {
    if (text === shown) return;
    const el = ref.current;
    if (!el) return;
    el.classList.add('is-exit');
    const timer = window.setTimeout(() => setShown(text), duration);
    return () => window.clearTimeout(timer);
  }, [text, shown, duration]);

  // phases 2-3: jump below without a transition, reflow, then release
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !el.classList.contains('is-exit')) return;
    el.classList.remove('is-exit');
    el.classList.add('is-enter-start');
    void el.offsetHeight;
    el.classList.remove('is-enter-start');
  }, [shown]);

  return (
    <span
      ref={ref}
      className={`t-text-swap ${className}`}
      aria-live="polite"
      style={
        {
          '--text-swap-dur': `${duration}ms`,
          '--text-swap-translate-y': `${translateY}px`,
          '--text-swap-blur': `${blur}px`,
        } as CSSProperties
      }
    >
      {shown}
    </span>
  );
}
