'use client'

import "./globals.css";
import { montserrat } from "./ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <link rel="icon" href="/assets/favicon.ico" sizes="any" />
      <body className={`${montserrat.className} absolute top-0 z-[-2] h-screen w-full bg-fixed bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}>
        {children}
      </body>
    </html>
  )
}
