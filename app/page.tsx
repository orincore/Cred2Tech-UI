'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { colors } from '@/app/theme';
import { ThreeDCard } from './components/ThreeDCard';
import { TravelingBorderButton } from './components/TravelingBorderButton';
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

/* ─────────────────────────────────────────────
 Main Page
───────────────────────────────────────────── */
export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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

  // Video loop effect - simple forward loop for reliability
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

      {/* ══ S1 — HERO ══ */}
      <section
        id="hero-section"
        className="relative h-screen flex flex-col justify-center overflow-hidden transition-colors duration-500"
      >
        {/* ═══ STROBE / SPOTLIGHT CONE — Visible V-beam from top ═══ */}
        {/* Wide outer cone glow */}
        <div className="absolute top-[-15%] right-[12%] w-[500px] h-[110%] pointer-events-none z-[50] animate-strobe-light"
          style={{
            background: mounted && resolvedTheme === 'light'
              ? 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.03) 60%, transparent 85%)'
              : 'linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0.02) 60%, transparent 85%)',
            clipPath: 'polygon(42% 0%, 58% 0%, 100% 100%, 0% 100%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Bright inner core */}
        <div className="absolute top-[-15%] right-[14%] w-[350px] h-[100%] pointer-events-none z-[51] animate-strobe-light"
          style={{
            background: mounted && resolvedTheme === 'light'
              ? 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.12) 15%, rgba(0,0,0,0.05) 50%, transparent 75%)'
              : 'linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.08) 15%, rgba(255,255,255,0.03) 50%, transparent 75%)',
            clipPath: 'polygon(44% 0%, 56% 0%, 90% 100%, 10% 100%)',
            filter: 'blur(40px)',
          }}
        />
        {/* Ground splash — where the light hits */}
        <div className="absolute bottom-[15%] right-[10%] w-[600px] h-[200px] pointer-events-none z-[3]"
          style={{
            background: mounted && resolvedTheme === 'light'
              ? 'radial-gradient(ellipse at center, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.05) 40%, transparent 70%)'
              : 'radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
        {/* Ambient haze */}
        <div className={`absolute -top-[5%] right-[0%] w-[800px] h-[800px] bg-gradient-to-b ${mounted && resolvedTheme === 'light' ? 'from-black/[0.04] via-black/[0.02]' : 'from-white/[0.08] via-white/[0.04]'} to-transparent blur-[80px] pointer-events-none z-[3]`} />

        {/* Perspective Grid Floor */}
        <div className="absolute bottom-0 left-0 w-full h-[50%] z-0 pointer-events-none"
          style={{ perspective: '1200px' }}>
          <div className={`absolute inset-0 transition-opacity duration-500 ${mounted && resolvedTheme === 'light' ? 'opacity-[0.06]' : 'opacity-[0.10]'}`}
            style={{
              backgroundImage: `linear-gradient(${mounted && resolvedTheme === 'light' ? colors.outline : colors.dark.outline} 1px, transparent 1px), linear-gradient(90deg, ${mounted && resolvedTheme === 'light' ? colors.outline : colors.dark.outline} 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
              transform: 'rotateX(65deg)',
              transformOrigin: 'center bottom',
              maskImage: 'linear-gradient(to top, white 0%, transparent 70%)',
              WebkitMaskImage: 'linear-gradient(to top, white 0%, transparent 70%)',
            }} />
        </div>

        {/* ═══ 3D CARD CLUSTER — Tight diagonal, slightly overlapping like reference ═══ */}
        <div className="absolute right-[5%] lg:right-[10%] top-[20%] w-[480px] h-[520px] hidden lg:block z-20 pointer-events-auto">

          {/* Card 1 — Top-Left (tilted left, front) */}
          <div className="absolute top-[0px] left-[60px] w-[200px] h-[200px] z-30 transform -rotate-[25deg]">
            <ThreeDCard
              imageSrc="/images/animation-png_16.png"
              className="w-full h-full"
              depth={40}
            />
          </div>

          {/* Card 2 — Mid-Right (tilted right, behind card 1) */}
          <div className="absolute top-[40px] left-[230px] w-[200px] h-[200px] z-20 transform rotate-[18deg]">
            <ThreeDCard
              imageSrc="/images/animation-png_2.png"
              className="w-full h-full"
              depth={35}
            />
          </div>

          {/* Card 3 — Bottom-Center (slight tilt, behind both) */}
          <div className="absolute top-[230px] left-[150px] w-[200px] h-[200px] z-10 transform -rotate-[5deg]">
            <ThreeDCard
              imageSrc="/images/animation-png_3.png"
              className="w-full h-full"
              depth={30}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4 relative z-10 flex flex-col justify-between h-full text-left">

          <div className="max-w-2xl mt-12 lg:mt-16 self-start w-full">
            {/* Badge */}
            <div className="mb-4">
              <span className={`inline-flex items-center px-4 py-2 rounded-full font-(family-name:--font-jb-mono) text-xs font-bold tracking-[0.15em] uppercase ${mounted && resolvedTheme === 'light' ? 'bg-black/5 text-black border border-black/10' : 'bg-white/10 text-white border border-white/20'}`}>
                India's MSME Credit Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-(family-name:--font-outfit) font-bold text-[1.8rem] sm:text-[2.5rem] lg:text-[4rem] leading-[1.05] tracking-tight text-[var(--on-surface)] transition-colors duration-500 mb-6">
              The smartest way to close{' '}
              <span className={`relative inline-block ${mounted && resolvedTheme === 'light' ? 'text-black' : 'text-white'}`}>
                MSME credit
                <span className={`absolute -bottom-2 left-0 w-full h-1 rounded-full ${mounted && resolvedTheme === 'light' ? 'bg-black/30' : 'bg-white/40'}`} />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-[1rem] text-[var(--on-muted)] transition-colors duration-500 max-w-lg mb-8 leading-relaxed font-light">
              AI-powered matching connects Indian MSMEs and DSAs with ideal lenders in{' '}
              <span className={`font-semibold ${mounted && resolvedTheme === 'light' ? 'text-black' : 'text-white'}`}>minutes</span>, not weeks.
            </p>
            <div className="flex flex-wrap items-center gap-5 mb-8 mt-25">
              <TravelingBorderButton href="/register-dsa">
                Register as DSA Partner
              </TravelingBorderButton>
              <TravelingBorderButton 
                href="/login" 
                solid={true}
                className="shadow-xl"
              >
                Check Loan Eligibility
              </TravelingBorderButton>
            </div>
          </div>

          {/* Bottom 3-Column Section matched exactly from image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 mt-auto pt-8 pb-4 w-full relative z-10 border-t border-[var(--outline)] md:border-none text-left">

            {/* Col 1 */}
            <div className="pr-8 relative group/feature">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${mounted && resolvedTheme === 'light' ? 'bg-black/10 text-black group-hover/feature:bg-black group-hover/feature:text-white' : 'bg-white/20 text-white group-hover/feature:bg-white group-hover/feature:text-black'}`}>
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                </div>
                <h3 className={`text-[var(--on-surface)] transition-colors duration-500 font-semibold text-base ${mounted && resolvedTheme === 'light' ? 'group-hover/feature:text-black' : 'group-hover/feature:text-white'}`}>Bank-grade Security</h3>
              </div>
              <p className="text-[var(--on-muted)] transition-colors duration-500 text-sm leading-relaxed pl-10">
                Direct API integrations with banks <br className="hidden md:block" /> with complete data encryption.
              </p>
              {/* Divider */}
              <div className={`hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 transition-colors duration-500 ${mounted && resolvedTheme === 'light' ? 'bg-[var(--outline)]' : 'bg-[var(--outline)]'}`} />
            </div>

            {/* Col 2 */}
            <div className="px-0 md:px-8 relative group/feature">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${mounted && resolvedTheme === 'light' ? 'bg-black/10 text-black group-hover/feature:bg-black group-hover/feature:text-white' : 'bg-white/20 text-white group-hover/feature:bg-white group-hover/feature:text-black'}`}>
                  <span className="material-symbols-outlined text-[16px]">speed</span>
                </div>
                <h3 className={`text-[var(--on-surface)] transition-colors duration-500 font-semibold text-base ${mounted && resolvedTheme === 'light' ? 'group-hover/feature:text-black' : 'group-hover/feature:text-white'}`}>5-min Eligibility</h3>
              </div>
              <p className="text-[var(--on-muted)] transition-colors duration-500 text-sm leading-relaxed pl-10">
                Run comprehensive matching checks <br className="hidden md:block" /> in minutes, not weeks.
              </p>
              {/* Divider */}
              <div className={`hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 transition-colors duration-500 ${mounted && resolvedTheme === 'light' ? 'bg-[var(--outline)]' : 'bg-[var(--outline)]'}`} />
            </div>

            {/* Col 3 */}
            <div className="px-0 md:pl-8 relative group/feature">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${mounted && resolvedTheme === 'light' ? 'bg-black/10 text-black group-hover/feature:bg-black group-hover/feature:text-white' : 'bg-white/20 text-white group-hover/feature:bg-white group-hover/feature:text-black'}`}>
                  <span className="material-symbols-outlined text-[16px]">verified_user</span>
                </div>
                <h3 className={`text-[var(--on-surface)] transition-colors duration-500 font-semibold text-base ${mounted && resolvedTheme === 'light' ? 'group-hover/feature:text-black' : 'group-hover/feature:text-white'}`}>RBI Compliant</h3>
              </div>
              <p className="text-[var(--on-muted)] transition-colors duration-500 text-sm leading-relaxed pl-10">
                Reliable lending transactions <br className="hidden md:block" /> backed by audit trails.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ══ S2 — TRUST / LENDER BAR ══ */}
      <section id="lender-bar" className={`py-12 sm:py-16 transition-colors duration-500 ${mounted && resolvedTheme === 'light' ? 'bg-[var(--surface-low)]' : ''}`}
        style={{ background: mounted && resolvedTheme === 'dark' ? colors.dark.surfaceLow : undefined }}>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className={`inline-flex items-center justify-center gap-2 font-(family-name:--font-jb-mono) text-xs sm:text-sm font-bold tracking-[0.12em] uppercase mb-4 px-5 py-2.5 border-2 rounded-full transition-all duration-300 ${mounted && resolvedTheme === 'light' ? 'bg-white text-[var(--on-surface)] border-[var(--outline)] shadow-[0_4px_20px_rgba(0,0,0,0.06)]' : ''}`}
            style={{ background: mounted && resolvedTheme === 'dark' ? colors.dark.surface : undefined, borderColor: mounted && resolvedTheme === 'dark' ? colors.dark.outline : undefined, color: mounted && resolvedTheme === 'dark' ? colors.dark.onSurface : undefined }}>
            <span className={`w-2 h-2 rounded-full ${mounted && resolvedTheme === 'light' ? 'bg-black' : 'bg-white'}`} />
            Social Proof
          </span>
          <h2 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl lg:text-2xl text-[var(--on-surface)] mb-3">
            Matched with lenders you can trust
          </h2>
          <p className="text-[var(--on-muted)] max-w-xl mx-auto mb-8 text-sm leading-relaxed">
            Cred2Tech connects agents and MSME to leading banks, NBFCs, and digital lenders all through a single eligibility check.
          </p>

          <div className="marquee-wrap mt-10 overflow-hidden relative h-16 sm:h-20">
            <div className={`absolute inset-y-0 left-0 w-32 bg-gradient-to-r z-10 ${mounted && resolvedTheme === 'light' ? 'from-[var(--surface-low)] via-[var(--surface-low)]/80 to-transparent' : ''}`}
              style={{ background: mounted && resolvedTheme === 'dark' ? `linear-gradient(to right, ${colors.dark.surfaceLow}, ${colors.dark.surfaceLow}80, transparent)` : undefined }} />
            <div className={`absolute inset-y-0 right-0 w-32 bg-gradient-to-l z-10 ${mounted && resolvedTheme === 'light' ? 'from-[var(--surface-low)] via-[var(--surface-low)]/80 to-transparent' : ''}`}
              style={{ background: mounted && resolvedTheme === 'dark' ? `linear-gradient(to left, ${colors.dark.surfaceLow}, ${colors.dark.surfaceLow}80, transparent)` : undefined }} />

            <div className="marquee-track marquee-fast flex items-center h-full min-w-max" id="lender-marquee">
              {[...lenders, ...lenders, ...lenders, ...lenders].map((lender, i) => (
                <div
                  key={`${lender.name}-${i}`}
                  className="flex shrink-0 items-center justify-center px-1 sm:px-2"
                  style={{ height: '48px' }}
                >
                  <img
                    src={lender.image}
                    alt={lender.name}
                    className="h-full w-auto object-contain brightness-100 contrast-100"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══ S3 — WHY CRED2TECH ══ */}
      <section id="why-cred2tech" className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden transition-colors duration-500 ${mounted && resolvedTheme === 'light' ? 'bg-[var(--bg)]' : ''}`}
        style={{ background: mounted && resolvedTheme === 'dark' ? colors.dark.bg : undefined }}>
        <div className={`px-orb w-[350px] h-[350px] absolute top-[-50px] right-[-60px] z-0 blur-[100px] transition-opacity duration-500 ${mounted && resolvedTheme === 'light' ? 'bg-black/8 opacity-100' : 'bg-white/12 opacity-100'}`} id="orb-s1" />
        <div className={`px-orb w-[280px] h-[280px] absolute bottom-[-40px] left-[5%] z-0 blur-[80px] transition-opacity duration-500 ${mounted && resolvedTheme === 'light' ? 'bg-black/6 opacity-100' : 'bg-white/10 opacity-100'}`} id="orb-s2" />
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header with Title Left and Arrows Right */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div className="max-w-2xl">
              <span className={`inline-flex items-center justify-center gap-2 font-(family-name:--font-jb-mono) text-xs sm:text-sm font-bold tracking-[0.12em] uppercase mb-3 px-5 py-2.5 border-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 ${mounted && resolvedTheme === 'light' ? 'bg-white text-[var(--on-surface)] border-[var(--outline)]' : ''}`}
                style={{ background: mounted && resolvedTheme === 'dark' ? colors.dark.surface : undefined, borderColor: mounted && resolvedTheme === 'dark' ? colors.dark.outline : undefined, color: mounted && resolvedTheme === 'dark' ? colors.dark.onSurface : undefined }}>
                <span className={`w-2 h-2 rounded-full ${mounted && resolvedTheme === 'light' ? 'bg-black' : 'bg-white'}`} />
                Why Cred2Tech
              </span>
              <h2 className="font-(family-name:--font-outfit) font-bold text-xl sm:text-2xl lg:text-[2.5rem] text-[var(--on-surface)] leading-tight uppercase tracking-wide">
                Credit the way it should have always worked.
              </h2>
              <p className="text-[var(--on-muted)] text-sm sm:text-base leading-relaxed mt-3">
                Cred2Tech simplifies India's MSME lending, transforming a difficult journey for both borrowers and DSAs simultaneously.
              </p>
            </div>
            {/* Navigation Arrows - Right Side */}
            <div className="flex items-center gap-2.5 sm:gap-3 mt-4 sm:mt-0">
              <button
                onClick={() => document.getElementById('feature-carousel')?.scrollBy({ left: -360, behavior: 'smooth' })}
                className={`w-11 h-11 flex items-center justify-center border transition-all duration-300 shadow-lg rounded-full hover:scale-105 active:scale-95 ${mounted && resolvedTheme === 'light' ? 'bg-white border-[var(--outline)] text-[var(--on-surface)] hover:border-black hover:text-black' : ''}`}
                style={{ background: mounted && resolvedTheme === 'dark' ? colors.dark.surface : undefined, borderColor: mounted && resolvedTheme === 'dark' ? colors.dark.outline : undefined, color: mounted && resolvedTheme === 'dark' ? colors.dark.onSurface : undefined }}
                aria-label="Scroll left"
                suppressHydrationWarning
              >
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
              </button>
              <button
                onClick={() => document.getElementById('feature-carousel')?.scrollBy({ left: 360, behavior: 'smooth' })}
                className={`w-11 h-11 flex items-center justify-center border transition-all duration-300 shadow-lg rounded-full hover:scale-105 active:scale-95 ${mounted && resolvedTheme === 'light' ? 'bg-black border-black text-white' : 'bg-white border-white text-black'}`}
                aria-label="Scroll right"
                suppressHydrationWarning
              >
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Feature Carousel */}
          <div className="relative overflow-visible">
            {/* Carousel Container */}
            <div id="feature-carousel" className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-2 -mx-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

              {/* Card 1: Intelligent Matching */}
              <div className={`snap-start shrink-0 w-[300px] sm:w-[340px] group relative overflow-hidden p-6 sm:p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${mounted && resolvedTheme === 'light' ? 'bg-white border-[var(--outline)] shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:border-black/30' : ''}`}
                style={{ background: mounted && resolvedTheme === 'dark' ? colors.dark.surface : undefined, borderColor: mounted && resolvedTheme === 'dark' ? colors.dark.outline : undefined, boxShadow: mounted && resolvedTheme === 'dark' ? '0 8px 30px rgba(0,0,0,0.3)' : undefined }}>
                <div className={`absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-black/10 to-transparent translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full ${mounted && resolvedTheme === 'light' ? '' : 'from-white/10'}`} />
                <div className="w-[120px] h-[120px] mb-4 overflow-hidden rounded-lg">
                  <ClientOnly>
                    <video
                      src="/images/Intelligent Matching.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </ClientOnly>
                </div>
                <h3 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl text-[var(--on-surface)] mb-2">Intelligent Matching</h3>
                <p className="text-[var(--on-muted)]/80 text-sm leading-relaxed relative z-10">
                  An AI enabled algorithm analyses ITR, GST, bank statements, and bureau data to identify the lender most likely to approve the case at the best rate.
                </p>
              </div>

              {/* Card 2: Secure & Private */}
              <div className={`snap-start shrink-0 w-[300px] sm:w-[340px] group relative overflow-hidden p-6 sm:p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${mounted && resolvedTheme === 'light' ? 'bg-white border-[var(--outline)] shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:border-black/30' : ''}`}
                style={{ background: mounted && resolvedTheme === 'dark' ? colors.dark.surface : undefined, borderColor: mounted && resolvedTheme === 'dark' ? colors.dark.outline : undefined, boxShadow: mounted && resolvedTheme === 'dark' ? '0 8px 30px rgba(0,0,0,0.3)' : undefined }}>
                <div className="w-[120px] h-[120px] mb-4 overflow-hidden rounded-lg">
                  <ClientOnly>
                    <video
                      src="/images/Secure & Private.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </ClientOnly>
                </div>
                <h3 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl text-[var(--on-surface)] mb-2">Secure & Private</h3>
                <p className="text-[var(--on-muted)]/80 text-sm leading-relaxed">
                  Customer financial data is fetched via secure, authorised APIs. Data remains fully encrypted, and the platform team has no access to customer details.
                </p>
              </div>

              {/* Card 3: Fast. Simple. Digital. */}
              <div className={`snap-start shrink-0 w-[300px] sm:w-[340px] group relative overflow-hidden p-6 sm:p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${mounted && resolvedTheme === 'light' ? 'bg-white border-[var(--outline)] shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:border-black/30' : ''}`}
                style={{ background: mounted && resolvedTheme === 'dark' ? colors.dark.surface : undefined, borderColor: mounted && resolvedTheme === 'dark' ? colors.dark.outline : undefined, boxShadow: mounted && resolvedTheme === 'dark' ? '0 8px 30px rgba(0,0,0,0.3)' : undefined }}>
                <div className="w-[120px] h-[120px] mb-4 overflow-hidden rounded-lg">
                  <ClientOnly>
                    <video
                      src="/images/Fast Simple Digital.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </ClientOnly>
                </div>
                <h3 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl text-[var(--on-surface)] mb-2">Fast. Simple. Digital.</h3>
                <p className="text-[var(--on-muted)]/80 text-sm leading-relaxed">
                  From eligibility check to lender introduction completed in minutes, not days or weeks. No branch visits. No paperwork piles.
                </p>
              </div>

              {/* Card 4: Full Transparency */}
              <div className={`snap-start shrink-0 w-[300px] sm:w-[340px] group relative overflow-hidden p-6 sm:p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${mounted && resolvedTheme === 'light' ? 'bg-white border-[var(--outline)] shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:border-black/30' : ''}`}
                style={{ background: mounted && resolvedTheme === 'dark' ? colors.dark.surface : undefined, borderColor: mounted && resolvedTheme === 'dark' ? colors.dark.outline : undefined, boxShadow: mounted && resolvedTheme === 'dark' ? '0 8px 30px rgba(0,0,0,0.3)' : undefined }}>
                <div className="w-[120px] h-[120px] mb-4 overflow-hidden rounded-lg">
                  <ClientOnly>
                    <video
                      src="/images/Full Transparency.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </ClientOnly>
                </div>
                <h3 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl text-[var(--on-surface)] mb-2">Full Transparency</h3>
                <p className="text-[var(--on-muted)]/80 text-sm leading-relaxed">
                  See exactly which lenders are available, at what loan amount, and at what interest rate before an application is even submitted. No hidden fees or surprises.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ S4 — FOR DSA AGENTS ══ */}
      <section
        id="for-dsas"
        className={`py-14 sm:py-18 lg:py-20 relative overflow-hidden transition-colors duration-500 border-y border-[var(--outline)] ${mounted && resolvedTheme === 'light' ? 'bg-white' : ''}`}
        style={{ background: mounted && resolvedTheme === 'dark' ? colors.dark.surface : undefined }}
      >
        {/* Theme-aware orbs */}
        <div className={`px-orb w-[400px] h-[400px] absolute top-[-100px] right-[-100px] z-0 blur-[100px] transition-opacity duration-500 ${mounted && resolvedTheme === 'light' ? 'opacity-0' : 'opacity-20'}`}
          style={{ background: mounted && resolvedTheme === 'light' ? '#000000' : '#ffffff' }} />
        <div className={`px-orb w-[300px] h-[300px] absolute bottom-[-100px] left-[5%] z-0 blur-[80px] transition-opacity duration-500 ${mounted && resolvedTheme === 'light' ? 'opacity-0' : 'opacity-10'}`}
          style={{ background: mounted && resolvedTheme === 'light' ? '#000000' : '#ffffff' }} />

        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--on-surface) 1.5px,transparent 1.5px)', backgroundSize: '32px 32px' }} />

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left */}
            <div className="relative">
              <div className="relative z-10">
                <p className="font-(family-name:--font-jb-mono) text-sm sm:text-base font-bold tracking-[0.18em] uppercase text-[var(--on-surface)] mb-3 opacity-60">For DSA Agents</p>
                <h2 className={`font-(family-name:--font-outfit) font-bold text-2xl sm:text-3xl lg:text-[2.75rem] mb-5 leading-tight transition-colors duration-500 ${mounted && resolvedTheme === 'light' ? 'text-black' : 'text-white'}`}>
                  Run your lending <br className="hidden lg:block" /> business like a pro.
                </h2>
                <p className={`text-sm sm:text-[1.05rem] leading-relaxed mb-8 max-w-lg transition-colors duration-500 font-light ${mounted && resolvedTheme === 'light' ? 'text-black/70' : 'text-white/80'}`}>
                  Cred2Tech is the all-in-one OS for DSAs. Manage sourcing, teams, and commissions while using credit packages for instant eligibility checks.
                </p>
                <TravelingBorderButton href="/login">
                  Register as a DSA Partner
                </TravelingBorderButton>
              </div>

              {/* Sub-bg Lottie */}
              <div className="absolute -top-20 -left-20 w-80 h-80 opacity-[0.04] pointer-events-none hidden xl:block">
                <ClientOnly>
                  <LottiePlayer src="/lottie/data_admin_recolored.json" background="transparent" speed="0.8" loop autoplay />
                </ClientOnly>
              </div>
            </div>

            {/* Right — 4 Benefits */}
            <div className="relative">
              <div className="grid grid-cols-1 gap-4 relative z-10">
                {[
                  { icon: 'view_kanban', title: 'Entire pipeline in one view', desc: 'No more spreadsheets. Every case, every stage, every lender — tracked live.' },
                  { icon: 'bolt', title: 'Instant lender eligibility', desc: 'Run an MSME Loan eligibility check in minutes. Multiple lenders, one report.' },
                  { icon: 'wallet', title: 'Team & wallet management', desc: 'Purchase credit packages, allocate balance to teams, track consumption, and manage sub-DSA networks.' },
                  { icon: 'payments', title: 'Payout Tracking', desc: 'Know exactly what has been earned, what is pending, and what has been paid out.' },
                ].map((item) => (
                  <div key={item.title} className={`flex items-start gap-5 p-5 sm:p-6 border transition-all duration-500 rounded-2xl group/card ${mounted && resolvedTheme === 'light' ? 'bg-white/70 backdrop-blur-md border-[var(--outline)] hover:border-black/30 shadow-sm' : ''}`}
                    style={{ background: mounted && resolvedTheme === 'dark' ? `${colors.dark.surface}80` : undefined, borderColor: mounted && resolvedTheme === 'dark' ? colors.dark.outline : undefined }}>
                    <div className={`w-12 h-12 border flex items-center justify-center flex-shrink-0 mt-0.5 rounded-xl transition-all duration-500 ${mounted && resolvedTheme === 'light' ? 'bg-black/10 border-black/20 text-black group-hover/card:bg-black group-hover/card:text-white' : ''}`}
                      style={{ background: mounted && resolvedTheme === 'dark' ? 'rgba(255,255,255,0.2)' : undefined, borderColor: mounted && resolvedTheme === 'dark' ? '#ffffff' : undefined, color: mounted && resolvedTheme === 'dark' ? '#ffffff' : undefined }}>
                      <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className={`font-(family-name:--font-outfit) font-bold text-base sm:text-lg mb-1.5 transition-colors ${mounted && resolvedTheme === 'light' ? 'text-[var(--on-surface)] group-hover/card:text-black' : ''}`}
                        style={{ color: mounted && resolvedTheme === 'dark' ? colors.dark.onSurface : undefined }}>{item.title}</h3>
                      <p className={`text-sm leading-relaxed transition-colors font-light ${mounted && resolvedTheme === 'light' ? 'text-[var(--on-muted)]' : ''}`}
                        style={{ color: mounted && resolvedTheme === 'dark' ? colors.dark.onMuted : undefined }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ S5 — FOR BUSINESS OWNERS ══ */}
      <section id="for-msmes" className={`py-14 sm:py-18 lg:py-20 relative overflow-hidden transition-colors duration-500 ${mounted && resolvedTheme === 'light' ? 'bg-[var(--bg)]' : ''}`}
        style={{ background: mounted && resolvedTheme === 'dark' ? colors.dark.bg : undefined }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(var(--on-surface) 1.5px,transparent 1.5px),linear-gradient(90deg,var(--on-surface) 1.5px,transparent 1.5px)', backgroundSize: '48px 48px' }} />

        {/* Theme-aware orbs */}
        <div className={`px-orb w-[450px] h-[450px] absolute top-[-100px] left-[-100px] z-0 blur-[120px] transition-opacity duration-500 ${mounted && resolvedTheme === 'light' ? 'opacity-0' : 'opacity-15'}`}
          style={{ background: mounted && resolvedTheme === 'light' ? '#000000' : '#ffffff' }} />
        <div className={`px-orb w-[350px] h-[350px] absolute bottom-[-100px] right-[5%] z-0 blur-[100px] transition-opacity duration-500 ${mounted && resolvedTheme === 'light' ? 'opacity-0' : 'opacity-10'}`}
          style={{ background: mounted && resolvedTheme === 'light' ? '#000000' : '#ffffff' }} />

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 relative">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 opacity-[0.05] pointer-events-none">
              <ClientOnly>
                <LottiePlayer src="/lottie/data_msme_recolored.json" background="transparent" speed="0.7" loop autoplay />
              </ClientOnly>
            </div>
            <div className="relative z-10">
              <p className="font-(family-name:--font-jb-mono) text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-[var(--on-surface)] mb-4 opacity-60">For Business Owners</p>
              <h2 className="font-(family-name:--font-outfit) font-bold text-2xl sm:text-3xl lg:text-[3rem] text-[var(--on-surface)] mb-6 leading-tight">
                Your business deserves <br /> better credit.
              </h2>
              <p className="text-[var(--on-muted)] text-sm sm:text-[1.05rem] leading-relaxed max-w-2xl mx-auto font-light">
                Cred2Tech gives MSME owners a clear, honest picture of the Loan options available to them for a nominal fee.
              </p>
            </div>
          </div>

          {/* 4-Step Process */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
            {[
              { step: '01', title: 'Eligibility check runs', desc: 'Bureau, ITR, GST, and bank data analysed in real time across multiple lenders.', icon: 'analytics' },
              { step: '02', title: 'Lender Matching', desc: 'Choose the best Loan offer; a Cred2Tech-empanelled agent handles the rest.', icon: 'handshake' },
              { step: '03', title: 'Document Vault', desc: 'All financial documents — ITR, GST, PAN, property papers — organised securely.', icon: 'folder_shared' },
              { step: '04', title: 'Application Tracking', desc: 'Track case status in real time — from submission to disbursement.', icon: 'track_changes' },
            ].map((item) => (
              <div key={item.step} className={`group/step p-6 sm:p-8 border transition-all duration-500 rounded-3xl ${mounted && resolvedTheme === 'light' ? 'bg-white/40 backdrop-blur-sm border-[var(--outline)] hover:border-black/20 shadow-sm' : ''}`}
                style={{ background: mounted && resolvedTheme === 'dark' ? `${colors.dark.surface}80` : undefined, borderColor: mounted && resolvedTheme === 'dark' ? colors.dark.outline : undefined }}>
                <div className={`w-12 h-12 flex items-center justify-center mb-6 rounded-xl transition-all duration-500 ${mounted && resolvedTheme === 'light' ? 'bg-black/10 text-black group-hover/step:bg-black group-hover/step:text-white' : ''}`}
                  style={{ background: mounted && resolvedTheme === 'dark' ? 'rgba(255,255,255,0.2)' : undefined, color: mounted && resolvedTheme === 'dark' ? '#ffffff' : undefined }}>
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <div className={`font-(family-name:--font-jb-mono) text-3xl sm:text-4xl font-black mb-4 transition-colors opacity-10 group-hover/step:opacity-20 ${mounted && resolvedTheme === 'light' ? 'text-[var(--on-surface)]' : ''}`}
                  style={{ color: mounted && resolvedTheme === 'dark' ? colors.dark.onSurface : undefined }}>
                  {item.step}
                </div>
                <h3 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl text-[var(--on-surface)] mb-2.5">{item.title}</h3>
                <p className="text-[var(--on-muted)] text-[13px] sm:text-[14px] leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <TravelingBorderButton href="/login" showIcon={true}>
              Check My Eligibility
            </TravelingBorderButton>
          </div>
        </div>
      </section>

      {/* ══ S6 — ON THE HORIZON ══ */}
      <section
        id="coming-soon"
        className={`py-16 sm:py-24 relative overflow-hidden transition-colors duration-500 ${mounted && resolvedTheme === 'light' ? 'bg-[var(--surface-low)]' : ''}`}
        style={{ background: mounted && resolvedTheme === 'dark' ? colors.dark.surfaceLow : undefined }}
      >
        {/* Subtle Light-themed Background Effects */}
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(var(--on-surface) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className={`px-orb w-[600px] h-[600px] absolute top-[-200px] right-[-100px] z-0 transition-opacity duration-500 ${mounted && resolvedTheme === 'light' ? 'opacity-0' : 'opacity-100'}`} id="orb-pr1"
          style={{ background: mounted && resolvedTheme === 'dark' ? '#ffffff' : undefined }} />
        <div className={`px-orb w-[500px] h-[500px] absolute bottom-[-150px] left-[-80px] z-0 transition-opacity duration-500 ${mounted && resolvedTheme === 'light' ? 'opacity-0' : 'opacity-100'}`} id="orb-pr2"
          style={{ background: mounted && resolvedTheme === 'dark' ? '#ffffff' : undefined }} />

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div
            className={`max-w-4xl mx-auto p-8 sm:p-14 border shadow-[0_32px_80px_-20px_rgba(0,0,0,0.12)] relative overflow-hidden rounded-3xl ${mounted && resolvedTheme === 'light' ? 'border-white' : ''}`}
            style={{
              background: mounted && resolvedTheme === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(17, 17, 17, 0.8)',
              backdropFilter: 'blur(32px)',
              borderColor: mounted && resolvedTheme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : undefined,
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br pointer-events-none ${mounted && resolvedTheme === 'light' ? 'from-white to-transparent' : 'from-[var(--dark-surface)] to-transparent'}`} />

            <div className="relative z-10">
              <div className={`inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full ${mounted && resolvedTheme === 'light' ? 'bg-black/5 border border-black/10' : 'bg-white/10 border border-white/20'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${mounted && resolvedTheme === 'light' ? 'bg-black' : 'bg-white'}`} />
                <span className={`font-(family-name:--font-jb-mono) text-[11px] font-bold tracking-[0.2em] uppercase ${mounted && resolvedTheme === 'light' ? 'text-black/60' : 'text-white'}`}>On the Horizon</span>
              </div>

              <h2 className={`font-(family-name:--font-outfit) font-bold text-3xl sm:text-4xl lg:text-[2.75rem] mb-6 leading-tight ${mounted && resolvedTheme === 'light' ? 'text-black' : 'text-[var(--on-surface)]'}`}>
                Never miss a government <br className="hidden sm:block" /> scheme again.
              </h2>

              <div className="absolute -bottom-10 -right-10 w-56 h-56 opacity-[0.12] pointer-events-none">
                <ClientOnly>
                  <LottiePlayer src="/lottie/forgot_password_recolored.json" background="transparent" speed="0.5" loop autoplay />
                </ClientOnly>
              </div>

              <p className={`text-sm sm:text-base lg:text-[1.05rem] leading-relaxed mb-10 max-w-2xl mx-auto ${mounted && resolvedTheme === 'light' ? 'text-black/70' : 'text-[var(--on-muted)]'}`}>
                India has hundreds of central and state government schemes for MSMEs — subsidies, credit guarantees, grants, and incentives. Most businesses never find them.
                <span className={`font-bold ${mounted && resolvedTheme === 'light' ? 'text-black' : 'text-[var(--on-surface)]'}`}> We're building a first-of-its-kind Government Scheme Identification Engine </span>
                that maps your business profile to every scheme you qualify for.
              </p>

              <form id="notify-form" className="max-w-md mx-auto mt-8" onSubmit={(e) => e.preventDefault()}>
                <div className={`relative flex items-center p-1.5 rounded-2xl focus-within:ring-2 transition-all ${mounted && resolvedTheme === 'light' ? 'bg-black/5 border border-black/10 focus-within:ring-black/5' : 'bg-[var(--dark-surface)] border-[var(--dark-outline)] focus-within:ring-white/20'}`}>
                  <div className="flex-1 flex items-center pl-3">
                    <span className={`material-symbols-outlined text-[20px] mr-2 ${mounted && resolvedTheme === 'light' ? 'text-black/30' : 'text-[var(--on-muted)]'}`}>mail</span>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className={`w-full bg-transparent border-none focus:outline-none text-[0.9375rem] placeholder:text-opacity-30 ${mounted && resolvedTheme === 'light' ? 'text-black placeholder:text-black/30' : 'text-[var(--on-surface)] placeholder:text-[var(--on-muted)]'}`}
                      required
                    />
                  </div>
                  <TravelingBorderButton type="submit" size="sm" showIcon={false} className="shrink-0">
                    Notify Me
                  </TravelingBorderButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══ S8 — FINAL CTA ══ */}
      <section
        id="final-cta"
        className={`py-14 sm:py-18 lg:py-20 relative overflow-hidden text-center transition-colors duration-500 ${mounted && resolvedTheme === 'light' ? 'bg-white' : ''}`}
        style={{ background: mounted && resolvedTheme === 'dark' ? colors.dark.surface : undefined }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(var(--on-surface) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />

        {/* Marquee */}
        <div className={`marquee-wrap mb-10 sm:mb-12 border-y py-3.5 overflow-hidden opacity-40 ${mounted && resolvedTheme === 'light' ? 'border-[var(--outline)]' : 'border-[var(--dark-outline)]'}`}>
          <div className="marquee-track marquee-fast">
            {[...Array(6)].map((_, groupIdx) => (
              <React.Fragment key={groupIdx}>
                {['Top Lender Offers', '✦', 'MSME Specific', '✦', 'Quick Disbursal', '✦', 'FAST TRACK'].map((item, i) => (
                  <span key={`${groupIdx}-${i}`} className={`font-(family-name:--font-jb-mono) text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap ${mounted && resolvedTheme === 'light' ? 'text-[var(--on-surface)]' : 'text-[var(--on-surface)]'}`}>
                    {item}
                  </span>
                ))}
                <span className={`font-(family-name:--font-jb-mono) text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase ${mounted && resolvedTheme === 'light' ? 'text-[var(--on-surface)]' : 'text-[var(--on-surface)]'}`}>
                  ✦
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto">
            <p className="font-(family-name:--font-jb-mono) text-sm sm:text-base font-bold tracking-[0.18em] uppercase text-[var(--on-surface)] mb-3">Get Started Today</p>
            <h2 className={`font-(family-name:--font-outfit) font-bold text-xl sm:text-2xl lg:text-[2rem] mb-3 sm:mb-4 leading-tight transition-colors ${mounted && resolvedTheme === 'light' ? 'text-[var(--on-surface)]' : 'text-[var(--on-surface)]'}`}>
              Credit, Simplified. For every DSA who closes it and every MSME that deserves it.
            </h2>
            <p className={`text-sm sm:text-[0.9375rem] mb-8 sm:mb-10 leading-relaxed transition-colors ${mounted && resolvedTheme === 'light' ? 'text-[var(--on-muted)]' : 'text-[var(--on-muted)]'}`}>
              DSA agents and MSMEs across India are already using Cred2Tech to access smarter credit faster.
            </p>
            <div className="flex flex-col xs:flex-row justify-center gap-4">
              <TravelingBorderButton href="/login">
                Register as a DSA Partner
              </TravelingBorderButton>
              <TravelingBorderButton href="/login" className="!bg-transparent">
                Check My Loan Eligibility
              </TravelingBorderButton>
            </div>
          </div>
        </div>
      </section>

      <style>{`
 .material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;}
 @media(max-width:1023px){.px-orb{opacity:0.08!important;}}
 `}</style>
    </div>
  );
}
