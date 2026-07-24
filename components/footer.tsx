import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Conteúdo principal */}
        <div className="flex flex-col justify-between gap-10 md:flex-row">

          {/* Marca */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="group inline-flex items-center gap-2"
            >
              {/* Ícone */}
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm transition duration-200 group-hover:bg-blue-700">
                <span className="text-lg font-bold">O</span>
              </div>

              {/* Nome */}
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Oclix
              </span>
            </Link>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Ferramentas digitais simples, rápidas e fáceis de usar.
              Tudo o que você precisa para trabalhar com seus arquivos
              em um só lugar.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Navegação
            </h3>

            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-slate-500 transition duration-200 hover:text-blue-600"
              >
                Início
              </Link>

              <Link
                href="/ferramentas"
                className="text-sm text-slate-500 transition duration-200 hover:text-blue-600"
              >
                Ferramentas
              </Link>
            </nav>
          </div>

          {/* Ferramentas */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Ferramentas
            </h3>

            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="/ferramentas/comprimir-pdf"
                className="text-sm text-slate-500 transition duration-200 hover:text-blue-600"
              >
                Comprimir PDF
              </Link>

              <Link
                href="/ferramentas/juntar-pdf"
                className="text-sm text-slate-500 transition duration-200 hover:text-blue-600"
              >
                Juntar PDF
              </Link>

              <Link
                href="/ferramentas/separar-pdf"
                className="text-sm text-slate-500 transition duration-200 hover:text-blue-600"
              >
                Separar PDF
              </Link>
            </nav>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Oclix. Todos os direitos reservados.
          </p>

          <p className="text-xs text-slate-400">
            Ferramentas digitais simples e rápidas.
          </p>
        </div>

      </div>
    </footer>
  );
}