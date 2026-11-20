import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raízes em Movimento | NEABI IFPE Garanhuns",
  description:
    "Histórias, livros, filmes, acervos digitais e música para valorizar a cultura negra e fortalecer a educação antirracista.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
