"use client";

import { useState } from "react";
import Link from "next/link";
import { PDFDocument } from "pdf-lib";

export default function ComprimirPdfPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [originalSize, setOriginalSize] = useState<number | null>(null);
  const [compressedSize, setCompressedSize] = useState<number | null>(null);

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    if (selectedFile.type !== "application/pdf") {
      setMessage("Por favor, selecione um arquivo PDF válido.");
      setFile(null);
      return;
    }

    setFile(selectedFile);
    setMessage("");
    setDownloadUrl(null);
    setOriginalSize(selectedFile.size);
    setCompressedSize(null);
  }

  async function compressPdf() {
    if (!file) {
      setMessage("Selecione um arquivo PDF primeiro.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      setDownloadUrl(null);
      setCompressedSize(null);

      const arrayBuffer = await file.arrayBuffer();

      const pdfDoc = await PDFDocument.load(arrayBuffer);

      const compressedPdf = await pdfDoc.save({
        useObjectStreams: true,
        addDefaultPage: false,
      });

      const blob = new Blob(
  [new Uint8Array(compressedPdf)],
  {
    type: "application/pdf",
  }
);

      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
      setCompressedSize(blob.size);
      setMessage("PDF processado com sucesso!");

    } catch (error) {
      console.error(error);
      setMessage(
        "Não foi possível processar o PDF. Verifique se o arquivo é válido."
      );
    } finally {
      setLoading(false);
    }
  }

  function formatFileSize(size: number | null) {
    if (size === null) {
      return "";
    }

    if (size < 1024) {
      return `${size} Bytes`;
    }

    if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(2)} KB`;
    }

    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Oclix
          </Link>

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

          <span className="mx-2">/</span>

          <Link
            href="/ferramentas"
            className="transition hover:text-gray-900"
          >
            Ferramentas
          </Link>

          <span className="mx-2">/</span>

          <span className="text-gray-900">
            Comprimir PDF
          </span>

        </div>

        {/* Título */}
        <div className="mb-10 text-center">

          <div className="mb-4 text-5xl">
            📄
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Comprimir PDF
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Reduza o tamanho dos seus arquivos PDF de forma rápida e simples.
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
              Apenas arquivos PDF
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
          {file && (
            <div className="mt-6 rounded-xl bg-gray-50 p-4">

              <div className="flex items-center justify-between gap-4">

                <div>
                  <p className="font-semibold text-gray-900">
                    {file.name}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Tamanho original:{" "}
                    {formatFileSize(originalSize)}
                  </p>
                </div>

                <span className="text-2xl">
                  📄
                </span>

              </div>

            </div>
          )}

          {/* Botão */}
          <button
            onClick={compressPdf}
            disabled={!file || loading}
            className="mt-6 w-full rounded-xl bg-gray-900 px-6 py-4 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {loading
              ? "Processando PDF..."
              : "Comprimir PDF"}
          </button>

          {/* Mensagem */}
          {message && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4 text-center text-sm text-gray-700">
              {message}
            </div>
          )}

          {/* Resultado */}
          {compressedSize !== null && (
            <div className="mt-6 rounded-xl border bg-white p-5">

              <div className="grid gap-4 sm:grid-cols-2">

                <div>
                  <p className="text-sm text-gray-500">
                    Tamanho original
                  </p>

                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    {formatFileSize(originalSize)}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Novo tamanho
                  </p>

                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    {formatFileSize(compressedSize)}
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* Download */}
          {downloadUrl && (
            <a
              href={downloadUrl}
              download={`comprimido-${file?.name || "arquivo.pdf"}`}
              className="mt-4 block w-full rounded-xl bg-green-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-green-700"
            >
              Baixar PDF comprimido
            </a>
          )}

        </div>

        {/* Aviso */}
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