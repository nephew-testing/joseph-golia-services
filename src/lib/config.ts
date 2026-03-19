export const siteConfig = {
  business: {
    name: "Joseph Golia Services",
    tagline: "Premium landscaping materials since 1988",
    description: "Joseph Golia Services is a landscaping materials supplier established in 1988, offering topsoil, mulches, playground chips, grass seed, fertilizers, soil amendments, and winter materials. With over 55 years of combined landscaping experience, they serve both residential and commercial customers in the Stamford, CT area with quality materials and expert consultation.",
    phone: "(203) 324-6705",
    email: "info@josephgoliaservices.com",
    address: "37 Vassar Avenue, Stamford, CT 06902",
    hours: "not found",
    founded: "2026",
  },

  brand: {
    primaryColor: "#2563EB",
    secondaryColor: "#1E293B",
    accentColor: "#F59E0B",
    headingFont: "Inter",
    bodyFont: "Inter",
    voice: "professional, friendly, and approachable",
  },

  social: {
    instagram: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    tiktok: "",
    youtube: "",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],

  seo: {
    defaultTitle: "Joseph Golia Services",
    titleTemplate: "%s | Joseph Golia Services",
    defaultDescription: "Joseph Golia Services is a landscaping materials supplier established in 1988, offering topsoil, mulches, playground chips, grass seed, fertilizers, soil amendments, and winter materials. With over 55 years of combined landscaping experience, they serve both residential and commercial customers in the Stamford, CT area with quality materials and expert consultation.",
    siteUrl: "https://joseph-golia-services.vercel.app",
  },

  features: {
    booking: false,
    blog: true,
    contactForm: true,
    emailSubscribe: true,
    reviews: false,
  },

  nephew: {
    tenantId: process.env.NEPHEW_TENANT_ID ?? "",
    apiUrl: process.env.NEPHEW_API_URL ?? "https://api.nephew.app",
  },
} as const;

export type SiteConfig = typeof siteConfig;
