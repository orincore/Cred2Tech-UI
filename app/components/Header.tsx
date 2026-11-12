'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from 'next-themes';
import { TravelingBorderButton } from './TravelingBorderButton';
import ThemeLogo from './ThemeLogo';
import { PlatformMenu } from './header/PlatformMenu';
import './header/platform-menu.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const pathname = usePathname();
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (!dropdownOpen) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDropdownOpen(false); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [dropdownOpen]);

    const openDropdown = () => {
        if (dropdownCloseTimer.current) {
            clearTimeout(dropdownCloseTimer.current);
            dropdownCloseTimer.current = null;
        }
        setDropdownOpen(true);
    };

    const scheduleDropdownClose = () => {
        dropdownCloseTimer.current = setTimeout(() => {
            setDropdownOpen(false);
        }, 300);
    };

    useEffect(() => {
        return () => {
            if (dropdownCloseTimer.current) clearTimeout(dropdownCloseTimer.current);
        };
    }, []);

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

    const handleLogoClick = () => {
        // Next.js doesn't scroll-reset when the Link's href matches the
        // current route, so clicking the logo while already on the
        // homepage (but scrolled down) would otherwise do nothing.
        if (pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header id="site-header" className={`fixed top-0 left-0 right-0 z-[1000] bg-[var(--bg)] border-b border-[var(--outline)] lg:bg-transparent lg:border-none transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
                <nav id="header-nav" className="flex justify-between items-center h-[48px] sm:h-[56px]">

                    {/* ── LOGO ── */}
                    <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2 flex-shrink-0 sm:gap-3">
                        <div className="relative w-36 h-auto sm:w-40 lg:w-48 shrink-0">
                            <ThemeLogo
                                // 3:2, the logo files' real aspect ratio (2400x1600). It used to be
                                // declared 192x48, which made Next warn about a modified aspect ratio
                                // (the rendered size comes from CSS and `height: auto`, so it's unchanged).
                                width={192}
                                height={128}
                                sizes="(max-width: 640px) 144px, (max-width: 1024px) 160px, 192px"
                                className="object-contain"
                                fetchPriority="high"
                                style={{ height: 'auto' }}
                            />
                        </div>
                    </Link>

                    {/* ── NAV LINKS (Pill container) ── */}
                    <div className={`hidden lg:flex items-center px-2 py-1.5 rounded-xl backdrop-blur-md shadow-lg border transition-all duration-300 
                        ${mounted && (theme === 'light' || resolvedTheme === 'light') 
                            ? 'bg-white/70 border-black/5' 
                            : 'bg-[var(--surface-low)]/80 border-white/5'}`}>
                        
                        {/* Home */}
                        <Link href="/" suppressHydrationWarning className={`px-5 py-2 text-[14px] font-medium font-(family-name:--font-inter) transition-all duration-300 relative
                            ${mounted && (theme === 'light' || resolvedTheme === 'light')
                                ? (pathname === '/' ? 'text-black' : 'text-black/60 hover:text-black')
                                : (pathname === '/' ? 'text-white' : 'text-white hover:text-white')
                            }`}>
                            Home
                            {pathname === '/' && (
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

                        {/* Contact Us */}
                        <Link href="/contact" className={`px-5 py-2 text-[14px] font-medium font-(family-name:--font-inter) transition-all duration-300 relative 
                            ${mounted && (theme === 'light' || resolvedTheme === 'light')
                                ? (pathname === '/contact' ? 'text-black' : 'text-black/60 hover:text-black')
                                : (pathname === '/contact' ? 'text-white' : 'text-white hover:text-white')
                            }`}>
                            Contact Us
                            {pathname === '/contact' && (
                                <div className={`absolute bottom-1 left-5 right-5 h-0.5 rounded-full ${mounted && (theme === 'light' || resolvedTheme === 'light') ? 'bg-black' : 'bg-white'}`}></div>
                            )}
                        </Link>
                    </div>

                    {/* Theme Toggle & Get Started Dropdown (desktop only) */}
                    <div className="hidden lg:flex items-center gap-4">
                        <ThemeToggle />
                        <div className="relative" onMouseEnter={openDropdown} onMouseLeave={scheduleDropdownClose}>
                            <TravelingBorderButton
                                onClick={() => setDropdownOpen((v) => !v)}
                                size="sm"
                                showIcon={false}
                                solid
                            >
                                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                                    Get Started
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </span>
                            </TravelingBorderButton>
                            <div className="gsm" data-open={dropdownOpen} aria-hidden={!dropdownOpen} inert={!dropdownOpen}>
                                <PlatformMenu open={dropdownOpen} isDark={mounted && resolvedTheme === 'dark'} onNavigate={() => setDropdownOpen(false)} />
                            </div>
                        </div>
                    </div>
                    {/* Mobile theme toggle & hamburger */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button 
                            onClick={() => {
                                // Toggle theme using next-themes setTheme
                                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
                            }}
                            className="p-2 text-[var(--on-surface)] hover:text-[var(--on-surface)]/80 rounded-lg"
                            suppressHydrationWarning
                        >
                            {mounted && (resolvedTheme === 'dark' ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            ))}
                        </button>
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-[var(--on-surface)] hover:text-[var(--on-surface)]/80 rounded-lg" id="mobile-menu-btn" suppressHydrationWarning>
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
                <div id="mobile-nav-drawer" className="fixed top-[72px] left-4 right-4 max-h-[80vh] overflow-y-auto bg-[var(--bg)] border border-[var(--outline)] p-5 z-[999] shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 rounded-2xl"
                >
                    <div className="flex flex-col gap-1">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-[16px] font-medium rounded-xl ${pathname === '/' ? 'bg-[var(--surface)] text-[var(--on-surface)]' : 'text-[var(--on-muted)] hover:bg-[var(--surface)]'
                            }`}>Home</Link>

                        <div className="h-px bg-[var(--outline)] my-3 mx-2" />

                        <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-[16px] font-medium rounded-xl ${pathname === '/about' ? 'bg-[var(--surface)] text-[var(--on-surface)]' : 'text-[var(--on-muted)] hover:bg-[var(--surface)]'
                            }`}>About Us</Link>
                        <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-[16px] font-medium rounded-xl ${pathname === '/how-it-works' ? 'bg-[var(--surface)] text-[var(--on-surface)]' : 'text-[var(--on-muted)] hover:bg-[var(--surface)]'
                            }`}>How It Works</Link>
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-[16px] font-medium rounded-xl ${pathname === '/contact' ? 'bg-[var(--surface)] text-[var(--on-surface)]' : 'text-[var(--on-muted)] hover:bg-[var(--surface)]'
                            }`}>Contact</Link>
                    </div>

                    <div className="h-px bg-[var(--outline)] my-5" />

                    <PlatformMenu roomy isDark={mounted && resolvedTheme === 'dark'} onNavigate={() => setMobileMenuOpen(false)} />
                </div>
            )}
        </header>
    );
}

