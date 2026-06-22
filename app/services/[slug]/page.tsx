import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/sections/contact-cta";
import { Button } from "@/components/ui/button";
import { getService, services } from "@/content/services";
import { site } from "@/content/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.seo.description
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="banner-header banner-header-cream">
      <div className="container-page grid gap-10 py-16 md:py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <h1 className="text-balance text-4xl font-black leading-tight text-[var(--primary-dark)] md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-5 text-xl font-bold leading-9 text-[var(--primary)]">
            {service.audience}
          </p>
          <p className="mt-6 text-lg leading-9 text-[var(--muted)]">
            {service.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`https://wa.me/${site.whatsapp}`}>
              <MessageCircle size={18} />
              {service.cta}
            </Button>
            <Button href="/services" variant="secondary">
              כל השירותים
              <ArrowLeft size={18} />
            </Button>
          </div>
        </div>
        <div className="rounded-lg border border-[var(--primary)] bg-white p-6 shadow-[0_16px_44px_rgba(17,27,41,0.09)]">
          <h2 className="text-2xl font-black">איך זה עובד?</h2>
          <div className="mt-6 grid gap-4">
            {service.steps.map((step, index) => (
              <div className="flex gap-4" key={step}>
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[var(--accent)] text-sm font-black text-[var(--primary)]">
                  {index + 1}
                </span>
                <p className="pt-1 leading-7 text-[var(--muted)]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>

      <section className="border-y border-[var(--primary)] bg-white py-16">
        <div className="container-page grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-black">מה אפשר לקבל מהתהליך?</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
              לא מבטיחים קסמים. כן בונים תהליך עם יותר בהירות, כבוד וכלים
              מעשיים.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.outcomes.map((outcome) => (
              <div className="flex gap-3 rounded-lg border border-[var(--border)] bg-[var(--soft)] p-5" key={outcome}>
                <CheckCircle2 className="mt-1 shrink-0 text-[var(--secondary)]" size={20} />
                <p className="font-bold leading-7">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-3xl font-black">שאלות נפוצות</h2>
        <div className="mt-8 grid gap-4">
          {service.faqs.map((faq) => (
            <details
              className="group rounded-lg border border-[var(--border)] bg-white p-5 shadow-[0_10px_28px_rgba(17,27,41,0.06)]"
              key={faq.question}
            >
              <summary className="cursor-pointer list-none text-lg font-black">
                {faq.question}
              </summary>
              <p className="mt-3 leading-8 text-[var(--muted)]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
