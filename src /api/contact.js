import { supabase } from "@/lib/supabase";

export async function submitContactMessage({ name, email, message }) {
  const cleanName = String(name ?? "").trim();
  const cleanEmail = String(email ?? "").trim();
  const cleanMessage = String(message ?? "").trim();

  if (!cleanName || !cleanEmail || !cleanMessage) {
    throw new Error("Please complete all fields before sending.");
  }
  if (cleanName.length > 120 || cleanEmail.length > 254 || cleanMessage.length > 5000) {
    throw new Error("One of your fields is too long. Please shorten it and try again.");
  }

  const { error } = await supabase.from("contact_messages").insert({
    name: cleanName,
    email: cleanEmail,
    message: cleanMessage,
  });

  if (error) {
    console.error("Supabase contact submission failed:", error);
    throw new Error("Your message could not be sent right now. Please try again or email me directly.");
  }

  return { success: true };
}
