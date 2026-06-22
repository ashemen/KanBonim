export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function absoluteUrl(path = "") {
  const base = "https://www.kanbonim.co.il";
  return `${base}${path}`;
}

