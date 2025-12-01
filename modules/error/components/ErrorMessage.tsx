import { Fragment } from "react";

interface ErrorMessageProps {
  readonly title: string;
  readonly description: string;
}

export const ErrorMessage = ({ title, description }: ErrorMessageProps) => (
  <Fragment>
    <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
      {title}
    </h2>
    <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-2xl mx-auto">
      {description}
    </p>
  </Fragment>
);

