import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { skillsPage, skillsOverview } from "@/data/site";

export default function Skills() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      {/* header */}
      <div className="flex flex-col gap-3 border-b border-border pb-8">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-foreground">
          {skillsPage.eyebrow}
        </span>
        <h1 className="font-serif text-4xl font-bold italic text-accent sm:text-5xl">
          {skillsPage.title}
        </h1>
        {skillsPage.tagline && (
          <p className="font-serif text-lg italic text-foreground/60">
            {skillsPage.tagline}
          </p>
        )}
        {skillsPage.intro && (
          <p className="max-w-3xl text-base leading-relaxed text-foreground/75">
            {skillsPage.intro}
          </p>
        )}
      </div>

      {/* overview intro */}
      <section className="mt-12">
        <h2 className="font-serif text-3xl font-bold text-accent sm:text-4xl">
          {skillsOverview.title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/75">
          {skillsOverview.intro}
        </p>
      </section>

      {/* skill bars */}
      <section className="mt-10 flex flex-col gap-5">
        {skillsOverview.bars.map((b) => (
          <div key={b.name}>
            <div className="flex items-baseline justify-between">
              <span className="font-display text-sm font-bold text-foreground">
                {b.name}
              </span>
              <span className="text-sm font-semibold text-accent">{b.level}%</span>
            </div>
            <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full gold-gradient"
                style={{ width: `${b.level}%` }}
              />
            </div>
          </div>
        ))}
      </section>

      {/* portfolio cards */}
      <section className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {skillsOverview.cards.map((c) => (
          <div key={c.title} className="flex flex-col rounded-2xl border border-border p-6">
            <h3 className="font-serif text-xl font-bold text-foreground">
              {c.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">
              {c.body}
            </p>
            <Link
              to={c.to}
              className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-accent hover:text-goldDeep"
            >
              Portfolio →
            </Link>
          </div>
        ))}
      </section>

      {/* full breakdown (existing groups) */}
      <section className="mt-16">
        <h2 className="font-serif text-2xl font-bold text-accent">Full Breakdown</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {skillsPage.groups.map((g) => (
            <div key={g.name} className="rounded-2xl border border-border p-6">
              <h3 className="font-display text-lg font-bold text-foreground">
                {g.name}
              </h3>
              {g.blurb && (
                <p className="mt-1 text-sm italic text-foreground/60">
                  {g.blurb}
                </p>
              )}
              <ul className="mt-4 flex flex-col gap-3">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="shrink-0 text-accent" />
                    <span className="text-sm font-medium text-foreground/80">
                      {it}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
