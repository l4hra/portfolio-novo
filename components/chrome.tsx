import { sections } from "@/lib/data";

const patterns: Record<string, string> = {
  start: "bg-dots",
  sobre: "bg-grid",
  fases: "bg-scanlines",
  skills: "bg-stars",
  projetos: "bg-stripes",
  contato: "bg-glow",
};

export function Nav({ active }: { active: string }) {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex max-w-full items-center gap-1 overflow-x-auto border-2 border-arc-mint bg-arc-bg/90 p-1 font-terminal text-sm backdrop-blur">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`whitespace-nowrap px-3 py-1.5 transition-colors ${
              active === s.id
                ? "bg-arc-mint text-arc-bg"
                : "hover:text-arc-pink"
            }`}
          >
            {s.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function StageBackgrounds({ active }: { active: string }) {
  return (
    <>
      {sections.map((s) => (
        <div
          key={s.id}
          aria-hidden
          className={`absolute inset-0 transition-opacity duration-700 ${patterns[s.id]} ${
            active === s.id ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}