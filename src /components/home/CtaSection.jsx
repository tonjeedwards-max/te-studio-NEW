import ContactModal from "@/components/site/ContactModal";
import { footer } from "@/data/site";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-periwinkle">
      <div className="absolute inset-0 bg-gradient-to-br from-periwinkle via-background/40 to-periwinkle" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center">
        <h2 className="font-display text-4xl font-extrabold text-accent sm:text-5xl">
          {footer.cta.heading}
        </h2>
        <p className="mt-5 max-w-xl font-serif text-lg italic text-white">
          {footer.cta.body}
        </p>
        <ContactModal
          trigger={
            <button className="mt-8 rounded-full gold-gradient px-8 py-3 font-semibold text-white shadow-gold transition-transform hover:scale-105">
              {footer.cta.button}
            </button>
          }
        />
      </div>
    </section>
  );
}
