'use client';

import { useEffect, useRef } from 'react';
import { MOTION_TOGGLE_EVENT, type MotionToggleDetail } from './MotionToggle';

// taste-skill "liquid-type" moment, served from /public/taste/moments.
// The headline ripples like type seen through water under the pointer and settles back to crisp
// type within about a second. On its own, a gentle ripple sweeps across it once per 3.2s cycle.
// Plain text on touch screens, phones and under reduced motion.
const LIB_SRC = '/taste/moments/lib.js';
const MOMENT_SRC = '/taste/moments/liquid-type/moment.js';

const CYCLE_MS = 3200;
const FIRST_DELAY_MS = 1400; // after the entrance has settled
// a gentle idle sweep: small, slow steps keep the ripple at ~40% of a pointer pass
const SWEEP_STEPS = 24;
const SWEEP_STEP_MS = 50;
const SWEEP_STEP_PX = 14;

interface MomentLib {
  still: () => boolean;
  coarse: () => boolean;
  [key: string]: unknown;
}
type MountFn = (root: HTMLElement, opts: Record<string, unknown>, lib: MomentLib) => { destroy?: () => void };

interface LiquidTitleProps {
  id: string;
  words: string[];
}

export function LiquidTitle({ id, words }: LiquidTitleProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let api: { destroy?: () => void } | undefined;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let paused = false;
    let hovered = false;
    let visible = true;

    // one sweep: synthetic pointer moves along the middle of the headline, left to right
    const sweep = () => {
      const r = el.getBoundingClientRect();
      const y = r.top + r.height * 0.5;
      for (let i = 0; i <= SWEEP_STEPS; i++) {
        setTimeout(() => {
          if (cancelled || paused || hovered) return;
          const x = r.left + r.width * 0.2 + i * SWEEP_STEP_PX;
          el.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true }));
        }, i * SWEEP_STEP_MS);
      }
      setTimeout(() => el.dispatchEvent(new PointerEvent('pointerleave')), SWEEP_STEPS * SWEEP_STEP_MS + 10);
    };

    const loop = () => {
      if (cancelled) return;
      if (!paused && !hovered && visible && !document.hidden) sweep();
      timer = setTimeout(loop, CYCLE_MS);
    };

    const onEnter = (e: PointerEvent) => { if (e.isTrusted) hovered = true; };
    const onLeave = (e: PointerEvent) => { if (e.isTrusted) hovered = false; };
    const onToggle = (e: Event) => { paused = (e as CustomEvent<MotionToggleDetail>).detail.paused; };
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });

    Promise.all([
      import(/* webpackIgnore: true */ /* turbopackIgnore: true */ LIB_SRC) as Promise<MomentLib>,
      import(/* webpackIgnore: true */ /* turbopackIgnore: true */ MOMENT_SRC) as Promise<{ default: MountFn }>,
    ])
      .then(([lib, moment]) => {
        if (cancelled) return;
        // same contract as the kit's loader: reduced() answers "still" (reduced motion or phone)
        api = moment.default(el, { strength: 1.1, radius: 0.35 }, { ...lib, reduced: lib.still });
        if (lib.still() || lib.coarse()) return; // the headline stands as written
        el.addEventListener('pointerenter', onEnter);
        el.addEventListener('pointerleave', onLeave);
        window.addEventListener(MOTION_TOGGLE_EVENT, onToggle);
        io.observe(el);
        timer = setTimeout(loop, FIRST_DELAY_MS);
      })
      .catch(() => {
        /* the headline stays plain text */
      });

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
      io.disconnect();
      el.removeEventListener('pointerenter', onEnter);
      el.removeEventListener('pointerleave', onLeave);
      window.removeEventListener(MOTION_TOGGLE_EVENT, onToggle);
      api?.destroy?.();
    };
  }, []);

  const label = words.join(' ');

  return (
    <h1 ref={ref} id={id} className="cs-title mo-lt__type" aria-label={label}>
      {words.map((word, i) => (
        <span className="cs-word" key={word} aria-hidden="true">
          <span className="cs-word__in" style={{ ['--w' as string]: i }}>{word}</span>
        </span>
      ))}
    </h1>
  );
}
