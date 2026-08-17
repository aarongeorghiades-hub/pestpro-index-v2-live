'use client';

// Prior-consent gate for every non-essential script on this site.
//
// Before this component existed, GA4 and the Grow by Mediavine initialiser were
// hard-coded into app/layout.tsx and therefore ran on every route for every
// visitor before any choice was offered. Both are now loaded from here and ONLY
// after an explicit opt-in. Rejecting does not load-and-ignore them; the script
// elements are never created at all.
//
// The only thing stored without consent is nothing. The pp_consent cookie is
// written at the moment the visitor answers, and records that answer.

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const COOKIE_NAME = 'pp_consent';
const COOKIE_MAX_AGE = 15552000; // 180 days, in seconds
const GA_MEASUREMENT_ID = 'G-EGGZMHZ6NL';

// Verbatim copy of the Grow by Mediavine initialiser as it was installed in
// app/layout.tsx. Kept byte-for-byte; the vendor supplies this and we do not
// reformat it.
const GROW_SNIPPET =
  '!(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","U2l0ZTpjOTg5ZDcxNy01NWNhLTQ4MjAtOGUwNS1hY2Q4NTgyZmRhMzA=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})();';

type Consent = {
  v: 1;
  analytics: boolean;
  ads: boolean;
  ts: number;
};

// Module-level, not component-level: React can mount a component twice in
// development Strict Mode, and these must survive that. A script must never be
// injected more than once per page load.
let gaInjected = false;
let growInjected = false;

function readConsent(): Consent | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));
  if (!match) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(match.slice(COOKIE_NAME.length + 1)));
    if (parsed && typeof parsed === 'object' && parsed.v === 1) {
      return {
        v: 1,
        analytics: parsed.analytics === true,
        ads: parsed.ads === true,
        ts: typeof parsed.ts === 'number' ? parsed.ts : 0,
      };
    }
    return null;
  } catch {
    // A malformed cookie is treated as no answer at all, so we ask again
    // rather than assuming consent.
    return null;
  }
}

function writeConsent(analytics: boolean, ads: boolean): Consent {
  const value: Consent = { v: 1, analytics, ads, ts: Date.now() };
  if (typeof document !== 'undefined') {
    document.cookie =
      `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(value))}` +
      `; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax; Secure`;
  }
  return value;
}

function injectAnalytics() {
  if (gaInjected || typeof document === 'undefined') return;
  gaInjected = true;

  const loader = document.createElement('script');
  loader.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  loader.async = true;
  document.head.appendChild(loader);

  // Identical to the init block that previously sat in app/layout.tsx. No extra
  // config parameters were used there, so none are added here.
  const init = document.createElement('script');
  init.textContent =
    'window.dataLayer = window.dataLayer || [];\n' +
    'function gtag(){dataLayer.push(arguments);}\n' +
    "gtag('js', new Date());\n" +
    `gtag('config', '${GA_MEASUREMENT_ID}');`;
  document.head.appendChild(init);
}

function injectAds() {
  if (growInjected || typeof document === 'undefined') return;
  growInjected = true;

  const grow = document.createElement('script');
  grow.setAttribute('data-grow-initializer', '');
  grow.textContent = GROW_SNIPPET;
  document.head.appendChild(grow);
}

function applyConsent(consent: Consent) {
  if (consent.analytics) injectAnalytics();
  if (consent.ads) injectAds();
}

export default function ConsentManager() {
  const [open, setOpen] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);
  const mounted = useRef(false);

  // First paint: decide whether to ask, and honour any stored answer.
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    const stored = readConsent();
    if (stored) {
      applyConsent(stored);
      setAnalytics(stored.analytics);
      setAds(stored.ads);
    } else {
      setOpen(true);
    }
  }, []);

  // Re-opener. The footer control is rendered by a SERVER component, so it
  // cannot pass a callback to this client component. Instead we listen on the
  // document and use closest() so the control works wherever it appears and
  // however deeply it is nested.
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const trigger = target.closest('[data-cookie-preferences]');
      if (!trigger) return;

      event.preventDefault();
      const stored = readConsent();
      setAnalytics(stored ? stored.analytics : false);
      setAds(stored ? stored.ads : false);
      setShowPrefs(true);
      setOpen(true);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const decide = useCallback((nextAnalytics: boolean, nextAds: boolean) => {
    const stored = writeConsent(nextAnalytics, nextAds);
    applyConsent(stored);
    setAnalytics(nextAnalytics);
    setAds(nextAds);
    setOpen(false);
    setShowPrefs(false);
  }, []);

  if (!open) return null;

  // Accept and Reject share this class string in full. They are the same
  // element type with the same padding, font size, font weight, border and
  // colour, so neither is nudged ahead of the other.
  const choiceButton =
    'w-full sm:w-auto px-5 py-2.5 text-sm font-semibold rounded-lg border-2 ' +
    'border-slate-900 bg-white text-slate-900 hover:bg-slate-100 ' +
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900';

  return (
    <div
      role="dialog"
      aria-label="Cookie choices"
      aria-modal="false"
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t-2 border-slate-900 shadow-[0_-4px_16px_rgba(0,0,0,0.15)]"
    >
      <div className="max-w-5xl mx-auto px-4 py-4 sm:py-5">
        <p className="text-sm text-slate-800 leading-relaxed">
          We use cookies to measure how this site is used and to support advertising. Nothing loads
          until you choose. Read our{' '}
          <Link href="/cookies" className="underline font-semibold hover:text-slate-900">
            cookie policy
          </Link>
          .
        </p>

        <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <button type="button" className={choiceButton} onClick={() => decide(true, true)}>
            Accept all
          </button>
          <button type="button" className={choiceButton} onClick={() => decide(false, false)}>
            Reject all
          </button>
          <button
            type="button"
            aria-expanded={showPrefs}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium rounded-lg border-2 border-transparent bg-transparent text-slate-700 underline hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
            onClick={() => setShowPrefs((v) => !v)}
          >
            Manage preferences
          </button>

          <Link
            href="/privacy"
            className="sm:ml-auto text-sm text-slate-600 underline hover:text-slate-900"
          >
            Privacy notice
          </Link>
        </div>

        {showPrefs && (
          <div className="mt-4 border-t border-slate-200 pt-4">
            <label className="flex items-start gap-3 mb-3 cursor-pointer">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 shrink-0"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />
              <span className="text-sm text-slate-800">Analytics</span>
            </label>

            <label className="flex items-start gap-3 mb-4 cursor-pointer">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 shrink-0"
                checked={ads}
                onChange={(e) => setAds(e.target.checked)}
              />
              <span className="text-sm text-slate-800">Advertising and audience measurement</span>
            </label>

            <button
              type="button"
              className={choiceButton}
              onClick={() => decide(analytics, ads)}
            >
              Save preferences
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
