import { Facebook, Instagram, Youtube, Linkedin, X } from "lucide-react";
import { site, socials } from "@/data/site";
import SunflowerFAB from "@/components/site/SunflowerFAB";

const socialIconMap = { Facebook, Instagram, YouTube: Youtube, LinkedIn: Linkedin, X };

export default function Footer() {
  return (
    <footer className="relative">
      <div className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-foreground/60 sm:flex-row">
          <span>
            © {new Date().getFullYear()} · {site.footerCredit}
          </span>
          <div className="flex items-center gap-3" aria-label="Social media links">
            {socials.map((social) => {
              const Icon = socialIconMap[social.name];
              if (!Icon) return null;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-secondary/70 text-accent transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              );
            })}
          </div>
          <span>{site.location}</span>
        </div>
      </div>

      <SunflowerFAB />
      <div className="h-14 md:hidden" />
    </footer>
  );
}
