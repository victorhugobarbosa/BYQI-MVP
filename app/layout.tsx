import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "BYQI | O Futuro da Mobilidade",
  description: "Bicicletas e Motos Elétricas de Alta Performance. Design Futurista.",
  icons: {
    icon: "/logo_nobg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable} font-sans bg-deep-carbon text-white`}>
        {children}
      </body>
    </html>
  );
}
