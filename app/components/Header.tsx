'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from 'next-themes';
import { TravelingBorderButton } from './TravelingBorderButton';

const PLATFORM_LINKS = [
    {
        href: 'https://app.cred2tech.com/login',
        title: 'Sourcing Partner',
        subtitle: 'Login or create an account',
        color: '#2563eb',
        Icon: PartnerIcon,
    },
    {
        href: 'https://app.cred2tech.com/msme/login',
        title: 'MSME',
        subtitle: 'Login or create an account',
        color: '#6a3de8',
        Icon: MsmeIcon,
    },
    {
        href: 'https://scheme.cred2tech.com/',
        title: 'Govt Scheme Discovery',
        subtitle: 'Find schemes you qualify for',
        color: '#149a58',
        Icon: SchemeIcon,
    },
] as const;

function PartnerIcon() {
    return (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="10" cy="8" r="3.4" />
            <path d="M4 19.5c.9-3.6 3.3-5.4 6-5.4 1.5 0 2.9.5 4 1.6" />
            <path d="M17.5 14.5v5M15 17h5" />
        </svg>
    );
}

function MsmeIcon() {
    return (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 21V10.5L12 4l8 6.5V21" />
            <path d="M9 21v-6h6v6" />
            <path d="M9 12h.01M15 12h.01M12 8h.01" />
        </svg>
    );
}

function SchemeIcon() {
    return (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18" />
            <path d="M4 21V9.5L12 4l8 5.5V21" />
            <path d="M8 21v-7M12 21v-7M16 21v-7" />
        </svg>
    );
}

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const pathname = usePathname();
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

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
                            <Image
                                src={mounted && (theme === 'dark' || resolvedTheme === 'dark') ? "/logos/white-logo.png" : "/logos/black-logo.png"}
                                alt="Cred2Tech"
                                width={192}
                                height={48}
                                sizes="(max-width: 640px) 144px, (max-width: 1024px) 160px, 192px"
                                className="object-contain"
                                priority
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
                            >
                                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                                    Get Started
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </span>
                            </TravelingBorderButton>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-80 bg-[var(--surface)] border border-[var(--outline)] rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="px-4 pt-3.5 pb-1">
                                        <span className="text-[11px] font-semibold uppercase tracking-wide text-[var(--on-muted)]">Continue as</span>
                                    </div>
                                    <div className="p-1.5 pt-0.5">
                                        {PLATFORM_LINKS.map((link) => (
                                            <a
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setDropdownOpen(false)}
                                                className="group flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-[var(--surface-low)] transition-colors"
                                            >
                                                <span
                                                    className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                                                    style={{ background: `${link.color}1a`, color: link.color }}
                                                >
                                                    <link.Icon />
                                                </span>
                                                <span className="flex-1 min-w-0">
                                                    <span className="block text-[14px] font-semibold text-[var(--on-surface)]">{link.title}</span>
                                                    <span className="block text-[12px] text-[var(--on-muted)]">{link.subtitle}</span>
                                                </span>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
                                                    className="shrink-0 text-[var(--on-muted)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                                                    <path d="m9 5.5 6.5 6.5L9 18.5" />
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
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

                    <span className="block px-2 mb-2 text-[11px] font-semibold uppercase tracking-wide text-[var(--on-muted)]">Continue as</span>
                    <div className="space-y-1.5">
                        {PLATFORM_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-3 py-3 rounded-xl border border-[var(--outline)] bg-[var(--surface)] active:bg-[var(--surface-low)] transition-colors"
                            >
                                <span
                                    className="flex items-center justify-center w-11 h-11 rounded-lg shrink-0"
                                    style={{ background: `${link.color}1a`, color: link.color }}
                                >
                                    <link.Icon />
                                </span>
                                <span className="flex-1 min-w-0">
                                    <span className="block text-[15px] font-semibold text-[var(--on-surface)]">{link.title}</span>
                                    <span className="block text-[12.5px] text-[var(--on-muted)]">{link.subtitle}</span>
                                </span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[var(--on-muted)]">
                                    <path d="m9 5.5 6.5 6.5L9 18.5" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

