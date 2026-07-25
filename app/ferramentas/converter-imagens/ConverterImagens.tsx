import type { Metadata } from "next";
import Link from "next/link";
import ConverterImagens from "./ConverterImagens";

export const metadata: Metadata = {
  title:
    "Converter Imagens Online Grátis | JPG, PNG e WebP | Oclix",
  description:
    "Converta imagens online grátis entre JPG, PNG e WebP. Transforme JPG em PNG, PNG em JPG ou WebP diretamente no navegador, sem instalar programas.",
  keywords: [
    "converter imagens",
    "converter imagens online",
    "converter imagem online",
    "converter imagem grátis",
    "converter jpg para png",
    "converter png para jpg",
    "converter jpg para webp",
    "converter png para webp",
    "converter webp para jpg",
    "converter webp para png",
    "transformar jpg em png",
    "transformar png em jpg",
    "mudar formato da imagem",
    "alterar formato da imagem",
    "converter formato de imagem",
  ],
  alternates: {
    canonical:
      "https://oclix.vercel.app/ferramentas/converter-imagens",
  },
  openGraph: {
    title:
      "Converter Imagens Online Grátis | JPG, PNG e WebP | Oclix",
    description:
      "Converta imagens entre JPG, PNG e WebP gratuitamente. Faça a conversão diretamente no navegador.",
    url:
      "https://oclix.vercel.app/ferramentas/converter-imagens",
    siteName: "Oclix",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title:
      "Converter Imagens Online Grátis | JPG, PNG e WebP | Oclix",
    description:
      "Converta JPG, PNG e WebP online gratuitamente com o Oclix.",
  },
};

const faqItems = [
  {
    question: "Como converter uma imagem para outro formato?",
    answer:
      "Para converter uma imagem, selecione seu arquivo JPG, PNG ou WebP, escolha o formato de saída desejado e clique em Converter imagem. Depois do processamento, você poderá baixar o novo arquivo.",
  },
  {
    question: "Como converter JPG para PNG?",
    answer:
      "Selecione sua imagem JPG na ferramenta Converter Imagens do Oclix, escolha PNG como formato de saída e clique em Converter imagem. Depois, baixe o arquivo PNG convertido.",
  },
  {
    question: "Como converter PNG para JPG?",
    answer:
      "Selecione o arquivo PNG que deseja converter, escolha JPG no formato de saída e inicie a conversão. O arquivo convertido poderá ser baixado após o processamento.",
  },
  {
    question: "Posso converter JPG para WebP?",
    answer:
      "Sim. A ferramenta permite selecionar uma imagem e escolher WebP como formato de saída.",
  },
  {
    question: "Posso converter PNG para WebP?",
    answer:
      "Sim. Selecione sua imagem PNG e escolha WebP como formato de saída para realizar a conversão.",
  },
  {
    question: "Posso converter WebP para JPG ou PNG?",
    answer:
      "Sim. Você pode selecionar uma imagem WebP e escolher JPG ou PNG como formato de saída.",
  },
  {
    question: "A ferramenta de conversão de imagens é gratuita?",
    answer:
      "Sim. O Oclix oferece a ferramenta de conversão de imagens gratuitamente para transformar imagens entre JPG, PNG e WebP.",
  },
  {
    question: "Preciso instalar algum programa para converter imagens?",
    answer:
      "Não. A ferramenta funciona diretamente no navegador. Basta acessar a página, selecionar sua imagem e escolher o formato de saída.",
  },
  {
    question: "Minha imagem é enviada para um servidor?",
    answer:
      "O processamento da imagem é realizado diretamente no navegador durante o uso da ferramenta, sem a necessidade de enviar o arquivo para um serviço externo.",
  },
  {
    question: "Posso converter imagens pelo celular?",
    answer:
      "Sim. A ferramenta pode ser acessada pelo navegador em celulares, tablets e computadores compatíveis.",
  },
];

export default function ConverterImagensPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Conversor de Imagens Online Oclix",
        url:
          "https://oclix.vercel.app/ferramentas/converter-imagens",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        description:
          "Ferramenta online gratuita para converter imagens entre JPG, PNG e WebP diretamente no navegador.",
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
            item: "https://oclix.vercel.app/",
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
            name: "Converter Imagens",
            item:
              "https://oclix.vercel.app/ferramentas/converter-imagens",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
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

            <span className="mx-2">/</span>

            <Link
              href="/ferramentas"
              className="transition hover:text-gray-900"
            >
              Ferramentas
            </Link>

            <span className="mx-2">/</span>

            <span className="text-gray-900">
              Converter Imagens
            </span>
          </nav>

          {/* Cabeçalho */}
          <header className="mx-auto mb-10 max-w-3xl text-center">
            <div
              className="mb-4 text-5xl"
              aria-hidden="true"
            >
              🖼️
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Converter Imagens Online Grátis
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Converta imagens entre JPG, PNG e WebP de forma rápida
              e gratuita. Transforme o formato das suas imagens
              diretamente no navegador, sem instalar programas.
            </p>
          </header>

          {/* Ferramenta */}
          <ConverterImagens />

          {/* Privacidade */}
          <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-gray-200 bg-white p-5 text-center">
            <p className="text-sm leading-6 text-gray-600">
              🔒{" "}
              <strong className="text-gray-900">
                Processamento direto no navegador.
              </strong>{" "}
              Sua imagem é processada localmente durante o uso da
              ferramenta, sem a necessidade de instalar programas.
            </p>
          </div>

          {/* Conteúdo SEO */}
          <article className="mx-auto mt-16 max-w-3xl space-y-12">
            {/* Como converter */}
            <section>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Como converter uma imagem online?
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Converter uma imagem para outro formato pode ser útil
                quando você precisa de um arquivo JPG, PNG ou WebP
                para um site, aplicativo, documento ou outro serviço.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Com o conversor de imagens online do Oclix, você pode
                selecionar uma imagem, escolher o formato desejado e
                baixar o arquivo convertido diretamente pelo navegador.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border bg-white p-5">
                  <h3 className="font-semibold text-gray-900">
                    1. Selecione sua imagem
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Escolha uma imagem do seu dispositivo para iniciar
                    a conversão.
                  </p>
                </div>

                <div className="rounded-xl border bg-white p-5">
                  <h3 className="font-semibold text-gray-900">
                    2. Escolha o formato de saída
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Escolha entre PNG, JPG ou WebP como formato final
                    da sua imagem.
                  </p>
                </div>

                <div className="rounded-xl border bg-white p-5">
                  <h3 className="font-semibold text-gray-900">
                    3. Converta sua imagem
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Clique em Converter imagem e aguarde o processamento.
                  </p>
                </div>

                <div className="rounded-xl border bg-white p-5">
                  <h3 className="font-semibold text-gray-900">
                    4. Baixe o arquivo convertido
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Após a conversão, clique no botão de download para
                    salvar a nova imagem no seu dispositivo.
                  </p>
                </div>
              </div>
            </section>

            {/* Formatos */}
            <section>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Converter JPG, PNG e WebP
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                JPG, PNG e WebP são formatos de imagem bastante
                utilizados na internet e em diferentes dispositivos.
                Cada formato possui características próprias e pode
                ser mais adequado dependendo da finalidade da imagem.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border bg-white p-5">
                  <h3 className="text-xl font-bold text-gray-900">
                    JPG
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Um formato muito utilizado para fotografias e
                    imagens que precisam de arquivos relativamente
                    menores.
                  </p>
                </div>

                <div className="rounded-xl border bg-white p-5">
                  <h3 className="text-xl font-bold text-gray-900">
                    PNG
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Um formato bastante utilizado quando é importante
                    preservar detalhes e transparência.
                  </p>
                </div>

                <div className="rounded-xl border bg-white p-5">
                  <h3 className="text-xl font-bold text-gray-900">
                    WebP
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Um formato moderno usado frequentemente em sites
                    e aplicações web.
                  </p>
                </div>
              </div>
            </section>

            {/* Conversões */}
            <section>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Conversões de imagens mais comuns
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                A ferramenta permite converter imagens entre os formatos
                disponíveis. Algumas das conversões mais procuradas
                incluem:
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border bg-white p-4 font-medium text-gray-900">
                  JPG para PNG
                </div>

                <div className="rounded-xl border bg-white p-4 font-medium text-gray-900">
                  PNG para JPG
                </div>

                <div className="rounded-xl border bg-white p-4 font-medium text-gray-900">
                  JPG para WebP
                </div>

                <div className="rounded-xl border bg-white p-4 font-medium text-gray-900">
                  PNG para WebP
                </div>

                <div className="rounded-xl border bg-white p-4 font-medium text-gray-900">
                  WebP para JPG
                </div>

                <div className="rounded-xl border bg-white p-4 font-medium text-gray-900">
                  WebP para PNG
                </div>
              </div>
            </section>

            {/* Benefícios */}
            <section>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Por que converter o formato de uma imagem?
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Diferentes plataformas e aplicações podem exigir
                formatos específicos de imagem. Converter um arquivo
                permite adaptar a imagem para diferentes necessidades.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border bg-white p-5">
                  <h3 className="font-semibold text-gray-900">
                    🌐 Para sites
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Converta imagens para formatos compatíveis com
                    diferentes projetos e páginas da internet.
                  </p>
                </div>

                <div className="rounded-xl border bg-white p-5">
                  <h3 className="font-semibold text-gray-900">
                    📱 Para diferentes dispositivos
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Tenha uma versão da imagem em um formato adequado
                    para diferentes situações.
                  </p>
                </div>

                <div className="rounded-xl border bg-white p-5">
                  <h3 className="font-semibold text-gray-900">
                    📄 Para documentos
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Converta imagens para facilitar o uso em documentos
                    e outros arquivos.
                  </p>
                </div>

                <div className="rounded-xl border bg-white p-5">
                  <h3 className="font-semibold text-gray-900">
                    ⚡ Conversão rápida
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Selecione a imagem, escolha o formato e faça o
                    download do resultado.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Perguntas frequentes sobre conversão de imagens
              </h2>

              <div className="mt-6 space-y-4">
                {faqItems.map((item) => (
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
                ))}
              </div>
            </section>

            {/* Outras ferramentas */}
            <section>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Outras ferramentas online do Oclix
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Explore outras ferramentas gratuitas para trabalhar
                com seus arquivos diretamente pelo navegador.
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
                  href="/ferramentas/juntar-pdf"
                  className="rounded-xl border bg-white p-5 transition hover:border-gray-900 hover:shadow-sm"
                >
                  <h3 className="font-semibold text-gray-900">
                    Juntar PDF
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Una vários arquivos PDF em um único documento.
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
                    Separe páginas e divida seus documentos PDF.
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