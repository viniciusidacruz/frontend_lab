import { RichText, RichTextSegment } from "./types";

export const text = (value: string): RichTextSegment => ({
  type: "text",
  value,
});

export const code = (value: string): RichTextSegment => ({
  type: "code",
  value,
});

export const toRichText = (value: string): RichText => [text(value)];
