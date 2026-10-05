import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { portfolioCategories } from "@/data/site";
import PortfolioOtherStuff from "@/components/site/PortfolioOtherStuff";

const cats = Object.values(portfolioCategories);

export default function PortfolioLayout({ slug, sections }) {
  const data = portfolioCategories[slug];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      {/* header */}
      <div className="flex flex-col gap-3 border-b border-border pb-8">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-foreground">
          {data.eyebrow}
        </span>
        <h1 className="font-serif text-4xl font-bold italic text-accent sm:text-5xl">
          {data.title}
        </h1>
        <p className="max-w-xl text-sm text-foreground/70">{data.description}</p>
      </div>

      {/* category switcher */}
      <div className="mt-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <Link
            key={c.slug}
            to={c.to}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              c.slug === slug
                ? "bg-accent text-white"
                : "border border-border text-foreground hover:border-accent hover:text-accent"
            }`}
          >
            {c.title}
          </Link>
        ))}
      </div>

      {/* project sections */}
      <div className="mt-16">
        {sections.map((s) => (
          <section key={s.number} className="mt-16 first:mt-0">
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="text-sm font-semibold text-periwinkle">
                {s.number}
              </span>
              <h2 className="font-display text-2xl font-bold text-accent sm:text-3xl">
                {s.category}
              </h2>
              {s.title && (
                <h3 className="font-display text-xl font-bold text-accent">
                  {s.title}
                </h3>
              )}
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80">
                {s.body}
              </p>
              {s.note && (
                <p className="mx-auto mt-3 max-w-2xl text-sm italic leading-relaxed text-foreground/60">
                  {s.note}
                </p>
              )}
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {s.images.map((img, i) => (
                <figure key={i} className="flex flex-col gap-3">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={img.src}
                      alt={img.caption}
                      fittingType="fill"
                      className={`h-full w-full ${img.bw ? "grayscale" : ""}`}
                    />
                  </div>
                  <figcaption className="px-2 text-center text-xs italic leading-relaxed text-foreground/70">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* next / back */}
      <PortfolioOtherStuff current={slug} />
    </div>
  );
}
