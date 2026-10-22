import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { portfolioCategories } from "@/data/site";
import PortfolioOtherStuff from "@/components/site/PortfolioOtherStuff";

const cats = Object.values(portfolioCategories).filter((category) => category.slug !== "photography");

export default function PortfolioLayout({ slug, sections }) {
  const data = portfolioCategories[slug];
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [lightbox]);

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
            {s.projects ? (
              <div className={`mt-10 grid grid-cols-1 ${s.layout === "models" ? "gap-12" : "gap-10"} ${s.layout === "marketing" || s.layout === "email-websites" ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
                {s.projects.map((project, index) => (
                  <article
                    key={project.title + "-" + index}
                    className={`flex min-w-0 flex-col ${s.layout === "models" ? "gap-5" : "gap-4"} ${
                      s.layout === "marketing" && index === 2 ? "lg:col-span-2" : ""
                    } ${s.layout === "email-websites" && index === 0 ? "lg:row-span-2" : ""}`}
                  >
                    <div className={project.images.length > 1 ? `grid grid-cols-2 ${s.layout === "models" ? "gap-4" : "gap-3"}` : "grid grid-cols-1 gap-3"}>
                      {project.images.map((img, imageIndex) => (
                        <figure key={img.src + "-" + imageIndex} className="flex flex-col gap-2">
                          <button
                            type="button"
                            onClick={() => setLightbox({ src: img.src, alt: img.caption })}
                            aria-label={`Enlarge image: ${img.caption}`}
                            className={`block w-full cursor-zoom-in rounded-xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${s.layout === "environments" ? "aspect-[4/3] overflow-hidden" : ""}`}
                          >
                            <div className={`flex items-center justify-center overflow-hidden rounded-xl bg-secondary/20 ${s.layout === "environments" ? "aspect-[4/3] p-0" : s.layout === "models" ? "p-3" : "p-2"} ${s.layout === "marketing" && index === 2 ? "min-h-40" : ""}`}>
                              <Image
                                src={img.src}
                                alt={img.caption}
                                fittingType={s.layout === "environments" ? "fill" : "contain"}
                                className={s.layout === "environments" ? "h-full w-full object-cover object-center" : "h-auto max-h-[32rem] w-full object-contain"}
                              />
                            </div>
                          </button>
                          {project.images.length > 1 && (
                            <figcaption className="text-center text-xs italic leading-relaxed text-foreground/70">
                              {img.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                    <div className="text-center">
                      <h3 className="font-display text-lg font-bold text-accent">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                        {project.body}
                      </p>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex text-sm font-semibold text-accent underline underline-offset-4 hover:opacity-80"
                        >
                          {project.linkLabel || "Visit website"}
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {s.images.map((img, i) => (
                  <figure key={i} className="flex flex-col gap-3">
                    <button
                      type="button"
                      onClick={() => setLightbox({ src: img.src, alt: img.caption })}
                      aria-label={`Enlarge image: ${img.caption}`}
                      className="block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      <Image
                        src={img.src}
                        alt={img.caption}
                        fittingType="fill"
                        className={`h-full w-full ${img.bw ? "grayscale" : ""}`}
                      />
                    </button>
                    <figcaption className="px-2 text-center text-xs italic leading-relaxed text-foreground/70">
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* next / back */}
      <PortfolioOtherStuff current={slug} />

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged portfolio image"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close enlarged image"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            Close ✕
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[90vh] max-w-full select-none object-contain"
            draggable="false"
            onClick={(event) => event.stopPropagation()}
          />
          <p className="absolute bottom-3 left-4 right-4 text-center text-xs text-white/75 sm:bottom-5">
            Click outside the image or press Escape to close
          </p>
        </div>
      )}
    </div>
  );
}
