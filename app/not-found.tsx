import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center">
      <h1 className="text-4xl font-black md:text-6xl">העמוד לא נמצא</h1>
      <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">
        ייתכן שהקישור השתנה במסגרת בניית האתר החדש.
      </p>
      <Button href="/" className="mt-8">
        חזרה לבית
      </Button>
    </section>
  );
}

