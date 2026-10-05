import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { portfolioCategories } from "@/data/site";
import SunflowerMotif from "@/components/site/SunflowerMotif";
import PortfolioOtherStuff from "@/components/site/PortfolioOtherStuff";

const cats = Object.values(portfolioCategories);

export default function PortfolioView({ category }) {
  const data = portfolioCategories[category];
  const empty =
    (!data.items || data.items.length === 0) &&
    (!data.gallery || data.gallery.length === 0);

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
              c.slug === category
                ? "bg-accent text-white"
                : "border border-border text-foreground hover:border-accent hover:text-accent"
            }`}
          >
            {c.title}
          </Link>
        ))}
      </div>

      {empty ? (
        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-secondary/30 px-6 py-20 text-center">
          <SunflowerMotif className="h-20 w-20 text-goldDeep/40" />
          <p className="font-serif text-2xl italic text-foreground">
            Content coming soon
          </p>
          <p className="max-w-sm text-sm text-foreground/60">
            This portfolio is being assembled. Check back shortly — or reach out
            and I'll send over some samples.
          </p>
          <Link
            to="/contact"
            className="mt-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-gold"
          >
            Get in Touch
          </Link>
        </div>
      ) : (
        <>
          {data.items?.length > 0 && (
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {data.items.map((p) => (
                <div key={p.title} className="group flex flex-col">
                  <div
                    className={`overflow-hidden ${
                      p.shape === "circle"
                        ? "h-64 w-64 rounded-full mx-auto"
                        : "aspect-square rounded-2xl"
                    }`}
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fittingType="fill"
                      className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="mt-4 text-center text-sm font-semibold text-foreground">
                    {p.title}
                  </span>
                </div>
              ))}
            </div>
          )}

          {data.gallery?.length > 0 && (
            <>
              <h2 className="mt-16 font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Gallery
              </h2>
              <div className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
                {data.gallery.map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-xl">
                    <Image
                      src={src}
                      alt={`Gallery ${i + 1}`}
                      fittingType="fill"
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

        </>
      )}

      <PortfolioOtherStuff current={category} />
    </div>
  );
}
