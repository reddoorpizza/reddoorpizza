"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { PHONE_NUMBER_TEL, PHONE_NUMBER_DISPLAY } from "@/app/config/constants";
import { trackGroupEnquiryClick, trackContactSubmission } from "@/app/lib/analytics";

const inputClass =
  "bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 placeholder:font-normal rounded-xl px-4 py-3 min-h-[48px] text-sm focus:bg-white focus:border-[#ac511a] focus:ring-2 focus:ring-[#ac511a]/20 transition-all duration-200 w-full outline-none";

export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError("Please fill in your name, phone number, and message.");
      return;
    }
    setError("");
    setStatus("submitting");
    trackGroupEnquiryClick("contact");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          type,
          date,
          guests,
          message: message.trim(),
          formLocation: "contact",
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      trackContactSubmission();
      setStatus("success");
    } catch {
      setError("Something went wrong. Please try again or call us on " + PHONE_NUMBER_DISPLAY);
      setStatus("idle");
    }
  };

  return (
    <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-10 shadow-xl border border-[#ac511a]/10">
      <h2 className="text-2xl font-serif font-bold text-[#18181B] mb-2">
        Send Us an Enquiry
      </h2>
      <p className="text-sm text-[#262626]/70 leading-relaxed mb-6">
        Fill in the form below and your enquiry will be sent to our team via
        email — perfect for table bookings, functions, and general questions.
      </p>

      {status === "success" ? (
        <div className="flex flex-col items-center text-center py-8 gap-4">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
          <p className="text-green-800 font-semibold text-lg">
            Thanks — your enquiry has been sent.
          </p>
          <p className="text-gray-600 text-sm">
            We&apos;ll be in touch. If your email app didn&apos;t open, you can
            also call us directly on{" "}
            <a href={PHONE_NUMBER_TEL} className="font-semibold underline text-[#ac511a]">
              {PHONE_NUMBER_DISPLAY}
            </a>
            .
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="sr-only">Your Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="sr-only">Phone Number</label>
              <input
                id="contact-phone"
                type="tel"
                placeholder="Phone Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="contact-type" className="sr-only">Enquiry Type</label>
              <select
                id="contact-type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className={`${inputClass} appearance-none`}
              >
                <option value="">Enquiry Type</option>
                <option value="Table Booking">Table Booking</option>
                <option value="Private Function">Private Function</option>
                <option value="General Enquiry">General Enquiry</option>
                <option value="Feedback">Feedback</option>
              </select>
            </div>
            <div>
              <label htmlFor="contact-date" className="sr-only">Preferred date</label>
              <input
                id="contact-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-guests" className="sr-only">Number of guests</label>
              <input
                id="contact-guests"
                type="number"
                min={1}
                placeholder="Guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="sr-only">Your message</label>
            <textarea
              id="contact-message"
              placeholder="Tell us how we can help... *"
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
  );
}
