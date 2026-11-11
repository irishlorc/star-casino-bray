"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { EASE } from "./Motion";

const lines = ["Bray’s Premium", "Gaming Experience"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <section ref={ref} id="top" className="relative isolate overflow-hidden">
      <motion.div className="absolute inset-0 -z-10" style={{ y }}>
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: EASE }}
        >
          <Image
            src="/images/floor-aisle.jpg"
            alt="Rows of slot machines and leather seats along the main aisle of the Star Casino gaming floor"
            fill
            priority
            sizes="100vw"
            className="grade-deep object-cover object-[50%_92%] lg:left-[22%] lg:w-[78%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b0b0d_0%,#0b0b0d_18%,rgb(11_11_13/0.82)_40%,rgb(11_11_13/0.12)_72%,rgb(11_11_13/0.3)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#0b0b0d_0%,rgb(11_11_13/0.2)_32%,transparent_60%,rgb(11_11_13/0.75)_100%)]" />
      </motion.div>

      <div className="shell pb-36 pt-36 sm:pb-44 lg:pb-52 lg:pt-44">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.4 }}
        >
          Star Casino Bray
        </motion.p>

        <h1 className="h1 mt-5">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.14em]">
              <motion.span
                className="block"
                initial={{ y: "108%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.5 + i * 0.12 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.95 }}
        >
          <p className="lede mt-4 max-w-[27rem]">
            A modern, welcoming casino venue in the heart of Bray, with top gaming brands, great rewards and more.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#visit" className="btn btn-gold">
              Visit Us Today
              <ArrowRight size={17} strokeWidth={1.8} aria-hidden />
            </a>
            <a href="#gaming" className="btn btn-line">
              Explore Our Venue
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
