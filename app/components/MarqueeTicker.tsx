'use client';
import React from 'react';

export function MarqueeTicker() {
  const items = ['Top Lender Offers', 'MSME Specific', 'Quick Disbursal', 'Fast Track Approvals'];

  return (
    <div
      className="relative overflow-hidden border-b border-[var(--outline)]"
      style={{
        height: '48px',
        background: 'linear-gradient(90deg, var(--surface) 0%, var(--surface-low) 50%, var(--surface) 100%)',
      }}
    >
      {/* Gradient fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--surface), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--surface), transparent)' }}
      />

      <div className="marquee-track marquee-fast flex items-center h-full">
        {[...Array(10)].map((_, groupIdx) => (
          <React.Fragment key={groupIdx}>
            {items.map((item, i) => (
              <React.Fragment key={`${groupIdx}-${i}`}>
                <span className="text-sm font-semibold tracking-[0.15em] uppercase text-[var(--on-surface)] px-8">
                  {item}
                </span>
                <span className="text-[var(--on-muted)] mx-4 material-symbols-outlined text-[16px]">chevron_right</span>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
