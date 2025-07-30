const LOCALE = {
  langTag: "en-US",
};

export function formatDate(pubDatetime: string | Date): string {
  const pubDate = new Date(pubDatetime);

  if (isNaN(pubDate.getTime())) {
    throw new Error("Invalid date value");
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(pubDate);
}
