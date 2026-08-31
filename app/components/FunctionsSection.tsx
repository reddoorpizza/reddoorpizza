"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { VENUE_CAPACITY } from "@/app/config/constants";
import { trackGroupEnquiryClick, trackContactSubmission } from "@/app/lib/analytics";

const FUNCTION_EMAIL = "info@reddoorpizza.com.au";

const bullets = [
  `Flexible seating for up to ${VENUE_CAPACITY} guests`,
  "Work break-ups, Christmas parties, and group bookings",
  "Dietary options including gluten-free & vegetarian",
  "Festoon-lit outdoor beer garden",
];

const inputClass =
  "bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 placeholder:font-normal rounded-xl px-4 py-3 min-h-[48px] text-sm focus:bg-white focus:border-[#ac511a] focus:ring-2 focus:ring-[#ac511a]/20 transition-all duration-200 w-full outline-none";

export default function FunctionsSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!message.trim()) {
      setError("Please tell us about your event.");
      return;
    }

    const guestCount = guests.trim() ? parseInt(guests.trim(), 10) : NaN;
    if (guests.trim() && (isNaN(guestCount) || guestCount < 1 || guestCount > 500)) {
      setError("Please enter a sensible guest count (1\u2013500).");
      return;
    }

    setStatus("submitting");
    trackGroupEnquiryClick("functions");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          type: eventType,
          guests: guests.trim(),
          message: message.trim(),
          formLocation: "functions",
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      trackContactSubmission();
      setStatus("success");
    } catch {
      setError("Something went wrong. Please try again or email us directly at " + FUNCTION_EMAIL);
      setStatus("idle");
    }
  };

  return (
    <section id="functions" className="bg-[#18181B] text-white py-10 md:py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* ── Left Column ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6 text-left"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#ac511a]/20 border border-[#ac511a] text-[#eccb57] text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Private Events & Functions
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight font-bold">
            Host Your Next Event at Red Door
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Work break-ups, Christmas parties, group bookings, and private
            celebrations in our rustic venue. Wood-fired catering, festoon-lit
            beer garden, and indoor lounge. Group bookings may be available
            outside normal opening hours by enquiry.
          </p>

          {/* Bullet List */}
          <ul className="space-y-3">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-gray-200 text-sm font-medium"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#eccb57] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── Right Column: Form Card ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <div className="bg-white text-gray-900 rounded-3xl p-10 shadow-2xl">
            <h3 className="text-2xl font-serif text-[#18181B] mb-6 font-bold">
              Enquire Now
            </h3>

            {status === "success" ? (
              <div className="flex flex-col items-center text-center py-8 gap-4">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
                <p className="text-green-800 font-semibold text-lg">
                  Thanks — your enquiry has been sent.
                </p>
                <p className="text-gray-600 text-sm">
                  We&apos;ll be in touch. If your email app didn&apos;t open, you can
                  also email us directly at{" "}
                  <a href={`mailto:${FUNCTION_EMAIL}`} className="text-[#ac511a] font-medium hover:underline">
                    {FUNCTION_EMAIL}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="fn-name" className="sr-only">Your Name</label>
                    <input
                      id="fn-name"
                      type="text"
                      placeholder="Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="fn-email" className="sr-only">Email Address</label>
                    <input
                      id="fn-email"
                      type="email"
                      placeholder="Email Address *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Event Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="fn-phone" className="sr-only">Phone Number</label>
                    <input
                      id="fn-phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="fn-event-type" className="sr-only">Event Type</label>
                    <select
                      id="fn-event-type"
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="">Event Type</option>
                      <option value="Work Christmas Party">Work Christmas Party</option>
                      <option value="Work Break-Up">Work Break-Up</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Birthday Party">Birthday Party</option>
                      <option value="Private Function">Private Function</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Guest Count */}
                <div>
                  <label htmlFor="fn-guests" className="sr-only">Estimated Guest Count</label>
                  <input
                    id="fn-guests"
                    type="number"
                    min={1}
                    max={500}
                    placeholder="Estimated Guest Count"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="fn-message" className="sr-only">Tell us about your event</label>
                  <textarea
                    id="fn-message"
                    placeholder="Tell us about your event... *"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-600 text-xs font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#ac511a] hover:bg-[#c05c1e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-6 rounded-xl transition-colors duration-200 text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#ac511a]/20"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
