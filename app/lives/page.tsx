import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LivesList } from "@/components/lives-list"
import { Play, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Conteúdo Gratuito | CURSOS UNEAC",
  description:
    "Assista às nossas lives gratuitas e conheça a fundo o trabalho da UNEAC. Conteúdo educacional de qualidade sobre educação inclusiva, ABA e muito mais.",
}

export default function LivesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted">
          <div className="absolute inset-0 z-0 opacity-5">
            <img src="/uneac-logo.jpg" alt="" className="w-full h-full object-contain" />
          </div>

          <div className="container relative z-10 px-4 py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Play className="h-4 w-4" />
                Conteúdo 100% Gratuito
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
                Lives Gratuitas <span className="text-primary">UNEAC</span>
              </h1>

              <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl text-pretty leading-relaxed">
                Acompanhe de perto o trabalho da UNEAC por meio das nossas transmissões ao vivo totalmente gratuitas.
                Nossas lives oferecem conteúdo educativo de alta qualidade, com temas voltados à educação inclusiva,
                acessibilidade, formação profissional e boas práticas para escolas e instituições.
              </p>

              <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg text-pretty">
                Aprenda, participe e amplie seus conhecimentos com especialistas que fazem a diferença — tudo isso sem
                custo algum.
              </p>

              <div className="flex items-center justify-center gap-2 text-sm">
                <Award className="h-5 w-5 text-primary" />
                <span>Certificado disponível para participantes</span>
              </div>
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
