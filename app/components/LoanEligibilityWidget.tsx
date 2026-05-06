'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const LENDERS = [
  { name: 'HDFC Bank', amount: '₹45L', rate: '9.5%', badge: 'BEST RATE', badgeColor: 'var(--on-surface)', logo: '/images/hdfc.png' },
  { name: 'ICICI Bank', amount: '₹42L', rate: '9.9%', badge: 'HIGH LIMIT', badgeColor: '#a8c8ff', logo: '/images/icici.jpg' },
  { name: 'Bajaj Finserv', amount: '₹40L', rate: '10.2%', badge: 'FAST', badgeColor: '#ffe066', logo: '/images/bajaj.png' },
];

export default function LoanEligibilityWidget() {
  // phase: 'scanning' | 'revealing' | 'done'
  const [phase, setPhase] = useState<'scanning' | 'revealing' | 'done'>('scanning');
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let t3: ReturnType<typeof setTimeout>;
    let t4: ReturnType<typeof setTimeout>;

    function runCycle() {
      setPhase('scanning');
      setVisibleCount(0);
      // After 1.8s start revealing lenders one by one
      t1 = setTimeout(() => {
        setPhase('revealing');
        setVisibleCount(1);
        t2 = setTimeout(() => setVisibleCount(2), 500);
        t3 = setTimeout(() => { setVisibleCount(3); setPhase('done'); }, 1000);
        // Hold for 4s then restart
        t4 = setTimeout(runCycle, 5500);
      }, 1800);
    }

    runCycle();
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <div id="loan-widget" className="card-scene w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[400px] mx-auto lg:mx-0 select-none">
      <div
        className="card-3d relative overflow-hidden border border-white/15"
        style={{
          background: 'linear-gradient(160deg,rgba(255,255,255,0.10) 0%,rgba(255,255,255,0.04) 100%)',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08) inset',
        }}
      >
        {/* Header */}
        <div className="px-3 py-2 lg:px-5 lg:py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full shadow-[0_0_8px_var(--on-surface)] ${phase === 'scanning' ? 'bg-[#ffe066] animate-pulse' : 'bg-[var(--on-surface)] animate-pulse'}`} />
            <span className="text-white/70 text-[10px] font-bold font-(family-name:--font-jb-mono) tracking-widest uppercase">Eligibility Check</span>
          </div>
          <span className="text-[9px] text-white/35 font-(family-name:--font-jb-mono)">ID: #EC-20044</span>
        </div>

        {/* Business info */}
        <div className="px-3 py-2 lg:px-5 lg:py-4 border-b border-white/10">
          <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-3">
            <div className="w-7 h-7 lg:w-10 lg:h-10 bg-[var(--on-surface)]/15 border border-[var(--on-surface)]/30 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[var(--on-surface)] text-xs lg:text-base">store</span>
            </div>
            <div className="min-w-0">
              <p className="text-white text-xs font-bold leading-tight truncate">ORINCORE Technologies</p>
              <p className="text-white/45 text-[9px] font-(family-name:--font-jb-mono)">GST: 07AAECS1234F1Z5</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/6 px-2 py-1.5 lg:px-4 lg:py-3">
              <p className="text-white/40 text-[9px] lg:text-[10px] uppercase tracking-wider font-(family-name:--font-jb-mono)">Loan Amount</p>
              <p className="text-white font-bold text-sm lg:text-base">₹45,00,000</p>
            </div>
            <div className="bg-white/6 px-2 py-1.5 lg:px-4 lg:py-3">
              <p className="text-white/40 text-[9px] lg:text-[10px] uppercase tracking-wider font-(family-name:--font-jb-mono)">Type</p>
              <p className="text-white font-bold text-sm lg:text-base">LAP</p>
            </div>
          </div>
        </div>

        {/* Data checks */}
        <div className="px-3 py-2 lg:px-5 lg:py-4 border-b border-white/10">
          <p className="text-white/35 text-[9px] lg:text-[10px] uppercase tracking-widest font-(family-name:--font-jb-mono) mb-1 lg:mb-2">Data Analysed</p>
          <div className="flex flex-wrap gap-1.5 lg:gap-2">
            {[
              { label: 'ITR', color: 'var(--on-surface)' },
              { label: 'GST', color: 'var(--on-surface)' },
              { label: 'Bureau', color: 'var(--on-surface)' },
              { label: 'Bank Stmt', color: '#a8c8ff' },
            ].map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-bold font-(family-name:--font-jb-mono)"
                style={{ background: item.color + '18', color: item.color, border: `1px solid ${item.color}30` }}
              >
                <svg width="7" height="7" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3 5.5L6.5 2" stroke={item.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {/* Matched lenders */}
        <div className="px-3 py-2 lg:px-5 lg:py-4">
          <p className="text-white/35 text-[9px] lg:text-[10px] uppercase tracking-widest font-(family-name:--font-jb-mono) mb-1 lg:mb-2">Matched Lenders</p>

          {/* Scanning state */}
          {phase === 'scanning' && (
            <div className="flex flex-col gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 px-3 py-2 lg:px-4 lg:py-3 border border-white/8">
                  <div className="w-7 h-7 lg:w-8 lg:h-8 bg-white/10 rounded flex-shrink-0 animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-2 bg-white/10 rounded animate-pulse w-3/4" style={{ animationDelay: `${i * 0.1}s` }} />
                    <div className="h-1.5 bg-white/7 rounded animate-pulse w-1/2" style={{ animationDelay: `${i * 0.12}s` }} />
                  </div>
                  <div className="w-12 h-4 bg-white/10 rounded animate-pulse" style={{ animationDelay: `${i * 0.08}s` }} />
                </div>
              ))}
              <p className="text-white/30 text-[9px] font-(family-name:--font-jb-mono) text-center mt-1 animate-pulse">Scanning lender panel…</p>
            </div>
          )}

          {/* Revealing / done state */}
          {phase !== 'scanning' && (
            <div className="space-y-1 lg:space-y-2">
              {LENDERS.map((lender, i) => (
                <div
                  key={lender.name}
                  className="flex items-center justify-between bg-white/5 px-3 py-2 lg:px-4 lg:py-3 border border-white/8"
                  style={{
                    opacity: i < visibleCount ? 1 : 0,
                    transform: i < visibleCount ? 'translateY(0)' : 'translateY(8px)',
                    transition: 'opacity 0.4s cubic-bezier(0.22,1,0.36,1), transform 0.4s cubic-bezier(0.22,1,0.36,1)',
                  }}
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-7 h-7 lg:w-8 lg:h-8 bg-white rounded flex items-center justify-center flex-shrink-0 overflow-hidden p-0.5 relative">
                      <Image src={lender.logo} alt={lender.name} fill className="object-contain" />
                    </div>
                    <div>
                      <p className="text-white text-[11px] lg:text-xs font-bold leading-none">{lender.name}</p>
                      <p className="text-white/45 text-[9px] lg:text-[10px] mt-0.5">{lender.amount} @ {lender.rate}</p>
                    </div>
                  </div>
                  <span
                    className="text-[8px] lg:text-[9px] font-black px-1.5 py-0.5 lg:px-2 lg:py-1 font-(family-name:--font-jb-mono) whitespace-nowrap"
                    style={{ background: lender.badgeColor + '20', color: lender.badgeColor }}
                  >
                    {lender.badge}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Status footer */}
        <div className="px-3 py-2 lg:px-5 lg:py-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5 lg:gap-2">
            {phase === 'scanning' ? (
              <>
                <div className="w-4 h-4 lg:w-5 lg:h-5 border-2 border-[#ffe066]/40 border-t-[#ffe066] rounded-full animate-spin flex-shrink-0" />
                <span className="text-[#ffe066] text-[10px] lg:text-xs font-bold font-(family-name:--font-jb-mono) animate-pulse">SCANNING LENDERS…</span>
              </>
            ) : (
              <>
                <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[var(--on-surface)]/15 border border-[var(--on-surface)]/40 flex items-center justify-center flex-shrink-0">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3 5.5L6.5 2" stroke="var(--on-surface)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <span className="text-[var(--on-surface)] text-[10px] lg:text-xs font-bold font-(family-name:--font-jb-mono)">{visibleCount} LENDER{visibleCount !== 1 ? 'S' : ''} MATCHED</span>
              </>
            )}
          </div>
          <span className="text-white/30 text-[9px] lg:text-[10px] font-(family-name:--font-jb-mono)">~4 mins</span>
        </div>
      </div>

      {/* Floating stat pills — desktop only */}
      <div className="absolute -left-14 top-[30%] bg-[#0d2d6b] border border-white/15 px-3 py-2 shadow-xl hidden xl:block">
        <p className="text-white/45 text-[9px] font-(family-name:--font-jb-mono) uppercase tracking-wider">Cases Today</p>
        <p className="text-white font-bold text-sm">128 <span className="text-[var(--on-surface)] text-[10px]">↑ 12%</span></p>
      </div>
      <div className="absolute -right-12 bottom-[25%] bg-[#0d2d6b] border border-white/15 px-3 py-2 shadow-xl hidden xl:block">
        <p className="text-white/45 text-[9px] font-(family-name:--font-jb-mono) uppercase tracking-wider">Avg Decision</p>
        <p className="text-white font-bold text-sm">4 <span className="text-white/50 text-xs">min</span></p>
      </div>
    </div>
  );
}
