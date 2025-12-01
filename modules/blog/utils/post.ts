import { BLOG_DATE_BASE_OPTIONS, BLOG_DATE_LOCALE, WORDS_PER_MINUTE } from "@/modules/blog/constants";

const BASE_DATE_FORMATTER = new Intl.DateTimeFormat(BLOG_DATE_LOCALE, {
  ...BLOG_DATE_BASE_OPTIONS,
  month: "short",
});

export const formatPostDate = (
  dateString: string,
  monthLength: "short" | "long" = "short"
): string => {
  const formatter =
    monthLength === "short"
      ? BASE_DATE_FORMATTER
      : new Intl.DateTimeFormat(BLOG_DATE_LOCALE, {
          ...BLOG_DATE_BASE_OPTIONS,
          month: "long",
        });

  return formatter.format(new Date(dateString));
};

export const estimateReadTime = (html: string): number => {
  const text = html.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
};
