import { siteConfig } from "@/lib/config";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Grass Seed & Fertilizer Stamford CT | Joseph Golia",
  description: "Premium grass seed and fertilizer in Stamford CT. Expert consultation for lawn establishment & maintenance. Get your quote today!",
};

export default function GrassSeedFertilizerPage() {
  return (
    <main>
      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Premium Grass Seed & Fertilizer in Stamford, CT</h1>
          <p className="mt-4 text-lg text-muted-foreground">Establish beautiful lawns with quality seed and fertilizer from Joseph Golia Services. Over 35 years serving Stamford homeowners and landscapers.</p>
          <div className="mt-8"><a href="/contact" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">Get Quote Today</a></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Quality Lawn Materials & Expert Consultation</h2>
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4"><p>Since 1988, Joseph Golia Services has supplied Stamford area homeowners and landscapers with premium grass seed and fertilizer for successful lawn establishment and maintenance. Our team brings over 55 years of combined landscaping experience to help you choose the right products for your specific soil conditions and lawn goals. Whether you're starting a new lawn from scratch or overseeding an existing one, we stock high-quality grass seed varieties and fertilizers that thrive in Connecticut's climate. Located at 37 Vassar Avenue in Stamford, we provide expert consultation to ensure your lawn project succeeds from day one.</p></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">Complete Grass Seed & Fertilizer Solutions</h2>
          
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Premium Grass Seed Varieties</h3>
                <p className="mt-2 text-muted-foreground">Sun and shade grass seed blends specifically selected for Connecticut lawns, including tall fescue, perennial ryegrass, and fine fescue mixes.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Starter & Maintenance Fertilizers</h3>
                <p className="mt-2 text-muted-foreground">Slow-release and quick-release fertilizer options for new seeding, overseeding, and ongoing lawn nutrition throughout the growing season.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Soil Amendment Products</h3>
                <p className="mt-2 text-muted-foreground">Lime, compost, and other soil conditioners to create optimal growing conditions for grass seed germination and establishment.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Expert Application Guidance</h3>
                <p className="mt-2 text-muted-foreground">Professional consultation on seeding rates, timing, fertilizer schedules, and maintenance practices for maximum lawn success.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">Grass Seed & Fertilizer Questions</h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What's the best time to plant grass seed in Stamford, CT?</h3>
              <p className="mt-2 text-muted-foreground">Fall (late August through mid-October) is ideal for cool-season grasses in Connecticut. Spring seeding (April-May) is also possible but requires more water and care during summer heat.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How much grass seed do I need per square foot?</h3>
              <p className="mt-2 text-muted-foreground">For new lawns, use 2-4 pounds per 1,000 square feet depending on seed type. For overseeding, use 1-2 pounds per 1,000 square feet. We'll help calculate the exact amount for your project.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Should I fertilize when planting grass seed?</h3>
              <p className="mt-2 text-muted-foreground">Yes, starter fertilizer is essential for new grass seed. It provides phosphorus for root development and nitrogen for early growth. We recommend applying at seeding time.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What grass seed works best in Stamford's climate?</h3>
              <p className="mt-2 text-muted-foreground">Tall fescue and perennial ryegrass blends perform excellently in our area. Fine fescue works well in shaded areas. We'll recommend the best variety based on your sun exposure and soil conditions.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Do you provide delivery for grass seed and fertilizer orders?</h3>
              <p className="mt-2 text-muted-foreground">Yes, we deliver bulk orders throughout the Stamford area. Contact us at (203) 324-6705 to discuss delivery options and scheduling for your lawn project.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Ready to Start Your Perfect Lawn?</h2>
          <p className="mt-2 opacity-80">Get expert advice and quality grass seed and fertilizer from Stamford's trusted landscaping supplier. Call (203) 324-6705 or request your quote online.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="/contact" className="rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Get Your Quote</a>
            <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg border border-current px-6 py-3 text-sm font-medium opacity-90 hover:opacity-100">Call {siteConfig.business.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
