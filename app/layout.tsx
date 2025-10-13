import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CartProvider } from "@/lib/cart-context"
import { AuthProvider } from "@/lib/auth-context"
import { OrdersProvider } from "@/lib/orders-context"
import { Toaster } from "@/components/toaster"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
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
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable}`}>
        <AuthProvider>
          <OrdersProvider>
            <CartProvider>
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
              <Toaster />
              <CookieBanner />
            </CartProvider>
          </OrdersProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
