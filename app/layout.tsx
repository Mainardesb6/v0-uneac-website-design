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

const baseUrl = "https://cursosuneac.com.br"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "CURSOS UNEAC - Cursos Online de Educacao, Saude e Letras",
    template: "%s | CURSOS UNEAC",
  },
  description:
    "Transforme sua carreira com cursos de especializacao online nas areas de Educacao, Saude e Letras. Certificados reconhecidos pelo MEC. Mais de 10 mil alunos formados.",
  keywords: ["cursos online", "educacao", "saude", "letras", "capacitacao", "UNEAC", "certificado MEC"],
  authors: [{ name: "CURSOS UNEAC" }],
  creator: "CURSOS UNEAC",
  publisher: "CURSOS UNEAC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "CURSOS UNEAC - Cursos Online de Educacao, Saude e Letras",
    description:
      "Transforme sua carreira com cursos de especializacao online. Certificados reconhecidos pelo MEC.",
    url: baseUrl,
    siteName: "CURSOS UNEAC",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CURSOS UNEAC - Cursos Online",
    description: "Cursos de especializacao online nas areas de Educacao, Saude e Letras.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <head>
        <meta name="theme-color" content="#0284c7" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable}`}>
        <a 
          href="#main" 
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:outline-none"
        >
          Pular para o conteudo principal
        </a>
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
