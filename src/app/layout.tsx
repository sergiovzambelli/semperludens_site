import Footer from "@/components/Footer";
import "./globals.css";
import { Inter, Nunito } from 'next/font/google';
import localFont from 'next/font/local'
import { Metadata } from "next";
import seo_text from "@/utils/seo.json"

export const metadata: Metadata = {
  title: seo_text.title,
  description: seo_text.description,
  keywords:["Brianza", "Gioco da tavolo", "Gioco di ruolo", "Gioco"],
  applicationName: seo_text.applicationName,
  authors: [{ name: seo_text.author, url: seo_text.author_site}],
  robots: "index, follow",
  metadataBase: new URL(seo_text.url),
  openGraph: {
    title: seo_text.title,
    description: seo_text.description,
    url: seo_text.url,
    siteName: seo_text.applicationName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "it_IT",
    type: "website",
  }
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
});

const gelica = localFont({
  src: '../../public/font/gelica.otf',
  variable: '--font-gelica',
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${nunito.variable} ${gelica.variable}`}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
