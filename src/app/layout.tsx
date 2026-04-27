import type { Metadata } from "next";
import "./globals.css";
import Splash from './pages/splash'

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
        <Splash/>
        {children}
      </body>
    </html>
  );
}
