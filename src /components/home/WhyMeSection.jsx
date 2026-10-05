import { CheckCircle2 } from "lucide-react";
import { whyMe } from "@/data/site";
import { Image } from "@/components/ui/image";

export default function WhyMeSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* text */}
        <div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-foreground">
              {whyMe.eyebrow}
            </span>
          </div>
          <h2 className="mt-3 font-serif text-4xl font-bold italic text-foreground sm:text-5xl">
            {whyMe.title}
          </h2>

          <div className="mt-8 flex flex-col gap-8">
            {whyMe.items.map((it) => (
              <div key={it.title}>
                <h3 className="font-display text-lg font-bold text-accent">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                  {it.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* image */}
        <div className="h-[60vh] w-full overflow-hidden rounded-2xl sm:h-[70vh] sm:max-w-md sm:ml-auto">
          <Image
            src={whyMe.image}
            alt={whyMe.title}
            fittingType="fill"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
