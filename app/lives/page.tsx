import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LivesList } from "@/components/lives-list"

export const metadata: Metadata = {
  title: "Lives Gratuitas | CURSOS UNEAC",
  description:
    "Assista às nossas lives gratuitas e conheça a fundo o trabalho da UNEAC. Conteúdo educacional de qualidade sobre educação inclusiva, ABA e muito mais.",
}

export default function LivesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Lives Gratuitas UNEAC</h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 text-balance">
                Conheça a fundo o trabalho da UNEAC através das nossas transmissões ao vivo. Conteúdo educacional de
                qualidade sobre educação inclusiva, acessibilidade e muito mais.
              </p>
            </div>
          </div>
        </section>

        {/* Lives List */}
        <LivesList />
      </main>
      <Footer />
    </>
  )
}
