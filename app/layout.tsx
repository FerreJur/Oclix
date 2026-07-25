import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oclix-xwvm.vercel.app"),

  title: {
    default: "Oclix | Ferramentas Online Grátis para PDF e Imagens",
    template: "%s | Oclix",
  },

  description:
    "Use ferramentas online grátis para comprimir, juntar e separar PDFs, converter imagens e remover fundos de fotos. Rápido, simples e fácil de usar.",

  keywords: [
    "ferramentas online",
    "ferramentas online grátis",
    "ferramentas gratuitas",
    "comprimir PDF",
    "comprimir PDF online",
    "juntar PDF",
    "juntar PDF online",
    "separar PDF",
    "separar PDF online",
    "converter imagens",
    "converter JPG para PNG",
    "converter PNG para JPG",
    "converter WebP",
    "remover fundo de imagem",
    "remover fundo de foto",
  ],

  authors: [
    {
      name: "Oclix",
    },
  ],

  creator: "Oclix",
  publisher: "Oclix",

  alternates: {
    canonical: "https://oclix-xwvm.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://oclix-xwvm.vercel.app",
    siteName: "Oclix",
    title: "Oclix | Ferramentas Online Grátis para PDF e Imagens",
    description:
      "Ferramentas online grátis para trabalhar com PDFs e imagens. Comprima, junte e separe PDFs, converta imagens e remova fundos de fotos.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Oclix | Ferramentas Online Grátis",
    description:
      "Ferramentas online simples e rápidas para PDF e imagens.",
  },

  verification: {
    google:
      "5UGrw5PylnI2VPSs6BTXpdo-LJZuC3nuZX3BN7kthw8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}