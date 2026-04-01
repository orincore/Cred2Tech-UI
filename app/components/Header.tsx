'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Intersection Observer for scroll spy on the homepage
    if (pathname === '/') {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setActiveSection('#' + e.target.id);
          }
        });
      }, { threshold: 0.4 });
      
      ['solutions','platform','pricing','cta-section'].forEach(id => {
        const el = document.getElementById(id);
        if (el) obs.observe(el);
      });

      return () => {
        window.removeEventListener('scroll', handleScroll);
        obs.disconnect();
      };
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const rawNavLinks = [
    ['#solutions', 'Solutions'],
    ['#eligibility', 'Eligibility'],
    ['#platform', 'Platform'],
    ['#pricing', 'Pricing']
  ];

  const navLinks = rawNavLinks.map(([href, label]) => [
    pathname === '/' ? href : '/' + href,
    label
  ]);

  return (
    <header id="site-header" className={`fixed top-0 w-full z-[1000] transition-all duration-500 pt-5 px-4 sm:px-6 ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <nav id="header-nav" className="flex justify-between items-center px-3 sm:px-4 pl-4 sm:pl-6 h-[64px] sm:h-[72px] rounded-[100px] transition-all duration-500 shadow-[0_12px_40px_-12px_rgba(0,63,125,0.15)] overflow-visible"
          style={{
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(36px) saturate(200%)',
            WebkitBackdropFilter: 'blur(36px) saturate(200%)',
            border: '1.5px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 8px 32px rgba(0, 63, 125, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.8)',
          }}
        >
          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 rounded-full shadow-[0_4px_12px_rgba(0,63,125,0.3)]" style={{ background: 'linear-gradient(135deg, #003f7d 0%, #0056a7 100%)' }} />
              <div className="absolute inset-[2.5px] rounded-full bg-white flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h3.5M8 3.5l3.5 3.5L8 10.5" stroke="#003f7d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-(family-name:--font-outfit) font-bold text-[1.4rem] tracking-tight text-[#003f7d] leading-none">
                Cred<span className="text-[#006d3f]">2</span>Tech
              </span>
              <span className="text-[9px] font-(family-name:--font-inter) font-bold tracking-[0.2em] uppercase text-[#003f7d]/50 mt-0.5">
                Fintech Platform
              </span>
            </div>
          </Link>

          {/* ── NAV LINKS (Pill container) ── */}
          <div className="hidden lg:flex items-center p-1.5 rounded-full" style={{ background: 'rgba(0, 63, 125, 0.04)', border: '1px solid rgba(0, 63, 125, 0.04)' }}>
            {navLinks.map(([href,label]) => {
              const isActive = pathname === '/' && activeSection === rawNavLinks.find(l => l[1] === label)![0];
              return (
                <a key={href} href={href}
                  className={`nav-link relative px-5 py-2 rounded-full text-[14px] font-medium font-(family-name:--font-inter) transition-all duration-300 hover:bg-white hover:shadow-[0_2px_8px_rgba(0,63,125,0.06)] ${isActive ? 'text-[#003f7d] bg-white shadow-[0_2px_8px_rgba(0,63,125,0.06)]' : 'text-[#424751] hover:text-[#003f7d]'}`}>
                  {label}
                </a>
              );
            })}
          </div>

          {/* ── ACTIONS ── */}
          <div className="flex items-center gap-2">
            {/* Log In */}
            <Link href="/login"
              className="hidden md:flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[14px] font-semibold font-(family-name:--font-inter) text-[#424751] hover:text-[#003f7d] transition-colors duration-200 hover:bg-[#003f7d]/5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
              </svg>
              Log In
            </Link>

            {/* Get Started — solid color button, tighter radii */}
            <Link href="/login"
              className="hidden sm:flex relative items-center gap-2 px-6 py-3 rounded-full text-[14px] font-bold font-(family-name:--font-inter) text-white overflow-hidden hover:scale-105 transition-all shadow-[0_4px_16px_rgba(0,63,125,0.25)] group"
              style={{ background: 'linear-gradient(135deg, #003f7d 0%, #0056a7 100%)', boxShadow: '0 4px 14px rgba(0,63,125,0.3), inset 0 1px 1px rgba(255,255,255,0.2)' }}
            >
              <span className="relative tracking-wide">Get Started</span>
              <svg className="relative w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-[#424751] hover:text-[#003f7d] ml-2 bg-[#003f7d]/5 rounded-full" id="mobile-menu-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="fixed top-[92px] left-4 right-4 rounded-3xl p-5 z-[999] shadow-[0_24px_64px_rgba(0,63,125,0.15)] animate-in fade-in slide-in-from-top-6 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(36px) saturate(200%)',
            border: '1.5px solid rgba(255,255,255,0.8)',
          }}
        >
          {navLinks.map(([href,label]) => (
            <a key={href} href={href} onClick={() => setMobileMenuOpen(false)}
              className="block px-5 py-3.5 font-(family-name:--font-inter) text-[16px] font-semibold text-[#424751] rounded-2xl hover:bg-[#003f7d]/5 hover:text-[#003f7d] transition-colors">
              {label}
            </a>
          ))}
          <div className="h-px bg-[#003f7d]/10 my-4" />
          <Link href="/login" onClick={() => setMobileMenuOpen(false)} 
            className="flex items-center justify-center gap-2 px-5 py-4 mt-2 border-[1.5px] border-[#003f7d] font-(family-name:--font-inter) text-[15px] font-bold tracking-wide text-[#003f7d] rounded-2xl hover:bg-[#003f7d]/5 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
            Log In
          </Link>
          <Link href="/login" onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 px-5 py-4 mt-3 font-(family-name:--font-inter) text-[15px] font-bold tracking-wide text-white rounded-2xl shadow-lg"
            style={{ background: 'linear-gradient(135deg, #003f7d 0%, #0056a7 100%)', boxShadow: '0 8px 24px rgba(0,63,125,0.25), inset 0 1px 1px rgba(255,255,255,0.2)' }}>
            Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      )}
    </header>
  );
}
