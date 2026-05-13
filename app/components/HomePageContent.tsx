"use client";

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { ThreeDCard } from './ThreeDCard';
import { TravelingBorderButton } from './TravelingBorderButton';
import { MarqueeTicker } from './MarqueeTicker';
import { useTheme } from 'next-themes';

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

// Count-up animation component
function CountUp({ value, suffix = '', duration = 2000, revealed = false }: { value: number, suffix?: string, duration?: number, revealed?: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!revealed) return;
    let start = 0;
    const end = value;
    const incrementTime = duration / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [revealed, value, duration]);

  return <>{count}{suffix}</>;
}

export default function HomePageContent() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [statsRevealed, setStatsRevealed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const bar = document.createElement('div');
    bar.id = 'scroll-bar';
    bar.style.cssText = 'position:fixed;top:0;left:0;height:2px;width:0%;background:var(--on-surface);z-index:9999;pointer-events:none;transition:width 0.1s;';
    document.body.prepend(bar);
    const onScroll = () => {
      bar.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      bar.remove();
      document.getElementById('scroll-bar')?.remove();
    };
  }, []);

  // Video loop effect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(console.error);
    };
    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Intersection observer for scroll-reveal elements
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [mounted]);

  // Intersection observer for stats strip
  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsRevealed(true);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, [mounted]);

  const lenders = [
    { name: 'HDFC Bank', image: '/banks logo/HDFC_Bank_Logo.svg.png' },
    { name: 'Axis Bank', image: '/banks logo/axis bank.jpg' },
    { name: 'Kotak Mahindra', image: '/banks logo/Kotak_Mahindra_Bank_logo.png' },
    { name: 'Bank of Baroda', image: '/banks logo/BankOfBarodaLogo.svg' },
    { name: 'Yes Bank', image: '/banks logo/Yes-Bank-New-Logo-Vector.svg-.png' },
    { name: 'IDFC First', image: '/banks logo/Logo_of_IDFC_First_Bank.svg.png' },
  ];

  return (
    <div className="bg-[var(--bg)] text-[var(--on-surface)] font-(family-name:--font-inter) overflow-x-clip selection:bg-black selection:text-white">
      {/* S1 — HERO */}
      <section id="hero-section" className="relative min-h-screen flex flex-col overflow-hidden transition-colors duration-500">
        {/* Static content visible to search engines */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4 relative z-10 flex flex-col justify-start lg:justify-between flex-1 min-h-0 text-left">
          <div className="max-w-2xl mt-8 sm:mt-12 lg:mt-16 self-start w-full">
            <div className="mb-3 sm:mb-4">
              <span className="inline-flex items-center text-[#4a8df8] font-(family-name:--font-jb-mono) text-sm font-medium tracking-wide">
                India&apos;s MSME Credit Platform
              </span>
            </div>
            <h1 className="font-(family-name:--font-outfit) font-bold text-[1.75rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3rem] xl:text-[3.25rem] leading-[1.1] tracking-tight text-[var(--on-surface)] transition-colors duration-500 mb-4">
              The smartest way to close MSME credit and for businesses to find it.
            </h1>
            <p className="text-base sm:text-lg sm:text-[1.15rem] text-[var(--on-muted)] transition-colors duration-500 max-w-lg mb-6 sm:mb-8 leading-relaxed font-light">
              Cred2Tech uses proprietary algorithms to match Indian MSMEs and DSAs with ideal lenders in minutes.
            </p>
          </div>

          {/* 3D CARD CLUSTER — Mobile/Tablet inline version */}
          <div className="xl:hidden w-[260px] h-[280px] sm:w-[320px] sm:h-[340px] md:w-full md:max-w-2xl md:h-[460px] mx-auto mb-6 sm:mb-8 relative z-20 pointer-events-auto">
            <div className="absolute top-[0px] left-[30px] sm:left-[40px] md:left-[60px] w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] md:w-[200px] md:h-[200px] z-30 transform -rotate-[25deg]">
              <ThreeDCard imageSrc="/images/animation-png_16.png" className="w-full h-full" depth={40} />
            </div>
            <div className="absolute top-[20px] sm:top-[30px] md:top-[40px] left-[130px] sm:left-[170px] md:left-[300px] w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] md:w-[200px] md:h-[200px] z-20 transform rotate-[18deg]">
              <ThreeDCard imageSrc="/images/animation-png_2.png" className="w-full h-full" depth={35} />
            </div>
            <div className="absolute top-[130px] sm:top-[160px] md:top-[220px] left-[80px] sm:left-[110px] md:left-[180px] w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] md:w-[200px] md:h-[200px] z-10 transform -rotate-[5deg]">
              <ThreeDCard imageSrc="/images/animation-png_3.png" className="w-full h-full" depth={30} />
            </div>
          </div>

          {/* Buttons positioned near bottom section */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-4 sm:mb-2">
            <TravelingBorderButton href="/register-dsa" size="sm">
              Register as a DSA Partner
            </TravelingBorderButton>
            <TravelingBorderButton href="/login" solid={true} showIcon={true} size="sm">
              Check My Loan Eligibility
            </TravelingBorderButton>
            <TravelingBorderButton href="/login" solid={false} showIcon={false} size="sm">
              Request a Demo
            </TravelingBorderButton>
          </div>

          {/* Trust Line */}
          <div className="text-sm text-[var(--on-muted)] mt-4 sm:mt-5 font-semibold">
            Your data stays private. Secure. Confidential.
          </div>

          {/* Bottom 3-Column Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 mt-auto pt-4 sm:pt-2 pb-6 sm:pb-4 w-full relative z-10 border-t border-[var(--outline)] md:border-none text-left">
            <div className="pr-0 md:pr-8 relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-sm bg-[var(--on-surface)] flex items-center justify-center text-[var(--bg)] transition-colors duration-500 p-1.5">
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                </div>
                <h3 className="text-[var(--on-surface)] transition-colors duration-500 font-semibold text-sm sm:text-base">Secure Data Protection</h3>
              </div>
              <p className="text-[var(--on-muted)] transition-colors duration-500 text-sm leading-relaxed pl-11">
                Your data is protected with <br className="hidden md:block" /> industry-standard encryption.
              </p>
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[var(--outline)] transition-colors duration-500" />
            </div>

            <div className="px-0 md:px-8 relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-sm bg-[var(--on-surface)] flex items-center justify-center text-[var(--bg)] transition-colors duration-500 p-1.5">
                  <span className="material-symbols-outlined text-[16px]">speed</span>
                </div>
                <h3 className="text-[var(--on-surface)] transition-colors duration-500 font-semibold text-sm sm:text-base">10-min Eligibility</h3>
              </div>
              <p className="text-[var(--on-muted)] transition-colors duration-500 text-sm leading-relaxed pl-11">
                Run comprehensive matching checks <br className="hidden md:block" /> in minutes, not weeks.
              </p>
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[var(--outline)] transition-colors duration-500" />
            </div>

            <div className="px-0 md:pl-8 relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-sm bg-[var(--on-surface)] flex items-center justify-center text-[var(--bg)] transition-colors duration-500 p-1.5 font-bold text-[16px]">C</div>
                <h3 className="text-[var(--on-surface)] transition-colors duration-500 font-semibold text-sm sm:text-base">Professional Standards</h3>
              </div>
              <p className="text-[var(--on-muted)] transition-colors duration-500 text-sm leading-relaxed pl-11">
                Following industry best practices <br className="hidden md:block" /> for reliable operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S2 — TRUST / LENDER BAR */}
      <section id="lender-bar" className={`py-12 sm:py-16 transition-colors duration-500 ${mounted && resolvedTheme === 'light' ? 'bg-[var(--surface-low)]' : 'bg-[var(--bg)]'}`}>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center justify-center gap-2 font-(family-name:--font-jb-mono) text-xs sm:text-sm font-bold tracking-[0.12em] uppercase mb-4 px-5 py-2.5 border-2 rounded-full transition-all duration-300 bg-[var(--surface)] text-[var(--on-surface)] border-[var(--outline)] shadow-[0_4px_20px_rgba(11,33,71,0.15)]">
            <span className="w-2 h-2 bg-[var(--on-surface)] rounded-full" />
            Social Proof
          </span>
          <h2 className="reveal font-(family-name:--font-outfit) font-bold text-lg sm:text-xl lg:text-2xl text-[var(--on-surface)] mb-3">
            Matched with lenders you can trust
          </h2>
          <p className="text-[var(--on-muted)] max-w-xl mx-auto mb-8 text-sm leading-relaxed">
            Cred2Tech connects agents and MSME to leading banks, NBFCs, and digital lenders all through a single eligibility check.
          </p>

          <div className="marquee-wrap mt-10 overflow-hidden relative h-16 sm:h-20">
            <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r z-10 from-[var(--surface-low)] via-[var(--surface-low)]/80 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l z-10 from-[var(--surface-low)] via-[var(--surface-low)]/80 to-transparent" />
            <div className="marquee-track marquee-fast flex items-center h-full min-w-max" id="lender-marquee">
              {[...lenders, ...lenders, ...lenders, ...lenders].map((lender, i) => (
                <div key={`${lender.name}-${i}`} className="flex shrink-0 items-center justify-center px-1 sm:px-2" style={{ height: '64px' }}>
                  <Image src={lender.image} alt={lender.name} width={160} height={64} sizes="160px" className="object-contain brightness-100 contrast-100" loading="eager" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections would continue here... */}
      {/* Note: This is a partial extraction - the full content would include all sections from the original page */}

      <Script id="widget-anim-script" strategy="afterInteractive">{`
        (function(){
          // Animation scripts
        })();
      `}</Script>
    </div>
  );
}
