"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ToolCard from "@/components/ToolCard";

const tools = [
  {
    title: "Comprimir PDF",
    description:
      "Reduza o tamanho dos seus arquivos PDF rapidamente e facilite o compartilhamento.",
    icon: "📄",
    link: "/ferramentas/comprimir-pdf",
  },

  {
    title: "Converter Imagens",
    description:
      "Converta imagens entre formatos como PNG, JPG e WebP de forma simples e rápida.",
    icon: "🖼️",
    link: "/ferramentas/converter-imagens",
  },

  {
    title: "Juntar PDF",
    description:
      "Una vários arquivos PDF em um único documento de forma rápida e prática.",
    icon: "📚",
    link: "/ferramentas/juntar-pdf",
  },

  {
    title: "Separar PDF",
    description:
      "Extraia páginas específicas de um arquivo PDF e crie um novo documento.",
    icon: "✂️",
    link: "/ferramentas/separar-pdf",
  },

  {
    title: "Remover Fundo",
    description:
      "Remova automaticamente o fundo de imagens e obtenha um PNG com transparência.",
    icon: "🪄",
    link: "/ferramentas/remover-fundo",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter((tool) => {
    const searchText = search.toLowerCase();

    return (
      tool.title.toLowerCase().includes(searchText) ||
      tool.description.toLowerCase().includes(searchText)
    );
  });

  return (
    <main className="min-h-screen bg-slate-50">

      <Header />

      {/* Hero principal */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-b from-blue-50 via-white to-slate-50">

        {/* Elementos decorativos */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:py-28">

          {/* Badge */}
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Ferramentas online grátis
          </div>

          {/* Título principal */}
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Ferramentas online
            <span className="block text-blue-600">
              simples, rápidas e gratuitas.
            </span>
          </h1>

          {/* Descrição SEO */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            No Oclix você encontra ferramentas online gratuitas para
            trabalhar com arquivos PDF e imagens. Comprima, junte e
            separe PDFs, converta imagens e remova fundos de fotos
            de forma simples e rápida.
          </p>

          {/* Busca */}
          <div className="mx-auto mt-10 max-w-2xl">
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
                placeholder="Pesquisar uma ferramenta..."
                aria-label="Pesquisar ferramentas"
                className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-13 pr-5 text-sm text-slate-900 shadow-lg shadow-blue-100/40 outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
              />

            </div>
          </div>

          {/* CTA */}
          <div className="mt-7">
            <Link
              href="/ferramentas"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition duration-200 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200"
            >
              Explorar todas as ferramentas
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Ferramentas */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-24">

        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Ferramentas online grátis
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Ferramentas populares
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Escolha uma ferramenta online e resolva sua tarefa
              com arquivos PDF e imagens de forma rápida,
              simples e gratuita.
            </p>

          </div>

          <Link
            href="/ferramentas"
            className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            Ver todas →
          </Link>

        </div>

        {/* Cards */}
        {filteredTools.length > 0 ? (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

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

          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">

            <div className="text-4xl">
              🔎
            </div>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Nenhuma ferramenta encontrada
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Tente pesquisar por outro nome ou termo.
            </p>

          </div>

        )}

      </section>

      {/* SEO - Sobre o Oclix */}
      <section className="border-y border-slate-200 bg-slate-50">

        <div className="mx-auto max-w-5xl px-5 py-20">

          <div className="mx-auto max-w-3xl">

            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Ferramentas online para PDF e imagens
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">

              <p>
                O Oclix reúne ferramentas online gratuitas para
                facilitar tarefas comuns com documentos, arquivos
                PDF e imagens. Você pode utilizar as ferramentas
                diretamente pelo navegador, sem precisar instalar
                programas no computador.
              </p>

              <p>
                Precisa reduzir o tamanho de um documento?
                Use nossa ferramenta para{" "}
                <Link
                  href="/ferramentas/comprimir-pdf"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  comprimir PDF online
                </Link>
                . Quer organizar vários documentos?
                Você pode{" "}
                <Link
                  href="/ferramentas/juntar-pdf"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  juntar arquivos PDF
                </Link>{" "}
                em um único documento ou{" "}
                <Link
                  href="/ferramentas/separar-pdf"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  separar páginas de um PDF
                </Link>
                .
              </p>

              <p>
                Para trabalhar com imagens, o Oclix também oferece
                ferramentas para{" "}
                <Link
                  href="/ferramentas/converter-imagens"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  converter imagens entre JPG, PNG e WebP
                </Link>{" "}
                e{" "}
                <Link
                  href="/ferramentas/remover-fundo"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  remover o fundo de imagens
                </Link>{" "}
                diretamente no navegador.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Benefícios */}
      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-20">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Por que usar o Oclix?
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Tudo mais simples.
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Ferramentas pensadas para tornar suas tarefas
              do dia a dia mais rápidas e práticas.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Benefício 1 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
                ⚡
              </div>

              <h3 className="mt-5 font-semibold text-slate-900">
                Rápido e simples
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Faça o que precisa sem passar por processos
                complicados ou instalações desnecessárias.
              </p>

            </div>

            {/* Benefício 2 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
                🛠️
              </div>

              <h3 className="mt-5 font-semibold text-slate-900">
                Ferramentas úteis
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Encontre ferramentas práticas para arquivos PDF,
                documentos e imagens em um só lugar.
              </p>

            </div>

            {/* Benefício 3 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
                🔒
              </div>

              <h3 className="mt-5 font-semibold text-slate-900">
                Processamento no navegador
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Sempre que possível, seus arquivos são processados
                diretamente no navegador do seu dispositivo.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA final */}
      <section className="bg-blue-600">

        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:py-20">

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Qual ferramenta você precisa hoje?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
            Comprima, junte ou separe PDFs, converta imagens
            ou remova fundos de fotos.
          </p>

          <Link
            href="/ferramentas"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-lg transition duration-200 hover:bg-blue-50"
          >
            Explorar ferramentas
            <span>→</span>
          </Link>

        </div>

      </section>

      <Footer />

    </main>
  );
}