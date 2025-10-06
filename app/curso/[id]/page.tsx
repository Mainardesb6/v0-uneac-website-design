import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { CourseDetail } from "@/components/course-detail"
import { getCourseById } from "@/lib/courses-data"

export default function CursoPage({ params }: { params: { id: string } }) {
  const course = getCourseById(Number.parseInt(params.id))

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Curso não encontrado</h1>
            <p className="text-muted-foreground">O curso que você está procurando não existe.</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CourseDetail course={course} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
