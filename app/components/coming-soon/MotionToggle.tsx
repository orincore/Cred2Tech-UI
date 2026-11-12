'use client';

import { useState } from 'react';

export const MOTION_TOGGLE_EVENT = 'cs:motion-toggle';
export interface MotionToggleDetail {
  paused: boolean;
}

// Pause control for the looping headline animation (required for motion that runs past 5s).
export function MotionToggle() {
  const [paused, setPaused] = useState(false);

  const toggle = () => {
    const next = !paused;
    setPaused(next);
    window.dispatchEvent(new CustomEvent<MotionToggleDetail>(MOTION_TOGGLE_EVENT, { detail: { paused: next } }));
  };

  return (
    <button type="button" className="cs-motion" aria-pressed={paused} onClick={toggle}>
      {paused ? 'Play animation' : 'Pause animation'}
    </button>
  );
}
