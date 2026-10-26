'use client';

import React, { useState } from 'react';

export interface VideoHighlight {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface VideoSectionProps {
  id?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  videoId: string;
  videoTitle: string;
  youtubeUrl: string;
  highlights?: VideoHighlight[];
  className?: string;
}

export function VideoSection({
  id = 'video-walkthrough',
  badge = 'PLATFORM VIDEO',
  title,
  subtitle,
  description,
  videoId,
  videoTitle,
  youtubeUrl,
  highlights,
  className = '',
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);

  const thumbnailUrl = imgError
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section
      id={id}
      className={`py-12 sm:py-16 lg:py-24 bg-[var(--surface)] border-b border-[var(--outline)] relative overflow-hidden transition-colors duration-500 ${className}`}
    >
      {/* Background ambient pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--on-surface) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          {badge && (
            <div className="mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--on-surface)]/5 border border-[var(--outline)] text-[var(--on-surface)] font-(family-name:--font-jb-mono) text-xs font-bold tracking-[0.18em] uppercase">
                {badge}
              </span>
            </div>
          )}

          <h2 className="font-(family-name:--font-outfit) font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] leading-[1.12] text-[var(--on-surface)] tracking-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-2 text-base sm:text-lg md:text-xl font-medium text-[var(--on-surface)]/80 font-(family-name:--font-outfit)">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="mt-4 text-sm sm:text-base text-[var(--on-muted)] leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Video Player Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Subtle Ambient Glow Behind Player */}
          <div
            className="absolute -inset-1 sm:-inset-2 rounded-3xl opacity-20 blur-xl bg-gradient-to-r from-[var(--on-surface)]/30 via-[var(--on-surface)]/10 to-[var(--on-surface)]/30 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[var(--outline)] bg-black shadow-[0_24px_70px_rgba(11,33,71,0.12)] aspect-video">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
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
                className="group relative w-full h-full cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--on-surface)]"
              >
                {/* Poster Thumbnail */}
                <img
                  src={thumbnailUrl}
                  alt={videoTitle}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50 transition-opacity group-hover:opacity-85" />

                {/* Top Bar inside thumbnail */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-white text-xs">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 font-(family-name:--font-jb-mono) text-[11px] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    HD Walkthrough
                  </span>

                  <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Open video on YouTube"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-white/90 hover:text-white hover:bg-black/80 transition-colors"
                  >
                    <span>Watch on YouTube</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring */}
                    <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 animate-ping opacity-75" />
                    {/* Play circle */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                      <svg
                        className="w-7 h-7 sm:w-8 sm:h-8 ml-1 text-slate-900"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom title banner */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <div className="px-3.5 py-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                    <p className="text-xs sm:text-sm font-semibold text-white truncate font-(family-name:--font-outfit)">
                      {videoTitle}
                    </p>
                    <p className="text-[11px] text-white/70 mt-0.5">Click anywhere to play video walkthrough</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Feature Highlights Strip (Optional) */}
        {highlights && highlights.length > 0 && (
          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-xl bg-[var(--bg)] border border-[var(--outline)] transition-all duration-300 hover:border-[var(--on-surface)]/30"
              >
                <div className="flex items-center gap-3 mb-2">
                  {h.icon && (
                    <div className="w-8 h-8 rounded-lg bg-[var(--on-surface)]/5 flex items-center justify-center text-[var(--on-surface)] shrink-0">
                      {h.icon}
                    </div>
                  )}
                  <h4 className="font-(family-name:--font-outfit) font-semibold text-sm sm:text-base text-[var(--on-surface)]">
                    {h.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[var(--on-muted)] leading-relaxed">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
