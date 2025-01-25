import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio de Eduardo Souza",
  description:
    "Veja projetos e soluções criativas de Eduardo Souza, desenvolvedor Full Stack.",
  keywords: "Eduardo Souza, desenvolvedor, full stack, portfólio, projetos web",
  // authors: ["Eduardo Souza"],
  openGraph: {
    title: "Portfólio de Eduardo Souza",
    description:
      "Confira os projetos desenvolvidos por Eduardo Souza, soluções digitais e desenvolvimento web.",
    url: "https://portfolio2-mauve-six.vercel.app/portfolio",
    siteName: "Portfólio Eduardo Souza",
    // images: [
    //   {
    //     url: "https://www.seu-portfolio.com/og-image.jpg",
    //     width: 800,
    //     height: 600,
    //     alt: "Imagem do portfólio de Eduardo Souza",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio de Eduardo Souza",
    description:
      "Descubra projetos inovadores e soluções digitais no portfólio de Eduardo Souza.",
    // image: "https://www.seu-portfolio.com/og-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
