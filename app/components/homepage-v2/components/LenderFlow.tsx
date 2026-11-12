'use client';

import { useEffect, useRef, useState } from 'react';
import './lender-flow.css';
import { ScrollRevealText } from '../../ui/ScrollRevealText';
import { SceneLenders, SceneOnboard, ScenePool } from './LenderFlowScenes';

/* "Multi-Lender Eligibility. Minutes Away." told as a scroll story, without cards: on desktop the
   section pins while three chapters pass; the chapter lines sit on the left in large type and an
   open stage on the right plays each chapter's scene. On smaller screens the chapters simply
   follow one another, each with its scene. Then "How It Helps Everyone" as open columns. */

const CHAPTERS = [
  { title: 'Partner Onboards Client', detail: 'Understand the client’s needs and obtain their consent, in one visit.', Scene: SceneOnboard },
  { title: 'Cred2Tech Platform Pools & Analyzes Data', detail: 'GST, PAN, ITR, bank statements and bureau data, pooled securely and matched.', Scene: ScenePool },
  { title: 'Platform Shows Eligible Lenders', detail: 'Every eligible lender and offer, sorted by best match.', Scene: SceneLenders },
] as const;

const HELP = [
  { title: 'For Sourcing Partners', items: ['Save time', 'More lender options', 'Higher success & earnings'] },
  { title: 'For Clients', items: ['One-time data sharing', 'More choices', 'Better rates & approvals'] },
  { title: 'For Lenders', items: ['Quality leads', 'Verified data', 'Higher conversions'] },
  { title: 'Secure. Private. Compliant.', items: ['Data is collected on authentication and is always protected.'] },
] as const;

export function LenderFlow() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [chapter, setChapter] = useState(0);
  const [offscreen, setOffscreen] = useState(true);

  // the chapter follows the scroll through the pinned story (desktop)
  useEffect(() => {
    const el = ref.current;
    const track = trackRef.current;
    if (!el || !track) return;
    const pinned = window.matchMedia('(min-width: 901px)');
    // wide screens: the next section (PartnerWorkspace) slides up over the pinned story, so the
    // track carries one extra screen of scroll that the chapters do not use (home.css pulls the
    // next section up by 100vh; lender-flow.css lengthens the track to match)
    const covered = window.matchMedia('(min-width: 1121px)');
    let raf = 0;
    const update = () => {
      raf = 0;
      if (!pinned.matches) return;
      const r = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const run = Math.max(1, r.height - vh * (covered.matches ? 2 : 1));
      const raw = Math.min(1, Math.max(0, -r.top / run));
      // a short hold at the start (the first chapter settles) and at the end (the last chapter
      // stays before the section releases); the chapters share the scroll in between
      const HOLD = 0.08;
      const p = Math.min(1, Math.max(0, (raw - HOLD) / (1 - 2 * HOLD)));
      el.style.setProperty('--p', p.toFixed(3));
      // how far the next section has risen over this one (0 to 1)
      const out = covered.matches ? Math.min(1, Math.max(0, (-r.top - run) / vh)) : 0;
      el.style.setProperty('--out', out.toFixed(3));
      setChapter(Math.min(CHAPTERS.length - 1, Math.floor(p * CHAPTERS.length * 0.999)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { if (raf) cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  // motion only while the section is on screen and the tab is visible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setOffscreen(!e.isIntersecting));
    io.observe(el);
    const onVis = () => setOffscreen(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => { io.disconnect(); document.removeEventListener('visibilitychange', onVis); };
  }, []);

  return (
    <section ref={ref} id="lender-flow" className={`lf${offscreen ? ' is-still' : ''}`} aria-label="Multi-lender eligibility in three steps">
      <div className="lf__track" ref={trackRef}>
      <div className="lf__pin">
        <div className="lf__wrap">
          <div className="lf__story">
            <ScrollRevealText
              as="h2"
              className="lf__title"
              parts={[{ text: 'Multi-Lender Eligibility.' }, { text: 'Minutes Away.', className: 'lf__accent' }]}
            />

            <ol className="lf__chapters">
              <span className="lf__progress" aria-hidden="true"><i /></span>
              {CHAPTERS.map((c, i) => (
                <li key={c.title} className={`lf__chapter${i === chapter ? ' is-on' : ''}`}>
                  <span className="lf__chapter-n">0{i + 1}</span>
                  <div className="lf__chapter-copy">
                    <h3>{c.title}</h3>
                    <p>{c.detail}</p>
                  </div>
                  <div className="lf__inline-scene">
                    <c.Scene active />
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lf__stage" data-chapter={chapter}>
            <span className="lf__glow" aria-hidden="true" />
            {CHAPTERS.map((c, i) => (
              <div key={c.title} className={`lf__scene${i === chapter ? ' is-on' : ''}`}>
                <c.Scene active={i === chapter} />
              </div>
            ))}
          </div>
        </div>
        <div className="lf__help">
          <p className="lf__help-title">How It Helps Everyone</p>
          <ul className="lf__help-cols">
            {HELP.map((h) => (
              <li key={h.title}>
                <p className="lf__help-name">{h.title}</p>
                <ul>
                  {h.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>

    </section>
  );
}
