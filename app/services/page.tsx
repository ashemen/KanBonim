import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { ContactCta } from "@/components/sections/contact-cta";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "שירותים",
  description:
    "שירותי כאן בונים: שדכנות אפקטיבית, אימון רווקים ורווקות, סדנאות, הרצאות והכשרת שדכנים בקהילה."
};

export default function ServicesPage() {
  return (
    <>
      <section className="banner-header banner-header-mixed">
        <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black text-[var(--primary-dark)] md:text-6xl">שירותים</h1>
          <p className="mt-6 text-xl leading-9 text-[var(--muted)]">
            כל שירות נבנה סביב שאלה אחרת: איך מוצאים התאמה, איך מגיעים מוכנים
            לקשר, ואיך קהילה יכולה לעזור בצורה מכבדת ואחראית.
          </p>
        </div>
        </div>
      </section>

      <section className="container-page py-16">
        <ServicesGrid />
      </section>

      <section className="border-y border-[var(--primary)] bg-white py-16">
        <div className="container-page grid gap-5">
          {services.map((service, index) => (
            <div
              className="grid gap-5 rounded-lg border border-[var(--border)] bg-white p-5 shadow-[0_10px_28px_rgba(17,27,41,0.06)] md:grid-cols-[120px_1fr_auto] md:items-center"
              key={service.slug}
            >
              <span className="text-4xl font-black text-[var(--secondary)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-2xl font-black">{service.title}</h2>
                <p className="mt-2 leading-7 text-[var(--muted)]">
                  {service.summary}
                </p>
              </div>
              <Button href={`/services/${service.slug}`} variant="secondary">
                לפרטים
                <ArrowLeft size={18} />
              </Button>
            </div>
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
