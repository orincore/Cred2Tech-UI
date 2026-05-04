'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from 'next-themes';
import { TravelingBorderButton } from './TravelingBorderButton';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
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
        <header id="site-header" className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${scrolled ? 'bg-[var(--surface)]/90 backdrop-blur-md py-2 shadow-sm' : 'bg-transparent py-4'}`}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
                <nav id="header-nav" className="flex justify-between items-center h-[48px] sm:h-[56px]">

                    {/* ── LOGO ── */}
                    <Link href="/" className="flex items-center gap-2 flex-shrink-0 sm:gap-3 group">
                        <div className="relative w-36 h-auto sm:w-40 lg:w-48 shrink-0 transition-transform duration-300 group-hover:scale-105">
                            <img
                                src={mounted && (theme === 'light' || resolvedTheme === 'light') ? "/logos/credtech-footer-logo.png" : "/logos/logo.png"}
                                alt="Cred2Tech"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </Link>

                    {/* ── NAV LINKS (Pill container) ── */}
                    <div className={`hidden lg:flex items-center px-2 py-1.5 rounded-xl backdrop-blur-md shadow-lg border transition-all duration-300 
                        ${mounted && (theme === 'light' || resolvedTheme === 'light') 
                            ? 'bg-white/70 border-black/5' 
                            : 'bg-[var(--surface-low)]/80 border-white/5'}`}>
                        
                        {/* For DSA */}
                        <div className="relative group">
                            <Link href="/dsa" suppressHydrationWarning className={`flex items-center px-5 py-2 text-[14px] font-medium font-(family-name:--font-inter) transition-all duration-300 relative 
                                ${mounted && (theme === 'light' || resolvedTheme === 'light')
                                    ? (pathname === '/dsa' ? 'text-black' : 'text-black/60 hover:text-black')
                                    : (pathname === '/dsa' ? 'text-white' : 'text-white hover:text-white')
                                }`}>
                                For DSA
                                {pathname === '/dsa' && (
                                    <div className={`absolute bottom-1 left-5 right-5 h-0.5 rounded-full ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'bg-black' : 'bg-white'}`}></div>
                                )}
                            </Link>

                            {/* For DSA Dropdown */}
                            <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[340px] z-[1050]">
                                <div className={`shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] border overflow-hidden text-left p-3 rounded-xl transition-all duration-300 relative
                                    ${mounted && (theme === 'light' || resolvedTheme === 'light')
                                        ? 'bg-white border-black/5'
                                        : 'bg-[var(--surface)] border-white/10'}`}>
                                    {/* Arrow */}
                                    <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-l border-t transition-all duration-300
                                        ${mounted && (theme === 'light' || resolvedTheme === 'light')
                                            ? 'bg-white border-black/5'
                                            : 'bg-[var(--surface)] border-white/10'}`} />
                                    
                                    <Link href="/dsa#eligibility" className={`flex items-center gap-3 p-3 transition-colors rounded-lg ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'hover:bg-black/5' : 'hover:bg-white/5'}`}>
                                        <span className="material-symbols-outlined text-indigo-500 text-[20px]">fact_check</span>
                                        <span className={`font-medium text-[13px] ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'text-black/80' : 'text-white/90'}`}>Check Loan Eligibility</span>
                                    </Link>
                                    <Link href="/dsa#crm" className={`flex items-center gap-3 p-3 transition-colors rounded-lg ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'hover:bg-black/5' : 'hover:bg-white/5'}`}>
                                        <span className="material-symbols-outlined text-indigo-500 text-[20px]">view_kanban</span>
                                        <span className={`font-medium text-[13px] ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'text-black/80' : 'text-white/90'}`}>DSA CRM</span>
                                    </Link>
                                    <Link href="/dsa#vault" className={`flex items-center gap-3 p-3 transition-colors rounded-lg ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'hover:bg-black/5' : 'hover:bg-white/5'}`}>
                                        <span className="material-symbols-outlined text-indigo-500 text-[20px]">folder_shared</span>
                                        <span className={`font-medium text-[13px] ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'text-black/80' : 'text-white/90'}`}>Document Vault</span>
                                    </Link>
                                    <Link href="/dsa#invoice" className={`flex items-center gap-3 p-3 transition-colors rounded-lg ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'hover:bg-black/5' : 'hover:bg-white/5'}`}>
                                        <span className="material-symbols-outlined text-indigo-500 text-[20px]">receipt_long</span>
                                        <span className={`font-medium text-[13px] ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'text-black/80' : 'text-white/90'}`}>Invoice Management</span>
                                    </Link>
                                    <Link href="/dsa#performance" className={`flex items-center gap-3 p-3 transition-colors rounded-lg ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'hover:bg-black/5' : 'hover:bg-white/5'}`}>
                                        <span className="material-symbols-outlined text-indigo-500 text-[20px]">monitoring</span>
                                        <span className={`font-medium text-[13px] ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'text-black/80' : 'text-white/90'}`}>Performance Tracking</span>
                                    </Link>
                                    <div className="flex items-center gap-3 p-3 cursor-default opacity-70">
                                        <span className="material-symbols-outlined text-indigo-500 text-[20px]">policy</span>
                                        <span className={`font-medium text-[13px] ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'text-black/60' : 'text-white/90'}`}>MSME Govt Scheme Discovery</span>
                                        <span className="text-[9px] bg-amber-500/20 text-amber-600 px-1.5 py-0.5 rounded font-bold ml-auto">SOON</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* For MSME */}
                        <div className="relative group">
                            <Link href="/msme" suppressHydrationWarning className={`flex items-center px-5 py-2 text-[14px] font-medium font-(family-name:--font-inter) transition-all duration-300 relative 
                                ${mounted && (theme === 'light' || resolvedTheme === 'light')
                                    ? (pathname === '/msme' ? 'text-black' : 'text-black/60 hover:text-black')
                                    : (pathname === '/msme' ? 'text-white' : 'text-white hover:text-white')
                                }`}>
                                For MSME
                                {pathname === '/msme' && (
                                    <div className={`absolute bottom-1 left-5 right-5 h-0.5 rounded-full ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'bg-black' : 'bg-white'}`}></div>
                                )}
                            </Link>

                            {/* For MSME Dropdown */}
                            <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[340px] z-[1050]">
                                <div className={`shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] border overflow-hidden text-left p-3 rounded-xl transition-all duration-300 relative
                                    ${mounted && (theme === 'light' || resolvedTheme === 'light')
                                        ? 'bg-white border-black/5'
                                        : 'bg-[var(--surface)] border-white/10'}`}>
                                    {/* Arrow */}
                                    <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-l border-t transition-all duration-300
                                        ${mounted && (theme === 'light' || resolvedTheme === 'light')
                                            ? 'bg-white border-black/5'
                                            : 'bg-[var(--surface)] border-white/10'}`} />

                                    <Link href="/msme#eligibility" className={`flex items-center gap-3 p-3 transition-colors rounded-lg ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'hover:bg-black/5' : 'hover:bg-white/5'}`}>
                                        <span className="material-symbols-outlined text-indigo-500 text-[20px]">fact_check</span>
                                        <span className={`font-medium text-[13px] ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'text-black/80' : 'text-white/90'}`}>Check Loan Eligibility</span>
                                    </Link>
                                    <Link href="/msme#vault" className={`flex items-center gap-3 p-3 transition-colors rounded-lg ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'hover:bg-black/5' : 'hover:bg-white/5'}`}>
                                        <span className="material-symbols-outlined text-indigo-500 text-[20px]">folder_shared</span>
                                        <span className={`font-medium text-[13px] ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'text-black/80' : 'text-white/90'}`}>Document Vault</span>
                                    </Link>
                                    <Link href="/msme#cases" className={`flex items-center gap-3 p-3 transition-colors rounded-lg ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'hover:bg-black/5' : 'hover:bg-white/5'}`}>
                                        <span className="material-symbols-outlined text-indigo-500 text-[20px]">work</span>
                                        <span className={`font-medium text-[13px] ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'text-black/80' : 'text-white/90'}`}>My Cases</span>
                                    </Link>
                                    <div className="flex items-center gap-3 p-3 cursor-default opacity-70">
                                        <span className="material-symbols-outlined text-indigo-500 text-[20px]">policy</span>
                                        <span className={`font-medium text-[13px] ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'text-black/60' : 'text-white/90'}`}>MSME Govt Scheme Discovery</span>
                                        <span className="text-[9px] bg-amber-500/20 text-amber-600 px-1.5 py-0.5 rounded font-bold ml-auto">SOON</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Us */}
                        <Link href="/about" className={`px-5 py-2 text-[14px] font-medium font-(family-name:--font-inter) transition-all duration-300 relative 
                            ${mounted && (theme === 'light' || resolvedTheme === 'light')
                                ? (pathname === '/about' ? 'text-black' : 'text-black/60 hover:text-black')
                                : (pathname === '/about' ? 'text-white' : 'text-white hover:text-white')
                            }`}>
                            About Us
                            {pathname === '/about' && (
                                <div className={`absolute bottom-1 left-5 right-5 h-0.5 rounded-full ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'bg-black' : 'bg-white'}`}></div>
                            )}
                        </Link>

                        {/* How It Works */}
                        <Link href="/how-it-works" className={`px-5 py-2 text-[14px] font-medium font-(family-name:--font-inter) transition-all duration-300 relative 
                            ${mounted && (theme === 'light' || resolvedTheme === 'light')
                                ? (pathname === '/how-it-works' ? 'text-black' : 'text-black/60 hover:text-black')
                                : (pathname === '/how-it-works' ? 'text-white' : 'text-white hover:text-white')
                            }`}>
                            How It Works
                            {pathname === '/how-it-works' && (
                                <div className={`absolute bottom-1 left-5 right-5 h-0.5 rounded-full ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'bg-black' : 'bg-white'}`}></div>
                            )}
                        </Link>

                        {/* Blogs */}
                        <Link href="/blogs" className={`px-5 py-2 text-[14px] font-medium font-(family-name:--font-inter) transition-all duration-300 relative 
                            ${mounted && (theme === 'light' || resolvedTheme === 'light')
                                ? (pathname?.startsWith('/blogs') ? 'text-black' : 'text-black/60 hover:text-black')
                                : (pathname?.startsWith('/blogs') ? 'text-white' : 'text-white hover:text-white')
                            }`}>
                            Blogs
                            {pathname?.startsWith('/blogs') && (
                                <div className={`absolute bottom-1 left-5 right-5 h-0.5 rounded-full ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'bg-black' : 'bg-white'}`}></div>
                            )}
                        </Link>
                    </div>

                    {/* Theme Toggle & Contact Us Button */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <TravelingBorderButton href="/contact" size="sm" showIcon={false}>
                            Contact Us
                        </TravelingBorderButton>
                        {/* Mobile hamburger */}
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-white hover:text-white/80 ml-1 bg-white/5 border border-white/10 rounded-lg" id="mobile-menu-btn" suppressHydrationWarning>
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
                <div id="mobile-nav-drawer" className="fixed top-[72px] left-0 right-0 max-h-[80vh] overflow-y-auto bg-[var(--bg)] border-b border-[var(--outline)] p-5 z-[999] shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300"
                >
                    <div className="flex flex-col gap-1">
                        <div className="font-medium text-[var(--on-surface)] opacity-70 px-2 py-2 text-[12px] uppercase tracking-wider">For DSA</div>
                        <Link href="/dsa" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-white/80 rounded-xl hover:bg-white/5">Overview</Link>
                        <Link href="/dsa#eligibility" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-white/80 rounded-xl hover:bg-white/5">Check Loan Eligibility</Link>
                        <Link href="/dsa#crm" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-white/80 rounded-xl hover:bg-white/5">DSA CRM</Link>
                        <Link href="/dsa#vault" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-white/80 rounded-xl hover:bg-white/5">Document Vault</Link>
                        <Link href="/dsa#invoice" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-white/80 rounded-xl hover:bg-white/5">Invoice Management</Link>
                        <Link href="/dsa#performance" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-white/80 rounded-xl hover:bg-white/5">Performance Tracking</Link>

                        <div className="h-px bg-white/10 my-3 mx-2" />

                        <div className="font-medium text-[var(--on-surface)] opacity-70 px-2 py-2 text-[12px] uppercase tracking-wider">For MSME</div>
                        <Link href="/msme" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-white/80 rounded-xl hover:bg-white/5">Overview</Link>
                        <Link href="/msme#eligibility" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-white/80 rounded-xl hover:bg-white/5">Check Loan Eligibility</Link>
                        <Link href="/msme#vault" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-white/80 rounded-xl hover:bg-white/5">Document Vault</Link>
                        <Link href="/msme#cases" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-[15px] text-white/80 rounded-xl hover:bg-white/5">My Cases</Link>

                        <div className="h-px bg-white/10 my-3 mx-2" />

                        <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-[16px] font-medium rounded-xl ${pathname === '/about' ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'
                            }`}>About Us</Link>
                        <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-[16px] font-medium rounded-xl ${pathname === '/how-it-works' ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'
                            }`}>How It Works</Link>
                        <Link href="/blogs" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-[16px] font-medium rounded-xl ${pathname?.startsWith('/blogs') ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'
                            }`}>Blogs</Link>
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-[16px] font-medium rounded-xl ${pathname === '/contact' ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'
                            }`}>Contact</Link>
                    </div>

                    <div className="h-px bg-white/10 my-5" />

                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-center gap-2 px-5 py-4 font-(family-name:--font-inter) text-[15px] font-medium text-white rounded-xl bg-gradient-to-r from-[#4E54C8] to-[#8F94FB] shadow-[0_0_20px_rgba(78,84,200,0.4)]">
                        Get Started
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            )}
        </header>
    );
}

