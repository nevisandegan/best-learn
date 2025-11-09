import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const bnazanin = localFont({
  src: [
    {
      path: "../../public/fonts/B-NAZANIN.TTF",
      style: "normal",
    },
  ],
  variable: "--font-bnazanin",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      dir="rtl"
      className={`${figtree.variable} ${bnazanin.variable}`}
    >
      <body className="flex flex-col min-h-screen font-bold uppercase">
        <header className="bg-gray-200 flex items-center justify-center">
          HEADER
        </header>
        <div className="flex-1 flex">{children}</div>
        <footer className="bg-gray-200 flex items-center justify-center">
          FOOTER
        </footer>
      </body>
    </html>
  );
}
