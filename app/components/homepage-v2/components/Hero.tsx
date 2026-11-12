'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import { Fragment, useEffect, useRef, useState } from 'react';
import '../../ui/spectrum/spectrum.css';
import './hero.css';
import './hero-dashboard.css';
import { APP_URLS } from '../../../lib/app-urls';
import { ArrowIcon, ClipboardCheckIcon, LockIcon, ShieldCheckIcon, TrendingUpIcon } from './HeroIcons';
import { HeroDashboard } from './HeroDashboard';

/* Homepage hero, after tasteskill.dev, sized to exactly one screen: a centred column (headline,
   a Plus Jakarta Sans lead whose three services match the dashboard's colours, actions, trust line) and the
   product dashboard in a device frame, cropped by the bottom of the screen. */

const leadFont = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '600'], display: 'swap', variable: '--font-lead' });

type LeadPart = string | { text: string; tone: 'blue' | 'ink' | 'green' };
const LEAD: LeadPart[] = [
  { text: 'Check loan eligibility', tone: 'blue' },
  ' across lenders, ',
  { text: 'manage every application', tone: 'ink' },
  ' and ',
  { text: 'discover government schemes', tone: 'green' },
  '. One place for Sourcing Partners and MSMEs.',
];

const TRUST = [
  { title: 'Secure', Icon: LockIcon },
  { title: 'Private', Icon: ShieldCheckIcon },
  { title: 'Compliant', Icon: ClipboardCheckIcon },
  { title: 'Better outcomes', Icon: TrendingUpIcon },
] as const;

/* words blur in one after another; the three service phrases keep their colour and underline */
function Lead() {
  let w = 0;
  const words = (text: string) =>
    text.split(/(\s+)/).map((part, i) =>
      /^\s+$/.test(part) || part === '' ? part : <span key={i} className="hero__w" style={{ ['--w' as string]: w++ }}>{part}</span>,
    );
  return (
    <p className="hero__lead">
      {LEAD.map((part, i) =>
        typeof part === 'string' ? (
          <Fragment key={i}>{words(part)}</Fragment>
        ) : (
          <em key={i} className={`hero__key tone-${part.tone}`} style={{ ['--u' as string]: i }}>{words(part.text)}</em>
        ),
      )}
    </p>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [offscreen, setOffscreen] = useState(false);

  // loops rest when the hero is off screen or the tab is hidden
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setOffscreen(!e.isIntersecting));
    io.observe(el);
    const onVis = () => setOffscreen(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => { io.disconnect(); document.removeEventListener('visibilitychange', onVis); };
  }, []);

  // phones: parallax depth (hero.css); --p is how far the page has scrolled past the hero
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const phone = window.matchMedia('(max-width: 640px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0;

    const update = () => {
      raf = 0;
      if (!phone.matches || reduced.matches) {
        el.style.removeProperty('--p');
        delete el.dataset.covered;
        return;
      }
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / r.height));
      el.style.setProperty('--p', p.toFixed(3));
      if (p > 0.97) el.dataset.covered = '';
      else delete el.dataset.covered;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    phone.addEventListener('change', onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      phone.removeEventListener('change', onScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="top"
      className={`hero ${leadFont.variable}${offscreen ? ' is-still' : ''}`}
      aria-labelledby="hero-title"
    >
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__wrap">
        <h1 id="hero-title" className="hero__title" aria-label="One Platform. Three Powerful Solutions.">
          <span className="hero__line" aria-hidden="true"><span>One Platform.</span></span>
          <span className="hero__line hero__line--shine" aria-hidden="true"><span>Three Powerful Solutions.</span></span>
        </h1>

        <Lead />

        <div className="hero__actions hero__fade" style={{ ['--i' as string]: 2 }}>
          <a href={APP_URLS.partnerLogin} className="hero__btn hero__btn--primary">
            Start as a partner
          </a>
          <a href={APP_URLS.msmeLogin} className="hero__btn hero__btn--ghost">
            Check eligibility as an MSME
          </a>
        </div>

        <ul className="hero__trust hero__fade" style={{ ['--i' as string]: 3 }}>
          {TRUST.map((t) => (
            <li key={t.title}><t.Icon />{t.title}</li>
          ))}
        </ul>

        <div className="hero__stage">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
