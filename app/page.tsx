"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/8bit/button";
import { DraggableWindow } from "@/components/draggable-window";
import { Nav, StageBackgrounds } from "@/components/chrome";
import { Section, Tag, Title } from "@/components/blocks";
import { ContactForm } from "@/components/contact-form";
import { useActiveSection } from "@/app/hooks/use-active-section";
import { about, phases, projects, sectionIds, skills, stats } from "@/lib/data";

const card =
  "border-2 border-arc-mint bg-arc-bg/70 p-5 shadow-[4px_4px_0_0_var(--color-arc-pink)]";

export default function Home() {
  const stageRef = useRef<HTMLDivElement>(null);
  const active = useActiveSection(sectionIds);

  return (
    <div className="lg:grid lg:grid-cols-[1fr_minmax(440px,45%)]">
      <Nav active={active} />

      {/* ESQUERDA: palco fixo com fundo que muda e janelas arrastáveis */}
      <div
        ref={stageRef}
        className="relative hidden h-screen overflow-hidden lg:sticky lg:top-0 lg:block"
      >
        <StageBackgrounds active={active} />

        <DraggableWindow
          title="sobre.md"
          constraints={stageRef}
          className="left-12 top-24"
        >
          <p>name: lahra</p>
          <p>into: jogos, pixel art</p>
          <p>stack: full stack</p>
        </DraggableWindow>

        <DraggableWindow
          title="skills.json"
          constraints={stageRef}
          className="left-40 top-72"
        >
          <pre>{`{
  "front": "React, Next",
  "back": "Laravel, Node",
  "extra": "Docker"
}`}</pre>
        </DraggableWindow>
      </div>

      {/* DIREITA: conteúdo que rola */}
      <main className="bg-arc-panel/40">
        <Section id="start" n="00" label="START">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-pixel text-3xl leading-snug text-arc-pink md:text-5xl"
          >
            LAHRA.DEV
          </motion.h1>
          <p className="font-terminal text-lg">Desenvolvedora Full Stack</p>
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="w-fit"
          >
            <Button
              onClick={() =>
                document
                  .getElementById("sobre")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              PRESS START
            </Button>
          </motion.div>
        </Section>

        <Section id="sobre" n="01" label="SOBRE">
          <Title>SOBRE MIM</Title>
          {about.map((p) => (
            <p key={p} className="max-w-prose leading-relaxed">
              {p}
            </p>
          ))}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="border-2 border-arc-yellow p-4">
                <p className="font-pixel text-2xl text-arc-yellow">{s.value}</p>
                <p className="mt-2 font-terminal text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="fases" n="02" label="FASES">
          <Title>FASES</Title>
          {phases.map((p) => (
            <article key={p.company} className={card}>
              <div className="flex flex-wrap items-center justify-between gap-2 font-terminal">
                <span className="text-arc-yellow">{p.level}</span>
                <span className="text-arc-text/60">{p.period}</span>
              </div>
              <h3 className="mt-2 font-pixel text-sm leading-relaxed text-arc-mint">
                {p.company}
              </h3>
              <p className="font-terminal text-arc-pink">{p.role}</p>
              <ul className="mt-3 space-y-1 text-sm">
                {p.points.map((t) => (
                  <li key={t}>▸ {t}</li>
                ))}
              </ul>
              {p.stack.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              )}
            </article>
          ))}
        </Section>

        <Section id="skills" n="03" label="SKILLS">
          <Title>INVENTÁRIO</Title>
          {skills.map((g) => (
            <div key={g.group}>
              <h3 className="mb-2 font-terminal text-arc-mint">
                &gt; {g.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <Tag key={i}>{i}</Tag>
                ))}
              </div>
            </div>
          ))}
        </Section>

        <Section id="projetos" n="04" label="PROJETOS">
          <Title>PROJETOS</Title>
          {projects.map((p) => (
            <article key={p.name} className={card}>
              <h3 className="font-pixel text-sm leading-relaxed text-arc-mint">
                {p.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          ))}
        </Section>

        <Section id="contato" n="05" label="CONTATO">
          <Title>INSERT COIN</Title>
          <p className="max-w-prose leading-relaxed">
            Quer conversar sobre um projeto ou uma oportunidade? Escreva aqui e
            abro nossa conversa no WhatsApp.
          </p>
          <ContactForm />
        </Section>
      </main>
    </div>
  );
}