'use client';

import { useEffect, useRef, useState } from 'react';
import { TextStates } from '../../ui/spectrum/TextStates';
import { GaugeIcon, KanbanIcon, LandmarkIcon, UserIcon, UserPlusIcon, UsersIcon, WorkspaceIcon } from './HeroIcons';
import { HeroConnectors } from './HeroConnectors';
import { DashEligibility, DashKpis, DashPipeline, DashSchemes } from './HeroDashboardParts';

/* The product shot in the hero: a Cred2Tech partner dashboard in a device frame, built in HTML.
   Top row: Sourcing Partner (left) and MSME (right) feed the Cred2Tech hub (centre), which
   branches with animated black dashed lines down to the three services. The KPI row below may be cropped by the screen. */

const NAV = [WorkspaceIcon, GaugeIcon, KanbanIcon, LandmarkIcon, UsersIcon];
const STATUSES = ['Checking eligibility…', 'Tracking applications…', 'Matching schemes…'];

export function HeroDashboard() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState(0);

  // the hub's status cycles (held still under reduced motion)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = window.setInterval(() => setStatus((s) => (s + 1) % STATUSES.length), 2400);
    return () => window.clearInterval(t);
  }, []);

  return (
    <div className="device">
      <div
        className="dash"
        role="img"
        aria-label="Cred2Tech dashboard: Sourcing Partners and MSMEs connect to the Cred2Tech engine, which runs loan eligibility across lenders, the application pipeline and government scheme matching."
      >
        <aside className="dash__side" aria-hidden="true">
          <img src="/logos/favicon.png" alt="" width={20} height={18} className="dash__logo" />
          {NAV.map((Icon, i) => (
            <span key={i} className={`dash__nav${i === 0 ? ' is-on' : ''}`}><Icon /></span>
          ))}
        </aside>

        <div className="dash__main" ref={mainRef}>
          <HeroConnectors rootRef={mainRef} />

          <div className="dash__top">
            <span className="dash__src dash__src--partner" data-node="src" aria-hidden="true">
              <UserPlusIcon />
              Sourcing Partner
            </span>

            <span className="dash__hub" data-node="hub" aria-hidden="true">
              <span className="dash__hub-logo">
                <img src="/logos/favicon.png" alt="" width={20} height={18} />
              </span>
              <span className="dash__hub-copy">
                <b>Cred2Tech engine</b>
                <TextStates text={STATUSES[status]} className="dash__hub-status" />
              </span>
            </span>

            <span className="dash__src dash__src--msme" data-node="src" aria-hidden="true">
              <UserIcon />
              MSME
            </span>
          </div>

          <div className="dash__grid">
            <DashEligibility />
            <DashPipeline />
            <DashSchemes />
          </div>

          <DashKpis />
        </div>
      </div>
    </div>
  );
}
