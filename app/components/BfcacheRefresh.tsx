"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * When a user leaves for an external site (e.g. app.cred2tech.com) and
 * hits the browser's back button, the browser restores this page from
 * its back-forward cache (bfcache) instead of re-running our JS — so any
 * fetch/render that was still in flight when they navigated away stays
 * frozen exactly as it was, which is what showed up as "loaded incomplete
 * until I refresh." `pageshow`'s `persisted` flag tells us a bfcache
 * restore just happened; `router.refresh()` re-syncs the page's data
 * without a full reload.
 */
export default function BfcacheRefresh() {
  const router = useRouter();

  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        router.refresh();
      }
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, [router]);

  return null;
}
