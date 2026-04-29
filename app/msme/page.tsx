'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { colors } from '@/app/theme';
import LoanEligibilityWidget from '@/app/components/LoanEligibilityWidget';
import Ribbon3D from '@/app/components/Ribbon3D';

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
    description: 'Create an account with business PAN and mobile number. OTP verified. Under 2 minutes.',
  },
  {
    title: 'Pay Eligibility Fee',
    description: 'A one time fee of ₹1,000 is charged to initiate the eligibility check.',
  },
  {
    title: 'Consent & Fetch',
    description: 'Authorise the platform to fetch ITR, GST returns, and bank statement data via secure, authorised APIs. Explicit consent is obtained at every step.',
  },
  {
    title: 'Bureau Analysis',
    description: 'A soft bureau inquiry analyses credit obligations. This does not affect the CIBIL score.',
  },
  {
    title: 'Eligibility Report Generated',
    description: 'A detailed report is generated showing LAP eligibility across multiple lenders loan amount, indicative rate, and lender suitability.',
  },
  {
    title: 'Sit Back. Relax. Loan On the Way.',
    description: 'Choose the preferred lender. A Cred2Tech empanelled DSA partner is assigned to service the application through to disbursement.',
  },
];

const features = [
  {
    icon: 'analytics',
    title: 'LAP Eligibility Report',
    description: 'A detailed report covering Loan Against Property eligibility across multiple lenders loan amount, tenor, indicative ROI, and eligibility confidence score.',
  },
  {
    icon: 'account_balance',
    title: 'Lender Matching',
    description: 'See which lenders are right for the profile Banks and NBFCs ranked by best fit for the LAP application.',
  },
  {
    icon: 'folder_copy',
    title: 'Document Vault',
    description: 'All financial documents ITR, GST, bank statements, PAN, Aadhaar, property papers organised and accessible in one secure place.',
  },
  {
    icon: 'track_changes',
    title: 'Application Tracking',
    description: 'Track case status in real time from submission to sanction to disbursement.',
  },
  {
    icon: 'shield_lock',
    title: 'Privacy First Design',
    description: 'Data is yours. Authorised APIs are used with explicit consent before fetching any financial data. Cred2Tech does not share data without user authorisation. The Cred2Tech platform team has no access to the financial data, name, or contact details of any customer whether onboarded directly or through a DSA partner.',
  },
  {
    icon: 'account_balance_wallet',
    title: 'Government Schemes  🔜',
    description: 'Discover central and state government schemes applicable to the business subsidies, guarantees, grants all in one place. Coming soon.',
  },
];

const audience = [
  'Sole proprietors and micro businesses with immovable property',
  'Small and medium manufacturing and trading units',
  'Service businesses logistics, IT, healthcare, hospitality',
  'Businesses with 2+ years of operations seeking working capital or expansion finance against property',
];

const faqs = [
  {
    question: 'How much does the eligibility check cost?',
    answer: 'A one time fee of ₹1,000 applies for MSMEs registering directly on the platform. For MSMEs onboarded through a DSA partner, the check is facilitated by the DSA using their purchased credit package.',
  },
  {
    question: 'Will a third party be involved in the loan process?',
    answer: 'Yes. MSMEs registering directly on Cred2Tech are serviced by a Cred2Tech empanelled DSA partner. The MSME remains fully in control of their application and data throughout the process.',
  },
  {
    question: 'Does checking eligibility affect the credit score?',
    answer: 'No. The eligibility check uses a soft bureau inquiry and does not impact the CIBIL score.',
  },
  {
    question: 'Which lenders are available on the platform?',
    answer: 'Cred2Tech works with a curated panel of leading banks and NBFCs for Loan Against Property. The full list is displayed in the eligibility report.',
  },
  {
    question: 'Is the data submitted to the platform secure?',
    answer: 'Yes. All data is encrypted and consent driven. Data is never shared without explicit user authorisation. The Cred2Tech platform team has no access to the financial data, name, or contact details of any customer onboarded on the platform. Data sovereignty remains with the user.',
  },
  {
    question: 'Who handles the loan after a lender is chosen?',
    answer: 'Once a lender is selected, a Cred2Tech empanelled DSA partner takes over the servicing of the application from document collection through to disbursement. Sit back, relax loan on the way.',
  },
];

function MsmeFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="bg-white border border-[var(--primary)]/10 shadow-sm overflow-hidden transition-shadow hover:shadow-md">
            <button
              suppressHydrationWarning
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-(family-name:--font-outfit) font-bold text-[var(--primary)] text-base sm:text-lg leading-snug">{faq.question}</span>
              <span className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-[var(--primary)]/20 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[var(--primary)] border-[var(--primary)]' : ''}`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isOpen ? 'var(--accent)' : 'var(--primary)'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </span>
            </button>
            <div style={{ maxHeight: isOpen ? '400px' : '0', transition: 'max-height 0.35s cubic-bezier(0.22,1,0.36,1)', overflow: 'hidden' }}>
              <p className="px-6 pb-5 text-sm sm:text-base text-[#424751] leading-relaxed border-t border-[var(--primary)]/5 pt-4">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function MSMEPage() {
  useEffect(() => {
    (window as any).__MSME_UNMOUNTED = false;
    if (window.gsap && window.ScrollTrigger && window.THREE) {
      setTimeout(() => {
        if (!(window as any).__MSME_UNMOUNTED) window.dispatchEvent(new Event('libs-ready'));
      }, 150);
    }
    const bar = document.createElement('div');
    bar.id = 'scroll-bar';
    bar.style.cssText = 'position:fixed;top:0;left:0;height:2px;width:0%;background:linear-gradient(90deg,var(--accent),var(--primary-c));z-index:9999;pointer-events:none;transition:width 0.1s;';
    document.body.prepend(bar);
    const onScroll = () => {
      bar.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      (window as any).__MSME_UNMOUNTED = true;
      window.removeEventListener('scroll', onScroll);
      bar.remove();
      document.getElementById('scroll-bar')?.remove();
      if (window.ScrollTrigger) window.ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="bg-[#fcf9f8] text-[#1b1c1c] font-(family-name:--font-inter) overflow-x-clip">
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

      <section
        id="hero-section"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg,#0a1628 0%,#0d2d6b 35%,#1565d8 70%,#0a1628 100%)',
        }}
      >
        <canvas id="ribbon-canvas" className="absolute inset-0 w-full h-full pointer-events-none z-0" />
        <div className="hidden lg:block px-orb w-[400px] h-[400px] bg-[#0d3a8e] absolute top-[-100px] left-[-150px] z-0" id="orb-h1" />
        <div className="hidden lg:block px-orb w-[300px] h-[300px] bg-[var(--accent)] absolute bottom-[-80px] right-[5%] z-0" id="orb-h2" />
        <div className="hidden lg:block px-orb w-[200px] h-[200px] bg-[#00aaff] absolute top-[35%] left-[45%] z-0" id="orb-h3" />
        <div className="px-grid z-0" id="hero-grid" />

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 pt-28 pb-16 lg:pt-0 lg:pb-0 lg:min-h-screen">
          {/* LEFT — Copy */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-block font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.18em] uppercase text-[var(--accent)] mb-4 px-3 py-1 border border-[var(--accent)]/30 bg-[var(--accent)]/10">
              FOR BUSINESS OWNERS
            </span>

            <h1 className="font-(family-name:--font-outfit) font-extrabold text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.05] tracking-tight text-white mb-6 sm:mb-8">
              Find the right Loan for your business.
            </h1>

            <p className="text-sm sm:text-base lg:text-[1.05rem] text-white/80 max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
              A Loan shouldn't mean weeks of uncertainty. Cred2Tech shows MSMEs exactly which lenders will consider them — plus likely terms. Get the entire report for as low as ₹1,000.
            </p>

            <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-3 mb-4 sm:mb-5">
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-1.5 bg-[var(--accent)] text-[#001233] px-5 py-2.5 sm:px-6 sm:py-3 font-bold text-sm sm:text-[0.9375rem] hover:shadow-[0_0_28px_rgba(29,255,155,0.5)] hover:scale-[1.02] transition-all whitespace-nowrap group"
              >
                Check My LAP Eligibility ₹1,000
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <p className="flex items-center justify-center lg:justify-start gap-1.5 text-white/45 text-xs font-(family-name:--font-jb-mono)">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              Consent driven. Secure. No unwanted calls.
            </p>
          </div>

          {/* RIGHT — Widget */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center -mt-20 sm:-mt-4 lg:mt-0">
            <LoanEligibilityWidget />
          </div>
        </div>
      </section>

      {/* ══ MSME STATS STRIP ══ */}
      <section className="py-8 sm:py-10 bg-[var(--primary)] overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(var(--accent) 1px,transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10 text-center">
            {[
              { value: '₹1,000', label: 'One-time Eligibility Check', icon: 'receipt' },
              { value: 'Soft Pull', label: 'No Credit Score Impact', icon: 'shield_lock' },
              { value: 'Multi-Lender', label: 'Best Rate Matched', icon: 'compare_arrows' },
              { value: '100%', label: 'Data Privacy Guaranteed', icon: 'lock' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center lg:px-8 group">
                <span className="material-symbols-outlined text-[var(--accent)]/60 text-2xl mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">{stat.icon}</span>
                <div className="font-(family-name:--font-outfit) text-xl sm:text-2xl lg:text-3xl font-black text-white leading-none mb-1">{stat.value}</div>
                <div className="font-(family-name:--font-jb-mono) text-[9px] sm:text-[10px] font-bold tracking-[0.16em] uppercase text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="msme-how" className="py-10 sm:py-12 lg:py-16 bg-[#f0f7ff] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(var(--primary) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <span className="font-(family-name:--font-jb-mono) text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--primary)]">
              How It Works — MSME Detail
            </span>
            <h2 className="font-(family-name:--font-outfit) text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] font-bold text-[var(--primary)] mt-4">
              THE LAP JOURNEY
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-7">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="group relative overflow-hidden bg-white p-6 sm:p-7 border border-[#e8e4e1] shadow-[0_6px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_top_left,var(--accent)_0%,transparent_55%)] transition-opacity group-hover:opacity-[0.16]" />
                <div className="relative z-10">
                  <span className="font-(family-name:--font-jb-mono) text-[10px] font-bold tracking-[0.3em] text-[#1565d8]/80 uppercase">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-(family-name:--font-outfit) text-xl font-semibold text-[var(--primary)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#424751] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="msme-features" className="py-10 sm:py-12 lg:py-16 bg-[var(--accent)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent" />
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header with Title Left and Arrows Right */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <span className="inline-flex items-center gap-2 font-(family-name:--font-jb-mono) text-xs sm:text-sm font-bold tracking-[0.12em] uppercase text-[var(--primary)] mb-3 px-5 py-2.5 bg-white border-2 border-[var(--secondary)] shadow-[0_4px_20px_rgba(0,109,63,0.15)]">
                <span className="w-2 h-2 bg-[var(--secondary)]" />
                Features — MSME Portal
              </span>
              <h2 className="font-(family-name:--font-outfit) text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] font-bold text-[#001233] leading-tight uppercase tracking-wide">
                Features
              </h2>
            </div>
            {/* Navigation Arrows - Right Side */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => document.getElementById('feature-carousel')?.scrollBy({ left: -360, behavior: 'smooth' })}
                className="w-10 h-10 flex items-center justify-center bg-white border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 shadow-lg"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => document.getElementById('feature-carousel')?.scrollBy({ left: 360, behavior: 'smooth' })}
                className="w-10 h-10 flex items-center justify-center bg-[var(--primary)] border-2 border-[var(--primary)] text-white hover:bg-[var(--primary-c)] hover:border-[var(--primary-c)] transition-all duration-300 shadow-lg"
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
            {/* Carousel Container */}
            <div id="feature-carousel" className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-2 -mx-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {features.map((feature, index) => (
                <div key={feature.title} className="snap-start shrink-0 w-[300px] sm:w-[340px] group relative overflow-hidden bg-white p-6 sm:p-7 rounded-2xl border border-black/[0.05] shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1">
                  <div className="w-[120px] h-[120px] mb-4 overflow-hidden rounded-lg">
                    <ClientOnly>
                      {index === 0 ? (
                        <LottiePlayer 
                          src="https://assets9.lottiefiles.com/packages/lf20_5njp3vgg.json"
                          background="transparent" 
                          speed="1" 
                          loop 
                          autoplay 
                          style={{ width: '120px', height: '120px' }} 
                        />
                      ) : (
                        <video 
                          src={
                            index === 1 ? "/images/Lender Matching.mp4" :
                            index === 2 ? "/images/Document Vault.mp4" :
                            index === 3 ? "/images/Application Tracking.mp4" :
                            index === 4 ? "/images/privacy.mp4" :
                            "/images/Govt Schemes.mp4"
                          } 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      )}
                    </ClientOnly>
                  </div>
                  <h3 className="font-(family-name:--font-outfit) text-lg sm:text-xl font-semibold text-[var(--primary)] leading-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#424751] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="msme-faq" className="py-10 sm:py-12 lg:py-16 bg-[#f0f7ff] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(var(--primary) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="font-(family-name:--font-jb-mono) text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--secondary)]">
              MSME FAQ
            </span>
            <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[var(--primary)]">
              MSME FAQ
            </h2>
          </div>
          <MsmeFaqAccordion />
        </div>
      </section>

      <Script id="widget-anim-script" strategy="afterInteractive">{`
(function(){
 const items=[0,1,2].map(i=>document.getElementById('widget-lender-'+i));
 function show(i){if(!items[i])return;items[i].style.transition='opacity 0.45s ease,transform 0.45s ease';items[i].style.opacity='1';items[i].style.transform='translateY(0)';}
 function hide(i){if(!items[i])return;items[i].style.transition='none';items[i].style.opacity='0';items[i].style.transform='translateY(6px)';}
 function run(){setTimeout(()=>show(0),600);setTimeout(()=>show(1),1150);setTimeout(()=>show(2),1700);setTimeout(()=>{[0,1,2].forEach(hide);setTimeout(run,400);},5200);}
 if(items.some(Boolean)) run();
})();
      `}</Script>

      <Ribbon3D />

      <Script id="msme-parallax" strategy="afterInteractive">{`
(function(){
  function initParallax(){
    if(!window.gsap||!window.ScrollTrigger)return;
    const orbH1=document.getElementById('orb-h1'),orbH2=document.getElementById('orb-h2'),orbH3=document.getElementById('orb-h3'),heroGrid=document.getElementById('hero-grid');
    if(orbH1)gsap.to(orbH1,{opacity:0.55,duration:1.5,ease:'power2.out'});
    if(orbH2)gsap.to(orbH2,{opacity:0.15,duration:1.5,delay:0.2,ease:'power2.out'});
    if(orbH3)gsap.to(orbH3,{opacity:0.10,duration:1.5,delay:0.4,ease:'power2.out'});
    if(heroGrid)gsap.to(heroGrid,{opacity:1,duration:1});
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('#orb-h1',{scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true},y:60});
    gsap.to('#orb-h2',{scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true},y:-40});
    gsap.to('#hero-grid',{scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true},y:20});
  }
  window.addEventListener('libs-ready',initParallax,{once:true});
})();
      `}</Script>
      <style>{`
.px-orb{position:absolute;border-radius:50%;pointer-events:none;will-change:transform;filter:blur(70px);opacity:0;}
.px-grid{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px);background-size:52px 52px;will-change:transform;}
.material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;}
@media(max-width:1023px){.px-orb{opacity:0.08!important;}}
      `}</style>
    </div>
  );
}
