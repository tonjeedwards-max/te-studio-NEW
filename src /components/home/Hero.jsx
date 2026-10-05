import { motion } from "framer-motion";
import { hero } from "@/data/site";
import SunflowerMotif from "@/components/site/SunflowerMotif";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      {/* faded sunflower accents */}
      <SunflowerMotif className="pointer-events-none absolute -right-10 top-24 h-44 w-44 text-goldDeep/15" />
      <SunflowerMotif className="pointer-events-none absolute left-6 bottom-10 h-28 w-28 text-goldDeep/10" />

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center justify-center px-6 py-24">
        {/* gold circle behind */}
        <div className="pointer-events-none absolute left-[8%] top-1/2 h-[44vh] w-[44vh] -translate-y-1/2 rounded-full bg-goldDeep/90 sm:left-[14%]" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ duration: 0.8 }}
            className="font-script text-6xl text-foreground sm:text-8xl"
          >
            {hero.signature}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-4 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl"
          >
            {hero.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-3 text-lg font-medium text-white sm:text-2xl"
          >
            {hero.sub}
          </motion.p>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 self-end font-display text-xl font-extrabold tracking-[0.3em] text-foreground sm:text-3xl"
          >
            {hero.suffix}
          </motion.span>
        </div>
      </div>
    </section>
  );
}
