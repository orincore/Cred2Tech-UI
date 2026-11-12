'use client';

import { Hero } from './components/Hero';
import { LenderFlow } from './components/LenderFlow';
import { PartnerWorkspace } from './components/PartnerWorkspace';
import { WorkspaceVideoSection } from './components/WorkspaceVideoSection';
import { SchemeEngine } from './components/SchemeEngine';
import './home.css';
import './styles/theme.css';

/**
 * Port of the Cred2Tech v2 marketing site's homepage (src/App.tsx), trimmed
 * to the sections through "Discover Government Schemes Your Business
 * Qualifies For." (SchemeEngine). The site's own Header/Footer/nav are used
 * for this route instead of v2's Nav/Footer. next-themes applies both the
 * `class` and `data-theme` attributes on the document element, so these
 * sections follow the site's actual light/dark theme before first paint.
 */
export default function HomeApp() {
  return (
    <>
      <div className="home-v2">
        <div className="stack-container">
          <div className="stack-item stack-item--1">
            <Hero />
          </div>
          <div className="stack-gap" aria-hidden="true" />
          <div className="stack-item stack-item--2">
            <LenderFlow />
          </div>
          <div className="stack-gap" aria-hidden="true" />
          <div className="stack-item stack-item--3">
            <PartnerWorkspace />
          </div>
          <div className="stack-gap" aria-hidden="true" />
          <div className="stack-item stack-item--4">
            <WorkspaceVideoSection />
          </div>
          <div className="stack-gap" aria-hidden="true" />
          <div className="stack-item stack-item--5">
            <SchemeEngine />
          </div>
        </div>
      </div>
    </>
  );
}
