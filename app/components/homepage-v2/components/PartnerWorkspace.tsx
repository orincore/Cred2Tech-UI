import './partner-workspace.css';

const FEATURES = [
  { title: 'Customer 360°', sub: 'Complete view of every customer', tone: 'lavender', Icon: UsersGlyph },
  { title: 'Loan Journey', sub: 'Track from lead to disbursement', tone: 'mint', Icon: LayersGlyph },
  { title: 'Multi-Lender', sub: 'Compare & manage multiple lenders', tone: 'amber', Icon: BankGlyph },
  { title: 'Earnings & Payouts', sub: 'Commissions, incentives & wallet', tone: 'blue', Icon: ShieldRupeeGlyph },
  { title: 'Team & Control', sub: 'Manage team, roles & performance', tone: 'pink', Icon: TeamGlyph },
  { title: 'Reports & Insights', sub: 'Powerful dashboards & analytics', tone: 'violet', Icon: BarsGlyph },
];

export function PartnerWorkspace() {
  return (
    <section id="partner-workspace" className="pw">
      <div className="container">
        <div className="pw__hero">
          <div className="pw__copy">
            <span className="pw__pill">Sourcing Partner Workspace</span>
            <h2 className="pw__title">
              Your Entire Business.
              <span>One Powerful Workspace.</span>
            </h2>
            <p className="pw__sub">
              Manage leads, track applications, collaborate with lenders and grow your earnings
              &mdash; all from one place.
            </p>
            <div className="pw__actions">
              <a href="https://app.cred2tech.com" target="_blank" rel="noopener noreferrer" className="pw__btn pw__btn--primary">
                Explore Workspace <ArrowRight />
              </a>
              <button type="button" className="pw__btn pw__btn--ghost">
                Watch Demo <PlayCircle />
              </button>
            </div>
          </div>

          <div className="pw__stage">
            <img src="/laptop-crm.png" alt="Cred2Tech dashboard showing pipeline management" className="pw__laptop-image" loading="lazy" />
          </div>
        </div>

        <div className="pw__features">
          {FEATURES.map((f) => (
            <div className="pw__feature" key={f.title}>
              <span className={`pw__feature-icon tone-${f.tone}`}>
                <f.Icon />
              </span>
              <h3>{f.title}</h3>
              <p>{f.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ── Icons ────────────────────────────────────────────────────── */

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12h15M13 5.5 19.5 12 13 18.5" />
    </svg>
  );
}

function PlayCircle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5 15.5 12 10 15.5V8.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function UsersGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="9" cy="8.2" r="3.4" />
      <path d="M2.8 19.2c.9-3.5 3.3-5.4 6.2-5.4s5.3 1.9 6.2 5.4H2.8Z" />
      <circle cx="16.8" cy="9" r="2.6" />
      <path d="M16.3 13.9c2.5.3 4.3 1.9 5 4.6h-4.1c-.3-1.9-1-3.4-2.1-4.5.4-.1.8-.1 1.2-.1Z" />
    </svg>
  );
}

function LayersGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3.5 8.5 4.5L12 12.5 3.5 8 12 3.5Z" />
      <path d="m3.5 12.5 8.5 4.5 8.5-4.5" />
      <path d="m3.5 16.5 8.5 4.5 8.5-4.5" />
    </svg>
  );
}

function ShieldRupeeGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5 4.5 5.5v5.5c0 4.3 3 7.7 7.5 8.9 4.5-1.2 7.5-4.6 7.5-8.9V5.5L12 2.5Z" />
      <path d="M9.5 8h5M9.5 10.6h5M9.5 8h1.6c1.5 0 2.4.9 2.4 2.6s-.9 2.6-2.4 2.6h-1l3.4 3.2" />
    </svg>
  );
}

function TeamGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="8.4" cy="8.6" r="3.2" />
      <path d="M2.5 19c.8-3.3 3-5.1 5.9-5.1s5.1 1.8 5.9 5.1H2.5Z" />
      <circle cx="16.6" cy="7.4" r="2.7" />
      <path d="M15.6 13.5c3 0 5.2 1.7 5.9 4.8h-5.2c-.4-2-1.3-3.6-2.7-4.6.6-.1 1.3-.2 2-.2Z" />
    </svg>
  );
}

function BarsGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="4" y="13" width="4" height="7" rx="1" />
      <rect x="10" y="9" width="4" height="11" rx="1" />
      <rect x="16" y="4.5" width="4" height="15.5" rx="1" />
    </svg>
  );
}

function BankGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.5 9.5 12 4l8.5 5.5" />
      <path d="M5 9.5V18M9.7 9.5V18M14.3 9.5V18M19 9.5V18M3.5 18h17M3.5 20.5h17" />
    </svg>
  );
}

