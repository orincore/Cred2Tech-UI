/* Panels of the hero's product dashboard. All of them are on screen together and play their
   motion at the same time (hero-dashboard.css); the resting style is the finished picture.
   Values are sample data that illustrate the product UI. */

import { NumberTicker } from '../../ui/spectrum/NumberTicker';
import { CheckIcon, GaugeIcon, KanbanIcon, LandmarkIcon, XIcon } from './HeroIcons';

const k = (i: number) => ({ ['--k' as string]: i });

export function DashEligibility() {
  const lenders = [
    { name: 'Lender 1', s: 0.92, ok: true },
    { name: 'Lender 2', s: 0.81, ok: true },
    { name: 'Lender 3', s: 0.7, ok: true },
    { name: 'Lender 4', s: 0.36, ok: false },
  ];
  return (
    <section className="dp dp--elig" data-node="panel" data-tone="blue">
      <header className="dp__head">
        <span className="dp__title"><GaugeIcon className="dp__icon" />Loan eligibility</span>
        <span className="dp__meta"><NumberTicker value={2500000} prefix="₹" groupIndian delay={1} /></span>
      </header>
      <ul className="de">
        {lenders.map((l, i) => (
          <li key={l.name} style={k(i)}>
            <span className="de__name">{l.name}</span>
            <span className="de__bar"><span className={l.ok ? '' : 'is-low'} style={{ ['--s' as string]: l.s }} /></span>
            <span className={`dtag ${l.ok ? 'dtag--ok' : 'dtag--no'}`}>{l.ok ? 'Eligible' : 'Not eligible'}</span>
            <span className={`de__mark ${l.ok ? 'is-ok' : 'is-no'}`}>{l.ok ? <CheckIcon /> : <XIcon />}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function DashPipeline() {
  const cols = [
    { name: 'Documents', n: 21, card: 'LAP · ₹60L' },
    { name: 'With lender', n: 16, card: 'TL · ₹18L' },
    { name: 'Sanctioned', n: 9, card: 'OD · ₹10L' },
  ];
  return (
    <section className="dp dp--work" data-node="panel" data-tone="ink">
      <header className="dp__head">
        <span className="dp__title"><KanbanIcon className="dp__icon" />Virtual workspace</span>
        <span className="dp__meta">Pipeline</span>
      </header>
      <div className="dw">
        {cols.map((c, i) => (
          <div key={c.name} className="dw__col" style={k(i)}>
            <span className="dw__name"><span className="dw__label">{c.name}</span><i>{c.n}</i></span>
            <span className="dw__card">{c.card}</span>
          </div>
        ))}
        <span className="dw__mover" aria-hidden="true">
          <b>WC · ₹25L</b>
          <span className="dw__state"><em>Docs verified</em><em>With lender</em><em>Sanctioned</em></span>
        </span>
      </div>
    </section>
  );
}

export function DashSchemes() {
  const schemes = [
    { name: 'CGTMSE', d: 'Credit guarantee', ok: true },
    { name: 'MSME ZED', d: 'Certification subsidy', ok: true },
    { name: 'Stand-Up India', d: 'Check criteria', ok: false },
    { name: 'State capital subsidy', d: 'Rules differ by state', ok: true },
  ];
  return (
    <section className="dp dp--scheme" data-node="panel" data-tone="green">
      <header className="dp__head">
        <span className="dp__title"><LandmarkIcon className="dp__icon" />Govt schemes</span>
        <span className="dp__meta">3 matched</span>
      </header>
      <ul className="ds">
        {schemes.map((s, i) => (
          <li key={s.name} style={k(i)}>
            <span className={`ds__mark${s.ok ? '' : ' is-open'}`}>{s.ok && <CheckIcon />}</span>
            <span className="ds__copy"><b>{s.name}</b><span>{s.d}</span></span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function DashKpis() {
  return (
    <div className="dk">
      <div className="dk__tile">
        <span className="dk__label">Applications in progress</span>
        <NumberTicker value={128} delay={1.1} className="dk__value" />
      </div>
      <div className="dk__tile">
        <span className="dk__label">Eligibility checks today</span>
        <NumberTicker value={36} delay={1.2} className="dk__value" />
      </div>
      <div className="dk__tile dk__tile--chart">
        <span className="dk__label">Sanctioned this quarter</span>
        <span className="dk__value"><NumberTicker value={42} prefix="₹" delay={1.3} /><small> Cr</small></span>
        <svg className="dk__spark" viewBox="0 0 120 36" preserveAspectRatio="none" aria-hidden="true">
          <path className="dk__spark-area" d="M0 30 L15 26 L30 28 L45 20 L60 22 L75 14 L90 16 L105 8 L120 4 L120 36 L0 36 Z" />
          <path className="dk__spark-line" d="M0 30 L15 26 L30 28 L45 20 L60 22 L75 14 L90 16 L105 8 L120 4" />
        </svg>
      </div>
    </div>
  );
}
