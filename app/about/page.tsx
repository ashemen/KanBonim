import type { Metadata } from "next";
import Image from "next/image";
import { ContactCta } from "@/components/sections/contact-cta";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "אודות",
  description:
    "הכירו את אריאל ונחמה שמן ואת הגישה של כאן בונים לשידוכים, אימון, קהילה ובניית בית."
};

export default function AboutPage() {
  return (
    <>
      <section className="banner-header banner-header-sky">
        <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black text-[var(--primary-dark)] md:text-6xl">מי אנחנו</h1>
          <p className="mt-6 text-xl leading-9 text-[var(--muted)]">
            כאן בונים נולדה מתוך אמונה שאפשר לעזור לרווקים, רווקות וקהילות
            לבנות קשרים בצורה מקצועית יותר, רגישה יותר ואחראית יותר.
          </p>
        </div>
        </div>
      </section>

      <section className="border-y border-[var(--primary)] bg-white py-16">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-[var(--primary)] bg-white shadow-[0_16px_44px_rgba(17,27,41,0.09)]">
            <div className="relative h-80 bg-[var(--soft)]">
              <Image
                src="/images/profiles/nechama-shemen.png"
                alt="נחמה שמן"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
            <div className="border-t border-[var(--secondary)] p-7">
              <h2 className="text-3xl font-black text-[var(--primary-dark)]">נחמה שמן</h2>
              <p className="mt-5 text-lg leading-9 text-[var(--muted)]">
              מביאה אל תהליך השידוכים והאימון הקשבה רגישה, ניסיון עם רווקים
              ורווקות, וכלים שמחברים בין עולם פנימי, בחירה זוגית ובניית בית.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-[var(--primary)] bg-white shadow-[0_16px_44px_rgba(17,27,41,0.09)]">
            <div className="relative h-80 bg-[var(--soft)]">
              <Image
                src="/images/profiles/ariel-shemen.png"
                alt="אריאל שמן"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
            <div className="border-t border-[var(--secondary)] p-7">
              <h2 className="text-3xl font-black text-[var(--primary-dark)]">אריאל שמן</h2>
              <p className="mt-5 text-lg leading-9 text-[var(--muted)]">
              עוסק בשאלות של חברה, קהילה, חינוך וזוגיות, ומביא מבט רחב על
              האופן שבו קהילות יכולות לסייע בשידוכים בלי לאבד את האדם שבמרכז.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <h2 className="text-3xl font-black text-[var(--primary-dark)] md:text-4xl">הגישה שלנו</h2>
        <div className="grid gap-5 text-lg leading-9 text-[var(--muted)]">
          <p>
            אנחנו מאמינים ששידוכים אינם רק התאמה בין נתונים. הם מפגש בין
            אנשים, משפחות, חלומות, פחדים ותקווה גדולה לבנות בית.
          </p>
          <p>
            לכן העבודה שלנו משלבת מקצועיות, דיסקרטיות, רגישות תרבותית והבנה של
            העולם הדתי-לאומי. המטרה היא לא ללחוץ, אלא לעזור לבנות דרך.
          </p>
          <div>
            <Button href="/contact">יצירת קשר</Button>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
