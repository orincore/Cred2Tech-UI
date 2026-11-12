'use client';

import { useState, type CSSProperties, type ReactNode } from 'react';
import Link from 'next/link';
import { colors } from '../../theme';
import './platform-menu.css';

/* The "Continue as" list of the header's Get Started menu (desktop dropdown and mobile drawer).
   Spectrum UI's profile-dropdown pattern, ported as plain CSS + React (no animation library): the
   panel springs open from the button, the rows rise in one after another, and a single highlight
   slides between rows with the pointer or keyboard focus (transform only; every row has the same
   height). Icons are in the brand colours from theme.ts. */

interface PlatformLinkDef {
  href: string;
  title: string;
  subtitle: string;
  tone: 'accent' | 'scheme';
  Icon: () => ReactNode;
}

function icon(children: ReactNode) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const PartnerIcon = () => icon(<><circle cx="10" cy="8" r="3.4" /><path d="M4 19.5c.9-3.6 3.3-5.4 6-5.4 1.5 0 2.9.5 4 1.6" /><path d="M17.5 14.5v5M15 17h5" /></>);
const MsmeIcon = () => icon(<><path d="M4 21V10.5L12 4l8 6.5V21" /><path d="M9 21v-6h6v6" /><path d="M9 12h.01M15 12h.01M12 8h.01" /></>);
const SchemeIcon = () => icon(<><path d="M3 21h18" /><path d="M4 21V9.5L12 4l8 5.5V21" /><path d="M8 21v-7M12 21v-7M16 21v-7" /></>);

const PLATFORM_LINKS: readonly PlatformLinkDef[] = [
  { href: 'https://app.cred2tech.com/login', title: 'Sourcing Partner', subtitle: 'Login or create an account', tone: 'accent', Icon: PartnerIcon },
  { href: 'https://app.cred2tech.com/msme/login', title: 'MSME', subtitle: 'Login or create an account', tone: 'accent', Icon: MsmeIcon },
  { href: '/coming-soon', title: 'Govt Scheme Discovery', subtitle: 'Find schemes you qualify for', tone: 'scheme', Icon: SchemeIcon },
];

function Row({ href, className, onClick, children }: { href: string; className: string; onClick: () => void; children: ReactNode }) {
  if (href.startsWith('http')) {
    return <a href={href} onClick={onClick} className={className}>{children}</a>;
  }
  return <Link href={href} onClick={onClick} className={className}>{children}</Link>;
}

interface PlatformMenuProps {
  isDark: boolean;
  onNavigate: () => void;
  /** Plays the entrance (rows rising in) while true. The drawer passes true on mount. */
  open?: boolean;
  /** Slightly larger rows in the mobile drawer. */
  roomy?: boolean;
}

export function PlatformMenu({ isDark, onNavigate, open = true, roomy = false }: PlatformMenuProps) {
  const [active, setActive] = useState<number | null>(null);
  const tones = {
    accent: isDark ? colors.brand.accentDark : colors.brand.accent,
    scheme: isDark ? colors.scheme.accentDark : colors.scheme.accent,
  };
  const activeTone = active === null ? tones.accent : tones[PLATFORM_LINKS[active].tone];

  return (
    <div className={`pm${roomy ? ' pm--roomy' : ''}`} data-open={open} style={{ ['--tone' as string]: activeTone } as CSSProperties}>
      <p className="pm__label" style={{ color: tones.accent }}>Continue as</p>
      <ul className="pm__list" onMouseLeave={() => setActive(null)} onBlur={() => setActive(null)}>
        <span className="pm__hl" data-on={active !== null} style={{ ['--i' as string]: active ?? 0 } as CSSProperties} aria-hidden="true" />
        {PLATFORM_LINKS.map((link, i) => (
          <li
            key={link.href}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            style={{ ['--k' as string]: i, ['--row-tone' as string]: tones[link.tone] } as CSSProperties}
          >
            <Row href={link.href} onClick={onNavigate} className="pm__row">
              <span className="pm__ico"><link.Icon /></span>
              <span className="pm__text">
                <span className="pm__title">{link.title}</span>
                <span className="pm__sub">{link.subtitle}</span>
              </span>
              <svg className="pm__arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
              </svg>
            </Row>
          </li>
        ))}
      </ul>
    </div>
  );
}
