export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-zinc-800" />
          <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-blue-500 border-r-violet-500 animate-spin" />
          <div className="absolute inset-2 w-12 h-12 rounded-full border-4 border-transparent border-b-violet-400 border-l-blue-400 animate-spin animate-reverse" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Carregando
          </span>
          <LoadingDots />
        </div>
      </div>
    </div>
  );
}

function LoadingDots() {
  return (
    <div className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-blue-500 to-violet-500 animate-bounce"
          style={{ animationDelay: `${i * 150}ms` }}
        />
      ))}
    </div>
  );
}
