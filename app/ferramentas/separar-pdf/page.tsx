"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PDFDocument } from "pdf-lib";

export default function SepararPdfPage() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);

  const [selectedPages, setSelectedPages] = useState("");

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [message, setMessage] = useState("");

  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (downloadUrl) {
        URL.revokeObjectURL(downloadUrl);
      }
    };
  }, [downloadUrl]);

  async function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    if (selectedFile.type !== "application/pdf") {
      setMessage(
        "Por favor, selecione um arquivo PDF válido."
      );

      return;
    }

    try {
      setMessage("");
      setDownloadUrl(null);
      setProgress(0);
      setSelectedPages("");

      const arrayBuffer =
        await selectedFile.arrayBuffer();

      const pdfDoc =
        await PDFDocument.load(arrayBuffer);

      const totalPages =
        pdfDoc.getPageCount();

      setFile(selectedFile);
      setPageCount(totalPages);

    } catch (error) {
      console.error(error);

      setMessage(
        "Não foi possível ler o PDF. Verifique se o arquivo é válido."
      );

      setFile(null);
      setPageCount(null);
    }

    // Permite selecionar o mesmo arquivo novamente
    event.target.value = "";
  }

  function clearFile() {
    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
    }

    setFile(null);
    setPageCount(null);
    setSelectedPages("");

    setLoading(false);
    setProgress(0);

    setMessage("");
    setDownloadUrl(null);
  }

  function parsePages(
    input: string,
    totalPages: number
  ): number[] {
    const pages = new Set<number>();

    const parts = input
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean);

    for (const part of parts) {

      // Intervalo de páginas
      // Exemplo: 1-5
      if (part.includes("-")) {

        const [startText, endText] =
          part
            .split("-")
            .map((value) => value.trim());

        const start = Number(startText);
        const end = Number(endText);

        if (
          !Number.isInteger(start) ||
          !Number.isInteger(end) ||
          start < 1 ||
          end > totalPages ||
          start > end
        ) {
          throw new Error(
            "Intervalo de páginas inválido."
          );
        }

        for (
          let page = start;
          page <= end;
          page++
        ) {
          pages.add(page);
        }

      } else {

        // Página individual
        // Exemplo: 3
        const page = Number(part);

        if (
          !Number.isInteger(page) ||
          page < 1 ||
          page > totalPages
        ) {
          throw new Error(
            "Número de página inválido."
          );
        }

        pages.add(page);
      }
    }

    return Array.from(pages).sort(
      (a, b) => a - b
    );
  }

  async function separatePdf() {
    if (
      !file ||
      pageCount === null
    ) {
      setMessage(
        "Selecione um arquivo PDF primeiro."
      );

      return;
    }

    if (!selectedPages.trim()) {
      setMessage(
        "Informe quais páginas deseja separar."
      );

      return;
    }

    try {
      setLoading(true);
      setMessage("");
      setDownloadUrl(null);
      setProgress(0);

      // Etapa 1
      setProgress(10);

      const pagesToExtract =
        parsePages(
          selectedPages,
          pageCount
        );

      if (
        pagesToExtract.length === 0
      ) {
        setMessage(
          "Selecione pelo menos uma página."
        );

        setLoading(false);
        setProgress(0);

        return;
      }

      // Etapa 2
      setProgress(30);

      const arrayBuffer =
        await file.arrayBuffer();

      const originalPdf =
        await PDFDocument.load(
          arrayBuffer
        );

      // Etapa 3
      setProgress(50);

      const newPdf =
        await PDFDocument.create();

      const pageIndexes =
        pagesToExtract.map(
          (pageNumber) =>
            pageNumber - 1
        );

      // Etapa 4
      setProgress(70);

      const copiedPages =
        await newPdf.copyPages(
          originalPdf,
          pageIndexes
        );

      copiedPages.forEach(
        (page) => {
          newPdf.addPage(page);
        }
      );

      // Etapa 5
      setProgress(90);

      const separatedPdf =
        await newPdf.save();

      const blob = new Blob(
        [
          new Uint8Array(
            separatedPdf
          ),
        ],
        {
          type: "application/pdf",
        }
      );

      const url =
        URL.createObjectURL(blob);

      setDownloadUrl(url);

      // Finalizado
      setProgress(100);

      setMessage(
        `${pagesToExtract.length} página(s) separada(s) com sucesso!`
      );

    } catch (error) {
      console.error(error);

      if (
        error instanceof Error
      ) {
        setMessage(
          error.message
        );
      } else {
        setMessage(
          "Não foi possível separar o PDF."
        );
      }

      setProgress(0);

    } finally {
      setLoading(false);
    }
  }

  function formatFileSize(
    size: number
  ) {
    if (size < 1024) {
      return `${size} Bytes`;
    }

    if (
      size <
      1024 * 1024
    ) {
      return `${(
        size / 1024
      ).toFixed(2)} KB`;
    }

    return `${(
      size /
      (1024 * 1024)
    ).toFixed(2)} MB`;
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Oclix
          </Link>

          {/* Navegação */}
          <nav className="flex items-center gap-6">

            <Link
              href="/"
              className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
            >
              Início
            </Link>

            <Link
              href="/ferramentas"
              className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
            >
              Ferramentas
            </Link>

          </nav>

        </div>
      </header>

      {/* Conteúdo */}
      <section className="mx-auto max-w-3xl px-6 py-16">

        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-500">

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
            Separar PDF
          </span>

        </div>

        {/* Título */}
        <div className="mb-10 text-center">

          <div className="mb-4 text-5xl">
            ✂️
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Separar PDF
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Extraia páginas específicas de um arquivo PDF de forma rápida e simples.
          </p>

        </div>

        {/* Card */}
        <div className="rounded-2xl border bg-white p-8 shadow-sm">

          {/* Upload */}
          <label
            htmlFor="pdf-upload"
            className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 px-6 py-12 text-center transition hover:border-gray-900 hover:bg-gray-50"
          >

            <div className="mb-4 text-4xl">
              📁
            </div>

            <p className="text-lg font-semibold text-gray-900">
              Clique para selecionar seu PDF
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Selecione um arquivo PDF
            </p>

            <input
              id="pdf-upload"
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />

          </label>

          {/* Arquivo selecionado */}
          {file &&
            pageCount !== null && (
              <div className="mt-6 rounded-xl bg-gray-50 p-5">

                <div className="flex items-center justify-between gap-4">

                  <div className="flex min-w-0 items-center gap-4">

                    <div className="text-3xl">
                      📄
                    </div>

                    <div className="min-w-0">

                      <p className="truncate font-semibold text-gray-900">
                        {file.name}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {pageCount} página(s) •{" "}
                        {formatFileSize(
                          file.size
                        )}
                      </p>

                    </div>

                  </div>

                  {/* Limpar */}
                  <button
                    type="button"
                    onClick={
                      clearFile
                    }
                    disabled={loading}
                    className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    🗑️ Limpar
                  </button>

                </div>

              </div>
            )}

          {/* Seleção de páginas */}
          {pageCount !== null && (
            <div className="mt-6">

              <label
                htmlFor="pages"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Quais páginas deseja separar?
              </label>

              <input
                id="pages"
                type="text"
                value={
                  selectedPages
                }
                onChange={(
                  event
                ) =>
                  setSelectedPages(
                    event.target.value
                  )
                }
                placeholder="Exemplo: 1,3,5 ou 1-5"
                disabled={loading}
                className="w-full rounded-xl border bg-white p-4 text-gray-900 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-200 disabled:bg-gray-100"
              />

              <p className="mt-2 text-sm text-gray-500">
                Você pode informar páginas individuais ou intervalos.
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Exemplo: 1,3,5 ou 1-5 ou 1,3-6,10
              </p>

            </div>
          )}

          {/* Barra de progresso */}
          {loading && (
            <div className="mt-6">

              <div className="mb-2 flex items-center justify-between text-sm">

                <span className="font-medium text-gray-700">
                  Processando PDF...
                </span>

                <span className="font-semibold text-gray-900">
                  {progress}%
                </span>

              </div>

              <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">

                <div
                  className="h-full rounded-full bg-gray-900 transition-all duration-300"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

            </div>
          )}

          {/* Botão */}
          <button
            onClick={
              separatePdf
            }
            disabled={
              !file ||
              pageCount === null ||
              loading
            }
            className="mt-6 w-full rounded-xl bg-gray-900 px-6 py-4 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {loading
              ? "Separando PDF..."
              : "Separar PDF"}
          </button>

          {/* Mensagem */}
          {message && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4 text-center text-sm text-gray-700">
              {message}
            </div>
          )}

          {/* Download */}
          {downloadUrl && (
            <a
              href={
                downloadUrl
              }
              download="pdf-separado.pdf"
              className="mt-4 block w-full rounded-xl bg-green-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-green-700"
            >
              Baixar PDF separado
            </a>
          )}

        </div>

        {/* Informação */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Seu arquivo é processado diretamente no navegador.
        </p>

      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Oclix. Todos os direitos reservados.
          </p>

          <nav className="flex items-center gap-6">

            <Link
              href="/"
              className="text-sm text-gray-500 transition hover:text-gray-900"
            >
              Início
            </Link>

            <Link
              href="/ferramentas"
              className="text-sm text-gray-500 transition hover:text-gray-900"
            >
              Ferramentas
            </Link>

          </nav>

        </div>
      </footer>

    </main>
  );
}