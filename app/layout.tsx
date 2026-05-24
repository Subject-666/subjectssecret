import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chromatic",
  description": "Yaşayan Neon Dijital Ekosistem",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
