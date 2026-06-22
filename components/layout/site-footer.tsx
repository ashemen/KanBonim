import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="section-dark relative overflow-hidden border-t border-[var(--secondary)]">
      <div className="banner-pattern-cream absolute inset-0 opacity-[0.32]" />
      <div className="banner-wash-clean absolute inset-0" />
      <div className="container-page relative grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            src="/images/brand/logo-cream-navy.png"
            alt="כאן בונים - אהבה שבנויה נכון"
            width={900}
            height={836}
            className="mb-5 h-24 w-auto"
          />
          <p className="max-w-md text-sm leading-7 text-[var(--primary)]">
            שידוכים, אימון וליווי לבניית קשר זוגי מתוך מודעות, רגישות
            ואחריות.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-base font-black text-[var(--primary-dark)]">שירותים</h2>
          <div className="grid gap-2 text-sm text-[var(--primary)]">
            {services.map((service) => (
              <Link
                href={`/services/${service.slug}`}
                className="transition hover:text-[var(--secondary)]"
                key={service.slug}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-base font-black text-[var(--primary-dark)]">יצירת קשר</h2>
          <div className="grid gap-3 text-sm text-[var(--primary)]">
            <Link
              href={`tel:${site.phonePrimary}`}
              className="flex items-center gap-2 transition hover:text-[var(--secondary)]"
            >
              <Phone size={16} />
              {site.phonePrimary}
            </Link>
            <Link
              href={`https://wa.me/${site.whatsapp}`}
              className="flex items-center gap-2 transition hover:text-[var(--secondary)]"
            >
              <MessageCircle size={16} />
              וואטסאפ
            </Link>
            <Link
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 transition hover:text-[var(--secondary)]"
            >
              <Mail size={16} />
              {site.email}
            </Link>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              {site.address}
            </span>
          </div>
        </div>
      </div>
      <div className="container-page relative flex flex-col gap-2 border-t border-[var(--border)] py-5 text-sm text-[var(--primary)] md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} כאן בונים. כל הזכויות שמורות.</span>
        <span>אתר זה נבנה על ידי Codex</span>
      </div>
    </footer>
  );
}
