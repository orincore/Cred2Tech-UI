import './scheme-engine.css';

const TRUST = [
  {
    title: 'Enterprise-Level Security',
    desc: 'Advanced protection with encryption and strict access controls.',
    tone: 'blue',
    Icon: ShieldCheckIcon,
  },
  {
    title: 'Intelligence Engine',
    desc: 'AI-powered matching and expert-verified scheme mapping.',
    tone: 'green',
    Icon: BrainIcon,
  },
  {
    title: 'Expert Network',
    desc: 'Pan-India experts with domain knowledge and scheme expertise.',
    tone: 'blue',
    Icon: NetworkIcon,
  },
  {
    title: 'Always Up to Date',
    desc: 'Schemes and rules are updated regularly for accuracy.',
    tone: 'green',
    Icon: RefreshClockIcon,
  },
  {
    title: 'End-to-End Support',
    desc: 'From discovery to application and disbursement.',
    tone: 'blue',
    Icon: FlagIcon,
  },
];

export function SchemeEngine() {
  return (
    <section id="scheme-engine" className="se">
      <div className="container">
        <header className="se__head">
          <h2 className="se__title">
            Discover Government Schemes
            <span>Your Business Qualifies For.</span>
          </h2>
          <p className="se__sub">
            Cred2Tech&rsquo;s MSME Scheme Engine finds the right government schemes for your
            business and helps you avail them.
          </p>
        </header>

        <div className="se__steps">
          {/* Step 1 */}
          <article className="se__card">
            <header className="se__card-head">
              <span className="se__num se__num--blue">1</span>
              <h3>We Fetch Relevant Business Data</h3>
            </header>
            <p className="se__card-desc">We securely pull your business data from verified sources.</p>
            <div className="se__scene se__scene--fetch">
              <img src="/illustrations/scheme-fetch.png" alt="A business owner working on a laptop while data is fetched" loading="lazy" />
              <div className="se__chips">
                <div className="se__chip">
                  <span className="se__chip-icon"><IdCardIcon /></span>
                  <b>PAN</b>
                  <CheckCircle />
                </div>
                <div className="se__chip">
                  <span className="se__chip-icon"><StampIcon /></span>
                  <b>GST</b>
                  <CheckCircle />
                </div>
              </div>
            </div>
            <div className="se__foot se__foot--blue">
              <span className="se__foot-icon"><ShieldLockSm /></span>
              <p>Your data is secure,<br />consent-based and encrypted.</p>
            </div>
          </article>

          <span className="se__arrow se__arrow--blue" aria-hidden="true"><ArrowGlyph /></span>

          {/* Step 2 */}
          <article className="se__card">
            <header className="se__card-head">
              <span className="se__num se__num--green">2</span>
              <h3>We Discover Schemes You Qualify For</h3>
            </header>
            <p className="se__card-desc">
              Our AI intelligence engine matches your business profile with relevant government schemes.
            </p>
            <div className="se__scene">
              <img src="/illustrations/scheme-discover.png" alt="A magnifying glass finding matching government schemes" loading="lazy" />
            </div>
            <div className="se__foot se__foot--green">
              <span className="se__foot-icon"><GiftIcon /></span>
              <p>Relevant schemes.<br />Personalized for your business.</p>
            </div>
          </article>

          <span className="se__arrow se__arrow--green" aria-hidden="true"><ArrowGlyph /></span>

          {/* Step 3 */}
          <article className="se__card">
            <header className="se__card-head">
              <span className="se__num se__num--purple">3</span>
              <h3>Explore &amp; Avail with Expert Support</h3>
            </header>
            <p className="se__card-desc">
              Compare benefits, understand requirements, and get expert guidance to apply successfully.
            </p>
            <div className="se__scene se__scene--full">
              <img src="/illustrations/scheme-support.png" alt="An expert guiding a business owner through scheme applications" loading="lazy" />
            </div>
            <div className="se__foot se__foot--purple">
              <span className="se__foot-icon"><HeadsetIcon /></span>
              <p>Complete support at every step.<br />From application to approval.</p>
            </div>
          </article>
        </div>

        <div className="se__divider">
          <span>Built with Technology. Backed by Experts. Trusted by MSMEs.</span>
        </div>

        <div className="se__trust">
          {TRUST.map((t) => (
            <div className="se__trust-cell" key={t.title}>
              <span className={`se__trust-icon tone-${t.tone}`}><t.Icon /></span>
              <div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
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

function CheckCircle() {
  return (
    <svg className="se__check" viewBox="0 0 24 24" fill="none" stroke="#1a9e50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.3 12.3 2.5 2.5 4.9-5.6" />
    </svg>
  );
}

function IdCardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <circle cx="8.5" cy="11" r="1.9" />
      <path d="M5.8 15.8c.6-1.5 1.6-2.2 2.7-2.2s2.1.7 2.7 2.2M14 9.5h4.5M14 13h4.5" />
    </svg>
  );
}

function StampIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3.2 13.9 5l2.6-.5.5 2.6 2.4 1.1-1 2.4 1.6 2.1-2 1.7.1 2.6-2.6.3-1.3 2.3-2.2-1.4-2.2 1.4-1.3-2.3-2.6-.3.1-2.6-2-1.7L5.6 10.6l-1-2.4L7 7.1l.5-2.6 2.6.5L12 3.2Z" />
      <circle cx="12" cy="11.8" r="3.2" />
    </svg>
  );
}

function ShieldLockSm() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5 4.5 5.5v5.5c0 4.3 3 7.7 7.5 8.9 4.5-1.2 7.5-4.6 7.5-8.9V5.5L12 2.5Z" />
      <path d="M9.8 11.5v-1.6a2.2 2.2 0 0 1 4.4 0v1.6" />
      <rect x="8.8" y="11.5" width="6.4" height="4.6" rx="1.2" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#1a9e50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="8" width="16" height="4" rx="1" />
      <path d="M5.5 12v7.5h13V12M12 8v11.5M12 8s-3.8.2-4.7-1.6C6.7 5.2 8 3.8 9.3 4.2c1.6.5 2.7 3.8 2.7 3.8Zm0 0s3.8.2 4.7-1.6c.6-1.2-.7-2.6-2-2.2C13.1 4.7 12 8 12 8Z" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 13.5v-2a7.5 7.5 0 0 1 15 0v2" />
      <rect x="3.5" y="12.5" width="4" height="6" rx="1.8" />
      <rect x="16.5" y="12.5" width="4" height="6" rx="1.8" />
      <path d="M18.5 18.5c0 1.8-1.5 2.8-3.5 2.8h-1.5" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5 4.5 5.5v5.5c0 4.3 3 7.7 7.5 8.9 4.5-1.2 7.5-4.6 7.5-8.9V5.5L12 2.5Z" />
      <path d="m8.8 11.6 2.2 2.3 4.2-4.8" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.5 4.5A2.7 2.7 0 0 0 6 7a2.8 2.8 0 0 0-1.8 3.4A2.9 2.9 0 0 0 4 15a2.8 2.8 0 0 0 2.4 3.6A2.7 2.7 0 0 0 11 20V6.3a2.6 2.6 0 0 0-1.5-1.8Z" />
      <path d="M14.5 4.5A2.7 2.7 0 0 1 18 7a2.8 2.8 0 0 1 1.8 3.4A2.9 2.9 0 0 1 20 15a2.8 2.8 0 0 1-2.4 3.6A2.7 2.7 0 0 1 13 20V6.3a2.6 2.6 0 0 1 1.5-1.8Z" />
      <path d="M11 10H8.5M11 14.5H8M13 8.5h2.8M13 13h3" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="6.5" r="2.6" />
      <circle cx="6" cy="16.5" r="2.3" />
      <circle cx="18" cy="16.5" r="2.3" />
      <path d="M10.3 8.6 7.2 14.4M13.7 8.6l3.1 5.8M8.3 16.5h7.4" />
    </svg>
  );
}

function RefreshClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3" />
      <path d="M19.7 3.5v3.4h-3.4" />
      <path d="M12 8.5V12l2.6 1.6" />
    </svg>
  );
}

function FlagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5.5 21V3.8" />
      <path d="M5.5 4.5c4.5-2.3 8.5 2.1 13 0v9c-4.5 2.1-8.5-2.3-13 0" />
    </svg>
  );
}
