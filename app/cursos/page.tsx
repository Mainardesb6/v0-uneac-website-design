import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { CourseGrid } from "@/components/course-grid"

export default function CursosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Todos os Cursos</h1>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              Explore nossa ampla gama de cursos de pós-graduação nas áreas de Educação, Saúde e Letras
            </p>
          </div>
        </div>
        <CourseGrid />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
