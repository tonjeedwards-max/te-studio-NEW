import { Link } from "react-router-dom";
import { Image, Sparkles, Mail, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { footer, site, socials } from "@/data/site";
import SunflowerFAB from "@/components/site/SunflowerFAB";

const iconMap = { Image, Sparkles, Mail };
const socialIconMap = { Facebook, Instagram, YouTube: Youtube, LinkedIn: Linkedin };

export default function Footer() {
  return (
    <footer className="relative">
      {/* Lower footer */}
      <div className="bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 text-center">
          <span className="font-serif text-lg italic text-accent/80">
            {footer.label}
          </span>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8">
            {footer.links.map((l) => {
              const Icon = iconMap[l.icon] || Sparkles;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="group flex items-center gap-3"
                >
                  <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border bg-secondary transition-transform group-hover:scale-110">
                    <Icon size={16} className="text-accent" />
                  </span>
                  <span className="text-sm font-semibold text-accent group-hover:text-goldDeep">
                    {l.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-foreground/60 sm:flex-row">
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
      </div>

      {/* Back to top FAB */}
      <SunflowerFAB />
      <div className="h-14 md:hidden" />
    </footer>
  );
}
