"use client";

import { Menu, MessageCircle, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--primary)] bg-white/95 shadow-[0_10px_30px_rgba(17,27,41,0.08)] backdrop-blur-xl">
      <div className="container-page flex min-h-24 items-center justify-between gap-4 md:min-h-28">
        <Link href="/" className="focus-ring flex items-center rounded-lg border border-[var(--border)] bg-white px-2 py-1 shadow-sm">
          <Image
            src="/images/brand/logo-color-white.png"
            alt="כאן בונים - אהבה שבנויה נכון"
            width={900}
            height={836}
            priority
            className="h-16 w-auto md:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-black text-[var(--primary)] lg:flex">
          {site.nav.map((item) =>
            item.href === "/services" ? (
              <div className="group relative flex min-h-12 items-center" key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring rounded-md transition hover:text-[var(--secondary)]"
                >
                  {item.label}
                </Link>
                <div className="invisible absolute right-0 top-full z-50 w-64 rounded-lg border border-[var(--primary)] bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                  {services.map((service) => (
                    <Link
                      href={`/services/${service.slug}`}
                      className="block rounded-md px-3 py-2 text-sm text-[var(--foreground)] transition hover:bg-[var(--soft)] hover:text-[var(--secondary)]"
                      key={service.slug}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                href={item.href}
                className="focus-ring rounded-md transition hover:text-[var(--secondary)]"
                key={item.href}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={`tel:${site.phonePrimary}`}
            className="focus-ring inline-flex size-11 items-center justify-center rounded-lg border border-[var(--primary)] bg-white text-[var(--primary)] transition hover:border-[var(--secondary)] hover:bg-[var(--soft)] hover:text-[var(--secondary)]"
            aria-label="התקשרו לכאן בונים"
          >
            <Phone size={19} />
          </Link>
          <Button href={`https://wa.me/${site.whatsapp}`}>
            <MessageCircle size={18} />
            לשיחת היכרות
          </Button>
        </div>

        <button
          className="focus-ring inline-flex size-11 items-center justify-center rounded-lg border border-[var(--primary)] bg-white text-[var(--foreground)] lg:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-[var(--border)] bg-white lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="container-page grid gap-1 py-4">
          {site.nav.map((item) => (
            <Link
              href={item.href}
              className="rounded-lg px-3 py-3 font-bold text-[var(--foreground)] transition hover:bg-[var(--soft)]"
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 grid gap-1 border-t border-[var(--border)] pt-2">
            {services.map((service) => (
              <Link
                href={`/services/${service.slug}`}
                className="rounded-lg px-3 py-2 text-sm font-bold text-[var(--muted)] transition hover:bg-[var(--soft)]"
                key={service.slug}
                onClick={() => setOpen(false)}
              >
                {service.title}
              </Link>
            ))}
          </div>
          <Button
            href={`https://wa.me/${site.whatsapp}`}
            className="mt-3 w-full"
          >
            <MessageCircle size={18} />
            לשיחת היכרות
          </Button>
        </nav>
      </div>
    </header>
  );
}
