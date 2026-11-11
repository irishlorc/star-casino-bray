"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Reveal } from "./Motion";

export function Wheel() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <section id="promotions" aria-labelledby="wheel-title" className="band !pt-0">
      <div className="shell">
        <div
          ref={ref}
          className="relative isolate flex min-h-[39rem] items-end overflow-hidden rounded-[0.875rem] border border-paper/10 lg:min-h-[26rem] lg:items-center"
        >
          <motion.div className="absolute inset-x-0 top-0 -z-10 h-[56%] lg:inset-0 lg:left-[30%] lg:h-auto" style={{ scale }}>
            <Image
              src="/images/wheel.jpg"
              alt="The illuminated Wheel of Fortune at Star Casino, ringed with lights, beside its touchscreen console"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-[56%_38%] lg:object-[52%_36%]"
            />
            <div
              aria-hidden
              className="absolute left-[55%] top-[38%] h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(240_203_134/0.2),transparent)] mix-blend-screen [animation:glow_7s_ease-in-out_infinite]"
            />
          </motion.div>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#0e0e11_0%,#0e0e11_44%,transparent_62%)] lg:bg-[linear-gradient(90deg,#0e0e11_0%,#0e0e11_30%,rgb(14_14_17/0.7)_46%,transparent_66%)]" />

          <Reveal className="max-w-[30rem] p-6 sm:p-10 lg:px-12">
            <p className="eyebrow">Exclusive Rewards</p>
            <h2 id="wheel-title" className="h2 mt-4">
              Your Chance to Spin &amp; Win
            </h2>
            <p className="lede mt-4 !text-[1rem]">
              Experience the excitement of Star Casino&rsquo;s Wheel of Fortune, with prizes, rewards and exclusive
              opportunities for eligible loyalty members.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
