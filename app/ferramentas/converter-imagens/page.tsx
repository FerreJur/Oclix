"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ImageFormat = "image/jpeg" | "image/png" | "image/webp";

export default function ConverterImagensPage() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [format, setFormat] = useState<ImageFormat>("image/png");
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }

      if (downloadUrl) {
        URL.revokeObjectURL(downloadUrl);
      }
    };
  }, [previewUrl, downloadUrl]);

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    if (!selectedFile.type.startsWith("image/")) {
      setMessage("Por favor, selecione uma imagem válida.");
      setFile(null);
      setPreviewUrl(null);
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
    }

    const newPreviewUrl = URL.createObjectURL(selectedFile);

    setFile(selectedFile);
    setPreviewUrl(newPreviewUrl);
    setDownloadUrl(null);
    setMessage("");
  }

  function getExtension() {
    if (format === "image/jpeg") {
      return "jpg";
    }

    if (format === "image/webp") {
      return "webp";
    }

    return "png";
  }

  function convertImage() {
    if (!file || !previewUrl) {
      setMessage("Selecione uma imagem primeiro.");
      return;
    }

    setLoading(true);
    setMessage("");
    setDownloadUrl(null);

    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement("canvas");

      canvas.width = image.width;
      canvas.height = image.height;

      const context = canvas.getContext("2d");

      if (!context) {
        setMessage("Não foi possível processar a imagem.");
        setLoading(false);
        return;
      }

      // Fundo branco para conversão para JPG
      if (format === "image/jpeg") {
        context.fillStyle = "#ffffff";
        context.fillRect(
          0,
          0,
          canvas.width,
          canvas.height
        );
      }

      context.drawImage(
        image,
        0,
        0,
        canvas.width,
        canvas.height
      );

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            setMessage(
              "Não foi possível converter a imagem."
            );

            setLoading(false);
            return;
          }

          const url = URL.createObjectURL(blob);

          setDownloadUrl(url);
          setMessage("Imagem convertida com sucesso!");
          setLoading(false);
        },
        format,
        0.92
      );
    };

    image.onerror = () => {
      setMessage(
        "Não foi possível carregar a imagem."
      );

      setLoading(false);
    };

    image.src = previewUrl;
  }

  function formatFileSize(size: number) {
    if (size < 1024) {
      return `${size} Bytes`;
    }

    if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(2)} KB`;
    }

    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  }

  const extension = getExtension();

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
            Converter Imagens
          </span>

        </div>

        {/* Título */}
        <div className="mb-10 text-center">

          <div className="mb-4 text-5xl">
            🖼️
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Converter Imagens
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Converta suas imagens rapidamente entre JPG, PNG e WebP.
          </p>

        </div>

        {/* Card */}
        <div className="rounded-2xl border bg-white p-8 shadow-sm">

          {/* Upload */}
          <label
            htmlFor="image-upload"
            className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 px-6 py-12 text-center transition hover:border-gray-900 hover:bg-gray-50"
          >

            <div className="mb-4 text-4xl">
              📁
            </div>

            <p className="text-lg font-semibold text-gray-900">
              Clique para selecionar uma imagem
            </p>

            <p className="mt-2 text-sm text-gray-500">
              JPG, PNG ou WebP
            </p>

            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

          </label>

          {/* Preview */}
          {previewUrl && file && (
            <div className="mt-6">

              <div className="overflow-hidden rounded-xl border bg-gray-50">
                <img
                  src={previewUrl}
                  alt="Preview da imagem"
                  className="mx-auto max-h-80 max-w-full object-contain"
                />
              </div>

              <div className="mt-4 rounded-xl bg-gray-50 p-4">

                <p className="font-semibold text-gray-900">
                  {file.name}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Tamanho original:{" "}
                  {formatFileSize(file.size)}
                </p>

              </div>

            </div>
          )}

          {/* Formato */}
          <div className="mt-6">

            <label
              htmlFor="format"
              className="mb-2 block text-sm font-semibold text-gray-900"
            >
              Formato de saída
            </label>

            <select
              id="format"
              value={format}
              onChange={(event) =>
                setFormat(
                  event.target.value as ImageFormat
                )
              }
              className="w-full rounded-xl border bg-white p-4 text-gray-900 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
            >

              <option value="image/png">
                PNG
              </option>

              <option value="image/jpeg">
                JPG
              </option>

              <option value="image/webp">
                WebP
              </option>

            </select>

          </div>

          {/* Botão Converter */}
          <button
            onClick={convertImage}
            disabled={!file || loading}
            className="mt-6 w-full rounded-xl bg-gray-900 px-6 py-4 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {loading
              ? "Convertendo imagem..."
              : "Converter imagem"}
          </button>

          {/* Mensagem */}
          {message && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4 text-center text-sm text-gray-700">
              {message}
            </div>
          )}

          {/* Download */}
          {downloadUrl && file && (
            <a
              href={downloadUrl}
              download={`${file.name.split(".")[0]}.${extension}`}
              className="mt-4 block w-full rounded-xl bg-green-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-green-700"
            >
              Baixar imagem convertida
            </a>
          )}

        </div>

        {/* Informação */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Sua imagem é processada diretamente no navegador.
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