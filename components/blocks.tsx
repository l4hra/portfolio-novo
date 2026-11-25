import type { ReactNode } from "react";

export function Section({
  id,
  n,
  label,
  children,
}: {
  id: string;
  n: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="flex min-h-screen flex-col justify-center gap-6 px-8 py-28"
    >
      <p className="font-terminal text-arc-mint">
        {n} / {label}
      </p>
      {children}
    </section>
  );
}

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-pixel text-xl leading-relaxed text-arc-pink">
      {children}
    </h2>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="border border-arc-cyan/60 px-2 py-1 font-terminal text-xs text-arc-cyan">
      {children}
    </span>
  );
}