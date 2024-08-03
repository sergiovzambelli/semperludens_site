import "./globals.css";
import { Inter, Nunito } from 'next/font/google';
import localFont from 'next/font/local'

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const nunito = Inter({
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
      <body className={`${inter.variable} ${nunito.variable} ${gelica.variable}`}>{children}</body>
    </html>
  );
}
