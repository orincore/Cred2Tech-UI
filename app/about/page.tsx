"use client";

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

const brandValues = [
  {
    icon: 'handshake',
    title: 'Trust',
    description: 'The foundation of every credit relationship. Trust is earned through consistency, transparency, and accountability not marketing claims.',
  },
  {
    icon: 'account_balance',
    title: 'Integrity',
    description: 'Cred2Tech is honest about what the platform can and cannot do. Every data point shared is accurate. Every claim made is one that can be stood behind.',
  },
  {
    icon: 'psychology',
    title: 'Intelligence',
    description: 'Superior technology that works quietly in the background. The algorithms do the heavy lifting so users can focus on decisions, not data.',
  },
  {
    icon: 'auto_awesome',
    title: 'Simplicity',
    description: 'Complex problems deserve elegant solutions. Every interaction is designed to be as simple as it can possibly be.',
  },
  {
    icon: 'fitness_center',
    title: 'Empowerment',
    description: 'MSMEs and DSAs are given the tools to compete with anyone — regardless of the size of their balance sheet or their relationship network.',
  },
  {
    icon: 'public',
    title: 'Access',
    description: "Credit knowledge and credit access should not be a privilege of the well-connected. Cred2Tech is building for Bharat's businesses.",
  },
];

const privacyPoints = [
  'All customer data is fetched via secure, authorised APIs with explicit user consent at every step',
  'The Cred2Tech platform team has no access to the financial data, name, or contact details of any customer onboarded by a DSA',
  'Customer data is encrypted end-to-end and never shared without explicit user authorisation',
  'A soft bureau inquiry model protects customer credit scores no hard pulls during eligibility checks',
  'Data sovereignty remains with the customer and the DSA partner at all times',
];

export default function AboutPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsRevealed, setStatsRevealed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    (window as any).__ABOUT_UNMOUNTED = false;
    const bar = document.createElement('div');
    bar.id = 'scroll-bar';
    bar.style.cssText = 'position:fixed;top:0;left:0;height:2px;width:0%;background:var(--on-surface);z-index:9999;pointer-events:none;transition:width 0.1s;';
    document.body.prepend(bar);
    const onScroll = () => {
      bar.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      (window as any).__ABOUT_UNMOUNTED = true;
      window.removeEventListener('scroll', onScroll);
      bar.remove();
      document.getElementById('scroll-bar')?.remove();
    };
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

  return (
    <div className="bg-[var(--bg)] text-[var(--on-surface)] font-(family-name:--font-inter) overflow-x-clip transition-colors duration-500 mt-10">
      {/* Hero Section — Unique, high-contrast About hero */}
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

        {/* Right-side portrait (about visual) */}
        <div className="hidden md:block absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-[2]">
          <div className="relative w-[450px] lg:w-[580px] xl:w-[650px] aspect-[4/3]">
            <Image
              src="/images/about us.png"
              alt="Cred2Tech Team"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 580px, 650px"
              className="object-contain"
            />
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
                About Cred2Tech
              </span>
            </div>
            <h1 className="font-(family-name:--font-outfit) font-bold text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] leading-[1.05] tracking-tight text-[var(--on-surface)] mb-4">
              Building the intelligence layer that makes the entire lending ecosystem work better.
            </h1>
            <p className="text-base sm:text-lg text-[var(--on-muted)] max-w-xl mb-6 leading-relaxed">
              We’re building the intelligence and workflow layer that powers simpler, faster, more transparent lending for MSMEs, DSAs, and lenders.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-2">
              <TravelingBorderButton href="/contact" size="sm">
                Let's Talk
              </TravelingBorderButton>
              <TravelingBorderButton href="#values" size="sm">
                Our Values
              </TravelingBorderButton>
            </div>

            {/* Button subtext */}
            <div className="text-sm text-[var(--on-muted)] mb-2">
              Building the future of credit infrastructure.
            </div>

                      </div>
        </div>

              </section>

      {/* Mission Section */}
      <section id="mission" className="py-10 sm:py-12 lg:py-16 bg-[var(--bg)] border-b border-[var(--outline)] relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(var(--on-surface) 1px,transparent 1px),linear-gradient(90deg,var(--on-surface) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
    
              <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[var(--on-surface)]">
                Mission
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg sm:text-xl text-[var(--on-muted)] leading-relaxed mb-6">
                To simplify and democratize access to credit & Schemes for MSMEs by building a unified, intelligent marketplace that seamlessly connects businesses, DSAs, and lenders.
              </p>
              <p className="text-base text-[var(--on-muted)] leading-relaxed mb-8">
                To empower DSAs the backbone of MSME credit distribution with a professional, tech-enabled platform to source, process, and track loan applications across multiple lenders, while enabling MSMEs to discover the right financial products with clarity, speed, and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-[var(--surface)] to-[var(--bg)] border-b border-[var(--outline)] relative overflow-hidden transition-colors duration-500">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--on-surface)]/5 border border-[var(--outline)] text-[var(--on-surface)] font-(family-name:--font-jb-mono) text-xs font-bold tracking-widest uppercase mb-3">
                The Long View
              </span>
              <h2 className="font-(family-name:--font-outfit) font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--on-surface)] mb-3 leading-tight">
                Our Vision
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--on-surface)] to-transparent mx-auto rounded-full"></div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
              {/* Left side - Image */}
              <div className="relative lg:col-span-2">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/vision.png"
                    alt="Cred2Tech Vision"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 30vw"
                    className="object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-[var(--on-surface)]/10 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-tl from-[var(--on-surface)]/10 to-transparent rounded-full blur-2xl"></div>
              </div>

              {/* Right side - Content */}
              <div className="lg:col-span-3">
                <div className="p-4 lg:p-6">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-(family-name:--font-outfit) font-bold text-xl lg:text-2xl text-[var(--on-surface)] mb-2">
                        India's Largest MSME Financial Marketplace
                      </h3>
                      <p className="text-[var(--on-muted)] text-sm lg:text-base leading-relaxed">
                        To become India's largest and most trusted financial marketplace for MSMEs spanning loans, credit products, government schemes and more and to expand this model globally.
                      </p>
                    </div>
                    
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--outline)] to-transparent"></div>
                    
                    <div>
                      <h3 className="font-(family-name:--font-outfit) font-bold text-xl lg:text-2xl text-[var(--on-surface)] mb-2">
                        Unified Credit Infrastructure
                      </h3>
                      <p className="text-[var(--on-muted)] text-sm lg:text-base leading-relaxed">
                        We aim to build the definitive platform for DSAs, transforming them into a digitally empowered distribution network, and to integrate directly with lenders to create a seamless, end-to-end credit infrastructure where applications, approvals, and tracking happen in one unified ecosystem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section id="values" className="py-10 sm:py-12 lg:py-16 bg-[var(--bg)] border-b border-[var(--outline)] relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(var(--on-surface) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.22em] uppercase text-[var(--on-surface)]">
              WHAT CRED2TECH STANDS FOR
            </span>
            <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[var(--on-surface)]">
              Brand Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {brandValues.map((value, idx) => (
              <div
                key={value.title}
                className="value-card group bg-[var(--surface)] border border-[var(--outline)] p-6 transition-all duration-300 hover:border-[var(--on-surface)]/30 hover:shadow-[0_20px_60px_rgba(11,33,71,0.08)] rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--on-surface)]/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--on-surface)]/10 rounded-xl">
                    <span className="material-symbols-outlined text-2xl text-[var(--on-surface)]">{value.icon}</span>
                  </div>
                  <h3 className="font-(family-name:--font-outfit) text-xl font-semibold text-[var(--on-surface)]">{value.title}</h3>
                </div>
                <p className="text-sm text-[var(--on-muted)] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-10 sm:py-12 lg:py-16 bg-[var(--surface)] border-b border-[var(--outline)] relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(var(--on-surface) 1px,transparent 1px),linear-gradient(90deg,var(--on-surface) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.22em] uppercase text-[var(--on-surface)]">
                Our Story
              </span>
              <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[var(--on-surface)]">
                Our Story
              </h2>
            </div>

            <div className="bg-[var(--bg)] border border-[var(--outline)] p-6 sm:p-8 lg:p-10 rounded-2xl">
              <p className="text-base text-[var(--on-muted)] leading-relaxed mb-6">
                Cred2Tech was born from insight gained over four decades in financial services.
              </p>
              <p className="text-base text-[var(--on-muted)] leading-relaxed mb-6">
                The founders saw an opportunity to make MSME lending smarter, simpler, and more connected for businesses, DSAs, and lenders alike.
              </p>
              <p className="text-base text-[var(--on-muted)] leading-relaxed mb-6">
                They envisioned a platform where MSMEs can discover the right credit options with clarity, DSAs can manage their full workflow seamlessly, and lenders can receive better-prepared applications with greater transparency.
              </p>
              <p className="text-base text-[var(--on-muted)] leading-relaxed mb-6">
                What began as an idea has become a mission: to build the intelligence and infrastructure layer powering more efficient credit access.
              </p>
              <p className="text-base text-[var(--on-muted)] leading-relaxed">
                Cred2Tech brings MSMEs, DSAs, and lenders together on a single platform designed to expand access to capital, strengthen financial inclusion, and help businesses grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience Stats Strip ── */}
      <section ref={statsRef} className="py-8 sm:py-10 bg-[var(--surface)] border-b border-[var(--outline)] overflow-hidden relative transition-colors duration-500">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(var(--on-surface) 1px,transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[var(--outline)] text-center">
            {[
              { value: 40, suffix: '+', label: 'Years Combined Experience' },
              { value: 2000, suffix: 'Cr+', label: 'Portfolio Managed' },
              { value: 6, suffix: '+', label: 'Leading Institutions' },
              { value: 2, suffix: '', label: 'Co-Founders, 1 Mission' },
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

      {/* Founders Section */}
      <section id="founders" className="py-10 sm:py-12 lg:py-16 bg-[var(--bg)] border-b border-[var(--outline)] relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(var(--on-surface) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.22em] uppercase text-[var(--on-surface)]">
              LEADERSHIP
            </span>
            <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[var(--on-surface)]">
              Meet the Founders
            </h2>
          </div>

          <div className="space-y-8 lg:space-y-12">

            {/* ── Bobby Thomas M — Image LEFT, Info RIGHT ── */}
            <div className="founder-card group relative overflow-hidden border border-[var(--outline)] bg-[var(--surface)] hover:border-[var(--on-surface)]/20 hover:shadow-[0_24px_80px_rgba(11,33,71,0.1)] transition-all duration-500 rounded-2xl">
              {/* Accent bar top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--on-surface)] via-[var(--surface)] to-[var(--on-surface)]" />
              <div className="flex flex-col lg:flex-row min-h-[420px]">

                {/* LEFT — Portrait Image */}
                <div className="relative lg:w-[38%] flex-shrink-0 min-h-[360px] sm:min-h-[400px] lg:min-h-0 bg-gradient-to-br from-[var(--on-surface)] to-[#001233] overflow-hidden">
                  <Image
                    src="/images/Bobby.jpg"
                    alt="Bobby Thomas M"
                    fill
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover object-top lg:object-center opacity-90 group-hover:scale-[1.03] transition-transform duration-700"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
              
                  {/* Gradient overlay on right edge for blend */}
                  <div className="hidden lg:block absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
                  {/* Badge */}
                 
                  
                </div>

                {/* RIGHT — Info */}
                <div className="flex-1 p-7 sm:p-10 lg:p-12 flex flex-col justify-center relative">
                  {/* Subtle dot texture */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--on-surface) 1px,transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="relative z-10">
                    <p className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.2em] uppercase text-[var(--on-surface)] mb-2">Co-Founder</p>
                    <h3 className="font-(family-name:--font-outfit) text-2xl sm:text-3xl font-bold text-[var(--on-surface)] mb-1">Bobby Thomas M</h3>

                    <p className="text-sm sm:text-base text-[var(--on-muted)] leading-relaxed mb-4">
                      Bobby brings over two decades of experience across housing finance, MSME lending, construction finance, and digital distribution. Over the course of his career, he has held senior leadership roles at leading financial institutions, where he has built and scaled lending businesses while navigating diverse market cycles and customer segments.
                    </p>
                    <p className="text-sm sm:text-base text-[var(--on-muted)] leading-relaxed mb-6">
                      He holds an MBA from the University of Madras and is certified in Business Sustainability, Green and Social Bonds, and ESG aligned finance reflecting a strong commitment to responsible and future-ready financial practices.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <a href="#" className="inline-flex items-center gap-2 text-base font-semibold px-2.5 py-1 bg-[var(--on-surface)]/5 text-[var(--on-surface)] border border-[var(--on-surface)]/15 hover:bg-[var(--on-surface)]/10 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Sunil Agarwal — Info LEFT, Image RIGHT ── */}
            <div className="founder-card group relative overflow-hidden border border-[var(--outline)] bg-[var(--surface)] hover:border-[var(--on-surface)]/20 hover:shadow-[0_24px_80px_rgba(11,33,71,0.1)] transition-all duration-500 rounded-2xl">
              {/* Accent bar top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--on-surface)] via-[var(--surface)] to-[var(--on-surface)]" />
              <div className="flex flex-col lg:flex-row-reverse min-h-[420px]">

                {/* RIGHT — Portrait Image (rendered first on mobile via flex-col, visually right on desktop via row-reverse) */}
                <div className="relative lg:w-[38%] flex-shrink-0 min-h-[360px] sm:min-h-[400px] lg:min-h-0 bg-gradient-to-bl from-[#001233] to-[var(--on-surface)] overflow-hidden">
                  <Image
                    src="/images/Sunil.jpg"
                    alt="Sunil Agarwal"
                    fill
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover object-top lg:object-center opacity-90 group-hover:scale-[1.03] transition-transform duration-700"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  
                  {/* Gradient overlay on left edge for blend */}
                  <div className="hidden lg:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
                 
                  
                </div>

                {/* LEFT — Info */}
                <div className="flex-1 p-7 sm:p-10 lg:p-12 flex flex-col justify-center relative">
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--on-surface) 1px,transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="relative z-10">
                    <p className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.2em] uppercase text-[var(--on-surface)] mb-2">Co-Founder</p>
                    <h3 className="font-(family-name:--font-outfit) text-2xl sm:text-3xl font-bold text-[var(--on-surface)] mb-1">Sunil Agarwal</h3>

                    <p className="text-sm sm:text-base text-[var(--on-muted)] leading-relaxed mb-4">
                      Sunil Agarwal is the Co-founder of Cred2Tech, building a technology-first platform to make MSME credit simpler, faster, and more accessible.
                    </p>
                    <p className="text-sm sm:text-base text-[var(--on-muted)] leading-relaxed mb-4">
                      A Chartered Accountant and Certified Independent Director with over two decades of experience in BFSI, he has led and scaled lending businesses across leading institutions including ICICI Bank, Reliance, IIFL, and Udaan. His expertise spans credit, risk, and end-to-end lending transformation across MSME, retail, and supply chain finance.
                    </p>
                    <p className="text-sm sm:text-base text-[var(--on-muted)] leading-relaxed mb-6">
                      He also founded Elevate Consulting and has held board roles in financial services, bringing a strong blend of operating and governance experience.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <a href="#" className="inline-flex items-center gap-2 text-base font-semibold px-2.5 py-1 bg-[var(--on-surface)]/5 text-[var(--on-surface)] border border-[var(--on-surface)]/15 hover:bg-[var(--on-surface)]/10 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Legal Entity Section */}
      <section id="company" className="py-10 sm:py-12 lg:py-16 bg-[var(--bg)] border-b border-[var(--outline)] relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(var(--on-surface) 1px,transparent 1px),linear-gradient(90deg,var(--on-surface) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.22em] uppercase text-[var(--on-surface)]">
                LEGAL ENTITY
              </span>
              <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[var(--on-surface)]">
                The Company
              </h2>
            </div>

            <div className="bg-[var(--surface)] border border-[var(--outline)] p-6 sm:p-8 text-[var(--on-surface)] rounded-2xl">
              <p className="text-base leading-relaxed">
                Cred2Tech is a product of Sunby Credtech Private Limited, incorporated in Bengaluru, India. The platform is being built for India's MSME lending market, with a global vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-10 sm:py-12 lg:py-16 bg-[var(--surface)] border-b border-[var(--outline)] relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(var(--on-surface) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.22em] uppercase text-[var(--on-surface)]">
              Startup India Innovation Statement
            </span>
            <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[var(--on-surface)]">
              Technology & Innovation
            </h2>
          </div>

          <div className="space-y-6">
            {/* The Problem */}
            <div className="tech-card bg-[var(--bg)] border border-[var(--outline)] p-6 sm:p-8 rounded-2xl">
              <h3 className="font-(family-name:--font-outfit) text-lg font-bold text-[var(--on-surface)] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--on-surface)]">error</span>
                The Problem
              </h3>
              <p className="text-sm text-[var(--on-muted)] leading-relaxed">
                MSME credit access in India remains bottlenecked by information asymmetry. Borrowers lack visibility into lender-specific credit appetites, leading to high rejection rates and a manual, 5–7 day discovery cycle. Beyond credit, MSMEs face a discovery gap with regard to government support with hundreds of central and state schemes from NABARD, SIDBI, and other nodal agencies, small business owners find eligibility criteria opaque, resulting in massive under-utilisation of available fiscal support.
              </p>
            </div>

            {/* The Innovation */}
            <div className="tech-card bg-[var(--bg)] border border-[var(--outline)] p-6 sm:p-8 rounded-2xl">
              <h3 className="font-(family-name:--font-outfit) text-lg font-bold text-[var(--on-surface)] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--on-surface)]">lightbulb</span>
                The Innovation: Lender-Specific Logic Mapping (L-SLM) Engine
              </h3>
              <p className="text-sm text-[var(--on-muted)] leading-relaxed mb-4">
                Cred2Tech has developed a high-velocity Lender Intelligence and Logic-Mapping Platform. The core uniqueness lies in the Lender-Specific Logic Mapping (L-SLM) Engine. While traditional models rely on manual coordination, the platform digitises complex, multi-variable credit policies into a unified Rule-Based Workflow enabling real-time eligibility matching across multiple lenders simultaneously.
              </p>
              <h4 className="font-semibold text-[var(--on-surface)] mb-2">Unified Scheme Intelligence (USI) Module</h4>
              <p className="text-sm text-[var(--on-muted)] leading-relaxed">
                Cred2Tech incorporates a Unified Scheme Intelligence (USI) module. This feature democratises access to government-backed incentives by cross-referencing MSME profiles with a comprehensive database of central and state schemes. Proprietary matching logic ensures a frictionless journey, allowing businesses to discover eligible subsidies with near-zero additional data input bridging the gap between public policy and its intended beneficiaries.
              </p>
            </div>

            {/* Scalability */}
            <div className="tech-card bg-[var(--bg)] border border-[var(--outline)] p-6 sm:p-8 rounded-2xl">
              <h3 className="font-(family-name:--font-outfit) text-lg font-bold text-[var(--on-surface)] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--on-surface)]">cloud</span>
                Scalability & Architecture
              </h3>
              <p className="text-sm text-[var(--on-muted)] leading-relaxed mb-4">
                The platform is built on a Modular Microservices Architecture, allowing horizontal scaling across different loan products Secured, Unsecured, and Working Capital without increasing operational overhead. The Channel-Partner-as-a-Service (CPaaS) model enables onboarding of thousands of DSAs, providing each with a digital Command Centre to manage their entire lead lifecycle.
              </p>
              <h4 className="font-semibold text-[var(--on-surface)] mb-2">National Infrastructure Vision</h4>
              <p className="text-sm text-[var(--on-muted)] leading-relaxed">
                By integrating with GST, the Account Aggregator framework, and ITR data, Cred2Tech is positioned to become a national infrastructure layer for friction-free MSME credit distribution. This directly supports the Atmanirbhar Bharat vision by reducing the cost of credit acquisition and shortening disbursement cycles empowering the backbone of the Indian economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-4 sm:py-6 lg:py-8 bg-[var(--bg)] relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(var(--on-surface) 1px,transparent 1px),linear-gradient(90deg,var(--on-surface) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.22em] uppercase text-[var(--on-surface)]">
                OUR PRIVACY ARCHITECTURE
              </span>
              <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[var(--on-surface)]">
                Data Privacy Commitment
              </h2>
            </div>

            <div className="bg-[var(--surface)] border border-[var(--outline)] p-6 sm:p-8 text-[var(--on-surface)]">
              <ul className="space-y-4">
                {privacyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[var(--on-surface)] flex-shrink-0 mt-0.5">check_circle</span>
                    <span className="text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


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

      <Script id="about-animations" strategy="afterInteractive">{`
(function(){
  function initAnimations(){
    if(!window.gsap||!window.ScrollTrigger)return;
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero entrance animation
    gsap.from('#hero-section h1',{opacity:0,y:25,duration:0.5,delay:0.1,ease:'power2.out'});
    gsap.from('#hero-section > div > div > div > span',{opacity:0,scale:0.9,duration:0.4,ease:'back.out(1.7)'});
    gsap.from('#hero-section p',{opacity:0,y:15,duration:0.5,delay:0.2,ease:'power2.out'});
    
    // Section headers stagger
    const sections=['#mission','#vision','#values','#story','#founders','#company','#technology','#privacy'];
    sections.forEach((id)=>{
      gsap.from(id+' .text-center',{scrollTrigger:{trigger:id,start:'top 85%'},opacity:0,y:20,duration:0.5,ease:'power2.out'});
    });
    
    // Value cards
    const valueCards=document.querySelectorAll('.value-card');
    valueCards.forEach((card,i)=>{
      gsap.to(card,{scrollTrigger:{trigger:card,start:'top 85%'},opacity:1,y:0,duration:0.4,delay:i*0.05,ease:'power2.out'});
    });
    
    // Founder cards
    const founderCards=document.querySelectorAll('.founder-card');
    founderCards.forEach((card,i)=>{
      gsap.to(card,{scrollTrigger:{trigger:card,start:'top 85%'},opacity:1,y:0,duration:0.4,delay:i*0.1,ease:'power2.out'});
    });
    
    // Tech cards
    const techCards=document.querySelectorAll('.tech-card');
    techCards.forEach((card,i)=>{
      gsap.to(card,{scrollTrigger:{trigger:card,start:'top 85%'},opacity:1,y:0,duration:0.4,delay:i*0.1,ease:'power2.out'});
    });
  }
  window.addEventListener('libs-ready',initAnimations,{once:true});
})();
      `}</Script>

      <style>{`
.material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;}
.value-card{transform:translateY(20px);}
.founder-card{transform:translateY(20px);}
.tech-card{transform:translateY(20px);}
      `}</style>
    </div>
  );
}
