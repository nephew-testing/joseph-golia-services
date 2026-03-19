"use client";
import { siteConfig } from "@/lib/config";
export function CalEmbed() {
  if (!siteConfig.features.booking) return null;
  // In production: use Cal.com's embed script or iframe
  return (
    <div className="rounded-xl border border-border bg-muted p-8 text-center">
      <h3 className="text-lg font-semibold">Book an Appointment</h3>
      <p className="mt-2 text-sm text-muted-foreground">Online scheduling coming soon. In the meantime, call us or use the contact form.</p>
      <div className="mt-4 flex justify-center gap-3">
        <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">Call {siteConfig.business.phone}</a>
        <a href="/contact" className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium">Contact Us</a>
      </div>
    </div>
  );
}
