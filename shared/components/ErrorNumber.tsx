interface ErrorNumberProps {
  readonly code?: string | number;
}

export const ErrorNumber = ({ code = "404" }: ErrorNumberProps) => (
  <div className="relative inline-block mb-6">
    <h1 className="text-8xl md:text-9xl font-bold bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent leading-none">
      {code}
    </h1>
    <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-zinc-800 blur-sm -z-10">
      {code}
    </div>
  </div>
);

