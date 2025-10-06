import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MonthlyCourses } from "@/components/monthly-courses"

export default function CursosMensaisPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">Cursos Mensais</h1>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-2">
              Cursos especiais com datas programadas, todos reconhecidos pelo MEC e pensados para enriquecer sua
              formação!
            </p>
            <p className="text-sm text-muted-foreground text-center">
              Entre em contato pelo WhatsApp para garantir sua vaga
            </p>
          </div>
        </div>
        <MonthlyCourses />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
