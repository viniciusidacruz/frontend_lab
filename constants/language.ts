export enum Language {
  HTML = "html",
  JAVASCRIPT = "javascript",
  REACT = "react",
}

export const ICON_LANGUAGE: Record<Language, string> = {
  [Language.HTML]: "/html.svg",
  [Language.JAVASCRIPT]: "/js.svg",
  [Language.REACT]: "/react.svg",
};

export const LANGUAGE_TITLE: Record<Language, string> = {
  [Language.HTML]: "HTML",
  [Language.JAVASCRIPT]: "JavaScript",
  [Language.REACT]: "React",
};
