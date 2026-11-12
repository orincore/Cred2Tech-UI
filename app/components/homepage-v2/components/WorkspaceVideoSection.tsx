'use client';

import { useRef, useState } from 'react';
import { ScrollRevealText } from '../../ui/ScrollRevealText';
import { useCoverDepth } from '../../ui/useCoverDepth';
import { ArrowIcon } from './HeroIcons';
import './workspace-video.css';

/* "Cred2Tech Virtual Workspace. Complete Platform Overview & Walkthrough." Same open language as the
   sections above it: eyebrow, large title and lead on the left/right of one header row, the
   walkthrough video in a device frame over a soft brand glow, and the three highlights as one
   numbered row underneath. No cards. */

const HIGHLIGHTS = [
  {
    title: 'Customer 360° & Pipeline',
    desc: 'Unified visibility into customer profile, documents, and real-time loan progress.',
  },
  {
    title: 'Multi-Lender Rule Matching',
    desc: 'Instant rule comparison across 50+ banks and NBFCs for maximum approval rates.',
  },
  {
    title: 'Payouts, Invoices & Team Control',
    desc: 'Complete commission tracking, automated billing, and role-based agent management.',
  },
] as const;

const VIDEO_ID = 'BYADQeKFvqE';
const VIDEO_TITLE = 'Cred2Tech Virtual Workspace | Complete Platform Overview & Walkthrough';
const YOUTUBE_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

export function WorkspaceVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useCoverDepth(ref, '#scheme-engine');

  const thumbnailUrl = imgError
    ? `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

  return (
    <section ref={ref} id="workspace-video" className="wvs" aria-label="Cred2Tech Virtual Workspace walkthrough">
      <div className="wvs__wrap">
        <div className="wvs__grid">
          <div className="wvs__copy">
            <p className="wvs__eyebrow">Platform Overview &amp; Walkthrough</p>
            <ScrollRevealText
              as="h2"
              className="wvs__title"
              parts={[
                { text: 'Cred2Tech Virtual Workspace' },
                { text: 'Complete Platform Overview & Walkthrough', className: 'wvs__accent' },
              ]}
            />
            <p className="wvs__lead">
              Take a deep-dive tour into the Cred2Tech Virtual Workspace. See how Sourcing Partners
              manage pipelines, track multi-lender credit applications, and automate operations in
              real time.
            </p>
          </div>

          <div className="wvs__stage">
            <span className="wvs__glow" aria-hidden="true" />
            <div className="wvs__device">
              <div className="wvs__bar">
                <span className="wvs__tag">
                  <span className="wvs__tag-dot" aria-hidden="true" />
                  HD Video
                </span>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wvs__yt"
                  aria-label="Watch on YouTube"
                >
                  <span>Watch on YouTube</span>
                  <ArrowIcon className="wvs__yt-arrow" />
                </a>
              </div>

              <div className="wvs__screen">
                {isPlaying ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                    title={VIDEO_TITLE}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="wvs__thumb"
                    onClick={() => setIsPlaying(true)}
                    aria-label={`Play video: ${VIDEO_TITLE}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={thumbnailUrl}
                      alt=""
                      onError={() => setImgError(true)}
                      className="wvs__thumb-img"
                      loading="lazy"
                    />
                    <span className="wvs__shade" aria-hidden="true" />
                    <span className="wvs__play" aria-hidden="true">
                      <span className="wvs__play-icon" />
                      Watch walkthrough
                    </span>
                    <span className="wvs__caption">{VIDEO_TITLE}</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          <ol className="wvs__list" aria-label="What the walkthrough covers">
            {HIGHLIGHTS.map((h, i) => (
              <li key={h.title} className="wvs__item">
                <span className="wvs__item-n">0{i + 1}</span>
                <span className="wvs__item-title">{h.title}</span>
                <span className="wvs__item-sub">{h.desc}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
