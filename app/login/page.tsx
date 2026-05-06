'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { countries } from '../lib/countries';

type Role = 'dsa' | 'msme';
type BtnState = 'idle' | 'loading' | 'success';

const roleData: Record<Role, { h: string; s: string }> = {
  dsa:   { h: 'Welcome',  s: 'Sign in to manage your fintech pipeline.' },
  msme:  { h: 'MSME Login',    s: 'Enter your mobile number to receive an OTP.' },
};

const roles: { key: Role; icon: string; label: string }[] = [
  { key: 'dsa',   icon: 'support_agent',       label: 'DSA / Agent' },
  { key: 'msme',  icon: 'storefront',           label: 'MSME' },
];

export default function LoginPage() {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [role, setRole] = useState<Role>('dsa');
  const [heading, setHeading] = useState(roleData.dsa.h);
  const [sub, setSub]         = useState(roleData.dsa.s);
  const [headingVisible, setHeadingVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  // email/pwd form
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd]   = useState(false);
  const [loginState, setLoginState] = useState<BtnState>('idle');

  // otp form
  const [otpStep, setOtpStep]   = useState<1 | 2>(1);
  const [dialCode, setDialCode] = useState('+91');
  const [phone, setPhone]       = useState('');
  const [phoneMask, setPhoneMask] = useState('');
  const [otp, setOtp]           = useState(['', '', '', '', '', '']);
  const [timer, setTimer]       = useState('2:00');
  const [resendActive, setResendActive] = useState(false);
  const [sendState, setSendState]   = useState<BtnState>('idle');
  const [verifyState, setVerifyState] = useState<BtnState>('idle');
  const [otpError, setOtpError] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const otpRefs  = useRef<(HTMLInputElement | null)[]>([]);



  function switchRole(r: Role) {
    setRole(r);
    setHeadingVisible(false);
    setTimeout(() => {
      setHeading(roleData[r].h);
      setSub(roleData[r].s);
      setHeadingVisible(true);
    }, 180);
    if (r !== 'msme') setOtpStep(1);
  }

  // timer
  function startTimer(sec: number) {
    if (timerRef.current) clearInterval(timerRef.current);
    setResendActive(false);
    let rem = sec;
    function tick() {
      const m = Math.floor(rem / 60);
      const s = String(rem % 60).padStart(2, '0');
      setTimer(`${m}:${s}`);
      if (rem <= 0) { clearInterval(timerRef.current!); setResendActive(true); }
      rem--;
    }
    tick();
    timerRef.current = setInterval(tick, 1000);
  }

  function handleSendOtp() {
    if (phone.length < 10) return;
    setSendState('loading');
    setTimeout(() => {
      setPhoneMask(`${dialCode} ••••••${phone.slice(-4)}`);
      setOtpStep(2);
      startTimer(120);
      setSendState('idle');
      setTimeout(() => otpRefs.current[0]?.focus(), 100);
    }, 1200);
  }

  function handleOtpInput(val: string, idx: number) {
    const digit = val.replace(/\D/g, '').slice(-1);
    const next = [...otp];
    next[idx] = digit;
    setOtp(next);
    if (digit && idx < 5) otpRefs.current[idx + 1]?.focus();
  }

  function handleOtpKey(e: React.KeyboardEvent, idx: number) {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      const next = [...otp]; next[idx - 1] = '';
      setOtp(next);
      otpRefs.current[idx - 1]?.focus();
    }
  }

  function handleOtpPaste(e: React.ClipboardEvent) {
    e.preventDefault();
    const digits = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6).split('');
    const next = [...otp];
    digits.forEach((d, i) => { next[i] = d; });
    setOtp(next);
    otpRefs.current[Math.min(digits.length, 5)]?.focus();
  }

  function handleVerify() {
    if (otp.join('').length < 6) {
      setOtpError(true);
      setTimeout(() => setOtpError(false), 500);
      return;
    }
    setVerifyState('loading');
    setTimeout(() => {
      if (timerRef.current) clearInterval(timerRef.current);
      setVerifyState('success');
      setTimeout(() => router.push('/'), 900);
    }, 1500);
  }

  const handleLogin = () => {
    setLoginState('loading');
    setTimeout(() => {
      setLoginState('success');
      setTimeout(() => router.push('/'), 900);
    }, 1500);
  }

  return (
    <div>
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative overflow-hidden font-(family-name:--font-inter) bg-[var(--bg)] transition-colors duration-500">

      {/* grid */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.06]"
        style={{
          backgroundImage: 'linear-gradient(var(--on-surface) 1px,transparent 1px),linear-gradient(90deg,var(--on-surface) 1px,transparent 1px)',
          backgroundSize: '56px 56px'
        }} />

      {/* orbs */}
      <div className="absolute w-[500px] h-[500px] rounded-full top-[-140px] left-[-120px] opacity-80 pointer-events-none z-0 bg-[var(--on-surface)]/10 blur-[70px]" />
      <div className="absolute w-[320px] h-[320px] rounded-full bottom-[-80px] right-[-60px] pointer-events-none z-0 bg-[var(--on-surface)]/5 blur-[70px]" />

      {/* MAIN CONTAINER: Centered wrapper */}
      <div className="relative z-10 w-full px-4 flex justify-center lg:mt-24">
        
        {/* WIDE CARD WRAPPER */}
        <div className="relative w-full max-w-[440px] lg:max-w-[900px] bg-[var(--surface)] rounded-[20px] animate-[cardIn_.7s_ease_both] flex overflow-hidden shadow-[0_24px_80px_rgba(0,10,25,0.12)] border border-[var(--outline)]">
             
          {/* LEFT SIDE: FORM CONTENT */}
          <div className="w-full lg:w-[440px] shrink-0 z-10 bg-[var(--surface)] relative border-r border-[var(--outline)] flex flex-col justify-start p-6 sm:p-8 lg:pt-[2.6rem] lg:px-[2.8rem] lg:pb-[2.2rem] min-h-[500px] sm:min-h-[580px]">

        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="relative w-36 h-auto sm:w-40 lg:w-48 shrink-0">
            <img
              src={mounted && (resolvedTheme === 'light') ? "/logos/black-logo.png" : "/logos/white-logo.png"}
              alt="Cred2Tech"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Heading */}
        <div className={`transition-all duration-180 ${headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1.5'}`}>
          <h1 className="font-bold text-[1.6rem] sm:text-[1.9rem] text-[var(--on-surface)] tracking-[-0.04em] leading-[1.1]">{heading}</h1>
          <p className="text-[0.8rem] sm:text-[0.85rem] text-[var(--on-muted)] mt-1.5 mb-5 sm:mb-6">{sub}</p>
        </div>

        {/* Role tabs */}
        <div className="flex bg-[var(--surface-low)] border border-[var(--outline)] rounded-[10px] p-[3px] mb-6 relative">
          <div className="absolute top-[3px] left-[3px] bottom-[3px] rounded-[8px] pointer-events-none transition-transform duration-300 ease-out"
            style={{ 
              width: 'calc((100% - 6px) / 2)',
              transform: `translateX(${['dsa','msme'].indexOf(role) * 100}%)`,
              background: 'var(--on-surface)', 
              boxShadow: '0 2px 8px rgba(0,63,125,.3)'
            }} />
          {roles.map((r) => (
            <button key={r.key}
              onClick={() => switchRole(r.key)}
              suppressHydrationWarning
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-1 text-[0.72rem] font-semibold rounded-[7px] relative z-10 transition-colors duration-250 whitespace-nowrap cursor-pointer border-0 bg-transparent ${role === r.key ? 'text-[var(--bg)]' : 'text-[var(--on-muted)] hover:text-[var(--on-surface)]'}`}>
              <span className="material-symbols-outlined text-[14px]">{r.icon}</span>
              {r.label}
            </button>
          ))}
        </div>

        {/* ── EMAIL/PASSWORD FORM ── */}
        {role !== 'msme' && (
          <div className="transition-all duration-280">
            {/* Email */}
            <div className="mb-3.5">
              <div className="flex items-center gap-2.5 bg-[var(--surface-low)] border-[1.5px] border-[var(--outline)] rounded-[10px] px-3.5 h-[50px] focus-within:border-[var(--on-surface)] focus-within:bg-[var(--surface)] focus-within:shadow-[0_0_0_3px_rgba(78,84,200,.08)] transition-all relative overflow-hidden group">
                <span className="material-symbols-outlined text-[17px] text-[var(--on-muted)] group-focus-within:text-[var(--on-surface)] transition-colors shrink-0">person</span>
                <input value={email} onChange={e => setEmail(e.target.value)}
                  type="email" placeholder="Email address" autoComplete="email"
                  suppressHydrationWarning
                  className="flex-1 bg-transparent border-0 outline-none text-[0.88rem] text-[var(--on-surface)] placeholder-[var(--on-muted)] font-(family-name:--font-inter)"/>
                {/* bottom line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-focus-within:w-full transition-all duration-350 rounded-b-[10px] bg-gradient-to-r from-[var(--on-surface)] to-[var(--on-surface)]" />
              </div>
            </div>

            {/* Password */}
            <div className="mb-1">
              <div className="flex items-center gap-2.5 bg-[var(--surface-low)] border-[1.5px] border-[var(--outline)] rounded-[10px] px-3.5 h-[50px] focus-within:border-[var(--on-surface)] focus-within:bg-[var(--surface)] focus-within:shadow-[0_0_0_3px_rgba(78,84,200,.08)] transition-all relative overflow-hidden group">
                <span className="material-symbols-outlined text-[17px] text-[var(--on-muted)] group-focus-within:text-[var(--on-surface)] transition-colors shrink-0">lock</span>
                <input value={password} onChange={e => setPassword(e.target.value)}
                  type={showPwd ? 'text' : 'password'} placeholder="Password" autoComplete="current-password"
                  suppressHydrationWarning
                  className="flex-1 bg-transparent border-0 outline-none text-[0.88rem] text-[var(--on-surface)] placeholder-[var(--on-muted)] font-(family-name:--font-inter)"/>
                <button onClick={() => setShowPwd(p => !p)} type="button"
                  className="text-[var(--on-muted)] hover:text-[var(--on-surface)] transition-colors shrink-0 cursor-pointer bg-transparent border-0">
                  <span className="material-symbols-outlined text-[16px]">{showPwd ? 'visibility_off' : 'visibility'}</span>
                </button>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-focus-within:w-full transition-all duration-350 rounded-b-[10px] bg-gradient-to-r from-[var(--on-surface)] to-[var(--on-surface)]" />
              </div>
            </div>

            <div className="flex justify-end mb-4">
              <Link href="/forgot-password" className="text-[0.72rem] font-semibold text-[var(--on-muted)] hover:text-[var(--on-surface)] hover:underline transition-colors">Forgot password?</Link>
            </div>

            {/* Sign In button */}
            <button onClick={handleLogin} disabled={loginState === 'loading'}
              suppressHydrationWarning
              className={`w-full h-12 rounded-[10px] font-bold text-[0.8rem] tracking-[0.06em] uppercase text-[var(--bg)] flex items-center justify-center gap-2 relative overflow-hidden transition-all cursor-pointer border-0 shadow-[0_4px_16px_rgba(11,33,71,.28)] bg-[var(--on-surface)] hover:bg-[var(--on-surface)]/90 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(11,33,71,.32)]`}>
              {loginState === 'loading' && <div className="w-4 h-4 border-2 border-[var(--bg)]/30 border-t-[var(--bg)] rounded-full animate-spin" />}
              {loginState === 'success' && (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--bg)" strokeWidth="2.5">
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
            <div className="flex items-center justify-center gap-1.5 mt-3 text-[0.68rem] text-[var(--on-muted)]">
              <span className="material-symbols-outlined text-[13px] text-[var(--on-surface)]">lock</span>
              256-bit encryption · Trusted by 10,000+ businesses
            </div>

            <p className="text-center text-[0.78rem] text-[var(--on-muted)] mt-3">
              New to the platform?
              <Link href="#" className="text-[var(--on-surface)] font-bold ml-1 hover:text-[var(--on-surface)]/80 hover:underline transition-colors">Register as Partner</Link>
            </p>
          </div>
        )}

        {/* ── OTP FORM (MSME) ── */}
        {role === 'msme' && (
          <div className="transition-all duration-280">

            {/* Step 1 — phone */}
            {otpStep === 1 && (
              <div>
                <div className="flex gap-2 mb-1">
                  {/* dial code — 32% */}
                  <div className="flex items-center bg-[var(--surface-low)] border-[1.5px] border-[var(--outline)] rounded-[10px] pl-3 pr-2 h-[50px] focus-within:border-[var(--on-surface)] focus-within:bg-[var(--surface)] focus-within:shadow-[0_0_0_3px_rgba(78,84,200,.08)] transition-all relative group" style={{ flex: '0 0 32%' }}>
                    <select value={dialCode} onChange={e => setDialCode(e.target.value)}
                      className="w-full bg-transparent border-0 outline-none text-[0.88rem] font-semibold text-[var(--on-surface)] font-(family-name:--font-inter) appearance-none cursor-pointer z-10 relative">
                      {countries.map(country => (
                        <option key={country.code} value={country.dialCode}>
                          {country.emoji} {country.dialCode}
                        </option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined text-[18px] text-[var(--on-muted)] absolute right-2 pointer-events-none group-focus-within:text-[var(--on-surface)] transition-colors">expand_more</span>
                  </div>
                  {/* phone — 70% */}
                  <div className="flex items-center gap-2.5 bg-[var(--surface-low)] border-[1.5px] border-[var(--outline)] rounded-[10px] px-3.5 h-[50px] focus-within:border-[var(--on-surface)] focus-within:bg-[var(--surface)] focus-within:shadow-[0_0_0_3px_rgba(78,84,200,.08)] transition-all flex-1 relative overflow-hidden group">
                    <span className="material-symbols-outlined text-[17px] text-[var(--on-muted)] group-focus-within:text-[var(--on-surface)] transition-colors shrink-0">smartphone</span>
                    <input value={phone} onChange={e => setPhone(e.target.value)}
                      type="tel" placeholder="Mobile number" maxLength={10} autoComplete="tel"
                      suppressHydrationWarning
                      className="flex-1 bg-transparent border-0 outline-none text-[0.88rem] text-[var(--on-surface)] placeholder-[var(--on-muted)] font-(family-name:--font-inter)"/>
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-focus-within:w-full transition-all duration-350 rounded-b-[10px] bg-gradient-to-r from-[var(--on-surface)] to-[var(--on-surface)]" />
                  </div>
                </div>
                <p className="text-[0.7rem] text-[var(--on-muted)] mb-4">OTP will be sent to this number via SMS</p>

                <button onClick={handleSendOtp} disabled={sendState === 'loading'}
                  className="w-full h-12 rounded-[10px] font-bold text-[0.8rem] tracking-[0.06em] uppercase text-[var(--bg)] bg-[var(--on-surface)] hover:bg-[var(--on-surface)]/90 hover:-translate-y-px flex items-center justify-center gap-2 transition-all cursor-pointer border-0 shadow-[0_4px_16px_rgba(11,33,71,.28)]">
                  {sendState === 'loading'
                    ? <div className="w-4 h-4 border-2 border-[var(--bg)]/30 border-t-[var(--bg)] rounded-full animate-spin" />
                    : <><span>Send OTP</span><span className="material-symbols-outlined text-[16px]">send</span></>}
                </button>
                <p className="text-center text-[0.78rem] text-[var(--on-muted)] mt-3">
                  New to the platform?
                  <Link href="#" className="text-[var(--on-surface)] font-bold ml-1 hover:text-[var(--on-surface)]/80 hover:underline transition-colors">Register as Partner</Link>
                </p>
              </div>
            )}

            {/* Step 2 — OTP entry */}
            {otpStep === 2 && (
              <div>
                {/* Banner */}
                <div className="flex items-center gap-2 px-3 py-2.5 bg-[var(--surface-low)] border border-[var(--outline)] rounded-[9px] mb-4 text-[0.78rem] text-[var(--on-surface)] font-semibold">
                  <span className="material-symbols-outlined text-[15px] shrink-0">check_circle</span>
                  OTP sent to <strong className="ml-1">{phoneMask}</strong>
                  <button onClick={() => setOtpStep(1)} className="ml-auto text-[0.7rem] font-bold text-[var(--on-muted)] underline cursor-pointer bg-transparent border-0">Change</button>
                </div>

                <p className="text-[0.62rem] font-semibold tracking-[0.12em] uppercase text-[var(--on-muted)] mb-2.5">Enter 6-digit OTP</p>

                {/* OTP boxes */}
                <div className="flex gap-2 justify-center mb-3.5">
                  {otp.map((d, i) => (
                    <input key={i}
                      ref={el => { otpRefs.current[i] = el; }}
                      value={d}
                      onChange={e => handleOtpInput(e.target.value, i)}
                      onKeyDown={e => handleOtpKey(e, i)}
                      onPaste={handleOtpPaste}
                      type="text" inputMode="numeric" pattern="[0-9]*" maxLength={1}
                      suppressHydrationWarning
                      className={`w-10 h-12 sm:w-12 sm:h-14 text-center border-[1.5px] rounded-[12px] text-[1.1rem] font-bold transition-all outline-none ${d && !otpError ? 'border-[var(--on-surface)] bg-[var(--surface-low)] text-[var(--on-surface)]' : 'border-[var(--outline)] bg-[var(--surface-low)] text-[var(--on-surface)]'} focus:border-[var(--on-surface)] focus:bg-[var(--surface)] focus:shadow-[0_0_0_3px_rgba(78,84,200,.09)] focus:scale-[1.04]`}
                    />
                  ))}
                </div>

                <div className="flex justify-between items-center mb-4 text-[0.72rem]">
                  <span className="text-[var(--on-muted)]">Expires in <strong className="text-[var(--on-surface)]">{timer}</strong></span>
                  <button onClick={() => { setOtp(['','','','','','']); startTimer(120); otpRefs.current[0]?.focus(); }}
                    disabled={!resendActive}
                    className={`font-semibold cursor-pointer bg-transparent border-0 transition-all ${resendActive ? 'text-[var(--on-muted)] opacity-100 hover:text-[var(--on-surface)] hover:underline' : 'text-[var(--on-muted)] opacity-40 cursor-not-allowed'}`}>
                    Resend OTP
                  </button>
                </div>

                <button onClick={handleVerify} disabled={verifyState === 'loading'}
                  suppressHydrationWarning
                  className={`w-full h-12 rounded-[10px] font-bold text-[0.8rem] tracking-[0.06em] uppercase text-[var(--bg)] flex items-center justify-center gap-2 transition-all cursor-pointer border-0 shadow-[0_4px_16px_rgba(11,33,71,.28)] bg-[var(--on-surface)] hover:bg-[var(--on-surface)]/90 hover:-translate-y-px`}>
                  {verifyState === 'loading' && <div className="w-4 h-4 border-2 border-[var(--bg)]/30 border-t-[var(--bg)] rounded-full animate-spin" />}
                  {verifyState === 'success' && (
                    <><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--bg)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Verified</span></>
                  )}
                  {verifyState === 'idle' && (
                    <><span>Verify &amp; Sign In</span><span className="material-symbols-outlined text-[16px]">verified</span></>
                  )}
                </button>
                <p className="text-center text-[0.78rem] text-[var(--on-muted)] mt-3">
                  New to the platform?
                  <Link href="#" className="text-[var(--on-surface)] font-bold ml-1 hover:text-[var(--on-surface)]/80 hover:underline transition-colors">Register as Partner</Link>
                </p>
              </div>
            )}
          </div>
        )}

          </div>

          {/* RIGHT SIDE: ANIMATION (Inside the card) */}
          <div className="hidden lg:flex flex-1 items-center justify-center bg-[var(--surface-low)] relative overflow-hidden">
            {/* Soft inner glow matching brand */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--on-surface)]/10 to-transparent opacity-80" />
            
            {(() => {
              const LottiePlayer = 'lottie-player' as any;
              return (
                <LottiePlayer 
                  key={role}
                  src={
                    role === 'msme' 
                      ? "/lottie/data_msme_recolored.json?v=2" 
                      : "/lottie/data_recolored.json?v=2"
                  }
                  background="transparent" 
                  speed="1" 
                  loop 
                  autoplay
                  style={{ width: '100%', height: '100%', maxHeight: '500px', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.05))', animationDelay: '0.2s' }}
                  className="relative z-10 animate-[cardIn_1s_ease_both]"
                />
              );
            })()}
          </div>

        </div>

      </div>

      {/* keyframes */}
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(24px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20%      { transform: translateX(-5px); }
          40%      { transform: translateX(5px); }
          60%      { transform: translateX(-3px); }
          80%      { transform: translateX(3px); }
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          line-height: 1;
        }
      `}</style>
    </div>
    </div>
  );
}
