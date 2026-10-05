import { resume } from "@/data/site";

function SectionBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
      <span className="h-2 w-2 rounded-full bg-accent" />
      {children}
    </span>
  );
}

export default function Resume() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      {/* HEADER */}
      <div className="flex flex-col gap-3 border-b border-border pb-10">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-foreground">
          {resume.header.eyebrow}
        </span>
        <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
          {resume.header.name}
        </h1>
        <p className="text-sm font-semibold text-accent">{resume.header.role}</p>
        <p className="max-w-2xl text-base leading-relaxed text-foreground/75">
          {resume.header.summary}
        </p>
      </div>

      {/* EXPERIENCE */}
      <section className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[260px_1fr] md:gap-16">
        <div className="md:sticky md:top-24 md:self-start">
          <SectionBadge>{resume.experience.badge}</SectionBadge>
          <h2 className="mt-5 font-serif text-4xl font-bold text-accent sm:text-5xl">
            {resume.experience.title}
          </h2>
        </div>
        <div className="flex flex-col">
          {resume.experience.groups.map((g, i) => (
            <div
              key={g.org}
              className={`flex flex-col gap-3 ${
                i !== 0 ? "mt-10 border-t border-border pt-10" : ""
              }`}
            >
              <h3 className="font-display text-lg font-bold text-goldDeep">
                {g.org}
              </h3>
              <div className="flex flex-col gap-4">
                {g.roles.map((r) => (
                  <div
                    key={r.title}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1"
                  >
                    <span className="font-semibold text-accent">{r.title}</span>
                    <span className="text-sm text-foreground/60">{r.period}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION / CERTIFICATIONS */}
      <section className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-[260px_1fr] md:gap-16">
        <div className="md:sticky md:top-24 md:self-start">
          <SectionBadge>{resume.education.badge}</SectionBadge>
          <h2 className="mt-5 font-serif text-4xl font-bold text-accent sm:text-5xl">
            {resume.education.title}
          </h2>
        </div>
        <div className="flex flex-col">
          {resume.education.groups.map((g, i) => (
            <div
              key={g.org}
              className={`flex flex-col gap-3 ${
                i !== 0 ? "mt-10 border-t border-border pt-10" : ""
              }`}
            >
              <h3 className="font-display text-lg font-bold text-goldDeep">
                {g.org}
              </h3>
              <div className="flex flex-col gap-4">
                {g.credentials.map((c) => (
                  <div key={c.degree} className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <span className="font-bold text-foreground">{c.degree}</span>
                      <span className="text-sm text-foreground/60">
                        {c.period}
                      </span>
                    </div>
                    <span className="text-sm text-foreground/70">{c.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="mt-24 flex flex-col items-center gap-6 text-center">
        <SectionBadge>{resume.contact.badge}</SectionBadge>
        <h2 className="font-serif text-4xl font-bold text-accent sm:text-5xl">
          {resume.contact.title}
        </h2>
        <a
          href={`mailto:${resume.contact.email}`}
          className="rounded-lg bg-accent px-8 py-3 text-lg font-bold text-white underline decoration-white/60 underline-offset-4 transition-transform hover:scale-105"
        >
          {resume.contact.email}
        </a>
      </section>
    </div>
  );
}
