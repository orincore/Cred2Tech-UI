'use client';

import { useEffect, useState } from 'react';
import { NumberTicker } from '../../ui/spectrum/NumberTicker';
import { TextStates } from '../../ui/spectrum/TextStates';
import { CheckIcon, FileTextIcon, GaugeIcon, IdCardIcon, LandmarkIcon } from './HeroIcons';

/* The three scenes of the Lender-flow story. No cards: each is an open composition on the
   section's ground. A scene plays when it is active (lender-flow.css: [data-active]); values are
   sample data that illustrate the product. */

const k = (i: number) => ({ ['--k' as string]: i });

/* ── 1 · The partner onboards the client: consent on the client's phone ── */
export function SceneOnboard({ active }: { active: boolean }) {
  return (
    <div className="lfs lfs--onboard" data-active={active || undefined} aria-hidden="true">
      <p className="lfs-note lfs-note--a">
        <span className="lfs-note__tick"><CheckIcon /></span>
        Understand client needs
        <i className="lfs-note__lead" />
      </p>
      <p className="lfs-note lfs-note--b">
        <span className="lfs-note__tick"><CheckIcon /></span>
        Obtain client&apos;s consent
        <i className="lfs-note__lead" />
      </p>

      <div className="lfs-phone">
        <span className="lfs-phone__btn lfs-phone__btn--mute" />
        <span className="lfs-phone__btn lfs-phone__btn--up" />
        <span className="lfs-phone__btn lfs-phone__btn--down" />
        <span className="lfs-phone__btn lfs-phone__btn--power" />
        <div className="lfs-phone__screen">
          <span className="lfs-phone__notch" />
          <div className="lfs-phone__status">
            <b>9:41</b>
            <span className="lfs-phone__status-ico">
              <svg viewBox="0 0 16 10" fill="currentColor"><rect x="0" y="6" width="3" height="4" rx=".8" /><rect x="4.4" y="4" width="3" height="6" rx=".8" /><rect x="8.8" y="2" width="3" height="8" rx=".8" /><rect x="13.2" y="0" width="2.8" height="10" rx=".8" /></svg>
              <svg viewBox="0 0 24 11" fill="none" stroke="currentColor"><rect x=".5" y=".5" width="20" height="10" rx="3" /><rect x="2.5" y="2.5" width="14" height="6" rx="1.4" fill="currentColor" stroke="none" /><path d="M22.5 3.8v3.4" strokeLinecap="round" /></svg>
            </span>
          </div>
          <div className="lfs-phone__body">
            <p className="lfs-phone__brand">
              <img src="/logos/favicon.png" alt="" width={16} height={14} />
              Cred2Tech
            </p>
            <p className="lfs-phone__title">Share your business data for a loan check?</p>
            <ul className="lfs-phone__list">
              {['GST returns', 'PAN', 'ITR', 'Bank statements', 'Credit bureau'].map((d, i) => (
                <li key={d} style={k(i)}><CheckIcon />{d}</li>
              ))}
            </ul>
            <div className="lfs-phone__otpbox">
              <p className="lfs-phone__label">Enter the OTP sent to your phone</p>
              <div className="lfs-phone__otp">
                {['4', '8', '2', '9', '1', '6'].map((d, i) => (
                  <span key={i} style={k(i)}><b>{d}</b></span>
                ))}
              </div>
            </div>
            <p className="lfs-phone__done"><CheckIcon />Consent received via OTP</p>
          </div>
          <span className="lfs-phone__home" />
        </div>
      </div>
    </div>
  );
}

/* ── 2 · The platform pools and analyzes the data: sources in orbit around the engine ── */
const SOURCES = [
  { label: 'GST', Icon: FileTextIcon, x: -1, y: -0.62 },
  { label: 'PAN', Icon: IdCardIcon, x: 0.98, y: -0.5 },
  { label: 'ITR', Icon: FileTextIcon, x: -1.08, y: 0.42 },
  { label: 'Bank Statement', Icon: LandmarkIcon, x: 0.92, y: 0.58 },
  { label: 'Bureau', Icon: GaugeIcon, x: 0.02, y: -1.12 },
];
const STATES = ['Pooling data…', 'Analyzing…', 'Matching lenders…'];

/* A curved wire from just inside a source label to the core's rim, in orbit units (R = 1).
   It bows sideways (a quadratic curve whose control point sits off the straight line). The
   arrowhead's tip touches the rim exactly where the curve arrives, and it points along the
   curve's own final direction; the dashed line stops at the arrow's base. */
const CORE_R = 0.3;
const ARROW_L = 0.07; // arrow length
const ARROW_W = 0.035; // half width

function wire(x: number, y: number) {
  const len = Math.hypot(x, y);
  const ux = x / len;
  const uy = y / len;
  // start just inside the label
  const sx = ux * (len - 0.2);
  const sy = uy * (len - 0.2);
  // where the curve meets the core's rim
  const ex = ux * CORE_R;
  const ey = uy * CORE_R;
  // control point: halfway, pushed perpendicular to the line
  const bend = 0.28 * (x > 0 ? 1 : -1);
  const cx = (sx + ex) / 2 - uy * bend;
  const cy = (sy + ey) / 2 + ux * bend;
  // final direction of a quadratic curve: from the control point to the end
  const tl = Math.hypot(ex - cx, ey - cy);
  const tx = (ex - cx) / tl;
  const ty = (ey - cy) / tl;
  // the line stops at the arrow's base, on the same curve
  const bx = ex - tx * ARROW_L;
  const by = ey - ty * ARROW_L;
  const tip = `${ex},${ey} ${bx - ty * ARROW_W},${by + tx * ARROW_W} ${bx + ty * ARROW_W},${by - tx * ARROW_W}`;
  return { d: `M${sx} ${sy} Q${cx} ${cy} ${bx} ${by}`, tip };
}

export function ScenePool({ active }: { active: boolean }) {
  const [state, setState] = useState(0);
  useEffect(() => {
    if (!active || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = window.setInterval(() => setState((s) => (s + 1) % STATES.length), 2000);
    return () => window.clearInterval(t);
  }, [active]);

  return (
    <div className="lfs lfs--pool" data-active={active || undefined} aria-hidden="true">
      <div className="lfs-orbit">
        <span className="lfs-orbit__ring lfs-orbit__ring--1" />
        <span className="lfs-orbit__ring lfs-orbit__ring--2" />
        <span className="lfs-orbit__ring lfs-orbit__ring--3" />
        <svg className="lfs-wires" viewBox="-1.2 -1.2 2.4 2.4" aria-hidden="true">
          {SOURCES.map((s) => {
            const w = wire(s.x, s.y);
            return (
              <g key={s.label}>
                <path className="lfs-wire" d={w.d} />
                <polygon className="lfs-wire-tip" points={w.tip} />
              </g>
            );
          })}
        </svg>
        {SOURCES.map((s, i) => (
          <span key={s.label} className="lfs-src" style={{ ...k(i), ['--x' as string]: s.x, ['--y' as string]: s.y }}>
            <span className="lfs-src__label"><s.Icon />{s.label}</span>
          </span>
        ))}
        <span className="lfs-core">
          <img src="/logos/favicon.png" alt="" width={40} height={36} />
        </span>
      </div>
      <p className="lfs-pool__caption">
        <b>5 sources</b> <span className="lfs-pool__arrow">→</span> <b>1 credit profile</b>
        <TextStates text={STATES[state]} className="lfs-pool__state" />
      </p>
    </div>
  );
}

/* ── 3 · The platform shows eligible lenders: a ranked list set in large type ── */
const OFFERS = [
  { name: 'Lender 1', amount: 200, rate: '8.00%' },
  { name: 'Lender 2', amount: 200, rate: '8.25%' },
  { name: 'Lender 3', amount: 190, rate: '8.50%' },
];

export function SceneLenders({ active }: { active: boolean }) {
  return (
    <div className="lfs lfs--lenders" data-active={active || undefined} aria-hidden="true">
      <p className="lfs-rank__head">
        <span>Eligible lenders &amp; offers</span>
        <span>Sorted by best match</span>
      </p>
      <ol className="lfs-rank">
        {OFFERS.map((o, i) => (
          <li key={o.name} className={i === 0 ? 'is-best' : ''} style={k(i)}>
            <span className="lfs-rank__n">0{i + 1}</span>
            <span className="lfs-rank__name">
              {o.name}
              {i === 0 && <em>Best match</em>}
            </span>
            <span className="lfs-rank__amt">
              {active ? <NumberTicker value={o.amount} prefix="₹" delay={0.35 + i * 0.15} /> : `₹${o.amount}`}
              <small>Lakh</small>
            </span>
            <span className="lfs-rank__rate">{o.rate}<small>rate*</small></span>
          </li>
        ))}
      </ol>
      <p className="lfs-rank__foot">All eligible · View all lenders &amp; offers</p>
    </div>
  );
}
