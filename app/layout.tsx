import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oclix.vercel.app"),

  title: {
    default: "Oclix — Ferramentas online simples e rápidas",
    template: "%s | Oclix",
  },

  description:
    "Ferramentas online simples, rápidas e gratuitas para trabalhar com PDFs, imagens e documentos.",

  keywords: [
    "ferramentas online",
    "ferramentas gratuitas",
    "comprimir PDF",
    "converter imagens",
    "remover fundo de imagem",
    "juntar PDF",
    "separar PDF",
    "PDF online",
    "imagem online",
  ],

  authors: [
    {
      name: "Oclix",
    },
  ],

  creator: "Oclix",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://oclix.vercel.app",
    siteName: "Oclix",
    title: "Oclix — Ferramentas online simples e rápidas",
    description:
      "Ferramentas online simples, rápidas e gratuitas para trabalhar com PDFs, imagens e documentos.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Oclix — Ferramentas online simples e rápidas",
    description:
      "Ferramentas online simples, rápidas e gratuitas para trabalhar com PDFs, imagens e documentos.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}