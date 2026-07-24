"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PDFDocument } from "pdf-lib";

export default function JuntarPdfPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  useEffect(() => {
    return () => {
      if (downloadUrl) {
        URL.revokeObjectURL(downloadUrl);
      }
    };
  }, [downloadUrl]);

  function handleFilesChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const selectedFiles = Array.from(
      event.target.files || []
    );

    if (selectedFiles.length === 0) {
      return;
    }

    const invalidFile = selectedFiles.find(
      (file) => file.type !== "application/pdf"
    );

    if (invalidFile) {
      setMessage(
        "Todos os arquivos selecionados devem ser PDFs válidos."
      );

      return;
    }

    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
    }

    setFiles((currentFiles) => [
      ...currentFiles,
      ...selectedFiles,
    ]);

    setDownloadUrl(null);
    setMessage("");
    setProgress(0);

    event.target.value = "";
  }

  function removeFile(index: number) {
    setFiles((currentFiles) =>
      currentFiles.filter(
        (_, fileIndex) => fileIndex !== index
      )
    );

    setDownloadUrl(null);
    setMessage("");
    setProgress(0);
  }

  function clearFiles() {
    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
    }

    setFiles([]);
    setDownloadUrl(null);
    setMessage("");
    setProgress(0);
  }

  function handleDragStart(index: number) {
    setDraggedIndex(index);
  }

  function handleDragOver(
    event: React.DragEvent<HTMLDivElement>
  ) {
    event.preventDefault();
  }

  function handleDrop(
    event: React.DragEvent<HTMLDivElement>,
    targetIndex: number
  ) {
    event.preventDefault();

    if (
      draggedIndex === null ||
      draggedIndex === targetIndex
    ) {
      setDraggedIndex(null);
      return;
    }

    const newFiles = [...files];

    const draggedFile = newFiles[draggedIndex];

    newFiles.splice(draggedIndex, 1);

    newFiles.splice(
      targetIndex,
      0,
      draggedFile
    );

    setFiles(newFiles);
    setDraggedIndex(null);

    setDownloadUrl(null);
    setMessage("");
    setProgress(0);
  }

  function handleDragEnd() {
    setDraggedIndex(null);
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

  async function mergePdfs() {
    if (files.length < 2) {
      setMessage(
        "Selecione pelo menos 2 arquivos PDF para juntar."
      );

      return;
    }

    try {
      setLoading(true);
      setMessage("");
      setDownloadUrl(null);
      setProgress(0);

      const mergedPdf =
        await PDFDocument.create();

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const progressValue = Math.round(
          (i / files.length) * 80
        );

        setProgress(progressValue);

        const arrayBuffer =
          await file.arrayBuffer();

        const pdf =
          await PDFDocument.load(arrayBuffer);

        const pages =
          await mergedPdf.copyPages(
            pdf,
            pdf.getPageIndices()
          );

        pages.forEach((page) => {
          mergedPdf.addPage(page);
        });

        await new Promise((resolve) =>
          setTimeout(resolve, 50)
        );
      }

      setProgress(90);

      const mergedPdfBytes =
        await mergedPdf.save();

      const blob = new Blob(
        [new Uint8Array(mergedPdfBytes)],
        {
          type: "application/pdf",
        }
      );

      const url =
        URL.createObjectURL(blob);

      setDownloadUrl(url);
      setProgress(100);

      setMessage(
        "PDFs juntados com sucesso!"
      );

    } catch (error) {
      console.error(error);

      setMessage(
        "Não foi possível juntar os PDFs. Verifique se os arquivos são válidos."
      );

      setProgress(0);

    } finally {
      setLoading(false);
    }
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
            Juntar PDF
          </span>

        </div>

        {/* Título */}
        <div className="mb-10 text-center">

          <div className="mb-4 text-5xl">
            📚
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Juntar PDF
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Una vários arquivos PDF em um único documento de forma rápida e simples.
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
              Clique para selecionar os PDFs
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Você pode selecionar vários arquivos PDF
            </p>

            <input
              id="pdf-upload"
              type="file"
              accept="application/pdf"
              multiple
              onChange={handleFilesChange}
              className="hidden"
            />

          </label>

          {/* Lista */}
          {files.length > 0 && (
            <div className="mt-6">

              <div className="mb-4 flex items-center justify-between">

                <h2 className="text-lg font-semibold text-gray-900">
                  Arquivos selecionados
                </h2>

                <button
                  type="button"
                  onClick={clearFiles}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                >
                  🗑️ Limpar tudo
                </button>

              </div>

              <p className="mb-4 text-sm text-gray-500">
                Arraste os arquivos para alterar a ordem.
              </p>

              <div className="space-y-3">

                {files.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`}
                    draggable
                    onDragStart={() =>
                      handleDragStart(index)
                    }
                    onDragOver={handleDragOver}
                    onDrop={(event) =>
                      handleDrop(
                        event,
                        index
                      )
                    }
                    onDragEnd={handleDragEnd}
                    className={`flex cursor-grab items-center justify-between gap-4 rounded-xl border p-4 transition active:cursor-grabbing ${
                      draggedIndex === index
                        ? "border-gray-900 bg-gray-100 opacity-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >

                    <div className="flex min-w-0 items-center gap-3">

                      {/* Drag handle */}
                      <div className="cursor-grab text-xl text-gray-400">
                        ☰
                      </div>

                      <div className="text-2xl">
                        📄
                      </div>

                      <div className="min-w-0">

                        <p className="truncate font-semibold text-gray-900">
                          {index + 1}. {file.name}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          {formatFileSize(file.size)}
                        </p>

                      </div>

                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        removeFile(index)
                      }
                      className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                    >
                      Remover
                    </button>

                  </div>
                ))}

              </div>

            </div>
          )}

          {/* Barra de progresso */}
          {loading && (
            <div className="mt-6">

              <div className="mb-2 flex items-center justify-between text-sm">

                <span className="font-medium text-gray-700">
                  Processando PDFs...
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
            onClick={mergePdfs}
            disabled={
              files.length < 2 ||
              loading
            }
            className="mt-6 w-full rounded-xl bg-gray-900 px-6 py-4 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {loading
              ? "Juntando PDFs..."
              : "Juntar PDFs"}
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
              href={downloadUrl}
              download="pdf-juntado.pdf"
              className="mt-4 block w-full rounded-xl bg-green-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-green-700"
            >
              Baixar PDF juntado
            </a>
          )}

        </div>

        {/* Informação */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Seus arquivos são processados diretamente no navegador.
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