import { BookOpen, HeartHandshake, Home, Mic, Users } from "lucide-react";
import Link from "next/link";
import { services } from "@/content/services";

const icons = [HeartHandshake, Home, Users, Mic, BookOpen];

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid service-grid gap-4">
      {services.map((service, index) => {
        const Icon = icons[index] ?? HeartHandshake;

        return (
          <Link
            href={`/services/${service.slug}`}
            className="focus-ring group relative overflow-hidden rounded-lg border border-[var(--border)] bg-white p-5 shadow-[0_12px_34px_rgba(17,27,41,0.07)] transition hover:-translate-y-1 hover:border-[var(--secondary)] hover:shadow-[0_18px_44px_rgba(17,27,41,0.14)]"
            key={service.slug}
          >
            <span className="absolute inset-x-0 top-0 h-1.5 bg-[var(--secondary)]" />
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="grid size-11 place-items-center rounded-lg bg-[var(--accent)] text-[var(--primary)]">
                <Icon size={22} />
              </span>
            </div>
            <h3 className="text-xl font-black text-[var(--foreground)]">
              {service.title}
            </h3>
            <p className="mt-2 text-sm font-black text-[var(--secondary)]">
              {service.audience}
            </p>
            {!compact && (
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                {service.summary}
              </p>
            )}
          </Link>
        );
      })}
    </div>
  );
}
