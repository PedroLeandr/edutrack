import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EduTrack",
  description: "O website para escolas e professores gerenciarem suas atividades educacionais.",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body
      className={`${inter.variable} antialiased scroll-smooth`}
    >
      {children}
    </body>
  );
}
