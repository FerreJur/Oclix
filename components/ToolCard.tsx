import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  icon: string;
  link: string;
};

export default function ToolCard({
  title,
  description,
  icon,
  link,
}: ToolCardProps) {
  return (
    <Link
      href={link}
      className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
    >
      {/* Brilho suave no topo do card */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Ícone */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-200">
        <span className="transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>
      </div>

      {/* Título */}
      <h3 className="text-xl font-semibold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-blue-700">
        {title}
      </h3>

      {/* Descrição */}
      <p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">
        {description}
      </p>

      {/* Link */}
      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
        <span>Usar ferramenta</span>

        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}