"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { removeBackground } from "@imgly/background-removal";

export default function RemoverFundoPage() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);

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
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
    }

    const newPreviewUrl =
      URL.createObjectURL(selectedFile);

    setFile(selectedFile);
    setPreviewUrl(newPreviewUrl);
    setDownloadUrl(null);
    setMessage("");
    setProgress(0);

    event.target.value = "";
  }

  async function removeImageBackground() {
    if (!file) {
      setMessage("Selecione uma imagem primeiro.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      setDownloadUrl(null);
      setProgress(0);

      const result = await removeBackground(file, {
        progress: (
          _key: string,
          current: number,
          total: number
        ) => {
          if (total > 0) {
            const percentage = Math.round(
              (current / total) * 100
            );

            setProgress(percentage);
          }
        },
      });

      const url = URL.createObjectURL(result);

      setDownloadUrl(url);
      setProgress(100);
      setMessage("Fundo removido com sucesso!");
    } catch (error) {
      console.error(error);

      setMessage(
        "Não foi possível remover o fundo da imagem. Tente outra imagem."
      );
    } finally {
      setLoading(false);
    }
  }

  function resetTool() {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
    }

    setFile(null);
    setPreviewUrl(null);
    setDownloadUrl(null);
    setLoading(false);
    setMessage("");
    setProgress(0);
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

  const fileName =
    file?.name.replace(/\.[^/.]+$/, "") || "imagem";

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      {/* Conteúdo */}
      <section className="mx-auto max-w-4xl px-5 py-12 sm:py-16">

        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-slate-500">
          <span>Início</span>
          <span className="mx-2">/</span>
          <span>Ferramentas</span>
          <span className="mx-2">/</span>
          <span className="font-medium text-slate-900">
            Remover Fundo
          </span>
        </div>

        {/* Título */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
            🪄
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Remover Fundo
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg leading-7 text-slate-500">
            Remova o fundo de suas imagens automaticamente
            e obtenha um PNG com fundo transparente.
          </p>
        </div>

        {/* Card principal */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

          {/* Upload */}
          {!file && (
            <label
              htmlFor="image-upload"
              className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/50 px-6 py-16 text-center transition hover:border-blue-400 hover:bg-blue-50"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                🖼️
              </div>

              <p className="text-lg font-semibold text-slate-900">
                Clique para selecionar uma imagem
              </p>

              <p className="mt-2 text-sm text-slate-500">
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
          )}

          {/* Imagem original */}
          {previewUrl && file && (
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">
                  Imagem original
                </h2>

                <button
                  onClick={resetTool}
                  disabled={loading}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Trocar imagem
                </button>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-4">
                <img
                  src={previewUrl}
                  alt="Imagem selecionada"
                  className="mx-auto max-h-96 max-w-full object-contain"
                />
              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-4">
                <p className="truncate font-semibold text-slate-900">
                  {file.name}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Tamanho original:{" "}
                  {formatFileSize(file.size)}
                </p>
              </div>
            </div>
          )}

          {/* Progresso */}
          {loading && (
            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-700">
                  Processando imagem...
                </span>

                <span className="text-sm font-bold text-blue-600">
                  {progress}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-blue-100">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all duration-300"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              <p className="mt-3 text-center text-xs text-slate-500">
                O processamento acontece diretamente no seu navegador.
              </p>
            </div>
          )}

          {/* Botão */}
          <button
            onClick={removeImageBackground}
            disabled={!file || loading}
            className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {loading
              ? "Removendo fundo..."
              : "Remover fundo"}
          </button>

          {/* Mensagem */}
          {message && (
            <div
              className={`mt-6 rounded-xl border p-4 text-center text-sm ${
                message.includes("sucesso")
                  ? "border-emerald-100 bg-emerald-50 text-emerald-700"
                  : "border-blue-100 bg-blue-50 text-blue-700"
              }`}
            >
              {message}
            </div>
          )}

          {/* Resultado */}
          {downloadUrl && (
            <div className="mt-10">

              <div className="mb-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
                  ✓
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  Resultado
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  O fundo foi removido e a imagem está pronta.
                </p>
              </div>

              {/* Comparação */}
              <div className="grid gap-6 md:grid-cols-2">

                {/* Original */}
                <div>
                  <p className="mb-3 text-sm font-semibold text-slate-700">
                    Original
                  </p>

                  <div className="flex min-h-64 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-4">
                    <img
                      src={previewUrl || ""}
                      alt="Imagem original"
                      className="max-h-80 max-w-full object-contain"
                    />
                  </div>
                </div>

                {/* Resultado */}
                <div>
                  <p className="mb-3 text-sm font-semibold text-slate-700">
                    Fundo removido
                  </p>

                  <div
                    className="flex min-h-64 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 p-4"
                    style={{
                      backgroundImage:
                        "linear-gradient(45deg, #e2e8f0 25%, transparent 25%), linear-gradient(-45deg, #e2e8f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e2e8f0 75%), linear-gradient(-45deg, transparent 75%, #e2e8f0 75%)",
                      backgroundSize: "24px 24px",
                      backgroundPosition:
                        "0 0, 0 12px, 12px -12px, -12px 0px",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <img
                      src={downloadUrl}
                      alt="Imagem com fundo removido"
                      className="max-h-80 max-w-full object-contain"
                    />
                  </div>
                </div>

              </div>

              {/* Botões */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                <a
                  href={downloadUrl}
                  download={`sem-fundo-${fileName}.png`}
                  className="block w-full rounded-xl bg-emerald-600 px-6 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-md"
                >
                  Baixar imagem PNG
                </a>

                <button
                  onClick={resetTool}
                  className="w-full rounded-xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Processar outra imagem
                </button>

              </div>

            </div>
          )}

        </div>

        {/* Informação */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500">
            Sua imagem é processada diretamente no navegador.
          </p>

          <p className="mt-2 text-xs text-slate-400">
            O arquivo não precisa ser enviado para um servidor.
          </p>
        </div>

      </section>

      <Footer />
    </main>
  );
}