'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { useTheme } from 'next-themes';
import { ThreeDCard } from '../components/ThreeDCard';
import { TravelingBorderButton } from '../components/TravelingBorderButton';
import { MarqueeTicker } from '../components/MarqueeTicker';
import LoanEligibilityWidget from '@/app/components/LoanEligibilityWidget';
import Faq from '@/app/components/Faq';
import { FeatureCard } from '@/app/components/FeatureCard';

// Lottie Player Component
const LottiePlayer = (props: any) => {
  return React.createElement('lottie-player', props);
};

// Client-only wrapper to prevent hydration mismatch
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <>{children}</> : <div className="w-[120px] h-[120px] mb-4" />;
}


const steps = [
  {
    title: 'Register & Verify',
    description: 'Instantly create an account with business PAN and mobile number.',
  },
  {
    title: 'Pay Eligibility Fee',
    description: 'A one-time fee of ₹1,000 is charged to initiate the eligibility check.',
  },
  {
    title: 'Consent & Fetch',
    description: 'Authorise the platform to fetch Bureau, ITR, GST returns, and bank statement data via secure, authorised APIs. Explicit consent is obtained at every step.',
  },
  {
    title: 'Eligibility Report Generated',
    description: 'A detailed report is generated showing eligibility across multiple lenders loan amount, indicative rate, and lender suitability.',
  },
  {
    title: 'Sit Back. Relax. Loan On the Way.',
    description: 'Choose the preferred lender. A Cred2Tech-empanelled DSA partner is assigned to service the application through to disbursement.',
  },
];

const features = [
  {
    title: 'Eligibility Report',
    desc: 'A detailed report covering Loan eligibility across multiple lenders loan amount, tenor, indicative ROI, and eligibility confidence score.',
    col: 'col-span-1',
    video: null,
    lottie: 'https://assets9.lottiefiles.com/packages/lf20_5njp3vgg.json',
  },
  {
    title: 'Lender Matching',
    desc: 'See which lenders are right for the profile Banks and NBFCs ranked by best fit for the application.',
    col: 'col-span-1',
    video: '/images/Lender Matching.mp4',
    lottie: null,
  },
  {
    title: 'Document Vault',
    desc: 'All financial documents ITR, GST, bank statements, PAN, Aadhaar, property papers organised and accessible in one secure place.',
    col: 'col-span-1',
    video: '/images/Document Vault.mp4',
    lottie: null,
  },
  {
    title: 'Application Tracking',
    desc: 'Track case status in real time from submission to sanction to disbursement.',
    col: 'col-span-1',
    video: '/images/Application Tracking.mp4',
    lottie: null,
  },
  {
    title: 'Privacy-First Design',
    desc: 'Data is yours. Authorised APIs are used with explicit consent before fetching any financial data. Cred2Tech does not share data without user authorisation.',
    col: 'col-span-1',
    video: '/images/privacy.mp4',
    lottie: null,
  },
  {
    title: 'Government Schemes  🔜',
    desc: 'Discover central and state government schemes applicable to the business subsidies, guarantees, grants all in one place. Coming soon.',
    col: 'col-span-1',
    video: '/images/Govt Schemes.mp4',
    lottie: null,
    badge: 'Coming Soon',
  },
];

const faqs = [
  {
    q: 'How much does the eligibility check cost?',
    a: 'A one-time fee of ₹1,000 applies for MSMEs registering directly on the platform. For MSMEs onboarded through a DSA partner, the check is facilitated by the DSA.',
  },
  {
    q: 'Will a third party be involved in the loan process?',
    a: 'Yes. MSMEs registering directly on Cred2Tech are serviced by a Cred2Tech-empanelled DSA partner. The MSME remains fully in control of their application and data throughout the process.',
  },
  {
    q: 'Does checking eligibility affect the credit score?',
    a: 'No. The eligibility check uses a soft bureau inquiry and does not impact the score.',
  },
  {
    q: 'Which lenders are available on the platform?',
    a: 'Cred2Tech works with a curated panel of leading banks and NBFCs for Loan Against Property. The full list is displayed in the eligibility report.',
  },
  {
    q: 'Is the data submitted to the platform secure?',
    a: 'Yes. All data is encrypted and consent-driven. Data is never shared without explicit user authorisation.',
  },
  {
    q: 'Who handles the loan after a lender is chosen?',
    a: 'Once a lender is selected, a Cred2Tech-empanelled DSA partner takes over the servicing of the application from document collection through to disbursement. Sit back, relax loan on the way.',
  },
];

export default function MSMEPage() {
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

        {/* ═══ HERO IMAGE ═══ */}
        <div className="absolute right-8 top-[5%] w-[650px] h-[650px] hidden lg:block z-20 pointer-events-auto">
          <div className="w-full h-full relative">
            <img
              src="/hero2.png"
              alt="Cred2Tech MSME Platform"
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

        {/* Main Content */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4 relative z-10 flex flex-col justify-between h-full text-left">

          <div className="max-w-2xl mt-12 lg:mt-16 self-start w-full">
            {/* Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center text-[#4a8df8] font-(family-name:--font-jb-mono) text-sm font-medium tracking-wide">
                FOR MSME
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-(family-name:--font-outfit) font-bold text-[1.75rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[2.75rem] xl:text-[3rem] leading-[1.1] tracking-tight text-[var(--on-surface)] transition-colors duration-500 mb-4">
              Find the right Loan for your business.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-[1.15rem] text-[var(--on-muted)] transition-colors duration-500 max-w-lg mb-8 leading-relaxed font-light">
              A Loan shouldn't mean weeks of uncertainty. Cred2Tech shows MSMEs exactly which lenders will consider them plus likely terms. Get the entire report for as low as: ₹1,000.
            </p>
          </div>

          {/* Buttons positioned near bottom section */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-2">
            <TravelingBorderButton href="/login" size="sm">
              Check My LAP Eligibility
            </TravelingBorderButton>
          </div>

          {/* Button subtext */}
          <div className="text-sm text-[var(--on-muted)] mb-2">
            Consent-driven. Secure. No unwanted calls.
          </div>

          {/* Bottom 3-Column Section matched exactly from home page */}
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

      {/* ══ S2 — MSME BENEFITS ══ */}
      <section id="msme-benefits" className="py-10 sm:py-14 bg-[var(--bg)] border-b border-[var(--outline)] transition-colors duration-500">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="reveal text-xs font-bold tracking-[0.2em] uppercase text-[var(--on-muted)] mb-4">Social Proof</p>
          <h2 className="reveal font-(family-name:--font-outfit) font-bold text-base sm:text-lg lg:text-xl text-[var(--on-surface)] mb-3" style={{ transitionDelay: '0.1s' }}>
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

      {/* ══ S3 — HOW IT WORKS ══ */}
      <section id="msme-how" className="py-20 sm:py-28 lg:py-32 relative overflow-hidden transition-colors duration-500 bg-[var(--bg)]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 sm:mb-18 max-w-xl">
            <p className="reveal text-xs font-bold tracking-[0.2em] uppercase text-[var(--on-muted)] mb-4">How It Works — MSME Detail</p>
            <h2 className="reveal font-(family-name:--font-outfit) font-bold text-lg sm:text-xl lg:text-[2rem] text-[var(--on-surface)] leading-[1.1] mb-4" style={{ transitionDelay: '0.1s' }}>
              THE LOAN JOURNEY
            </h2>
          </div>

          <div className="space-y-px border border-[var(--outline)] rounded-2xl overflow-hidden">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="reveal group flex flex-col sm:flex-row items-stretch bg-[var(--surface)] border-b border-[var(--outline)] last:border-b-0"
                style={{ transitionDelay: `${idx * 0.09}s` }}
              >
                {/* Step number */}
                <div className="flex items-center justify-center sm:justify-start px-6 sm:px-8 py-4 sm:py-0 sm:w-20 shrink-0 border-b sm:border-b-0 sm:border-r border-[var(--outline)]">
                  <span className="font-(family-name:--font-outfit) font-bold text-2xl text-[var(--on-surface)]/20 select-none">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                {/* Text */}
                <div className="px-6 py-6 flex flex-col justify-center">
                  <h3 className="font-(family-name:--font-outfit) font-bold text-base sm:text-lg text-[var(--on-surface)] mb-1.5">{step.title}</h3>
                  <p className="text-[var(--on-muted)] text-sm leading-relaxed max-w-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ S4 — FEATURES ══ */}
      <section id="msme-features" className="py-20 sm:py-28 lg:py-32 relative overflow-hidden transition-colors duration-500 border-t border-[var(--outline)] bg-[var(--surface)]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="reveal text-xs font-bold tracking-[0.2em] uppercase text-[var(--on-muted)] mb-4">Features</p>
            <h2 className="reveal font-(family-name:--font-outfit) font-bold text-lg sm:text-xl lg:text-[2rem] text-[var(--on-surface)] leading-[1.1] mb-4" style={{ transitionDelay: '0.1s' }}>
              Everything you need for your loan journey
            </h2>
            <p className="reveal text-[var(--on-muted)] text-base leading-relaxed" style={{ transitionDelay: '0.18s' }}>
              Powerful tools designed specifically for MSMEs to find the right loan at the best rate.
            </p>
          </div>

          {/* Feature Grid — Portrait Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 px-12 sm:px-24 lg:px-48">
            {features.map((item, i) => (
              <FeatureCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="msme-faq" className="py-20 sm:py-28 lg:py-32 relative overflow-hidden transition-colors duration-500 bg-[var(--bg)] border-t border-[var(--outline)]">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="reveal font-(family-name:--font-outfit) font-bold text-lg sm:text-xl lg:text-[2rem] text-[var(--on-surface)] leading-[1.1] mb-4" style={{ transitionDelay: '0.1s' }}>
              Frequently Asked Questions
            </h2>
            <p className="reveal text-[var(--on-muted)] text-base leading-relaxed" style={{ transitionDelay: '0.18s' }}>
              Everything you need to know about MSME loans on Cred2Tech.
            </p>
          </div>
          <Faq faqs={faqs} />
        </div>
      </section>

      <style>{`
.material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;}
      `}</style>
    </div>
  );
}
