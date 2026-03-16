import { Metadata } from "next"
import { BookOpen, Download, Mail, Shield } from "lucide-react"
import { EbookCartProvider } from "@/lib/ebook-cart-context"
import { EbookGrid } from "@/components/ebook-grid"
import { EbookCartSidebar } from "@/components/ebook-cart-sidebar"
import { EbookPricingCards } from "@/components/ebook-pricing-cards"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "eBooks | UNEAC - União Educacional e Administrativa de Cursos",
  description: "eBooks ilustrados e comentados sobre Autismo, TEA, Neurociência e Educação Especial. Combos especiais: 1 por R$ 19,99, 3 por R$ 49,99, 7 por R$ 89,99.",
}

const features = [
  {
    icon: BookOpen,
    title: "Conteúdo Ilustrado",
    description: "Material visual e didático para facilitar o aprendizado"
  },
  {
    icon: Download,
    title: "PDF Completo",
    description: "Receba o arquivo digital pronto para leitura"
  },
  {
    icon: Mail,
    title: "Envio por E-mail",
    description: "Acesso imediato após a confirmação do pagamento"
  },
  {
    icon: Shield,
    title: "Compra Segura",
    description: "Seus dados protegidos em todas as transações"
  }
]

export default function EbooksPage() {
  return (
    <EbookCartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section - Compact */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-primary/5 to-background pt-24 pb-8">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-balance">
                eBooks Especializados em{" "}
                <span className="text-primary">Autismo e Educação</span>
              </h1>
              <p className="text-base text-muted-foreground text-pretty">
                Material ilustrado e atualizado pela Profª Juliana Moraes. 
                <span className="font-semibold text-foreground"> Combos: 1 por R$19,99 | 3 por R$49,99 | 7 por R$89,99</span>
              </p>
            </div>

            {/* Features - Inline */}
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/50 backdrop-blur-sm border text-sm"
                >
                  <feature.icon className="h-4 w-4 text-primary" />
                  <span className="font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* eBooks Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">Todos os eBooks</h2>
                    <p className="text-muted-foreground">
                      Selecione os eBooks que deseja adquirir
                    </p>
                  </div>
                </div>
                <EbookGrid />
              </div>

              {/* Cart Sidebar */}
              <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
                <EbookCartSidebar />
              </div>
            </div>
          </div>
        </section>

        {/* Author Section */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Sobre a Autora</h2>
              <p className="text-muted-foreground mb-6">
                Todos os eBooks são desenvolvidos pela{" "}
                <span className="font-semibold text-foreground">Profª Juliana Moraes</span>,
                especialista em Educação Especial e Inclusiva, com foco em Transtorno do 
                Espectro Autista (TEA) e Neurociência aplicada à Educação.
              </p>
              <p className="text-sm text-muted-foreground">
                Os materiais são constantemente atualizados para refletir as mais recentes 
                pesquisas e práticas na área, garantindo conteúdo de qualidade e relevância.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </EbookCartProvider>
  )
}
