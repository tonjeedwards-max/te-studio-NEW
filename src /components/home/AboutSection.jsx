import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { about } from "@/data/site";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* left visuals */}
        <div className="relative">
          <CodeMock />
          <BookingCard />
        </div>

        {/* right text */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-foreground">
            {about.eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold italic text-accent sm:text-4xl">
            {about.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/80">
            {about.body}
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {about.skills.map((s) => (
              <li key={s} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="shrink-0 text-accent" />
                <span className="font-medium text-foreground">{s}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-semibold text-white shadow-gold transition-transform hover:scale-105"
          >
            {about.cta} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CodeMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[#1e1e2e] shadow-xl">
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#181825] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#f38ba8]" />
        <span className="h-3 w-3 rounded-full bg-[#f9e2af]" />
        <span className="h-3 w-3 rounded-full bg-[#a6e3a1]" />
        <span className="ml-2 font-mono text-xs text-white/50">index.html</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-relaxed">
        <code>
          <span className="text-white/40">{"<!DOCTYPE html>\n"}</span>
          <span className="text-[#cba6f7]">{"<html "}</span>
          <span className="text-[#fab387]">lang</span>
          <span className="text-white/40">{"="}</span>
          <span className="text-[#a6e3a1]">{'"en"'}</span>
          <span className="text-[#cba6f7]">{">\n"}</span>
          <span className="text-[#cba6f7]">{"  <head>\n"}</span>
          <span className="text-[#cba6f7]">{"    <title>"}</span>
          <span className="text-[#f9e2af]">T.E Studio</span>
          <span className="text-[#cba6f7]">{"</title>\n"}</span>
          <span className="text-[#cba6f7]">{"  </head>\n  <body>\n"}</span>
          <span className="text-[#cba6f7]">{"    <h1>"}</span>
          <span className="text-[#a6e3a1]">Look GREAT</span>
          <span className="text-[#cba6f7]">{"</h1>\n"}</span>
          <span className="text-[#cba6f7]">{"  </body>\n"}</span>
          <span className="text-[#cba6f7]">{"</html>"}</span>
        </code>
      </pre>
    </div>
  );
}

function BookingCard() {
  return (
    <div className="relative z-10 -mt-8 ml-6 w-[78%] max-w-xs rounded-2xl border border-border bg-white p-5 shadow-gold sm:ml-12">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-widest text-accent">
          Now Booking
        </span>
        <span className="rounded-full bg-yellow px-2.5 py-1 text-[10px] font-bold text-foreground">
          2025
        </span>
      </div>
      <p className="mt-3 font-display text-xl font-extrabold leading-tight text-foreground">
        Join the Roster
      </p>
      <p className="mt-1 text-xs text-foreground/60">
        Photography · Design · Web
      </p>
      <Link
        to="/contact"
        className="mt-4 inline-block rounded-full bg-foreground px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
      >
        Apply Today →
      </Link>
    </div>
  );
}
