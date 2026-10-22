import { Link } from "react-router-dom";
import { Image, Sparkles, Mail, ArrowRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyMeSection from "@/components/home/WhyMeSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import CtaSection from "@/components/home/CtaSection";
import { footer } from "@/data/site";

const linkIconMap = { Image, Sparkles, Mail };

function HomeMoreLinks() {
  return (
    <section className="bg-background px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-serif text-2xl font-bold italic text-accent">
          {footer.label}
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap sm:gap-8">
          {footer.links.map((item) => {
            const Icon = linkIconMap[item.icon] || ArrowRight;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="group flex items-center gap-3 rounded-full border border-border bg-secondary/50 px-5 py-3 transition-colors hover:border-accent"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-accent transition-transform group-hover:scale-110">
                  <Icon size={17} />
                </span>
                <span className="text-sm font-semibold text-accent group-hover:text-goldDeep">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyMeSection />
      <CtaSection />
      <HomeMoreLinks />
    </>
  );
}
