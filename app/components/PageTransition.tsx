"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";

/**
 * Replays the `.page-transition` fade-in on every route change by
 * toggling the class (with a forced reflow so the animation restarts)
 * instead of the previous `key={pathname}` approach.
 *
 * `key={pathname}` fully unmounted and remounted every page on every
 * navigation, including browser back/forward. That defeats the App
 * Router's client-side route cache and re-runs every effect from
 * scratch each time — the observed symptom was the back button
 * occasionally landing on a blank/half-rendered page that only a
 * manual refresh would fix, because the remount could race with a
 * bfcache restore or an in-flight navigation. Keeping `children`
 * mounted avoids that entirely.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      // Initial mount already plays the animation via the className below.
      isFirstRun.current = false;
      return;
    }
    const el = ref.current;
    if (!el) return;
    el.classList.remove("page-transition");
    void el.offsetWidth; // force reflow so the animation can replay
    el.classList.add("page-transition");
  }, [pathname]);

  return (
    <div ref={ref} className="page-transition">
      {children}
    </div>
  );
}
