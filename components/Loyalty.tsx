import { ArrowRight, Check, HandCoins } from "lucide-react";
import { MagicCard } from "./MagicCard";
import { Reveal } from "./Motion";

const benefits = ["Free Play Credits", "Exclusive Prize Raffles", "Spin the Wheel: Instant Prizes", "Diamond Jackpots"];

export function Loyalty({ logo }: { logo: React.ReactNode }) {
  return (
    <section id="loyalty" aria-labelledby="loyalty-title" className="band !pt-0">
      <div className="shell">
        <Reveal>
          <div className="panel relative grid items-center gap-8 overflow-hidden p-6 sm:p-10 lg:grid-cols-[1.05fr_1fr_auto] lg:gap-12 lg:py-8 lg:pl-8 lg:pr-12">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(50%_90%_at_20%_50%,rgb(217_174_98/0.12),transparent_70%)]"
            />
            <MagicCard logo={logo} />

            <div className="relative">
              <p className="eyebrow">Loyalty Rewards</p>
              <h2 id="loyalty-title" className="h2 mt-4">
                Play More. Enjoy More.
              </h2>
              <p className="lede mt-4 !text-[1rem]">
                Discover Star Magic Pay, our loyalty programme offering exclusive rewards and exciting opportunities
                every time you visit.
              </p>
              <ul className="mt-6 grid gap-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-4 text-[1rem] font-medium">
                    <Check size={19} strokeWidth={2.2} className="shrink-0 text-gold" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex flex-col items-start gap-5 border-t border-line pt-8 lg:items-center lg:border-l lg:border-t-0 lg:py-6 lg:pl-12 lg:pt-6 lg:text-center">
              <HandCoins size={44} strokeWidth={1.1} className="hidden text-gold lg:block" aria-hidden />
              <a href="#promotions" className="btn btn-gold">
                Discover Magic Pay
                <ArrowRight size={17} strokeWidth={1.8} aria-hidden />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
