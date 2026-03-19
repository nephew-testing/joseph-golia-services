import { siteConfig } from "@/lib/config";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Topsoil Delivery Stamford CT | Joseph Golia Services",
  description: "Premium topsoil delivery in Stamford CT since 1988. Quality soil for landscaping & gardening projects. Call (203) 324-6705 for free quote.",
};

export default function TopsoilDeliveryStamfordPage() {
  return (
    <main>
      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Premium Topsoil Delivery in Stamford, CT</h1>
          <p className="mt-4 text-lg text-muted-foreground">Quality landscaping soil delivered to your door since 1988. Perfect for gardens, lawns, and commercial projects.</p>
          <div className="mt-8"><a href="/contact" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">Get Free Quote</a></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Professional Topsoil Delivery Throughout Stamford</h2>
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4"><p>Joseph Golia Services has been delivering premium topsoil to Stamford, CT properties for over 35 years. Our nutrient-rich soil is perfect for establishing new lawns, improving garden beds, and supporting healthy plant growth. With 55+ years of combined landscaping experience, we help residential and commercial customers choose the right soil blend for their specific project needs. We deliver throughout Stamford and surrounding areas, ensuring your landscaping materials arrive fresh and ready to use.</p></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">Why Choose Our Topsoil Delivery Service</h2>
          
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Premium Quality Soil</h3>
                <p className="mt-2 text-muted-foreground">Nutrient-rich topsoil tested and blended for optimal plant growth and lawn establishment</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Convenient Delivery</h3>
                <p className="mt-2 text-muted-foreground">Direct delivery to your Stamford property with flexible scheduling to fit your project timeline</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Expert Consultation</h3>
                <p className="mt-2 text-muted-foreground">Over 55 years of landscaping experience helps you select the perfect soil for your specific needs</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Residential & Commercial</h3>
                <p className="mt-2 text-muted-foreground">Serving homeowners, contractors, and businesses throughout Stamford with reliable material supply</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Established Since 1988</h3>
                <p className="mt-2 text-muted-foreground">Three decades of trusted service in the Stamford community with consistent quality and reliability</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Additional Materials</h3>
                <p className="mt-2 text-muted-foreground">Complete landscaping supply including mulches, grass seed, fertilizers, and soil amendments</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">Topsoil Delivery Questions</h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What areas do you deliver topsoil to in Stamford?</h3>
              <p className="mt-2 text-muted-foreground">We deliver premium topsoil throughout Stamford, CT and surrounding areas. Call (203) 324-6705 to confirm delivery to your specific location.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How much topsoil do I need for my project?</h3>
              <p className="mt-2 text-muted-foreground">The amount depends on your project size and soil depth needed. Our experienced team at Joseph Golia Services can help calculate the right quantity based on your lawn or garden dimensions.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What type of topsoil do you deliver?</h3>
              <p className="mt-2 text-muted-foreground">We supply nutrient-rich, tested topsoil perfect for lawns, gardens, and landscaping projects. Our soil is blended for optimal drainage and plant growth in Connecticut conditions.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Do you offer same-day topsoil delivery in Stamford?</h3>
              <p className="mt-2 text-muted-foreground">We offer flexible scheduling for topsoil delivery throughout Stamford. Contact us at (203) 324-6705 to discuss availability and timing for your project.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Can you deliver other landscaping materials with topsoil?</h3>
              <p className="mt-2 text-muted-foreground">Yes! Joseph Golia Services also delivers mulches, grass seed, fertilizers, soil amendments, and other landscaping materials to complete your project in one delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Ready for Premium Topsoil Delivery in Stamford?</h2>
          <p className="mt-2 opacity-80">Get expert advice and quality soil delivered to your property. Call (203) 324-6705 or request your free quote online.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="/contact" className="rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Get Free Quote</a>
            <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg border border-current px-6 py-3 text-sm font-medium opacity-90 hover:opacity-100">Call {siteConfig.business.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
