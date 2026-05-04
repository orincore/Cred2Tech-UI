'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { colors } from '@/app/theme';
import LoanEligibilityWidget from '@/app/components/LoanEligibilityWidget';
import Ribbon3D from '@/app/components/Ribbon3D';

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


const DSA_FAQS = [
  { q: 'Can a team of agents be managed under one DSA account?', a: 'Yes. The admin account enables onboarding of agents and sub-DSAs, credit allocation, activity monitoring, and pipeline visibility across the entire team.' },
  { q: 'How does credit allocation work?', a: 'Credits are purchased as a package and distributed by the admin to each team member. When an eligibility check is run, the cost is deducted from the allocated balance. On an agent exit, remaining balance is automatically returned to the master wallet.' },
  { q: 'Is customer data secure?', a: 'Yes. All customer data is encrypted and consent-driven. Customers authorise every data fetch explicitly. The Cred2Tech platform team has no access to the financial data, name, or contact details of any customer onboarded by a DSA. Customer data belongs to the DSA and their customer not to Cred2Tech.' },
];

function DSAFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {DSA_FAQS.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="bg-white border border-[var(--on-surface)]/10 shadow-sm overflow-hidden transition-shadow hover:shadow-md">
            <button
              suppressHydrationWarning
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-(family-name:--font-outfit) font-bold text-[var(--on-surface)] text-base sm:text-lg leading-snug">{faq.q}</span>
              <span className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-[var(--on-surface)]/20 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[var(--on-surface)] border-[var(--on-surface)]' : ''}`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isOpen ? 'var(--surface-low)' : 'var(--on-surface)'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
              </span>
            </button>
            <div style={{ maxHeight: isOpen ? '400px' : '0', transition: 'max-height 0.35s cubic-bezier(0.22,1,0.36,1)', overflow: 'hidden' }}>
              <p className="px-6 pb-5 text-sm sm:text-base text-[#424751] leading-relaxed border-t border-[var(--on-surface)]/5 pt-4">{faq.a}</p>
            </div>
          </div>
        );
      })}
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
    bar.style.cssText = 'position:fixed;top:0;left:0;height:2px;width:0%;background:linear-gradient(90deg,var(--on-surface),var(--surface-low));z-index:9999;pointer-events:none;transition:width 0.1s;';
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
          <div className="hidden lg:block px-orb w-[400px] h-[400px] bg-[#0d3a8e] absolute top-[-100px] left-[-150px] z-0" id="orb-h1" />
          <div className="hidden lg:block px-orb w-[300px] h-[300px] bg-[var(--on-surface)] absolute bottom-[-80px] right-[5%] z-0" id="orb-h2" />
          <div className="hidden lg:block px-orb w-[200px] h-[200px] bg-[#00aaff] absolute top-[35%] left-[45%] z-0" id="orb-h3" />
          <div className="px-grid z-0" id="hero-grid" />

          {/* Container — matches header max-w-[1440px] exactly */}
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 pt-28 pb-16 lg:pt-0 lg:pb-0 lg:min-h-screen">

            {/* LEFT — Copy */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 font-(family-name:--font-jb-mono) text-xs sm:text-sm font-bold tracking-[0.12em] uppercase text-[var(--on-surface)] mb-6 px-5 py-2.5 bg-white border-2 border-[var(--on-surface)] shadow-[0_4px_20px_rgba(29,255,155,0.25)]">
                <span className="w-2 h-2 bg-[var(--on-surface)] animate-pulse" />
                FOR DSA AGENTS & PARTNERS
              </span>

              <h1 className="font-(family-name:--font-outfit) font-extrabold text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.05] tracking-tight text-white mb-6 sm:mb-8">
                Your entire lending business. One platform. <span className="text-[var(--on-surface)]">Zero chaos.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-[1.05rem] text-white/80 max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
                The complete workspace for MSME loan agents: eligibility checks, commission tracking, team management, and customer pipelines—all in one dashboard.
              </p>

              <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-3 mb-4 sm:mb-5">
                <Link href="/login" id="hero-cta-dsa"
                  className="inline-flex items-center justify-center gap-1.5 bg-[var(--on-surface)] text-[#001233] px-5 py-2.5 sm:px-6 sm:py-3 font-bold text-sm sm:text-[0.9375rem] hover:shadow-[0_0_28px_rgba(29,255,155,0.5)] hover:scale-[1.02] transition-all whitespace-nowrap group"
                >
                  Register as a DSA Partner <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/login" id="hero-cta-demo"
                  className="inline-flex items-center justify-center gap-1.5 border-2 border-white/25 text-white px-5 py-2.5 sm:px-6 sm:py-3 font-bold text-sm sm:text-[0.9375rem] hover:bg-white/10 hover:border-white/50 transition-all whitespace-nowrap group"
                >
                  Request a Demo <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>

              <p className="flex items-center justify-center lg:justify-start gap-1.5 text-white/40 text-xs font-(family-name:--font-jb-mono)">
                <span className="material-symbols-outlined text-[14px]">lock</span>
                Your data stays private. Secure. Confidential.
              </p>
            </div>

            {/* RIGHT — Widget */}
            <div className="order-1 lg:order-2 relative flex justify-center items-center -mt-20 sm:-mt-4 lg:mt-0">
              <LoanEligibilityWidget />
            </div>
          </div>
        </section>

        {/* ══ DSA STATS STRIP ══ */}
        <section className="py-8 sm:py-10 bg-[var(--on-surface)] overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(var(--on-surface) 1px,transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10 text-center">
              {[
                { value: '1 Platform', label: 'For Your Entire Business', icon: 'dashboard' },
                { value: '< 5 Min', label: 'Eligibility Per Case', icon: 'bolt' },
                { value: '100%', label: 'Commission Transparency', icon: 'payments' },
                { value: '0 Spreadsheets', label: 'Needed', icon: 'table_chart' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center lg:px-8 group">
                  <span className="material-symbols-outlined text-[var(--on-surface)]/60 text-2xl mb-2 group-hover:text-[var(--on-surface)] transition-colors duration-300">{stat.icon}</span>
                  <div className="font-(family-name:--font-outfit) text-xl sm:text-2xl lg:text-3xl font-black text-white leading-none mb-1">{stat.value}</div>
                  <div className="font-(family-name:--font-jb-mono) text-[9px] sm:text-[10px] font-bold tracking-[0.16em] uppercase text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ S2 — TRUST / LENDER BAR ══ */}
        <section id="lender-bar" className="py-10 sm:py-14 bg-white border-b border-[#e8e4e1]">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 font-(family-name:--font-jb-mono) text-xs sm:text-sm font-bold tracking-[0.12em] uppercase text-[var(--on-surface)] mb-4 px-5 py-2.5 bg-white border-2 border-[var(--on-surface)] shadow-[0_4px_20px_rgba(0,109,63,0.15)]">
              <span className="w-2 h-2 bg-[var(--on-surface)]" />
              Social Proof
            </span>
            <h2 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl lg:text-2xl text-[var(--on-surface)] mb-3">
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

          </div>
        </section>

        {/* ══ S3 — WHY CRED2TECH ══ */}
        <section id="why-cred2tech" className="py-14 sm:py-18 lg:py-20 bg-[var(--on-surface)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(var(--on-surface) 1px,transparent 1px),linear-gradient(90deg,var(--on-surface) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="px-orb w-[300px] h-[300px] bg-[var(--on-surface)]/20 absolute top-[-50px] right-[-60px] z-0" id="orb-s1" />
          <div className="px-orb w-[220px] h-[220px] bg-white/30 absolute bottom-[-40px] left-[5%] z-0" id="orb-s2" />
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header with Title Left and Arrows Right */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
              <div>
                <span className="inline-flex items-center gap-2 font-(family-name:--font-jb-mono) text-xs sm:text-sm font-bold tracking-[0.12em] uppercase text-[var(--on-surface)] mb-3 px-5 py-2.5 bg-white border-2 border-[var(--on-surface)] shadow-[0_4px_20px_rgba(0,109,63,0.15)]">
                  <span className="w-2 h-2 bg-[var(--on-surface)]" />
                  Features — DSA Portal
                </span>
                <h2 className="font-(family-name:--font-outfit) font-bold text-xl sm:text-2xl lg:text-[2.5rem] text-[#001233] leading-tight uppercase tracking-wide">
                  Everything needed to run a lending business.
                </h2>
              </div>
              {/* Navigation Arrows - Right Side */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => document.getElementById('feature-carousel')?.scrollBy({ left: -360, behavior: 'smooth' })}
                  className="w-10 h-10 flex items-center justify-center bg-white border-2 border-[var(--on-surface)] text-[var(--on-surface)] hover:bg-[var(--on-surface)] hover:text-white transition-all duration-300 shadow-lg"
                  aria-label="Scroll left"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => document.getElementById('feature-carousel')?.scrollBy({ left: 360, behavior: 'smooth' })}
                  className="w-10 h-10 flex items-center justify-center bg-[var(--on-surface)] border-2 border-[var(--on-surface)] text-white hover:bg-[var(--surface-low)] hover:border-[var(--surface-low)] transition-all duration-300 shadow-lg"
                  aria-label="Scroll right"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Feature Carousel */}
            <div className="relative overflow-visible">
              <div id="feature-carousel" className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-2 -mx-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

                {/* 1. My Pipeline */}
                <div className="snap-start shrink-0 w-[300px] sm:w-[340px] group relative overflow-hidden bg-white p-6 sm:p-8 rounded-2xl border border-black/[0.04] shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-500">
                  <div className="w-[120px] h-[120px] mb-4">
                    <ClientOnly>
                      <LottiePlayer src="https://assets9.lottiefiles.com/packages/lf20_5njp3vgg.json" background="transparent" speed="1" loop autoplay style={{ width: '120px', height: '120px' }} />
                    </ClientOnly>
                  </div>
                  <h3 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl text-[var(--on-surface)] mb-2">My Pipeline</h3>
                  <p className="text-[#424751]/80 text-sm leading-relaxed relative z-10">
                    A single, intelligent view of every case by stage, lender, alert status, and CIBIL score. Sort, filter, and act instantly.
                  </p>
                </div>

                {/* 2. Team Management */}
                <div className="snap-start shrink-0 w-[300px] sm:w-[340px] group relative overflow-hidden bg-white p-6 sm:p-8 rounded-2xl border border-black/[0.04] shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-500">
                  <div className="w-[120px] h-[120px] mb-4 overflow-hidden rounded-lg">
                    <ClientOnly>
                      <video
                        src="/images/team management.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </ClientOnly>
                  </div>
                  <h3 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl text-[var(--on-surface)] mb-2">Team Management</h3>
                  <p className="text-[#424751]/80 text-sm leading-relaxed">
                    Add agents and sub-DSAs, assign roles, allocate credits, monitor performance, and manage access all from the admin dashboard.
                  </p>
                </div>

                {/* 3. Wallet Management */}
                <div className="snap-start shrink-0 w-[300px] sm:w-[340px] group relative overflow-hidden bg-white p-6 sm:p-8 rounded-2xl border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-all duration-500">
                  <div className="w-[120px] h-[120px] mb-4 overflow-hidden rounded-lg">
                    <ClientOnly>
                      <video
                        src="/images/wallet management.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </ClientOnly>
                  </div>
                  <h3 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl text-[var(--on-surface)] mb-2">Wallet Management</h3>
                  <p className="text-[#424751]/80 text-sm leading-relaxed">
                    Purchase credit packages, distribute balance to team members, and track consumption in real time. Credits are auto-reclaimed when an agent exits.
                  </p>
                </div>

                {/* 4. Instant LAP Eligibility */}
                <div className="snap-start shrink-0 w-[300px] sm:w-[340px] group relative overflow-hidden bg-[#f6f3f2] p-6 sm:p-8 rounded-2xl border border-[#e8e4e1] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] hover:border-[var(--on-surface)]/30 transition-all duration-500">
                  <div className="w-[120px] h-[120px] mb-4">
                    <ClientOnly>
                      <LottiePlayer src="https://assets5.lottiefiles.com/packages/lf20_3jmvq04g.json" background="transparent" speed="1" loop autoplay style={{ width: '120px', height: '120px' }} />
                    </ClientOnly>
                  </div>
                  <h3 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl text-[var(--on-surface)] mb-2">Instant LAP Eligibility</h3>
                  <p className="text-[#424751]/80 text-sm leading-relaxed relative z-10">
                    Run a full MSME Loan Against Property eligibility check bureau, ITR, GST, bank data in minutes. Multi-lender report generated automatically.
                  </p>
                </div>

                {/* 5. Commission Tracking */}
                <div className="snap-start shrink-0 w-[300px] sm:w-[340px] group relative overflow-hidden bg-white p-6 sm:p-8 rounded-2xl border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-all duration-500">
                  <div className="w-[120px] h-[120px] mb-4">
                    <ClientOnly>
                      <LottiePlayer src="https://assets4.lottiefiles.com/packages/lf20_qp1q7mct.json" background="transparent" speed="1" loop autoplay style={{ width: '120px', height: '120px' }} />
                    </ClientOnly>
                  </div>
                  <h3 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl text-[var(--on-surface)] mb-2">Commission Tracking</h3>
                  <p className="text-[#424751]/80 text-sm leading-relaxed">
                    Earned commissions, pending payouts, and invoice history transparent and up to date.
                  </p>
                </div>

                {/* 6. Lender Panel */}
                <div className="snap-start shrink-0 w-[300px] sm:w-[340px] group relative overflow-hidden bg-white p-6 sm:p-8 rounded-2xl border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-all duration-500">
                  <div className="w-[120px] h-[120px] mb-4">
                    <ClientOnly>
                      <LottiePlayer src="https://assets3.lottiefiles.com/packages/lf20_7z8wtyb0.json" background="transparent" speed="1" loop autoplay style={{ width: '120px', height: '120px' }} />
                    </ClientOnly>
                  </div>
                  <h3 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl text-[var(--on-surface)] mb-2">Lender Panel</h3>
                  <p className="text-[#424751]/80 text-sm leading-relaxed">
                    Access a curated panel of banks and NBFCs for Loan Against Property. View rate matrices, configure eligibility rules, and manage relationships.
                  </p>
                </div>

                {/* 7. PDD Management */}
                <div className="snap-start shrink-0 w-[300px] sm:w-[340px] group relative overflow-hidden bg-white p-6 sm:p-8 rounded-2xl border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-all duration-500">
                  <div className="w-[120px] h-[120px] mb-4">
                    <ClientOnly>
                      <LottiePlayer src="https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json" background="transparent" speed="1" loop autoplay style={{ width: '120px', height: '120px' }} />
                    </ClientOnly>
                  </div>
                  <h3 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl text-[var(--on-surface)] mb-2">PDD Management</h3>
                  <p className="text-[#424751]/80 text-sm leading-relaxed">
                    Post-disbursement document tracking and follow-up workflows to keep the portfolio clean. <span className="text-[var(--on-surface)] font-bold text-[10px] uppercase">(Launching soon)</span>
                  </p>
                </div>

                {/* 8. Case Detail & Documents */}
                <div className="snap-start shrink-0 w-[300px] sm:w-[340px] group relative overflow-hidden bg-white p-6 sm:p-8 rounded-2xl border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-all duration-500">
                  <div className="w-[120px] h-[120px] mb-4 overflow-hidden rounded-lg">
                    <ClientOnly>
                      <video
                        src="/images/case management.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </ClientOnly>
                  </div>
                  <h3 className="font-(family-name:--font-outfit) font-bold text-lg sm:text-xl text-[var(--on-surface)] mb-2">Case Details</h3>
                  <p className="text-[#424751]/80 text-sm leading-relaxed">
                    Every case has a full audit trail documents, notes, status history, and lender communication in one view.
                  </p>
                </div>

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
          <div className="px-orb w-[220px] h-[220px] bg-[var(--on-surface)] absolute bottom-[-40px] left-[10%] z-0" id="orb-p2" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(var(--on-surface) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />

          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Left */}
              <div className="relative">
                <div className="relative z-10">
                  <p className="font-(family-name:--font-jb-mono) text-[9px] sm:text-[10px] font-bold tracking-[0.18em] uppercase text-[var(--on-surface)] mb-3">Why DSAs Choose Cred2Tech</p>
                  <h2 className="font-(family-name:--font-outfit) font-bold text-xl sm:text-2xl lg:text-[2.75rem] text-white mb-4 leading-tight">
                    THE DIFFERENCE
                  </h2>
                  <p className="text-white/80 text-sm sm:text-[1rem] leading-relaxed mb-6 sm:mb-8 max-w-lg">
                    Cred2Tech is the complete operating system for MSME lending agents from sourcing to Disbursement. Manage customers, track cases, monitor teams, and receive commissions, all in one platform.
                  </p>
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
                    { icon: 'all_inclusive', title: 'The only platform that is BOTH a CRM and an eligibility engine', desc: 'No switching between tools.' },
                    { icon: 'hub', title: 'Sub-DSA network management', desc: 'With wallet allocation and performance tracking.' },
                    { icon: 'shopping_cart_checkout', title: 'Credit package model', desc: 'Buy as needed, allocate to team, pay only for what is used.' },
                    { icon: 'speed', title: 'Multi-lender Loan eligibility in one click', desc: 'No more sending cases to lenders manually.' },
                    { icon: 'verified', title: 'Full commission transparency', desc: 'No more chasing payout statements.' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 bg-white/8 p-4 sm:p-5 border border-white/10 hover:bg-white/12 hover:border-white/20 transition-all duration-300">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[var(--on-surface)]/15 border border-[var(--on-surface)]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[var(--on-surface)] text-xl sm:text-2xl">{item.icon}</span>
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

        {/* ══ S5 — Pricing ══ */}
        <section id="pricing" className="py-14 sm:py-18 lg:py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(var(--on-surface) 1px,transparent 1px),linear-gradient(90deg,var(--on-surface) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="px-orb w-[300px] h-[300px] bg-[var(--on-surface)] absolute top-[-60px] right-[-60px] z-0" id="orb-m1" />
          <div className="px-orb w-[200px] h-[200px] bg-[var(--on-surface)] absolute bottom-[-40px] left-[5%] z-0" id="orb-m2" />

          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 relative">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 opacity-[0.08] pointer-events-none">
                <LottiePlayer src="/lottie/data_msme_recolored.json" background="transparent" speed="0.7" loop autoplay />
              </div>
              <div className="relative z-10">
                <p className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.2em] uppercase text-[var(--on-surface)] mb-3">Pricing Overview</p>
                <h2 className="font-(family-name:--font-outfit) font-bold text-2xl sm:text-3xl lg:text-[2.5rem] text-[var(--on-surface)] mb-5 leading-tight">
                  Simple, transparent pricing.
                </h2>
                <p className="text-[#424751] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                  Cred2Tech operates on a credit package model for DSAs. Packages are purchased upfront and allocated across the team.
                </p>
              </div>
            </div>

            {/* 3-Step Process for pricing */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12">
              {[
                { step: 'Pay/Use', title: 'Per eligibility check', desc: 'Check the cost for different items via the published rate card.', icon: 'payments', color: 'var(--surface-low)' },
                { step: '₹1k+', title: 'Credit packages', desc: 'Starting from ₹1,000 minimum top-up.', icon: 'add_card', color: 'var(--on-surface)' },
                { step: 'Free*', title: 'Admin & CRM features', desc: 'Free for a limited period with an active wallet.', icon: 'admin_panel_settings', color: 'var(--on-surface)' },
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
                  <h3 className="font-(family-name:--font-outfit) font-bold text-base sm:text-lg text-[var(--on-surface)] mb-1.5">{item.title}</h3>
                  <p className="text-[#424751] text-xs sm:text-[0.8125rem] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center bg-[#fcfcfc] p-6 border border-[var(--on-surface)]/10 max-w-3xl mx-auto">
              <p className="text-[var(--on-surface)] font-medium text-sm">Enterprise and high-volume pricing available for large DSA networks.</p>
              <div className="mt-4">
                <Link href="/contact"
                  className="inline-flex items-center gap-1.5 border-2 border-[var(--on-surface)]/25 text-[var(--on-surface)] px-5 py-2.5 sm:px-6 sm:py-3 font-bold text-sm hover:bg-[var(--on-surface)]/5 hover:border-[var(--on-surface)]/50 transition-all group"
                >
                  Contact Cred2Tech for custom packages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══ S6 — FAQ ══ */}
        <section id="faq" className="py-20 sm:py-28 bg-[#f0f7ff] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(var(--on-surface) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <p className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.2em] uppercase text-[var(--on-surface)] mb-3">Questions & Answers</p>
              <h2 className="font-(family-name:--font-outfit) font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-[var(--on-surface)] leading-tight">
                DSA FAQ
              </h2>
            </div>

            <DSAFaqAccordion />
          </div>
        </section>

        {/* ══ S8 — FINAL CTA ══ */}
        <section
          id="final-cta"
          className="py-14 sm:py-18 lg:py-20 relative overflow-hidden text-center"
          style={{ background: 'linear-gradient(135deg,#0a1628 0%,#0d2d6b 55%,var(--on-surface) 100%)' }}
        >
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(var(--on-surface) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />

          {/* Marquee */}
          <div className="marquee-wrap mb-10 sm:mb-12 border-y border-white/10 py-3.5 overflow-hidden">
            <div className="marquee-track" id="marquee-inner">
              {['FAST TRACK', '✦', 'DSA Network', '✦', 'No Processing Fee', '✦', 'Top Lender Offers', '✦', 'MSME Specific', '✦', 'Quick Disbursal', '✦', 'FAST TRACK', '✦', 'DSA Network', '✦', 'No Processing Fee'].map((item, i) => (
                <span
                  key={i}
                  className={item === '✦'
                    ? 'text-[var(--on-surface)] text-sm'
                    : 'font-(family-name:--font-jb-mono) font-bold text-[10px] sm:text-xs text-white/25 uppercase tracking-widest'}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl mx-auto">
              <p className="font-(family-name:--font-jb-mono) text-[9px] sm:text-[10px] font-bold tracking-[0.18em] uppercase text-[var(--on-surface)] mb-3">Get Started Today</p>
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
                  Register as a DSA Partner <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/login" id="final-cta-msme"
                  className="inline-flex items-center justify-center gap-1.5 bg-[var(--on-surface)] text-[#001233] font-bold px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-[0.9375rem] hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(29,255,155,0.5)] transition-all group"
                >
                  Check My LAP Eligibility <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Ribbon3D />

      {/* ── ANIMATION SCRIPTS ── */}
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
