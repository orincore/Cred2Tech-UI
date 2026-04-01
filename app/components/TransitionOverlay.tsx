'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function TransitionOverlay() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  // When route finishes changing, dismiss the overlay
  useEffect(() => {
    setIsNavigating(false);
    // Add a slight delay before fully unmounting so animations can fade out
    const timeout = setTimeout(() => setShowOverlay(false), 300);
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  // Intercept anchor clicks to trigger overlay immediately
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      // Find closest anchor
      const target = (e.target as HTMLElement).closest('a');
      if (!target || !target.href) return;
      if (target.target === '_blank') return;
      // Skip meta/cmd clicks (open in new tab)
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      
      try {
        const currentUrl = new URL(window.location.href);
        const targetUrl = new URL(target.href);
        
        // Skip external links
        if (currentUrl.origin !== targetUrl.origin) return;
        // Skip purely hash-based navigation on the same page
        if (currentUrl.pathname === targetUrl.pathname && currentUrl.search === targetUrl.search && targetUrl.hash) return;
        // Skip identical paths
        if (currentUrl.pathname === targetUrl.pathname && currentUrl.search === targetUrl.search) return;

        // Transition detected! Show overlay
        setIsNavigating(true);
        setShowOverlay(true);

        // FAIL-SAFE: Forcefully purge any floating elements before redirect
        if (typeof document !== 'undefined') {
          document.getElementById('fixed-card')?.remove();
          document.getElementById('scroll-bar')?.remove();
        }
      } catch(err) {
        // Error parsing URLs, do nothing
      }
    };

    // Capture at the capturing phase so it runs before React handles the click
    document.addEventListener('click', handleAnchorClick, true);
    return () => document.removeEventListener('click', handleAnchorClick, true);
  }, []);

  if (!showOverlay) return null;

  return (
    <div 
      className={`fixed inset-0 z-[999999] flex items-center justify-center bg-white/75 backdrop-blur-md transition-opacity duration-300 ${
        isNavigating ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="w-[300px] h-[300px]">
        {/* @ts-ignore - custom element from lottiefiles script */}
        <lottie-player
          src="/lottie/loading-recolored.json"
          background="transparent"
          speed="1"
          style={{ width: '100%', height: '100%' }}
          loop
          autoplay
        />
      </div>
    </div>
  );
}
