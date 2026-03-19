import { siteConfig } from "@/lib/config";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Mulch Delivery Stamford CT | Playground Chips | Golia",
  description: "Premium mulch delivery in Stamford CT. Decorative mulches & safety playground chips. 35+ years experience. Call (203) 324-6705 for quote.",
};

export default function MulchPlaygroundChipsPage() {
  return (
    <main>
      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Premium Mulch Delivery in Stamford CT</h1>
          <p className="mt-4 text-lg text-muted-foreground">Decorative mulches and safety playground chips delivered to your door. Over 35 years serving Stamford homeowners and businesses.</p>
          <div className="mt-8"><a href="/contact" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">Get Free Quote</a></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Quality Mulch & Playground Materials Since 1988</h2>
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4"><p>Joseph Golia Services has been Stamford's trusted source for landscaping materials for over 35 years. We deliver premium mulch and playground chips directly to residential and commercial properties throughout Stamford, CT.</p><p>Our decorative mulches enhance your garden beds while retaining moisture and suppressing weeds. For playgrounds and play areas, our certified safety chips meet ASTM standards for impact attenuation, providing a safe surface for children.</p><p>With 55 years of combined landscaping experience, we help you choose the right materials for your specific needs. Whether you're refreshing flower beds or creating a safe playground surface, we deliver quality materials with expert guidance.</p></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">Our Mulch & Playground Chip Options</h2>
          
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Decorative Bark Mulch</h3>
                <p className="mt-2 text-muted-foreground">Natural hardwood and pine bark mulches in various colors. Perfect for flower beds, tree rings, and landscape borders.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Colored Mulches</h3>
                <p className="mt-2 text-muted-foreground">Red, brown, and black dyed mulches that maintain vibrant color throughout the season. Ideal for creating striking landscape designs.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Playground Safety Chips</h3>
                <p className="mt-2 text-muted-foreground">ASTM-certified wood chips designed for playground surfacing. Provides proper impact attenuation for safe play areas.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Bulk Delivery Service</h3>
                <p className="mt-2 text-muted-foreground">Convenient delivery throughout Stamford CT. We bring materials directly to your property and can place them where you need them.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">Mulch & Playground Chip Questions</h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How much mulch do I need for my landscaping project?</h3>
              <p className="mt-2 text-muted-foreground">Generally, you'll need 2-3 inches of mulch depth. For a 100 square foot area, that's about 1 cubic yard. Our team can help calculate the exact amount based on your project size and provide expert recommendations.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Are your playground chips safe for children?</h3>
              <p className="mt-2 text-muted-foreground">Yes, our playground chips meet ASTM F1292 standards for impact attenuation. They're specifically designed for playground safety and provide proper cushioning for falls from playground equipment.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Do you deliver mulch throughout Stamford CT?</h3>
              <p className="mt-2 text-muted-foreground">Absolutely. Joseph Golia Services delivers mulch and playground chips throughout Stamford and surrounding areas. We've been serving local homeowners and businesses since 1988 with reliable delivery service.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What's the difference between natural and colored mulch?</h3>
              <p className="mt-2 text-muted-foreground">Natural mulch breaks down over time, enriching your soil. Colored mulches are treated with safe, non-toxic dyes that maintain their appearance longer but don't add as many nutrients to the soil.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How often should playground chips be replaced?</h3>
              <p className="mt-2 text-muted-foreground">Playground chips typically need refreshing every 1-2 years depending on usage and weather. We recommend maintaining 6-12 inches of depth for proper safety cushioning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Ready for Quality Mulch Delivery in Stamford?</h2>
          <p className="mt-2 opacity-80">Get expert advice and reliable delivery from Stamford's trusted landscaping materials supplier since 1988.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="tel:2033246705" className="rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Call (203) 324-6705</a>
            <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg border border-current px-6 py-3 text-sm font-medium opacity-90 hover:opacity-100">Call {siteConfig.business.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
