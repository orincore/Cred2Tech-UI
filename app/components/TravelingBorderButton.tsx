'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface TravelingBorderButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

export const TravelingBorderButton = ({ href, children, className = '', showIcon = true }: TravelingBorderButtonProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isLight = mounted && resolvedTheme === 'light';

  return (
    <Link href={href}
      className={`relative inline-flex items-center justify-center gap-3 px-10 py-4 font-bold text-[17px] rounded-[14px] transition-all duration-300 group overflow-visible ${isLight ? 'text-black' : 'text-white'} ${className}`}
      style={{
        background: 'transparent',
        border: `3px solid ${isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'}`,
      }}
    >
      {/* The White/Black Highlight — Traveling border path */}
      <svg className="absolute inset-[-4px] w-[calc(100%+8px)] h-[calc(100%+8px)] pointer-events-none overflow-visible">
        <rect 
          x="1.5" y="1.5" 
          width="calc(100% - 3px)" 
          height="calc(100% - 3px)" 
          rx="14" ry="14" 
          fill="none" 
          stroke={isLight ? "black" : "white"}
          strokeWidth="3" 
          strokeDasharray="140 1000" 
          strokeDashoffset="140"
          style={{ 
            strokeDashoffset: 'var(--dash-offset, 140)',
            transition: 'stroke-dashoffset 1s ease-in-out'
          }}
          className="group-hover:[--dash-offset:-400]"
        />
      </svg>
      
      <span className="relative z-10">{children}</span>
      {showIcon && (
        <svg className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      )}
    </Link>
  );
};
