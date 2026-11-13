import { useEffect, useRef, useState } from 'react';
import './lender-flow.css';

const OFFERS = [
  { name: 'Lender 1', badge: 'Eligible', product: 'LAP', risk: false, amount: '₹200 Lakh', rate: '8%*' },
  { name: 'Lender 2', badge: 'Eligible', product: 'LAP', risk: false, amount: '₹200 Lakh', rate: '8.25%*' },
  { name: 'Lender 3', badge: 'Eligible', product: 'LAP', risk: false, amount: '₹190 Lakh', rate: '8.5%*' },
  { name: 'Lender 4', badge: 'Eligible', product: 'LAP', risk: false, amount: '₹180 Lakh', rate: '8.75%*' },
  { name: 'Lender 5', badge: 'Eligible', product: 'LAP', risk: false, amount: '₹170 Lakh', rate: '8.25%*' },
];

const FEATS = [
  { label: ['Secure', 'Pooling'], Icon: ShieldCheckSm },
  { label: ['Advanced', 'Analytics'], Icon: BarsSm },
  { label: ['Smart', 'Matching'], Icon: FunnelSm },
  { label: ['Best-fit', 'Results'], Icon: TargetSm },
];

const HELP = [
  {
    tone: 'blue',
    title: 'For Sourcing Partners',
    items: ['Save time', 'More lender options', 'Higher success & earnings'],
    Icon: PersonBadge,
  },
  {
    tone: 'green',
    title: 'For Clients',
    items: ['One-time data sharing', 'More choices', 'Better rates & approvals'],
    Icon: PersonBadge,
  },
  {
    tone: 'purple',
    title: 'For Lenders',
    items: ['Quality leads', 'Verified data', 'Higher conversions'],
    Icon: BankBadge,
  },
];

export function LenderFlow() {
  return (
    <section id="lender-flow" className="lf">
      <div className="container">
        <div className="lf__head">
          <h2 className="lf__title">
            Multi-Lender Eligibility.
            <span>Minutes Away.</span>
          </h2>
          <span className="lf__rule lf__rule--l" aria-hidden="true" />
          <span className="lf__rule lf__rule--r" aria-hidden="true" />
        </div>

        <div className="lf__steps">
          {/* Step 1 */}
          <article className="lf__card">
            <header className="lf__card-head lf__card-head--navy">
              <span className="lf__num">1</span>
              Partner Onboards Client
            </header>
            <img
              className="lf__photo"
              src="/illustrations/onboard-photo.png"
              alt="A sourcing partner walking a client through onboarding on a tablet"
              loading="lazy"
            />
            <div className="lf__duo">
              <div className="lf__duo-item">
                <PeopleIcon />
                <span>Understand<br />client needs</span>
              </div>
              <div className="lf__duo-item">
                <ConsentIcon />
                <span>Obtain<br />Client&rsquo;s Consent</span>
              </div>
            </div>
          </article>

          <span className="lf__arrow lf__arrow--blue" aria-hidden="true">
            <ArrowGlyph />
          </span>

          {/* Step 2 */}
          <article className="lf__card">
            <header className="lf__card-head lf__card-head--blue">
              <span className="lf__num">2</span>
              Cred2Tech Platform Pools &amp; Analyzes Data
            </header>
            <div className="lf__pool">
              <PoolLinks />
              <div className="lf__chip lf__chip--gst"><GstIcon /><span>GST</span></div>
              <div className="lf__chip lf__chip--pan"><PanIcon /><span>PAN</span></div>
              <div className="lf__chip lf__chip--itr"><ItrIcon /><span>ITR</span></div>
              <div className="lf__chip lf__chip--bank"><BankIcon /><span>Bank Statement</span></div>
              <div className="lf__chip lf__chip--bureau"><BureauIcon /><span>Bureau</span></div>
              <img className="lf__vault" src="/illustrations/server.png" alt="" loading="lazy" />
            </div>
            <ul className="lf__feats">
              {FEATS.map((f) => (
                <li key={f.label[0]}>
                  <f.Icon />
                  <span>{f.label[0]}<br />{f.label[1]}</span>
                </li>
              ))}
            </ul>
          </article>

          <span className="lf__arrow lf__arrow--green" aria-hidden="true">
            <ArrowGlyph />
          </span>

          {/* Step 3 */}
          <article className="lf__card">
            <header className="lf__card-head lf__card-head--green">
              <span className="lf__num">3</span>
              Platform Shows Eligible Lenders
            </header>
            <div className="lf__offers">
              <div className="lf__offers-top">
                <h3>Eligible Lenders &amp; Offers</h3>
                <span className="lf__sort">Sorted by Best Match <StarIcon /></span>
              </div>
              <div className="lf__offer-list">
                {OFFERS.slice(0, 3).map((o, i) => (
                  <div className={`lf__offer ${i === 0 ? 'lf__offer--top' : ''}`} key={o.name}>
                    <span className="lf__offer-bank"><BankGreenIcon /></span>
                    <span className="lf__offer-info">
                      <span className="lf__offer-name">{o.name}</span>
                      <span className="lf__offer-tags">
                        <em className="lf__offer-badge">{o.badge}</em>
                        <i className={`lf__offer-product ${o.risk ? 'is-risk' : ''}`}>{o.product}</i>
                      </span>
                    </span>
                    <span className="lf__offer-terms">
                      <span className="lf__offer-term">
                        <small>Up to</small>
                        <b>{o.amount}</b>
                      </span>
                      <span className="lf__offer-term">
                        <small>Rate</small>
                        <b>{o.rate}</b>
                      </span>
                    </span>
                    <ChevronRight />
                  </div>
                ))}
              </div>
              <button type="button" className="lf__viewall">
                View All Lenders &amp; Offers <ChevronDown />
              </button>
            </div>
          </article>
        </div>

        <div className="lf__help">
          <span className="lf__help-title">How It Helps Everyone</span>
          {HELP.map((h) => (
            <div className={`lf__help-cell tone-${h.tone}`} key={h.title}>
              <span className={`lf__help-icon lf__help-icon--${h.tone}`}><h.Icon /></span>
              <div>
                <h4>{h.title}</h4>
                <ul>
                  {h.items.map((it) => (
                    <li key={it}><CheckSm />{it}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="lf__help-cell tone-secure">
            <span className="lf__help-shield"><ShieldLockIcon /></span>
            <div>
              <h4>Secure. Private. Compliant.</h4>
              <p>Data is collected on authentication and is always protected</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lf__base" aria-hidden="true" />
    </section>
  );
}

/**
 * Dotted data streams from the document chips into the central vault.
 * The pool box is measured (both width and height, via ResizeObserver) so
 * the curves keep anchoring to the chip slots — which are placed with
 * percentage offsets in CSS — no matter how tall or short the section
 * ends up being on a given screen.
 */
function PoolLinks() {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setW(el.clientWidth);
      setH(el.clientHeight);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const cx = w / 2;
  const curve = (x0: number, y0: number, x1: number, y1: number) => {
    const bend = (x1 - x0) / 2.5;
    return `M${x0} ${y0} C${x0 + bend} ${y0}, ${x1 - bend} ${y1}, ${x1} ${y1}`;
  };

  // y-fractions mirror the .lf__chip--* top percentages in CSS.
  const links = [
    curve(108, 0.13 * h, cx - 74, 0.33 * h),
    curve(108, 0.45 * h, cx - 78, 0.5 * h),
    curve(108, 0.78 * h, cx - 74, 0.67 * h),
    curve(w - 108, 0.3 * h, cx + 74, 0.4 * h),
    curve(w - 108, 0.63 * h, cx + 74, 0.6 * h),
  ];

  return (
    <div className="lf__pool-links" ref={ref} aria-hidden="true">
      {w > 0 && h > 0 && (
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
          {links.map((d, i) => (
            <path key={i} className="lf__link" d={d} />
          ))}
        </svg>
      )}
    </div>
  );
}

/* ── Icons ────────────────────────────────────────────────────── */

function ArrowGlyph() {
  return (
    <svg viewBox="0 0 44 36" fill="currentColor" aria-hidden="true">
      <path d="M2 13h22V4l18 14-18 14v-9H2z" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#2144cf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8.5" r="2.8" />
      <path d="M3.5 18.5c.8-3 3-4.6 5.5-4.6s4.7 1.6 5.5 4.6" />
      <circle cx="16.5" cy="9" r="2.3" />
      <path d="M16.8 14.2c1.9.4 3.3 1.8 3.9 4" />
    </svg>
  );
}

function ConsentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#2144cf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5 4.5 5.5v5.5c0 4.3 3 7.7 7.5 8.9 4.5-1.2 7.5-4.6 7.5-8.9V5.5L12 2.5Z" />
      <circle cx="12" cy="9.5" r="2.2" />
      <path d="M8.8 15.5c.7-1.7 1.8-2.5 3.2-2.5s2.5.8 3.2 2.5" />
    </svg>
  );
}

function GstIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 3h9l3 3v15H6z" />
      <path d="M15 3v3h3" />
      <rect x="8.5" y="12" width="7" height="5" rx="1" />
      <path d="M9.5 8.5h5" />
    </svg>
  );
}

function PanIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <circle cx="8.5" cy="11" r="1.9" />
      <path d="M5.8 15.8c.6-1.5 1.6-2.2 2.7-2.2s2.1.7 2.7 2.2M14 9.5h4.5M14 13h4.5" />
    </svg>
  );
}

function ItrIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 3h9l3 3v15H6z" />
      <path d="M15 3v3h3" />
      <path d="M9.5 10h5M9.5 12.5h5M12 10c1.8 0 2.5 1 2.5 2.2 0 1.4-1 2.3-2.7 2.3l2.9 3" />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.5 9.5 12 4l8.5 5.5" />
      <path d="M5 9.5V18M9.7 9.5V18M14.3 9.5V18M19 9.5V18M3.5 18h17M3.5 20.5h17" />
    </svg>
  );
}

function BureauIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12.5" r="8" />
      <path d="M12 12.5 15.8 9" />
      <circle cx="12" cy="12.5" r="1.4" fill="currentColor" />
    </svg>
  );
}

function ShieldCheckSm() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#2144cf" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5 4.5 5.5v5.5c0 4.3 3 7.7 7.5 8.9 4.5-1.2 7.5-4.6 7.5-8.9V5.5L12 2.5Z" />
      <path d="m8.8 11.6 2.2 2.3 4.2-4.8" />
    </svg>
  );
}

function BarsSm() {
  return (
    <svg viewBox="0 0 24 24" fill="#2144cf" aria-hidden="true">
      <rect x="4" y="13" width="4" height="7" rx="1" />
      <rect x="10" y="9" width="4" height="11" rx="1" />
      <rect x="16" y="4.5" width="4" height="15.5" rx="1" />
    </svg>
  );
}

function FunnelSm() {
  return (
    <svg viewBox="0 0 24 24" fill="#2144cf" aria-hidden="true">
      <path d="M3.5 4h17l-6.6 8v6.5L10 21v-9L3.5 4Z" />
    </svg>
  );
}

function TargetSm() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#2144cf" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.8" />
      <circle cx="12" cy="12" r="1.4" fill="#2144cf" stroke="none" />
    </svg>
  );
}

function BankGreenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.5 9.5 12 4l8.5 5.5" />
      <path d="M5 9.5V18M9.7 9.5V18M14.3 9.5V18M19 9.5V18M3.5 18h17M3.5 20.5h17" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#2144cf" aria-hidden="true">
      <path d="m12 2.8 2.8 5.9 6.2.8-4.6 4.4 1.2 6.3L12 17.1l-5.6 3.1 1.2-6.3L3 9.5l6.2-.8L12 2.8Z" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="lf__chev" viewBox="0 0 24 24" fill="none" stroke="#2b62e9" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 5.5 6.5 6.5L9 18.5" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

function CheckSm() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#1f9d55" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

function PersonBadge() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="9" r="3.4" />
      <path d="M5.5 19.5c1.1-3.7 3.6-5.6 6.5-5.6s5.4 1.9 6.5 5.6" />
    </svg>
  );
}

function BankBadge() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 9.5 12 4.5l8 5" />
      <path d="M5.5 9.5V17M9.8 9.5V17M14.2 9.5V17M18.5 9.5V17M4 17h16M4 19.5h16" />
    </svg>
  );
}

function ShieldLockIcon() {
  return (
    <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <path d="M22 3.5 7.5 9v9.5c0 8.6 5.9 15.2 14.5 17.5 8.6-2.3 14.5-8.9 14.5-17.5V9L22 3.5Z" stroke="#2144cf" strokeWidth="2.6" strokeLinejoin="round" />
      <rect x="16" y="19" width="12" height="9.5" rx="2.2" fill="#2144cf" />
      <path d="M18.5 19v-2.5a3.5 3.5 0 0 1 7 0V19" stroke="#2144cf" strokeWidth="2.2" />
      <circle cx="22" cy="23.5" r="1.5" fill="#fff" />
    </svg>
  );
}
