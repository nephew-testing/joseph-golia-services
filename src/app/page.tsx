import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/lib/config"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Landscaping Materials in Stamford, CT
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Quality topsoil, mulch, grass seed, and soil amendments from Stamford's trusted supplier since 1988. Serving residential and commercial customers with expert consultation.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Get Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-background py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Complete Landscaping Materials Supply
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary">Premium Topsoil</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  High-quality topsoil blends perfect for new lawns, gardens, and landscaping projects throughout Stamford.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary">Mulch & Wood Chips</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Decorative and functional mulches plus playground chips for residential and commercial properties.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary">Grass Seed & Fertilizers</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professional-grade grass seed varieties and fertilizers to establish and maintain beautiful lawns.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary">Soil Amendments</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Compost, lime, and other soil conditioners to improve your soil's health and growing conditions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary">Winter Materials</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Salt, sand, and ice melt products to keep your Stamford property safe during winter months.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary">Expert Consultation</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Over 55 years of combined experience helping you choose the right materials for your project.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Stamford's Landscaping Materials Experts Since 1988
          </h2>
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6">
            <p>
              Joseph Golia Services has been Stamford's go-to landscaping materials supplier for over 35 years. Located on Vassar Avenue, we've built our reputation on quality materials and honest expertise.
            </p>
            <p>
              Our team combines over 55 years of landscaping experience to help residential homeowners and commercial contractors choose exactly what they need. Whether you're starting a new garden, renovating your lawn, or managing a large commercial project, we have the materials and knowledge to ensure your success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why Stamford Chooses Joseph Golia Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">35+</div>
              <div className="text-white/90 text-lg">Years</div>
              <div className="text-white/70 mt-2">Serving Stamford since 1988</div>
            </div>
            
            <div className="text-center bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">55+</div>
              <div className="text-white/90 text-lg">Years</div>
              <div className="text-white/70 mt-2">Combined landscaping experience</div>
            </div>
            
            <div className="text-center bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">Full</div>
              <div className="text-white/90 text-lg">Service</div>
              <div className="text-white/70 mt-2">Residential & commercial supply</div>
            </div>
            
            <div className="text-center bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">Local</div>
              <div className="text-white/90 text-lg">Expertise</div>
              <div className="text-white/70 mt-2">Stamford soil & climate knowledge</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Start Your Landscaping Project?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Contact Joseph Golia Services today for expert advice and quality materials delivered to your Stamford location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")}>
              <Button size="lg" variant="primary" className="text-lg px-8 py-6 w-full sm:w-auto">
                Get Your Quote
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-muted-foreground">
            <p className="text-lg">
              📍 37 Vassar Avenue, Stamford, CT 06902
            </p>
            <p className="text-lg mt-2">
              📞 <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="hover:text-primary transition-colors">
                {siteConfig.business.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}