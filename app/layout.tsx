import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CartProvider } from "@/lib/cart-context"
import { AuthProvider } from "@/lib/auth-context"
import { OrdersProvider } from "@/lib/orders-context"
import { Toaster } from "@/components/toaster"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CURSOS UNEAC",
  description:
    "Transforme sua carreira com nossos cursos de especialização online nas áreas de Educação, Saúde e Letras.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${inter.variable} ${GeistMono.variable}`}>
        <AuthProvider>
          <OrdersProvider>
            <CartProvider>
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
              <Toaster />
            </CartProvider>
          </OrdersProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
