import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ContactCta } from "@/components/sections/contact-cta";
import { resources } from "@/content/resources";

export const metadata: Metadata = {
  title: "מאמרים וסרטונים",
  description:
    "מאמרים, סרטונים ופודקאסטים של כאן בונים על רווקות, שידוכים, דייטים וזוגיות."
};

export default function ResourcesPage() {
  return (
    <>
      <section className="banner-header banner-header-cream">
        <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black text-[var(--primary-dark)] md:text-6xl">
            מאמרים וסרטונים
          </h1>
          <p className="mt-6 text-xl leading-9 text-[var(--muted)]">
            תוכן מעמיק ונגיש מתוך המפגש עם רווקים, רווקות, הורים וקהילות.
          </p>
        </div>

        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid resource-grid gap-4">
          {resources.map((resource) => (
            <Link
              href={`/resources/${resource.slug}`}
              className="focus-ring group relative overflow-hidden rounded-lg border border-[var(--border)] bg-white p-6 shadow-[0_12px_34px_rgba(17,27,41,0.07)] transition hover:-translate-y-1 hover:border-[var(--secondary)] hover:shadow-[0_18px_44px_rgba(17,27,41,0.14)]"
              key={resource.slug}
            >
              <span className="absolute inset-x-0 top-0 h-1.5 bg-[var(--secondary)]" />
              <span className="text-sm font-black text-[var(--secondary)]">
                {resource.type}
              </span>
              <h2 className="mt-3 text-2xl font-black text-[var(--primary-dark)]">{resource.title}</h2>
              <p className="mt-4 leading-8 text-[var(--muted)]">
                {resource.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[var(--primary)]">
                לקריאה
                <ArrowLeft
                  size={17}
                  className="transition group-hover:-translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
