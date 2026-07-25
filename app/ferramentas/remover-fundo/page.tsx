import type { Metadata } from "next";
import Link from "next/link";
import RemoverFundo from "./RemoverFundo";

export const metadata: Metadata = {
  title:
    "Remover Fundo de Imagem Online Grátis | PNG Transparente | Oclix",

  description:
    "Remova o fundo de imagens online e grátis com inteligência artificial. Crie imagens PNG com fundo transparente diretamente no navegador, sem instalar programas.",

  keywords: [
    "remover fundo",
    "remover fundo de imagem",
    "remover fundo de imagem online",
    "remover fundo grátis",
    "tirar fundo da imagem",
    "tirar fundo de foto",
    "tirar fundo de imagem",
    "remover background",
    "remover background de imagem",
    "remover fundo png",
    "imagem com fundo transparente",
    "criar png transparente",
    "fundo transparente",
    "remover fundo online grátis",
    "como remover fundo de imagem",
    "como tirar fundo de imagem",
    "apagar fundo de imagem",
    "recortar imagem online",
    "recortar fundo de foto",
  ],

  alternates: {
    canonical:
      "https://oclix.vercel.app/ferramentas/remover-fundo",
  },

  openGraph: {
    title:
      "Remover Fundo de Imagem Online Grátis | Oclix",

    description:
      "Remova o fundo de imagens automaticamente e crie PNGs com fundo transparente diretamente pelo navegador.",

    url:
      "https://oclix.vercel.app/ferramentas/remover-fundo",

    siteName: "Oclix",

    locale: "pt_BR",

    type: "website",
  },

  twitter: {
    card: "summary",

    title:
      "Remover Fundo de Imagem Online Grátis | Oclix",

    description:
      "Remova o fundo de suas imagens gratuitamente e crie PNGs com fundo transparente.",
  },
};

const faqItems = [
  {
    question:
      "Como remover o fundo de uma imagem?",
    answer:
      "Selecione uma imagem JPG, PNG ou WebP na ferramenta Remover Fundo do Oclix e clique em Remover fundo. A ferramenta processará a imagem automaticamente e permitirá baixar o resultado em PNG com fundo transparente.",
  },

  {
    question:
      "Como tirar o fundo de uma foto online?",
    answer:
      "Você pode tirar o fundo de uma foto diretamente pelo navegador. Selecione sua imagem na ferramenta do Oclix, aguarde o processamento automático e baixe a imagem resultante.",
  },

  {
    question:
      "É possível remover o fundo de uma imagem grátis?",
    answer:
      "Sim. A ferramenta Remover Fundo do Oclix pode ser utilizada gratuitamente para processar imagens diretamente no navegador.",
  },

  {
    question:
      "A imagem fica com fundo transparente?",
    answer:
      "Sim. O resultado é disponibilizado em formato PNG, preservando a transparência do fundo removido.",
  },

  {
    question:
      "Quais formatos de imagem são aceitos?",
    answer:
      "A ferramenta aceita imagens nos formatos JPG, PNG e WebP.",
  },

  {
    question:
      "Preciso instalar um programa para remover o fundo?",
    answer:
      "Não. A ferramenta funciona diretamente no navegador e não exige a instalação de um programa adicional.",
  },

  {
    question:
      "Minha imagem é enviada para um servidor?",
    answer:
      "O processamento é realizado diretamente no navegador durante o uso da ferramenta. O arquivo não precisa ser enviado para um servidor externo para realizar a remoção do fundo.",
  },

  {
    question:
      "Posso remover o fundo de uma foto pelo celular?",
    answer:
      "Sim. Você pode acessar a ferramenta pelo navegador do celular ou tablet e selecionar uma imagem armazenada no dispositivo.",
  },

  {
    question:
      "Como criar uma imagem PNG transparente?",
    answer:
      "Selecione uma imagem na ferramenta Remover Fundo, processe o arquivo e baixe o resultado em PNG. O fundo removido será transparente.",
  },

  {
    question:
      "Posso remover o fundo de uma imagem de produto?",
    answer:
      "Sim. A ferramenta pode ser utilizada para remover o fundo de fotos de produtos, objetos e outros tipos de imagens.",
  },
];

export default function RemoverFundoPage() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "WebApplication",

        name:
          "Remover Fundo de Imagem Online Oclix",

        url:
          "https://oclix.vercel.app/ferramentas/remover-fundo",

        applicationCategory:
          "PhotoApplication",

        operatingSystem: "Any",

        description:
          "Ferramenta online gratuita para remover o fundo de imagens e criar PNGs com fundo transparente.",

        offers: {
          "@type": "Offer",

          price: "0",

          priceCurrency: "BRL",
        },
      },

      {
        "@type": "BreadcrumbList",

        itemListElement: [
          {
            "@type": "ListItem",

            position: 1,

            name: "Início",

            item:
              "https://oclix.vercel.app/",
          },

          {
            "@type": "ListItem",

            position: 2,

            name: "Ferramentas",

            item:
              "https://oclix.vercel.app/ferramentas",
          },

          {
            "@type": "ListItem",

            position: 3,

            name: "Remover Fundo",

            item:
              "https://oclix.vercel.app/ferramentas/remover-fundo",
          },
        ],
      },

      {
        "@type": "FAQPage",

        mainEntity:
          faqItems.map(
            (item) => ({
              "@type": "Question",

              name:
                item.question,

              acceptedAnswer: {
                "@type": "Answer",

                text:
                  item.answer,
              },
            })
          ),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(jsonLd),
        }}
      />

      <main className="min-h-screen bg-slate-50">

        {/* Ferramenta */}
        <RemoverFundo />

        {/* Conteúdo SEO */}
        <section className="mx-auto max-w-4xl px-5 pb-16 sm:pb-20">

          {/* Introdução */}
          <article className="mx-auto max-w-3xl space-y-12">

            <section>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Remover fundo de imagem online
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Remover o fundo de uma imagem pode ser útil para criar fotos de produtos, imagens para redes sociais, materiais de divulgação, apresentações e diversos outros projetos.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Com a ferramenta Remover Fundo do Oclix, você pode processar uma imagem diretamente pelo navegador e obter um arquivo PNG com fundo transparente.
              </p>

            </section>

            {/* Como usar */}
            <section>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Como remover o fundo de uma imagem?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                O processo é simples e pode ser realizado em poucos passos.
              </p>

              <div className="mt-6 space-y-4">

                <div className="rounded-2xl border border-slate-200 bg-white p-5">

                  <h3 className="font-semibold text-slate-900">
                    1. Selecione sua imagem
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Escolha uma imagem JPG, PNG ou WebP armazenada no seu dispositivo.
                  </p>

                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">

                  <h3 className="font-semibold text-slate-900">
                    2. Aguarde o processamento
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    A ferramenta analisará a imagem e tentará identificar automaticamente o objeto ou pessoa em primeiro plano.
                  </p>

                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">

                  <h3 className="font-semibold text-slate-900">
                    3. Confira o resultado
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Compare a imagem original com o resultado após a remoção do fundo.
                  </p>

                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">

                  <h3 className="font-semibold text-slate-900">
                    4. Baixe o PNG transparente
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Quando estiver satisfeito com o resultado, baixe a imagem processada em formato PNG.
                  </p>

                </div>

              </div>

            </section>

            {/* Termos relacionados */}
            <section>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Tirar fundo, remover background ou criar PNG transparente
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Existem diferentes formas de procurar por essa tarefa na internet. Termos como remover fundo, tirar fundo da imagem, remover background, apagar fundo e criar PNG transparente são usados para descrever processos semelhantes.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-slate-200 bg-white p-5">

                  <h3 className="font-semibold text-slate-900">
                    Remover fundo
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Retire automaticamente o fundo de uma imagem.
                  </p>

                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">

                  <h3 className="font-semibold text-slate-900">
                    Tirar fundo da foto
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Remova o cenário ou fundo de uma fotografia.
                  </p>

                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">

                  <h3 className="font-semibold text-slate-900">
                    Remover background
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Crie uma imagem destacando o objeto principal.
                  </p>

                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">

                  <h3 className="font-semibold text-slate-900">
                    PNG transparente
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Gere uma imagem sem o fundo original.
                  </p>

                </div>

              </div>

            </section>

            {/* Casos de uso */}
            <section>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Para que serve remover o fundo de uma imagem?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Uma imagem com fundo transparente pode ser utilizada em diversas situações.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-slate-200 bg-white p-5">

                  <h3 className="font-semibold text-slate-900">
                    🛍️ Fotos de produtos
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Destaque produtos para lojas virtuais, catálogos e anúncios.
                  </p>

                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">

                  <h3 className="font-semibold text-slate-900">
                    📱 Redes sociais
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Crie imagens para posts, stories e materiais digitais.
                  </p>

                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">

                  <h3 className="font-semibold text-slate-900">
                    🎨 Design
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Use objetos e pessoas recortados em diferentes projetos gráficos.
                  </p>

                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">

                  <h3 className="font-semibold text-slate-900">
                    📊 Apresentações
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Adicione imagens sem fundo em apresentações e documentos.
                  </p>

                </div>

              </div>

            </section>

            {/* Privacidade */}
            <section>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Remoção de fundo diretamente no navegador
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                O processamento da imagem acontece diretamente no navegador durante o uso da ferramenta. Isso permite utilizar a ferramenta sem precisar instalar um programa específico para remover o fundo da imagem.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Depois do processamento, você pode baixar o resultado em PNG e utilizar a imagem em seus projetos.
              </p>

            </section>

            {/* FAQ */}
            <section>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Perguntas frequentes sobre remover fundo
              </h2>

              <div className="mt-6 space-y-4">

                {faqItems.map(
                  (item) => (
                    <details
                      key={
                        item.question
                      }
                      className="group rounded-2xl border border-slate-200 bg-white p-5"
                    >

                      <summary className="cursor-pointer list-none font-semibold text-slate-900">

                        <span className="flex items-center justify-between gap-4">

                          {
                            item.question
                          }

                          <span
                            className="text-slate-400 transition group-open:rotate-45"
                            aria-hidden="true"
                          >
                            +
                          </span>

                        </span>

                      </summary>

                      <p className="mt-4 leading-7 text-slate-600">
                        {
                          item.answer
                        }
                      </p>

                    </details>
                  )
                )}

              </div>

            </section>

            {/* Outras ferramentas */}
            <section>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Outras ferramentas online do Oclix
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Explore outras ferramentas gratuitas do Oclix para trabalhar com imagens e documentos diretamente pelo navegador.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                <Link
                  href="/ferramentas/converter-imagens"
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-900 hover:shadow-sm"
                >

                  <h3 className="font-semibold text-slate-900">
                    Converter Imagens
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Converta imagens entre JPG, PNG e WebP.
                  </p>

                </Link>

                <Link
                  href="/ferramentas/comprimir-pdf"
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-900 hover:shadow-sm"
                >

                  <h3 className="font-semibold text-slate-900">
                    Comprimir PDF
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Reduza o tamanho dos seus arquivos PDF.
                  </p>

                </Link>

                <Link
                  href="/ferramentas/juntar-pdf"
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-900 hover:shadow-sm"
                >

                  <h3 className="font-semibold text-slate-900">
                    Juntar PDF
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Una vários arquivos PDF em um único documento.
                  </p>

                </Link>

                <Link
                  href="/ferramentas/separar-pdf"
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-900 hover:shadow-sm"
                >

                  <h3 className="font-semibold text-slate-900">
                    Separar PDF
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Divida documentos PDF e extraia páginas.
                  </p>

                </Link>

              </div>

            </section>

          </article>

        </section>

      </main>
    </>
  );
}