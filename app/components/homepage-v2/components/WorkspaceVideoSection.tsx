'use client';

import React, { useState } from 'react';
import './workspace-video.css';

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
];

export function WorkspaceVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);

  const videoId = 'BYADQeKFvqE';
  const videoTitle = 'Cred2Tech Virtual Workspace | Complete Platform Overview & Walkthrough';
  const youtubeUrl = 'https://www.youtube.com/watch?v=BYADQeKFvqE';

  const thumbnailUrl = imgError
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section id="workspace-video" className="wvs">
      <div className="container">
        <header className="wvs__head">
          <span className="wvs__pill">Platform Overview &amp; Walkthrough</span>
          <h2 className="wvs__title">
            Cred2Tech Virtual Workspace
            <span>Complete Platform Overview &amp; Walkthrough</span>
          </h2>
          <p className="wvs__sub">
            Take a deep-dive tour into the Cred2Tech Virtual Workspace. See how Sourcing Partners manage pipelines, track multi-lender credit applications, and automate operations in real time.
          </p>
        </header>

        <div className="wvs__player-wrap">
          <div className="wvs__player-glow" aria-hidden="true" />
          <div className="wvs__player">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div
                role="button"
                tabIndex={0}
                aria-label={`Play video: ${videoTitle}`}
                onClick={() => setIsPlaying(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsPlaying(true);
                  }
                }}
                className="wvs__thumb"
              >
                <img
                  src={thumbnailUrl}
                  alt={videoTitle}
                  onError={() => setImgError(true)}
                  className="wvs__thumb-img"
                  loading="lazy"
                />
                <div className="wvs__overlay" />

                <div className="wvs__badge-bar">
                  <span className="wvs__hd-tag">
                    <span className="wvs__hd-dot" />
                    HD Video
                  </span>
                  <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="wvs__yt-link"
                    aria-label="Watch on YouTube"
                  >
                    <span>Watch on YouTube</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>

                <div className="wvs__play-btn-wrap">
                  <div className="wvs__play-btn" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>

                <div className="wvs__bottom-bar">
                  <div className="wvs__bottom-content">
                    <p className="wvs__video-title">{videoTitle}</p>
                    <p className="wvs__video-hint">Click to play platform video walkthrough</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="wvs__highlights">
          {HIGHLIGHTS.map((h) => (
            <div className="wvs__highlight" key={h.title}>
              <h4>{h.title}</h4>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
