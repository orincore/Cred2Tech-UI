'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { useTheme } from 'next-themes';
import LoanEligibilityWidget from '@/app/components/LoanEligibilityWidget';
import { ThreeDCard } from '@/app/components/ThreeDCard';
import { TravelingBorderButton } from '@/app/components/TravelingBorderButton';
import { MarqueeTicker } from '@/app/components/MarqueeTicker';
import { FeatureCard } from '@/app/components/FeatureCard';
import Faq from '@/app/components/Faq';

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


const DSA_FAQS = [
  { q: 'Can a team of agents be managed under one DSA account?', a: 'Yes. The admin account enables onboarding of agents and sub-DSAs, credit allocation, activity monitoring, and pipeline visibility across the entire team.' },
  { q: 'How does credit allocation work?', a: 'Credits are purchased as a package and distributed by the admin to each team member. When an eligibility check is run, the cost is deducted from the allocated balance. On an agent exit, remaining balance is automatically returned to the master wallet.' },
  { q: 'Is customer data secure?', a: 'Yes. All customer data is encrypted and consent-driven. Customers authorise every data fetch explicitly. The Cred2Tech platform team has no access to the financial data, name, or contact details of any customer onboarded by a DSA. Customer data belongs to the DSA and their customer not to Cred2Tech.' },
];

/* ─────────────────────────────────────────────
 Main Page
───────────────────────────────────────────── */
export default function HomePage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const lenders = [
    { name: 'HDFC Bank', image: '/banks logo/HDFC_Bank_Logo.svg.png' },
    { name: 'Axis Bank', image: '/banks logo/axis bank.jpg' },
    { name: 'Kotak Mahindra', image: '/banks logo/Kotak_Mahindra_Bank_logo.png' },
    { name: 'Bank of Baroda', image: '/banks logo/BankOfBarodaLogo.svg' },
    { name: 'Yes Bank', image: '/banks logo/Yes-Bank-New-Logo-Vector.svg-.png' },
    { name: 'IDFC First', image: '/banks logo/Logo_of_IDFC_First_Bank.svg.png' },
  ];
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsRevealed, setStatsRevealed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    (window as any).__HOME_UNMOUNTED = false;
    if (window.gsap && window.ScrollTrigger && window.THREE) {
      setTimeout(() => {
        if (!(window as any).__HOME_UNMOUNTED) window.dispatchEvent(new Event('libs-ready'));
      }, 150);
    }
    const bar = document.createElement('div');
    bar.id = 'scroll-bar';
    bar.style.cssText = 'position:fixed;top:0;left:0;height:2px;width:0%;background:var(--on-surface);z-index:9999;pointer-events:none;transition:width 0.1s;';
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

  // Intersection observer for scroll-reveal elements
  useEffect(() => {
    if (!mounted) return;
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
    if (!statsRef.current || !mounted) return;
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

      <div className="bg-[var(--bg)] text-[var(--on-surface)] font-(family-name:--font-inter) overflow-x-clip transition-colors duration-500">

        {/* ══ S1 — HERO ══ */}
        <section
          id="hero-section"
          className="relative h-screen flex flex-col justify-center overflow-hidden transition-colors duration-500"
        >
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

          {/* ═══ HERO IMAGE ═══ */}
          <div className="absolute right-8 top-[5%] w-[650px] h-[650px] hidden lg:block z-20 pointer-events-auto">
            <div className="w-full h-full relative">
              <img
                src="/hero3.png"
                alt="Cred2Tech DSA Platform"
                className="w-full h-full object-contain"
              />
              {/* Blur overlay for edge blending */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)',
                }}
              />
            </div>
          </div>

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
          <div className="hidden lg:block absolute bottom-[15%] right-[10%] w-[600px] h-[200px] pointer-events-none z-[3]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(100,140,255,0.25) 0%, rgba(78,84,200,0.08) 40%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />
          {/* Ambient haze */}
          <div className="hidden lg:block absolute -top-[5%] right-[0%] w-[800px] h-[800px] bg-gradient-to-b from-blue-500/15 via-indigo-500/5 to-transparent blur-[80px] pointer-events-none z-[3]" />

          {/* Main Content */}
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4 relative z-10 flex flex-col justify-between h-full text-left">

            <div className="max-w-2xl mt-12 lg:mt-16 self-start w-full">
              {/* Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center text-[#4a8df8] font-(family-name:--font-jb-mono) text-sm font-medium tracking-wide">
                  For DSA Agents & Partners
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-(family-name:--font-outfit) font-bold text-[1.75rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[2.75rem] xl:text-[3rem] leading-[1.1] tracking-tight text-[var(--on-surface)] transition-colors duration-500 mb-4">
                Your entire lending business. <br />One platform. Zero chaos.
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-[1.15rem] text-[var(--on-muted)] transition-colors duration-500 max-w-lg mb-8 leading-relaxed font-light">
                The complete workspace for DSAs: eligibility checks, CRM, team management and commission tracking all in one dashboard.
              </p>
            </div>

            {/* Buttons positioned near bottom section */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-2">
              <TravelingBorderButton href="/login" size="sm">
                Register as a DSA Partner
              </TravelingBorderButton>

              {/* Secondary Button to keep content intact */}
              <TravelingBorderButton href="/login" solid={true} showIcon={true} size="sm">
                Request a Demo
              </TravelingBorderButton>
            </div>

            {/* Bottom 3-Column Section matched exactly from image */}
            <div id="hero-trust-section" className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mt-auto pt-2 pb-4 w-full relative z-10 border-t border-[var(--outline)] md:border-none text-left">

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

        {/* ══ DSA STATS STRIP ══ */}
        <section ref={statsRef} className="py-8 sm:py-10 bg-[var(--surface)] border-b border-[var(--outline)] overflow-hidden relative transition-colors duration-500">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[var(--outline)] text-center" style={{ transitionDelay: '0.1s' }}>
              {[
                { value: 1, suffix: ' Platform', label: 'For Your Entire Business' },
                { value: 5, suffix: ' Min', label: 'Eligibility Per Case' },
                { value: 100, suffix: '%', label: 'Commission Transparency' },
                { value: 0, suffix: ' Spreadsheets', label: 'Needed' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center lg:px-8">
                  <div className="font-(family-name:--font-outfit) text-xl sm:text-2xl lg:text-3xl font-black text-[var(--on-surface)] leading-none mb-1">
                    {stat.value === 0 ? '0' : <CountUp value={stat.value} suffix={stat.suffix} duration={1500} revealed={statsRevealed} />}
                    {stat.value === 0 && stat.suffix}
                  </div>
                  <div className="font-(family-name:--font-jb-mono) text-[9px] sm:text-[10px] font-bold tracking-[0.16em] uppercase text-[var(--on-muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ S2 — TRUST / LENDER BAR ══ */}
        <section id="lender-bar" className="py-10 sm:py-14 bg-[var(--bg)] border-b border-[var(--outline)] transition-colors duration-500">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="reveal text-xs font-bold tracking-[0.2em] uppercase text-[var(--on-muted)] mb-4">Social Proof</p>
            <h2 className="reveal font-(family-name:--font-outfit) font-bold text-lg sm:text-xl lg:text-2xl text-[var(--on-surface)] mb-3" style={{ transitionDelay: '0.1s' }}>
              Matched with lenders you can trust
            </h2>
            <p className="reveal text-[var(--on-muted)] max-w-xl mx-auto mb-8 text-sm leading-relaxed" style={{ transitionDelay: '0.18s' }}>
              Cred2Tech connects agents and MSME to leading banks, NBFCs, and digital lenders all through a single eligibility check.
            </p>

            <div className="reveal marquee-wrap mt-10 overflow-hidden relative h-16 sm:h-20" style={{ transitionDelay: '0.24s' }}>
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r z-10 from-[var(--surface)] via-[var(--surface)]/80 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l z-10 from-[var(--surface)] via-[var(--surface)]/80 to-transparent" />

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
        <section id="why-cred2tech" className="py-14 sm:py-18 lg:py-20 bg-[var(--bg)] border-b border-[var(--outline)] relative overflow-hidden transition-colors duration-500">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="mb-10 sm:mb-12 max-w-2xl">
              <p className="reveal text-sm font-bold tracking-[0.2em] uppercase text-[var(--on-muted)] mb-4">Features — DSA Portal</p>
              <h2 className="reveal font-(family-name:--font-outfit) font-bold text-2xl sm:text-2.5rem lg:text-[2.25rem] text-[var(--on-surface)] leading-[1.1] mb-4" style={{ transitionDelay: '0.1s' }}>
                EVERYTHING NEEDED TO RUN A LENDING BUSINESS
              </h2>
              <p className="reveal text-[var(--on-muted)] text-base leading-relaxed" style={{ transitionDelay: '0.18s' }}>
                The complete workspace for MSME loan agents: eligibility checks, commission tracking, team management, and customer pipelines all in one dashboard.
              </p>
            </div>

            {/* Feature Grid — Portrait Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {[
                { video: null, lottie: 'https://assets9.lottiefiles.com/packages/lf20_5njp3vgg.json', title: 'My Pipeline', desc: 'A single, intelligent view of every case by stage, lender, alert status, and bureau score. Sort, filter, and act instantly.', col: 'col-span-1' },
                { video: '/images/team management.mp4', lottie: null, title: 'Team Management', desc: 'Add employees and sub-DSAs, assign roles, allocate credits, monitor performance, and manage access all from the admin dashboard.', col: 'col-span-1' },
                { video: '/images/wallet management.mp4', lottie: null, title: 'Wallet Management', desc: 'Purchase credit packages, distribute balance to team members, and track consumption in real time. Credits are auto-reclaimed when an agent exits.', col: 'col-span-1' },
                { video: null, lottie: 'https://assets5.lottiefiles.com/packages/lf20_3jmvq04g.json', title: 'Commission Tracking', desc: 'Earned commissions, pending payouts, and invoice history transparent and up to date.', col: 'col-span-1' },
                { video: null, lottie: 'https://assets3.lottiefiles.com/packages/lf20_7z8wtyb0.json', title: 'Lender Panel', desc: 'Access a curated panel of banks and NBFCs. View rate matrices, configure contact details and share proposals directly and manage lender relationships.', col: 'col-span-1' },
                { video: null, lottie: 'https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json', title: 'PDD Management', desc: 'Post-disbursement document tracking and follow-up workflows to keep the portfolio clean. (Launching soon)', col: 'col-span-1', badge: 'Soon' },
                { video: null, lottie: 'https://assets4.lottiefiles.com/packages/lf20_qp1q7mct.json', title: 'Instant Eligibility', desc: 'Run a full MSME Loan eligibility check bureau, ITR, GST, bank data in minutes. Multi-lender report generated automatically.', col: 'col-span-1' },
                { video: '/images/case management.mp4', lottie: null, title: 'Case Detail & Documents', desc: 'Every case has a full audit trail documents, notes, status history, and lender communication in one view.', col: 'col-span-1' },
              ].map((item, i) => (
                <FeatureCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ══ S4 — FOR DSA AGENTS ══ */}
        <section
          id="for-dsas"
          className="py-14 sm:py-18 lg:py-20 relative overflow-hidden bg-[var(--surface)] border-b border-[var(--outline)] transition-colors duration-500"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Left */}
              <div className="relative">
                <div className="relative z-10">
                  <p className="reveal text-sm font-bold tracking-[0.2em] uppercase text-[#4a8df8] mb-3">Why Cred2Tech</p>
                  <h2 className="reveal font-(family-name:--font-outfit) font-bold text-lg sm:text-xl lg:text-[2rem] text-[var(--on-surface)] mb-4 leading-tight" style={{ transitionDelay: '0.1s' }}>
                    The only platform that is BOTH a CRM and an eligibility engine no switching between tools
                  </h2>
                  <p className="reveal text-[var(--on-muted)] text-sm sm:text-[1rem] leading-relaxed mb-6 sm:mb-8 max-w-lg" style={{ transitionDelay: '0.18s' }}>
                    Cred2Tech is the complete operating system for MSME lending agents from sourcing to Disbursement. Manage customers, track cases, monitor teams, and receive commissions, all in one platform.
                  </p>
                </div>
              </div>

              {/* Right — Benefits */}
              <div className="relative">
                <div className="reveal grid grid-cols-1 gap-3 relative z-10 border-2 border-[var(--outline)] rounded-3xl overflow-hidden bg-[var(--bg)] shadow-lg" style={{ transitionDelay: '0.24s' }}>
                  {[
                    { title: 'The only platform that is BOTH a CRM and an eligibility engine no switching between tools', desc: '', icon: 'check_circle' },
                    { title: 'Sub-DSA network management with wallet allocation and performance tracking', desc: '', icon: 'groups' },
                    { title: 'Credit package model — buy as needed, allocate to team, pay only for what is used', desc: '', icon: 'account_balance_wallet' },
                    { title: 'Multi-lender Loan eligibility in one click — no more sending cases to lenders manually', desc: '', icon: 'flash_on' },
                    { title: 'Full commission transparency — no more chasing payout statements', desc: '', icon: 'visibility' },
                  ].map((item, i) => (
                    <div key={item.title} className="group flex items-center gap-4 p-4 sm:p-5 border-b border-[var(--outline)] last:border-b-0 transition-all duration-300 hover:bg-[var(--surface)] hover:scale-[1.02] hover:shadow-md" style={{ transitionDelay: `${i * 0.06}s` }}>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-(family-name:--font-outfit) font-bold text-[var(--on-surface)] text-[15px] sm:text-base mb-1">{item.title}</h3>
                        <p className="text-[var(--on-muted)] text-xs sm:text-[0.875rem] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ S5 — Pricing ══ */}
        <section id="pricing" className="py-14 sm:py-18 lg:py-20 bg-[var(--bg)] border-b border-[var(--outline)] relative overflow-hidden transition-colors duration-500">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 relative">
              <div className="relative z-10">
                <p className="reveal text-base font-bold tracking-[0.2em] uppercase text-[var(--on-muted)] mb-3">Pricing Overview</p>
                <h2 className="reveal font-(family-name:--font-outfit) font-bold text-lg sm:text-xl lg:text-[2rem] text-[var(--on-surface)] mb-5 leading-tight" style={{ transitionDelay: '0.1s' }}>
                  SIMPLE, TRANSPARENT PRICING
                </h2>
                <p className="reveal text-[var(--on-muted)] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto" style={{ transitionDelay: '0.18s' }}>
                  Cred2Tech operates on a credit package model for DSAs. Packages are purchased upfront and allocated across the team.
                </p>
              </div>
            </div>

            {/* 3-Step Pricing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12 px-12 sm:px-24 lg:px-48">
              {[
                {
                  step: 'Pay/Use',
                  badge: 'Pricing',
                  title: 'Pay Per eligibility check',
                  desc: 'Check the cost here for different items (link that opens a PDF)',
                  image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
                  col: 'col-span-1',
                },
                {
                  step: '₹1k+',
                  badge: 'Packages',
                  title: 'Credit packages',
                  desc: 'Starting from ₹1,000 minimum top-up',
                  image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?w=800&q=80',
                  col: 'col-span-1',
                },
                {
                  step: 'Free*',
                  badge: 'Included',
                  title: 'Admin & CRM features',
                  desc: 'Free (*for limited period)',
                  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
                  col: 'col-span-1',
                },
              ].map((item, i) => (
                <FeatureCard key={item.title} item={item} index={i} fullImage={true} />
              ))}
            </div>

            <div className="reveal text-center bg-[var(--surface)] border border-[var(--outline)] p-8 rounded-2xl max-w-3xl mx-auto" style={{ transitionDelay: '0.3s' }}>
              <p className="text-[var(--on-surface)] font-medium text-sm mb-4">Enterprise and high-volume pricing available for large DSA networks. Contact Cred2Tech for custom packages.</p>
            </div>
          </div>
        </section>

        {/* ══ S6 — FAQ ══ */}
        <section id="faq" className="py-12 sm:py-16 bg-[var(--bg)] border-b border-[var(--outline)] relative overflow-hidden transition-colors duration-500">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="reveal font-(family-name:--font-outfit) font-bold text-lg sm:text-xl lg:text-[2rem] text-[var(--on-surface)] leading-tight" style={{ transitionDelay: '0.1s' }}>
                DSA FAQ
              </h2>
            </div>

            <Faq faqs={DSA_FAQS} />
          </div>
        </section>

        {/* ══ Marquee Ticker Strip ══ */}
        <div className="bg-[var(--bg)] border-b border-[var(--outline)] transition-colors duration-500">
          <MarqueeTicker />
        </div>

        {/* ══ S8 — FINAL CTA ══ */}
        <section
          id="final-cta"
          className="py-14 sm:py-18 lg:py-20 relative overflow-hidden text-center bg-[var(--bg)] border-t border-[var(--outline)] transition-colors duration-500"
        >
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto">
              <p className="reveal text-xs font-bold tracking-[0.2em] uppercase text-[var(--on-muted)] mb-6">Get Started Today</p>
              <h2 className="reveal font-(family-name:--font-outfit) font-bold text-2xl sm:text-2.5rem lg:text-[2.25rem] mb-5 leading-[1.1] text-[var(--on-surface)]" style={{ transitionDelay: '0.1s' }}>
                Credit, Simplified. For every agent who closes it and every business that deserves it.
              </h2>
              <p className="reveal text-[var(--on-muted)] text-base leading-relaxed mb-12" style={{ transitionDelay: '0.18s' }}>
                DSA agents and MSMEs across India are already using Cred2Tech to access smarter credit faster.
              </p>
              <div className="reveal flex flex-col sm:flex-row justify-center gap-4 mb-14" style={{ transitionDelay: '0.24s' }}>
                <TravelingBorderButton href="/login" solid={true} size="sm">
                  Register as a DSA Partner
                </TravelingBorderButton>
                <TravelingBorderButton href="/login" solid={false} showIcon={true} size="sm">
                  Check My LAP Eligibility
                </TravelingBorderButton>
              </div>
              {/* Trust line with icons */}
              <div className="reveal border-t border-[var(--outline)] pt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--on-muted)]" style={{ transitionDelay: '0.3s' }}>
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

      </div>

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
 // Exclude hero-trust-section from parallax
 gsap.to('#hero-section h1:not(#hero-trust-section h1)',{y:-40,ease:'none',scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true}});
 gsap.to('#hero-section p:not(#hero-trust-section p)',{y:-28,ease:'none',scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true}});
 const hg=document.querySelector('#hero-grid');if(hg)gsap.to(hg,{y:36,ease:'none',scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true}});
 }
 ['#orb-h1','#orb-h2','#orb-h3'].forEach((id,i)=>{const el=document.querySelector(id);if(el)gsap.to(el,{opacity:i===0?0.55:i===1?0.15:0.10,duration:1.5,delay:i*0.2,ease:'power2.out'});});
 }
 window.addEventListener('libs-ready',initParallax);
})();
 `}</Script>

      <style>{`
 .material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;}
 @xs { flex-direction: row; }
 `}</style>
    </>
  );
}
