import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-[var(--secondary)] text-white shadow-[0_10px_24px_rgba(233,95,50,0.28)] hover:bg-[var(--brand-red)]",
  secondary:
    "border border-[var(--primary)] bg-white text-[var(--primary)] hover:border-[var(--secondary)] hover:bg-[var(--soft)] hover:text-[var(--brand-red)]",
  ghost:
    "text-[var(--primary)] underline decoration-[var(--secondary)] decoration-2 underline-offset-8 hover:text-[var(--secondary)]"
};

export function Button({
  href,
  children,
  variant = "primary",
  className
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-black transition",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
