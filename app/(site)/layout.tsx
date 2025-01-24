import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Painted by Sarah | Live Wedding Painter and Fine Artist | Metairie Louisiana",
  description: "An experienced artist and art educator in the New Orleans area, Sarah Hirsch specializes in portraiture and live painting. She works in a variety of media.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-3xl mx-auto py-10`}
      >
        <>
          <header className="flex items-center justify-between">
            <Link className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold" href="/">Painted by Sarah</Link>
            <div className="flex items-center gap-5 text-sm text-gray-500">
              {pages.map((page) => (
                <Link key={page._id} href={`/${page.slug}`} className="hover:underline">
                  {page.title}
                </Link>
              ))}
            </div>
          </header>
          <main className="py-20">{children}</main>
        </>
      </body>
    </html>
  );
}
