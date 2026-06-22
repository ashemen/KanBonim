import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { ContactEmailForm } from "@/components/sections/contact-email-form";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "צור קשר",
  description:
    "צרו קשר עם כאן בונים לשיחת היכרות, שדכנות, אימון, סדנה, הרצאה או הכשרת שדכנים בקהילה."
};

export default function ContactPage() {
  return (
    <section className="banner-header banner-header-sky">
      <div className="container-page grid gap-10 py-16 md:py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h1 className="text-4xl font-black text-[var(--primary-dark)] md:text-6xl">
            צור קשר
          </h1>
          <p className="mt-6 text-xl leading-9 text-[var(--muted)]">
            אפשר לפנות באופן פשוט ודיסקרטי. ספרו בקצרה מה הצורך, ונחזור אליכם
            בצורה שמתאימה לכם.
          </p>

          <div className="mt-9 grid gap-3">
            <Link
              href={`https://wa.me/${site.whatsapp}`}
              className="focus-ring flex items-center gap-3 rounded-lg border border-[var(--border)] bg-white p-4 font-black shadow-[0_10px_28px_rgba(17,27,41,0.06)] transition hover:border-[var(--secondary)] hover:bg-[var(--soft)]"
            >
              <MessageCircle className="text-[var(--primary)]" size={21} />
              וואטסאפ
            </Link>
            <Link
              href={`tel:${site.phonePrimary}`}
              className="focus-ring flex items-center gap-3 rounded-lg border border-[var(--border)] bg-white p-4 font-black shadow-[0_10px_28px_rgba(17,27,41,0.06)] transition hover:border-[var(--secondary)] hover:bg-[var(--soft)]"
            >
              <Phone className="text-[var(--primary)]" size={21} />
              {site.phonePrimary}
            </Link>
            <Link
              href={`mailto:${site.email}`}
              className="focus-ring flex items-center gap-3 rounded-lg border border-[var(--border)] bg-white p-4 font-black shadow-[0_10px_28px_rgba(17,27,41,0.06)] transition hover:border-[var(--secondary)] hover:bg-[var(--soft)]"
            >
              <Mail className="text-[var(--primary)]" size={21} />
              {site.email}
            </Link>
            <div className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-white p-4 font-black shadow-[0_10px_28px_rgba(17,27,41,0.06)]">
              <MapPin className="text-[var(--primary)]" size={21} />
              {site.address}
            </div>
          </div>
        </div>

        <ContactEmailForm />
      </div>
    </section>
  );
}
