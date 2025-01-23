import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Painted by Sarah | Live Wedding Painter and Fine Artist | Metairie Louisiana",
  description: "An experienced artist and art educator in the New Orleans area, Sarah Hirsch specializes in portraiture and live painting. She works in a variety of media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
