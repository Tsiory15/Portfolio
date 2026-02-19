import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Rapholio",
  description: "Made by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name='viewport' content='initial-scale=1' />
      <body>
        {children}
      </body>
    </html>
  );
}
