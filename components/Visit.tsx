import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal, Unveil } from "./Motion";

export function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="band !pt-0">
      <div className="shell grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow">Plan Your Visit</p>
          <h2 id="visit-title" className="h2 mt-4">
            Find Us in Bray
          </h2>
          <p className="lede mt-4">
            Located along Bray&rsquo;s seafront, Star Casino offers a welcoming environment with convenient access and
            parking.
          </p>

          <dl className="mt-9 grid gap-7 text-[0.9375rem] sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-line">
            <div className="sm:pr-5">
              <MapPin size={24} strokeWidth={1.4} className="text-gold" aria-hidden />
              <dt className="mt-3 text-xs font-bold uppercase tracking-[0.14em]">Address</dt>
              <dd className="mt-2 text-paper/75">
                <address className="not-italic leading-relaxed">
                  {site.address.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                  <span className="block">{site.address.eircode}</span>
                </address>
              </dd>
            </div>
            <div className="sm:px-5">
              <Phone size={24} strokeWidth={1.4} className="text-gold" aria-hidden />
              <dt className="mt-3 text-xs font-bold uppercase tracking-[0.14em]">Contact</dt>
              <dd className="mt-2 grid justify-items-start gap-0.5 leading-relaxed text-paper/75">
                <a href={site.phone.href} className="link-underline whitespace-nowrap hover:text-gold-warm">
                  {site.phone.display}
                </a>
                <a href={`mailto:${site.email}`} className="link-underline break-all hover:text-gold-warm">
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="sm:pl-5">
              <Clock size={24} strokeWidth={1.4} className="text-gold" aria-hidden />
              <dt className="mt-3 text-xs font-bold uppercase tracking-[0.14em]">Opening Hours</dt>
              <dd className="mt-2 leading-relaxed text-paper/75">
                <span className="block">{site.hours.days}</span>
                <span className="block">{site.hours.display}</span>
              </dd>
            </div>
          </dl>

          <a href={site.maps.directions} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-9">
            Get Directions
            <ArrowRight size={17} strokeWidth={1.8} aria-hidden />
            <span className="sr-only">(opens Google Maps in a new tab)</span>
          </a>
        </Reveal>

        <Unveil delay={0.1} className="relative min-h-[20rem] rounded-[0.875rem] bg-surface lg:col-span-6 lg:min-h-[24rem]">
          <iframe
            title="Google Map showing Star Casino on Bray seafront"
            src={site.maps.embed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 h-full w-full rounded-[0.875rem] border-0"
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[0.875rem] ring-1 ring-inset ring-paper/15" />
          <a
            href={site.maps.place}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 inline-flex h-10 items-center gap-2 rounded-full border border-gold/60 bg-ink/90 px-4 text-sm font-medium text-paper backdrop-blur transition-colors hover:bg-gold hover:text-ink"
          >
            <MapPin size={15} strokeWidth={1.6} aria-hidden />
            View on Google Maps
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </Unveil>
      </div>
    </section>
  );
}
