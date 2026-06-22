"use client";

import type { FormEvent } from "react";

const interests = [
  "שדכנות",
  "אימון אישי",
  "סדנה",
  "הרצאה",
  "הכשרת שדכנים",
  "אחר"
];

export function ContactEmailForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const interest = String(formData.get("interest") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = "פנייה מאתר כאן בונים";
    const body = [
      `שם: ${name}`,
      `טלפון: ${phone}`,
      `תחום עניין: ${interest}`,
      "",
      "הודעה:",
      message
    ].join("\n");

    window.location.href = `mailto:kanbonim321@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      className="rounded-lg border border-[var(--primary)] bg-white p-6 shadow-[0_16px_44px_rgba(17,27,41,0.09)]"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-black">לפנות אלינו</h2>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-bold">שם</span>
          <input
            className="min-h-12 rounded-lg border border-[var(--border)] bg-white px-4 outline-none transition focus:border-[var(--secondary)]"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-bold">טלפון</span>
          <input
            className="min-h-12 rounded-lg border border-[var(--border)] bg-white px-4 outline-none transition focus:border-[var(--secondary)]"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-bold">תחום עניין</span>
          <select
            className="min-h-12 rounded-lg border border-[var(--border)] bg-white px-4 outline-none transition focus:border-[var(--secondary)]"
            name="interest"
            defaultValue=""
            required
          >
            <option value="" disabled>
              בחרו תחום
            </option>
            {interests.map((interest) => (
              <option value={interest} key={interest}>
                {interest}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-bold">הודעה קצרה</span>
          <textarea
            className="min-h-32 rounded-lg border border-[var(--border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--secondary)]"
            name="message"
            required
          />
        </label>
      </div>

      <button
        className="focus-ring mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[var(--secondary)] px-5 py-2.5 text-sm font-black text-white shadow-[0_10px_24px_rgba(233,95,50,0.28)] transition hover:bg-[var(--brand-red)]"
        type="submit"
      >
        שליחה
      </button>
    </form>
  );
}
