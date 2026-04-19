"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

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
    description: 'MSMEs and DSAs are given the tools to compete with anyone regardless of the size of their balance sheet or their relationship network.',
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
  useEffect(() => {
    (window as any).__ABOUT_UNMOUNTED = false;
    const bar = document.createElement('div');
    bar.id = 'scroll-bar';
    bar.style.cssText = 'position:fixed;top:0;left:0;height:2px;width:0%;background:linear-gradient(90deg,#1dff9b,#0056a7);z-index:9999;pointer-events:none;transition:width 0.1s;';
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
            <span className="inline-block font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.18em] uppercase text-[#1dff9b] mb-4 px-3 py-1 border border-[#1dff9b]/30 bg-[#1dff9b]/10">
              About Us
            </span>
            <h1 className="font-(family-name:--font-outfit) font-extrabold text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] tracking-tight text-white mb-6">
              Credit, Simplified
            </h1>
            <p className="text-base lg:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Building the intelligence layer that makes the entire lending ecosystem work better.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#003f7d 1px,transparent 1px),linear-gradient(90deg,#003f7d 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#003f7d]/20 to-transparent" />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.22em] uppercase text-[#006d3f]">
                Mission
              </span>
              <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[#003f7d]">
                Why Cred2Tech Exists
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg sm:text-xl text-[#424751] leading-relaxed mb-6">
                Cred2Tech exists to make credit work for the businesses that need it, and for the agents who power that access.
              </p>
              <p className="text-base text-[#424751] leading-relaxed mb-6">
                India has 63 million MSMEs. They employ over 110 million people and account for nearly a third of the country's GDP. Yet access to formal credit remains one of the biggest barriers to their growth.
              </p>
              <p className="text-base text-[#424751] leading-relaxed mb-6">
                At the same time, thousands of DSA agents who source these loans have been operating without a proper platform managing pipelines on WhatsApp, tracking commissions on spreadsheets, and losing time that should be spent closing deals.
              </p>
              <p className="text-base text-[#424751] leading-relaxed mb-8">
                Cred2Tech was built to change both of those realities simultaneously not by being another lender, but by building the intelligence layer that makes the entire lending ecosystem work better. For the MSME that deserves a fair shot. For the DSA agent that deserves a professional platform. For the lender that deserves better quality cases.
              </p>

              <div className="bg-[#003f7d] p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1dff9b]/10" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#1dff9b]/5" />
                <p className="relative z-10 text-white text-lg sm:text-xl font-semibold text-center">
                  "Credit, Simplified." is not just a tagline. It is a daily mandate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section id="values" className="py-10 sm:py-12 lg:py-16 bg-[#f0f7ff] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#003f7d 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#003f7d]/10 to-transparent" />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.22em] uppercase text-[#006d3f]">
              What Cred2Tech Stands For
            </span>
            <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[#003f7d]">
              Brand Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {brandValues.map((value, idx) => (
              <div
                key={value.title}
                className="value-card group bg-[#fcf9f8] border border-[#e8e4e1] p-6 transition-all duration-300 hover:border-[#003f7d]/30 hover:shadow-[0_20px_60px_rgba(0,63,125,0.08)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#003f7d]/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#003f7d]/10">
                    <span className="material-symbols-outlined text-2xl text-[#003f7d]">{value.icon}</span>
                  </div>
                  <h3 className="font-(family-name:--font-outfit) text-xl font-semibold text-[#003f7d]">{value.title}</h3>
                </div>
                <p className="text-sm text-[#424751] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#003f7d 1px,transparent 1px),linear-gradient(90deg,#003f7d 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#003f7d]/20 to-transparent" />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.22em] uppercase text-[#006d3f]">
                Why This Was Built
              </span>
              <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[#003f7d]">
                Our Story
              </h2>
            </div>

            <div className="bg-[#fcf9f8] border border-[#e8e4e1] p-6 sm:p-8 lg:p-10">
              <p className="text-base text-[#424751] leading-relaxed mb-6">
                Cred2Tech was born out of a simple frustration: after a combined four decades in financial services, the founders had seen from the inside how broken the MSME lending journey was.
              </p>
              <p className="text-base text-[#424751] leading-relaxed mb-6">
                Lenders had risk models. Banks had processes. But the MSME owner sitting in their factory or their shop had no way to know which lender was right for them, what documentation they needed, or why their last application was rejected.
              </p>
              <p className="text-base text-[#424751] leading-relaxed">
                And the DSA agent facilitating that loan was managing everything on WhatsApp and a spreadsheet, with no visibility into commissions, no structured pipeline, and no platform to call their own.
              </p>
              <div className="mt-8 pt-6 border-t border-[#e8e4e1]">
                <p className="text-lg font-semibold text-[#003f7d]">
                  Cred2Tech was built to change both of those realities simultaneously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience Stats Strip ── */}
      <section className="py-8 sm:py-10 bg-[#003f7d] overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#1dff9b 1px,transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10 text-center">
            {[
              { value: '40+', label: 'Years Combined Experience' },
              { value: '₹2000Cr+', label: 'Portfolio Managed' },
              { value: '6+', label: 'Leading Institutions' },
              { value: '2', label: 'Co-Founders, 1 Mission' },
            ].map((stat) => (
              <div key={stat.label} className="lg:px-8">
                <div className="font-(family-name:--font-outfit) text-2xl sm:text-3xl font-black text-white leading-none mb-1">{stat.value}</div>
                <div className="font-(family-name:--font-jb-mono) text-sm sm:text-base font-bold tracking-[0.16em] uppercase text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-10 sm:py-12 lg:py-16 bg-[#f0f7ff] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#003f7d 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#003f7d]/10 to-transparent" />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.22em] uppercase text-[#006d3f]">
              Leadership
            </span>
            <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[#003f7d]">
              Meet the Founders
            </h2>
          </div>

          <div className="space-y-8 lg:space-y-12">

            {/* ── Bobby Thomas M — Image LEFT, Info RIGHT ── */}
            <div className="founder-card group relative overflow-hidden border border-[#e8e4e1] bg-white hover:border-[#003f7d]/20 hover:shadow-[0_24px_80px_rgba(0,63,125,0.1)] transition-all duration-500">
              {/* Accent bar top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003f7d] via-[#1dff9b] to-[#0056a7]" />
              <div className="flex flex-col lg:flex-row min-h-[420px]">

                {/* LEFT — Portrait Image */}
                <div className="relative lg:w-[38%] flex-shrink-0 min-h-[360px] sm:min-h-[400px] lg:min-h-0 bg-gradient-to-br from-[#003f7d] to-[#001233] overflow-hidden">
                  <img
                    src="/images/Bobby.jpg"
                    alt="Bobby Thomas M"
                    className="absolute inset-0 w-full h-full object-cover object-top lg:object-center opacity-90 group-hover:scale-[1.03] transition-transform duration-700"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
              
                  {/* Gradient overlay on right edge for blend */}
                  <div className="hidden lg:block absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
                  {/* Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-widest uppercase bg-[#1dff9b] text-[#001233] px-2.5 py-1">CO-FOUNDER</span>
                  </div>
                  
                </div>

                {/* RIGHT — Info */}
                <div className="flex-1 p-7 sm:p-10 lg:p-12 flex flex-col justify-center relative">
                  {/* Subtle dot texture */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#003f7d 1px,transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="relative z-10">
                    <p className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.2em] uppercase text-[#003f7d] mb-2">Founder Profile</p>
                    <h3 className="font-(family-name:--font-outfit) text-2xl sm:text-3xl font-bold text-[#003f7d] mb-1">Bobby Thomas M</h3>
                    <p className="font-(family-name:--font-jb-mono) text-xs font-semibold text-[#006d3f] tracking-wider uppercase mb-6">MBA · 20+ Years · IIFL · HDFC Bank · ICICI Bank</p>

                    <p className="text-sm sm:text-base text-[#424751] leading-relaxed mb-4">
                      Bobby brings over 20 years of financial services experience across housing finance, MSME lending, construction finance, and digital distribution. He has held senior leadership roles at IIFL Home Loans where he built and managed a <span className="font-semibold text-[#003f7d]">₹2,000+ crore construction finance portfolio</span>, as well as Reliance Capital, GE Money, HDFC Bank, and ICICI Bank.
                    </p>
                    <p className="text-sm sm:text-base text-[#424751] leading-relaxed mb-6">
                      Bobby holds an MBA from the University of Madras. He is certified in Business Sustainability, Green and Social Bonds, and ESG-aligned finance. His passion for access, affordability, and privacy-forward design shapes every product decision at Cred2Tech.
                    </p>

                    {/* Stats row */}
                    <div className="flex gap-6 mb-6">
                      {[{ v: '20+', l: 'Years' }, { v: '₹2,000Cr', l: 'Portfolio' }, { v: '5+', l: 'Institutions' }].map(s => (
                        <div key={s.l}>
                          <div className="font-(family-name:--font-outfit) text-xl font-black text-[#003f7d]">{s.v}</div>
                          <div className="font-(family-name:--font-jb-mono) text-sm font-bold uppercase tracking-widest text-[#424751]/50">{s.l}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {['Housing Finance', 'MSME Lending', 'ESG Finance', 'Digital Distribution'].map(tag => (
                        <span key={tag} className="text-base font-semibold px-2.5 py-1 bg-[#003f7d]/5 text-[#003f7d] border border-[#003f7d]/15 hover:bg-[#003f7d]/10 transition-colors">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Sunil Agarwal — Info LEFT, Image RIGHT ── */}
            <div className="founder-card group relative overflow-hidden border border-[#e8e4e1] bg-white hover:border-[#003f7d]/20 hover:shadow-[0_24px_80px_rgba(0,63,125,0.1)] transition-all duration-500">
              {/* Accent bar top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1dff9b] via-[#0056a7] to-[#003f7d]" />
              <div className="flex flex-col lg:flex-row-reverse min-h-[420px]">

                {/* RIGHT — Portrait Image (rendered first on mobile via flex-col, visually right on desktop via row-reverse) */}
                <div className="relative lg:w-[38%] flex-shrink-0 min-h-[360px] sm:min-h-[400px] lg:min-h-0 bg-gradient-to-bl from-[#001233] to-[#003f7d] overflow-hidden">
                  <img
                    src="/images/Sunil.jpg"
                    alt="Sunil Agarwal"
                    className="absolute inset-0 w-full h-full object-cover object-top lg:object-center opacity-90 group-hover:scale-[1.03] transition-transform duration-700"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  
                  {/* Gradient overlay on left edge for blend */}
                  <div className="hidden lg:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
                  {/* Badge */}
                  <div className="absolute top-5 right-5">
                    <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-widest uppercase bg-[#1dff9b] text-[#001233] px-2.5 py-1">CO-FOUNDER</span>
                  </div>
                  
                </div>

                {/* LEFT — Info */}
                <div className="flex-1 p-7 sm:p-10 lg:p-12 flex flex-col justify-center relative">
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#003f7d 1px,transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="relative z-10">
                    <p className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.2em] uppercase text-[#003f7d] mb-2">Founder Profile</p>
                    <h3 className="font-(family-name:--font-outfit) text-2xl sm:text-3xl font-bold text-[#003f7d] mb-1">Sunil Agarwal</h3>
                    <p className="font-(family-name:--font-jb-mono) text-xs font-semibold text-[#006d3f] tracking-wider uppercase mb-6">CA · Certified Independent Director · ICICI · IIFL · Udaan</p>

                    <p className="text-sm sm:text-base text-[#424751] leading-relaxed mb-4">
                      A Chartered Accountant and Certified Independent Director with <span className="font-semibold text-[#003f7d]">over two decades of BFSI experience</span>, Sunil has led and scaled lending businesses across ICICI Bank, Reliance, IIFL, and Udaan. His expertise spans credit, risk, and end-to-end lending transformation across MSME, retail, and supply chain finance.
                    </p>
                    <p className="text-sm sm:text-base text-[#424751] leading-relaxed mb-6">
                      He also founded Elevate Consulting and has held board roles in financial services, bringing a strong blend of operating and governance experience to Cred2Tech's foundation.
                    </p>

                    {/* Stats row */}
                    <div className="flex gap-6 mb-6">
                      {[{ v: '20+', l: 'Years' }, { v: 'CA', l: 'Qualified' }, { v: 'Board', l: 'Experience' }].map(s => (
                        <div key={s.l}>
                          <div className="font-(family-name:--font-outfit) text-xl font-black text-[#003f7d]">{s.v}</div>
                          <div className="font-(family-name:--font-jb-mono) text-sm font-bold uppercase tracking-widest text-[#424751]/50">{s.l}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {['Credit & Risk', 'Supply Chain Finance', 'BFSI Leadership', 'Governance'].map(tag => (
                        <span key={tag} className="text-base font-semibold px-2.5 py-1 bg-[#003f7d]/5 text-[#003f7d] border border-[#003f7d]/15 hover:bg-[#003f7d]/10 transition-colors">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Legal Entity Section */}
      <section id="company" className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#003f7d 1px,transparent 1px),linear-gradient(90deg,#003f7d 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#003f7d]/20 to-transparent" />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.22em] uppercase text-[#006d3f]">
                Legal Entity
              </span>
              <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[#003f7d]">
                The Company
              </h2>
            </div>

            <div className="bg-[#003f7d] p-6 sm:p-8 text-white">
              <p className="text-base leading-relaxed mb-4">
                Cred2Tech is a product of <span className="font-semibold">Sunby Credtech Private Limited</span>, incorporated in Bengaluru, India. The platform is being built for India's MSME lending market, with a global vision.
              </p>
              <p className="text-base leading-relaxed">
                Cred2Tech is currently in its launch phase, onboarding early DSA partners and MSME customers. Lenders, DSA networks, and industry partners interested in working with Cred2Tech are welcome to reach out via the contact page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-10 sm:py-12 lg:py-16 bg-[#f0f7ff] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#003f7d 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#003f7d]/10 to-transparent" />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.22em] uppercase text-[#006d3f]">
              Startup India Innovation Statement
            </span>
            <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[#003f7d]">
              Technology & Innovation
            </h2>
          </div>

          <div className="space-y-6">
            {/* The Problem */}
            <div className="tech-card bg-[#fcf9f8] border border-[#e8e4e1] p-6 sm:p-8">
              <h3 className="font-(family-name:--font-outfit) text-lg font-bold text-[#003f7d] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006d3f]">error</span>
                The Problem
              </h3>
              <p className="text-sm text-[#424751] leading-relaxed">
                MSME credit access in India remains bottlenecked by information asymmetry. Borrowers lack visibility into lender-specific credit appetites, leading to high rejection rates and a manual, 5–7 day discovery cycle. Beyond credit, MSMEs face a discovery gap with regard to government support with hundreds of central and state schemes from NABARD, SIDBI, and other nodal agencies, small business owners find eligibility criteria opaque, resulting in massive under-utilisation of available fiscal support.
              </p>
            </div>

            {/* The Innovation */}
            <div className="tech-card bg-[#fcf9f8] border border-[#e8e4e1] p-6 sm:p-8">
              <h3 className="font-(family-name:--font-outfit) text-lg font-bold text-[#003f7d] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006d3f]">lightbulb</span>
                The Innovation: Lender-Specific Logic Mapping (L-SLM) Engine
              </h3>
              <p className="text-sm text-[#424751] leading-relaxed mb-4">
                Cred2Tech has developed a high-velocity Lender Intelligence and Logic-Mapping Platform. The core uniqueness lies in the Lender-Specific Logic Mapping (L-SLM) Engine. While traditional models rely on manual coordination, the platform digitises complex, multi-variable credit policies into a unified Rule-Based Workflow enabling real-time eligibility matching across multiple lenders simultaneously.
              </p>
              <h4 className="font-semibold text-[#003f7d] mb-2">Unified Scheme Intelligence (USI) Module</h4>
              <p className="text-sm text-[#424751] leading-relaxed">
                Cred2Tech incorporates a Unified Scheme Intelligence (USI) module. This feature democratises access to government-backed incentives by cross-referencing MSME profiles with a comprehensive database of central and state schemes. Proprietary matching logic ensures a frictionless journey, allowing businesses to discover eligible subsidies with near-zero additional data input bridging the gap between public policy and its intended beneficiaries.
              </p>
            </div>

            {/* Scalability */}
            <div className="tech-card bg-[#fcf9f8] border border-[#e8e4e1] p-6 sm:p-8">
              <h3 className="font-(family-name:--font-outfit) text-lg font-bold text-[#003f7d] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006d3f]">cloud</span>
                Scalability & Architecture
              </h3>
              <p className="text-sm text-[#424751] leading-relaxed mb-4">
                The platform is built on a Modular Microservices Architecture, allowing horizontal scaling across different loan products Secured, Unsecured, and Working Capital without increasing operational overhead. The Channel-Partner-as-a-Service (CPaaS) model enables onboarding of thousands of DSAs, providing each with a digital Command Centre to manage their entire lead lifecycle.
              </p>
              <h4 className="font-semibold text-[#003f7d] mb-2">National Infrastructure Vision</h4>
              <p className="text-sm text-[#424751] leading-relaxed">
                By integrating with GST, the Account Aggregator framework, and ITR data, Cred2Tech is positioned to become a national infrastructure layer for friction-free MSME credit distribution. This directly supports the Atmanirbhar Bharat vision by reducing the cost of credit acquisition and shortening disbursement cycles empowering the backbone of the Indian economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#003f7d 1px,transparent 1px),linear-gradient(90deg,#003f7d 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#003f7d]/20 to-transparent" />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.22em] uppercase text-[#006d3f]">
                Our Privacy Architecture
              </span>
              <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[#003f7d]">
                Data Privacy Commitment
              </h2>
            </div>

            <div className="bg-[#003f7d] p-6 sm:p-8 text-white">
              <ul className="space-y-4">
                {privacyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#1dff9b] flex-shrink-0 mt-0.5">check_circle</span>
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
    
    // Section headers stagger
    const sections=['#mission','#values','#story','#founders','#company','#technology','#privacy'];
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
.px-orb{position:absolute;border-radius:50%;pointer-events:none;will-change:transform;filter:blur(70px);opacity:0;}
.px-grid{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px);background-size:52px 52px;will-change:transform;}
.material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;}
.value-card{transform:translateY(20px);}
.founder-card{transform:translateY(20px);}
.tech-card{transform:translateY(20px);}
@media(max-width:1023px){.px-orb{opacity:0.08!important;}}
      `}</style>
    </div>
  );
}
