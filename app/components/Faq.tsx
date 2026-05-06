'use client';

import { useState } from 'react';

export interface FAQItem {
  q: string;
  a: string;
}

interface FaqProps {
  faqs: FAQItem[];
}

export default function Faq({ faqs }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="bg-[var(--surface)] border border-[var(--outline)] rounded-2xl overflow-hidden transition-shadow hover:shadow-md">
            <button
              suppressHydrationWarning
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-(family-name:--font-outfit) font-bold text-[var(--on-surface)] text-base sm:text-lg leading-snug">{faq.q}</span>
              <span className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-[var(--outline)] flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[var(--on-surface)] border-[var(--on-surface)]' : ''}`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isOpen ? 'var(--bg)' : 'var(--on-surface)'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
              </span>
            </button>
            <div style={{ maxHeight: isOpen ? '400px' : '0', transition: 'max-height 0.35s cubic-bezier(0.22,1,0.36,1)', overflow: 'hidden' }}>
              <p className="px-6 pb-5 text-sm sm:text-base text-[var(--on-muted)] leading-relaxed border-t border-[var(--outline)] pt-4">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
