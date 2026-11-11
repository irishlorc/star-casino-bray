import { CircleParking, Coffee, Dices, Star, type LucideIcon } from "lucide-react";
import { Reveal } from "./Motion";

const items: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Dices, title: "Premium Gaming Floor", text: "A wide range of modern gaming machines." },
  { icon: Star, title: "Leading Gaming Brands", text: "Popular favourites and exciting games." },
  { icon: Coffee, title: "Drinks While You Play", text: "Brought to you on the gaming floor." },
  { icon: CircleParking, title: "Easy Parking", text: "Convenient on-site parking." },
];

export function Highlights() {
  return (
    <section aria-labelledby="highlights-title" className="relative z-10 -mt-24 sm:-mt-28 lg:-mt-32">
      <h2 id="highlights-title" className="sr-only">
        Why visit Star Casino
      </h2>
      <ul className="shell grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
        {items.map(({ icon: Icon, title, text }, i) => (
          <li key={title}>
            <Reveal delay={0.08 * i} className="h-full">
              <div className="panel group flex h-full flex-col items-center px-4 py-7 text-center backdrop-blur-md transition-[border-color,transform] duration-500 ease-[var(--ease-lux)] hover:-translate-y-1 hover:border-gold/50 sm:px-6 sm:py-8">
                <Icon
                  aria-hidden
                  size={38}
                  strokeWidth={1.25}
                  className="text-gold transition-colors duration-500 group-hover:text-gold-warm"
                />
                <h3 className="h3 mt-5 !font-sans !text-[1.0625rem] !font-semibold !tracking-normal">{title}</h3>
                <p className="mt-2 max-w-[13rem] text-[0.9375rem] leading-snug text-mute">{text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
