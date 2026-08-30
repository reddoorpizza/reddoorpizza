"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { PHONE_NUMBER_TEL, PHONE_NUMBER_DISPLAY } from "@/app/config/constants";
import { trackGroupEnquiryClick } from "@/app/lib/analytics";

const RESTAURANT_SMS_NUMBER = "0353418235";
const RESTAURANT_PHONE_DISPLAY = PHONE_NUMBER_DISPLAY;

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
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError("Please fill in your name, phone number, and message.");
      return;
    }
    setError("");

    const lines = [
      `New enquiry from the Red Door Pizza website`,
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      type ? `Enquiry type: ${type}` : "",
      date ? `Preferred date: ${date}` : "",
      guests ? `Guests: ${guests}` : "",
      "",
      message.trim(),
    ].filter(Boolean);

    window.location.href = `sms:${RESTAURANT_SMS_NUMBER}?&body=${encodeURIComponent(
      lines.join("\n")
    )}`;
    trackGroupEnquiryClick("contact");
    setSent(true);
  };

  return (
    <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-10 shadow-xl border border-[#ac511a]/10">
      <h2 className="text-2xl font-serif font-bold text-[#18181B] mb-2">
        Send Us an Enquiry
      </h2>
      <p className="text-sm text-[#262626]/70 leading-relaxed mb-6">
        Fill in the form below and your message will be prepared as a text
        message to our team — perfect for table bookings, functions, and general
        questions.
      </p>

      {sent ? (
        <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-4 text-sm text-green-800 leading-relaxed">
          Your messaging app should now open with your enquiry ready to send.
          If it didn&apos;t, you can also call us directly on{" "}
          <a
            href={PHONE_NUMBER_TEL}
            className="font-semibold underline"
          >
            {RESTAURANT_PHONE_DISPLAY}
          </a>
          .
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
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
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              aria-label="Preferred date"
              className={inputClass}
            />
            <input
              type="number"
              min={1}
              placeholder="Guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className={inputClass}
            />
          </div>

          <textarea
            placeholder="Tell us how we can help... *"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClass} resize-none`}
          />

          {error && (
            <p className="text-red-600 text-xs font-medium">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#ac511a] hover:bg-[#c05c1e] text-white font-semibold py-3.5 px-6 rounded-xl transition-colors duration-200 text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#ac511a]/20"
          >
            <Send className="w-4 h-4" />
            Send Enquiry
          </button>
        </form>
      )}
    </div>
  );
}
