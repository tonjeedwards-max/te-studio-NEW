import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { aboutPage, aboutNerdingOut, site } from "@/data/site";
import SunflowerMotif from "@/components/site/SunflowerMotif";

export default function About() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary to-yellow">
        <SunflowerMotif className="pointer-events-none absolute -right-12 top-28 h-52 w-52 text-foreground/10" />
        <SunflowerMotif className="pointer-events-none absolute -left-16 bottom-8 h-40 w-40 text-foreground/10" />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center">
          <h1 className="font-serif text-5xl font-bold italic text-foreground sm:text-7xl">
            {aboutPage.hero.title}
          </h1>
          <p className="mt-5 font-serif text-xl italic text-foreground/80 sm:text-2xl">
            {aboutPage.hero.sub}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75">
            {aboutPage.hero.body}
          </p>
        </div>

      </section>

      {/* CARDS */}
      <section className="relative overflow-hidden bg-gradient-to-b from-yellow via-primary/30 to-secondary">
        <SunflowerMotif className="pointer-events-none absolute right-10 top-10 h-40 w-40 text-goldDeep/10" />
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {aboutPage.cards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-2xl bg-background/95 p-7 shadow-lg backdrop-blur"
              >
                <span className="h-1 w-12 rounded-full bg-accent" />
                <h2 className="mt-4 font-serif text-2xl font-bold text-foreground">
                  {card.title}
                </h2>
                {card.body ? (
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                    {card.body}
                  </p>
                ) : (
                  <ul className="mt-3 flex flex-col gap-2">
                    {card.list.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                        <span className="text-accent">▸</span> {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN I AM NOT WORKING / NERDING OUT */}
      <section className="relative overflow-hidden bg-background">
        <SunflowerMotif className="pointer-events-none absolute -right-16 top-0 h-64 w-64 text-goldDeep/[0.05]" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {aboutNerdingOut.badge}
            </span>
            <h2 className="mt-5 font-serif text-4xl font-bold text-accent sm:text-5xl">
              {aboutNerdingOut.title}
            </h2>
            <h2 className="font-serif text-4xl font-bold italic text-accent sm:text-5xl">
              {aboutNerdingOut.subtitle}
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {aboutNerdingOut.images.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt={`Nerding out ${i + 1}`}
                  fittingType="fill"
                  className="h-full w-full"
                />
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-foreground/75">
            {aboutNerdingOut.body}
          </p>
        </div>
      </section>

      {/* WHY I'M A GOOD INVESTMENT */}
      <section className="relative overflow-hidden bg-yellow">
        <SunflowerMotif className="pointer-events-none absolute -left-20 top-0 h-72 w-72 text-goldDeep/15" />
        <SunflowerMotif className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 text-goldDeep/10" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <h2 className="font-serif text-4xl font-bold italic text-foreground sm:text-5xl">
            {aboutPage.investment.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75">
            {aboutPage.investment.body}
          </p>

          {/* video placeholder */}
          <div className="relative mx-auto mt-10 aspect-video w-full max-w-2xl overflow-hidden rounded-2xl bg-background shadow-xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-foreground/15">
                <Play size={30} className="translate-x-0.5 text-foreground/30" fill="currentColor" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-foreground/40">
                Video coming soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* LET'S WORK TOGETHER */}
      <section className="bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-20 sm:flex-row sm:items-center sm:justify-between sm:py-24">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl font-bold italic text-accent sm:text-5xl">
              {aboutPage.workTogether.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/75">
              {aboutPage.workTogether.body}
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-white shadow-gold transition-transform hover:scale-105"
          >
            {aboutPage.workTogether.cta} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* quick links to resume / skills */}
      <section className="bg-secondary/50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6 py-10">
          <Link to="/resume" className="rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent">
            View Resume
          </Link>
          <Link to="/skills" className="rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent">
            See Skills
          </Link>
          <Link to="/portfolio" className="rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent">
            Photography Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
