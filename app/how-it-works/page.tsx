"use client";

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { useTheme } from 'next-themes';
import { TravelingBorderButton } from '../components/TravelingBorderButton';

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

const msmeSteps = [
  {
    number: '01',
    title: 'Register & Verify',
    description: 'Instantly create an account with business PAN and mobile number. OTP-verified. Under 2 minutes.',
  },
  {
    number: '02',
    title: 'Pay the Fee',
    description: 'A one-time fee of ₹1,000 is charged to initiate the eligibility check.',
  },
  {
    number: '03',
    title: 'Consent & Fetch',
    description: 'Authorise the platform to fetch Bureau, ITR, GST returns, and bank statement data via secure, authorised APIs. Explicit consent is obtained at every step.',
  },
  {
    number: '04',
    title: 'Get the Eligibility Report',
    description: 'A detailed report is generated showing eligibility across multiple lenders loan amount, indicative rate, and lender suitability.',
  },
  {
    number: '05',
    title: 'Sit Back. Relax. Loan On the Way.',
    description: 'Choose the preferred lender. A Cred2Tech-empanelled DSA partner is assigned to service the application through to disbursement.',
  },
];

const dsaSteps = [
  {
    number: '01',
    title: 'Register & Onboard',
    description: 'Sign up as a DSA partner. Complete the profile, configure the team, and get access to the dashboard.',
  },
  {
    number: '02',
    title: 'Onboard a Lender',
    description: 'Configure the lender panel. Add contact details, rate matrices, and eligibility filters to start sourcing.',
  },
  {
    number: '03',
    title: 'Purchase a Credit Package',
    description: 'Buy credits from the wallet. Allocate balance to agents and sub-DSAs as needed.',
  },
  {
    number: '04',
    title: 'Add a Customer and Check Eligibility',
    description: "Enter the customer's basic details — business info, property, income, loan requirement. Run a multi-lender eligibility check in one click.",
  },
  {
    number: '05',
    title: 'Review Matched Lenders',
    description: 'See which lenders are eligible, at what amount and rate. Choose the best fit for the customer and share the proposal.',
  },
  {
    number: '06',
    title: 'Manage Payout and Invoice',
    description: 'Track earned commissions, raise invoices, and manage payouts — all in one place with full transparency.',
  },
  {
    number: '07',
    title: 'Complete Lead Management',
    description: 'Monitor the case through Login → Sanction → Disbursement from the pipeline. Maintain a full audit trail per case.',
  },
];

export default function HowItWorksPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsRevealed, setStatsRevealed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Stats reveal observer
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
  }, []);
  useEffect(() => {
    (window as any).__HIW_UNMOUNTED = false;
    const bar = document.createElement('div');
    bar.id = 'scroll-bar';
    bar.style.cssText = 'position:fixed;top:0;left:0;height:2px;width:0%;background:var(--on-surface);z-index:9999;pointer-events:none;transition:width 0.1s;';
    document.body.prepend(bar);
    const onScroll = () => {
      bar.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      (window as any).__HIW_UNMOUNTED = true;
      window.removeEventListener('scroll', onScroll);
      bar.remove();
      document.getElementById('scroll-bar')?.remove();
    };
  }, []);

  return (
    <div className="bg-[var(--bg)] text-[var(--on-surface)] font-(family-name:--font-inter) overflow-x-clip transition-colors duration-500">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative h-[92vh] md:h-screen flex flex-col justify-center overflow-hidden transition-colors duration-500"
      >
        {/* Circular wave motif behind content */}
        <div className="pointer-events-none absolute -right-20 md:right-0 top-0 bottom-0 w-[720px] md:w-[860px] opacity-[0.25]">
          <svg viewBox="0 0 600 600" className="w-full h-full" aria-hidden>
            <defs>
              <radialGradient id="rg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--on-surface)" stopOpacity="0.25"/>
                <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <circle cx="300" cy="300" r="280" fill="url(#rg)" />
            {[40,90,140,190,240].map((r, i) => (
              <circle key={r} cx="300" cy="300" r={r} fill="none" stroke="var(--on-surface)" strokeOpacity={0.12 - i*0.015} strokeWidth="1" />
            ))}
          </svg>
        </div>

        {/* Right-side image */}
        <div className="hidden md:block absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-[2]">
          <div className="relative w-[450px] lg:w-[580px] xl:w-[650px]">
            {mounted && (
              <img
                src={resolvedTheme === 'dark' ? '/images/howitworksdark.png' : '/images/howitworks.png'}
                alt="How It Works"
                className="w-full h-auto object-contain"
              />
            )}
            {/* soft vignette */}
            <div className="absolute inset-0" style={{
              maskImage: 'radial-gradient(ellipse at 70% 40%, black 60%, transparent 95%)',
              WebkitMaskImage: 'radial-gradient(ellipse at 70% 40%, black 60%, transparent 95%)'
            }} />
          </div>
        </div>

        {/* Content */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-6 relative z-10">
          <div className="max-w-2xl lg:max-w-3xl">
            <div className="mb-4">
              <span className="inline-flex items-center bg-[var(--on-surface)] text-[var(--bg)] px-2.5 py-1 font-(family-name:--font-jb-mono) text-xs sm:text-sm font-bold tracking-widest uppercase">
                How It Works
              </span>
            </div>
            <h1 className="font-(family-name:--font-outfit) font-bold text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] leading-[1.05] tracking-tight text-[var(--on-surface)] mb-4">
              Step by Step Journey
            </h1>
            <p className="text-base sm:text-lg text-[var(--on-muted)] max-w-xl mb-6 leading-relaxed">
              From eligibility check to disbursement — handled end to end.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-2">
              <TravelingBorderButton href="/login" size="sm">
                Get Started
              </TravelingBorderButton>
              <TravelingBorderButton href="#msme-steps" size="sm">
                Learn More
              </TravelingBorderButton>
            </div>

            {/* Button subtext */}
            <div className="text-sm text-[var(--on-muted)] mb-2">
              Simple steps to get your loan approved.
            </div>
          </div>
        </div>
      </section>

      {/* Experience Stats Strip */}
      <section ref={statsRef} className="py-8 sm:py-10 bg-[var(--surface)] border-b border-[var(--outline)] overflow-hidden relative transition-colors duration-500">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(var(--on-surface) 1px,transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[var(--outline)] text-center">
            {[
              { value: 5, suffix: '+', label: 'Simple Steps' },
              { value: 100, suffix: '%', label: 'Digital Process' },
              { value: 24, suffix: 'hrs', label: 'Quick Turnaround' },
              { value: 50, suffix: '+', label: 'Partner Lenders' },
            ].map((stat) => (
              <div key={stat.label} className="lg:px-6 min-w-0">
                <div className="font-(family-name:--font-outfit) text-2xl sm:text-3xl font-black text-[var(--on-surface)] leading-none mb-1">
                  <CountUp value={stat.value} suffix={stat.suffix} duration={1500} revealed={statsRevealed} />
                </div>
                <div className="font-(family-name:--font-jb-mono) text-xs sm:text-sm font-bold tracking-[0.12em] uppercase text-[var(--on-muted)] whitespace-nowrap overflow-hidden text-ellipsis">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MSME Section */}
      <section id="msme-steps" className="py-10 sm:py-12 lg:py-16 bg-[var(--bg)] border-b border-[var(--outline)] relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(var(--on-surface) 1px,transparent 1px),linear-gradient(90deg,var(--on-surface) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.22em] uppercase text-[var(--on-surface)]">
              For MSMEs
            </span>
            <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[var(--on-surface)]">
              THE LOAN JOURNEY
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--on-muted)] max-w-2xl mx-auto leading-relaxed">
              From eligibility check to disbursement — handled end to end.
            </p>
          </div>

          <div className="relative space-y-4 sm:space-y-6">
            {/* Connecting line */}
            <div className="hidden lg:block absolute left-[4.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--on-surface)] via-[var(--on-surface)]/30 to-transparent msme-progress-line" />
            {msmeSteps.map((step, idx) => (
              <div
                key={step.number}
                data-step={idx}
                className="step-card-msme group relative overflow-hidden bg-[var(--surface)] border border-[var(--outline)] p-6 sm:p-7 lg:p-8 transition-all duration-500 hover:scale-[1.02] hover:border-[var(--on-surface)]/30 hover:shadow-[0_20px_60px_rgba(11,33,71,0.08)] rounded-2xl"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[var(--on-surface)]/5 via-transparent to-[var(--on-surface)]/5 pointer-events-none" />
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                  <div className="flex-shrink-0">
                    <span className="font-(family-name:--font-jb-mono) text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-[var(--on-surface)] leading-none">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-(family-name:--font-outfit) text-xl sm:text-2xl font-semibold text-[var(--on-surface)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--on-muted)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <TravelingBorderButton href="/login" size="sm">
              Start your Loan Journey
            </TravelingBorderButton>
          </div>
        </div>
      </section>

      {/* DSA Section */}
      <section id="dsa-steps" className="py-10 sm:py-12 lg:py-16 bg-[var(--surface)] border-b border-[var(--outline)] relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(var(--on-surface) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.22em] uppercase text-[var(--on-surface)]">
              For DSA — (Step by Step)
            </span>
            <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[var(--on-surface)]">
              THE DSA OPERATING FLOW
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--on-muted)] max-w-2xl mx-auto leading-relaxed">
              Onboard a customer, run Loan eligibility, and make the introduction — in one seamless flow.
            </p>
          </div>

          <div className="relative space-y-4 sm:space-y-6">
            {/* Connecting line */}
            <div className="hidden lg:block absolute left-[4.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--on-surface)] via-[var(--on-surface)]/30 to-transparent dsa-progress-line" />
            {dsaSteps.map((step, idx) => (
              <div
                key={step.number}
                data-step={idx}
                className="step-card-dsa group relative overflow-hidden bg-[var(--bg)] border border-[var(--outline)] p-6 sm:p-7 lg:p-8 transition-all duration-500 hover:scale-[1.02] hover:border-[var(--on-surface)]/30 hover:shadow-[0_20px_60px_rgba(11,33,71,0.08)] rounded-2xl"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[var(--on-surface)]/5 via-transparent to-[var(--on-surface)]/5 pointer-events-none" />
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                  <div className="flex-shrink-0">
                    <span className="font-(family-name:--font-jb-mono) text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-[var(--on-surface)] leading-none">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-(family-name:--font-outfit) text-xl sm:text-2xl font-semibold text-[var(--on-surface)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--on-muted)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <TravelingBorderButton href="/login" size="sm">
              Become a DSA Partner
            </TravelingBorderButton>
          </div>
        </div>
      </section>


      <style>{`
.material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;}
      `}</style>
    </div>
  );
}
