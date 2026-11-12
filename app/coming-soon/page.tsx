import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import theme from '../theme';
import { LiquidTitle } from '../components/coming-soon/LiquidTitle';
import '../components/coming-soon/coming-soon.css';

export const metadata: Metadata = {
  title: 'Govt Scheme Discovery - Coming Soon',
  description: 'Govt Scheme Discovery is launching soon on Cred2Tech. Check back shortly to find government schemes you qualify for.',
};

const accentVars = {
  '--cs-accent-light': theme.colors.scheme.accent,
  '--cs-accent-dark': theme.colors.scheme.accentDark,
} as CSSProperties;

const HEADLINE = ['Coming', 'soon.'];

export default function ComingSoonPage() {
  return (
    <section className="cs" style={accentVars} aria-labelledby="cs-title">
      <div className="cs-wrap">
        <p className="cs-eyebrow cs-enter" style={{ ['--i' as string]: 0 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 21h18" />
            <path d="M4 21V9.5L12 4l8 5.5V21" />
            <path d="M8 21v-7M12 21v-7M16 21v-7" />
          </svg>
          Govt Scheme Discovery
        </p>

        <LiquidTitle id="cs-title" words={HEADLINE} />

        <div className="cs-body">
          <p className="cs-lead cs-enter" style={{ ['--i' as string]: 1 }}>
            We&apos;re building a way for MSMEs to discover government schemes they qualify for. This
            feature isn&apos;t live yet. Check back soon.
          </p>

          <Link href="/" className="cs-link cs-enter" style={{ ['--i' as string]: 2 }}>
            Back to Home
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
