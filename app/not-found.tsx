import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import theme from './theme';
import { LiquidTitle } from './components/coming-soon/LiquidTitle';
import { BackButton } from './components/not-found/BackButton';
import './components/coming-soon/coming-soon.css';
import './components/not-found/not-found.css';

export const metadata: Metadata = {
  title: 'Page Not Found | Cred2Tech',
  description: 'The page you are looking for could not be found.',
};

const accentVars = {
  '--cs-accent-light': theme.colors.brand.accent,
  '--cs-accent-dark': theme.colors.brand.accentDark,
} as CSSProperties;

const HEADLINE = ['Page', 'not', 'found.'];

export default function NotFound() {
  return (
    <section className="cs cs--nf" style={accentVars} aria-labelledby="nf-title">
      <div className="cs-wrap">
        <p className="cs-eyebrow cs-enter" style={{ ['--i' as string]: 0 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5M8.5 8.5l5 5M13.5 8.5l-5 5" />
          </svg>
          Resource Missing
        </p>

        <LiquidTitle id="nf-title" words={HEADLINE} />

        <div className="cs-body">
          <p className="cs-lead cs-enter" style={{ ['--i' as string]: 1 }}>
            The requested URL could not be found. The page you&apos;re looking for seems to have
            vanished into the digital void. Let&apos;s get you back on track.
          </p>

          <div className="nf-actions cs-enter" style={{ ['--i' as string]: 2 }}>
            <Link href="/" className="cs-link">
              Go Home
            </Link>
            <BackButton />
          </div>
        </div>

        <p className="nf-help cs-enter" style={{ ['--i' as string]: 3 }}>
          Still can&apos;t find what you&apos;re looking for?
          <Link href="/contact">Contact Support</Link>
        </p>
      </div>
    </section>
  );
}
