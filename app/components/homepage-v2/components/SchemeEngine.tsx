import { ScrollRevealText } from '../../ui/ScrollRevealText';
import { LockIcon, ShieldCheckIcon } from './HeroIcons';
import { BrainIcon, FlagIcon, GiftIcon, HeadsetIcon, NetworkIcon, RefreshClockIcon } from './SchemeEngineIcons';
import { SceneDiscover, SceneFetch, SceneSupport } from './SchemeEngineScenes';
import './scheme-engine.css';

/* "Discover Government Schemes Your Business Qualifies For." Same open language as the sections
   above: large type, three numbered steps joined by a dashed line with an open scene under each
   (no cards), then the five trust points as one numbered row. */

const STEPS = [
  {
    title: 'We Fetch Relevant Business Data',
    desc: 'We securely pull your business data from verified sources.',
    foot: ['Your data is secure,', 'consent-based and encrypted.'],
    Icon: LockIcon,
    Scene: SceneFetch,
  },
  {
    title: 'We Discover Schemes You Qualify For',
    desc: 'Our AI intelligence engine matches your business profile with relevant government schemes.',
    foot: ['Relevant schemes.', 'Personalized for your business.'],
    Icon: GiftIcon,
    Scene: SceneDiscover,
  },
  {
    title: 'Explore & Avail with Expert Support',
    desc: 'Compare benefits, understand requirements, and get expert guidance to apply successfully.',
    foot: ['Complete support at every step.', 'From application to approval.'],
    Icon: HeadsetIcon,
    Scene: SceneSupport,
  },
] as const;

const TRUST = [
  { title: 'Enterprise-Level Security', desc: 'Advanced protection with encryption and strict access controls.', Icon: ShieldCheckIcon },
  { title: 'Intelligence Engine', desc: 'AI-powered matching and expert-verified scheme mapping.', Icon: BrainIcon },
  { title: 'Expert Network', desc: 'Pan-India experts with domain knowledge and scheme expertise.', Icon: NetworkIcon },
  { title: 'Always Up to Date', desc: 'Schemes and rules are updated regularly for accuracy.', Icon: RefreshClockIcon },
  { title: 'End-to-End Support', desc: 'From discovery to application and disbursement.', Icon: FlagIcon },
] as const;

export function SchemeEngine() {
  return (
    <section id="scheme-engine" className="se" aria-label="Government scheme discovery">
      <div className="se__wrap">
        <header className="se__head">
          <p className="se__eyebrow"><span className="se__eyebrow-dot" aria-hidden="true" />Coming soon</p>
          <ScrollRevealText
            as="h2"
            className="se__title"
            parts={[{ text: 'Discover Government Schemes' }, { text: 'Your Business Qualifies For.', className: 'se__accent' }]}
          />
          <p className="se__lead">
            Cred2Tech&rsquo;s MSME Scheme Engine finds the right{' '}
            <strong>government schemes</strong> for your business and helps you avail them.
          </p>
        </header>

        <ol className="se__steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="se__step">
              <div className="se__step-top">
                <span className="se__step-n">0{i + 1}</span>
                <span className="se__step-line" aria-hidden="true" />
              </div>
              <div className="se__step-copy">
                <h3>{s.title}</h3>
                <p className="se__step-desc">{s.desc}</p>
              </div>
              <div className="se__scene"><s.Scene /></div>
              <p className="se__foot">
                <s.Icon className="se__foot-ico" />
                <span><b>{s.foot[0]}</b>{s.foot[1]}</span>
              </p>
            </li>
          ))}
        </ol>

        <div className="se__trust">
          <p className="se__trust-title">Built with Technology. Backed by Experts. Trusted by MSMEs.</p>
          <ul className="se__trust-row">
            {TRUST.map((t) => (
              <li key={t.title} className="se__trust-item">
                <t.Icon className="se__trust-ico" />
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
