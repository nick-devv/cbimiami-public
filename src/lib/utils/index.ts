export function formatDate(date: string | Date, locale = "pt-BR") {
  const value = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(value);
}

export function truncate(text: string, length = 160) {
  if (!text) return "";
  return text.length > length ? `${text.slice(0, length)}...` : text;
}

export function groupBy<T, K extends PropertyKey>(
  list: T[],
  keyGetter: (item: T) => K,
): Record<K, T[]> {
  return list.reduce((acc, item) => {
    const key = keyGetter(item);
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {} as Record<K, T[]>);
}

export function chunkArray<T>(items: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
}

export function getEnv(key: string, fallback = ""): string {
  const value = process.env[key];
  if (!value) return fallback;
  return value;
}

