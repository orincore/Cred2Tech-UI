'use client';

import { useRef, useState } from 'react';
import { VideoModal } from '../../VideoModal';
import { APP_URLS } from '../../../lib/app-urls';
import { ScrollRevealText } from '../../ui/ScrollRevealText';
import { useCoverDepth } from '../../ui/useCoverDepth';
import { ArrowIcon } from './HeroIcons';
import './partner-workspace.css';

/* "Your Entire Business. One Powerful Workspace." Copy and the two actions on the left, the
   workspace screenshot on the right (a laptop over a soft brand glow, with a play control that opens
   the walkthrough video), and the six modules as one numbered row underneath. No cards. */

const MODULES = [
  { title: 'Customer 360°', sub: 'Complete view of every customer' },
  { title: 'Loan Journey', sub: 'Track from lead to disbursement' },
  { title: 'Multi-Lender', sub: 'Compare and manage multiple lenders' },
  { title: 'Earnings & Payouts', sub: 'Commissions, incentives and wallet' },
  { title: 'Team & Control', sub: 'Manage team, roles and performance' },
  { title: 'Reports & Insights', sub: 'Powerful dashboards and analytics' },
] as const;

export function PartnerWorkspace() {
  const [videoOpen, setVideoOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useCoverDepth(ref, '#workspace-video');

  return (
    <>
      <section ref={ref} id="partner-workspace" className="pw" aria-label="Sourcing Partner Workspace">
        <div className="pw__wrap">
          <div className="pw__top">
            <div className="pw__copy">
              <p className="pw__eyebrow">Sourcing Partner Workspace</p>
              <ScrollRevealText
                as="h2"
                className="pw__title"
                parts={[{ text: 'Your Entire Business.' }, { text: 'One Powerful Workspace.', className: 'pw__accent' }]}
              />
              <p className="pw__lead">
                Manage leads, track applications, collaborate with lenders and grow your earnings,
                all from one place.
              </p>
              <div className="pw__actions">
                <a href={APP_URLS.home} target="_blank" rel="noopener noreferrer" className="pw__btn pw__btn--primary">
                  Explore Workspace <ArrowIcon className="pw__btn-arrow" />
                </a>
                <button type="button" className="pw__btn pw__btn--ghost" onClick={() => setVideoOpen(true)}>
                  <span className="pw__play-dot" aria-hidden="true" />
                  Watch Walkthrough
                </button>
              </div>
            </div>

            <div className="pw__stage">
              <span className="pw__glow" aria-hidden="true" />
              <button
                type="button"
                className="pw__shot"
                onClick={() => setVideoOpen(true)}
                aria-label="Play the Cred2Tech Virtual Workspace walkthrough video"
              >
                <img
                  src="/images/laptop.png"
                  alt="Cred2Tech workspace on a laptop: My Pipeline with active cases, customers, commission and disbursed totals, and a case list by lender and stage"
                  width={2400}
                  height={1322}
                  loading="lazy"
                />
              </button>
            </div>
          </div>

          <ol className="pw__list" aria-label="What the workspace includes">
            {MODULES.map((m, i) => (
              <li key={m.title} className="pw__item">
                <span className="pw__item-n">0{i + 1}</span>
                <span className="pw__item-title">{m.title}</span>
                <span className="pw__item-sub">{m.sub}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoId="BYADQeKFvqE"
        title="Cred2Tech Virtual Workspace | Complete Platform Overview & Walkthrough"
      />
    </>
  );
}
