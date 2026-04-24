import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { CourseGrid } from "@/components/course-grid"
import { Breadcrumb } from "@/components/breadcrumb"
import { getCoursesByCategory } from "@/lib/courses-data"

// Map slugs to category names
const categoryMap: Record<string, string> = {
  "educacao-especial": "Educação Especial",
  educacao: "Educação",
  saude: "Saúde",
  letras: "Letras",
  historia: "História",
  filosofia: "Filosofia",
  direito: "Direito",
  libras: "Libras",
  "educacao-ambiental": "Educação Ambiental",
}

interface CategoriaPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: CategoriaPageProps): Promise<Metadata> {
  const categoryName = categoryMap[params.slug]
  
  if (!categoryName) {
    return {
      title: "Categoria nao encontrada",
    }
  }

  return {
    title: `Cursos de ${categoryName}`,
    description: `Explore nossos cursos de extensao online na area de ${categoryName}. Certificados reconhecidos pelo MEC.`,
    openGraph: {
      title: `Cursos de ${categoryName} | CURSOS UNEAC`,
      description: `Cursos de extensao online na area de ${categoryName}.`,
    },
  }
}

export default function CategoriaPage({ params }: CategoriaPageProps) {
  const categoryName = categoryMap[params.slug]

  if (!categoryName) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main" className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Categoria nao encontrada</h1>
            <p className="text-muted-foreground">A categoria que voce esta procurando nao existe.</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const categoryCourses = getCoursesByCategory(categoryName)

  const breadcrumbItems = [
    { label: "Cursos", href: "/cursos" },
    { label: categoryName },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Cursos de {categoryName}
            </h1>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              {categoryCourses.length > 0
                ? `Explore nossos ${categoryCourses.length} curso${categoryCourses.length > 1 ? "s" : ""} na area de ${categoryName}`
                : `Em breve teremos cursos disponiveis na area de ${categoryName}`}
            </p>
          </div>
        </div>
        <CourseGrid category={categoryName} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
