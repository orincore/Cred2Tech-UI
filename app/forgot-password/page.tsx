'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import theme from '../theme';

const { colors, gradients } = theme;

type SubmitState = 'idle' | 'loading' | 'success';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitState('loading');
    setTimeout(() => {
      setSubmitState('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative overflow-hidden font-(family-name:--font-inter)"
      style={{ background: gradients.hero }}>

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
      <div className="relative z-10 w-full px-4 flex justify-center lg:mt-24">
        
        {/* WIDE CARD WRAPPER */}
        <div className="relative w-full max-w-[440px] lg:max-w-[900px] bg-white rounded-[20px] animate-[cardIn_.7s_ease_both] flex overflow-hidden shadow-[0_24px_80px_rgba(0,10,25,0.12)] border border-[#e5e7eb]">
             
          {/* LEFT SIDE: FORM CONTENT */}
          <div className="w-full lg:w-[440px] shrink-0 z-10 bg-white relative lg:border-r border-[#e5e7eb] flex flex-col justify-start p-6 sm:p-8 lg:pt-[2.6rem] lg:px-[2.8rem] lg:pb-[2.2rem] min-h-[500px] sm:min-h-[580px]">

            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-[30px] h-[30px] rounded-lg flex items-center justify-center relative" style={{background: colors.primary}}>
                <div className="absolute inset-[2px] bg-white rounded-[5px]" />
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="relative z-10">
                  <path d="M2.5 7h3.5M8 3.5l3.5 3.5L8 10.5" stroke="#003f7d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-black text-[1.15rem] tracking-[-0.03em] text-[#003f7d]">
                Cred<span className="text-[#006d3f]">2</span>Tech
              </span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="font-bold text-[1.6rem] sm:text-[1.9rem] text-[#1b1c1c] tracking-[-0.04em] leading-[1.1]">Reset Password</h1>
              <p className="text-[0.8rem] sm:text-[0.85rem] text-[#424751] mt-2 mb-6">
                Enter your registered email address and we'll send you a secure link to reset your password.
              </p>
            </div>

            {submitState === 'success' ? (
              <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-[10px] p-5 flex flex-col items-center justify-center text-center mt-2 animate-[cardIn_.4s_ease_both]">
                <div className="w-12 h-12 bg-[#22c55e] rounded-full flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-white text-[24px]">mark_email_read</span>
                </div>
                <h3 className="text-[#166534] font-bold text-[1.1rem]">Email Sent</h3>
                <p className="text-[#15803d] text-[0.85rem] mt-1">
                  We've sent password reset instructions to <span className="font-semibold">{email}</span>. Please check your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col mt-2">
                {/* Email */}
                <div className="mb-5">
                  <label className="block text-[0.8rem] font-semibold text-[#1b1c1c] mb-1.5 ml-1">Email <span className="text-red-500">*</span></label>
                  <div className="flex items-center gap-2.5 bg-[#f6f3f2] border-[1.5px] border-[#c2c6d3] rounded-[10px] px-3.5 h-[50px] focus-within:border-[#a8c8ff] focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(0,63,125,.08)] transition-all relative overflow-hidden group">
                    <span className="material-symbols-outlined text-[17px] text-[#727783] group-focus-within:text-[#003f7d] transition-colors shrink-0">mail</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}
                      type="email" placeholder="john.doe@company.com" required autoComplete="email"
                      className="flex-1 bg-transparent border-0 outline-none text-[0.88rem] text-[#1b1c1c] placeholder-[#727783] font-(family-name:--font-inter)"/>
                    {/* bottom line */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-focus-within:w-full transition-all duration-350 rounded-b-[10px]"
                      style={{ background: gradients.accentLine }} />
                  </div>
                </div>

                <button type="submit" disabled={submitState === 'loading' || !email}
                  className="w-full h-[54px] rounded-[10px] font-bold text-[0.85rem] tracking-[0.06em] uppercase text-white bg-[#003f7d] hover:bg-[#0056a7] focus:ring-4 focus:ring-[#003f7d]/20 hover:-translate-y-px flex items-center justify-center gap-2 transition-all cursor-pointer border-0 shadow-[0_4px_16px_rgba(0,63,125,.28)] disabled:opacity-50 disabled:cursor-not-allowed">
                  {submitState === 'loading' && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                  {submitState === 'idle' && (
                    <>
                      <span>Send Reset Link</span>
                      <span className="material-symbols-outlined text-[16px]">send</span>
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="mt-auto pt-6 flex justify-center">
              <Link href="/login" className="flex items-center gap-1.5 text-[0.82rem] font-semibold text-[#424751] hover:text-[#003f7d] transition-colors">
                <span className="material-symbols-outlined text-[15px]">arrow_back</span>
                Back to secure login
              </Link>
            </div>
            
          </div>
          
          {/* RIGHT SIDE: ANIMATION (Desktop Only) */}
          <div className="hidden lg:flex flex-1 items-center justify-center bg-[#f6f3f2] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d6e3ff]/60 to-transparent opacity-80" />
            
            {/* Subtle pulse background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#3b82f6]/20 to-[#003f7d]/10 blur-3xl animate-pulse" />
            </div>

            <div className="relative z-10 w-[440px] h-[440px] flex items-center justify-center">
              {/* @ts-expect-error Web Component Lottie Player */}
              <lottie-player 
                src="/lottie/forgot_password_recolored.json?v=2" 
                background="transparent" 
                speed="1" 
                style={{ width: '400px', height: '400px', transform: 'scale(1.4)' }} 
                loop 
                autoplay 
              />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
