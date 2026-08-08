import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

/**
 * Backend URL for tracking.
 * - In development: empty string (uses Vite proxy → localhost:5000)
 * - In production:  set VITE_BACKEND_URL env var to your deployed backend URL
 *   e.g. VITE_BACKEND_URL=https://api.tatvaconsultancy.in
 */
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';

/**
 * Sends a page-view event to the backend tracking endpoint.
 * Fires on every React Router navigation change.
 * Uses `navigator.sendBeacon` for reliability (won't block unload),
 * falls back to `fetch` if sendBeacon isn't available.
 */
export function usePageTracking() {
  const location = useLocation();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    // Avoid double-tracking the same path (strict mode / duplicate renders)
    if (prevPath.current === location.pathname) return;
    prevPath.current = location.pathname;

    const payload = JSON.stringify({
      page: location.pathname,
      referrer: document.referrer || '',
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    });

    const url = `${BACKEND_URL}/api/track`;

    try {
      if (navigator.sendBeacon) {
        const blob = new Blob([payload], { type: 'application/json' });
        navigator.sendBeacon(url, blob);
      } else {
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payload,
          keepalive: true,
        }).catch(() => {
          // Silently ignore tracking failures — don't impact UX
        });
      }
    } catch {
      // Silently ignore — tracking should never break the site
    }
  }, [location.pathname]);
}
