"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface ThreeDCardProps {
  imageSrc: string;
  className?: string;
  depth?: number;
}

export function ThreeDCard({ imageSrc, className = "", depth = 40 }: ThreeDCardProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => setMounted(true), []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  if (!mounted) return <div className={`relative ${className}`} />;

  const isLight = resolvedTheme === 'light';

  return (
    <div 
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <div 
        className="relative w-full h-full transition-transform duration-300 ease-out"
        style={{ 
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Bottom shadow slab for 3D thickness */}
        <div 
          className="absolute inset-0 rounded-[22px]"
          style={{ 
            transform: 'translateZ(-12px)',
            background: !isLight 
              ? 'linear-gradient(145deg, #e5e5e5 0%, #cccccc 100%)' // White slab in dark mode
              : 'linear-gradient(145deg, #1a1a1a 0%, #050505 100%)', // Black slab in light mode
            boxShadow: !isLight 
              ? '0 20px 40px -10px rgba(0,0,0,0.3)' 
              : '0 30px 60px -10px rgba(0,0,0,0.2)',
          }} 
        />

        {/* ═══ GLOWING FROSTED GLASS CARD FACE ═══ */}
        <div 
          className="absolute inset-0 rounded-[22px] overflow-hidden"
          style={{ 
            transform: 'translateZ(0px)',
            background: !isLight
              ? 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.85) 100%)' // White card in dark mode
              : 'linear-gradient(145deg, rgba(20,20,20,0.85) 0%, rgba(5,5,5,0.95) 100%)', // Black card in light mode
            border: !isLight 
              ? '1.5px solid rgba(255,255,255,0.4)' 
              : '1.5px solid rgba(0,0,0,0.15)',
            boxShadow: !isLight
              ? '0 10px 40px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.9)'
              : '0 20px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Top bright edge reflection */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          
          {/* Internal ambient light gradient */}
          <div className="absolute inset-0 pointer-events-none"
               style={{ 
                 background: !isLight
                   ? 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5) 0%, transparent 60%)'
                   : 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)'
               }} />
          
          {/* Content Image */}
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <img 
              src={imageSrc} 
              alt="Card content" 
              className="w-[85%] h-[85%] object-contain"
              style={{ 
                filter: !isLight 
                  ? 'grayscale(1) brightness(0.4) contrast(1.4) drop-shadow(0 4px 12px rgba(0,0,0,0.15))' // High contrast dark icons on white card
                  : 'grayscale(1) brightness(0) invert(1) drop-shadow(0 4px 20px rgba(0,0,0,0.4))', // Pure white icons on black card
              }}
            />
          </div>

          {/* Diagonal glossy reflection stripe */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.05) 100%)',
            }}
          />

          {/* Side edge highlight */}
          <div className="absolute top-[15%] bottom-[15%] left-0 w-[1.5px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}
