import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative bg-ink">
      <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent" />

      <div className="shell py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          <a href="#top" aria-label="Star Casino, back to top" className="shrink-0">
            <Logo className="h-12" />
          </a>

          <nav aria-label="Footer" className="lg:border-l lg:border-gold/40 lg:pl-12">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[0.9375rem]">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-underline text-paper/85 hover:text-gold-warm">
                    {item.label === "Visit Us" ? "Contact" : item.label}
                  </a>
                </li>
              ))}
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-underline text-paper/85 hover:text-gold-warm">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <address className="text-sm not-italic leading-relaxed lg:ml-auto lg:border-l lg:border-gold/40 lg:pl-12">
            <span className="block font-semibold">Star Casino Bray</span>
            <span className="block text-paper/70">
              {site.address.street}, {site.address.locality}, {site.address.region}, Ireland
            </span>
            <a href={site.phone.href} className="link-underline text-paper/70 hover:text-gold-warm">
              {site.phone.display}
            </a>
          </address>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-line pt-6 text-[0.8125rem] text-mute lg:flex-row lg:items-center lg:justify-between">
          <p className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/60 text-[0.6875rem] font-semibold text-gold-warm">
              18+
            </span>
            <span>Strictly over 18s only. Please play responsibly.</span>
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.legal.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-underline hover:text-paper">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p>&copy; {new Date().getFullYear()} Star Casino. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
