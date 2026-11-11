"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { site } from "@/lib/site";
import { EASE } from "./Motion";
import { OpenStatus } from "./OpenStatus";

export function Header({ logo }: { logo: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    site.nav.forEach((n) => {
      const el = document.querySelector(n.href);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`absolute inset-0 border-b transition-all duration-700 ease-[var(--ease-lux)] ${
            scrolled && !open
              ? "border-line bg-ink/80 backdrop-blur-xl"
              : "border-transparent bg-gradient-to-b from-ink/70 to-transparent"
          }`}
        />
        <div
          className={`shell relative flex items-center justify-between transition-[height] duration-700 ease-[var(--ease-lux)] ${
            scrolled ? "h-16 lg:h-[4.5rem]" : "h-20 lg:h-24"
          }`}
        >
          <a href="#top" aria-label="Star Casino, back to top" className="relative z-10 shrink-0" onClick={() => setOpen(false)}>
            {logo}
          </a>

          <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
            <ul className="flex items-center gap-10 text-[0.9375rem] text-paper/80">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={active === item.href ? "true" : undefined}
                    className={`relative py-2 transition-colors hover:text-paper after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:bg-gold after:transition-transform after:duration-500 ${
                      active === item.href ? "text-paper after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#visit"
              className="group hidden h-11 items-center gap-2.5 rounded-full border border-gold/70 px-5 text-sm font-medium text-gold-warm transition-colors duration-500 hover:border-gold hover:bg-gold hover:text-ink sm:inline-flex"
            >
              <MapPin size={15} strokeWidth={1.6} aria-hidden />
              Bray, Wicklow
            </a>

            <button
              type="button"
              className="relative z-10 -mr-2 flex h-12 w-12 items-center justify-center lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3 w-7" aria-hidden>
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-paper transition-transform duration-500 ease-[var(--ease-lux)] ${
                    open ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-px w-full bg-paper transition-transform duration-500 ease-[var(--ease-lux)] ${
                    open ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-40 flex flex-col bg-ink lg:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-1/3 top-1/4 h-[70vw] w-[70vw] rounded-full bg-gold/10 blur-[90px]"
            />
            <nav aria-label="Mobile" className="shell relative flex flex-1 flex-col justify-center pt-20">
              <ul>
                {site.nav.map((item, i) => (
                  <li key={item.href} className="overflow-hidden border-b border-line">
                    <motion.a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 font-display text-[2.6rem] leading-none tracking-[-0.03em]"
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.06 }}
                    >
                      {item.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              className="shell relative grid gap-1 pb-10 text-[0.9375rem] text-mute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <OpenStatus className="mb-3 text-paper" />
              <a href={site.phone.href} className="py-1 text-paper">
                {site.phone.display}
              </a>
              <span>
                {site.address.street}, {site.address.locality}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
