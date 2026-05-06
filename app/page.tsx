'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { ThreeDCard } from './components/ThreeDCard';
import { TravelingBorderButton } from './components/TravelingBorderButton';
import { MarqueeTicker } from './components/MarqueeTicker';
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

/* ─────────────────────────────────────────────
 Main Page
───────────────────────────────────────────── */
export default function HomePage() {
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

  // Intersection observer for stats strip to trigger counting animation
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

      {/* ══ S1 — HERO ══ */}
      <section
        id="hero-section"
        className="relative h-screen flex flex-col justify-center overflow-hidden transition-colors duration-500"
      >
        {/* ═══ STROBE / SPOTLIGHT CONE — Visible V-beam from top ═══ */}
        {/* Wide outer cone glow */}
        <div className="hidden lg:block absolute top-[-15%] right-[12%] w-[500px] h-[110%] pointer-events-none z-[50] animate-strobe-light"
          style={{
            background: 'linear-gradient(to bottom, rgba(140,170,255,0.7) 0%, rgba(100,130,255,0.3) 20%, rgba(78,84,200,0.08) 60%, transparent 85%)',
            clipPath: 'polygon(42% 0%, 58% 0%, 100% 100%, 0% 100%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Bright inner core */}
        <div className="hidden lg:block absolute top-[-15%] right-[14%] w-[350px] h-[100%] pointer-events-none z-[51] animate-strobe-light"
          style={{
            background: 'linear-gradient(to bottom, rgba(200,220,255,0.8) 0%, rgba(160,180,255,0.35) 15%, rgba(120,140,255,0.1) 50%, transparent 75%)',
            clipPath: 'polygon(44% 0%, 56% 0%, 90% 100%, 10% 100%)',
            filter: 'blur(40px)',
          }}
        />
        {/* Ground splash — where the light hits */}
        <div className="absolute bottom-[15%] right-[10%] w-[600px] h-[200px] pointer-events-none z-[3]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(100,140,255,0.25) 0%, rgba(78,84,200,0.08) 40%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
        {/* Ambient haze */}
        <div className="absolute -top-[5%] right-[0%] w-[800px] h-[800px] bg-gradient-to-b from-blue-500/15 via-indigo-500/5 to-transparent blur-[80px] pointer-events-none z-[3]" />

        {/* Perspective Grid Floor */}
        <div className="absolute bottom-0 left-0 w-full h-[50%] z-0 pointer-events-none"
          style={{ perspective: '1200px' }}>
          <div className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(#4E54C8 1px, transparent 1px), linear-gradient(90deg, #4E54C8 1px, transparent 1px)',
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
              <span className="inline-flex items-center text-[#4a8df8] font-(family-name:--font-jb-mono) text-sm font-medium tracking-wide">
                India's MSME Credit Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-(family-name:--font-outfit) font-bold text-[2rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3rem] xl:text-[3.25rem] leading-[1.1] tracking-tight text-[var(--on-surface)] transition-colors duration-500 mb-4">
              The smartest way to close MSME credit and for businesses to find it.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-[1.15rem] text-[var(--on-muted)] transition-colors duration-500 max-w-lg mb-8 leading-relaxed font-light">
              Cred2Tech uses proprietary algorithms to match Indian MSMEs and DSAs with ideal lenders in minutes.
            </p>
          </div>

          {/* Buttons positioned near bottom section */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-2">
            <TravelingBorderButton href="/register-dsa" size="sm">
              Register as a DSA Partner
            </TravelingBorderButton>

            {/* Secondary Button to keep content intact */}
            <TravelingBorderButton href="/login" solid={true} showIcon={true} size="sm">
              Check My Loan Eligibility
            </TravelingBorderButton>

            {/* Request Demo Button */}
            <TravelingBorderButton href="/login" solid={false} showIcon={false} size="sm">
              Request a Demo
            </TravelingBorderButton>
          </div>

          {/* Trust Line */}
          <div className="text-sm text-[var(--on-muted)] mt-5 font-semibold">
            Your data stays private. Secure. Confidential.
          </div>

          {/* Bottom 3-Column Section matched exactly from image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mt-auto pt-2 pb-4 w-full relative z-10 border-t border-[var(--outline)] md:border-none text-left">

            {/* Col 1 */}
            <div className="pr-8 relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-sm bg-[var(--on-surface)] flex items-center justify-center text-[var(--bg)] transition-colors duration-500 p-1.5">
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                </div>
                <h3 className="text-[var(--on-surface)] transition-colors duration-500 font-semibold text-base">Secure Data Protection</h3>
              </div>
              <p className="text-[var(--on-muted)] transition-colors duration-500 text-sm leading-relaxed pl-11">
                Your data is protected with <br className="hidden md:block" /> industry-standard encryption.
              </p>
              {/* Divider */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[var(--outline)] transition-colors duration-500" />
            </div>

            {/* Col 2 */}
            <div className="px-0 md:px-8 relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-sm bg-[var(--on-surface)] flex items-center justify-center text-[var(--bg)] transition-colors duration-500 p-1.5">
                  <span className="material-symbols-outlined text-[16px]">speed</span>
                </div>
                <h3 className="text-[var(--on-surface)] transition-colors duration-500 font-semibold text-base">10-min Eligibility</h3>
              </div>
              <p className="text-[var(--on-muted)] transition-colors duration-500 text-sm leading-relaxed pl-11">
                Run comprehensive matching checks <br className="hidden md:block" /> in minutes, not weeks.
              </p>
              {/* Divider */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[var(--outline)] transition-colors duration-500" />
            </div>

            {/* Col 3 */}
            <div className="px-0 md:pl-8 relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-sm bg-[var(--on-surface)] flex items-center justify-center text-[var(--bg)] transition-colors duration-500 p-1.5 font-bold text-[16px]">C</div>
                <h3 className="text-[var(--on-surface)] transition-colors duration-500 font-semibold text-base">Professional Standards</h3>
              </div>
              <p className="text-[var(--on-muted)] transition-colors duration-500 text-sm leading-relaxed pl-11">
                Following industry best practices <br className="hidden md:block" /> for reliable operations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ══ S2 — TRUST / LENDER BAR ══ */}
      <section id="lender-bar" className={`py-12 sm:py-16 transition-colors duration-500 ${mounted && resolvedTheme === 'light' ? 'bg-[var(--surface-low)]' : 'bg-[var(--bg)]'}`}>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center justify-center gap-2 font-(family-name:--font-jb-mono) text-xs sm:text-sm font-bold tracking-[0.12em] uppercase mb-4 px-5 py-2.5 border-2 rounded-full transition-all duration-300 bg-[var(--surface)] text-[var(--on-surface)] border-[var(--outline)] shadow-[0_4px_20px_rgba(11,33,71,0.15)]">
            <span className="w-2 h-2 bg-[var(--on-surface)] rounded-full" />
            Social Proof
          </span>
          <h2 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl lg:text-2xl text-[var(--on-surface)] mb-3">
            Matched with lenders you can trust
          </h2>
          <p className="text-[var(--on-muted)] max-w-xl mx-auto mb-8 text-sm leading-relaxed">
            Cred2Tech connects agents and MSME to leading banks, NBFCs, and digital lenders all through a single eligibility check.
          </p>

          <div className="marquee-wrap mt-10 overflow-hidden relative h-16 sm:h-20">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r z-10 from-[var(--surface-low)] via-[var(--surface-low)]/80 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l z-10 from-[var(--surface-low)] via-[var(--surface-low)]/80 to-transparent" />

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
      <section id="why-cred2tech" className="py-20 sm:py-28 lg:py-32 relative overflow-hidden transition-colors duration-500 bg-[var(--bg)]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-14 sm:mb-18 max-w-xl">
            <p className="reveal text-xs font-bold tracking-[0.2em] uppercase text-[var(--on-muted)] mb-4">Why Cred2Tech</p>
            <h2 className="reveal font-(family-name:--font-outfit) font-bold text-2xl sm:text-2.5rem lg:text-[2.25rem] text-[var(--on-surface)] leading-[1.1] mb-4" style={{ transitionDelay: '0.1s' }}>
              Credit the way it should have always worked.
            </h2>
            <p className="reveal text-[var(--on-muted)] text-base leading-relaxed" style={{ transitionDelay: '0.18s' }}>
              Cred2Tech simplifies India's MSME lending, transforming a difficult journey for both borrowers and DSAs simultaneously.
            </p>
          </div>

          {/* Two-column feature list — large illustration right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Left — stacked feature rows */}
            <div className="space-y-0 divide-y divide-[var(--outline)]">
              {[
                { title: '🎯 Intelligent Matching', desc: 'An AI enabled algorithm analyses ITR, GST, bank statements, and bureau data to identify the lender most likely to approve the case at the best rate.', video: '/images/Intelligent Matching.mp4' },
                { title: '🔐 Secure & Private', desc: 'Customer financial data is fetched via secure, authorised APIs with explicit consent at every step. Nothing is shared without authorisation. Data remains fully encrypted at all times. The Cred2Tech platform team has no access to the financial data, name, or contact details of any customer onboarded through a DSA.', video: '/images/Secure & Private.mp4' },
                { title: '⚡ Fast. Simple. Digital.', desc: 'From eligibility check to lender introduction completed in minutes, not days or weeks. No branch visits. No paperwork piles.', video: '/images/Fast Simple Digital.mp4' },
                { title: '📊 Full Transparency', desc: 'See exactly which lenders are available, at what loan amount, and at what interest rate before an application is even submitted.', video: '/images/Full Transparency.mp4' },
              ].map((item, i) => (
                <div key={item.title} className="reveal group flex items-start gap-5 py-7" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden border border-[var(--outline)] bg-white">
                    <ClientOnly>
                      <video src={item.video} autoPlay loop muted playsInline className="w-full h-full object-contain" />
                    </ClientOnly>
                  </div>
                  <div>
                    <h3 className="font-(family-name:--font-outfit) font-bold text-base sm:text-lg text-[var(--on-surface)] mb-1.5">{item.title}</h3>
                    <p className="text-[var(--on-muted)] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right — single large illustration */}
            <div className="reveal sticky top-24 w-full aspect-square max-w-xl mx-auto lg:mx-0  overflow-hidden" style={{ transitionDelay: '0.12s' }}>
              <img src="/animation-svg.svg" alt="Credit the way it should have always worked" className="w-full h-full object-contain" />
            </div>

          </div>
        </div>
      </section>

      {/* ══ S4 — FOR DSA AGENTS ══ */}
      <section
        id="for-dsas"
        className="py-20 sm:py-28 lg:py-32 relative overflow-hidden transition-colors duration-500 border-t border-[var(--outline)] bg-[var(--surface)]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="reveal text-xs font-bold tracking-[0.2em] uppercase text-[var(--on-muted)] mb-4">For DSA Agents</p>
            <h2 className="reveal font-(family-name:--font-outfit) font-bold text-2xl sm:text-2.5rem lg:text-[2.25rem] text-[var(--on-surface)] leading-[1.1] mb-4" style={{ transitionDelay: '0.1s' }}>
              Run your lending business like a pro.
            </h2>
            <p className="reveal text-[var(--on-muted)] text-base leading-relaxed" style={{ transitionDelay: '0.18s' }}>
              Cred2Tech is the all-in-one OS for DSAs. Manage sourcing, teams, and commissions while using credit packages for instant eligibility checks.
            </p>
          </div>

          {/* Stats strip */}
          <div ref={statsRef} className="reveal grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[var(--outline)] border border-[var(--outline)] rounded-2xl mb-14 overflow-hidden" style={{ transitionDelay: '0.22s' }}>
            {[
              { value: 5, suffix: ' min', label: 'Eligibility check' },
              { value: 50, suffix: '+', label: 'Lender integrations' },
              { value: 100, suffix: '%', label: 'Digital workflow' },
              { value: 0, suffix: '', label: 'Commission hidden' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center py-8 px-4 text-center">
                <span className="font-(family-name:--font-outfit) font-bold text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] text-[var(--on-surface)] leading-none mb-1.5">
                  {stat.value === 0 ? '₹0' : <CountUp value={stat.value} suffix={stat.suffix} duration={1500} revealed={statsRevealed} />}
                </span>
                <span className="text-xs text-[var(--on-muted)] font-medium">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Feature grid — illustration left, text right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-[var(--outline)] rounded-2xl overflow-hidden">
            {[
              { video: '/images/case management.mp4', title: 'Entire pipeline in one view', desc: 'No more spreadsheets. Every case, every stage, every lender tracked live.' },
              { video: '/images/Lender Matching.mp4', title: 'Instant lender eligibility', desc: 'Run an MSME Loan eligibility check in minutes. Multiple lenders, one report.' },
              { video: '/images/team management.mp4', title: 'Team & wallet management', desc: 'Purchase credit packages, allocate balance to teams, track consumption, and manage sub-DSA networks.' },
              { video: '/images/wallet management.mp4', title: 'Payout Tracking', desc: 'Know exactly what has been earned, what is pending, and what has been paid out.' },
            ].map((item, i) => (
              <div key={item.title}
                className="reveal bg-[var(--bg)] flex flex-col sm:flex-row items-stretch"
                style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="w-full sm:w-[140px] shrink-0 h-40 sm:h-auto overflow-hidden bg-white border-b sm:border-b-0 sm:border-r border-[var(--outline)]">
                  <ClientOnly>
                    <video src={item.video} autoPlay loop muted playsInline className="w-full h-full object-contain" />
                  </ClientOnly>
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="font-(family-name:--font-outfit) font-bold text-sm sm:text-base text-[var(--on-surface)] mb-2">{item.title}</h3>
                  <p className="text-[var(--on-muted)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-12 flex justify-center" style={{ transitionDelay: '0.3s' }}>
            <TravelingBorderButton href="/login" solid={true} size="sm">
              Register as a DSA Partner
            </TravelingBorderButton>
          </div>
        </div>
      </section>

      {/* ══ S5 — FOR BUSINESS OWNERS ══ */}
      <section id="for-msmes" className="py-20 sm:py-28 lg:py-32 relative overflow-hidden transition-colors duration-500 bg-[var(--bg)] border-t border-[var(--outline)]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="reveal text-xs font-bold tracking-[0.2em] uppercase text-[var(--on-muted)] mb-4">For Business Owners</p>
            <h2 className="reveal font-(family-name:--font-outfit) font-bold text-2xl sm:text-2.5rem lg:text-[2.25rem] text-[var(--on-surface)] leading-[1.1] mb-4" style={{ transitionDelay: '0.1s' }}>
              Your business deserves better credit.
            </h2>
            <p className="reveal text-[var(--on-muted)] text-base leading-relaxed" style={{ transitionDelay: '0.18s' }}>
              Cred2Tech gives MSME owners a clear, honest picture of the Loan options available to them for a nominal fee.
            </p>
          </div>

          {/* Steps — numbered rows with illustration */}
          <div className="space-y-px border border-[var(--outline)] rounded-2xl overflow-hidden">
            {[
              { video: '/images/Intelligent Matching.mp4', step: '01', title: 'Eligibility check runs', desc: 'Bureau, ITR, GST, and bank data analysed in real time across multiple lenders.' },
              { video: '/images/Lender Matching.mp4', step: '02', title: 'Lender Matching', desc: 'Choose the best Loan offer; a Cred2Tech-empanelled agent handles the rest.' },
              { video: '/images/Document Vault.mp4', step: '03', title: 'Document Vault', desc: 'All financial documents ITR, GST, bank statements, PAN, Aadhaar, property papers organised and accessible in one secure place.' },
              { video: '/images/Application Tracking.mp4', step: '04', title: 'Application Tracking', desc: 'Track case status in real time from submission to sanction to disbursement.' },
            ].map((item, i) => (
              <div key={item.step}
                className="reveal group flex flex-col sm:flex-row items-stretch bg-[var(--surface)] border-b border-[var(--outline)] last:border-b-0"
                style={{ transitionDelay: `${i * 0.09}s` }}>
                {/* Step number */}
                <div className="flex items-center justify-center sm:justify-start px-6 sm:px-8 py-4 sm:py-0 sm:w-20 shrink-0 border-b sm:border-b-0 sm:border-r border-[var(--outline)]">
                  <span className="font-(family-name:--font-outfit) font-bold text-2xl text-[var(--on-surface)]/20 select-none">{item.step}</span>
                </div>
                {/* Illustration */}
                <div className="w-full sm:w-[120px] shrink-0 h-36 sm:h-auto overflow-hidden bg-white border-b sm:border-b-0 sm:border-r border-[var(--outline)]">
                  <ClientOnly>
                    <video src={item.video} autoPlay loop muted playsInline className="w-full h-full object-contain" />
                  </ClientOnly>
                </div>
                {/* Text */}
                <div className="px-6 py-6 flex flex-col justify-center">
                  <h3 className="font-(family-name:--font-outfit) font-bold text-base sm:text-lg text-[var(--on-surface)] mb-1.5">{item.title}</h3>
                  <p className="text-[var(--on-muted)] text-sm leading-relaxed max-w-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-8 flex justify-center" style={{ transitionDelay: '0.3s' }}>
            <TravelingBorderButton href="/login" showIcon={true} solid={true} size="sm">
              Check My Eligibility
            </TravelingBorderButton>
          </div>
        </div>
      </section>

      {/* ══ S6 — ON THE HORIZON ══ */}
      <section
        id="coming-soon"
        className="py-20 sm:py-28 lg:py-32 relative overflow-hidden transition-colors duration-500 border-t border-[var(--outline)] bg-[var(--surface)]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — text */}
            <div>
              <p className="reveal text-xs font-bold tracking-[0.2em] uppercase text-[var(--on-muted)] mb-6">On the Horizon</p>
              <h2 className="reveal font-(family-name:--font-outfit) font-bold text-2xl sm:text-2.5rem lg:text-[2.25rem] leading-[1.1] mb-6 text-[var(--on-surface)]" style={{ transitionDelay: '0.1s' }}>
                Never miss a government scheme again.
              </h2>
              <p className="reveal text-[var(--on-muted)] text-base leading-relaxed mb-4" style={{ transitionDelay: '0.18s' }}>
                India has hundreds of MSME schemes subsidies, guarantees, grants, and incentives yet most businesses miss them. Cred2Tech is building a first-of-its-kind engine that identifies every scheme a business may qualify for and guides them through the application journey.
              </p>
              <div className="reveal" style={{ transitionDelay: '0.3s' }}>
                <ClientOnly>
                  <form id="notify-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex items-center border border-[var(--outline)] rounded-xl overflow-hidden bg-[var(--bg)]">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 bg-transparent px-4 py-3.5 text-sm text-[var(--on-surface)] placeholder:text-[var(--on-muted)] focus:outline-none"
                        required
                      />
                      <TravelingBorderButton type="submit" size="sm" showIcon={false} className="shrink-0 m-1.5" solid={true}>
                        Notify Me When It Launches
                      </TravelingBorderButton>
                    </div>
                  </form>
                </ClientOnly>
              </div>
            </div>

            {/* Right — illustration panel */}
            <div className="reveal rounded-2xl overflow-hidden aspect-square max-w-md mx-auto lg:mx-0" style={{ transitionDelay: '0.14s' }}>
              <ClientOnly>
                <LottiePlayer src="/lottie/data_msme_recolored.json" background="transparent" speed="0.7" loop autoplay />
              </ClientOnly>
            </div>

          </div>
        </div>
      </section>

      {/* ══ S8 — FINAL CTA ══ */}
      <section
        id="final-cta"
        className="relative overflow-hidden transition-colors duration-500 bg-[var(--bg)] border-t border-[var(--outline)]"
      >
        <div className="mb-12">
          <MarqueeTicker />
        </div>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="reveal text-xs font-bold tracking-[0.2em] uppercase text-[var(--on-muted)] mb-6">Get Started Today</p>
            <h2 className="reveal font-(family-name:--font-outfit) font-bold text-2xl sm:text-2.5rem lg:text-[2.25rem] mb-5 leading-[1.1] text-[var(--on-surface)]" style={{ transitionDelay: '0.1s' }}>
              Credit, Simplified. For every DSA who closes it and every MSME that deserves it.
            </h2>
            <p className="reveal text-[var(--on-muted)] text-base leading-relaxed mb-12" style={{ transitionDelay: '0.18s' }}>
              DSA agents and MSMEs across India are already using Cred2Tech to access smarter credit faster.
            </p>
            <div className="reveal flex flex-col sm:flex-row justify-center gap-4 mb-14" style={{ transitionDelay: '0.24s' }}>
              <TravelingBorderButton href="/register-dsa" solid={true} size="sm">
                Register as a DSA
              </TravelingBorderButton>
              <TravelingBorderButton href="/login" solid={false} showIcon={true} size="sm">
                Check My Loan Eligibility
              </TravelingBorderButton>
            </div>
            {/* Trust line with icons */}
            <div className="reveal border-t border-[var(--outline)] pt-10 mb-12 flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--on-muted)]" style={{ transitionDelay: '0.3s' }}>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">lock</span>
                Secure Data Protection
              </span>
              <span className="w-1 h-1 rounded-full bg-[var(--outline)]" />
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                Professional Standards
              </span>
              <span className="w-1 h-1 rounded-full bg-[var(--outline)]" />
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">timer</span>
                10-min Eligibility Checks
              </span>
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
