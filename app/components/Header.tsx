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
 <header id="site-header" className="sticky top-0 z-[1000] bg-[var(--primary)] border-b border-white/10 shadow-sm">
 <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
 <nav id="header-nav" className="flex justify-between items-center h-[64px] sm:h-[72px]">

 {/* ── LOGO ── */}
 <Link href="/" className="flex items-center gap-2 flex-shrink-0 sm:gap-3 group">
 <div className="relative w-36 h-36 sm:w-40 sm:h-40 lg:w-55 lg:h-55 shrink-0 transition-transform duration-300 group-hover:scale-105">
 <img src="/logos/logo.png" alt="Cred2Tech" className="w-full h-full object-contain" />
 </div>
 <div className="flex flex-col leading-none">
 

 </div>
 </Link>

 {/* ── NAV LINKS (Pill container) ── */}
 <div className="hidden lg:flex items-center px-2 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
                {/* For DSA */}
                <div className="relative group">
                    <Link href="/dsa" suppressHydrationWarning className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-[14px] font-bold font-(family-name:--font-inter) transition-all duration-300 ${
                        pathname === '/dsa' ? 'bg-white text-[var(--primary)]' : 'text-white hover:bg-white/15'
                    }`}>
                        For DSA
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </Link>

                    {/* For DSA Dropdown */}
                    <div className="absolute top-[120%] left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[340px] z-[1050]">
                        <div className="bg-white shadow-[0_20px_40px_-15px_rgba(0,63,125,0.15)] border border-[var(--primary)]/10 overflow-hidden text-left p-3 before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-4 before:h-4 before:bg-white before:rotate-45 before:border-l before:border-t before:border-[var(--primary)]/10">
                            <Link href="/dsa#eligibility" className="flex items-center gap-3 p-3 hover:bg-[var(--primary)]/5 transition-colors">
                                <span className="material-symbols-outlined text-[var(--primary)] text-[20px]">fact_check</span>
                                <span className="font-medium text-[#424751] text-[13px]">Check Loan Eligibility</span>
                            </Link>
                            <Link href="/dsa#crm" className="flex items-center gap-3 p-3 hover:bg-[var(--primary)]/5 transition-colors">
                                <span className="material-symbols-outlined text-[var(--primary)] text-[20px]">view_kanban</span>
                                <span className="font-medium text-[#424751] text-[13px]">DSA CRM</span>
                            </Link>
                            <Link href="/dsa#vault" className="flex items-center gap-3 p-3 hover:bg-[var(--primary)]/5 transition-colors">
                                <span className="material-symbols-outlined text-[var(--primary)] text-[20px]">folder_shared</span>
                                <span className="font-medium text-[#424751] text-[13px]">Document Vault</span>
                            </Link>
                            <Link href="/dsa#invoice" className="flex items-center gap-3 p-3 hover:bg-[var(--primary)]/5 transition-colors">
                                <span className="material-symbols-outlined text-[var(--primary)] text-[20px]">receipt_long</span>
                                <span className="font-medium text-[#424751] text-[13px]">Invoice Management</span>
                            </Link>
                            <Link href="/dsa#performance" className="flex items-center gap-3 p-3 hover:bg-[var(--primary)]/5 transition-colors">
                                <span className="material-symbols-outlined text-[var(--primary)] text-[20px]">monitoring</span>
                                <span className="font-medium text-[#424751] text-[13px]">Performance Tracking</span>
                            </Link>
                            <div className="flex items-center gap-3 p-3 cursor-default opacity-70">
                                <span className="material-symbols-outlined text-[var(--primary)] text-[20px]">policy</span>
                                <span className="font-medium text-[#424751] text-[13px]">MSME Govt Scheme Discovery</span>
                                <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">SOON</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* For MSME */}
                <div className="relative group">
                    <Link href="/msme" suppressHydrationWarning className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-[14px] font-bold font-(family-name:--font-inter) transition-all duration-300 ${
                        pathname === '/msme' ? 'bg-white text-[var(--primary)]' : 'text-white hover:bg-white/15'
                    }`}>
                        For MSME
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </Link>

                    {/* For MSME Dropdown */}
                    <div className="absolute top-[120%] left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[340px] z-[1050]">
                        <div className="bg-white shadow-[0_20px_40px_-15px_rgba(0,63,125,0.15)] border border-[var(--primary)]/10 overflow-hidden text-left p-3 before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-4 before:h-4 before:bg-white before:rotate-45 before:border-l before:border-t before:border-[var(--primary)]/10">
                            <Link href="/msme#eligibility" className="flex items-center gap-3 p-3 hover:bg-[var(--primary)]/5 transition-colors">
                                <span className="material-symbols-outlined text-[var(--primary)] text-[20px]">fact_check</span>
                                <span className="font-medium text-[#424751] text-[13px]">Check Loan Eligibility</span>
                            </Link>
                            <Link href="/msme#vault" className="flex items-center gap-3 p-3 hover:bg-[var(--primary)]/5 transition-colors">
                                <span className="material-symbols-outlined text-[var(--primary)] text-[20px]">folder_shared</span>
                                <span className="font-medium text-[#424751] text-[13px]">Document Vault</span>
                            </Link>
                            <Link href="/msme#cases" className="flex items-center gap-3 p-3 hover:bg-[var(--primary)]/5 transition-colors">
                                <span className="material-symbols-outlined text-[var(--primary)] text-[20px]">work</span>
                                <span className="font-medium text-[#424751] text-[13px]">My Cases</span>
                            </Link>
                            <div className="flex items-center gap-3 p-3 cursor-default opacity-70">
                                <span className="material-symbols-outlined text-[var(--primary)] text-[20px]">policy</span>
                                <span className="font-medium text-[#424751] text-[13px]">MSME Govt Scheme Discovery</span>
                                <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">SOON</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Us */}
                <Link href="/about" className={`px-5 py-2 rounded-full text-[14px] font-bold font-(family-name:--font-inter) transition-all duration-300 ${
                    pathname === '/about' ? 'bg-white text-[var(--primary)]' : 'text-white hover:bg-white/15'
                }`}>
                    About Us
                </Link>

                {/* How It Works */}
                <Link href="/how-it-works" className={`px-5 py-2 rounded-full text-[14px] font-bold font-(family-name:--font-inter) transition-all duration-300 ${
                    pathname === '/how-it-works' ? 'bg-white text-[var(--primary)]' : 'text-white hover:bg-white/15'
                }`}>
                    How It Works
                </Link>

                {/* Blogs */}
                <Link href="/blogs" className={`px-5 py-2 rounded-full text-[14px] font-bold font-(family-name:--font-inter) transition-all duration-300 ${
                    pathname?.startsWith('/blogs') ? 'bg-white text-[var(--primary)]' : 'text-white hover:bg-white/15'
                }`}>
                    Blogs
                </Link>

                {/* Contact */}
                <Link href="/contact" className={`px-5 py-2 rounded-full text-[14px] font-bold font-(family-name:--font-inter) transition-all duration-300 ${
                    pathname === '/contact' ? 'bg-white text-[var(--primary)]' : 'text-white hover:bg-white/15'
                }`}>
                    Contact
                </Link>

 </div>

 {/* ── ACTIONS ── */}
 <div className="flex items-center gap-2">
 {/* Get Started (Primary) */}
 <Link href="/login"
 className="hidden sm:flex relative items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-bold font-(family-name:--font-inter) text-[var(--primary)] bg-[var(--accent)] overflow-hidden hover:scale-105 transition-all shadow-lg group"
 >
 <span className="relative tracking-wide">Get Started</span>
 <svg className="relative w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <path d="M5 12h14M12 5l7 7-7 7"/>
 </svg>
 </Link>
 {/* Mobile hamburger */}
 <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-white hover:text-[var(--accent)] ml-1 bg-white/10 rounded-full" id="mobile-menu-btn" suppressHydrationWarning>
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
 <div id="mobile-nav-drawer" className="fixed top-[72px] left-0 right-0 max-h-[80vh] overflow-y-auto bg-white border-b border-gray-200 p-5 z-[999] shadow-lg animate-in fade-in slide-in-from-top-4 duration-300"
 >
 <div className="flex flex-col gap-1">
 <div className="font-bold text-[var(--primary)] px-2 py-2 text-[13px] uppercase tracking-wide">For DSA</div>
 <Link href="/dsa" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-[#424751] rounded-full hover:bg-[var(--primary)]/5">Overview</Link>
 <Link href="/dsa#eligibility" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-[#424751] rounded-full hover:bg-[var(--primary)]/5">Check Loan Eligibility</Link>
 <Link href="/dsa#crm" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-[#424751] rounded-full hover:bg-[var(--primary)]/5">DSA CRM</Link>
 <Link href="/dsa#vault" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-[#424751] rounded-full hover:bg-[var(--primary)]/5">Document Vault</Link>
 <Link href="/dsa#invoice" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-[#424751] rounded-full hover:bg-[var(--primary)]/5">Invoice Management</Link>
 <Link href="/dsa#performance" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-[#424751] rounded-full hover:bg-[var(--primary)]/5">Performance Tracking</Link>
 <div className="block px-4 py-2.5 text-[15px] text-[#424751]/60">MSME Govt Scheme Discovery (Soon)</div>

 <div className="h-px bg-[var(--primary)]/10 my-2 mx-2" />

 <div className="font-semibold text-[var(--primary)] px-2 py-2 text-[13px] uppercase tracking-wide">For MSME</div>
 <Link href="/msme" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-[#424751] rounded-full hover:bg-[var(--primary)]/5">Overview</Link>
 <Link href="/msme#eligibility" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-[#424751] rounded-full hover:bg-[var(--primary)]/5">Check Loan Eligibility</Link>
 <Link href="/msme#vault" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-[#424751] rounded-full hover:bg-[var(--primary)]/5">Document Vault</Link>
 <Link href="/msme#cases" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-[#424751] rounded-full hover:bg-[var(--primary)]/5">My Cases</Link>
 <div className="block px-4 py-2.5 text-[15px] text-[#424751]/60">MSME Govt Scheme Discovery (Soon)</div>

 <div className="h-px bg-[var(--primary)]/10 my-2 mx-2" />

 <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-[16px] font-semibold rounded-full ${
                                pathname === '/how-it-works' ? 'bg-[var(--primary)]/10 text-[var(--primary)]' : 'text-[var(--primary)] hover:bg-[var(--primary)]/5'
                            }`}>How It Works</Link>
 <Link href="/blogs" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-[16px] font-semibold rounded-full ${
                                pathname?.startsWith('/blogs') ? 'bg-[var(--primary)]/10 text-[var(--primary)]' : 'text-[var(--primary)] hover:bg-[var(--primary)]/5'
                            }`}>Blogs</Link>
 <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-[16px] font-semibold rounded-full ${
                                pathname === '/contact' ? 'bg-[var(--primary)]/10 text-[var(--primary)]' : 'text-[var(--primary)] hover:bg-[var(--primary)]/5'
                            }`}>Contact</Link>
 </div>
 
 <div className="h-px bg-[var(--primary)]/10 my-4" />
 
 <Link href="/login" onClick={() => setMobileMenuOpen(false)}
 className="flex items-center justify-center gap-2 px-5 py-4 mt-3 font-(family-name:--font-inter) text-[15px] font-bold tracking-wide text-white rounded-full shadow-lg"
 style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-c) 100%)', boxShadow: '0 8px 24px rgba(0,63,125,0.25), inset 0 1px 1px rgba(255,255,255,0.2)' }}>
 Get Started
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
 </Link>
 </div>
 )}
 </header>
 );
}
