import type { Metadata } from "next"
import "./globals.css"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: {
    default: "GROUMA PLÂTRERIE",
    template: "%s | GROUMA PLÂTRERIE",
  },
  description:
    "Plâtrerie, isolation et transformation intérieure à Carpentras et dans le Vaucluse.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="bg-white text-zinc-950 antialiased">

        <Header />

        <div className="pt-16">
          {children}
        </div>

        <Footer />

      </body>
    </html>
  )
}
