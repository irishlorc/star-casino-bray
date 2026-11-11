"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { EASE } from "./Motion";

/**
 * Stand-in for the Star Magic Pay card until card artwork is supplied:
 * set /public/images/magic-pay-card.png and swap the inner markup for an <Image>.
 * It carries only the official logo and the programme name.
 */
export function MagicCard({ logo }: { logo: ReactNode }) {
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rx = useSpring(useTransform(py, [-0.5, 0.5], [9, -9]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 18 });
  const glareX = useTransform(px, [-0.5, 0.5], ["15%", "85%"]);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div
      className="relative mx-auto flex aspect-[5/4] w-full max-w-[32rem] items-center justify-center [perspective:1400px]"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {/* stage light */}
      <div
        aria-hidden
        className="absolute inset-[8%] rounded-full bg-[radial-gradient(closest-side,rgb(217_174_98/0.42),transparent)] blur-3xl [animation:glow_9s_ease-in-out_infinite]"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 60, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -9 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 1.5, ease: EASE }}
        className="relative w-[88%] [transform-style:preserve-3d]"
      >
        <motion.div
          style={{ rotateX: rx, rotateY: ry }}
          className="relative aspect-[1.586] overflow-hidden rounded-[1.1rem] bg-[linear-gradient(128deg,#34312f_0%,#17171a_42%,#0e0e10_64%,#2d2820_100%)] shadow-[0_60px_110px_-30px_rgb(0_0_0/0.95),0_0_60px_-10px_rgb(217_174_98/0.25),inset_0_0_0_1px_rgb(240_203_134/0.55),inset_0_1px_0_1px_rgb(255_255_255/0.08)]"
          role="img"
          aria-label="Star Magic Pay loyalty card"
        >
          {/* fine guilloché rings, as on a bank card */}
          <div
            aria-hidden
            className="absolute -right-[22%] -top-[60%] aspect-square w-[95%] rounded-full opacity-60 [background:repeating-radial-gradient(circle,transparent_0_9px,rgb(240_203_134/0.26)_9px_10px)]"
          />
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(115deg,transparent_55%,rgb(240_203_134/0.1)_100%)]" />
          <motion.div
            aria-hidden
            style={{ left: glareX }}
            className="absolute -top-1/2 h-[200%] w-1/3 -translate-x-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/[0.09] to-transparent"
          />
          <div aria-hidden className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-gold-warm/15 to-transparent [animation:sheen_7s_ease-in-out_infinite]" />

          <div aria-hidden className="absolute inset-[3.2%] rounded-[0.7rem] border border-gold/25" />
          <div className="relative flex h-full flex-col justify-between p-[8.5%]">
            <div className="origin-top-left scale-90 sm:scale-100">{logo}</div>
            <div>
              <p className="whitespace-nowrap font-display text-[clamp(1.25rem,5.2vw,2rem)] leading-none text-gold-warm lg:text-[clamp(1.4rem,2.3vw,2rem)]">
                Star Magic Pay
              </p>
              <p className="mt-2.5 text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-paper/60 sm:text-[0.6875rem]">
                Loyalty card
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
