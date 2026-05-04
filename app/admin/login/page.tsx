'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import theme from '../../theme';

const { colors, gradients } = theme;

type BtnState = 'idle' | 'loading' | 'success';

export default function AdminLoginPage() {
  const router = useRouter();
  
  // email/pwd form
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd]   = useState(false);
  const [loginState, setLoginState] = useState<BtnState>('idle');

  const handleLogin = () => {
    setLoginState('loading');
    setTimeout(() => {
      setLoginState('success');
      setTimeout(() => router.push('/'), 900);
    }, 1500);
  }

  return (
    <div className="min-h-screen relative overflow-hidden font-(family-name:--font-inter)"
      style={{ background: 'linear-gradient(135deg, #0b2147 0%, #050b18 100%)' }}>

      {/* grid */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',
          backgroundSize: '56px 56px'
        }} />

      {/* orbs */}
      <div className="absolute w-[500px] h-[500px] rounded-full top-[-140px] left-[-120px] opacity-80 pointer-events-none z-0"
        style={{ background: '#0d3a8e', filter: 'blur(70px)' }} />
      <div className="absolute w-[320px] h-[320px] rounded-full bottom-[-80px] right-[-60px] pointer-events-none z-0"
        style={{ background: 'rgba(29,255,155,.2)', filter: 'blur(70px)' }} />

      {/* MAIN CONTAINER: Centered wrapper */}
      <div className="relative z-10 w-full px-4 flex items-center justify-center min-h-screen">
        
        {/* CARD WRAPPER */}
        <div className="relative w-full max-w-[440px] bg-white rounded-[20px] animate-[cardIn_.7s_ease_both] flex overflow-hidden shadow-[0_24px_80px_rgba(0,10,25,0.12)] border border-[#e5e7eb]">
             
          {/* FORM CONTENT */}
          <div className="w-full shrink-0 z-10 bg-white relative flex flex-col justify-start p-6 sm:p-8 lg:pt-[2.6rem] lg:px-[2.8rem] lg:pb-[2.2rem] min-h-[500px] sm:min-h-[580px]">

            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-[30px] h-[30px] rounded-lg flex items-center justify-center relative" style={{background: '#0b2147'}}>
                <div className="absolute inset-[2px] bg-white rounded-[5px]" />
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="relative z-10">
                  <path d="M2.5 7h3.5M8 3.5l3.5 3.5L8 10.5" stroke="var(--on-surface)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-black text-[1.15rem] tracking-[-0.03em] text-[var(--on-surface)]">
                Cred<span className="text-[var(--on-surface)]">2</span>Tech
              </span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="font-bold text-[1.6rem] sm:text-[1.9rem] text-[#1b1c1c] tracking-[-0.04em] leading-[1.1]">Admin Access</h1>
              <p className="text-[0.8rem] sm:text-[0.85rem] text-[#424751] mt-1.5 mb-5 sm:mb-6">Sign in to your admin account.</p>
            </div>

            {/* Admin Badge */}
            <div className="flex items-center gap-2 bg-[var(--on-surface)]/10 border border-[var(--on-surface)]/20 rounded-[8px] px-3 py-2 mb-6">
              <span className="material-symbols-outlined text-[18px] text-[var(--on-surface)]">admin_panel_settings</span>
              <span className="text-[0.75rem] font-semibold text-[var(--on-surface)]">Administrator Portal</span>
            </div>

            {/* Email */}
            <div className="mb-3.5">
              <div className="flex items-center gap-2.5 bg-[#f6f3f2] border-[1.5px] border-[#c2c6d3] rounded-[10px] px-3.5 h-[50px] focus-within:border-[#a8c8ff] focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(0,63,125,.08)] transition-all relative overflow-hidden group">
                <span className="material-symbols-outlined text-[17px] text-[#727783] group-focus-within:text-[var(--on-surface)] transition-colors shrink-0">person</span>
                <input value={email} onChange={e => setEmail(e.target.value)}
                  type="email" placeholder="Email address" autoComplete="email"
                  suppressHydrationWarning
                  className="flex-1 bg-transparent border-0 outline-none text-[0.88rem] text-[#1b1c1c] placeholder-[#727783] font-(family-name:--font-inter)"/>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-focus-within:w-full transition-all duration-350 rounded-b-[10px]"
                  style={{ background: 'linear-gradient(90deg, #0b2147, #122a55)' }} />
              </div>
            </div>

            {/* Password */}
            <div className="mb-1">
              <div className="flex items-center gap-2.5 bg-[#f6f3f2] border-[1.5px] border-[#c2c6d3] rounded-[10px] px-3.5 h-[50px] focus-within:border-[#a8c8ff] focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(0,63,125,.08)] transition-all relative overflow-hidden group">
                <span className="material-symbols-outlined text-[17px] text-[#727783] group-focus-within:text-[var(--on-surface)] transition-colors shrink-0">lock</span>
                <input value={password} onChange={e => setPassword(e.target.value)}
                  type={showPwd ? 'text' : 'password'} placeholder="Password" autoComplete="current-password"
                  suppressHydrationWarning
                  className="flex-1 bg-transparent border-0 outline-none text-[0.88rem] text-[#1b1c1c] placeholder-[#727783] font-(family-name:--font-inter)"/>
                <button onClick={() => setShowPwd(p => !p)} type="button"
                  className="text-[#727783] hover:text-[var(--on-surface)] transition-colors shrink-0 cursor-pointer bg-transparent border-0">
                  <span className="material-symbols-outlined text-[16px]">{showPwd ? 'visibility_off' : 'visibility'}</span>
                </button>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-focus-within:w-full transition-all duration-350 rounded-b-[10px]"
                  style={{ background: 'linear-gradient(90deg, #0b2147, #122a55)' }} />
              </div>
            </div>

            <div className="flex justify-end mb-4">
              <Link href="/forgot-password" className="text-[0.72rem] font-semibold text-[var(--surface-low)] hover:text-[var(--on-surface)] hover:underline transition-colors">Forgot password?</Link>
            </div>

            {/* Sign In button */}
            <button onClick={handleLogin} disabled={loginState === 'loading'}
              suppressHydrationWarning
              className={`w-full h-12 rounded-[10px] font-bold text-[0.8rem] tracking-[0.06em] uppercase text-white flex items-center justify-center gap-2 relative overflow-hidden transition-all cursor-pointer border-0 shadow-[0_4px_16px_rgba(11,33,71,.28)] ${loginState === 'success' ? 'bg-[var(--on-surface)]' : 'bg-[var(--on-surface)] hover:bg-[var(--surface-low)] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(11,33,71,.32)]'}`}>
              {loginState === 'loading' && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
              {loginState === 'success' && (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Access Granted</span>
                </>
              )}
              {loginState === 'idle' && (
                <>
                  <span>Sign In</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </>
              )}
            </button>

            {/* Trust */}
            <div className="flex items-center justify-center gap-1.5 mt-3 text-[0.68rem] text-[#727783]">
              <span className="material-symbols-outlined text-[13px] text-[var(--on-surface)]">lock</span>
              256-bit encryption · Secure Admin Access
            </div>

            {/* Back to main login */}
            <p className="text-center text-[0.78rem] text-[#424751] mt-6">
              Not an admin?
              <Link href="/login" className="text-[var(--surface-low)] font-bold ml-1 hover:text-[var(--on-surface)] hover:underline transition-colors">Go to User Login</Link>
            </p>
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
