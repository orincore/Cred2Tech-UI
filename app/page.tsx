'use client';
import Link from 'next/link';
import CreditCard3D from './components/CreditCard3D';
import Script from 'next/script';
import { useEffect } from 'react';
import theme from './theme';

const { colors, fonts, gradients, shadows, radii, fontSizes } = theme;

// Extend window for GSAP globals
declare global {
  interface Window {
    ScrollTrigger?: { killAll: () => void; refresh: () => void };
    gsap?: unknown;
    THREE?: unknown;
  }
}

export default function HomePage() {
  // Scroll progress bar + cleanup fixed card on unmount
  useEffect(() => {
    (window as any).__HOME_UNMOUNTED = false;
    // Re-trigger init for client-side routing caching
    if (window.gsap && window.ScrollTrigger && window.THREE) {
      setTimeout(() => {
        if(!(window as any).__HOME_UNMOUNTED) window.dispatchEvent(new Event('libs-ready'));
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
      // Use while loop to remove ALL potentially leaked instances
      while(document.getElementById('fixed-card')) {
        document.getElementById('fixed-card')?.remove();
      }
      document.getElementById('scroll-bar')?.remove();
      // Kill all GSAP ScrollTriggers to prevent memory leaks
      if (window.ScrollTrigger) window.ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      {/* ── EXTERNAL SCRIPTS — load in order, chain via onLoad ── */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Once GSAP is ready, load ScrollTrigger
          const st = document.createElement('script');
          st.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
          st.onload = () => {
            // Once ScrollTrigger ready, load Three.js
            const three = document.createElement('script');
            three.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
            three.onload = () => {
              // All libs ready — fire init
              window.dispatchEvent(new Event('libs-ready'));
            };
            document.head.appendChild(three);
          };
          document.head.appendChild(st);
        }}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"
        strategy="lazyOnload"
      />

      <div className="bg-[#fcf9f8] text-[#1b1c1c] font-(family-name:--font-inter)">

        {/* ── HEADER EXTRACTED TO LAYOUT ── */}

        {/* ── HERO ── */}
        <section className="relative h-screen flex items-center overflow-hidden" id="hero-section" style={{ background: 'linear-gradient(135deg,#1e3a8a 0%,#3b82f6 25%,#2563eb 50%,#1d4ed8 75%,#1e40af 100%)' }}>
          <canvas id="ribbon-canvas" className="absolute inset-0 w-full h-full pointer-events-none z-0" />
          <div className="px-orb w-[500px] h-[500px] bg-[#0d3a8e] absolute top-[-100px] left-[-150px] z-0" id="orb-h1" />
          <div className="px-orb w-[350px] h-[350px] bg-[#1dff9b] absolute bottom-[-80px] right-[10%] z-0" id="orb-h2" />
          <div className="px-orb w-[200px] h-[200px] bg-[#00aaff] absolute top-[30%] left-[40%] z-0" id="orb-h3" />
          <div className="px-grid z-0" id="hero-grid" />
          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-center lg:text-left mt-20 lg:mt-0">
              <h1 className="font-(family-name:--font-outfit) font-extrabold text-4xl sm:text-5xl md:text-7xl leading-[1.1] tracking-tighter text-white mb-6">
                Fast-Track Your <span className="text-[#1dff9b]">MSME Business Growth</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Empowering India's businesses and financial partners. Whether you're an MSME seeking direct capital or a Direct Selling Agent (DSA) managing client portfolios, get instant approvals and seamless disbursements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link href="/login" className="bg-[#1dff9b] text-[#001233] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_30px_rgba(29,255,155,0.4)] transition-all text-center">Apply for Loan</Link>
                <Link href="/login" className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/5 transition-all text-center">Partner as DSA</Link>
              </div>
            </div>
            <div className="relative hidden lg:flex items-center justify-center">
              <CreditCard3D
                brandName="Cred2Tech"
                cardHolder="INDIA MSME CORP."
                cardNumber="5512"
              />
            </div>
          </div>
        </section>

        {/* ── SOLUTIONS / BENTO ── */}
        <section className="bg-[#f6f3f2] relative overflow-hidden" id="solutions">
          <div className="px-orb w-[400px] h-[400px] bg-[#003f7d] absolute top-[5%] right-[-100px] z-0" id="orb-s1" />
          <div className="px-orb w-[280px] h-[280px] bg-[#1dff9b] absolute bottom-[10%] left-[-60px] z-0" id="orb-s2" />
          <div className="absolute top-16 right-24 w-16 h-16 border-2 border-[#003f7d]/10 rounded-2xl rotate-12 px-layer z-0" id="shape-s1" />
          <div className="absolute bottom-24 left-16 w-10 h-10 border-2 border-[#1dff9b]/20 rounded-full px-layer z-0" id="shape-s2" />
          <div className="absolute top-1/2 right-[8%] w-6 h-6 bg-[#1dff9b]/10 rounded-sm rotate-45 px-layer z-0" id="shape-s3" />
          <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-20">
              {/* Left: ghost placeholder — fixed size container, ghost centered via margin auto */}
              <div id="card-landing-slot" className="relative hidden lg:flex items-center justify-center" style={{ minHeight: '280px' }}>
                <div id="card-ghost" style={{
                  width: '380px',
                  height: '240px',
                  flexShrink: 0,
                  borderRadius: '20px',
                  border: '1.5px dashed rgba(0,63,125,0.10)',
                  background: 'rgba(0,63,125,0.02)',
                  opacity: 0,
                  transition: 'opacity .3s',
                  pointerEvents: 'none'
                }} />
              </div>
              <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
                <h2 className="font-(family-name:--font-outfit) font-bold text-3xl sm:text-4xl text-[#003f7d] mb-4">Frictionless Lending & Partner Portals</h2>
                <p className="text-base sm:text-lg text-[#424751] mb-6">Experience a fully digitized loan journey with minimal documentation, built-in analytics, and 24/7 dedicated support for both direct borrowers and channel partners.</p>
                <span className="px-4 py-2 bg-[#e5e2e1] rounded-full text-[10px] sm:text-xs font-bold font-(family-name:--font-jb-mono) text-[#003f7d] w-fit">OMNICHANNEL PORTAL</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* ITR */}
               <div className="md:col-span-4 bg-white p-6 sm:p-8 rounded-xl group hover:bg-[#003f7d] transition-all duration-500">
                <div className="w-12 h-12 rounded-lg bg-[#0056a7]/20 flex items-center justify-center mb-6 group-hover:bg-white/20">
                  <span className="material-symbols-outlined text-[#003f7d] group-hover:text-white">speed</span>
                </div>
                <h3 className="font-(family-name:--font-outfit) text-xl sm:text-2xl font-bold mb-3 group-hover:text-white">Instant Approvals</h3>
                <p className="text-[#424751] text-sm sm:text-base group-hover:text-white/80 mb-6">Digital onboarding powered by instant ITR and Bank Statement analysis ensures you get a decision in minutes.</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-(family-name:--font-jb-mono) text-[11px] sm:text-sm font-bold text-[#006d3f] group-hover:text-[#58ffa5]">MINIMAL PAPERWORK</span>
                </div>
              </div>
              {/* GST */}
               <div className="md:col-span-8 text-white p-6 sm:p-8 rounded-xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#1e3a8a 0%,#3b82f6 25%,#2563eb 50%,#1d4ed8 75%,#1e40af 100%)' }}>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-(family-name:--font-outfit) text-2xl sm:text-3xl font-bold mb-4">Exclusive DSA Dashboard</h3>
                    <p className="text-[#b3ceff] text-base sm:text-lg max-w-md">Manage your entire client portfolio, track real-time loan statuses, and automate your commission payouts in one centralized, powerful hub.</p>
                  </div>
                  <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className="px-6 py-3 bg-[#1dff9b] text-[#00210f] rounded-lg font-bold text-center">Track Leads Instantly</div>
                    <div className="flex -space-x-3 justify-center">
                      {['11', '32', '47'].map(n => <img key={n} src={`https://i.pravatar.cc/40?img=${n}`} alt="User" className="w-10 h-10 rounded-full border-2 border-[#003f7d] object-cover" />)}
                      <div className="w-10 h-10 rounded-full border-2 border-[#003f7d] bg-[#0056a7] flex items-center justify-center text-[11px] font-bold text-white">4k+</div>
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10 scale-150 rotate-12 hidden sm:block">
                  <span className="material-symbols-outlined text-[200px]">handshake</span>
                </div>
              </div>
              {/* Bureau */}
               <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-[#c2c6d3]/10">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4">
                  <div>
                    <h3 className="font-(family-name:--font-outfit) text-xl sm:text-2xl font-bold text-[#003f7d] mb-2">Flexible Credit Options</h3>
                    <p className="text-[#424751] text-sm sm:text-base">Tailored loan structures designed specifically for MSME working capital gaps and expansion.</p>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-(family-name:--font-jb-mono) text-[#003f7d]">₹50L+</div>
                </div>
                <div className="space-y-4">
                  {['Unsecured Term Loans & Bill Discounting', 'Collateral-free working capital lines up to ₹50L'].map(item => (
                    <div key={item} className="flex items-center gap-4 p-4 bg-[#f0eded] rounded-lg">
                      <span className="material-symbols-outlined text-[#006d3f] shrink-0">monetization_on</span>
                      <span className="font-(family-name:--font-jb-mono) text-[11px] sm:text-sm font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Bank */}
               <div className="md:col-span-5 bg-[#443b54] text-white p-6 sm:p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{ background: 'linear-gradient(135deg,#003f7d 0%,#0056a7 50%,#1dff9b 100%)', maskImage: 'radial-gradient(circle at center,black,transparent 80%)' }} />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl mb-6">workspace_premium</span>
                  <div>
                    <h3 className="font-(family-name:--font-outfit) text-xl sm:text-2xl font-bold mb-2">High Commission Structures for DSAs</h3>
                    <p className="text-[#d4c7e6] text-sm sm:text-base">Earn industry-leading payouts converted directly to your mapped bank accounts instantly.</p>
                  </div>
                  <button className="mt-8 text-[#58ffa5] font-bold flex items-center gap-2 hover:gap-4 transition-all bg-transparent border-0 cursor-pointer text-sm sm:text-base">
                    View Partner Benefits <span className="material-symbols-outlined">trending_flat</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── RECOGNISED BY ── */}
        <section className="py-16 bg-[#f6f3f2] relative overflow-hidden" id="recognised-by">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-(family-name:--font-outfit) font-bold text-2xl text-[#003f7d] mb-4">Recognised by Leading Financial Institutions</h2>
              <p className="text-[#424751] max-w-2xl mx-auto">Trusted by banks, NBFCs, and fintech companies across India for reliable MSME loan processing</p>
            </div>

            <div className="marquee-wrap border-y border-[#003f7d]/10 py-6 bg-[#f6f3f2]/50">
              <div className="marquee-track" id="finance-marquee" style={{ animation: 'marquee-scroll 35s linear infinite' }}>
                {[0, 1].map(set => (
                  <div key={set} className="flex items-center gap-8 sm:gap-16 shrink-0">
                    {[
                      { src: '/banks%20logo/HDFC_Bank_Logo.svg.png', name: 'HDFC Bank', h: 32, mh: 24 },
                      { src: '/banks%20logo/axis%20bank.jpg', name: 'Axis Bank', h: 32, mh: 24 },
                      { src: '/banks%20logo/Kotak_Mahindra_Bank_logo.png', name: 'Kotak Mahindra', h: 28, mh: 20 },
                      { src: '/banks%20logo/Yes-Bank-New-Logo-Vector.svg-.png', name: 'Yes Bank', h: 30, mh: 22 },
                      { src: '/banks%20logo/Logo_of_IDFC_First_Bank.svg.png', name: 'IDFC First', h: 30, mh: 22 },
                      { src: '/banks%20logo/BankOfBarodaLogo.svg', name: 'Bank of Baroda', h: 32, mh: 24 },
                    ].map((bank, i) => (
                      <div key={i} className="shrink-0 transition-opacity duration-300">
                        <img src={bank.src} alt={bank.name} className="h-[24px] sm:h-[32px] w-auto object-contain" />
                      </div>
                    ))}
                    <div className="w-1.5 h-1.5 rounded-full bg-[#003f7d]/20 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-8 text-[11px] sm:text-sm text-[#424751]">
              {[['bg-[#006d3f]', 'RBI Approved'], ['bg-[#003f7d]', 'DPDP Compliant'], ['bg-[#006d3f]', 'ISO 27001 Certified']].map(([bg, label]) => (
                <div key={label} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${bg} animate-pulse`} />
                  <span className="font-(family-name:--font-jb-mono) font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLATFORM ── */}
        <section className="py-24 relative overflow-hidden" id="platform">
          <div className="px-orb w-[450px] h-[450px] bg-[#0056a7] absolute top-[-80px] left-[-120px] z-0" id="orb-p1" />
          <div className="px-orb w-[300px] h-[300px] bg-[#1dff9b] absolute bottom-[-60px] right-[-80px] z-0" id="orb-p2" />
          <div className="absolute top-20 right-[15%] w-20 h-20 border border-[#003f7d]/8 rounded-full px-layer z-0" id="shape-p1" />
          <div className="absolute bottom-32 left-[12%] w-12 h-12 border border-[#1dff9b]/15 rotate-45 px-layer z-0" id="shape-p2" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div id="platform-dashboard" className="bg-[#fcf9f8] rounded-2xl shadow-2xl overflow-hidden border border-[#c2c6d3]/20 mx-auto max-w-lg lg:max-w-none">
                    <div className="p-4 flex items-center gap-2" style={{ background: 'linear-gradient(135deg,#1e3a8a 0%,#3b82f6 25%,#2563eb 50%,#1d4ed8 75%,#1e40af 100%)' }}>
                      <div className="w-3 h-3 rounded-full bg-[#ba1a1a]" />
                      <div className="w-3 h-3 rounded-full bg-[#006d3f]" />
                      <div className="w-3 h-3 rounded-full bg-[#d6e3ff]" />
                      <span className="ml-4 text-[10px] font-(family-name:--font-jb-mono) text-white/60 truncate">cred2tech_dashboard_v4.app</span>
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#006d3f] animate-pulse" />
                          <span className="text-[10px] font-bold font-(family-name:--font-jb-mono) text-[#424751] uppercase tracking-widest">Live Verification Feed</span>
                        </div>
                        <span className="text-[10px] font-(family-name:--font-jb-mono) text-[#424751]" id="dash-count">0 processed</span>
                      </div>
                      <div className="space-y-2.5 overflow-hidden" id="dash-feed" style={{ maxHeight: '260px' }} />
                      <div className="mt-4 pt-4 border-t border-[#c2c6d3]/20">
                        <div className="flex items-end gap-1.5 h-10">
                          {[['40%', 'bg-[#006d3f]/20'], ['60%', 'bg-[#006d3f]/30'], ['80%', 'bg-[#006d3f]/50'], ['55%', 'bg-[#006d3f]/70'], ['100%', 'bg-[#006d3f]'], ['45%', 'bg-[#003f7d]/20'], ['70%', 'bg-[#003f7d]/40'], ['90%', 'bg-[#003f7d]/60'], ['65%', 'bg-[#003f7d]']].map(([h, bg], i) => (
                            <div key={i} className={`flex-1 ${bg} rounded-sm`} style={{ height: h }} id={i === 4 ? 'dash-bar-last' : i === 8 ? 'dash-bar-active' : undefined} />
                          ))}
                        </div>
                        <div className="flex justify-between mt-1.5">
                          <span className="text-[10px] text-[#424751] font-(family-name:--font-jb-mono)">Mon</span>
                          <span className="text-[10px] text-[#424751] font-(family-name:--font-jb-mono)">Today</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="font-(family-name:--font-outfit) font-bold text-3xl sm:text-4xl lg:text-5xl text-[#003f7d] mb-8 leading-tight">Total Control Over Your <span className="text-[#006d3f]">Loan Journey</span></h2>
                <div className="space-y-8 sm:space-y-10">
                  {[
                    { icon: 'hub', bg: 'linear-gradient(135deg,#1e3a8a 0%,#3b82f6 25%,#2563eb 50%,#1d4ed8 75%,#1e40af 100%)', title: 'For DSAs: Lead Dominance', desc: 'Centralized dashboard to track clients, submit multiple documents concurrently, monitor sanction status, and calculate exact commission structures.' },
                    { icon: 'bolt', bg: '#006d3f', title: 'For Borrowers: Zero Friction', desc: 'Create an account, securely upload GST/Bank statements via Account Aggregators framework, and pick the best pre-qualified loan offer instantly.' },
                    { icon: 'policy', bg: '#443b54', title: 'Consent-based Privacy', desc: '100% compliant with DPDP guidelines. Complete transparency and secure digital consent journeys ensuring your business data is impenetrable.' },
                  ].map(item => (
                    <div key={item.title} className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6">
                      <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: item.bg }}>
                        <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-[#424751] leading-relaxed text-sm sm:text-base">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PIPELINE ── */}
        <section id="pipeline-section" style={{ height: '500vh', position: 'relative' }}>
          <div id="pipeline-sticky" style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg,#1e3a8a 0%,#3b82f6 25%,#2563eb 50%,#1d4ed8 75%,#1e40af 100%)', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(29,255,155,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(29,255,155,0.03) 1px,transparent 1px)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,86,167,0.3) 0%,transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-80px', right: '-80px', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(29,255,155,0.12) 0%,transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ width: '100%', maxWidth: '1100px', padding: '0 24px', position: 'relative', zIndex: 10 }}>
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <span id="pl-label" style={{ display: 'inline-block', fontFamily: "'Space Grotesk',sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#1dff9b', opacity: 0, transform: 'translateY(16px)', transition: 'opacity 0.5s ease,transform 0.5s ease' }}>Loan Processing Pipeline</span>
                <h2 id="pl-heading" style={{ fontFamily: 'Manrope,sans-serif', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: '#fff', marginTop: '12px', opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease 0.1s,transform 0.6s ease 0.1s' }}>From Data to <span style={{ color: '#1dff9b' }}>Approved Offer</span></h2>
              </div>
              <div className="pl-step-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 0, position: 'relative' }}>
                <div style={{ position: 'absolute', top: '36px', left: 'calc(12.5% + 36px)', right: 'calc(12.5% + 36px)', height: '2px', background: 'rgba(255,255,255,0.08)', zIndex: 0 }}>
                  <div id="pl-line" style={{ height: '100%', width: '0%', background: 'linear-gradient(90deg,#1dff9b,#0056a7)', borderRadius: '2px', boxShadow: '0 0 8px rgba(29,255,155,0.4)' }} />
                </div>
                {[
                  {
                    step: 0, title: 'Data Upload', sub: 'ITR · GST · Bank Stmt', svg: <>
                      {/* Stacked documents with upload arrow */}
                      <rect x="7" y="11" width="11" height="13" rx="1.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" fill="none" />
                      <rect x="10" y="8" width="11" height="13" rx="1.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" fill="none" />
                      <path d="M13 19v-5M13 14l-2 2M13 14l2 2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 11h4M10 13.5h2" stroke="rgba(255,255,255,0.2)" strokeWidth="1.4" strokeLinecap="round" />
                    </>
                  },
                  {
                    step: 1, title: 'Verification', sub: 'Bureau · CIBIL · Experian', svg: <>
                      {/* Fingerprint scan */}
                      <path d="M14 6c-4.4 0-8 3.6-8 8" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                      <path d="M14 9c-2.8 0-5 2.2-5 5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                      <path d="M14 12c-1.1 0-2 .9-2 2v2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                      <path d="M14 6c4.4 0 8 3.6 8 8" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                      <path d="M14 9c2.8 0 5 2.2 5 5v2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                      <path d="M14 12c1.1 0 2 .9 2 2v4" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                      <circle cx="14" cy="14" r="1.2" fill="rgba(255,255,255,0.3)" />
                    </>
                  },
                  {
                    step: 2, title: 'Processing', sub: 'Rule Engine · Scoring', svg: <>
                      {/* CPU chip with pins */}
                      <rect x="9" y="9" width="10" height="10" rx="2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" fill="none" />
                      <rect x="11" y="11" width="6" height="6" rx="1" stroke="rgba(255,255,255,0.25)" strokeWidth="1.4" fill="none" />
                      <path d="M11 7v2M14 7v2M17 7v2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M11 19v2M14 19v2M17 19v2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M7 11h2M7 14h2M7 17h2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M19 11h2M19 14h2M19 17h2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" />
                    </>
                  },
                  {
                    step: 3, title: 'Prequalification', sub: 'Eligibility · Limit', svg: <>
                      {/* Gauge / speedometer */}
                      <path d="M7 18a7 7 0 1 1 14 0" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                      <path d="M10 15.5a4 4 0 0 1 4-2.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
                      <path d="M14 13v-2" stroke="rgba(255,255,255,0.25)" strokeWidth="1.4" strokeLinecap="round" />
                      <path d="M9.5 13.5l-1.2-1.2" stroke="rgba(255,255,255,0.25)" strokeWidth="1.4" strokeLinecap="round" />
                      <path d="M18.5 13.5l1.2-1.2" stroke="rgba(255,255,255,0.25)" strokeWidth="1.4" strokeLinecap="round" />
                      {/* Needle pointing to approved zone */}
                      <path d="M14 18l-3.5-4" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" />
                      <circle cx="14" cy="18" r="1.5" fill="rgba(255,255,255,0.3)" />
                    </>
                  },
                  {
                    step: 4, title: 'Loan Offer', sub: 'Disbursed · Notified', svg: <>
                      {/* Banknote with checkmark */}
                      <rect x="4" y="9" width="20" height="12" rx="2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" fill="none" />
                      <circle cx="14" cy="15" r="3" stroke="rgba(255,255,255,0.3)" strokeWidth="1.6" fill="none" />
                      <path d="M12.5 15l1.2 1.2 2.3-2.4" stroke="rgba(255,255,255,0.3)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 12h3M17 12h7M4 18h3M17 18h7" stroke="rgba(255,255,255,0.2)" strokeWidth="1.4" strokeLinecap="round" />
                    </>
                  },
                ].map(s => (
                  <div key={s.step} className="pl-step" data-step={s.step} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', position: 'relative', zIndex: 1 }}>
                    <div className="pl-icon" style={{ width: '72px', height: '72px', borderRadius: '20px', background: 'rgba(255,255,255,0.04)', border: '1.5px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.05s ease' }}>
                      <svg width="44" height="44" viewBox="0 0 28 28" fill="none">{s.svg}</svg>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div className="pl-title" style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', transition: 'color 0.4s' }}>{s.title}</div>
                      <div className="pl-sub" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', marginTop: '4px', fontFamily: 'Inter,sans-serif', transition: 'color 0.4s' }}>{s.sub}</div>
                    </div>
                    <div className="pl-badge" style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '10px', fontWeight: 700, fontFamily: "'Space Grotesk',sans-serif", letterSpacing: '0.5px', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.4s ease' }}>PENDING</div>
                  </div>
                ))}
              </div>
              <div id="pl-metrics" style={{ display: 'flex', justifyContent: 'center', gap: '48px', marginTop: '56px', opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease,transform 0.6s ease' }}>
                <div style={{ textAlign: 'center' }}><div style={{ fontFamily: 'Manrope,sans-serif', fontSize: '32px', fontWeight: 800, color: '#1dff9b' }} id="pl-m1">0</div><div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: "'Space Grotesk',sans-serif", marginTop: '4px' }}>Leads Processed</div></div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.08)' }} />
                <div style={{ textAlign: 'center' }}><div style={{ fontFamily: 'Manrope,sans-serif', fontSize: '32px', fontWeight: 800, color: '#a8c8ff' }} id="pl-m2">0%</div><div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: "'Space Grotesk',sans-serif", marginTop: '4px' }}>Approval Rate</div></div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.08)' }} />
                <div style={{ textAlign: 'center' }}><div style={{ fontFamily: 'Manrope,sans-serif', fontSize: '32px', fontWeight: 800, color: '#1dff9b' }} id="pl-m3">0ms</div><div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: "'Space Grotesk',sans-serif", marginTop: '4px' }}>Avg Decision Time</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="py-24 overflow-hidden relative" id="pricing" style={{ background: 'linear-gradient(135deg,#1e3a8a 0%,#3b82f6 25%,#2563eb 50%,#1d4ed8 75%,#1e40af 100%)' }}>
          <div className="absolute inset-0 opacity-10 px-layer" id="pricing-dots" style={{ backgroundImage: 'radial-gradient(#1dff9b 1px,transparent 1px)', backgroundSize: '20px 20px' }} />
          <div className="px-orb w-[500px] h-[500px] bg-[#1565d8] absolute top-[-150px] right-[-100px] z-0" id="orb-pr1" />
          <div className="px-orb w-[300px] h-[300px] bg-[#1dff9b] absolute bottom-[-80px] left-[20%] z-0" id="orb-pr2" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
              <h2 className="font-(family-name:--font-outfit) font-bold text-3xl sm:text-4xl text-white mb-6">Choose Your Growth Path</h2>
              <p className="text-[#b3ceff] text-base sm:text-lg px-4">Whether managing a large portfolio or searching for working capital, our portal gets you funded seamlessly.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* MSMEs */}
              <div className="bg-white/5 backdrop-blur-md p-6 sm:p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <p className="text-[#58ffa5] text-[10px] sm:text-sm font-(family-name:--font-jb-mono) font-bold mb-4 uppercase tracking-widest">For Businesses</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Individual MSMEs</h3>
                <p className="text-white/70 text-sm sm:text-base mb-8 min-h-[60px]">Direct funding without middlemen. Unlock your working capital rapidly based purely on your operational data.</p>
                <ul className="space-y-5 mb-10 text-white/90 text-[13px] sm:text-sm">
                  {[['verified_user', 'Self-Service Dashboards'], ['bolt', 'Instant Eligibility Evaluation'], ['account_balance', 'Low Interest Unsecured Lines']].map(([icon, text]) => (
                    <li key={text} className="flex items-center gap-3"><span className="material-symbols-outlined text-[#58ffa5] text-xl">{icon}</span><span className="text-sm sm:text-base">{text}</span></li>
                  ))}
                </ul>
                <Link href="/login" className="block text-center w-full py-4 rounded-lg border-2 border-[#1dff9b] text-[#1dff9b] font-bold hover:bg-[#1dff9b] hover:text-[#00210f] transition-all cursor-pointer">Apply for Loan</Link>
              </div>
              {/* DSA */}
              <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl relative sm:scale-[1.02]">
                <div className="absolute top-0 right-8 -translate-y-1/2 px-5 py-1.5 bg-[#006d3f] text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg">PARTNER PORTAL</div>
                <p className="text-[#003f7d] text-[10px] sm:text-sm font-(family-name:--font-jb-mono) font-bold mb-4 uppercase tracking-widest">For Sales Partners</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#003f7d] mb-6">Certified DSAs</h3>
                <p className="text-[#424751] text-sm sm:text-base mb-8 min-h-[60px]">Supercharge your agency's pipeline. Manage customer documents, track statuses, and automate your commission payouts in one centralized, powerful hub.</p>
                <ul className="space-y-5 text-sm sm:text-base text-[#424751] mb-10">
                  {['Dedicated Portfolio Manager Hub', 'Realtime Commission Payout Dashboard', 'Co-branded tracking & alerts'].map(f => (
                    <li key={f} className="flex gap-3"><span className="material-symbols-outlined text-[#006d3f] text-lg sm:text-xl">check_circle</span>{f}</li>
                  ))}
                </ul>
                <Link href="/login" className="block text-center w-full py-4 rounded-lg text-white font-bold shadow-lg hover:opacity-90 transition-all cursor-pointer" style={{ background: 'linear-gradient(135deg,#1e3a8a 0%,#3b82f6 25%,#2563eb 50%,#1d4ed8 75%,#1e40af 100%)' }}>Join our DSA Network</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 text-center relative overflow-hidden" id="cta-section">
          <div className="px-orb w-[400px] h-[400px] bg-[#003f7d] absolute top-[-100px] left-[10%] z-0" id="orb-c1" />
          <div className="px-orb w-[300px] h-[300px] bg-[#1dff9b] absolute bottom-[-80px] right-[15%] z-0" id="orb-c2" />
          <div className="marquee-wrap mb-16 border-y border-[#003f7d]/10 py-5 bg-[#f6f3f2]/50">
            <div className="marquee-track" id="marquee-inner">
              {['FAST TRACK', 'DSA Network', 'Zero Processing Fee', 'Top Lender Offers', 'MSME Specific', 'Quick Disbursal', 'DSA Network', 'Zero Processing Fee', 'Top Lender Offers', 'MSME Specific', 'Quick Disbursal', 'FAST TRACK', 'DSA Network', 'Zero Processing Fee', 'Top Lender Offers', 'MSME Specific', 'Quick Disbursal'].map((item, i) => (
                <span key={i} className={i % 2 === 0 ? "font-(family-name:--font-jb-mono) font-bold text-sm text-[#003f7d]/40 uppercase tracking-widest" : "text-[#1dff9b] text-lg"}>{i % 2 === 0 ? item : '✦'}</span>
              ))}
            </div>
          </div>
          <h2 className="font-(family-name:--font-outfit) font-bold text-3xl sm:text-4xl lg:text-5xl text-[#003f7d] mb-8 relative z-10 px-4">Access Capital. <span className="text-[#006d3f]">Expand Horizons.</span></h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 relative z-10 px-6">
            <Link href="/login" className="px-8 sm:px-12 py-4 sm:py-5 bg-[#1dff9b] text-[#00210f] font-black rounded-lg text-lg sm:text-xl hover:scale-105 transition-transform shadow-xl text-center">Apply as MSME</Link>
            <Link href="/login" className="px-8 sm:px-12 py-4 sm:py-5 text-white font-bold rounded-lg text-lg sm:text-xl hover:bg-[#0056a7] transition-all text-center" style={{ background: 'linear-gradient(135deg,#1e3a8a 0%,#3b82f6 25%,#2563eb 50%,#1d4ed8 75%,#1e40af 100%)' }}>Agent Login</Link>
          </div>
          <p className="mt-10 text-[#424751] font-(family-name:--font-jb-mono) text-[10px] sm:text-sm tracking-wide px-4">TRUSTED BY 14+ NBFCs AND TOP 5 PRIVATE BANKS</p>
          <div className="flex justify-center mt-12 relative h-[240px]">
            {/* Desktop Transition Slot (Ghost) */}
            <div id="cta-card-ghost" className="hidden lg:block" style={{ width: '380px', height: '240px', borderRadius: '20px', border: '1.5px dashed rgba(0,63,125,0.10)', background: 'rgba(0,63,125,0.02)', opacity: 0, transition: 'opacity .3s', pointerEvents: 'none' }} />
            
            {/* Mobile-Only 3D Card (Displayed only on mobile) */}
            <div className="lg:hidden absolute inset-0 flex justify-center items-center scale-90 sm:scale-100">
              <CreditCard3D 
                sceneId="cta-mobile-card-scene"
                wrapId="cta-mobile-card-wrap"
                cardId="cta-mobile-card"
                cardHolder="PREMIUM PARTNER"
              />
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="w-full py-16 border-t border-[#003f7d]/10 bg-[#fcf9f8]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <span className="text-xl font-bold text-[#003f7d] mb-4 block">Cred2Tech</span>
              <p className="font-(family-name:--font-inter) text-sm text-[#443b54] leading-relaxed">Pioneering the sovereign infrastructure for the next generation of financial inclusion.</p>
            </div>
            {[
              { title: 'Product', links: ['Solutions', 'Eligibility', 'Pricing'] },
              { title: 'Resources', links: ['API Documentation', 'Support', 'Developer Hub'] },
              { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Settings'] },
            ].map(col => (
              <div key={col.title} className="space-y-4">
                <h4 className="font-bold text-[#003f7d]">{col.title}</h4>
                <ul className="space-y-2 font-(family-name:--font-inter) text-sm text-[#443b54]/70">
                  {col.links.map(l => <li key={l}><a href="#" className="hover:text-[#003f7d] transition-colors hover:underline decoration-[#1dff9b] underline-offset-4">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#003f7d]/5">
            <p className="font-(family-name:--font-inter) text-sm text-[#443b54] text-center">© 2024 Cred2Tech Infrastructure. All rights reserved. Precise. Transparent. Sovereign.</p>
          </div>
        </footer>

      </div>

      {/* ── ALL SCRIPTS (exact port from index.html) ── */}

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
  const defs=[[1,2,1,0.00,0.0,1,0.055,0.90],[1,2,1,0.15,0.1,2,0.045,0.85],[1,2,1,0.30,0.2,3,0.035,0.80],[1,2,1,0.45,0.3,4,0.025,0.75],[1,2,1,0.60,0.4,5,0.018,0.70],[1,2,1,-0.15,-0.1,1,0.040,0.60],[1,2,1,-0.30,-0.2,2,0.030,0.55],[1,2,1,-0.45,-0.3,3,0.022,0.50],[1,2,1,0.52,0.35,6,0.008,0.95]];
  const ribbons=defs.map(([aX,aY,bX,phase,twist,ci,radius,opacity])=>{const mesh=new THREE.Mesh(new THREE.TubeGeometry(new RibbonCurve(aX,aY,bX,phase,twist),220,radius,8,true),new THREE.MeshPhongMaterial({color:COLORS[ci],emissive:COLORS[ci],emissiveIntensity:0.4,transparent:true,opacity,shininess:120,side:THREE.DoubleSide}));mesh.position.x=1.8;scene.add(mesh);return mesh;});
  scene.add(new THREE.AmbientLight(0xffffff,0.3));
  const pA=new THREE.PointLight(0x00aaff,2.5,20);pA.position.set(4,3,4);scene.add(pA);
  const pB=new THREE.PointLight(0x1dff9b,1.8,20);pB.position.set(-3,-2,3);scene.add(pB);
  const pC=new THREE.PointLight(0x1565d8,2.0,20);pC.position.set(0,0,6);scene.add(pC);
  let tRX=0,tRY=0,cRX=0,cRY=0;
  document.addEventListener('mousemove',e=>{tRY=(e.clientX/window.innerWidth-0.5)*0.5;tRX=-(e.clientY/window.innerHeight-0.5)*0.3;});
  let t=0;
  (function animate(){requestAnimationFrame(animate);t+=0.004;cRX+=(tRX-cRX)*0.05;cRY+=(tRY-cRY)*0.05;
  ribbons.forEach((m,i)=>{m.rotation.y=t*(0.12+i*0.008)+cRY;m.rotation.x=Math.sin(t*0.3+i*0.2)*0.15+cRX;m.rotation.z=Math.cos(t*0.2+i*0.15)*0.08;const s=1+Math.sin(t*0.8+i*0.4)*0.02;m.scale.set(s,s,s);m.material.emissiveIntensity=0.3+Math.sin(t*1.2+i*0.5)*0.15;});
  pA.position.x=Math.cos(t*0.4)*5;pA.position.z=Math.sin(t*0.4)*5;pB.position.x=Math.cos(t*0.3+Math.PI)*4;pB.position.z=Math.sin(t*0.3+Math.PI)*4;
  renderer.render(scene,camera);})();
  }
  window.addEventListener('libs-ready', () => {
    if(!window.__HOME_UNMOUNTED) initRibbon();
  });
})();
      `}</Script>

      <Script id="card-flight-script" strategy="afterInteractive">{`
(function(){
  function initCardFlight(){
  // If card flight was already initialized, just refresh and bail
  if(document.getElementById('fixed-card')){
    if(window.ScrollTrigger) window.ScrollTrigger.refresh();
    return;
  }
  const cardWrapper=document.getElementById('card-wrapper');
  const card=document.getElementById('credit-card');
  const ghost=document.getElementById('card-ghost');
  const ctaGhost=document.getElementById('cta-card-ghost');
  const hero=document.getElementById('hero-section');
  if(!cardWrapper||!ghost||!hero||!window.gsap||!window.ScrollTrigger)return;
  if(window.innerWidth<768)return;
  if(window.__HOME_UNMOUNTED)return;
  gsap.registerPlugin(ScrollTrigger);
  const fixedCard=document.createElement('div');
  fixedCard.id='fixed-card';
  fixedCard.style.cssText='position:fixed;top:0;left:0;width:380px;height:240px;pointer-events:auto;z-index:200;opacity:0;';
  cardWrapper.parentNode.removeChild(cardWrapper);
  fixedCard.appendChild(cardWrapper);
  document.body.appendChild(fixedCard);
  function setPos(x,y){fixedCard.style.left=x+'px';fixedCard.style.top=y+'px';}
  function setRot(rotX,rotY,sc){card.style.transform='rotateX('+rotX+'deg) rotateY('+rotY+'deg) scale('+sc+')';}
  
  let startDocX, startDocY; // Use Document coords to survive resize-during-scroll
  function measure(){
    const heroCol=document.querySelector('#hero-section .grid > div:last-child');
    if(!heroCol)return;
    const sy=window.scrollY;
    const sx=window.scrollX;
    const hcr=heroCol.getBoundingClientRect();
    startDocX=hcr.left+sx+(hcr.width-380)/2;
    startDocY=hcr.top+sy+(hcr.height-240)/2;
  }
  // Init
  setTimeout(()=>{
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      if(window.__HOME_UNMOUNTED) return;
      measure();
      if(startDocX!==undefined) setPos(startDocX-window.scrollX, startDocY-window.scrollY);
      buildScrollTrigger();
      ScrollTrigger.refresh();
      fixedCard.style.transition='opacity 0.3s ease';
      fixedCard.style.opacity='1';
    }));
  }, 300);
  
  window.addEventListener('resize',()=>{measure();ScrollTrigger.refresh();});
  let firstScroll=true;
  window.addEventListener('scroll',()=>{if(firstScroll){firstScroll=false;measure();}},{passive:true,once:true});
  
  let mRX=12,mRY=-18,tmRX=12,tmRY=-18,isHovered=false,isFlying=false,isLanded=false,isLanded2=false,flipped=false;
  
  fixedCard.addEventListener('mousemove',e=>{if(isFlying||flipped)return;const r=fixedCard.getBoundingClientRect();const dx=(e.clientX-r.left-190)/190;const dy=(e.clientY-r.top-120)/120;tmRX=-dy*22;tmRY=dx*28;const shimmer=cardWrapper.querySelector('#card-shimmer');if(shimmer){shimmer.style.background='radial-gradient(ellipse 80% 60% at '+((e.clientX-r.left)/380*100).toFixed(1)+'% '+((e.clientY-r.top)/240*100).toFixed(1)+'%,rgba(29,255,155,.14) 0%,rgba(0,170,255,.10) 35%,rgba(255,224,102,.07) 65%,transparent 100%)';shimmer.style.opacity='1';}});
  fixedCard.addEventListener('mouseleave',()=>{if(!flipped){tmRX=(isLanded||isLanded2)?0:12;tmRY=(isLanded||isLanded2)?0:-18;}const shimmer=cardWrapper.querySelector('#card-shimmer');if(shimmer)shimmer.style.opacity='0';isHovered=false;});
  fixedCard.addEventListener('mouseenter',()=>{isHovered=true;});
  
  (function tick(){requestAnimationFrame(tick);if(isFlying||flipped)return;mRX+=(tmRX-mRX)*0.08;mRY+=(tmRY-mRY)*0.08;if(isHovered){card.style.animation='none';card.style.transform='rotateX('+mRX+'deg) rotateY('+mRY+'deg) scale(1)';}})();
  
  const PC=['#1dff9b','#00aaff','#ffe066','#fff','#b3ceff'];
  const pContainer=document.createElement('div');pContainer.style.cssText='position:absolute;inset:-40px;pointer-events:none;overflow:visible;';fixedCard.appendChild(pContainer);
  for(let i=0;i<18;i++){const pt=document.createElement('div');const s=2+Math.random()*4;const c=PC[Math.floor(Math.random()*PC.length)];pt.style.cssText='position:absolute;width:'+s+'px;height:'+s+'px;border-radius:50%;background:'+c+';box-shadow:0 0 '+(s*2)+'px '+c+';left:'+(20+Math.random()*340)+'px;top:'+(40+Math.random()*160)+'px;--dx:'+(Math.random()-.5)*60+'px;animation:particle-rise '+(2.5+Math.random()*2)+'s ease-out '+(Math.random()*3)+'s infinite;pointer-events:none;';pContainer.appendChild(pt);}
  
  fixedCard.addEventListener('click',()=>{if(isFlying)return;flipped=!flipped;card.style.animation='none';card.style.transition='transform 0.75s cubic-bezier(.4,0,.2,1)';const baseX=isLanded?0:mRX;const baseY=isLanded?0:mRY;card.style.transform=flipped?'rotateX('+baseX+'deg) rotateY('+(baseY+180)+'deg) scale(1)':'rotateX('+baseX+'deg) rotateY('+baseY+'deg) scale(1)';setTimeout(()=>{card.style.transition='';if(!isHovered&&!flipped){card.style.animation=isLanded?'card-float-flat 5s ease-in-out infinite':'card-float 5s ease-in-out infinite';}},800);});
  
  function buildScrollTrigger(){
    const ctaSection=document.getElementById('cta-section');const solutions=document.getElementById('solutions');
    if(!ctaSection||!ctaGhost||!solutions)return;

    function snapToGhost(){if(isLanded){const r=ghost.getBoundingClientRect();setPos(r.left,r.top);}}
    function snapToCta(){if(isLanded2){const r=ctaGhost.getBoundingClientRect();setPos(r.left,r.top);}}
    
    function syncLanded(){
      if(isLanded2){snapToCta();const cr=ctaSection.getBoundingClientRect();fixedCard.style.opacity=(cr.bottom>0&&cr.top<window.innerHeight)?'1':'0';}
      else if(isLanded){snapToGhost();fixedCard.style.opacity='1';}
      else if(!isFlying){setPos(startDocX-window.scrollX, startDocY-window.scrollY);fixedCard.style.opacity='1';}
    }
    window.addEventListener('scroll',syncLanded,{passive:true});
    syncLanded();

    ScrollTrigger.create({trigger:hero,start:'top top',end:'50% top',scrub:true,
      onUpdate(self){
        const p=self.progress;
        const cx = startDocX - window.scrollX;
        const cy = startDocY - window.scrollY;
        
        if(p<=0.01){
          isFlying=false;isLanded=false;isLanded2=false;
          mRX=12;mRY=-18;tmRX=12;tmRY=-18;
          setPos(cx,cy);
          if(!flipped){card.style.animation='card-float 5s ease-in-out infinite';card.style.transform='';}
          ghost.style.opacity='0';fixedCard.style.opacity='1';fixedCard.style.pointerEvents='auto';
        }else if(p>=0.99){
          if(!isLanded){
            isFlying=false;isLanded=true;isLanded2=false;
            mRX=0;mRY=0;tmRX=0;tmRY=0;
            if(!flipped){card.style.animation='card-float-flat 5s ease-in-out infinite';card.style.transform='';}
            ghost.style.opacity='0';fixedCard.style.opacity='1';fixedCard.style.pointerEvents='auto';
          }
          snapToGhost();
        }else{
          if(!isFlying){isFlying=true;isLanded=false;isLanded2=false;flipped=false;card.style.animation='none';}
          ghost.style.opacity=String(Math.min(1,p*20));
          fixedCard.style.opacity='1';fixedCard.style.pointerEvents='none';
          const gr=ghost.getBoundingClientRect();
          const evy=gr.top;const evx=gr.left;
          const x=cx+(evx-cx)*p;
          const y=cy+(evy-cy)*p-window.innerHeight*0.2*Math.sin(p*Math.PI);
          setPos(x,y);setRot(12*(1-p),360*p,1-0.08*Math.sin(p*Math.PI));
        }
      },
      onLeaveBack(){
        isFlying=false;isLanded=false;isLanded2=false;flipped=false;
        mRX=12;mRY=-18;tmRX=12;tmRY=-18;
        setPos(startDocX - window.scrollX, startDocY - window.scrollY);
        card.style.animation='card-float 5s ease-in-out infinite';card.style.transform='';
        ghost.style.opacity='0';fixedCard.style.opacity='1';fixedCard.style.pointerEvents='auto';
      }
    });

    ScrollTrigger.create({trigger:solutions,start:'30% top',end:'bottom top',scrub:true,
      onUpdate(self){
        const p=self.progress;
        if(p<=0.01){
          if(isLanded2){
            isFlying=false;isLanded=true;isLanded2=false;
            mRX=0;mRY=0;tmRX=0;tmRY=0;
            if(!flipped){card.style.animation='card-float-flat 5s ease-in-out infinite';card.style.transform='';}
            if(ctaGhost)ctaGhost.style.opacity='0';fixedCard.style.opacity='1';fixedCard.style.pointerEvents='auto';
          }
        }else if(p>=0.99){
          if(!isLanded2){
            isFlying=false;isLanded=false;isLanded2=true;
            mRX=0;mRY=0;tmRX=0;tmRY=0;
            if(!flipped){card.style.animation='card-float-flat 5s ease-in-out infinite';card.style.transform='';}
            if(ctaGhost)ctaGhost.style.opacity='0';fixedCard.style.opacity='1';fixedCard.style.pointerEvents='auto';
          }
          snapToCta();
        }else{
          if(!isFlying){isFlying=true;isLanded=false;isLanded2=false;flipped=false;card.style.animation='none';}
          if(ctaGhost)ctaGhost.style.opacity=String(Math.min(1,p*20));
          fixedCard.style.opacity='1';fixedCard.style.pointerEvents='none';
          const gr=ghost.getBoundingClientRect();
          const cr=ctaGhost.getBoundingClientRect();
          const x=gr.left+(cr.left-gr.left)*p;
          const y=gr.top+(cr.top-gr.top)*p-window.innerHeight*0.2*Math.sin(p*Math.PI);
          setPos(x,y);setRot(0,360*p,1-0.08*Math.sin(p*Math.PI));
        }
      },
      onLeaveBack(){
        isFlying=false;isLanded=true;isLanded2=false;flipped=false;
        mRX=0;mRY=0;tmRX=0;tmRY=0;
        snapToGhost();
        card.style.animation='card-float-flat 5s ease-in-out infinite';card.style.transform='';
        if(ctaGhost)ctaGhost.style.opacity='0';fixedCard.style.opacity='1';fixedCard.style.pointerEvents='auto';
      }
    });
  }
  } // end initCardFlight
  window.addEventListener('libs-ready', initCardFlight);
})();
      `}</Script>

      <Script id="gsap-parallax-script" strategy="afterInteractive">{`
(function(){
  function initParallax(){
  if(!window.gsap||!window.ScrollTrigger)return;
  const isDesktop = window.innerWidth >= 1024;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  const isMobile = window.innerWidth < 768;

  // Simple reveal animations for desktop/tablet
  if(!isMobile){
    gsap.utils.toArray('#solutions .grid > div').forEach((card,i)=>{gsap.fromTo(card,{y:60,opacity:0,scale:0.97},{y:0,opacity:1,scale:1,duration:0.65,ease:'power3.out',delay:i*0.07,scrollTrigger:{trigger:card,start:'top 88%',toggleActions:'play none none none'}});});
    gsap.fromTo('#solutions h2',{y:36,opacity:0},{y:0,opacity:1,duration:0.7,ease:'power3.out',scrollTrigger:{trigger:'#solutions h2',start:'top 88%',toggleActions:'play none none none'}});
    gsap.utils.toArray('#platform .flex.gap-6').forEach((row,i)=>{gsap.fromTo(row,{x:50,opacity:0},{x:0,opacity:1,duration:0.6,ease:'power3.out',delay:i*0.1,scrollTrigger:{trigger:row,start:'top 86%',toggleActions:'play none none none'}});});
  }

  // Dashboard live feed (Keep active on all devices for interactivity)
  (function(){
    const feed=document.getElementById('dash-feed');const counter=document.getElementById('dash-count');if(!feed)return;
    const leads=[{name:'Sharma Enterprises',id:'99420',status:'PRE-QUALIFIED',color:'bg-[#00e388] text-[#00210f]',avatar:'11'},{name:'Patel Trading Co.',id:'99421',status:'VERIFIED',color:'bg-[#d6e3ff] text-[#003f7d]',avatar:'32'},{name:'Mehta Textiles Ltd.',id:'99422',status:'PRE-QUALIFIED',color:'bg-[#00e388] text-[#00210f]',avatar:'47'},{name:'Gupta Agro Pvt.',id:'99423',status:'BUREAU CLEAR',color:'bg-[#eaddfd] text-[#443b54]',avatar:'15'},{name:'Reddy Pharma Works',id:'99424',status:'PRE-QUALIFIED',color:'bg-[#00e388] text-[#00210f]',avatar:'60'},{name:'Singh Auto Parts',id:'99425',status:'ITR VERIFIED',color:'bg-[#d6e3ff] text-[#003f7d]',avatar:'25'},{name:'Joshi Exports Pvt.',id:'99426',status:'PRE-QUALIFIED',color:'bg-[#00e388] text-[#00210f]',avatar:'53'},{name:'Kumar Steel Works',id:'99427',status:'GST VERIFIED',color:'bg-[#eaddfd] text-[#443b54]',avatar:'38'}];
    leads.forEach(l=>{const row=document.createElement('div');row.className='dash-row flex items-center justify-between p-3 bg-[#f6f3f2] rounded-lg';row.style.transform='translateY(12px)';row.style.opacity='0';row.innerHTML='<div class="flex items-center gap-3"><img src="https://i.pravatar.cc/32?img='+l.avatar+'" class="w-8 h-8 rounded-full object-cover border border-[#c2c6d3]/20" alt="'+l.name+'"/><div><p class="font-bold text-xs leading-tight">'+l.name+'</p><p class="text-[10px] text-[#424751] font-[Space_Grotesk]">Lead ID: '+l.id+'</p></div></div><div class="flex items-center gap-2"><div class="dash-shimmer h-5 w-20 rounded-full bg-[#e5e2e1] animate-pulse"></div><span class="dash-badge hidden px-2.5 py-1 '+l.color+' text-[9px] font-bold rounded-full whitespace-nowrap">'+l.status+'</span></div>';feed.appendChild(row);});
    const rows=feed.querySelectorAll('.dash-row');let revealed=0,animating=false,currentCount=0;
    function revealUpTo(n){rows.forEach((row,i)=>{if(i<n&&row.style.opacity==='0'){setTimeout(()=>{row.style.transition='opacity 0.3s ease,transform 0.3s ease';row.style.opacity='1';row.style.transform='translateY(0)';setTimeout(()=>{row.querySelector('.dash-shimmer').style.display='none';row.querySelector('.dash-badge').classList.remove('hidden');},300);},i*100);revealed=Math.max(revealed,i+1);}else if(i>=n){row.style.transition='none';row.style.opacity='0';row.style.transform='translateY(12px)';row.querySelector('.dash-shimmer').style.display='';row.querySelector('.dash-badge').classList.add('hidden');if(i<revealed)revealed=i;}});if(counter)counter.textContent=Math.max(0,n)+' processed';}
    function startSequence(){if(animating)return;animating=true;currentCount=0;revealUpTo(0);const interval=setInterval(()=>{currentCount++;revealUpTo(currentCount);if(counter)counter.textContent=currentCount+' processed';if(currentCount>=leads.length){clearInterval(interval);animating=false;}},350);}
    ScrollTrigger.create({trigger:'#platform',start:'top 60%',onEnter(){startSequence();},onLeaveBack(){animating=false;currentCount=0;revealUpTo(0);}});
  })();

  // Pipeline
  (function(){
    const section=document.getElementById('pipeline-section');if(!section)return;
    const steps=document.querySelectorAll('.pl-step');const label=document.getElementById('pl-label');const heading=document.getElementById('pl-heading');const metrics=document.getElementById('pl-metrics');const line=document.getElementById('pl-line');const row=document.getElementById('pipeline-row');
    const TOTAL=steps.length;
    let confettiTriggered=false;
    const stepConfig=[{badge:'UPLOADED',iBg:'rgba(0,86,167,0.15)',iS:'#a8c8ff'},{badge:'VERIFIED',iBg:'rgba(0,86,167,0.15)',iS:'#a8c8ff'},{badge:'PROCESSED',iBg:'rgba(0,86,167,0.15)',iS:'#a8c8ff'},{badge:'PRE-QUALIFIED',iBg:'rgba(29,255,155,0.1)',iS:'#1dff9b'},{badge:'APPROVED ✓',iBg:'rgba(29,255,155,0.15)',iS:'#1dff9b',glow:true}];

    function activateStep(i){
      const s=steps[i]; const cfg=stepConfig[i]; const icon=s.querySelector('.pl-icon'); const badge=s.querySelector('.pl-badge');
      icon.style.background=cfg.iBg; icon.style.borderColor='rgba(29,255,155,0.4)';
      icon.querySelectorAll('path,circle,rect').forEach(p=>p.setAttribute('stroke',cfg.iS));
      badge.textContent=cfg.badge; badge.style.opacity='1';
      s.querySelector('.pl-title').style.color='#fff';
      if(cfg.glow){icon.style.boxShadow='0 0 20px rgba(29,255,155,0.4)';icon.style.transform='scale(1.1)';}
      if(i===4 && !confettiTriggered){ confettiTriggered=true; setTimeout(triggerConfetti,300); }
    }
    function deactivateStep(i){
      const s=steps[i]; const icon=s.querySelector('.pl-icon'); const badge=s.querySelector('.pl-badge');
      icon.style.background='rgba(255,255,255,0.04)'; icon.style.borderColor='rgba(255,255,255,0.1)';
      icon.querySelectorAll('path,circle,rect').forEach(p=>p.setAttribute('stroke','rgba(255,255,255,0.3)'));
      badge.textContent='PENDING'; badge.style.opacity='0.4';
      s.querySelector('.pl-title').style.color='rgba(255,255,255,0.4)';
      icon.style.boxShadow='none'; icon.style.transform='scale(1)';
    }

    if(isDesktop){
      // Desktop Horizontal Scrub
      ScrollTrigger.create({
        trigger: section, start: 'top top', end: 'bottom bottom', scrub: 0.1,
        onUpdate(self){
          const p = self.progress;
          const animP = Math.min(1, Math.max(0, (p-0.05)/0.8));
          steps.forEach((_,i)=>{if(animP>(i/TOTAL)) activateStep(i); else {deactivateStep(i); if(i===4)confettiTriggered=false;}});
          if(line) line.style.width=(animP*100)+'%';
          if(row) row.style.transform='translateX(-'+(animP*60)+'%)';
          if(p>0.88 && !metrics._counted){ metrics._counted=true; metrics.style.opacity='1'; animateCount(document.getElementById('pl-m1'),14280,'',1200); animateCount(document.getElementById('pl-m2'),94,'%',1000); animateCount(document.getElementById('pl-m3'),87,'ms',900); }
        }
      });
    } else {
      // Mobile/Tablet Vertical Activation
      steps.forEach((step, i) => {
        ScrollTrigger.create({
          trigger: step, start: 'top 75%', end: 'top 25%', toggleActions: 'play reverse play reverse',
          onEnter: () => activateStep(i), onLeaveBack: () => { deactivateStep(i); if(i===4) confettiTriggered=false; }
        });
      });
      ScrollTrigger.create({
        trigger: metrics, start: 'top 90%', onEnter: () => {
          if(!metrics._counted){ metrics._counted=true; metrics.style.opacity='1'; animateCount(document.getElementById('pl-m1'),14280,'',1200); animateCount(document.getElementById('pl-m2'),94,'%',1000); animateCount(document.getElementById('pl-m3'),87,'ms',900); }
        }
      });
    }

    function animateCount(el,target,suffix,duration){if(!el)return;const start=performance.now();function tick(now){if(!el||!el.isConnected)return;const t=Math.min((now-start)/duration,1);const ease=1-Math.pow(1-t,3);el.textContent=Math.round(ease*target)+suffix;if(t<1)requestAnimationFrame(tick);}requestAnimationFrame(tick);}
    function triggerConfetti(){ if(typeof window.confetti !== 'function') return; const duration = 3000; const end = Date.now() + duration; const colors = ['#1dff9b', '#a8c8ff', '#ffe066', '#0056a7']; (function frame() { window.confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0, y: 0.8 }, colors, zIndex: 9999 }); window.confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1, y: 0.8 }, colors, zIndex: 9999 }); if (Date.now() < end) requestAnimationFrame(frame); })(); }
  })();

  // Other parallax elements (Capped for performance on mobile)
  if(isDesktop){
    const dash=document.getElementById('platform-dashboard');
    if(dash){gsap.fromTo(dash,{y:40,opacity:0},{y:0,opacity:1,duration:0.8,ease:'power3.out',scrollTrigger:{trigger:dash,start:'top 85%',toggleActions:'play none none none'}});gsap.to(dash,{y:-30,ease:'none',scrollTrigger:{trigger:'#platform',start:'top bottom',end:'bottom top',scrub:1.5}});}
    gsap.fromTo('#platform h2',{y:36,opacity:0},{y:0,opacity:1,duration:0.7,ease:'power3.out',scrollTrigger:{trigger:'#platform h2',start:'top 88%',toggleActions:'play none none none'}});
    gsap.utils.toArray('#pricing .grid > div').forEach((card,i)=>{const isCenter=card.classList.contains('scale-105');gsap.fromTo(card,{y:50,opacity:0,scale:isCenter?1.05:0.96},{y:0,opacity:1,scale:isCenter?1.05:1,duration:0.65,ease:'power3.out',delay:i*0.12,scrollTrigger:{trigger:card,start:'top 88%',toggleActions:'play none none none'}});});
    gsap.fromTo('#pricing h2',{y:30,opacity:0},{y:0,opacity:1,duration:0.7,ease:'power3.out',scrollTrigger:{trigger:'#pricing h2',start:'top 88%',toggleActions:'play none none none'}});
    gsap.fromTo('#cta-section h2',{y:40,opacity:0,scale:0.96},{y:0,opacity:1,scale:1,duration:0.8,ease:'power3.out',scrollTrigger:{trigger:'#cta-section h2',start:'top 82%',toggleActions:'play none none none'}});
    [['#orb-s1',-80,-20],['#orb-s2',60,15],['#orb-p1',-90,-25],['#orb-p2',70,20],['#orb-pr1',-100,-30],['#orb-pr2',80,18],['#orb-c1',-70,-15],['#orb-c2',60,12]].forEach(([id,yTo,xTo])=>{const el=document.querySelector(id);if(!el)return;const section=el.closest('section')||el.parentElement;gsap.to(el,{opacity:0.14,duration:1,ease:'power2.out',scrollTrigger:{trigger:section,start:'top 90%',toggleActions:'play none none reverse'}});gsap.fromTo(el,{y:0,x:0},{y:yTo,x:xTo,ease:'none',scrollTrigger:{trigger:section,start:'top bottom',end:'bottom top',scrub:2}});});
    [['#shape-s1',-50,12],['#shape-s2',40,-8],['#shape-s3',-35,6],['#shape-p1',-60,16],['#shape-p2',45,-12]].forEach(([id,yTo,rot])=>{const el=document.querySelector(id);if(!el)return;const section=el.closest('section')||el.parentElement;gsap.fromTo(el,{y:0,rotation:0,opacity:0},{y:yTo,rotation:rot,opacity:1,ease:'none',scrollTrigger:{trigger:section,start:'top bottom',end:'bottom top',scrub:2}});});
    // Hero orbs fade in on load
    ['#orb-h1','#orb-h2','#orb-h3'].forEach((id,i)=>{const el=document.querySelector(id);if(el)gsap.to(el,{opacity:i===0?0.7:i===1?0.2:0.12,duration:1.5,delay:i*0.2,ease:'power2.out'});});
  }

  // Common Parallax (Active on Desktop/Tablet, light on mobile)
  const marquee=document.getElementById('marquee-inner');if(marquee&&!marquee._cloned){marquee._cloned=true;const clone=marquee.cloneNode(true);marquee.parentElement.appendChild(clone);gsap.to([marquee,clone],{xPercent:-50,ease:'none',duration:22,repeat:-1});}
  gsap.fromTo('footer',{y:24,opacity:0},{y:0,opacity:1,duration:0.7,ease:'power2.out',scrollTrigger:{trigger:'footer',start:'top 95%',toggleActions:'play none none none'}});
  
  if(isDesktop || isTablet){
    gsap.to('#hero-section h1',{y:-60,ease:'none',scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true}});
    gsap.to('#hero-section p',{y:-40,ease:'none',scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true}});
    gsap.to('#hero-section .flex.flex-wrap',{y:-24,ease:'none',scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true}});
    const heroGrid=document.getElementById('hero-grid');if(heroGrid){gsap.to(heroGrid,{y:50,ease:'none',scrollTrigger:{trigger:'#hero-section',start:'top top',end:'bottom top',scrub:true}});}
    // GSAP fade in orbs for sections
    gsap.utils.toArray('.px-orb').forEach(orb=>{gsap.to(orb,{opacity:0.14,duration:1.5,ease:'power2.out',scrollTrigger:{trigger:orb.closest('section')||orb.parentElement,start:'top 90%',toggleActions:'play none none reverse'}});});
  }
  } // end initParallax
  window.addEventListener('libs-ready', initParallax);
})();
      `}</Script>

      <style>{`
        .px-orb{position:absolute;border-radius:50%;pointer-events:none;will-change:transform;filter:blur(70px);opacity:0;}
        .px-grid{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(0,63,125,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,63,125,0.04) 1px,transparent 1px);background-size:60px 60px;will-change:transform;}
        .px-layer{will-change:transform;}
        .marquee-wrap{overflow:hidden;}
        .marquee-track{display:flex;gap:3rem;white-space:nowrap;will-change:transform;}
        .marquee-wrap:hover .marquee-track{animation-play-state:paused;}
        @keyframes card-float{0%,100%{transform:rotateX(12deg) rotateY(-18deg) translateY(0px);}50%{transform:rotateX(8deg) rotateY(-14deg) translateY(-14px);}}
        @keyframes card-float-flat{0%,100%{transform:rotateX(0deg) rotateY(0deg) translateY(0px);}50%{transform:rotateX(0deg) rotateY(0deg) translateY(-10px);}}
        @keyframes card-float-glow{0%,100%{opacity:0.6;transform:translateX(-50%) scaleX(1);}50%{opacity:0.3;transform:translateX(-50%) scaleX(0.75);}}
        @keyframes particle-rise{0%{transform:translateY(0) translateX(0) scale(1);opacity:0.8;}100%{transform:translateY(-80px) translateX(var(--dx,10px)) scale(0);opacity:0;}}
        @keyframes streak-auto{0%{left:-60%;opacity:0;}10%{opacity:1;}90%{opacity:1;}100%{left:160%;opacity:0;}}
        @keyframes holo-shift{0%,100%{background-position:0% 50%;}50%{background-position:100% 50%;}}
        @keyframes marquee-scroll{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
        @keyframes confetti-fall{0%{opacity:1;transform:translateY(-100vh) rotate(0deg) scale(1);}100%{opacity:0;transform:translateY(100vh) rotate(720deg) scale(0.5);}}
        #credit-card{animation:card-float 5s ease-in-out infinite;will-change:transform;}
        #credit-card:hover{animation-play-state:paused;}
        #card-glow{animation:card-float-glow 5s ease-in-out infinite;will-change:transform;}
        #card-streak{animation:streak-auto 4s ease-in-out infinite 1s;}
        #card-front:hover #card-shimmer{opacity:1!important;}
        .material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;}
        @media(max-width:1023px){
          #card-scene, #card-landing-slot, #fixed-card { display:none!important; }
          #pipeline-section { height: auto!important; min-height: 0!important; padding-bottom: 80px!important; }
          #pipeline-sticky { position: relative!important; height: auto!important; padding: 60px 16px!important; }
          .pl-step-row { 
            flex-direction: column!important; 
            gap: 40px!important; 
            align-items: flex-start!important; 
            padding-left: 24px!important;
            padding-right: 24px!important;
            border-left: 2px dashed rgba(29, 255, 155, 0.2);
            margin-left: 20px;
          }
          .pl-step { 
            flex-direction: row!important; 
            align-items: flex-start!important; 
            gap: 20px!important; 
            width: 100%!important; 
            text-align: left!important;
            position: relative;
          }
          /* Custom bullet for mobile pipeline */
          .pl-step::before {
            content: "";
            position: absolute;
            left: -33px;
            top: 24px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #1dff9b;
            box-shadow: 0 0 15px #1dff9b;
            z-index: 2;
          }
          .pl-icon { 
            width: 52px!important; 
            height: 52px!important; 
            flex-shrink: 0!important; 
            background: rgba(29, 255, 155, 0.1)!important;
            border: 1px solid rgba(29, 255, 155, 0.2)!important;
          }
          .pl-badge { position: relative!important; top: 0!important; right: 0!important; margin-left: auto!important; margin-top: 4px!important; font-size: 9px!important; padding: 2px 6px!important; }
          #pl-line { display: none!important; }
          #pl-metrics { 
            flex-direction: column!important; 
            gap: 32px!important; 
            align-items: stretch!important; 
            height: auto!important; 
            padding: 32px 24px!important;
            margin-top: 40px!important;
          }
          #pl-metrics > div:nth-child(even) { display: none!important; } /* Hide the dividers */
          #pl-metrics > div { width: 100%!important; }
          
          .px-orb { max-width: 100%; opacity: 0.1!important; pointer-events: none; }
          
          /* Typography adjustments */
          h2 { font-size: 1.875rem !important; line-height: 1.25 !important; }
          .pl-step h4 { font-size: 1.25rem !important; }
        }
      `}</style>
    </>
  );
}
