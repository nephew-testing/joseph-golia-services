import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "Landscaping Materials Delivery FAQ | Joseph Golia Services",
  description: "Get answers to common questions about landscaping materials delivery, quantities, and specifications. Contact us for expert consultation today.",
};

export default function FaqPage() {
  return (
    <main>
      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Landscaping Materials Delivery FAQ</h1>
          <p className="mt-4 text-lg text-muted-foreground">Get answers to your most common questions about our topsoil, mulch, and landscaping materials delivery in Stamford, CT</p>
          
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Do you deliver landscaping materials to my location in Stamford?</h3>
              <p className="mt-2 text-muted-foreground">Yes, Joseph Golia Services delivers topsoil, mulch, playground chips, and other landscaping materials throughout Stamford, CT and surrounding areas. We've been serving residential and commercial customers since 1988 with reliable delivery service. Call (203) 324-6705 to confirm delivery to your specific address.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What's the minimum order for landscaping materials delivery?</h3>
              <p className="mt-2 text-muted-foreground">Our delivery minimums vary by material and location within the Stamford area. For bulk materials like topsoil and mulch, we typically deliver 1 cubic yard or more. Smaller quantities of specialty items like grass seed and fertilizers may be available for pickup. Contact us at info@josephgoliaservices.com for specific minimums.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How do I calculate how much topsoil or mulch I need?</h3>
              <p className="mt-2 text-muted-foreground">For topsoil: multiply length × width × desired depth (in feet) ÷ 27 = cubic yards needed. For mulch: use the same formula but with 2-3 inch depth. Our team has over 55 years of combined experience and can help you calculate exact quantities. We provide free consultations to ensure you order the right amount.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What types of mulch do you deliver in Stamford?</h3>
              <p className="mt-2 text-muted-foreground">We deliver various mulch types including hardwood mulch, colored mulches, and playground chips. Each serves different purposes - decorative mulches for landscaping, playground chips for safety surfaces, and organic mulches for soil health. Our experts can recommend the best mulch type for your specific project needs.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Can you deliver landscaping materials on weekends?</h3>
              <p className="mt-2 text-muted-foreground">Weekend delivery availability varies based on our schedule and material type. We recommend calling (203) 324-6705 in advance to arrange weekend delivery for your topsoil, mulch, or other landscaping materials. Our established relationships since 1988 allow us flexibility to accommodate special scheduling requests when possible.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Do you provide soil amendments and fertilizers with delivery?</h3>
              <p className="mt-2 text-muted-foreground">Yes, we deliver soil amendments, fertilizers, grass seed, and winter materials along with bulk items like topsoil and mulch. This allows you to get everything needed for your landscaping project in one delivery to your Stamford location. We can coordinate timing to ensure materials arrive when you're ready to use them.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What should I prepare before landscaping materials delivery?</h3>
              <p className="mt-2 text-muted-foreground">Ensure clear access to your delivery location with at least 10 feet of overhead clearance and firm, level ground for our trucks. Mark any underground utilities and remove vehicles from the delivery area. Our experienced team will work with you to find the best placement spot on your Stamford property for easy material access.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How far in advance should I schedule my delivery?</h3>
              <p className="mt-2 text-muted-foreground">We recommend scheduling landscaping materials delivery 2-3 days in advance, especially during peak spring and fall seasons. This ensures availability of your specific materials and preferred delivery time. For urgent projects in the Stamford area, call (203) 324-6705 - our 35+ years in business means we often have materials ready for same-day or next-day delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Still Have Questions About Our Landscaping Materials?</h2>
          <p className="mt-2 opacity-80">Our experienced team is ready to help you choose the right materials and schedule delivery to your Stamford location. Get expert consultation from a company that's been serving the community since 1988.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="tel:(203) 324-6705" className="rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Contact Us Today</a>
            <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg border border-current px-6 py-3 text-sm font-medium opacity-90 hover:opacity-100">Call {siteConfig.business.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
