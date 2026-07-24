import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2"
        >
          {/* Ícone do Oclix */}
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm transition duration-200 group-hover:bg-blue-700 group-hover:shadow-md">
            <span className="text-lg font-bold">O</span>
          </div>

          {/* Nome */}
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Oclix
          </span>
        </Link>

        {/* Navegação */}
        <nav className="flex items-center gap-2">

          {/* Início */}
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition duration-200 hover:bg-blue-50 hover:text-blue-600"
          >
            Início
          </Link>

          {/* Ferramentas */}
          <Link
            href="/ferramentas"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition duration-200 hover:bg-blue-50 hover:text-blue-600"
          >
            Ferramentas
          </Link>

          {/* Botão principal */}
          <Link
            href="/ferramentas"
            className="ml-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-700 hover:shadow-md"
          >
            Ver ferramentas
          </Link>

        </nav>
      </div>
    </header>
  );
}