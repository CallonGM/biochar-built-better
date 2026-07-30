import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email").max(255),
  company: z.string().trim().max(150, "Company must be under 150 characters").optional(),
  inquiry_type: z.string().trim().max(60).optional(),
  message: z
    .string()
    .trim()
    .min(1, "Tell us a little about your project")
    .max(2000, "Message must be under 2000 characters"),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof inquirySchema>, string>>;

const INQUIRY_TYPES = [
  "Concrete manufacturer",
  "Construction / developer",
  "Government / policy",
  "Carbon credit buyer",
  "Other",
];

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    inquiry_type: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = (key: keyof typeof values, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = inquirySchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("sending");
    const { error } = await supabase.from("contact_inquiries").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company || null,
      inquiry_type: parsed.data.inquiry_type || null,
      message: parsed.data.message,
    });

    if (error) {
      setStatus("idle");
      toast.error("Something went wrong. Please email us directly at callon@greenmixes.com.");
      return;
    }

    setStatus("sent");
    setValues({ name: "", email: "", company: "", inquiry_type: "", message: "" });
    toast.success("Message received — we'll be in touch shortly.");
  };

  const inputClass =
    "bg-background/40 border-border/60 backdrop-blur-sm focus-visible:ring-primary/50 h-12";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="relative mx-auto mt-14 max-w-2xl rounded-2xl border border-border/60 bg-card/40 p-6 text-left backdrop-blur-xl sm:p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
            Name
          </label>
          <Input
            id="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Jane Doe"
            maxLength={100}
            className={inputClass}
          />
          {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="jane@company.com"
            maxLength={255}
            className={inputClass}
          />
          {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
            Company <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <Input
            id="company"
            value={values.company}
            onChange={(e) => set("company", e.target.value)}
            placeholder="Acme Concrete"
            maxLength={150}
            className={inputClass}
          />
          {errors.company && <p className="mt-1.5 text-xs text-destructive">{errors.company}</p>}
        </div>
        <div>
          <label htmlFor="inquiry_type" className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
            I am a
          </label>
          <select
            id="inquiry_type"
            value={values.inquiry_type}
            onChange={(e) => set("inquiry_type", e.target.value)}
            className="h-12 w-full rounded-md border border-border/60 bg-background/40 px-3 text-sm text-foreground backdrop-blur-sm outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            <option value="">Select…</option>
            {INQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
          Message
        </label>
        <Textarea
          id="message"
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Tell us about your project or partnership idea."
          rows={5}
          maxLength={2000}
          className="resize-none bg-background/40 border-border/60 backdrop-blur-sm focus-visible:ring-primary/50"
        />
        {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
      </div>

      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="mt-6">
        <Button type="submit" variant="hero" size="xl" className="group w-full" disabled={status !== "idle"}>
          {status === "sending" && <Loader2 className="h-5 w-5 animate-spin" />}
          {status === "sent" && <Check className="h-5 w-5" />}
          {status === "idle" && "Send Inquiry"}
          {status === "sending" && "Sending…"}
          {status === "sent" && "Message Sent"}
          {status === "idle" && (
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          )}
        </Button>
      </motion.div>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Goes straight to Callon and Dushanth. We reply within two working days.
      </p>
    </motion.form>
  );
};

export default ContactForm;
