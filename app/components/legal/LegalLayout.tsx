'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export type TocItem = { id: string; label: string };

export function LegalHero({
  badge,
  title,
  lastUpdated,
  intro,
}: {
  badge: string;
  title: string;
  lastUpdated: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--outline)] bg-[var(--bg)] transition-colors duration-500">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(var(--on-surface) 1px,transparent 1px),linear-gradient(90deg,var(--on-surface) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-8 sm:pb-10 relative z-10">
        <div className="flex items-center justify-between gap-4 mb-3">
          <span className="inline-flex items-center bg-[var(--on-surface)] text-[var(--bg)] px-2 py-0.5 font-(family-name:--font-jb-mono) text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            {badge}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-[var(--outline)] font-(family-name:--font-jb-mono) text-[9px] sm:text-[10px] font-semibold tracking-wide uppercase text-[var(--on-muted)] shrink-0">
            <span className="material-symbols-outlined text-[11px] leading-none">history</span>
            Last Updated: {lastUpdated}
          </span>
        </div>
        <div className="max-w-3xl">
          <h1 className="font-(family-name:--font-outfit) font-bold text-xl sm:text-2xl md:text-3xl leading-[1.2] tracking-tight text-[var(--on-surface)] mb-3">
            {title}
          </h1>
          {intro && (
            <p className="text-sm sm:text-base text-[var(--on-muted)] leading-relaxed max-w-2xl">{intro}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export function LegalLayout({
  toc,
  children,
}: {
  toc: TocItem[];
  children: React.ReactNode;
}) {
  const [active, setActive] = useState<string>(toc[0]?.id ?? '');

  useEffect(() => {
    const sections = toc
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-[var(--bg)] transition-colors duration-500">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-14">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="font-(family-name:--font-jb-mono) text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--on-surface)]/50 mb-3">
                On This Page
              </p>
              <nav className="space-y-0.5 border-l border-[var(--outline)]">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block pl-3.5 py-1.5 -ml-px border-l-2 text-[13px] leading-snug transition-colors ${
                      active === item.id
                        ? 'border-[var(--on-surface)] text-[var(--on-surface)] font-semibold'
                        : 'border-transparent text-[var(--on-muted)] hover:text-[var(--on-surface)]'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="min-w-0 max-w-[760px]">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function LegalFooterCta({
  otherLabel,
  otherHref,
}: {
  otherLabel: string;
  otherHref: string;
}) {
  return (
    <div className="border-t border-[var(--outline)] bg-[var(--surface)] transition-colors duration-500">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="max-w-[760px] lg:ml-[calc(240px+3.5rem)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-[var(--on-muted)]">
            Questions about this document? Reach our Grievance Officer at{' '}
            <a href="mailto:contact@cred2tech.com" className="text-[var(--on-surface)] font-semibold hover:underline">
              contact@cred2tech.com
            </a>
            .
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href={otherHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--on-surface)] border border-[var(--outline)] px-4 py-2 hover:bg-[var(--on-surface)]/5 transition-colors"
            >
              {otherLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
