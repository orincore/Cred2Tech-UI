'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

// Wrapper to avoid JSX IntrinsicElements TypeScript errors for the custom web component
const LottiePlayer = (props: any) => {
  return React.createElement('lottie-player', props);
};
/* ─────────────────────────────────────────────
 Loan Eligibility Widget — hero right panel
───────────────────────────────────────────── */
function LoanEligibilityWidget() {
  return (
    <div id="loan-widget" className="card-scene w-full max-w-[340px] sm:max-w-[380px] mx-auto lg:mx-0 select-none">
      <div
        className="card-3d relative overflow-hidden border border-white/15"

        style={{
          background: 'linear-gradient(160deg,rgba(255,255,255,0.10) 0%,rgba(255,255,255,0.04) 100%)',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08) inset',
        }}
      >
        {/* Header */}
        <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#1dff9b] shadow-[0_0_8px_#1dff9b] animate-pulse" />
            <span className="text-white/70 text-[10px] font-bold font-(family-name:--font-jb-mono) tracking-widest uppercase">Eligibility Check</span>
          </div>
          <span className="text-[9px] text-white/35 font-(family-name:--font-jb-mono)">ID: #EC-20044</span>
        </div>

        {/* Business info */}
        <div className="px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-[#1dff9b]/15 border border-[#1dff9b]/30 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[#1dff9b] text-sm">store</span>
            </div>
            <div className="min-w-0">
              <p className="text-white text-xs font-bold leading-tight truncate">Sharma Enterprises Pvt. Ltd.</p>
              <p className="text-white/45 text-[10px] font-(family-name:--font-jb-mono)">GST: 07AAECS1234F1Z5</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/6 px-3 py-2">
              <p className="text-white/40 text-[9px] uppercase tracking-wider font-(family-name:--font-jb-mono)">Loan Amount</p>
              <p className="text-white font-bold text-sm">₹45,00,000</p>
            </div>
            <div className="bg-white/6 px-3 py-2">
              <p className="text-white/40 text-[9px] uppercase tracking-wider font-(family-name:--font-jb-mono)">Type</p>
              <p className="text-white font-bold text-sm">LAP</p>
            </div>
          </div>
        </div>

        {/* Data checks */}
        <div className="px-4 py-3 border-b border-white/10">
          <p className="text-white/35 text-[9px] uppercase tracking-widest font-(family-name:--font-jb-mono) mb-2">Data Analysed</p>
          <div className="flex flex-wrap gap-1.5">
            {[
              { label: 'ITR', color: '#1dff9b' },
              { label: 'GST', color: '#1dff9b' },
              { label: 'Bureau', color: '#1dff9b' },
              { label: 'Bank Stmt', color: '#a8c8ff' },
            ].map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-bold font-(family-name:--font-jb-mono)"
                style={{ background: item.color + '18', color: item.color, border: `1px solid ${item.color}30` }}
              >
                <svg width="7" height="7" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3 5.5L6.5 2" stroke={item.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {/* Matched lenders */}
        <div className="px-4 py-3">
          <p className="text-white/35 text-[9px] uppercase tracking-widest font-(family-name:--font-jb-mono) mb-2">Matched Lenders</p>
          <div className="space-y-1.5">
            {[
              { name: 'HDFC Bank', amount: '₹45L', rate: '9.5%', badge: 'BEST RATE', badgeColor: '#1dff9b' },
              { name: 'ICICI Bank', amount: '₹42L', rate: '9.9%', badge: 'HIGH LIMIT', badgeColor: '#a8c8ff' },
              { name: 'Bajaj Finserv', amount: '₹40L', rate: '10.2%', badge: 'FAST', badgeColor: '#ffe066' },
            ].map((lender, i) => (
              <div
                key={lender.name}
                id={`widget-lender-${i}`}
                className="flex items-center justify-between bg-white/5 px-3 py-2 border border-white/8 opacity-0"
                style={{ transform: 'translateY(6px)' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-white/50 text-xs">account_balance</span>
                  </div>
                  <div>
                    <p className="text-white text-[11px] font-bold leading-none">{lender.name}</p>
                    <p className="text-white/45 text-[9px] mt-0.5">{lender.amount} @ {lender.rate}</p>
                  </div>
                </div>
                <span
                  className="text-[8px] font-black px-1.5 py-0.5 font-(family-name:--font-jb-mono) whitespace-nowrap"
                  style={{ background: lender.badgeColor + '20', color: lender.badgeColor }}
                >
                  {lender.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Status footer */}
        <div className="px-4 py-2.5 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-[#1dff9b]/15 border border-[#1dff9b]/40 flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3 5.5L6.5 2" stroke="#1dff9b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <span className="text-[#1dff9b] text-[10px] font-bold font-(family-name:--font-jb-mono)">3 LENDERS MATCHED</span>
          </div>
          <span className="text-white/30 text-[9px] font-(family-name:--font-jb-mono)">~4 mins</span>
        </div>
      </div>

      {/* Floating stat pills — desktop only */}
      <div className="absolute -left-14 top-[30%] bg-[#0d2d6b] border border-white/15 px-3 py-2 shadow-xl hidden xl:block">
        <p className="text-white/45 text-[9px] font-(family-name:--font-jb-mono) uppercase tracking-wider">Cases Today</p>
        <p className="text-white font-bold text-sm">128 <span className="text-[#1dff9b] text-[10px]">↑ 12%</span></p>
      </div>
      <div className="absolute -right-12 bottom-[25%] bg-[#0d2d6b] border border-white/15 px-3 py-2 shadow-xl hidden xl:block">
        <p className="text-white/45 text-[9px] font-(family-name:--font-jb-mono) uppercase tracking-wider">Avg Decision</p>
        <p className="text-white font-bold text-sm">4 <span className="text-white/50 text-xs">min</span></p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
 Main Page
───────────────────────────────────────────── */
export default function HomePage() {
  useEffect(() => {
    (window as any).__HOME_UNMOUNTED = false;
    if (window.gsap && window.ScrollTrigger && window.THREE) {
      setTimeout(() => {
        if (!(window as any).__HOME_UNMOUNTED) window.dispatchEvent(new Event('libs-ready'));
      }, 150);
    }
    const bar = document.createElement('div');
    bar.id = 'scroll-bar';
    bar.style.cssText = 'position:fixed;top:0;left:0;height:2px;width:0%;background:linear-gradient(90deg,#1dff9b,#0056a7);z-index:9999;pointer-events:none;transition:width 0.1s;';
    document.body.prepend(bar);
    const onScroll = () => {
      bar.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      (window as any).__HOME_UNMOUNTED = true;
      window.removeEventListener('scroll', onScroll);
      bar.remove();
      document.getElementById('scroll-bar')?.remove();
      if (window.ScrollTrigger) window.ScrollTrigger.killAll();
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
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          const st = document.createElement('script');
          st.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
          st.onload = () => {
            const three = document.createElement('script');
            three.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
            three.onload = () => { window.dispatchEvent(new Event('libs-ready')); };
            document.head.appendChild(three);
          };
          document.head.appendChild(st);
        }}
      />

      <div className="bg-[#fcf9f8] text-[#1b1c1c] font-(family-name:--font-inter) overflow-x-clip">

        {/* ══ S1 — HERO ══ */}
        <section
          id="hero-section"
          className="relative min-h-screen flex items-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#0a1628 0%,#0d2d6b 35%,#1565d8 70%,#0a1628 100%)' }}
        >
          <canvas id="ribbon-canvas" className="absolute inset-0 w-full h-full pointer-events-none z-0" />
          <div className="px-orb w-[400px] h-[400px] bg-[#0d3a8e] absolute top-[-100px] left-[-150px] z-0" id="orb-h1" />
          <div className="px-orb w-[300px] h-[300px] bg-[#1dff9b] absolute bottom-[-80px] right-[5%] z-0" id="orb-h2" />
          <div className="px-orb w-[200px] h-[200px] bg-[#00aaff] absolute top-[35%] left-[45%] z-0" id="orb-h3" />
          <div className="px-grid z-0" id="hero-grid" />

          {/* Container — matches header max-w-[1440px] exactly */}
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 pt-28 pb-16 lg:pt-0 lg:pb-0 lg:min-h-screen">

            {/* LEFT — Copy */}
            <div className="text-center lg:text-left">
              <span className="inline-block font-(family-name:--font-jb-mono) text-[10px] font-bold tracking-[0.18em] uppercase text-[#1dff9b] mb-4 px-3 py-1 border border-[#1dff9b]/30 bg-[#1dff9b]/10">
                India's MSME Credit Platform
              </span>

              {/* Text Accent Animation */}
              <div className="absolute -top-12 -left-12 w-48 h-48 opacity-[0.07] pointer-events-none hidden xl:block">
                <LottiePlayer src="/lottie/data_recolored.json" background="transparent" speed="0.6" loop autoplay />
              </div>

              <h1 className="font-(family-name:--font-outfit) font-extrabold text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.05] tracking-tight text-white mb-6 sm:mb-8">
                The <span className="relative">smartest<span className="absolute -bottom-1 left-0 w-full h-[8px] bg-[#1dff9b]/30 -z-10" /></span> way to close{' '}
                <span className="text-[#1dff9b]">MSME credit</span>.
              </h1>

              <p className="text-sm sm:text-base lg:text-[1.05rem] text-white/70 max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
                Cred2Tech connects MSME lending agents and MSME with the right lenders in minutes, not months. Powered by proprietary algorithms. Built for India's lending ecosystem.
              </p>

              <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-3 mb-4 sm:mb-5">
                <Link href="/login" id="hero-cta-dsa"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#1dff9b] text-[#001233] px-5 py-2.5 sm:px-6 sm:py-3 font-bold text-sm sm:text-[0.9375rem] hover:shadow-[0_0_28px_rgba(29,255,155,0.5)] hover:scale-[1.02] transition-all whitespace-nowrap group"
                >
                  Register as a DSA Partner <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link href="/login" id="hero-cta-msme"
                  className="inline-flex items-center justify-center gap-1.5 border-2 border-white/25 text-white px-5 py-2.5 sm:px-6 sm:py-3 font-bold text-sm sm:text-[0.9375rem] hover:bg-white/10 hover:border-white/50 transition-all whitespace-nowrap group"
                >
                  Check My Loan Eligibility <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>

              <p className="flex items-center justify-center lg:justify-start gap-1.5 text-white/40 text-xs font-(family-name:--font-jb-mono)">
                <span className="material-symbols-outlined text-[14px]">lock</span>
                Your data stays private. Secure. Confidential.
              </p>
            </div>

            {/* RIGHT — Widget */}
            <div className="relative flex justify-center items-center">
              <LoanEligibilityWidget />
            </div>
          </div>
        </section>

        {/* ══ S2 — TRUST / LENDER BAR ══ */}
        <section id="lender-bar" className="py-10 sm:py-14 bg-white border-b border-[#e8e4e1]">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-(family-name:--font-jb-mono) text-[9px] sm:text-[10px] font-bold tracking-[0.18em] uppercase text-[#003f7d]/35 mb-2">Social Proof Strip</p>
            <h2 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl lg:text-2xl text-[#003f7d] mb-3">
              Matched with lenders you can trust
            </h2>
            <p className="text-[#424751] max-w-xl mx-auto mb-8 text-sm leading-relaxed">
              Cred2Tech connects agents and MSME to leading banks, NBFCs, and digital lenders all through a single eligibility check.
            </p>

            <div className="marquee-wrap mt-10 overflow-hidden relative h-16 sm:h-20">
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

              <div className="marquee-track flex items-center h-full min-w-max" id="lender-marquee">
                {[...lenders, ...lenders, ...lenders, ...lenders].map((lender, i) => (
                  <div
                    key={`${lender.name}-${i}`}
                    className="flex shrink-0 items-center justify-center px-8"
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
            <p className="mt-8 text-slate-400 text-[10px] font-(family-name:--font-jb-mono) uppercase tracking-widest text-center">
              Empanelment in progress — logos updated as lenders are confirmed
            </p>
          </div>
        </section>

        {/* ══ S3 — WHY CRED2TECH ══ */}
        <section id="why-cred2tech" className="py-14 sm:py-18 lg:py-20 relative overflow-hidden bg-[#fcf9f8]">
          <div className="px-orb w-[300px] h-[300px] bg-[#1dff9b] absolute top-[-50px] right-[-60px] z-0" id="orb-s1" />
          <div className="px-orb w-[220px] h-[220px] bg-[#003f7d] absolute bottom-[-40px] left-[5%] z-0" id="orb-s2" />
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
              <p className="font-(family-name:--font-jb-mono) text-[9px] sm:text-[10px] font-bold tracking-[0.18em] uppercase text-[#006d3f] mb-3">Why Cred2Tech</p>
              <h2 className="font-(family-name:--font-outfit) font-bold text-xl sm:text-2xl lg:text-[2.5rem] text-[#003f7d] mb-4 leading-tight">
                Credit the way it should have always worked.
              </h2>
              <p className="text-[#424751] text-sm sm:text-base leading-relaxed">
                Cred2Tech was built because the MSME lending journey in India is still far harder than it needs to be for the borrower and the agent. The platform changes that on both sides simultaneously.
              </p>
            </div>

            {/* Modern Bento Grid — 4 Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

              {/* Intelligent Matching - spans 2 cols */}
              <div className="md:col-span-2 group relative overflow-hidden bg-white p-6 sm:p-8 border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#1dff9b]/10 to-transparent translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 bg-gradient-to-br from-[#003f7d] to-[#0056a7] flex items-center justify-center mb-6 shadow-lg shadow-[#003f7d]/20">
                  <span className="material-symbols-outlined text-white text-xl">auto_awesome</span>
                </div>
                <h3 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl text-[#003f7d] mb-2">Intelligent Matching</h3>
                <p className="text-[#424751]/80 text-sm sm:text-base leading-relaxed max-w-md relative z-10">
                  An AI enabled algorithm analyses ITR, GST, bank statements, and bureau data to identify the lender most likely to approve the case at the best rate.
                </p>
              </div>

              {/* Secure & Private - spans 1 col */}
              <div className="md:col-span-1 group relative overflow-hidden bg-[#003f7d] p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 relative z-10">
                  <span className="material-symbols-outlined text-[#1dff9b] text-xl">shield_lock</span>
                </div>
                <h3 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl text-white mb-2 relative z-10">Secure & Private</h3>
                <p className="text-white/70 text-sm leading-relaxed relative z-10">
                  Customer financial data is fetched via secure, authorised APIs. Data remains fully encrypted, and the platform team has no access to customer details.
                </p>
              </div>

              {/* Fast. Simple. Digital. - spans 1 col */}
              <div className="md:col-span-1 group relative overflow-hidden bg-white p-6 sm:p-8 border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-all duration-500">
                <div className="w-12 h-12 bg-[#f0f4f8] flex items-center justify-center mb-6 border border-[#e2e8f0]">
                  <span className="material-symbols-outlined text-[#006d3f] text-xl">bolt</span>
                </div>
                <h3 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl text-[#003f7d] mb-2">Fast. Simple. Digital.</h3>
                <p className="text-[#424751]/80 text-sm leading-relaxed">
                  From eligibility check to lender introduction completed in minutes, not days or weeks. No branch visits. No paperwork piles.
                </p>
              </div>

              {/* Full Transparency - spans 2 cols */}
              <div className="md:col-span-2 group relative overflow-hidden bg-[#f6f3f2] p-6 sm:p-8 border border-[#e8e4e1] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] hover:border-[#1dff9b]/30 transition-all duration-500">
                <div className="absolute bottom-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block">
                  <span className="material-symbols-outlined text-[120px] text-[#003f7d]/5">monitoring</span>
                </div>
                <div className="w-12 h-12 bg-white flex items-center justify-center mb-6 shadow-sm border border-[#e8e4e1]">
                  <span className="material-symbols-outlined text-[#0056a7] text-xl">analytics</span>
                </div>
                <h3 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl text-[#003f7d] mb-2">Full Transparency</h3>
                <p className="text-[#424751]/80 text-sm sm:text-base leading-relaxed max-w-md relative z-10">
                  See exactly which lenders are available, at what loan amount, and at what interest rate before an application is even submitted. No hidden fees or surprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ S4 — FOR DSA AGENTS ══ */}
        <section
          id="for-dsas"
          className="py-14 sm:py-18 lg:py-20 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#0a1628 0%,#0d2d6b 55%,#1565d8 100%)' }}
        >
          <div className="px-orb w-[350px] h-[350px] bg-[#1565d8] absolute top-[-70px] right-[-50px] z-0" id="orb-p1" />
          <div className="px-orb w-[220px] h-[220px] bg-[#1dff9b] absolute bottom-[-40px] left-[10%] z-0" id="orb-p2" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#1dff9b 1px,transparent 1px)', backgroundSize: '28px 28px' }} />

          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Left */}
              <div className="relative">
                <div className="relative z-10">
                  <p className="font-(family-name:--font-jb-mono) text-[9px] sm:text-[10px] font-bold tracking-[0.18em] uppercase text-[#1dff9b] mb-3">For DSA Agents</p>
                  <h2 className="font-(family-name:--font-outfit) font-bold text-xl sm:text-2xl lg:text-[2.75rem] text-white mb-4 leading-tight">
                    Run your lending <br className="hidden lg:block"/> business like a pro.
                  </h2>
                  <p className="text-white/65 text-sm sm:text-[1rem] leading-relaxed mb-6 sm:mb-8 max-w-lg">
                    Cred2Tech is the complete operating system for MSME lending agents from sourcing to Disbursement. Manage customers, track cases, monitor teams, and receive commissions, all in one platform.
                  </p>
                  <Link href="/login" id="dsa-section-cta"
                    className="inline-flex items-center gap-1.5 bg-[#1dff9b] text-[#001233] px-5 py-2.5 sm:px-6 sm:py-3 font-bold text-sm sm:text-[0.9375rem] hover:shadow-[0_0_24px_rgba(29,255,155,0.4)] hover:scale-[1.02] transition-all group"
                  >
                    Register as a DSA Partner <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>

                {/* Sub-bg Lottie */}
                <div className="absolute -top-20 -left-20 w-80 h-80 opacity-10 pointer-events-none hidden xl:block">
                  <LottiePlayer src="/lottie/data_admin_recolored.json" background="transparent" speed="0.8" loop autoplay />
                </div>
              </div>

              {/* Right — 4 Benefits with small Lottie accent */}
              <div className="relative">
                <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-5 pointer-events-none hidden lg:block">
                  <LottiePlayer src="/lottie/data_recolored.json" background="transparent" speed="0.5" loop autoplay />
                </div>
                <div className="grid grid-cols-1 gap-2.5 sm:gap-3 relative z-10">
                  {[
                    { icon: 'view_kanban', title: 'Entire pipeline in one view', desc: 'No more spreadsheets. Every case, every stage, every lender — tracked live.' },
                    { icon: 'bolt', title: 'Instant lender eligibility', desc: 'Run an MSME Loan eligibility check in minutes. Multiple lenders, one report.' },
                    { icon: 'wallet', title: 'Team & wallet management', desc: 'Purchase credit packages, allocate balance to agents, track consumption, and manage sub-DSA networks.' },
                    { icon: 'payments', title: 'Commission transparency', desc: 'Know exactly what has been earned, what is pending, and what has been paid out.' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 bg-white/8 p-4 sm:p-5 border border-white/10 hover:bg-white/12 hover:border-white/20 transition-all duration-300">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#1dff9b]/15 border border-[#1dff9b]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[#1dff9b] text-xl sm:text-2xl">{item.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-(family-name:--font-outfit) font-bold text-white text-[15px] sm:text-base mb-1">{item.title}</h3>
                        <p className="text-white/55 text-xs sm:text-[0.875rem] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ S5 — FOR BUSINESS OWNERS ══ */}
        <section id="for-msmes" className="py-14 sm:py-18 lg:py-20 bg-white relative overflow-hidden">
          <div className="px-orb w-[300px] h-[300px] bg-[#003f7d] absolute top-[-60px] right-[-60px] z-0" id="orb-m1" />
          <div className="px-orb w-[200px] h-[200px] bg-[#1dff9b] absolute bottom-[-40px] left-[5%] z-0" id="orb-m2" />

          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 relative">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 opacity-[0.08] pointer-events-none">
                <LottiePlayer src="/lottie/data_msme_recolored.json" background="transparent" speed="0.7" loop autoplay />
              </div>
              <div className="relative z-10">
                <p className="font-(family-name:--font-jb-mono) text-[10px] font-bold tracking-[0.2em] uppercase text-[#006d3f] mb-3">For Business Owners</p>
                <h2 className="font-(family-name:--font-outfit) font-bold text-2xl sm:text-3xl lg:text-[2.5rem] text-[#003f7d] mb-5 leading-tight">
                  Your business deserves better credit.
                </h2>
                <p className="text-[#424751] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                  Cred2Tech gives MSME owners a clear, honest picture of the loan options available to them. Experience a one-time eligibility check that maps your business directly to the best-matched lenders.
                </p>
              </div>
            </div>

            {/* 3-Step Process */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12">
              {[
                { step: '01', title: 'Share business details', desc: 'Basic information, property details, GST number, and consent to fetch financial data', icon: 'description', color: '#0056a7' },
                { step: '02', title: 'Eligibility check runs', desc: 'Bureau, ITR, GST, and bank data analysed in real time across multiple lenders', icon: 'analytics', color: '#006d3f' },
                { step: '03', title: 'See matched lenders and relax', desc: 'Choose the best Loan offer; a Cred2Tech-empanelled agent handles the rest', icon: 'handshake', color: '#1dff9b' },
              ].map((item) => (
                <div key={item.step} className="bg-[#f6f3f2] p-5 sm:p-6 border border-[#e8e4e1] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center mb-4"
                    style={{ background: item.color + '15', border: `1.5px solid ${item.color}35` }}
                  >
                    <span className="material-symbols-outlined text-lg sm:text-xl" style={{ color: item.color }}>{item.icon}</span>
                  </div>
                  <div className="font-(family-name:--font-jb-mono) text-2xl sm:text-3xl font-black mb-2" style={{ color: item.color }}>
                    {item.step}
                  </div>
                  <h3 className="font-(family-name:--font-outfit) font-bold text-base sm:text-lg text-[#003f7d] mb-1.5">{item.title}</h3>
                  <p className="text-[#424751] text-xs sm:text-[0.8125rem] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/login" id="msme-section-cta"
                className="inline-flex items-center gap-1.5 bg-[#003f7d] text-white px-5 py-2.5 sm:px-6 sm:py-3 font-bold text-sm sm:text-[0.9375rem] hover:bg-[#0056a7] hover:shadow-[0_8px_24px_rgba(0,63,125,0.3)] hover:scale-[1.02] transition-all group"
              >
                Check My LAP Eligibility ₹1,000 <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ══ S6 — ON THE HORIZON ══ */}
        <section
          id="coming-soon"
          className="py-16 sm:py-24 relative overflow-hidden bg-[#f0f7ff]"
        >
          {/* Subtle Light-themed Background Effects */}
          <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#003f7d 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="px-orb w-[600px] h-[600px] bg-[#1dff9b]/25 absolute top-[-200px] right-[-100px] z-0" id="orb-pr1" />
          <div className="px-orb w-[500px] h-[500px] bg-[#003f7d]/5 absolute bottom-[-150px] left-[-80px] z-0" id="orb-pr2" />
          
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div 
              className="max-w-4xl mx-auto p-8 sm:p-14 border border-white shadow-[0_32px_80px_-20px_rgba(0,63,125,0.12)] relative overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(32px)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006d3f]/5 border border-[#006d3f]/15 mb-6">
                  <span className="w-1.5 h-1.5 bg-[#006d3f] shadow-[0_0_6px_rgba(0,109,63,0.3)]" />
                  <span className="font-(family-name:--font-jb-mono) text-[10px] font-bold tracking-[0.2em] uppercase text-[#006d3f]">On the Horizon</span>
                </div>

                <h2 className="font-(family-name:--font-outfit) font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-[#003f7d] mb-6 leading-tight">
                  Never miss a government <br className="hidden sm:block" /> scheme again.
                </h2>

                <div className="absolute -bottom-10 -right-10 w-56 h-56 opacity-[0.12] pointer-events-none">
                  <LottiePlayer src="/lottie/forgot_password_recolored.json" background="transparent" speed="0.5" loop autoplay />
                </div>
                
                <p className="text-[#424751] text-sm sm:text-base lg:text-[1.05rem] leading-relaxed mb-10 max-w-2xl mx-auto">
                  India has hundreds of central and state government schemes for MSMEs — subsidies, credit guarantees, grants, and incentives. Most businesses never find them. 
                  <span className="text-[#006d3f] font-bold"> We're building a first-of-its-kind Government Scheme Identification Engine </span> 
                  that maps your business profile to every scheme you qualify for.
                </p>

                <form id="notify-form" className="flex flex-col xs:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex-1 relative group">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-5 py-3 sm:py-4 bg-white border border-[#003f7d]/10 text-[#003f7d] placeholder-[#003f7d]/30 text-sm outline-none focus:border-[#003f7d]/40 transition-all shadow-sm"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#003f7d] text-white px-6 py-3 sm:py-4 font-bold text-[14px] hover:bg-[#0056a7] hover:shadow-[0_8px_30px_rgba(0,63,125,0.25)] hover:scale-[1.02] active:scale-95 transition-all whitespace-nowrap group"
                  >
                    Notify Me <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ══ S7 — THE OPPORTUNITY ══ */}
        <section id="opportunity" className="py-20 sm:py-28 bg-white relative overflow-hidden">
          {/* Decorative Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#003f7d 1px,transparent 1px),linear-gradient(90deg,#003f7d 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Left: Content Block */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006d3f]/5 border border-[#006d3f]/10 mb-6">
                  <span className="w-2 h-[2px] bg-[#006d3f]" />
                  <span className="font-(family-name:--font-jb-mono) text-[10px] font-bold tracking-[0.2em] uppercase text-[#006d3f]">The Market Opportunity</span>
                </div>
                
                <h2 className="font-(family-name:--font-outfit) font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-[#003f7d] mb-6 leading-[1.1] tracking-tight">
                  India's MSME credit gap <br className="hidden sm:block" /> 
                  is <span className="text-[#006d3f] relative inline-block">
                    ₹25 lakh crore.
                    <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#1dff9b]/20 -z-10" />
                  </span>
                </h2>
                
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                  Despite being the backbone of the Indian economy, MSMEs are still underserved by traditional financial institutions. Cred2Tech is building the digital bridge to unlock capital at scale.
                </p>

                {/* Sub Stats Mobile Grid / Desktop inline */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12">
                  {[
                    { number: '63M+', label: 'Total MSMEs' },
                    { number: '80%', label: 'Underserved' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center lg:text-left">
                      <div className="font-(family-name:--font-outfit) text-2xl sm:text-3xl font-black text-[#003f7d]">{stat.number}</div>
                      <div className="font-(family-name:--font-jb-mono) text-[10px] font-bold tracking-widest uppercase text-slate-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Large Graphic Stat Card with Lottie */}
              <div className="w-full lg:w-1/2 relative">
                {/* Lottie Overlay */}
                <div className="absolute -top-16 -right-16 w-64 h-64 opacity-20 pointer-events-none hidden sm:block">
                  <LottiePlayer src="/lottie/data_recolored.json" background="transparent" speed="0.4" loop autoplay />
                </div>
                
                {/* Bridge Decoration SVG */}
                <svg className="absolute -top-12 -left-12 w-24 h-24 text-[#1dff9b] opacity-20 hidden xl:block z-0" viewBox="0 0 100 100" fill="none">
                  <path d="M0 50 Q 50 0 100 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="0" cy="50" r="4" fill="currentColor" />
                  <circle cx="100" cy="50" r="4" fill="currentColor" />
                </svg>

                <div className="bg-[#003f7d] p-8 sm:p-12 lg:p-16 relative shadow-[0_40px_100px_-20px_rgba(0,63,125,0.25)] border-l-8 border-[#1dff9b] z-10">
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/[0.03] to-transparent pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="font-(family-name:--font-jb-mono) text-[10px] font-bold tracking-[0.25em] uppercase text-[#1dff9b]/60 mb-4 sm:mb-6">Annual Credit Deficit</div>
                    <div className="font-(family-name:--font-outfit) text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none tracking-tighter mb-4 sm:mb-6">
                      ₹25L <br className="hidden sm:block" /> <span className="text-[#1dff9b]">Cr</span>
                    </div>
                    <p className="text-white/60 text-xs sm:text-sm font-medium max-w-xs uppercase tracking-wider leading-relaxed">
                      Bridging this gap through data-driven eligibility and direct empanelment.
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-6 right-6 flex gap-1 items-end">
                    {[3, 5, 8, 4, 6].map((h, i) => (
                      <div key={i} className="w-[3px] bg-[#1dff9b]/30" style={{ height: `${h * 4}px` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ S8 — FINAL CTA ══ */}
        <section
          id="final-cta"
          className="py-14 sm:py-18 lg:py-20 relative overflow-hidden text-center"
          style={{ background: 'linear-gradient(135deg,#0a1628 0%,#0d2d6b 55%,#003f7d 100%)' }}
        >
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#1dff9b 1px,transparent 1px)', backgroundSize: '28px 28px' }} />

          {/* Marquee */}
          <div className="marquee-wrap mb-10 sm:mb-12 border-y border-white/10 py-3.5 overflow-hidden">
            <div className="marquee-track" id="marquee-inner">
              {['FAST TRACK', '✦', 'DSA Network', '✦', 'No Processing Fee', '✦', 'Top Lender Offers', '✦', 'MSME Specific', '✦', 'Quick Disbursal', '✦', 'FAST TRACK', '✦', 'DSA Network', '✦', 'No Processing Fee'].map((item, i) => (
                <span
                  key={i}
                  className={item === '✦'
                    ? 'text-[#1dff9b] text-sm'
                    : 'font-(family-name:--font-jb-mono) font-bold text-[10px] sm:text-xs text-white/25 uppercase tracking-widest'}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl mx-auto">
              <p className="font-(family-name:--font-jb-mono) text-[9px] sm:text-[10px] font-bold tracking-[0.18em] uppercase text-[#1dff9b] mb-3">Get Started Today</p>
              <h2 className="font-(family-name:--font-outfit) font-bold text-xl sm:text-2xl lg:text-[2rem] text-white mb-3 sm:mb-4 leading-tight">
                Credit, Simplified. For every agent who closes it and every business that deserves it.
              </h2>
              <p className="text-white/55 text-sm sm:text-[0.9375rem] mb-8 sm:mb-10 leading-relaxed">
                DSA agents and MSMEs across India are already using Cred2Tech to access smarter credit faster.
              </p>
              <div className="flex flex-col xs:flex-row justify-center gap-2.5 sm:gap-3">
                <Link href="/login" id="final-cta-dsa"
                  className="inline-flex items-center justify-center gap-1.5 text-white font-bold px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-[0.9375rem] hover:scale-[1.02] transition-all shadow-[0_8px_24px_rgba(0,0,0,0.25)] group"
                  style={{ background: 'linear-gradient(135deg,#1565d8 0%,#0056a7 100%)' }}
                >
                  Register as a DSA Partner <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link href="/login" id="final-cta-msme"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#1dff9b] text-[#001233] font-bold px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-[0.9375rem] hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(29,255,155,0.5)] transition-all group"
                >
                  Check My LAP Eligibility <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══ FOOTER ══ */}
        <footer className="w-full py-10 sm:py-12 border-t border-[#003f7d]/10 bg-[#fcf9f8]">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-2 sm:col-span-1">
              <span className="text-sm sm:text-base font-bold text-[#003f7d] mb-0.5 block">Cred2Tech</span>
              <span className="text-xs text-[#006d3f] font-(family-name:--font-jb-mono) block mb-3">Credit, Simplified.</span>
              <p className="text-xs text-[#443b54] leading-relaxed">
                India's MSME credit platform — connecting lending agents and businesses with the right lenders.
              </p>
            </div>
            {[
              { title: 'Products', links: ['For DSA Agents', 'For MSMEs', 'LAP Eligibility', 'Govt Schemes'] },
              { title: 'Resources', links: ['Support', 'Documentation', 'Developer Hub'] },
              { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Settings'] },
            ].map((col) => (
              <div key={col.title} className="space-y-2.5 sm:space-y-3">
                <h4 className="font-bold text-[#003f7d] text-xs sm:text-sm">{col.title}</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs text-[#443b54]/70">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="hover:text-[#003f7d] transition-colors hover:underline decoration-[#1dff9b] underline-offset-4">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[#003f7d]/5">
            <p className="text-xs text-[#443b54] text-center">© 2024 Cred2Tech. All rights reserved. Credit, Simplified.</p>
          </div>
        </footer>

      </div>

      {/* ── ANIMATION SCRIPTS ── */}
      <Script id="ribbon-script" strategy="afterInteractive">{`
(function(){
 function initRibbon(){
 const canvas=document.getElementById('ribbon-canvas');
 if(!canvas||!window.THREE)return;
 const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
 renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
 renderer.setClearColor(0x000000,0);
 const scene=new THREE.Scene();
 const camera=new THREE.PerspectiveCamera(45,1,0.1,100);
 camera.position.set(0,0,7);
 function resize(){const w=canvas.clientWidth,h=canvas.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();}
 resize();window.addEventListener('resize',resize);
 const COLORS=[new THREE.Color('#0a1628'),new THREE.Color('#0d3a8e'),new THREE.Color('#1565d8'),new THREE.Color('#00aaff'),new THREE.Color('#00e5ff'),new THREE.Color('#1dff9b'),new THREE.Color('#ffe066')];
 class RibbonCurve extends THREE.Curve{constructor(aX,aY,bX,phase,twist){super();Object.assign(this,{aX,aY,bX,phase,twist});}getPoint(t){const a=t*Math.PI*2+this.phase;return new THREE.Vector3(Math.sin(this.aX*a)*2.8,Math.sin(this.aY*a+this.twist)*1.6,Math.cos(this.bX*a)*1.2);}}
 const defs=[[1,2,1,0,0,1,0.055,0.90],[1,2,1,0.15,0.1,2,0.045,0.85],[1,2,1,0.30,0.2,3,0.035,0.80],[1,2,1,0.45,0.3,4,0.025,0.75],[1,2,1,0.60,0.4,5,0.018,0.70]];
 const ribbons=defs.map(([aX,aY,bX,phase,twist,ci,radius,opacity])=>{const mesh=new THREE.Mesh(new THREE.TubeGeometry(new RibbonCurve(aX,aY,bX,phase,twist),180,radius,8,true),new THREE.MeshPhongMaterial({color:COLORS[ci],emissive:COLORS[ci],emissiveIntensity:0.4,transparent:true,opacity,shininess:120,side:THREE.DoubleSide}));mesh.position.x=1.8;scene.add(mesh);return mesh;});
 scene.add(new THREE.AmbientLight(0xffffff,0.3));
 const pA=new THREE.PointLight(0x00aaff,2.5,20);pA.position.set(4,3,4);scene.add(pA);
 const pB=new THREE.PointLight(0x1dff9b,1.8,20);pB.position.set(-3,-2,3);scene.add(pB);
 let tRX=0,tRY=0,cRX=0,cRY=0;
 document.addEventListener('mousemove',e=>{tRY=(e.clientX/window.innerWidth-0.5)*0.5;tRX=-(e.clientY/window.innerHeight-0.5)*0.3;});
 let t=0;
 (function animate(){requestAnimationFrame(animate);t+=0.004;cRX+=(tRX-cRX)*0.05;cRY+=(tRY-cRY)*0.05;
 ribbons.forEach((m,i)=>{m.rotation.y=t*(0.12+i*0.008)+cRY;m.rotation.x=Math.sin(t*0.3+i*0.2)*0.15+cRX;m.rotation.z=Math.cos(t*0.2+i*0.15)*0.08;m.material.emissiveIntensity=0.3+Math.sin(t*1.2+i*0.5)*0.15;});
 pA.position.x=Math.cos(t*0.4)*5;pA.position.z=Math.sin(t*0.4)*5;
 renderer.render(scene,camera);})();
 }
 window.addEventListener('libs-ready',()=>{if(!window.__HOME_UNMOUNTED)initRibbon();});
})();
 `}</Script>

      <Script id="widget-anim-script" strategy="afterInteractive">{`
(function(){
 const items=[0,1,2].map(i=>document.getElementById('widget-lender-'+i));
 function show(i){if(!items[i])return;items[i].style.transition='opacity 0.45s ease,transform 0.45s ease';items[i].style.opacity='1';items[i].style.transform='translateY(0)';}
 function hide(i){if(!items[i])return;items[i].style.transition='none';items[i].style.opacity='0';items[i].style.transform='translateY(6px)';}
 function run(){setTimeout(()=>show(0),600);setTimeout(()=>show(1),1150);setTimeout(()=>show(2),1700);setTimeout(()=>{[0,1,2].forEach(hide);setTimeout(run,400);},5200);}
 setTimeout(run,1000);
})();
 `}</Script>

      <Script id="gsap-parallax-script" strategy="afterInteractive">{`
(function(){
 function initParallax(){
 if(!window.gsap||!window.ScrollTrigger)return;
 gsap.registerPlugin(ScrollTrigger);
 const isDesktop=window.innerWidth>=1024;
 const isTablet=window.innerWidth>=768&&window.innerWidth<1024;

 if(window.innerWidth>=640){
 ['#why-cred2tech','#for-dsas','#for-msmes','#opportunity'].forEach(sec=>{
 gsap.utils.toArray(sec+' .grid > div').forEach((el,i)=>{
 gsap.fromTo(el,{y:30,opacity:0},{y:0,opacity:1,duration:0.5,ease:'power3.out',delay:i*0.05,scrollTrigger:{trigger:el,start:'top 90%',toggleActions:'play none none none'}});
 });
 const h=document.querySelector(sec+' h2');
 if(h)gsap.fromTo(h,{y:24,opacity:0},{y:0,opacity:1,duration:0.55,ease:'power3.out',scrollTrigger:{trigger:h,start:'top 90%',toggleActions:'play none none none'}});
 });
 const fh=document.querySelector('#final-cta h2');
 if(fh)gsap.fromTo(fh,{y:24,opacity:0},{y:0,opacity:1,duration:0.6,ease:'power3.out',scrollTrigger:{trigger:fh,start:'top 88%',toggleActions:'play none none none'}});
 }

 const marquee=document.getElementById('marquee-inner');
 if(marquee&&!marquee._cloned){marquee._cloned=true;const clone=marquee.cloneNode(true);marquee.parentElement.appendChild(clone);gsap.to([marquee,clone],{xPercent:-50,ease:'none',duration:20,repeat:-1});}

 gsap.fromTo('footer',{y:16,opacity:0},{y:0,opacity:1,duration:0.55,ease:'power2.out',scrollTrigger:{trigger:'footer',start:'top 95%',toggleActions:'play none none none'}});

 if(isDesktop||isTablet){
 gsap.to('#hero-section h1',{y:-40,ease:'none',scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true}});
 gsap.to('#hero-section p',{y:-28,ease:'none',scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true}});
 const hg=document.getElementById('hero-grid');if(hg)gsap.to(hg,{y:36,ease:'none',scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true}});
 }
 ['#orb-h1','#orb-h2','#orb-h3'].forEach((id,i)=>{const el=document.querySelector(id);if(el)gsap.to(el,{opacity:i===0?0.55:i===1?0.15:0.10,duration:1.5,delay:i*0.2,ease:'power2.out'});});
 }
 window.addEventListener('libs-ready',initParallax);
})();
 `}</Script>

      <style>{`
 .px-orb{position:absolute;border-radius:50%;pointer-events:none;will-change:transform;filter:blur(70px);opacity:0;}
 .px-grid{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px);background-size:52px 52px;will-change:transform;}
 .material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;}
 @media(max-width:1023px){.px-orb{opacity:0.08!important;}}
 @xs { flex-direction: row; }
 `}</style>
    </>
  );
}
