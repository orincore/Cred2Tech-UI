'use client';
import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import theme from './theme';

const { colors, gradients } = theme;

export default function NotFound() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`min-h-screen relative overflow-hidden font-(family-name:--font-inter) pt-[68px] ${
      mounted && (theme === 'light' || resolvedTheme === 'light') ? 'bg-[var(--bg)]' : 'bg-[var(--bg)]'
    }`} 
      style={{ background: mounted && (theme === 'light' || resolvedTheme === 'light') ? colors.bg : colors.dark.bg }}>

      {/* grid */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',
          backgroundSize: '56px 56px'
        }} />

      {/* orbs */}
      <div className="absolute w-[500px] h-[500px] rounded-full top-[-140px] left-[-120px] opacity-80 pointer-events-none z-0"
        style={{ background: colors.dark.surface, filter: 'blur(70px)' }} />
      <div className="absolute w-[320px] h-[320px] rounded-full bottom-[-80px] right-[-60px] pointer-events-none z-0"
        style={{ background: 'rgba(29,255,155,.2)', filter: 'blur(70px)' }} />

      {/* MAIN CONTAINER: Centered wrapper */}
      <div className="relative z-10 w-full px-4 flex items-center justify-center min-h-screen">
        
        {/* CARD WRAPPER */}
        <div className={`relative w-full max-w-[440px] rounded-[20px] animate-[cardIn_.7s_ease_both] flex overflow-hidden shadow-[0_24px_80px_rgba(0,10,25,0.12)] border ${
          mounted && (theme === 'light' || resolvedTheme === 'light') ? 'bg-white border-[#e5e7eb]' : 'bg-[var(--surface)] border-[var(--outline)]'
        }`}
          style={{ 
            backgroundColor: mounted && (theme === 'light' || resolvedTheme === 'light') ? colors.surface : colors.dark.surface,
            borderColor: mounted && (theme === 'light' || resolvedTheme === 'light') ? colors.outline : colors.dark.outline 
          }}>
             
          {/* CONTENT */}
          <div className={`w-full shrink-0 z-10 relative flex flex-col justify-center items-center p-6 sm:p-8 lg:px-[2.8rem] lg:py-[3rem] min-h-[420px] sm:min-h-[460px] text-center ${
            mounted && (theme === 'light' || resolvedTheme === 'light') ? 'bg-white' : 'bg-[var(--surface)]'
          }`}
            style={{ backgroundColor: mounted && (theme === 'light' || resolvedTheme === 'light') ? colors.surface : colors.dark.surface }}>

            {/* Logo */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-28 h-auto sm:w-32 lg:w-36 shrink-0">
                <img
                  src={mounted && (theme === 'light' || resolvedTheme === 'light') ? "/logos/black-logo.png" : "/logos/white-logo.png"}
                  alt="Cred2Tech"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* 404 Icon */}
            <div className="mb-5 relative">
              <div className={`w-[90px] h-[90px] rounded-full flex items-center justify-center relative border-2 ${
                mounted && (theme === 'light' || resolvedTheme === 'light') ? 'border-transparent' : 'border-[var(--outline)]'
              }`}
                style={{ 
                  background: mounted && (theme === 'light' || resolvedTheme === 'light') ? '#0b2147' : colors.dark.surfaceLow,
                  borderColor: mounted && (theme === 'light' || resolvedTheme === 'light') ? 'transparent' : colors.dark.outline
                }}>
                <span className="text-white font-bold text-[2.8rem]">404</span>
              </div>
              {/* Error indicator */}
              <div className="absolute -top-2 -right-2 w-[28px] h-[28px] rounded-full bg-red-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px] text-white">error</span>
              </div>
            </div>

            {/* Heading */}
            <div className="mb-5">
              <h1 className={`font-bold text-[1.6rem] sm:text-[1.9rem] tracking-[-0.04em] leading-[1.1] mb-3 ${
                mounted && (theme === 'light' || resolvedTheme === 'light') ? 'text-[#1b1c1c]' : 'text-[var(--on-surface)]'
              }`}
                style={{ color: mounted && (theme === 'light' || resolvedTheme === 'light') ? '#1b1c1c' : colors.dark.onSurface }}>
                Page Not Found
              </h1>
              <p className={`text-[0.85rem] sm:text-[0.9rem] leading-[1.5] max-w-[350px] mx-auto ${
                mounted && (theme === 'light' || resolvedTheme === 'light') ? 'text-[#424751]' : 'text-[var(--on-muted)]'
              }`}
                style={{ color: mounted && (theme === 'light' || resolvedTheme === 'light') ? '#424751' : colors.dark.onMuted }}>
                Oops! The page you're looking for seems to have vanished into the digital void. 
                Let's get you back on track.
              </p>
            </div>

            {/* Error Badge */}
            <div className="flex items-center gap-2 bg-[#fef2f2] border border-[#fecaca] rounded-[8px] px-3 py-2.5 mb-6">
              <span className="material-symbols-outlined text-[18px] text-[#dc2626]">search_off</span>
              <div className="text-left">
                <span className="text-[0.7rem] font-semibold text-[#dc2626] block">Resource Missing</span>
                <span className="text-[0.65rem] text-[#7f1d1d]">The requested URL could not be found</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 w-full max-w-[280px]">
              <Link href="/"
                className={`flex-1 h-11 rounded-[10px] font-bold text-[0.75rem] tracking-[0.06em] uppercase text-white flex items-center justify-center gap-2 relative overflow-hidden transition-all cursor-pointer border-0 shadow-[0_4px_16px_rgba(11,33,71,.28)] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(11,33,71,.32)] ${
                  mounted && (theme === 'light' || resolvedTheme === 'light') ? 'bg-[#0b2147]' : 'bg-[var(--surface)]'
                }`}
                style={{ backgroundColor: mounted && (theme === 'light' || resolvedTheme === 'light') ? '#0b2147' : colors.dark.surface }}>
                <span className="material-symbols-outlined text-[14px]">home</span>
                <span>Go Home</span>
              </Link>
              
              <button onClick={() => window.history.back()}
                className={`flex-1 h-11 rounded-[10px] font-bold text-[0.75rem] tracking-[0.06em] uppercase flex items-center justify-center gap-2 relative overflow-hidden transition-all cursor-pointer border hover:-translate-y-px ${
                  mounted && (theme === 'light' || resolvedTheme === 'light') ? 'bg-[#f6f3f2] text-black border-[#c2c6d3]' : 'bg-[var(--surface-low)] text-[var(--on-surface)] border-[var(--outline)]'
                }`}
                style={{ 
                  backgroundColor: mounted && (theme === 'light' || resolvedTheme === 'light') ? colors.surfaceLow : colors.dark.surfaceLow, 
                  color: mounted && (theme === 'light' || resolvedTheme === 'light') ? colors.onSurface : colors.dark.onSurface,
                  borderColor: mounted && (theme === 'light' || resolvedTheme === 'light') ? colors.outline : colors.dark.outline 
                }}>
                <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                <span>Go Back</span>
              </button>
            </div>

            {/* Help Section */}
            <div className="mt-6 text-center">
              <p className="text-[0.7rem] text-[#727783] mb-2.5">
                Still can't find what you're looking for?
              </p>
              <Link href="/contact" 
                className="text-[0.75rem] font-semibold hover:underline transition-colors inline-flex items-center gap-1"
                style={{ color: colors.onMuted }}
                onMouseOver={(e) => e.currentTarget.style.color = colors.onSurface}
                onMouseOut={(e) => e.currentTarget.style.color = colors.onMuted}>
                <span className="material-symbols-outlined text-[14px]">support_agent</span>
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* keyframes */}
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(24px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          line-height: 1;
        }
      `}</style>
    </div>
  );
}
