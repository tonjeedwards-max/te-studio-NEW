import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube } from "lucide-react";
import { site, socials } from "@/data/site";

const iconMap = { LinkedIn: Linkedin, Facebook: Facebook, YouTube: Youtube };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project inquiry from ${form.name || "a visitor"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      {/* header */}
      <div className="flex flex-col items-center gap-3 border-b border-border pb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          Have any queries?
        </span>
        <h1 className="font-serif text-4xl font-bold italic text-accent sm:text-5xl">
          I'm here to help.
        </h1>
        <span className="mt-2 h-px w-24 bg-accent/40" />
      </div>

      {/* socials */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        {socials.map((s) => (
          <SocialButton key={s.name} social={s} />
        ))}
      </div>

      {/* info + form */}
      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Don't be a stranger!
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold italic text-accent">
              You talk. I listen.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-foreground/80">
            Whether you need photography, a website that doesn't make people want
            to throw their computers, or someone who actually understands SEO —
            I'm your person. Tell me what you're working on.
          </p>
          <div className="flex flex-col gap-4">
            <InfoRow icon={Mail} label={site.email} href={`mailto:${site.email}`} />
            <InfoRow icon={Phone} label={site.phone} href={`tel:${site.phone}`} />
            <InfoRow icon={MapPin} label={site.location} />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-2xl border border-border bg-secondary/30 p-6"
        >
          <Field label="Your Name">
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
              placeholder="Jane Doe"
            />
          </Field>
          <Field label="Email">
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
              placeholder="jane@email.com"
            />
          </Field>
          <Field label="Message">
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
              placeholder="Tell me about your project…"
            />
          </Field>
          <button
            type="submit"
            className="self-start rounded-full bg-accent px-7 py-3 font-semibold text-white shadow-gold transition-transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

function SocialButton({ social }) {
  const base =
    "flex h-14 w-14 items-center justify-center rounded-xl border border-border shadow-sm transition-transform hover:scale-105";
  if (social.name === "X") {
    return (
      <a
        href={social.url}
        target="_blank"
        rel="noreferrer"
        aria-label="X (Twitter)"
        className={`${base} bg-primary text-foreground`}
      >
        <span className="font-serif text-xl font-bold">X</span>
      </a>
    );
  }
  const Icon = iconMap[social.name];
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noreferrer"
      aria-label={social.name}
      className={`${base} bg-background`}
    >
      <Icon size={22} className="text-foreground" />
    </a>
  );
}

function InfoRow({ icon: Icon, label, href }) {
  const content = (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-accent">
        <Icon size={18} />
      </span>
      <span className="font-medium text-foreground">{label}</span>
    </div>
  );
  return href ? (
    <a href={href} className="hover:text-accent">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-bold uppercase tracking-wider text-foreground/70">
        {label}
      </span>
      {children}
    </label>
  );
}
