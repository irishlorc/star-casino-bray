import type { Metadata, Viewport } from "next";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/hanken-grotesk";
import "./globals.css";
import { site } from "@/lib/site";
import { Motion } from "@/components/Motion";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Star Casino Bray | Premium Gaming on Bray Seafront, Co. Wicklow",
    template: "%s | Star Casino Bray",
  },
  description: site.description,
  keywords: [
    "Star Casino Bray",
    "casino Bray",
    "casino Wicklow",
    "Bray seafront casino",
    "gaming machines Bray",
    "Star Magic Pay",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "/",
    siteName: "Star Casino Bray",
    title: "Star Casino Bray | Bray’s Premium Gaming Experience",
    description: site.description,
    images: [{ url: "/images/roulette.jpg", width: 1500, height: 1000, alt: "The gaming floor at Star Casino, Bray" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Star Casino Bray",
    description: site.description,
    images: ["/images/roulette.jpg"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0D",
  colorScheme: "dark",
};

const hh = (n: number) => `${String(n).padStart(2, "0")}:00`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Casino",
  name: "Star Casino Bray",
  url: site.url,
  image: `${site.url}/images/roulette.jpg`,
  telephone: site.phone.display,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.eircode,
    addressCountry: site.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  hasMap: site.maps.place,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: hh(site.hours.opens),
    closes: hh(site.hours.closes),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IE">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Motion>{children}</Motion>
        <div aria-hidden className="grain" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
