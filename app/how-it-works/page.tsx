"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const msmeSteps = [
  {
    number: '1',
    title: 'Register & Verify',
    description: 'Instantly create an account with business PAN and mobile number. OTP-verified. Under 2 minutes.',
  },
  {
    number: '2',
    title: 'Pay the Fee',
    description: 'A one-time fee of ₹1,000 is charged to initiate the eligibility check.',
  },
  {
    number: '3',
    title: 'Consent & Fetch',
    description: 'Authorise the platform to fetch Bureau, ITR, GST returns, and bank statement data via secure, authorised APIs. Explicit consent is obtained at every step.',
  },
  {
    number: '4',
    title: 'Get the Eligibility Report',
    description: 'A detailed report is generated showing eligibility across multiple lenders — loan amount, indicative rate, and lender suitability.',
  },
  {
    number: '5',
    title: 'Sit Back. Relax. Loan On the Way.',
    description: 'Choose the preferred lender. A Cred2Tech-empanelled DSA partner is assigned to service the application through to disbursement.',
  },
];

const dsaSteps = [
  {
    number: '1',
    title: 'Register & Onboard',
    description: 'Sign up as a DSA partner. Complete the profile, configure the team, and get access to the dashboard.',
  },
  {
    number: '2',
    title: 'Onboard a Lender',
    description: 'Configure the lender panel. Add contact details, rate matrices, and eligibility filters to start sourcing.',
  },
  {
    number: '3',
    title: 'Purchase a Credit Package',
    description: 'Buy credits from the wallet. Allocate balance to agents and sub-DSAs as needed.',
  },
  {
    number: '4',
    title: 'Add a Customer and Check Eligibility',
    description: "Enter the customer's basic details — business info, property, income, loan requirement. Run a multi-lender eligibility check in one click.",
  },
  {
    number: '5',
    title: 'Review Matched Lenders',
    description: 'See which lenders are eligible, at what amount and rate. Choose the best fit for the customer and share the proposal.',
  },
  {
    number: '6',
    title: 'Manage Payout and Invoice',
    description: 'Track earned commissions, raise invoices, and manage payouts — all in one place with full transparency.',
  },
  {
    number: '7',
    title: 'Complete Lead Management',
    description: 'Monitor the case through Login → Sanction → Disbursement from the pipeline. Maintain a full audit trail per case.',
  },
];

export default function HowItWorksPage() {
  useEffect(() => {
    (window as any).__HIW_UNMOUNTED = false;
    const bar = document.createElement('div');
    bar.id = 'scroll-bar';
    bar.style.cssText = 'position:fixed;top:0;left:0;height:2px;width:0%;background:linear-gradient(90deg,var(--on-surface),var(--surface-low));z-index:9999;pointer-events:none;transition:width 0.1s;';
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
    <div className="bg-[#fcf9f8] text-[#1b1c1c] font-(family-name:--font-inter) overflow-x-clip">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative min-h-[50vh] flex items-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg,#0a1628 0%,#0d2d6b 35%,#1565d8 70%,#0a1628 100%)',
        }}
      >
        <div className="hidden lg:block px-orb w-[400px] h-[400px] bg-[#0d3a8e] absolute top-[-100px] left-[-150px] z-0" id="orb-h1" />
        <div className="hidden lg:block px-orb w-[300px] h-[300px] bg-[var(--on-surface)] absolute bottom-[-80px] right-[5%] z-0" id="orb-h2" />
        <div className="px-grid z-0" id="hero-grid" />

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.18em] uppercase text-[var(--on-surface)] mb-4 px-3 py-1 border border-[var(--on-surface)]/30 bg-[var(--on-surface)]/10">
              How It Works
            </span>
            <h1 className="font-(family-name:--font-outfit) font-extrabold text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] tracking-tight text-white mb-6">
              Step by Step Journey
            </h1>
            <p className="text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              From eligibility check to disbursement — handled end to end.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Context Strip */}
      <section className="py-0 bg-[#fcf9f8] overflow-hidden">
        <div className="grid grid-cols-3 h-36 sm:h-52 lg:h-64">
          <div className="relative overflow-hidden">
            <img src="/images/MSME-owner.jpg" alt="MSME Owner" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.background = 'linear-gradient(135deg,var(--on-surface),var(--surface-low))'; (e.target as HTMLImageElement).remove(); }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--on-surface)]/60 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="font-(family-name:--font-jb-mono) text-sm font-bold tracking-widest uppercase text-white/80">MSME Owner</span>
            </div>
          </div>
          <div className="relative overflow-hidden border-x border-white/20">
            <img src="/images/Agent.jpg" alt="DSA Agent" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.background = 'linear-gradient(135deg,#001233,var(--on-surface))'; (e.target as HTMLImageElement).remove(); }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001233]/60 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="font-(family-name:--font-jb-mono) text-sm font-bold tracking-widest uppercase text-white/80">DSA Agent</span>
            </div>
          </div>
          <div className="relative overflow-hidden bg-gradient-to-br from-[var(--on-surface)] to-[var(--surface-low)] flex items-center justify-center">
            <div className="text-center p-4">
              <div className="font-(family-name:--font-outfit) text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--on-surface)] leading-none mb-1 whitespace-nowrap">₹25L Cr</div>
              <div className="font-(family-name:--font-jb-mono) text-xs sm:text-base font-bold tracking-widest uppercase text-white/50">Credit Gap</div>
            </div>
          </div>
        </div>
      </section>

      {/* MSME Section */}
      <section id="msme-steps" className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(var(--on-surface) 1px,transparent 1px),linear-gradient(90deg,var(--on-surface) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--on-surface)]/20 to-transparent" />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.22em] uppercase text-[var(--on-surface)]">
              For MSMEs
            </span>
            <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[var(--on-surface)]">
              THE LAP JOURNEY
            </h2>
          </div>

          <div className="relative space-y-4 sm:space-y-6">
            {/* Connecting line */}
            <div className="hidden lg:block absolute left-[4.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--on-surface)] via-[var(--on-surface)]/30 to-transparent msme-progress-line" />
            {msmeSteps.map((step, idx) => (
              <div
                key={step.number}
                data-step={idx}
                className="step-card-msme group relative overflow-hidden bg-[#fcf9f8] border border-[#e8e4e1] p-6 sm:p-7 lg:p-8 transition-all duration-500 hover:scale-[1.02] hover:border-[var(--on-surface)]/50 hover:shadow-[0_20px_60px_rgba(11,33,71,0.08)]"
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
                    <p className="text-sm sm:text-base text-[#424751] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-1.5 bg-[var(--on-surface)] text-[#001233] px-6 py-3 sm:px-8 sm:py-4 font-bold text-sm sm:text-base hover:shadow-[0_0_28px_rgba(29,255,155,0.5)] hover:scale-[1.02] transition-all whitespace-nowrap group"
            >
              Start Your LAP Journey
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* DSA Section */}
      <section id="dsa-steps" className="py-10 sm:py-12 lg:py-16 bg-[#f0f7ff] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(var(--on-surface) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--on-surface)]/10 to-transparent" />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.22em] uppercase text-[var(--on-surface)]">
              For DSAs
            </span>
            <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[var(--on-surface)]">
              THE DSA OPERATING FLOW
            </h2>
          </div>

          <div className="relative space-y-4 sm:space-y-6">
            {/* Connecting line */}
            <div className="hidden lg:block absolute left-[4.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--on-surface)] via-[var(--on-surface)]/30 to-transparent dsa-progress-line" />
            {dsaSteps.map((step, idx) => (
              <div
                key={step.number}
                data-step={idx}
                className="step-card-dsa group relative overflow-hidden bg-[#fcf9f8] border border-[#e8e4e1] p-6 sm:p-7 lg:p-8 transition-all duration-500 hover:scale-[1.02] hover:border-[var(--on-surface)]/50 hover:shadow-[0_20px_60px_rgba(11,33,71,0.08)]"
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
                    <p className="text-sm sm:text-base text-[#424751] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-1.5 bg-[var(--on-surface)] text-[#001233] px-6 py-3 sm:px-8 sm:py-4 font-bold text-sm sm:text-base hover:shadow-[0_0_28px_rgba(29,255,155,0.5)] hover:scale-[1.02] transition-all whitespace-nowrap group"
            >
              Become a DSA Partner
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
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

      <Script id="hiw-animations" strategy="afterInteractive">{`
(function(){
  function initAnimations(){
    if(!window.gsap||!window.ScrollTrigger)return;
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero orbs
    const orbH1=document.getElementById('orb-h1'),orbH2=document.getElementById('orb-h2'),heroGrid=document.getElementById('hero-grid');
    if(orbH1)gsap.to(orbH1,{opacity:0.55,duration:0.8,ease:'power2.out'});
    if(orbH2)gsap.to(orbH2,{opacity:0.15,duration:0.8,delay:0.15,ease:'power2.out'});
    if(heroGrid)gsap.to(heroGrid,{opacity:1,duration:0.6});
    gsap.to('#orb-h1',{scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true},y:60});
    gsap.to('#orb-h2',{scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true},y:-40});
    gsap.to('#hero-grid',{scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true},y:20});
    
    // Hero entrance animation
    gsap.from('#hero-section h1',{opacity:0,y:25,duration:0.5,delay:0.1,ease:'power2.out'});
    gsap.from('#hero-section > div > div > span',{opacity:0,scale:0.9,duration:0.4,ease:'back.out(1.7)'});
    gsap.from('#hero-section p',{opacity:0,y:15,duration:0.5,delay:0.2,ease:'power2.out'});
    
    // MSME Step cards stagger reveal - instant
    const msmeCards=document.querySelectorAll('.step-card-msme');
    msmeCards.forEach((card,i)=>{
      gsap.from(card,{
        scrollTrigger:{trigger:card,start:'top 85%',toggleActions:'play none none reverse'},
        opacity:0,y:15,duration:0.3,delay:i*0.03,ease:'power2.out'
      });
    });
    
    // DSA Step cards stagger reveal - instant
    const dsaCards=document.querySelectorAll('.step-card-dsa');
    dsaCards.forEach((card,i)=>{
      gsap.from(card,{
        scrollTrigger:{trigger:card,start:'top 85%',toggleActions:'play none none reverse'},
        opacity:0,y:15,duration:0.3,delay:i*0.03,ease:'power2.out'
      });
    });
    
    // Progress lines animation - faster
    gsap.from('.msme-progress-line',{scrollTrigger:{trigger:'#msme-steps',start:'top 80%'},scaleY:0,transformOrigin:'top',duration:0.8,ease:'power2.out'});
    gsap.from('.dsa-progress-line',{scrollTrigger:{trigger:'#dsa-steps',start:'top 80%'},scaleY:0,transformOrigin:'top',duration:0.8,ease:'power2.out'});
    
    // Section headers animation - faster
    gsap.from('#msme-steps .text-center',{scrollTrigger:{trigger:'#msme-steps',start:'top 85%'},opacity:0,y:20,duration:0.5,ease:'power2.out'});
    gsap.from('#dsa-steps .text-center',{scrollTrigger:{trigger:'#dsa-steps',start:'top 85%'},opacity:0,y:20,duration:0.5,ease:'power2.out'});
    
    // CTA buttons animation - faster
    gsap.from('#msme-steps .mt-10',{scrollTrigger:{trigger:'#msme-steps .mt-10',start:'top 90%'},opacity:0,y:15,duration:0.4,ease:'power2.out'});
    gsap.from('#dsa-steps .mt-10',{scrollTrigger:{trigger:'#dsa-steps .mt-10',start:'top 90%'},opacity:0,y:15,duration:0.4,ease:'power2.out'});
  }
  window.addEventListener('libs-ready',initAnimations,{once:true});
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
