import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyMeSection from "@/components/home/WhyMeSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyMeSection />
      <CtaSection />
    </>
  );
}
