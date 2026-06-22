import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactCta } from "@/components/sections/contact-cta";
import { ServicesGrid } from "@/components/sections/services-grid";
import { resources } from "@/content/resources";
import { site } from "@/content/site";
import { testimonials } from "@/content/testimonials";

const principles = [
  {
    title: "מודעות",
    icon: "/images/brand/shape-speech-orange.png"
  },
  {
    title: "רגישות",
    icon: "/images/brand/shape-heart-orange.png"
  },
  {
    title: "אחריות",
    icon: "/images/brand/shape-house-navy.png"
  }
];

export default function Home() {
  return (
    <>
      <section className="section-dark relative overflow-hidden border-b border-[var(--border)]">
        <div className="banner-pattern-mixed absolute inset-0 opacity-[0.2]" />
        <div className="banner-wash-sky absolute inset-0" />
        <div className="container-page relative grid min-h-[calc(100svh-96px)] items-center gap-10 py-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="max-w-2xl rounded-lg border border-white/70 bg-white/80 p-6 shadow-[0_18px_46px_rgba(37,50,65,0.1)] backdrop-blur-sm md:p-8">
          <h1 className="text-balance text-5xl font-black leading-tight text-[var(--primary-dark)] md:text-7xl">
            כאן בונים
          </h1>
          <p className="mt-6 text-balance text-xl font-black leading-9 text-[var(--secondary)] md:text-2xl">
            שידוכים, אימון וליווי לבניית קשר זוגי מתוך מודעות, רגישות ואחריות
          </p>
          <p className="mt-6 max-w-xl text-lg leading-9 text-[var(--primary)]">
            קשר זוגי טוב לא נוצר רק מפגישה נכונה. הוא נבנה מתוך הקשבה, בירור,
            אומץ, וכלים שמכבדים את האדם ואת הדרך אל הבית.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`https://wa.me/${site.whatsapp}`}>
              <MessageCircle size={18} />
              לשיחת היכרות
            </Button>
            <Button href="/services" variant="secondary" className="!border-[var(--primary)] !bg-white !text-[var(--primary)] hover:!border-[var(--secondary)] hover:!bg-[var(--accent)]">
              הכירו את השירותים
              <ArrowLeft size={18} />
            </Button>
          </div>
          </div>

          <div className="brand-soft-shadow relative flex min-h-[440px] flex-col items-center justify-between overflow-hidden rounded-lg border border-[var(--border)] bg-white">
          <div className="banner-pattern-cream absolute inset-0 opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/92 to-[var(--accent)]" />
          <Image
            src="/images/brand/logo-color-white.png"
            alt="כאן בונים - אהבה שבנויה נכון"
            width={900}
            height={836}
            priority
            className="relative z-10 mt-9 h-72 w-auto max-w-[calc(100%-4rem)] rounded-lg border border-[var(--border)] bg-white object-contain p-5 shadow-xl shadow-[rgba(17,27,41,0.18)] md:h-80"
          />
          <div className="relative z-10 mt-8 w-full border-t border-[var(--secondary)] bg-[var(--accent)] p-6 text-center text-[var(--primary-dark)]">
            <p className="mx-auto max-w-md text-lg font-black leading-8">
              לא מחכים שזה יקרה לבד. בונים דרך, קשר ובית.
            </p>
          </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--primary)] bg-white py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-black text-[var(--primary-dark)] md:text-4xl">
              זוגיות טובה לא נוצרת לבד
            </h2>
            <p className="mt-5 text-lg leading-9 text-[var(--muted)]">
              שידוכים וזוגיות דורשים יותר מרשימות והצעות. הם דורשים הבנה של
              האדם, רגישות למורכבות, וכלים שמאפשרים להיפגש באמת.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {principles.map((principle) => (
              <div
                className="rounded-lg border border-[var(--border)] bg-[var(--soft)] p-5 shadow-[0_10px_28px_rgba(17,27,41,0.06)]"
                key={principle.title}
              >
                <Image
                  src={principle.icon}
                  alt=""
                  width={700}
                  height={700}
                  className="h-10 w-10 object-contain"
                />
                <h3 className="mt-5 text-2xl font-black text-[var(--primary-dark)]">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  עיקרון שמוביל את הדרך משיחה ראשונה ועד החלטות משמעותיות.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-black text-[var(--primary-dark)] md:text-4xl">
              איך אפשר לעזור?
            </h2>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              חמישה מסלולים שמתחברים לאותה מטרה: לבנות קשר נכון יותר, באחריות
              ובכבוד.
            </p>
          </div>
          <Button href="/services" variant="ghost">
            לכל השירותים
            <ArrowLeft size={18} />
          </Button>
        </div>
        <ServicesGrid />
      </section>

      <section className="section-dark relative overflow-hidden py-16">
        <div className="banner-pattern-blue absolute inset-0 opacity-[0.22]" />
        <div className="banner-wash-sun absolute inset-0" />
        <div className="container-page relative grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-3xl font-black text-[var(--primary-dark)] md:text-4xl">
            תהליך אישי, מקצועי ודיסקרטי
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "היכרות שמקשיבה לסיפור, לא רק לפרטים יבשים",
              "שילוב בין ניסיון בשטח, אימון וחשיבה קהילתית",
              "ליווי שמכבד קצב, פרטיות ומורכבות אישית",
              "שפה ברורה להורים, רווקים, רווקות וקהילות"
            ].map((item) => (
              <div className="flex gap-3 rounded-lg border border-[var(--border)] bg-white p-5 text-[var(--foreground)] shadow-[0_16px_38px_rgba(243,112,63,0.1)]" key={item}>
                <CheckCircle2
                  className="mt-1 shrink-0 text-[var(--secondary)]"
                  size={20}
                />
                <p className="text-base font-bold leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative overflow-hidden rounded-lg border border-[var(--primary)] bg-white p-7 shadow-[0_16px_44px_rgba(17,27,41,0.09)]">
          <Image
            src="/images/brand/shape-speech-orange.png"
            alt=""
            width={700}
            height={380}
            className="pointer-events-none absolute -left-16 -top-8 h-28 w-auto opacity-10"
          />
          <h2 className="text-3xl font-black">הכירו אותנו</h2>
          <p className="mt-5 text-lg leading-9 text-[var(--muted)]">
            אריאל ונחמה שמן מלווים רווקים, רווקות, משפחות וקהילות מתוך חיבור
            בין עולם השידוכים, אימון, חינוך, מחקר ורגישות אנושית.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                name: "נחמה שמן",
                image: "/images/profiles/nechama-shemen.png"
              },
              {
                name: "אריאל שמן",
                image: "/images/profiles/ariel-shemen.png"
              }
            ].map((person) => (
              <div
                className="rounded-lg border border-[var(--border)] bg-[var(--soft)] p-3 text-center"
                key={person.name}
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  width={220}
                  height={220}
                  className="mx-auto h-52 w-full max-w-56 rounded-lg object-cover"
                />
                <span className="mt-3 block text-base font-black text-[var(--primary)]">
                  {person.name}
                </span>
              </div>
            ))}
          </div>
          <Button href="/about" className="mt-7" variant="secondary">
            לאודות
            <ArrowLeft size={18} />
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {testimonials.slice(0, 2).map((testimonial) => (
            <blockquote
              className="rounded-lg border border-[var(--border)] bg-white p-6 shadow-[0_12px_34px_rgba(17,27,41,0.07)]"
              key={testimonial.name}
            >
              <p className="text-lg leading-8">“{testimonial.quote}”</p>
              <footer className="mt-5 text-sm font-bold text-[var(--secondary)]">
                {testimonial.name} · {testimonial.context}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--primary)] bg-white py-16">
        <div className="container-page">
          <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-black text-[var(--primary-dark)] md:text-4xl">
                מאמרים וסרטונים
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                מחשבות מהשטח על רווקות, שידוכים, דייטים וקהילה.
              </p>
            </div>
            <Button href="/resources" variant="ghost">
              לכל התכנים
              <ArrowLeft size={18} />
            </Button>
          </div>
          <div className="grid resource-grid gap-4">
            {resources.slice(0, 3).map((resource) => (
              <Link
                href={`/resources/${resource.slug}`}
                className="focus-ring group relative overflow-hidden rounded-lg border border-[var(--border)] bg-white p-5 shadow-[0_12px_34px_rgba(17,27,41,0.07)] transition hover:-translate-y-1 hover:border-[var(--secondary)] hover:shadow-[0_18px_44px_rgba(17,27,41,0.14)]"
                key={resource.slug}
              >
                <span className="absolute inset-x-0 top-0 h-1.5 bg-[var(--secondary)]" />
                <span className="text-sm font-black text-[var(--secondary)]">
                  {resource.type}
                </span>
                <h3 className="mt-3 text-xl font-black">{resource.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">
                  {resource.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
