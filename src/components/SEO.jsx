import { APP_STRINGS } from "../constants/strings";

export default function SEO({
  title = "Nammarashi Travels – Trusted Cab Service in Hubli | 24/7 Booking",
  description = "Book reliable cabs in Hubli–Dharwad. Fixed fares, clean cars, 24/7 availability. Airport drops, outstation trips to Dandeli, Goa, Bangalore. Call or WhatsApp now.",
  url = "https://yourwebsite.com",
  image = "https://yourwebsite.com/og-image.jpg",
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Nammarashi Travels",
    description: "Trusted cab service in Hubli offering fixed fares, airport drops, and outstation trips.",
    url,
    telephone: `+91${APP_STRINGS.OwnerContact.phone}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Hubli",
      addressRegion: "Karnataka",
      postalCode: "580020",
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "₹₹",
    areaServed: ["Hubli", "Dharwad", "Dandeli", "Belgaum", "Goa"],
  };

  return (
    <>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="cab service Hubli, taxi Hubli, Hubli to Dandeli cab, airport taxi Hubli, outstation cab Hubli" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* WhatsApp / Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </>
  );
}