"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/8bit/button";
import { whatsapp } from "@/lib/data";

const field =
  "w-full border-2 border-arc-mint bg-arc-bg p-3 font-terminal text-arc-text placeholder:text-arc-text/40 focus:border-arc-pink focus:outline-none";

export function ContactForm() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const texto = `Olá! Sou ${nome || "visitante do seu portfólio"}. ${mensagem}`;
    window.open(
      `https://wa.me/${whatsapp}?text=${encodeURIComponent(texto)}`,
      "_blank",
    );
  }

  return (
    <form onSubmit={enviar} className="flex max-w-md flex-col gap-4">
      <input
        className={field}
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <textarea
        className={`${field} h-32 resize-none`}
        placeholder="Sobre o que quer conversar?"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />
      <Button type="submit">CHAMAR NO WHATSAPP</Button>
    </form>
  );
}