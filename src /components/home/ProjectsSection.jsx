import { Link } from "react-router-dom";
import { ArrowRight, MousePointerClick } from "lucide-react";
import { projects } from "@/data/site";
import SectionHeading from "@/components/site/SectionHeading";
import { Image } from "@/components/ui/image";

export default function ProjectsSection() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <SectionHeading
          eyebrow={projects.eyebrow}
          title={projects.title}
          icon={MousePointerClick}
        />

        <div className="mt-14 grid grid-cols-1 items-center gap-8 sm:grid-cols-3">
          {projects.items.map((p) => (
            <div key={p.title} className="group flex flex-col items-center">
              <div
                className={`overflow-hidden ${
                  p.shape === "circle"
                    ? "h-56 w-56 rounded-full"
                    : "h-64 w-64 rounded-2xl"
                }`}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fittingType="fill"
                  className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="mt-4 text-sm font-semibold text-foreground">
                {p.title}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 rounded-full bg-yellow px-7 py-3 font-bold text-foreground shadow-gold transition-transform hover:scale-105"
          >
            {projects.cta} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
