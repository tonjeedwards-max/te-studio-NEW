import { CheckCircle2 } from "lucide-react";

export default function SectionHeading({ eyebrow, title, icon: Icon, center = true }) {
  return (
    <div className={`flex flex-col gap-3 ${center ? "items-center text-center" : "items-start"}`}>
      {Icon && (
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20">
          <Icon size={18} className="text-foreground" />
        </span>
      )}
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-foreground">
        {eyebrow}
      </span>
      <h2 className="font-serif text-3xl font-bold italic text-accent sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
