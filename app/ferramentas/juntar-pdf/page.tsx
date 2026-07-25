import type { Metadata } from "next";
import Link from "next/link";
import JuntarPdf from "./JuntarPdf";

export const metadata: Metadata = {
  title:
    "Juntar PDF Online Grátis | Unir e Mesclar PDFs | Oclix",

  description:
    "Junte, una e mescle vários arquivos PDF em um único documento online e grátis. Organize a ordem dos arquivos e baixe seu PDF combinado diretamente pelo navegador.",

  keywords: [
    "juntar pdf",
    "juntar pdf online",
    "juntar pdf grátis",
    "unir pdf",
    "unir pdf online",
    "unir pdf grátis",
    "mesclar pdf",
    "mesclar pdf online",
    "combinar pdf",
    "combinar pdf online",
    "juntar vários pdf",
    "juntar arquivos pdf",
    "unir vários arquivos pdf",
    "juntar documentos pdf",
    "como juntar pdf",
    "como unir pdf",
  ],

  alternates: {
    canonical:
      "https://oclix.vercel.app/ferramentas/juntar-pdf",
  },

  openGraph: {
    title:
      "Juntar PDF Online Grátis | Unir e Mesclar PDFs | Oclix",

    description:
      "Una vários arquivos PDF em um único documento gratuitamente. Organize os arquivos e baixe seu PDF combinado.",

    url:
      "https://oclix.vercel.app/ferramentas/juntar-pdf",

    siteName: "Oclix",

    locale: "pt_BR",

    type: "website",
  },

  twitter: {
    card: "summary",

    title:
      "Juntar PDF Online Grátis | Oclix",

    description:
      "Junte vários arquivos PDF em um único documento online e gratuitamente.",
  },
};

const faqItems = [
  {
    question:
      "Como juntar vários arquivos PDF em um só?",
    answer:
      "Selecione os arquivos PDF que deseja unir, organize a ordem dos documentos arrastando os arquivos na lista e clique em Juntar PDFs. Depois do processamento, você poderá baixar o novo documento PDF.",
  },

  {
    question:
      "Como unir dois PDFs?",
    answer:
      "Selecione os dois arquivos PDF na ferramenta Juntar PDF, confirme a ordem dos documentos e clique em Juntar PDFs. O resultado será um único arquivo PDF contendo as páginas dos dois documentos.",
  },

  {
    question:
      "Posso juntar mais de dois arquivos PDF?",
    answer:
      "Sim. Você pode selecionar vários arquivos PDF e combiná-los em um único documento.",
  },

  {
    question:
      "Posso alterar a ordem dos PDFs antes de juntar?",
    answer:
      "Sim. Depois de selecionar os arquivos, você pode arrastar os documentos para alterar a ordem em que eles aparecerão no PDF final.",
  },

  {
    question:
      "A ferramenta para juntar PDF é gratuita?",
    answer:
      "Sim. O Oclix oferece a ferramenta para juntar e unir arquivos PDF gratuitamente.",
  },

  {
    question:
      "Preciso instalar algum programa para juntar PDFs?",
    answer:
      "Não. A ferramenta funciona diretamente no navegador. Basta selecionar seus arquivos PDF, organizar a ordem e iniciar a combinação.",
  },

  {
    question:
      "Meus arquivos PDF são enviados para um servidor?",
    answer:
      "O processamento dos arquivos é realizado diretamente no navegador durante o uso da ferramenta, sem a necessidade de enviar os documentos para um serviço externo.",
  },

  {
    question:
      "Posso juntar PDFs pelo celular?",
    answer:
      "Sim. Você pode acessar a ferramenta pelo navegador do celular ou tablet e selecionar os arquivos PDF disponíveis no dispositivo.",
  },

  {
    question:
      "Posso juntar PDFs sem perder a ordem das páginas?",
    answer:
      "Sim. A ferramenta permite organizar a ordem dos arquivos antes da combinação. O PDF final seguirá a sequência escolhida.",
  },

  {
    question:
      "O que significa mesclar PDF?",
    answer:
      "Mesclar PDF significa combinar dois ou mais documentos PDF em um único arquivo. Também é conhecido como juntar, unir ou combinar PDFs.",
  },
];

export default function JuntarPdfPage() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "WebApplication",

        name: "Juntar PDF Online Oclix",

        url:
          "https://oclix.vercel.app/ferramentas/juntar-pdf",

        applicationCategory:
          "UtilitiesApplication",

        operatingSystem: "Any",

        description:
          "Ferramenta online gratuita para juntar, unir e combinar vários arquivos PDF em um único documento.",

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

            name: "Juntar PDF",

            item:
              "https://oclix.vercel.app/ferramentas/juntar-pdf",
          },
        ],
      },

      {
        "@type": "FAQPage",

        mainEntity: faqItems.map(
          (item) => ({
            "@type": "Question",

            name: item.question,

            acceptedAnswer: {
              "@type": "Answer",

              text: item.answer,
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

      <main className="min-h-screen bg-gray-50">

        <section className="mx-auto max-w-5xl px-6 py-10 sm:py-16">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 text-sm text-gray-500"
          >
            <Link
              href="/"
              className="transition hover:text-gray-900"
            >
              Início
            </Link>

            <span className="mx-2">
              /
            </span>

            <Link
              href="/ferramentas"
              className="transition hover:text-gray-900"
            >
              Ferramentas
            </Link>

            <span className="mx-2">
              /
            </span>

            <span className="text-gray-900">
              Juntar PDF
            </span>
          </nav>

          {/* Cabeçalho */}
          <header className="mx-auto mb-10 max-w-3xl text-center">

            <div
              className="mb-4 text-5xl"
              aria-hidden="true"
            >
              📚
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Juntar PDF Online Grátis
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Una vários arquivos PDF em um único documento de forma rápida e gratuita. Organize a ordem dos arquivos e baixe o PDF combinado diretamente pelo navegador.
            </p>

          </header>

          {/* Ferramenta */}
          <JuntarPdf />

          {/* Privacidade */}
          <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-gray-200 bg-white p-5 text-center">

            <p className="text-sm leading-6 text-gray-600">
              🔒{" "}
              <strong className="text-gray-900">
                Processamento direto no navegador.
              </strong>{" "}
              Seus arquivos são processados localmente durante o uso da ferramenta.
            </p>

          </div>

          {/* Conteúdo SEO */}
          <article className="mx-auto mt-16 max-w-3xl space-y-12">

            {/* Como juntar */}
            <section>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Como juntar arquivos PDF online?
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Juntar arquivos PDF é útil quando você precisa transformar vários documentos separados em um único arquivo. Isso pode facilitar o envio, armazenamento e organização de documentos.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Com o Juntar PDF do Oclix, você pode selecionar vários arquivos, organizar a sequência desejada e combinar os documentos em um único PDF.
              </p>

              <div className="mt-6 space-y-4">

                <div className="rounded-xl border bg-white p-5">

                  <h3 className="font-semibold text-gray-900">
                    1. Selecione seus arquivos PDF
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Escolha dois ou mais documentos PDF que deseja combinar.
                  </p>

                </div>

                <div className="rounded-xl border bg-white p-5">

                  <h3 className="font-semibold text-gray-900">
                    2. Organize a ordem dos arquivos
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Arraste os documentos para definir a ordem em que eles aparecerão no arquivo final.
                  </p>

                </div>

                <div className="rounded-xl border bg-white p-5">

                  <h3 className="font-semibold text-gray-900">
                    3. Junte os PDFs
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Clique em Juntar PDFs para combinar os documentos em um único arquivo.
                  </p>

                </div>

                <div className="rounded-xl border bg-white p-5">

                  <h3 className="font-semibold text-gray-900">
                    4. Baixe o PDF final
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Após o processamento, clique no botão de download para salvar o documento combinado.
                  </p>

                </div>

              </div>

            </section>

            {/* Sinônimos */}
            <section>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Juntar, unir ou mesclar PDF
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Você pode encontrar diferentes termos para a mesma tarefa. Juntar PDF, unir PDF, mesclar PDF e combinar PDF são expressões utilizadas para descrever o processo de transformar vários documentos PDF em um único arquivo.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                <div className="rounded-xl border bg-white p-5">

                  <h3 className="font-semibold text-gray-900">
                    Juntar PDF
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Combine vários arquivos em um único documento.
                  </p>

                </div>

                <div className="rounded-xl border bg-white p-5">

                  <h3 className="font-semibold text-gray-900">
                    Unir PDF
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Una documentos PDF em uma sequência organizada.
                  </p>

                </div>

                <div className="rounded-xl border bg-white p-5">

                  <h3 className="font-semibold text-gray-900">
                    Mesclar PDF
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Mescle vários documentos para criar um único arquivo.
                  </p>

                </div>

                <div className="rounded-xl border bg-white p-5">

                  <h3 className="font-semibold text-gray-900">
                    Combinar PDF
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Combine arquivos PDF de maneira simples e rápida.
                  </p>

                </div>

              </div>

            </section>

            {/* Casos de uso */}
            <section>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Quando juntar arquivos PDF pode ser útil?
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Combinar documentos pode facilitar diversas tarefas do dia a dia, tanto para uso pessoal quanto profissional.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                <div className="rounded-xl border bg-white p-5">

                  <h3 className="font-semibold text-gray-900">
                    📄 Documentos
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Reúna documentos relacionados em um único arquivo PDF.
                  </p>

                </div>

                <div className="rounded-xl border bg-white p-5">

                  <h3 className="font-semibold text-gray-900">
                    📚 Trabalhos
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Combine diferentes partes de um trabalho ou projeto em um documento.
                  </p>

                </div>

                <div className="rounded-xl border bg-white p-5">

                  <h3 className="font-semibold text-gray-900">
                    💼 Trabalho
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Organize relatórios, documentos e arquivos relacionados em um único PDF.
                  </p>

                </div>

                <div className="rounded-xl border bg-white p-5">

                  <h3 className="font-semibold text-gray-900">
                    📤 Envio de arquivos
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Reduza a quantidade de arquivos separados ao enviar documentos para outras pessoas.
                  </p>

                </div>

              </div>

            </section>

            {/* Organização */}
            <section>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Organize a ordem dos seus PDFs
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                A ordem dos documentos pode ser importante para manter a estrutura correta do arquivo final. Por isso, antes de juntar os PDFs, organize os arquivos na sequência desejada.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Na ferramenta do Oclix, você pode arrastar os arquivos selecionados e reorganizar a sequência antes de iniciar a combinação.
              </p>

            </section>

            {/* FAQ */}
            <section>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Perguntas frequentes sobre juntar PDF
              </h2>

              <div className="mt-6 space-y-4">

                {faqItems.map(
                  (item) => (
                    <details
                      key={item.question}
                      className="group rounded-xl border bg-white p-5"
                    >

                      <summary className="cursor-pointer list-none font-semibold text-gray-900">

                        <span className="flex items-center justify-between gap-4">

                          {item.question}

                          <span
                            className="text-gray-400 transition group-open:rotate-45"
                            aria-hidden="true"
                          >
                            +
                          </span>

                        </span>

                      </summary>

                      <p className="mt-4 leading-7 text-gray-600">
                        {item.answer}
                      </p>

                    </details>
                  )
                )}

              </div>

            </section>

            {/* Outras ferramentas */}
            <section>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Outras ferramentas online do Oclix
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Continue explorando as ferramentas gratuitas do Oclix para trabalhar com documentos e arquivos diretamente pelo navegador.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                <Link
                  href="/ferramentas/comprimir-pdf"
                  className="rounded-xl border bg-white p-5 transition hover:border-gray-900 hover:shadow-sm"
                >
                  <h3 className="font-semibold text-gray-900">
                    Comprimir PDF
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Reduza o tamanho dos seus arquivos PDF.
                  </p>

                </Link>

                <Link
                  href="/ferramentas/separar-pdf"
                  className="rounded-xl border bg-white p-5 transition hover:border-gray-900 hover:shadow-sm"
                >
                  <h3 className="font-semibold text-gray-900">
                    Separar PDF
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Separe páginas e divida documentos PDF.
                  </p>

                </Link>

                <Link
                  href="/ferramentas/converter-imagens"
                  className="rounded-xl border bg-white p-5 transition hover:border-gray-900 hover:shadow-sm"
                >
                  <h3 className="font-semibold text-gray-900">
                    Converter Imagens
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Converta imagens entre JPG, PNG e WebP.
                  </p>

                </Link>

                <Link
                  href="/ferramentas"
                  className="rounded-xl border bg-white p-5 transition hover:border-gray-900 hover:shadow-sm"
                >
                  <h3 className="font-semibold text-gray-900">
                    Ver todas as ferramentas
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Explore todas as ferramentas disponíveis no Oclix.
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