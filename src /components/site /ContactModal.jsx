import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { site } from "@/data/site";
import { submitContactMessage } from "@/api/contact";

export default function ContactModal({ trigger }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setFeedback({ type: "", text: "" });

    try {
      await submitContactMessage(form);
      setForm({ name: "", email: "", message: "" });
      setFeedback({
        type: "success",
        text: "Message sent! Thanks for reaching out.",
      });
    } catch (error) {
      setFeedback({
        type: "error",
        text: error instanceof Error ? error.message : `Couldn't send your message. Please try again or email ${site.email}.`,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl italic text-accent">Let's Talk</DialogTitle>
          <DialogDescription>Drop a few details and I'll get back to you.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-2">
          <input required maxLength={120} autoComplete="name" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your Name"
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent" />
          <input required type="email" maxLength={254} autoComplete="email" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent" />
          <textarea required maxLength={5000} rows={4} value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell me about your project…"
            className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent" />
          {feedback.text && (
            <p role="status" aria-live="polite"
              className={feedback.type === "success" ? "text-sm text-green-700" : "text-sm text-red-600"}>
              {feedback.text}
            </p>
          )}
          <button type="submit" disabled={sending}
            className="self-start rounded-full bg-accent px-6 py-2.5 font-semibold text-white shadow-gold transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60">
            {sending ? "Sending…" : "Send Message"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
