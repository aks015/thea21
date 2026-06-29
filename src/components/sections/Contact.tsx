"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  User,
  Building2,
  Loader2,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { onContactPrefill } from "@/lib/contactPrefill";
import { brand, budgets, projectTypes } from "@/constants/site";

const inputClass =
  "w-full rounded-xl border border-fg/10 bg-fg/[0.03] px-4 py-3.5 text-sm text-fg placeholder:text-fg/35 outline-none transition-colors focus:border-accent/60 focus:bg-fg/[0.05]";
const iconInputClass =
  "w-full rounded-xl border border-fg/10 bg-fg/[0.03] py-3.5 pl-11 pr-4 text-sm text-fg placeholder:text-fg/35 outline-none transition-colors focus:border-accent/60 focus:bg-fg/[0.05]";
const iconClass =
  "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-fg/35";

const pillClass = (active: boolean) =>
  `rounded-full border px-4 py-2 text-sm transition-colors ${
    active
      ? "border-accent bg-accent/15 text-fg"
      : "border-fg/10 text-fg/55 hover:border-fg/25"
  }`;

const emptyForm = {
  name: "",
  business: "",
  email: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [budget, setBudget] = useState(budgets[1]);
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [form, setForm] = useState(emptyForm);
  const [honey, setHoney] = useState(""); // honeypot — stays empty for humans
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Allow the project modal to pre-fill the message and scroll here.
  useEffect(
    () =>
      onContactPrefill((message) => {
        setSubmitted(false);
        setForm((f) => ({ ...f, message }));
      }),
    []
  );

  const update =
    (key: keyof typeof emptyForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    // Bot trap — if the hidden honeypot was filled, silently bail.
    if (honey) {
      setSubmitted(true);
      return;
    }

    setSending(true);

    // Open WhatsApp INSIDE the click gesture (before any await) so the browser
    // doesn't block the popup.
    const number = brand.whatsapp.replace(/\D/g, "");
    const text =
      `*New Project Enquiry — ${brand.name}*\n\n` +
      `*Name:* ${form.name}\n` +
      `*Business:* ${form.business || "—"}\n` +
      `*Project:* ${projectType}\n` +
      `*Email:* ${form.email}\n` +
      `*Phone:* ${form.phone || "—"}\n` +
      `*Budget:* ${budget}\n\n` +
      `*Message:*\n${form.message}`;
    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );

    // Record the lead via email so nothing is lost even if WhatsApp isn't sent.
    // Free access key at https://web3forms.com — set NEXT_PUBLIC_WEB3FORMS_KEY.
    const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (web3formsKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `New Project Enquiry — ${form.name || "Website"}`,
            from_name: brand.name,
            name: form.name,
            business: form.business || "—",
            project_type: projectType,
            email: form.email,
            phone: form.phone || "—",
            budget,
            message: form.message,
            botcheck: honey,
          }),
        });
      } catch {
        /* non-blocking — the WhatsApp message already opened */
      }
    }

    setSending(false);
    setSubmitted(true);
  };

  const resetForm = () => {
    setForm(emptyForm);
    setBudget(budgets[1]);
    setProjectType(projectTypes[0]);
    setHoney("");
    setSubmitted(false);
  };

  return (
    <section id="contact" className="relative px-6 py-28 md:py-36">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[160px]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr]">
        {/* Left — pitch */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-fg/10 bg-fg/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Let&apos;s Talk
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl text-gradient">
              Let&apos;s build something{" "}
              <span className="text-gradient-accent">unforgettable.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-fg/55">
              Tell us about your project. We&apos;ll get back within 24 hours with
              ideas and a clear, transparent quote — no pressure, no jargon.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-9 flex flex-col gap-4">
              <li className="flex items-center gap-3 text-sm text-fg/70">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <a
                  href={`https://wa.me/${brand.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fg"
                >
                  Chat with us on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-fg/70">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail className="h-4 w-4" />
                </span>
                <a href={`mailto:${brand.email}`} className="hover:text-fg">
                  {brand.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-fg/70">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Phone className="h-4 w-4" />
                </span>
                <a
                  href={`tel:${brand.phone.replace(/\s/g, "")}`}
                  className="hover:text-fg"
                >
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-fg/70">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MapPin className="h-4 w-4" />
                </span>
                {brand.location}
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Right — form */}
        <Reveal delay={0.1}>
          <div className="glass-strong rounded-3xl p-7 sm:p-9">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <CheckCircle2 className="h-16 w-16 text-accent" />
                <h3 className="font-display text-2xl font-semibold text-fg">
                  Almost there!
                </h3>
                <p className="max-w-xs text-sm text-fg/55">
                  We&apos;ve opened WhatsApp with your details pre-filled — just
                  hit <span className="text-fg">send</span> and we&apos;ll reply
                  within 24 hours.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-2 text-sm text-accent-soft underline-offset-4 hover:underline"
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Honeypot — hidden from humans, traps bots */}
                <input
                  type="text"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={honey}
                  onChange={(e) => setHoney(e.target.value)}
                  className="hidden"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-medium uppercase tracking-wider text-fg/60"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <User className={iconClass} />
                      <input
                        id="contact-name"
                        required
                        value={form.name}
                        onChange={update("name")}
                        placeholder="John Doe"
                        className={iconInputClass}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-business"
                      className="text-xs font-medium uppercase tracking-wider text-fg/60"
                    >
                      Business
                    </label>
                    <div className="relative">
                      <Building2 className={iconClass} />
                      <input
                        id="contact-business"
                        value={form.business}
                        onChange={update("business")}
                        placeholder="Company name"
                        className={iconInputClass}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-medium uppercase tracking-wider text-fg/60"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <Mail className={iconClass} />
                      <input
                        id="contact-email"
                        required
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="you@company.com"
                        className={iconInputClass}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-phone"
                      className="text-xs font-medium uppercase tracking-wider text-fg/60"
                    >
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className={iconClass} />
                      <input
                        id="contact-phone"
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder="+91 00000 00000"
                        className={iconInputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Project type */}
                <div className="flex flex-col gap-2">
                  <span
                    id="ptype-label"
                    className="text-xs font-medium uppercase tracking-wider text-fg/60"
                  >
                    Project type
                  </span>
                  <div
                    className="flex flex-wrap gap-2"
                    role="group"
                    aria-labelledby="ptype-label"
                  >
                    {projectTypes.map((p) => (
                      <button
                        type="button"
                        key={p}
                        aria-pressed={projectType === p}
                        onClick={() => setProjectType(p)}
                        className={pillClass(projectType === p)}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-2">
                  <span
                    id="budget-label"
                    className="text-xs font-medium uppercase tracking-wider text-fg/60"
                  >
                    Budget
                  </span>
                  <div
                    className="flex flex-wrap gap-2"
                    role="group"
                    aria-labelledby="budget-label"
                  >
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        aria-pressed={budget === b}
                        onClick={() => setBudget(b)}
                        className={pillClass(budget === b)}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-medium uppercase tracking-wider text-fg/60"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="mt-2">
                  <MagneticButton
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={sending}
                  >
                    {sending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Send via WhatsApp <Send className="h-4 w-4" />
                      </>
                    )}
                  </MagneticButton>
                </div>
                <p className="text-center text-xs leading-relaxed text-fg/55">
                  Opens WhatsApp with your details ready to send. By submitting you
                  agree to our{" "}
                  <Link
                    href="/privacy"
                    className="text-accent-soft underline-offset-2 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
