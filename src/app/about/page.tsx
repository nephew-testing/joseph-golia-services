import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "About Joseph Golia Services - Landscaping Materials Stamford",
  description: "Family-owned landscaping materials supplier since 1988. 35+ years serving Stamford, CT with quality topsoil, mulch & more. Contact us today!",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Family-Owned Landscaping Materials Supplier Since 1988</h1>
          <p className="mt-4 text-lg text-muted-foreground">Three decades of serving Stamford, Connecticut with quality materials and trusted expertise</p>
          <div className="mt-8"><a href="tel:(203) 324-6705" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">Get Expert Consultation</a></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Our Story: Building Stamford's Landscapes Since 1988</h2>
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4"><p>Joseph Golia Services began as a vision to provide Stamford homeowners and contractors with premium landscaping materials backed by genuine expertise. What started as a local landscaping materials supplier has grown into the trusted source for topsoil, mulches, playground chips, and soil amendments throughout Stamford, CT.</p><p>For over 35 years, we've watched neighborhoods transform and helped countless projects come to life. From residential garden makeovers to large commercial installations, our family business has been there every step of the way. We're not just suppliers – we're your neighbors who understand Stamford's unique soil conditions and climate challenges.</p><p>Located at 37 Vassar Avenue, we've built our reputation on quality materials, fair pricing, and the kind of personal service that only comes from a family-owned business. When you call Joseph Golia Services, you're talking to people who genuinely care about your project's success.</p></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Our Mission: Quality Materials, Expert Guidance</h2>
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4"><p>At Joseph Golia Services, we believe every landscaping project deserves the best foundation. That's why we've spent decades sourcing premium topsoil, carefully selected mulches, and specialized soil amendments that work specifically in Connecticut's climate.</p><p>Our 55+ years of combined landscaping experience means we don't just sell materials – we provide consultation. Need to know which topsoil works best for your drainage issues? Wondering about the right mulch depth for your plantings? We've seen it all and we're here to share that knowledge.</p><p>We serve both residential homeowners and commercial contractors because we understand that every project matters. Whether you're planting a small garden bed or preparing acres for development, you deserve materials that perform and service you can count on.</p></div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Ready to Start Your Next Landscaping Project?</h2>
          <p className="mt-2 opacity-80">Get expert advice and quality materials from Stamford's trusted landscaping materials supplier</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="tel:(203) 324-6705" className="rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Call (203) 324-6705</a>
            <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg border border-current px-6 py-3 text-sm font-medium opacity-90 hover:opacity-100">Call {siteConfig.business.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
