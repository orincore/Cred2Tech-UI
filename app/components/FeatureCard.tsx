'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

// Wrapper to avoid JSX IntrinsicElements TypeScript errors for the custom web component
const LottiePlayer = (props: any) => {
  return React.createElement('lottie-player', props);
};

// Client-only wrapper to prevent hydration mismatch
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <>{children}</> : <div className="w-[120px] h-[120px] mb-4" />;
}

interface FeatureCardProps {
  item: {
    video?: string | null;
    lottie?: string | null;
    image?: string | null;
    title: string;
    desc: string;
    badge?: string;
    step?: string;
    col: string;
  };
  index: number;
  fullImage?: boolean;
}

export function FeatureCard({ item, index, fullImage = false }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`reveal group relative flex flex-col overflow-hidden rounded-[22px] transition-all duration-500 cursor-pointer ${item.col}`}
      style={{
        transitionDelay: `${index * 0.08}s`,
        opacity: isVisible ? 1 : 0,
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      {fullImage ? (
        <>
          {/* Full-bleed image background */}
          <div className="absolute inset-0 w-full h-full">
            <Image src={item.image!} alt={item.title} fill className="object-cover" />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Content overlay */}
          <div className="relative z-10 px-5 sm:px-6 pb-6 pt-5 flex flex-col justify-end h-full min-h-[300px]">
            {item.badge && (
              <span className="text-white/80 font-(family-name:--font-outfit) text-[11px] font-semibold tracking-wide uppercase mb-2">
                {item.badge}
              </span>
            )}
            {item.step && (
              <div className="font-(family-name:--font-jb-mono) text-white font-black text-5xl leading-none tracking-tight mb-3 drop-shadow-lg">
                {item.step}
              </div>
            )}
            <h3 className="font-(family-name:--font-outfit) font-bold text-white leading-[1.2] mb-2 text-[1.2rem]">
              {item.title}
            </h3>
            <p className="text-white/90 text-[0.8125rem] leading-relaxed">
              {item.desc}
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Top-left: category / badge label */}
          <div className="px-5 pt-5 pb-0 z-10">
            <span className="text-black/40 font-(family-name:--font-outfit) text-[11px] font-semibold tracking-wide uppercase">
              {item.badge ?? 'Feature'}
            </span>
          </div>

          {/* Illustration area — fixed height */}
          <div className="w-full h-[280px] overflow-hidden flex items-center justify-center relative">
            <ClientOnly>
              {item.lottie ? (
                <LottiePlayer
                  src={item.lottie}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              ) : item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain"
                />
              ) : (
                <video
                  src={item.video!}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              )}
            </ClientOnly>
            {/* Subtle blur at bottom of illustration */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>

          {/* Center: step highlight with frosted glass pill */}
          {item.step && (
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
              <div
                className="px-7 py-4 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  border: '1px solid rgba(255,255,255,0.22)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                <span className="font-(family-name:--font-jb-mono) text-black font-black text-5xl leading-none tracking-tight drop-shadow-lg">
                  {item.step}
                </span>
              </div>
            </div>
          )}

          {/* Content — sits below illustration */}
          <div className="px-5 sm:px-6 pb-6 pt-4 flex flex-col flex-1">
            <h3 className="font-(family-name:--font-outfit) font-bold text-black leading-[1.2] mb-2 text-[1.2rem]">
              {item.title}
            </h3>
            <p className="text-black/55 text-[0.8125rem] leading-relaxed group-hover:text-black/75 transition-colors duration-300">
              {item.desc}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
