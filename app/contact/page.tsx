"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    mobileNumber: '',
    email: '',
    role: '',
    helpType: '',
    message: '',
  });

  useEffect(() => {
    (window as any).__CONTACT_UNMOUNTED = false;
    const bar = document.createElement('div');
    bar.id = 'scroll-bar';
    bar.style.cssText = 'position:fixed;top:0;left:0;height:2px;width:0%;background:linear-gradient(90deg,var(--on-surface),var(--surface-low));z-index:9999;pointer-events:none;transition:width 0.1s;';
    document.body.prepend(bar);
    const onScroll = () => {
      bar.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      (window as any).__CONTACT_UNMOUNTED = true;
      window.removeEventListener('scroll', onScroll);
      bar.remove();
      document.getElementById('scroll-bar')?.remove();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you! The team will respond within 24 hours.');
  };

  return (
    <div className="bg-[#fcf9f8] text-[#1b1c1c] font-(family-name:--font-inter) overflow-x-clip">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative min-h-[40vh] flex items-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg,#0a1628 0%,#0d2d6b 35%,#1565d8 70%,#0a1628 100%)',
        }}
      >
        <div className="hidden lg:block px-orb w-[400px] h-[400px] bg-[#0d3a8e] absolute top-[-100px] left-[-150px] z-0" id="orb-h1" />
        <div className="hidden lg:block px-orb w-[300px] h-[300px] bg-[var(--on-surface)] absolute bottom-[-80px] right-[5%] z-0" id="orb-h2" />
        <div className="px-grid z-0" id="hero-grid" />

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.18em] uppercase text-[var(--on-surface)] mb-4 px-3 py-1 border border-[var(--on-surface)]/30 bg-[var(--on-surface)]/10">
              Get Started
            </span>
            <h1 className="font-(family-name:--font-outfit) font-extrabold text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] tracking-tight text-white mb-6">
              Ready to simplify credit?
            </h1>
            <p className="text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Whether the goal is to run a more efficient lending operation as a DSA, access a Loan as an MSME, join the lender panel, or explore a partnership — the Cred2Tech team is ready to connect.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(var(--on-surface) 1px,transparent 1px),linear-gradient(90deg,var(--on-surface) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--on-surface)]/20 to-transparent" />
        <div className="w-full max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <form onSubmit={handleSubmit} className="bg-[#fcf9f8] border border-[#e8e4e1] p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Full Name */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-[var(--on-surface)] mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full px-4 py-3 bg-white border border-[#e8e4e1] text-[#1b1c1c] focus:border-[var(--on-surface)] focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Business Name */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-[var(--on-surface)] mb-2">Business Name</label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  className="w-full px-4 py-3 bg-white border border-[#e8e4e1] text-[#1b1c1c] focus:border-[var(--on-surface)] focus:outline-none transition-colors"
                  placeholder="Enter your business name"
                  required
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-semibold text-[var(--on-surface)] mb-2">Mobile Number</label>
                <input
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})}
                  className="w-full px-4 py-3 bg-white border border-[#e8e4e1] text-[#1b1c1c] focus:border-[var(--on-surface)] focus:outline-none transition-colors"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-semibold text-[var(--on-surface)] mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-white border border-[#e8e4e1] text-[#1b1c1c] focus:border-[var(--on-surface)] focus:outline-none transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* I am a... */}
              <div>
                <label className="block text-sm font-semibold text-[var(--on-surface)] mb-2">I am a...</label>
                <div className="relative">
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-[#e8e4e1] text-[#1b1c1c] focus:border-[var(--on-surface)] focus:outline-none transition-colors appearance-none cursor-pointer pr-10"
                    required
                  >
                    <option value="">Select your role</option>
                    <option value="msme">MSME Owner</option>
                    <option value="dsa">DSA</option>
                    <option value="lender">Lender</option>
                    <option value="investor">Investor</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-[var(--on-surface)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              {/* How can we help? */}
              <div>
                <label className="block text-sm font-semibold text-[var(--on-surface)] mb-2">How can we help?</label>
                <div className="relative">
                  <select
                    value={formData.helpType}
                    onChange={(e) => setFormData({...formData, helpType: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-[#e8e4e1] text-[#1b1c1c] focus:border-[var(--on-surface)] focus:outline-none transition-colors appearance-none cursor-pointer pr-10"
                    required
                  >
                    <option value="">Select enquiry type</option>
                    <option value="loan">Loan Eligibility Check</option>
                    <option value="dsa-reg">DSA Registration</option>
                    <option value="lender-partner">Lender Partnership</option>
                    <option value="general">General Enquiry</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-[var(--on-surface)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-[var(--on-surface)] mb-2">Message (optional)</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 bg-white border border-[#e8e4e1] text-[#1b1c1c] focus:border-[var(--on-surface)] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your requirements..."
                />
                <p className="text-xs text-[#424751]/60 mt-1 text-right">{formData.message.length}/500</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--on-surface)] text-[#001233] px-8 py-4 font-bold text-sm sm:text-base hover:shadow-[0_0_28px_rgba(29,255,155,0.5)] hover:scale-[1.02] transition-all group"
              >
                Submit — The team will respond within 24 hours
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Details Section */}
      <section id="contact-details" className="py-10 sm:py-12 lg:py-16 bg-[#f0f7ff] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(var(--on-surface) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--on-surface)]/10 to-transparent" />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="font-(family-name:--font-jb-mono) text-base font-bold tracking-[0.22em] uppercase text-[var(--on-surface)]">
              Direct Contact
            </span>
            <h2 className="mt-4 font-(family-name:--font-outfit) text-[1.9rem] sm:text-[2.3rem] font-bold text-[var(--on-surface)]">
              Reach Out
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Email */}
            <div className="contact-card bg-[#fcf9f8] border border-[#e8e4e1] p-6 transition-all duration-300 hover:border-[var(--on-surface)]/30 hover:shadow-[0_20px_60px_rgba(11,33,71,0.08)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[var(--on-surface)]/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[var(--on-surface)]">email</span>
                </div>
                <h3 className="font-(family-name:--font-outfit) text-lg font-semibold text-[var(--on-surface)]">Email</h3>
              </div>
              <a href="mailto:contact@cred2tech.com" className="text-sm text-[#424751] hover:text-[var(--on-surface)] transition-colors break-all">
                contact@cred2tech.com
              </a>
            </div>

            {/* Phone */}
            <div className="contact-card bg-[#fcf9f8] border border-[#e8e4e1] p-6 transition-all duration-300 hover:border-[var(--on-surface)]/30 hover:shadow-[0_20px_60px_rgba(11,33,71,0.08)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[var(--on-surface)]/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[var(--on-surface)]">phone</span>
                </div>
                <h3 className="font-(family-name:--font-outfit) text-lg font-semibold text-[var(--on-surface)]">Phone</h3>
              </div>
              <div className="space-y-1">
                <a href="tel:+918867522242" className="block text-sm text-[#424751] hover:text-[var(--on-surface)] transition-colors">
                  +91 8867522242
                </a>
                <a href="tel:+919886401608" className="block text-sm text-[#424751] hover:text-[var(--on-surface)] transition-colors">
                  +91 9886401608
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="contact-card bg-[#fcf9f8] border border-[#e8e4e1] p-6 transition-all duration-300 hover:border-[var(--on-surface)]/30 hover:shadow-[0_20px_60px_rgba(11,33,71,0.08)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[var(--on-surface)]/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[var(--on-surface)]">schedule</span>
                </div>
                <h3 className="font-(family-name:--font-outfit) text-lg font-semibold text-[var(--on-surface)]">Response Time</h3>
              </div>
              <p className="text-sm text-[#424751]">
                Within 24 hours on business days
              </p>
            </div>

            {/* Registered Office */}
            <div className="contact-card sm:col-span-2 lg:col-span-2 bg-[#fcf9f8] border border-[#e8e4e1] p-6 transition-all duration-300 hover:border-[var(--on-surface)]/30 hover:shadow-[0_20px_60px_rgba(11,33,71,0.08)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[var(--on-surface)]/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[var(--on-surface)]">location_on</span>
                </div>
                <h3 className="font-(family-name:--font-outfit) text-lg font-semibold text-[var(--on-surface)]">Registered Office</h3>
              </div>
              <p className="text-sm text-[#424751]">
                A1103, AModa Valmark, Bengaluru, Karnataka, India
              </p>
            </div>

            {/* LinkedIn */}
            <div className="contact-card bg-[#fcf9f8] border border-[#e8e4e1] p-6 transition-all duration-300 hover:border-[var(--on-surface)]/30 hover:shadow-[0_20px_60px_rgba(11,33,71,0.08)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[var(--on-surface)]/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[var(--on-surface)]">link</span>
                </div>
                <h3 className="font-(family-name:--font-outfit) text-lg font-semibold text-[var(--on-surface)]">LinkedIn</h3>
              </div>
              <a 
                href="https://linkedin.com/company/cred2tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-[#424751] hover:text-[var(--on-surface)] transition-colors break-all"
              >
                linkedin.com/company/cred2tech
              </a>
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

      <Script id="contact-animations" strategy="afterInteractive">{`
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
    
    // Section headers
    gsap.from('#contact-form .text-center',{scrollTrigger:{trigger:'#contact-form',start:'top 85%'},opacity:0,y:20,duration:0.5,ease:'power2.out'});
    gsap.from('#contact-details .text-center',{scrollTrigger:{trigger:'#contact-details',start:'top 85%'},opacity:0,y:20,duration:0.5,ease:'power2.out'});
    
    // Form animation
    gsap.from('#contact-form form',{scrollTrigger:{trigger:'#contact-form',start:'top 80%'},opacity:0,y:30,duration:0.6,ease:'power2.out'});
    
    // Contact cards stagger
    const contactCards=document.querySelectorAll('.contact-card');
    contactCards.forEach((card,i)=>{
      gsap.to(card,{scrollTrigger:{trigger:card,start:'top 85%'},opacity:1,y:0,duration:0.4,delay:i*0.05,ease:'power2.out'});
    });
  }
  window.addEventListener('libs-ready',initAnimations,{once:true});
})();
      `}</Script>

      <style>{`
.px-orb{position:absolute;border-radius:50%;pointer-events:none;will-change:transform;filter:blur(70px);opacity:0;}
.px-grid{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px);background-size:52px 52px;will-change:transform;}
.material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;}
.contact-card{transform:translateY(20px);}
@media(max-width:1023px){.px-orb{opacity:0.08!important;}}
      `}</style>
    </div>
  );
}
