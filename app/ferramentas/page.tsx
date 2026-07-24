"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ToolCard from "@/components/ToolCard";

const tools = [
  {
    title: "Comprimir PDF",
    description:
      "Reduza o tamanho dos seus arquivos PDF de forma rápida e simples.",
    icon: "📄",
    link: "/ferramentas/comprimir-pdf",
  },
  {
    title: "Converter Imagens",
    description:
      "Converta imagens entre formatos como PNG, JPG e WebP.",
    icon: "🖼️",
    link: "/ferramentas/converter-imagens",
  },
  {
    title: "Juntar PDF",
    description:
      "Una vários arquivos PDF em um único documento.",
    icon: "📚",
    link: "/ferramentas/juntar-pdf",
  },
  {
    title: "Separar PDF",
    description:
      "Extraia páginas específicas de um arquivo PDF.",
    icon: "✂️",
    link: "/ferramentas/separar-pdf",
  },
  {
    title: "Remover Fundo",
    description:
      "Remova o fundo das suas imagens e obtenha um PNG transparente.",
    icon: "🪄",
    link: "/ferramentas/remover-fundo",
  },
  {
    title: "PDF para Word",
    description:
      "Transforme seus arquivos PDF em documentos editáveis.",
    icon: "📝",
    link: "#",
  },
];

export default function FerramentasPage() {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter((tool) =>
    tool.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-b from-blue-50 via-white to-slate-50">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:py-24">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Todas as ferramentas
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Ferramentas para facilitar
            <span className="block text-blue-600">
              o seu dia a dia.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Encontre ferramentas simples e rápidas para trabalhar
            com seus PDFs, imagens e documentos.
          </p>

          {/* Busca */}
          <div className="mx-auto mt-9 max-w-2xl">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-5 flex items-center text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.05 6.05a7.5 7.5 0 0 0 10.6 10.6Z"
                  />
                </svg>
              </div>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Pesquisar ferramenta..."
                className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-13 pr-5 text-sm text-slate-900 shadow-lg shadow-blue-100/40 outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lista de ferramentas */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Explore
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Todas as ferramentas
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Escolha uma ferramenta para começar.
            </p>
          </div>

          <div className="text-sm text-slate-400">
            {filteredTools.length}{" "}
            {filteredTools.length === 1
              ? "ferramenta encontrada"
              : "ferramentas encontradas"}
          </div>
        </div>

        {/* Cards */}
        {filteredTools.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.title}
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                link={tool.link}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="text-5xl">🔎</div>

            <h3 className="mt-5 text-xl font-semibold text-slate-900">
              Nenhuma ferramenta encontrada
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Tente pesquisar por outro nome ou termo.
            </p>

            <button
              onClick={() => setSearch("")}
              className="mt-6 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-700 hover:shadow-md"
            >
              Ver todas as ferramentas
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="border-t border-blue-100 bg-blue-50">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Encontre a ferramenta que você precisa.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
            O Oclix está sempre evoluindo para oferecer ferramentas
            simples e úteis para suas tarefas do dia a dia.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}