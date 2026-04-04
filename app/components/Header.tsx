'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
 const [scrolled, setScrolled] = useState(false);
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const pathname = usePathname();

 useEffect(() => {
 const handleScroll = () => {
 setScrolled(window.scrollY > 40);
 };
 window.addEventListener('scroll', handleScroll, { passive: true });
 handleScroll();

 return () => {
 window.removeEventListener('scroll', handleScroll);
 };
 }, [pathname]);

 return (
 <header id="site-header" className={`fixed top-0 w-full z-[1000] transition-all duration-500 pt-5 px-4 sm:px-8 lg:px-12 ${scrolled ? 'scrolled' : ''}`}>
 <div className="max-w-[1440px] mx-auto">
 <nav id="header-nav" className="flex justify-between items-center px-3 sm:px-4 pl-4 sm:pl-6 h-[64px] sm:h-[72px] rounded-full transition-all duration-500 shadow-[0_12px_40px_-12px_rgba(0,63,125,0.15)] overflow-visible"
 style={{
 background: 'rgba(255, 255, 255, 0.75)',
 backdropFilter: 'blur(36px) saturate(200%)',
 WebkitBackdropFilter: 'blur(36px) saturate(200%)',
 border: '1.5px solid rgba(255, 255, 255, 0.8)',
 boxShadow: '0 8px 32px rgba(0, 63, 125, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.8)',
 }}
 >
 {/* ── LOGO ── */}
 <Link href="/" className="flex items-center gap-2 flex-shrink-0 sm:gap-3 group">
 <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 transition-transform duration-300 group-hover:scale-105">
 <div className="absolute inset-0 rounded-full shadow-[0_4px_12px_rgba(0,63,125,0.3)]" style={{ background: 'linear-gradient(135deg, #003f7d 0%, #0056a7 100%)' }} />
 <div className="absolute inset-[2.5px] rounded-full bg-white flex items-center justify-center">
 <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
 <path d="M2.5 7h3.5M8 3.5l3.5 3.5L8 10.5" stroke="#003f7d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
 </div>
 </div>
 <div className="flex flex-col leading-none">
 <span className="font-(family-name:--font-outfit) font-bold text-[1.1rem] sm:text-[1.4rem] tracking-tight text-[#003f7d] leading-none transition-all">
 Cred<span className="text-[#006d3f]">2</span>Tech
 </span>
 <span className="text-[8.5px] sm:text-[10px] font-(family-name:--font-inter) font-medium tracking-[0.05em] text-[#003f7d]/70 mt-1 uppercase">
 Credit, Simplified.
 </span>
 </div>
 </Link>

 {/* ── NAV LINKS (Pill container) ── */}
 <div className="hidden lg:flex items-center px-2 py-1.5 rounded-full" style={{ background: 'rgba(0, 63, 125, 0.04)', border: '1px solid rgba(0, 63, 125, 0.04)' }}>
 
 {/* Products */}
 <div className="relative group">
 <button className="flex items-center gap-1.5 px-5 py-2 rounded-full text-[14px] font-medium font-(family-name:--font-inter) text-[#424751] hover:text-[#003f7d] hover:bg-white hover:shadow-[0_2px_8px_rgba(0,63,125,0.06)] transition-all duration-300">
 Products
 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
 </button>
 
 {/* Products Dropdown */}
 <div className="absolute top-[120%] left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[650px] z-[1050]">
 <div className="bg-white shadow-[0_20px_40px_-15px_rgba(0,63,125,0.15)] border border-[#003f7d]/10 overflow-hidden flex text-left before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-4 before:h-4 before:bg-white before:rotate-45 before:border-l before:border-t before:border-[#003f7d]/10">
 <div className="flex-1 p-6 border-r border-[#003f7d]/5 bg-white">
 <h4 className="text-[11px] uppercase tracking-wider font-bold text-[#003f7d]/50 mb-4 px-3">Platforms</h4>
 <Link href="#" className="block p-3 hover:bg-[#003f7d]/5 transition-colors mb-2">
 <div className="font-semibold text-[#003f7d] text-[14px] mb-1">For DSAs</div>
 <p className="text-[12px] text-[#424751] leading-relaxed">The complete platform for MSME lending agents: pipeline, team, wallet, and commissions</p>
 </Link>
 <Link href="#" className="block p-3 hover:bg-[#003f7d]/5 transition-colors">
 <div className="font-semibold text-[#003f7d] text-[14px] mb-1">For MSMEs</div>
 <p className="text-[12px] text-[#424751] leading-relaxed">Check eligibility for a Loan and connect with the right lender</p>
 </Link>
 </div>
 <div className="flex-1 p-6 bg-slate-50/50">
 <h4 className="text-[11px] uppercase tracking-wider font-bold text-[#003f7d]/50 mb-4 px-3">Loan Products</h4>
 <Link href="#" className="flex flex-col p-3 hover:bg-white hover:shadow-sm transition-all mb-1">
 <div className="font-semibold text-[#424751] text-[13px]">Home Loan and LAP</div>
 </Link>
 <div className="flex flex-col p-3 group/item mb-1 cursor-default opacity-80">
 <div className="font-semibold text-[#424751] text-[13px] flex items-center gap-2">Business Loans <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">🔜</span></div>
 <p className="text-[11px] text-[#424751]/70 mt-1">Additional loan products coming soon</p>
 </div>
 <div className="flex flex-col p-3 group/item mb-1 cursor-default opacity-80">
 <div className="font-semibold text-[#424751] text-[13px] flex items-center gap-2">Working Capital <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">🔜</span></div>
 </div>
 <div className="flex flex-col p-3 group/item mb-1 cursor-default opacity-80">
 <div className="font-semibold text-[#424751] text-[13px] flex items-center gap-2">Supply Chain Financing <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">🔜</span></div>
 </div>
 <div className="flex flex-col p-3 group/item cursor-default opacity-80">
 <div className="font-semibold text-[#424751] text-[13px] flex items-center gap-2">Government Schemes <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">🔜</span></div>
 <p className="text-[11px] text-[#424751]/70 mt-1">Discover and apply for MSME government schemes (Coming Soon)</p>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Solutions */}
 <div className="relative group">
 <button className="flex items-center gap-1.5 px-5 py-2 rounded-full text-[14px] font-medium font-(family-name:--font-inter) text-[#424751] hover:text-[#003f7d] hover:bg-white hover:shadow-[0_2px_8px_rgba(0,63,125,0.06)] transition-all duration-300">
 Solutions
 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
 </button>
 
 {/* Solutions Dropdown */}
 <div className="absolute top-[120%] left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[500px] z-[1050]">
 <div className="bg-white shadow-[0_20px_40px_-15px_rgba(0,63,125,0.15)] border border-[#003f7d]/10 overflow-hidden text-left p-4 grid grid-cols-1 gap-1 before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-4 before:h-4 before:bg-white before:rotate-45 before:border-l before:border-t before:border-[#003f7d]/10">
 <Link href="#" className="flex flex-col p-4 hover:bg-slate-50 transition-colors">
 <div className="font-semibold text-[#003f7d] text-[14px] mb-1">LAP Eligibility Check</div>
 <p className="text-[12px] text-[#424751] leading-relaxed">Real-time matching across lenders for Loan Against Property</p>
 </Link>
 <Link href="#" className="flex flex-col p-4 hover:bg-slate-50 transition-colors">
 <div className="font-semibold text-[#003f7d] text-[14px] mb-1">DSA CRM & Pipeline</div>
 <p className="text-[12px] text-[#424751] leading-relaxed">End-to-end case management for DSA agents</p>
 </Link>
 <Link href="#" className="flex flex-col p-4 hover:bg-slate-50 transition-colors">
 <div className="font-semibold text-[#003f7d] text-[14px] mb-1">Document Vault</div>
 <p className="text-[12px] text-[#424751] leading-relaxed">Securely verified and customer-uploaded documents, organised</p>
 </Link>
 <Link href="#" className="flex flex-col p-4 hover:bg-slate-50 transition-colors">
 <div className="font-semibold text-[#003f7d] text-[14px] mb-1">Commission & Wallet</div>
 <p className="text-[12px] text-[#424751] leading-relaxed">Transparent payout tracking and wallet management</p>
 </Link>
 </div>
 </div>
 </div>

 {/* About Us */}
 <Link href="#about" className="px-5 py-2 rounded-full text-[14px] font-medium font-(family-name:--font-inter) text-[#424751] hover:text-[#003f7d] hover:bg-white hover:shadow-[0_2px_8px_rgba(0,63,125,0.06)] transition-all duration-300">
 About Us
 </Link>

 {/* Contact */}
 <Link href="#contact" className="px-5 py-2 rounded-full text-[14px] font-medium font-(family-name:--font-inter) text-[#424751] hover:text-[#003f7d] hover:bg-white hover:shadow-[0_2px_8px_rgba(0,63,125,0.06)] transition-all duration-300">
 Contact
 </Link>

 </div>

 {/* ── ACTIONS ── */}
 <div className="flex items-center gap-2">
 {/* Log In (Secondary) */}
 <Link href="/login"
 className="hidden md:flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[14px] font-medium font-(family-name:--font-inter) text-[#424751] hover:text-[#003f7d] transition-colors duration-200 hover:bg-[#003f7d]/5 tracking-wide">
 Login
 </Link>

 {/* Get Started (Primary) */}
 <Link href="/login"
 className="hidden sm:flex relative items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-bold font-(family-name:--font-inter) text-white overflow-hidden hover:scale-105 transition-all shadow-[0_4px_16px_rgba(0,63,125,0.25)] group"
 style={{ background: 'linear-gradient(135deg, #003f7d 0%, #0056a7 100%)', boxShadow: '0 4px 14px rgba(0,63,125,0.3), inset 0 1px 1px rgba(255,255,255,0.2)' }}
 >
 <span className="relative tracking-wide">Get Started</span>
 <svg className="relative w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <path d="M5 12h14M12 5l7 7-7 7"/>
 </svg>
 </Link>

 {/* Mobile hamburger */}
 <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-[#424751] hover:text-[#003f7d] ml-1 bg-[#003f7d]/5 rounded-full" id="mobile-menu-btn">
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
 <div id="mobile-nav-drawer" className="fixed top-[92px] left-4 right-4 max-h-[80vh] overflow-y-auto rounded-3xl p-5 z-[999] shadow-[0_24px_64px_rgba(0,63,125,0.15)] animate-in fade-in slide-in-from-top-6 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
 style={{
 background: 'rgba(255, 255, 255, 0.95)',
 backdropFilter: 'blur(36px) saturate(200%)',
 border: '1.5px solid rgba(255,255,255,0.8)',
 }}
 >
 <div className="flex flex-col gap-1">
 <div className="font-semibold text-[#003f7d] px-2 py-2 text-[13px] uppercase tracking-wide">Products</div>
 <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-[#424751] rounded-full hover:bg-[#003f7d]/5">For DSAs</Link>
 <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-[#424751] rounded-full hover:bg-[#003f7d]/5">For MSMEs</Link>
 <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-[#424751] rounded-full hover:bg-[#003f7d]/5">Home Loan and LAP</Link>
 <div className="block px-4 py-2.5 text-[15px] text-[#424751]/60 ">Business Loans 🔜</div>
 <div className="block px-4 py-2.5 text-[15px] text-[#424751]/60 ">Working Capital 🔜</div>
 <div className="block px-4 py-2.5 text-[15px] text-[#424751]/60 ">Supply Chain Financing 🔜</div>
 <div className="block px-4 py-2.5 text-[15px] text-[#424751]/60 ">Government Schemes 🔜</div>
 
 <div className="h-px bg-[#003f7d]/10 my-2 mx-2" />
 
 <div className="font-semibold text-[#003f7d] px-2 py-2 text-[13px] uppercase tracking-wide">Solutions</div>
 <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-[#424751] rounded-full hover:bg-[#003f7d]/5">LAP Eligibility Check</Link>
 <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-[#424751] rounded-full hover:bg-[#003f7d]/5">DSA CRM & Pipeline</Link>
 <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-[#424751] rounded-full hover:bg-[#003f7d]/5">Document Vault</Link>
 <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-[#424751] rounded-full hover:bg-[#003f7d]/5">Commission & Wallet</Link>

 <div className="h-px bg-[#003f7d]/10 my-2 mx-2" />

 <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-[16px] font-semibold text-[#003f7d] rounded-full hover:bg-[#003f7d]/5">About Us</Link>
 <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-[16px] font-semibold text-[#003f7d] rounded-full hover:bg-[#003f7d]/5">Contact</Link>
 </div>
 
 <div className="h-px bg-[#003f7d]/10 my-4" />
 
 <Link href="/login" onClick={() => setMobileMenuOpen(false)} 
 className="flex items-center justify-center gap-2 px-5 py-4 mt-2 border-[1.5px] border-[#003f7d] font-(family-name:--font-inter) text-[15px] font-bold tracking-wide text-[#003f7d] rounded-full hover:bg-[#003f7d]/5 transition-colors">
 Login
 </Link>
 <Link href="/login" onClick={() => setMobileMenuOpen(false)}
 className="flex items-center justify-center gap-2 px-5 py-4 mt-3 font-(family-name:--font-inter) text-[15px] font-bold tracking-wide text-white rounded-full shadow-lg"
 style={{ background: 'linear-gradient(135deg, #003f7d 0%, #0056a7 100%)', boxShadow: '0 8px 24px rgba(0,63,125,0.25), inset 0 1px 1px rgba(255,255,255,0.2)' }}>
 Get Started
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
 </Link>
 </div>
 )}
 </header>
 );
}
