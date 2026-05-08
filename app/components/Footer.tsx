'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Footer() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && (theme === 'light' || resolvedTheme === 'light');

  return (
    <footer className="w-full py-6 sm:py-10 border-t border-[var(--outline)] bg-[var(--bg)] transition-colors duration-500">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-2 sm:grid-cols-5 gap-8 sm:gap-10 items-start">
        {/* Company Info */}
        <div className="col-span-2 sm:col-span-2 space-y-5">
          <div className="relative w-56 h-20 m-0 p-0 transition-all duration-300">
            <Image 
              src={isLight ? "/logos/black-logo.png" : "/logos/white-logo.png"} 
              alt="Cred2Tech" 
              fill
              sizes="224px"
              className="object-contain object-left" 
            />
          </div>
          <div className="space-y-1 text-xs text-[var(--on-muted)] leading-relaxed">
            <p className="font-bold text-[var(--on-surface)]">Sunby Credtech Pvt. Ltd.</p>
            <p>A1103, Amoda Valmark, Bengaluru, India</p>
          </div>
          <div className="space-y-1 text-xs">
            <a href="mailto:contact@cred2tech.com" className="block text-[var(--on-surface)] hover:underline font-bold transition-colors">contact@cred2tech.com</a>
            <div className="flex items-center gap-1 text-[var(--on-muted)]">
              <a href="tel:+918867522242" className="hover:text-[var(--on-surface)] transition-colors">8867522242</a>
              <span className="opacity-30">/</span>
              <a href="tel:+919886401608" className="hover:text-[var(--on-surface)] transition-colors">9886401608</a>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            {[
              { label: 'LinkedIn', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              { label: 'Twitter', d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
              { label: 'Facebook', d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
              { label: 'Instagram', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' }
            ].map((social) => (
              <a key={social.label} href="#" className="w-8 h-8 flex items-center justify-center bg-[var(--on-surface)]/[0.05] text-[var(--on-surface)] rounded-full hover:bg-[var(--on-surface)] hover:text-[var(--bg)] transition-all duration-300" aria-label={social.label}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="space-y-4">
          <h4 className="font-bold text-[var(--on-surface)] text-[10px] uppercase tracking-[0.2em]">Products</h4>
          <ul className="space-y-2 text-xs text-[var(--on-muted)]">
            <li><Link href="/dsa" className="hover:text-[var(--on-surface)] transition-colors hover:underline underline-offset-4 decoration-[var(--outline)]">For DSAs</Link></li>
            <li><Link href="/msme" className="hover:text-[var(--on-surface)] transition-colors hover:underline underline-offset-4 decoration-[var(--outline)]">For MSMEs</Link></li>
            <li><span className="opacity-50">Business Loans (Soon)</span></li>
            <li><span className="opacity-50">Govt Schemes (Soon)</span></li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h4 className="font-bold text-[var(--on-surface)] text-[10px] uppercase tracking-[0.2em]">Company</h4>
          <ul className="space-y-2 text-xs text-[var(--on-muted)]">
            <li><Link href="/about" className="hover:text-[var(--on-surface)] transition-colors hover:underline underline-offset-4 decoration-[var(--outline)]">About Us</Link></li>
            <li><Link href="/about#story" className="hover:text-[var(--on-surface)] transition-colors hover:underline underline-offset-4 decoration-[var(--outline)]">Our Story</Link></li>
            <li><Link href="/blogs" className="hover:text-[var(--on-surface)] transition-colors hover:underline underline-offset-4 decoration-[var(--outline)]">Blog</Link></li>
            <li><span className="opacity-50">Careers</span></li>
            <li><Link href="/contact" className="hover:text-[var(--on-surface)] transition-colors hover:underline underline-offset-4 decoration-[var(--outline)]">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-4">
          <h4 className="font-bold text-[var(--on-surface)] text-[10px] uppercase tracking-[0.2em]">Legal</h4>
          <ul className="space-y-2 text-xs text-[var(--on-muted)]">
            <li><a href="#" className="hover:text-[var(--on-surface)] transition-colors hover:underline underline-offset-4 decoration-[var(--outline)]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[var(--on-surface)] transition-colors hover:underline underline-offset-4 decoration-[var(--outline)]">Terms of Use</a></li>
            <li><a href="#" className="hover:text-[var(--on-surface)] transition-colors hover:underline underline-offset-4 decoration-[var(--outline)]">Data Processing</a></li>
            <li><a href="#" className="hover:text-[var(--on-surface)] transition-colors hover:underline underline-offset-4 decoration-[var(--outline)]">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 mt-8 sm:mt-10 pt-4 border-t border-[var(--outline)]/5">
        <p className="text-[10px] text-[var(--on-muted)] text-center tracking-wide">
          © {currentYear} Sunby Credtech Private Limited. All rights reserved. | CIN: [To be added] | Built in Bengaluru
        </p>
      </div>
    </footer>
  );
}
