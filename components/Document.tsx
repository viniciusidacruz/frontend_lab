import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Root = ({ children }: Props) => (
  <section className="mt-12">{children}</section>
);

const Heading2 = ({ children }: Props) => (
  <h2 className="text-2xl font-bold text-gray-800 mb-4">{children}</h2>
);

const List = ({ children }: Props) => (
  <ul className="space-y-3 text-gray-600 max-w-2xl mb-8">{children}</ul>
);

const ListItem = ({ children }: Props) => (
  <li className="flex items-start gap-2">{children}</li>
);

const Dot = () => <span className="text-blue-600 font-bold">•</span>;

const Paragraph = ({ children }: Props) => (
  <p className="text-gray-600 mb-6 max-w-2xl">{children}</p>
);

const BlockquoteContainer = ({ children }: Props) => (
  <div className="space-y-3 text-gray-600 max-w-2xl mb-8">{children}</div>
);

const Blockquote = ({ children }: Props) => (
  <blockquote className="text-gray-600 mb-6 max-w-2xl bg-gray-50 p-4 rounded-lg border border-gray-200">
    {children}
  </blockquote>
);

const Code = ({ children }: Props) => (
  <code className="text-blue-600 font-mono font-semibold">{children}</code>
);

export const Document = {
  Root,
  Heading2,
  List,
  ListItem,
  Dot,
  Paragraph,
  BlockquoteContainer,
  Blockquote,
  Code,
};
