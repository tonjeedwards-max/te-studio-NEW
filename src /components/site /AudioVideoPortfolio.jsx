import { Link } from "react-router-dom";
import { audioVideoPortfolio, portfolioCategories } from "@/data/site";
import PortfolioOtherStuff from "@/components/site/PortfolioOtherStuff";

const cats = Object.values(portfolioCategories);
const data = portfolioCategories.audio;

export default function AudioVideoPortfolio() {
  const { sections } = audioVideoPortfolio;

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
              c.slug === "audio"
                ? "bg-accent text-white"
                : "border border-border text-foreground hover:border-accent hover:text-accent"
            }`}
          >
            {c.title}
          </Link>
        ))}
      </div>

      {/* sections */}
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
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80">
                {s.body}
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {s.items.map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="aspect-video overflow-hidden rounded-xl bg-foreground/5">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.youtubeId}`}
                      title={item.title}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* next / back */}
      <PortfolioOtherStuff current="audio" />
    </div>
  );
}
