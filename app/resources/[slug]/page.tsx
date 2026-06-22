import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getResource, resources } from "@/content/resources";
import { getService } from "@/content/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);

  if (!resource) {
    return {};
  }

  return {
    title: resource.title,
    description: resource.excerpt
  };
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const resource = getResource(slug);

  if (!resource) {
    notFound();
  }

  const related = resource.relatedServiceSlugs
    .map((serviceSlug) => getService(serviceSlug))
    .filter(Boolean);

  return (
    <article className="container-page max-w-4xl py-16 md:py-20">
      <div className="banner-header banner-header-mixed -mx-4 mb-8 rounded-lg px-4 py-8 md:-mx-8 md:px-8">
        <span className="inline-flex rounded-md bg-[var(--soft)] px-3 py-1 text-sm font-black text-[var(--secondary)]">
          {resource.type}
        </span>
        <h1 className="mt-4 text-balance text-4xl font-black leading-tight text-[var(--primary-dark)] md:text-6xl">
          {resource.title}
        </h1>
        <p className="mt-5 text-xl leading-9 text-[var(--muted)]">
          {resource.excerpt}
        </p>
      </div>

      <div className="rounded-lg border border-[var(--primary)] bg-white p-6 shadow-[0_16px_44px_rgba(17,27,41,0.08)] md:p-8">
        {resource.body.map((paragraph) => (
          <p className="mb-6 text-lg leading-9 text-[var(--foreground)]" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {resource.topics.map((topic) => (
          <span
            className="rounded-full border border-[var(--border)] bg-[var(--soft)] px-4 py-2 text-sm font-black text-[var(--secondary)]"
            key={topic}
          >
            {topic}
          </span>
        ))}
      </div>

      {related.length > 0 && (
        <section className="brand-pattern mt-12 rounded-lg border border-[var(--border)] bg-[var(--soft)] p-7 text-[var(--primary)] shadow-[0_18px_46px_rgba(243,112,63,0.12)]">
          <h2 className="text-2xl font-black">שירותים קשורים</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {related.map((service) =>
              service ? (
                <Button
                  href={`/services/${service.slug}`}
                  className="!bg-[var(--secondary)] !text-white hover:!bg-[var(--brand-red)]"
                  key={service.slug}
                >
                  {service.title}
                  <ArrowLeft size={17} />
                </Button>
              ) : null
            )}
          </div>
        </section>
      )}
    </article>
  );
}
