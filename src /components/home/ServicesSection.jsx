import { Link } from "react-router-dom";
import { Palette, Globe, Camera, Clapperboard } from "lucide-react";
import { services } from "@/data/site";
import SectionHeading from "@/components/site/SectionHeading";

const iconMap = { Palette, Globe, Camera, Clapperboard };

export default function ServicesSection() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <SectionHeading eyebrow={services.eyebrow} title={services.title} icon={Palette} />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((s, i) => {
            const Icon = iconMap[s.icon] || Palette;
            return (
              <Link
                key={s.title}
                to={s.to}
                className="flex flex-col rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-gold"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-accent">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold italic text-accent">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {s.body}
                </p>
                <span className="mt-5 font-mono text-[11px] text-foreground/30">
                  0{i + 1}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
