"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/config";
export function Analytics() {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window === "undefined") return;
    const consent = localStorage.getItem("nephew_consent");
    if (consent !== "accepted") return;
    // Send pageview to Nephew analytics API
    fetch(siteConfig.nephew.apiUrl + "/api/sites/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tenantId: siteConfig.nephew.tenantId,
        event: "pageview",
        path: pathname,
        referrer: document.referrer || null,
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => {}); // Non-blocking
  }, [pathname]);
  return null;
}
