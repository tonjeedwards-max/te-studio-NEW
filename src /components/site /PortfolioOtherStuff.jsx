import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { portfolioCategories, portfolioOrder } from "@/data/site";

export default function PortfolioOtherStuff({ current }) {
  const idx = portfolioOrder.indexOf(current);
  const len = portfolioOrder.length;
  const prev = portfolioCategories[portfolioOrder[(idx - 1 + len) % len]];
  const next = portfolioCategories[portfolioOrder[(idx + 1) % len]];

  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center font-display text-2xl font-bold text-accent">
          Check Out My Other Stuff
        </h2>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <Link
            to={prev.to}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowLeft size={16} /> {prev.title}
          </Link>
          <span className="text-xs font-semibold uppercase tracking-widest text-foreground/40">
            Previous / Next
          </span>
          <Link
            to={next.to}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-gold transition-transform hover:scale-105"
          >
            {next.title} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
