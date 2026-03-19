"use client";
import { useState, useEffect } from "react";
export function CookieConsent() {
  const [show, setShow] = useState(false);
  useEffect(() => { if (!localStorage.getItem("nephew_consent")) setShow(true); }, []);
  if (!show) return null;
  function accept() { localStorage.setItem("nephew_consent", "accepted"); setShow(false); }
  function decline() { localStorage.setItem("nephew_consent", "declined"); setShow(false); }
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md rounded-xl border border-border bg-background p-4 shadow-lg md:left-auto md:right-6">
      <p className="text-sm text-muted-foreground">We use minimal analytics to improve our website. No third-party tracking cookies.</p>
      <div className="mt-3 flex gap-2">
        <button onClick={accept} className="rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">Accept</button>
        <button onClick={decline} className="rounded-lg border border-border px-4 py-1.5 text-sm font-medium">Decline</button>
      </div>
    </div>
  );
}
