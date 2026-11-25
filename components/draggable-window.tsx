"use client";

import { motion } from "motion/react";
import type { ReactNode, RefObject } from "react";

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
  constraints: RefObject<HTMLDivElement | null>;
};

export function DraggableWindow({
  title,
  children,
  className = "",
  constraints,
}: Props) {
  return (
    <motion.div
      drag
      dragConstraints={constraints}
      dragMomentum={false}
      whileDrag={{ scale: 1.03, zIndex: 40 }}
      className={`absolute w-64 border-2 border-arc-mint bg-arc-panel shadow-[4px_4px_0_0_var(--color-arc-pink)] ${className}`}
    >
      <div className="flex cursor-grab items-center justify-between border-b-2 border-arc-mint bg-arc-bg px-3 py-2 font-terminal text-sm text-arc-mint active:cursor-grabbing">
        <span>{title}</span>
        <span aria-hidden>✕</span>
      </div>
      <div className="p-3 font-terminal text-sm leading-relaxed">{children}</div>
    </motion.div>
  );
}