import type { Metadata } from "next";
import { Inter, Press_Start_2P, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel-src",
});
const terminal = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-terminal-src",
});
const body = Inter({ subsets: ["latin"], variable: "--font-body-src" });

export const metadata: Metadata = {
  title: "Lahra Dev | Desenvolvedora Full Stack",
  description:
    "Portfólio de desenvolvedora full stack: sistemas públicos, automação e interfaces com personalidade.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${pixel.variable} ${terminal.variable} ${body.variable} scroll-smooth`}
    >
      <body className="bg-arc-bg font-body text-arc-text antialiased">
        {children}
      </body>
    </html>
  );
}