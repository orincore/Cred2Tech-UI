"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const msmeSteps = [
  {
    number: '01',
    title: 'Register & Verify',
    description: 'Create an account with business PAN and mobile number. OTP-verified. Under 2 minutes.',
  },
  {
    number: '02',
    title: 'Pay the Eligibility Fee',
    description: 'A one-time fee of ₹1,000 is charged to initiate the check for direct MSME registrations.',
  },
  {
    number: '03',
    title: 'Share Business & Property Details',
    description: 'Enter GST number, business vintage, type, property details, and the loan amount required.',
  },
  {
    number: '04',
    title: 'Consent & Fetch',
    description: 'Authorise the platform to fetch ITR, GST, and bank data via secure, authorised APIs. Explicit consent is obtained at every step.',
  },
  {
    number: '05',
    title: 'Bureau Check',
    description: 'A soft bureau inquiry analyses credit obligations. This does not affect the CIBIL score.',
  },
  {
    number: '06',
    title: 'Get the Eligibility Report',
    description: 'A personalised report is ready within minutes — LAP eligibility across lenders, indicative rate, and lender suitability.',
  },
  {
    number: '07',
    title: 'Sit Back. Relax. Loan On the Way.',
    description: 'Choose the preferred lender. A Cred2Tech-empanelled DSA partner is assigned and handles the application from here through to disbursement.',
  },
];

const dsaSteps = [
  {
    number: '01',
    title: 'Register & Onboard',
    description: 'Sign up as a DSA partner. Complete the profile, select the lender panel, and invite the team.',
  },
  {
    number: '02',
    title: 'Purchase a Credit Package',
    description: 'Buy credits from the wallet. Allocate balance to agents and sub-DSAs as needed.',
  },
  {
    number: '03',
    title: 'Add a Customer',
    description: "Enter the customer's basic details — business info, property, income, loan requirement. Bureau and data fetch runs automatically.",
  },
  {
    number: '04',
    title: 'Run LAP Eligibility',
    description: 'One click generates a full LAP eligibility report — bureau, ITR, GST, bank data — across the entire lender panel.',
  },
  {
    number: '05',
    title: 'Review Matched Lenders',
    description: 'See which lenders are eligible, at what amount and rate. Choose the best fit for the customer.',
  },
  {
    number: '06',
    title: 'Prepare & Submit',
    description: 'Prepare the loan application with auto-filled data. Submit the application directly to the lender.',
  },
  {
    number: '07',
    title: 'Track & Close',
    description: 'Monitor the case through Login → Sanction → Disbursement from the pipeline. Commissions are tracked automatically.',
  },
];

export default function HowItWorksPage() {
  useEffect(() => {
    (window as any).__HIW_UNMOUNTED = false;
    const bar = document.createElement('div');
    bar.id = 'scroll-bar';
    bar.style.cssText = 'position:fixed;top:0;left:0;height:2px;width:0%;background:linear-gradient(90deg,#1dff9b,#0056a7);z-index:9999;pointer-events:none;transition:width 0.1s;';
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
        <div className="hidden lg:block px-orb w-[300px] h-[300px] bg-[#1dff9b] absolute bottom-[-80px] right-[5%] z-0" id="orb-h2" />
        <div className="px-grid z-0" id="hero-grid" />

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block font-(family-name:--font-jb-mono) text-[10px] font-bold tracking-[0.18em] uppercase text-[#1dff9b] mb-4 px-3 py-1 border border-[#1dff9b]/30 bg-[#1dff9b]/10">
              How It Works
            </span>
            <h1 className="font-(family-name:--font-outfit) font-extrabold text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] tracking-tight text-white mb-6">
              Step by Step Journey
            </h1>
            <p className="text-base lg:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              From eligibility check to disbursement — handled end to end.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Context Strip */}
      <section className="py-0 bg-[#fcf9f8] overflow-hidden">
        <div className="grid grid-cols-3 h-36 sm:h-52 lg:h-64">
          <div className="relative overflow-hidden">
            <img src="/images/MSME-owner.jpg" alt="MSME Owner" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.background = 'linear-gradient(135deg,#003f7d,#0056a7)'; (e.target as HTMLImageElement).remove(); }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003f7d]/60 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="font-(family-name:--font-jb-mono) text-[9px] font-bold tracking-widest uppercase text-white/80">MSME Owner</span>
            </div>
          </div>
          <div className="relative overflow-hidden border-x border-white/20">
            <img src="/images/Agent.jpg" alt="DSA Agent" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.background = 'linear-gradient(135deg,#001233,#003f7d)'; (e.target as HTMLImageElement).remove(); }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001233]/60 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="font-(family-name:--font-jb-mono) text-[9px] font-bold tracking-widest uppercase text-white/80">DSA Agent</span>
            </div>
          </div>
          <div className="relative overflow-hidden bg-gradient-to-br from-[#003f7d] to-[#0056a7] flex items-center justify-center">
            <div className="text-center p-4">
              <div className="font-(family-name:--font-outfit) text-3xl sm:text-4xl lg:text-5xl font-black text-[#1dff9b] leading-none mb-1">₹25L</div>
              <div className="font-(family-name:--font-outfit) text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-none mb-2">Cr</div>
              <div className="font-(family-name:--font-jb-mono) text-[8px] sm:text-[10px] font-bold tracking-widest uppercase text-white/50">Credit Gap</div>
            </div>
          </div>
        </div>
      </section>

      {/* MSME Section */}
      <section id="msme-steps" className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#003f7d 1px,transparent 1px),linear-gradient(90deg,#003f7d 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#003f7d]/20 to-transparent" />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="font-(family-name:--font-jb-mono) text-[10px] font-bold tracking-[0.22em] uppercase text-[#006d3f]">
              For MSMEs
            </span>
            <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[#003f7d]">
              THE LAP JOURNEY
            </h2>
          </div>

          <div className="relative space-y-4 sm:space-y-6">
            {/* Connecting line */}
            <div className="hidden lg:block absolute left-[4.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-[#1dff9b] via-[#003f7d]/30 to-transparent msme-progress-line" />
            {msmeSteps.map((step, idx) => (
              <div
                key={step.number}
                data-step={idx}
                className="step-card-msme group relative overflow-hidden bg-[#fcf9f8] border border-[#e8e4e1] p-6 sm:p-7 lg:p-8 transition-all duration-500 hover:scale-[1.02] hover:border-[#1dff9b]/50 hover:shadow-[0_20px_60px_rgba(0,63,125,0.08)]"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#1dff9b]/5 via-transparent to-[#003f7d]/5 pointer-events-none" />
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                  <div className="flex-shrink-0">
                    <span className="font-(family-name:--font-jb-mono) text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-[#003f7d]/20 leading-none">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-(family-name:--font-outfit) text-xl sm:text-2xl font-semibold text-[#003f7d] mb-2">
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
              className="inline-flex items-center justify-center gap-1.5 bg-[#1dff9b] text-[#001233] px-6 py-3 sm:px-8 sm:py-4 font-bold text-sm sm:text-base hover:shadow-[0_0_28px_rgba(29,255,155,0.5)] hover:scale-[1.02] transition-all whitespace-nowrap group"
            >
              Start Your LAP Journey
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* DSA Section */}
      <section id="dsa-steps" className="py-10 sm:py-12 lg:py-16 bg-[#f0f7ff] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#003f7d 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#003f7d]/10 to-transparent" />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="font-(family-name:--font-jb-mono) text-[10px] font-bold tracking-[0.22em] uppercase text-[#006d3f]">
              For DSAs
            </span>
            <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[#003f7d]">
              THE DSA OPERATING FLOW
            </h2>
          </div>

          <div className="relative space-y-4 sm:space-y-6">
            {/* Connecting line */}
            <div className="hidden lg:block absolute left-[4.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-[#003f7d] via-[#1dff9b]/30 to-transparent dsa-progress-line" />
            {dsaSteps.map((step, idx) => (
              <div
                key={step.number}
                data-step={idx}
                className="step-card-dsa group relative overflow-hidden bg-[#fcf9f8] border border-[#e8e4e1] p-6 sm:p-7 lg:p-8 transition-all duration-500 hover:scale-[1.02] hover:border-[#003f7d]/50 hover:shadow-[0_20px_60px_rgba(0,63,125,0.08)]"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#003f7d]/5 via-transparent to-[#1dff9b]/5 pointer-events-none" />
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                  <div className="flex-shrink-0">
                    <span className="font-(family-name:--font-jb-mono) text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-[#003f7d]/20 leading-none">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-(family-name:--font-outfit) text-xl sm:text-2xl font-semibold text-[#003f7d] mb-2">
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
              className="inline-flex items-center justify-center gap-1.5 bg-[#1dff9b] text-[#001233] px-6 py-3 sm:px-8 sm:py-4 font-bold text-sm sm:text-base hover:shadow-[0_0_28px_rgba(29,255,155,0.5)] hover:scale-[1.02] transition-all whitespace-nowrap group"
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
