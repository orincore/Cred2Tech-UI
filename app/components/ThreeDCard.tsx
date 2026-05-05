"use client";

import React, { useState } from 'react';

interface ThreeDCardProps {
  imageSrc: string;
  className?: string;
  depth?: number;
}

export function ThreeDCard({ imageSrc, className = "", depth = 40 }: ThreeDCardProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

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

  return (
    <div 
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '800px' }}
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
            transform: 'translateZ(-10px)',
            background: 'linear-gradient(145deg, #2a3570 0%, #151a3a 100%)',
            boxShadow: '0 30px 60px -10px rgba(0,0,0,0.7)',
          }} 
        />

        {/* ═══ GLOWING FROSTED GLASS CARD FACE ═══ */}
        <div 
          className="absolute inset-0 rounded-[22px] overflow-hidden"
          style={{ 
            transform: 'translateZ(0px)',
            background: 'linear-gradient(145deg, rgba(120,140,255,0.45) 0%, rgba(80,100,220,0.35) 30%, rgba(50,60,150,0.4) 70%, rgba(30,40,120,0.5) 100%)',
            border: '1.5px solid rgba(180,200,255,0.4)',
            boxShadow: '0 0 60px rgba(100,130,255,0.3), 0 0 120px rgba(78,84,200,0.15), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.2)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Top bright edge — simulates overhead strobe hitting the surface */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          
          {/* Top-down light gradient (strobe reflection) */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.08) 30%, transparent 60%)' }} />
          
          {/* Content Image — bright white icons */}
          <div className="absolute inset-0 flex items-center justify-center p-5">
            <img 
              src={imageSrc} 
              alt="Card content" 
              className="w-[75%] h-[75%] object-contain"
              style={{ 
                filter: 'brightness(2) contrast(1.2) drop-shadow(0 5px 15px rgba(0,0,0,0.4))',
              }}
            />
          </div>

          {/* Diagonal glossy reflection stripe */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 30%, transparent 50%, transparent 70%, rgba(255,255,255,0.08) 100%)',
            }}
          />

          {/* Left edge highlight */}
          <div className="absolute top-[10%] bottom-[10%] left-0 w-[2px] bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
      </div>
    </div>
  );
}
