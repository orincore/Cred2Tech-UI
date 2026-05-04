"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // If the legacy theme in localStorage is "system", forcefully snap it to a resolved binary state
    if (theme === "system" && resolvedTheme) {
      setTheme(resolvedTheme);
    }
  }, [theme, resolvedTheme, setTheme]);

  if (!mounted) {
    return <div className="w-[52px] h-[28px] rounded-full bg-white/5 border border-white/10" />;
  }

  const isDark = theme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative w-[52px] h-[28px] rounded-full transition-colors duration-300 flex items-center px-1 border
        ${isDark ? 'bg-white/10 border-white/20 hover:bg-white/20' : 'bg-[#050b14]/10 border-[#050b14]/20 hover:bg-[#050b14]/20'}`}
      aria-label="Toggle Theme"
      title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
    >
      <div 
        className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 transform 
          ${isDark 
            ? 'translate-x-[22px] bg-white text-[#050b14] shadow-[0_0_10px_rgba(255,255,255,0.3)]' 
            : 'translate-x-0 bg-[#050b14] text-white shadow-sm'}`}
      >
        {isDark ? (
          <span className="material-symbols-outlined text-[13px]">dark_mode</span>
        ) : (
          <span className="material-symbols-outlined text-[13px]">light_mode</span>
        )}
      </div>
    </button>
  );
}
