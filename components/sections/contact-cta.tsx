import { Mail, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export function ContactCta() {
  return (
    <section className="section-dark relative overflow-hidden py-16">
      <div className="banner-pattern-mixed absolute inset-0 opacity-[0.12]" />
      <div className="banner-wash-sun absolute inset-0" />
      <Image
        src="/images/brand/shape-house-orange.png"
        alt=""
        width={700}
        height={929}
        className="pointer-events-none absolute -bottom-20 left-8 hidden h-64 w-auto opacity-20 md:block"
      />
      <div className="container-page relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="text-3xl font-black text-[var(--primary-dark)] md:text-4xl">
            רוצים להתחיל לבנות?
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--primary)]">
            אפשר לפנות בשיחה קצרה ודיסקרטית, לספר איפה אתם נמצאים, ולחשוב
            יחד מה הצעד הנכון.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
          <Button
            href={`https://wa.me/${site.whatsapp}`}
            className="!bg-[var(--secondary)] !text-white hover:!bg-[var(--brand-red)]"
          >
            <MessageCircle size={18} />
            וואטסאפ
          </Button>
          <Button
            href={`tel:${site.phonePrimary}`}
            variant="secondary"
            className="!border-[var(--primary)] !bg-white/80 !text-[var(--primary)] hover:!border-[var(--secondary)] hover:!bg-white"
          >
            <Phone size={18} />
            {site.phonePrimary}
          </Button>
          <Button
            href={`mailto:${site.email}`}
            variant="secondary"
            className="!border-[var(--primary)] !bg-white/80 !text-[var(--primary)] hover:!border-[var(--secondary)] hover:!bg-white"
          >
            <Mail size={18} />
            מייל
          </Button>
        </div>
      </div>
    </section>
  );
}
