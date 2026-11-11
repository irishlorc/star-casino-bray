/**
 * Single source of truth for every fact shown on the site.
 * Address, phone, email and hours were checked against starcasinobray.com
 * on 11 Nov 2026. Change them here and they update everywhere,
 * including the structured data.
 */
export const site = {
  name: "Star Casino",
  url: "https://www.starcasinobray.com",
  description:
    "A modern, welcoming casino venue on Bray seafront, Co. Wicklow, with top gaming brands, the Star Magic Pay loyalty programme and on-site parking.",
  address: {
    lines: ["Star Casino", "Strand Road, Seafront", "Bray, Co. Wicklow"],
    street: "Strand Road, Seafront",
    locality: "Bray",
    region: "Co. Wicklow",
    eircode: "A98 D2R7",
    country: "IE",
  },
  phone: { display: "+353 1 286 3540", href: "tel:+35312863540" },
  email: "admin@starleisure.ie",
  hours: {
    days: "Monday – Sunday",
    display: "9 AM – 2 AM",
    opens: 9, // 09:00
    closes: 2, // 02:00 the following morning
  },
  // Google Maps listing: "Star Leisure & Casino", Bray seafront.
  geo: { lat: 53.1974157, lng: -6.0943393 },
  maps: {
    place:
      "https://www.google.com/maps/place/Star+Leisure+%26+Casino/@53.1974157,-6.0943393,17z/data=!3m1!4b1!4m6!3m5!1s0x4867a85dfe65c9d3:0x7ca1adb8e04a20a1!8m2!3d53.1974157!4d-6.0943393!16s%2Fg%2F1v41zwn7",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2391.5!2d-6.0943393!3d53.1974157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4867a85dfe65c9d3%3A0x7ca1adb8e04a20a1!2sStar%20Leisure%20%26%20Casino!5e0!3m2!1sen!2sie",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Star+Leisure+%26+Casino%2C+Strand+Road%2C+Bray%2C+Co.+Wicklow",
  },
  nav: [
    { label: "Home", href: "#top" },
    { label: "Gaming", href: "#gaming" },
    { label: "Loyalty", href: "#loyalty" },
    { label: "Promotions", href: "#promotions" },
    { label: "Visit Us", href: "#visit" },
  ],
  // Policy pages live on the current site. Port them before switching domains.
  legal: [
    { label: "Responsible Gaming", href: "https://www.starcasinobray.com/responsible-gaming/" },
    { label: "Cookie Policy", href: "https://www.starcasinobray.com/cookie-policy-eu/" },
    { label: "GDPR Policy", href: "https://www.starcasinobray.com/gdpr-policy" },
    { label: "CCTV Policy", href: "https://www.starcasinobray.com/cctv-policy/" },
  ],
  // No social profiles are listed on the current site. Add verified ones here
  // ({ label, href }) and they appear in the footer.
  social: [] as { label: string; href: string }[],
} as const;

export const gallery = [
  { src: "/images/floor-aisle.jpg", alt: "Rows of slot machines and leather seats along the main aisle of the Star Casino gaming floor", caption: "The main floor" },
  { src: "/images/roulette.jpg", alt: "Electronic roulette terminals beneath a wall of live game screens", caption: "Electronic roulette" },
  { src: "/images/reels.jpg", alt: "Three classic reel machines against an oak-panelled wall", caption: "Classic reels" },
  { src: "/images/poker.jpg", alt: "Video poker machines under a lit bonus pot sign", caption: "Video poker" },
  { src: "/images/floor-aisle-warm.jpg", alt: "Video slot machines lining a carpeted aisle", caption: "Video slots" },
] as const;
