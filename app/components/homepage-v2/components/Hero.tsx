import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import './hero.css';

const SOLUTIONS = [
  {
    id: 'loan',
    tone: 'blue',
    title: 'Instant Loan Eligibility Check',
    desc: 'Check loan eligibility in real-time across multiple lenders.',
    Tile: GaugeTile,
    href: '#lender-flow',
  },
  {
    id: 'crm',
    tone: 'purple',
    title: 'Virtual Workspace',
    desc: 'Manage leads, track applications end to end.',
    Tile: CrmTile,
    href: '#partner-workspace',
  },
  {
    id: 'scheme',
    tone: 'green',
    title: 'Government Scheme Discovery',
    desc: 'Find and explore the best matching schemes for your customers.',
    Tile: GovTile,
    href: '#scheme-engine',
  },
] as const;

const TRUST = [
  {
    tone: 'blue',
    title: 'Secure',
    desc: 'Your data is encrypted and always protected.',
    Icon: LockBadge,
  },
  {
    tone: 'green',
    title: 'Private',
    desc: 'You are in control. We respect your privacy.',
    Icon: ShieldBadge,
  },
  {
    tone: 'purple',
    title: 'Compliant',
    desc: 'Built with regulatory standards and best practices.',
    Icon: ClipboardBadge,
  },
  {
    tone: 'blue',
    title: 'Better Outcomes',
    desc: 'More opportunities for you. More value for your customers.',
    Icon: ChartBadge,
  },
] as const;

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const target = document.querySelector(href);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const playedIntro = useRef(false);

  useEffect(() => {
    if (!rootRef.current || playedIntro.current) return;
    playedIntro.current = true;
    const els = rootRef.current.querySelectorAll('.hero__reveal');
    animate(els, {
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 680,
      delay: stagger(70, { start: 120 }),
      ease: 'outExpo',
    });
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero__inner" ref={rootRef}>
        <div className="container hero__head">
          <h1 className="hero__title hero__reveal">
            One Platform. Three Powerful Solutions.
            <span className="hero__title-accent">More Opportunities. Better Outcomes.</span>
          </h1>
        
        </div>

        <div className="container">
          <div className="hero__flow">
            <aside className="hero__side hero__side--partner hero__reveal">
              <div className="hero__side-head">
                <h2 className="hero__side-title">Sourcing<br />Partner</h2>
                <span className="hero__side-badge">
                  <PartnerGlyph />
                </span>
              </div>
              <p className="hero__side-desc">
                Empowering partners to serve more customers, better and faster.
              </p>
              <div className="hero__side-art">
                <img
                  src="/illustrations/partner-3d.png"
                  alt="Cred2Tech partner dashboard on a laptop, surrounded by finance widgets"
                  loading="lazy"
                />
              </div>
            </aside>

            <FlowLines variant="in" />

            <div className="hero__stack">
              {SOLUTIONS.map((s) => (
                <a
                  href={s.href}
                  onClick={(e) => scrollToSection(e, s.href)}
                  className={`hero__solution hero__reveal tone-${s.tone}`}
                  key={s.id}
                >
                  <span className="hero__solution-tile">
                    <s.Tile />
                  </span>
                  <div className="hero__solution-copy">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                  <svg className="hero__solution-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m9 5.5 6.5 6.5L9 18.5" />
                  </svg>
                </a>
              ))}
            </div>

            <FlowLines variant="out" />

            <aside className="hero__side hero__side--customer hero__reveal">
              <div className="hero__side-head">
                <div>
                  <h2 className="hero__side-title">Customer</h2>
                </div>
                <span className="hero__side-badge hero__side-badge--green">
                  <CustomerGlyph />
                </span>
              </div>
              <p className="hero__side-desc">
                Get the right options and schemes that truly fit your needs.
              </p>
              <div className="hero__side-art">
                <img
                  src="/illustrations/customer-3d.png"
                  alt="Loan approved on the Cred2Tech customer app beside a model house"
                  loading="lazy"
                />
              </div>
            </aside>
          </div>
        </div>

        <div className="container">
          <ul className="hero__trust hero__reveal">
            {TRUST.map((t) => (
              <li className={`hero__trust-item tone-${t.tone}`} key={t.title}>
                <t.Icon />
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/**
 * The elbow connectors around the solution stack.
 *
 * "in" (left): three origin dots on the partner card fan out to all three
 * solution cards, arrowheads landing on the solution stack. "out" (right):
 * mirrors this — the origin dots sit on the customer card and all three
 * arrowheads land back on the solution stack, so the diagram reads as
 * "these three solutions" rather than pointing at the customer card.
 * The column is measured with a ResizeObserver and drawn as exact-pixel
 * SVG paths so the animated dashes flow smoothly around the elbows.
 */
function FlowLines({ variant }: { variant: 'in' | 'out' }) {
  const ref = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setDims({ w: el.clientWidth, h: el.clientHeight });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { w, h } = dims;
  const c1 = (h - 36) / 6; // vertical center of solution card 1 (and mirrored, card 3)
  const c3 = h - c1;
  const xt = Math.min(46, Math.round(w * 0.55)); // where the elbows turn
  const xEnd = w - 9; // leave room for the arrowhead

  // An elbow path origin -> turn -> destination with rounded corners.
  const elbow = (y0: number, y1: number) => {
    const r = Math.min(10, Math.abs(y1 - y0) / 2);
    const d = y1 > y0 ? 1 : -1;
    return `M0 ${y0} H${xt - r} Q${xt} ${y0} ${xt} ${y0 + r * d} V${y1 - r * d} Q${xt} ${y1} ${xt + r} ${y1} H${xEnd}`;
  };

  // Rightward arrowhead, tip at the far edge (x=w) — used on the "in" side
  // so the arrow lands pointing at the solution stack.
  const arrowRight = (y: number) => `${xEnd},${y - 5.2} ${w},${y} ${xEnd},${y + 5.2}`;
  // Leftward arrowhead, tip at x=0 — used on the "out" side so the arrow
  // also lands pointing at the solution stack, just approaching from the
  // customer side instead.
  const arrowLeft = (y: number) => `9,${y - 5.2} 0,${y} 9,${y + 5.2}`;

  // Row order top -> bottom: blue (loan), purple (virtual workspace), green
  // (government scheme) — the middle row is always the straight line.
  const lines =
    variant === 'in'
      ? [
          { tone: 'b', d: elbow(h * 0.45, c1), originY: h * 0.45, tipY: c1 },
          { tone: 'p', d: `M0 ${h / 2} H${xEnd}`, originY: h / 2, tipY: h / 2 },
          { tone: 'g', d: elbow(h * 0.55, c3), originY: h * 0.55, tipY: c3 },
        ]
      : [
          { tone: 'b', d: elbow(c1, h * 0.45), originY: h * 0.45, tipY: c1 },
          { tone: 'p', d: `M0 ${h / 2} H${xEnd}`, originY: h / 2, tipY: h / 2 },
          { tone: 'g', d: elbow(c3, h * 0.55), originY: h * 0.55, tipY: c3 },
        ];

  const originX = variant === 'in' ? 2.5 : w - 2.5;
  const arrow = variant === 'in' ? arrowRight : arrowLeft;

  return (
    <div className={`hero__conn hero__conn--${variant}`} ref={ref} aria-hidden="true">
      {w > 0 && h > 0 && (
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
          {lines.map((l) => (
            <g key={l.tone} className={`hero__conn-line hero__conn-line--${l.tone}`}>
              <path className="hero__conn-path" d={l.d} />
              <circle className="hero__conn-mark" cx={originX} cy={l.originY} r="3.5" />
              <polygon className="hero__conn-mark" points={arrow(l.tipY)} />
            </g>
          ))}
        </svg>
      )}
    </div>
  );
}

/* ── Solution tile glyphs ─────────────────────────────────────── */

function GaugeTile() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="23" cy="24" r="14.5" fill="#fff" stroke="#2563eb" strokeWidth="3" />
      <path d="M13.5 17.5a11.5 11.5 0 0 1 19 0" stroke="#93b4f8" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M23 24l6.4-7.4" stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" />
      <circle cx="23" cy="24" r="3" fill="#1d4ed8" />
      <circle cx="35.5" cy="36" r="7.5" fill="#2563eb" stroke="#fff" strokeWidth="2.5" />
      <path d="m32.4 36 2.2 2.3 4-4.6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GovTile() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 5v4" stroke="#0e7f4a" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 5h6.5v3.5H24z" fill="#0e7f4a" />
      <path d="M8.5 20 24 9.5 39.5 20z" fill="#149a58" />
      <rect x="9" y="20.5" width="30" height="3" rx="1" fill="#0e7f4a" />
      <rect x="12" y="25.5" width="4.2" height="11" rx="1.2" fill="#149a58" />
      <rect x="19.2" y="25.5" width="4.2" height="11" rx="1.2" fill="#149a58" />
      <rect x="26.4" y="25.5" width="4.2" height="11" rx="1.2" fill="#149a58" />
      <rect x="33.6" y="25.5" width="4.2" height="11" rx="1.2" fill="#149a58" />
      <rect x="8" y="38.5" width="32" height="4" rx="1.5" fill="#0e7f4a" />
    </svg>
  );
}

function CrmTile() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="8" width="36" height="32" rx="5" fill="#fff" stroke="#d9cdf9" strokeWidth="1.5" />
      <path d="M6 13a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v4H6z" fill="#6a3de8" />
      <circle cx="12" cy="12.5" r="1.4" fill="#fff" opacity="0.9" />
      <circle cx="16.6" cy="12.5" r="1.4" fill="#fff" opacity="0.9" />
      <circle cx="21.2" cy="12.5" r="1.4" fill="#fff" opacity="0.9" />
      <circle cx="16" cy="26.5" r="5.2" fill="#6a3de8" />
      <circle cx="16" cy="25" r="1.9" fill="#fff" />
      <path d="M12.6 29.6c.7-1.7 1.9-2.6 3.4-2.6s2.7.9 3.4 2.6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="25" y="22.5" width="13" height="2.8" rx="1.4" fill="#c9b6f8" />
      <rect x="25" y="27.8" width="9.5" height="2.8" rx="1.4" fill="#e2d8fc" />
      <rect x="11" y="34.5" width="26" height="2.8" rx="1.4" fill="#efe9fd" />
    </svg>
  );
}

/* ── Side-card badges ─────────────────────────────────────────── */

function PartnerGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10" cy="8" r="3.4" />
      <path d="M4 19.5c.9-3.6 3.3-5.4 6-5.4 1.5 0 2.9.5 4 1.6" />
      <path d="M17.5 14.5v5M15 17h5" />
    </svg>
  );
}

function CustomerGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#149a58" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20c1.2-4 4-6.2 7.5-6.2s6.3 2.2 7.5 6.2" />
    </svg>
  );
}

/* ── Trust badges ─────────────────────────────────────────────── */

function LockBadge() {
  return (
    <svg className="hero__trust-icon" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <path d="M14 20v-5a8 8 0 0 1 16 0v5" stroke="#2563eb" strokeWidth="3.2" strokeLinecap="round" />
      <rect x="10" y="19" width="24" height="18" rx="4.5" fill="#2563eb" />
      <circle cx="22" cy="26.5" r="2.8" fill="#fff" />
      <rect x="20.8" y="27.5" width="2.4" height="5" rx="1.2" fill="#fff" />
    </svg>
  );
}

function ShieldBadge() {
  return (
    <svg className="hero__trust-icon" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <path d="M22 4 8 9.5v9c0 8.2 5.6 14.5 14 16.7 8.4-2.2 14-8.5 14-16.7v-9L22 4Z" fill="#149a58" />
      <path d="m15.5 21.5 4.4 4.5 8.6-9.5" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClipboardBadge() {
  return (
    <svg className="hero__trust-icon" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="9" y="7" width="26" height="32" rx="4.5" fill="#6a3de8" />
      <rect x="16" y="4" width="12" height="6" rx="2.4" fill="#4f27bd" />
      <rect x="14.5" y="15" width="15" height="3" rx="1.5" fill="#fff" opacity="0.85" />
      <rect x="14.5" y="21" width="11" height="3" rx="1.5" fill="#fff" opacity="0.6" />
      <circle cx="29.5" cy="31" r="6.4" fill="#fff" />
      <path d="m26.7 31 2 2.1 3.7-4.2" stroke="#6a3de8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChartBadge() {
  return (
    <svg className="hero__trust-icon" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="8" y="26" width="6" height="12" rx="1.8" fill="#2563eb" />
      <rect x="17.5" y="21" width="6" height="17" rx="1.8" fill="#2563eb" />
      <rect x="27" y="15" width="6" height="23" rx="1.8" fill="#2563eb" />
      <path d="M9 16 20 8.5l5.5 3.5L36 5" stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29.5 4.5H36V11" stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
