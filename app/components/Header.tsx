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
                    <Link href="/" className="flex items-center gap-2 flex-shrink-0 sm:gap-3">
                        <div className="relative w-36 h-auto sm:w-40 lg:w-48 shrink-0">
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
                        <Link href="/dsa" suppressHydrationWarning className={`px-5 py-2 text-[14px] font-medium font-(family-name:--font-inter) transition-all duration-300 relative
                            ${mounted && (theme === 'light' || resolvedTheme === 'light')
                                ? (pathname === '/dsa' ? 'text-black' : 'text-black/60 hover:text-black')
                                : (pathname === '/dsa' ? 'text-white' : 'text-white hover:text-white')
                            }`}>
                            For DSA
                            {pathname === '/dsa' && (
                                <div className={`absolute bottom-1 left-5 right-5 h-0.5 rounded-full ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'bg-black' : 'bg-white'}`}></div>
                            )}
                        </Link>

                        {/* For MSME */}
                        <Link href="/msme" suppressHydrationWarning className={`px-5 py-2 text-[14px] font-medium font-(family-name:--font-inter) transition-all duration-300 relative
                            ${mounted && (theme === 'light' || resolvedTheme === 'light')
                                ? (pathname === '/msme' ? 'text-black' : 'text-black/60 hover:text-black')
                                : (pathname === '/msme' ? 'text-white' : 'text-white hover:text-white')
                            }`}>
                            For MSME
                            {pathname === '/msme' && (
                                <div className={`absolute bottom-1 left-5 right-5 h-0.5 rounded-full ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'bg-black' : 'bg-white'}`}></div>
                            )}
                        </Link>

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
                    </div>

                    {/* Theme Toggle & Contact Us Button (desktop only) */}
                    <div className="hidden lg:flex items-center gap-4">
                        <ThemeToggle />
                        <TravelingBorderButton href="/contact" size="sm" showIcon={false}>
                            Contact Us
                        </TravelingBorderButton>
                    </div>
                    {/* Mobile hamburger */}
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-[var(--on-surface)] hover:text-[var(--on-surface)]/80 bg-[var(--surface)] border border-[var(--outline)] rounded-lg" id="mobile-menu-btn" suppressHydrationWarning>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </nav>
            </div>

            {/* Mobile drawer */}
            {mobileMenuOpen && (
                <div id="mobile-nav-drawer" className="fixed top-[72px] left-4 right-4 max-h-[80vh] overflow-y-auto bg-[var(--bg)] border border-[var(--outline)] p-5 z-[999] shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 rounded-2xl"
                >
                    <div className="flex flex-col gap-1">
                        <Link href="/dsa" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-[16px] font-medium rounded-xl ${pathname === '/dsa' ? 'bg-[var(--surface)] text-[var(--on-surface)]' : 'text-[var(--on-muted)] hover:bg-[var(--surface)]'
                            }`}>For DSA</Link>
                        <Link href="/msme" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-[16px] font-medium rounded-xl ${pathname === '/msme' ? 'bg-[var(--surface)] text-[var(--on-surface)]' : 'text-[var(--on-muted)] hover:bg-[var(--surface)]'
                            }`}>For MSME</Link>

                        <div className="h-px bg-[var(--outline)] my-3 mx-2" />

                        <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-[16px] font-medium rounded-xl ${pathname === '/about' ? 'bg-[var(--surface)] text-[var(--on-surface)]' : 'text-[var(--on-muted)] hover:bg-[var(--surface)]'
                            }`}>About Us</Link>
                        <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-[16px] font-medium rounded-xl ${pathname === '/how-it-works' ? 'bg-[var(--surface)] text-[var(--on-surface)]' : 'text-[var(--on-muted)] hover:bg-[var(--surface)]'
                            }`}>How It Works</Link>
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-[16px] font-medium rounded-xl ${pathname === '/contact' ? 'bg-[var(--surface)] text-[var(--on-surface)]' : 'text-[var(--on-muted)] hover:bg-[var(--surface)]'
                            }`}>Contact</Link>
                    </div>

                    <div className="h-px bg-[var(--outline)] my-5" />

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

