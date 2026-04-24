import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { CourseDetail } from "@/components/course-detail"
import { Breadcrumb } from "@/components/breadcrumb"
import { getCourseById, courses } from "@/lib/courses-data"

interface CoursePageProps {
  params: { id: string }
}

// Gera metadata dinamica para SEO
export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = getCourseById(Number.parseInt(params.id))
  
  if (!course) {
    return {
      title: "Curso nao encontrado | CURSOS UNEAC",
      description: "O curso que voce esta procurando nao existe.",
    }
  }

  const baseUrl = "https://cursosuneac.com.br"
  const description = course.description.split("\n")[0].substring(0, 160)

  return {
    title: `${course.title} | CURSOS UNEAC`,
    description,
    keywords: [course.category, "curso online", "capacitacao", "UNEAC", ...course.targetAudience],
    openGraph: {
      title: `${course.title} | CURSOS UNEAC`,
      description,
      url: `${baseUrl}/curso/${course.id}`,
      siteName: "CURSOS UNEAC",
      images: [
        {
          url: course.image.startsWith("http") ? course.image : `${baseUrl}${course.image}`,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | CURSOS UNEAC`,
      description,
      images: [course.image.startsWith("http") ? course.image : `${baseUrl}${course.image}`],
    },
    alternates: {
      canonical: `${baseUrl}/curso/${course.id}`,
    },
  }
}

// Gera parametros estaticos para SSG
export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id.toString(),
  }))
}

// JSON-LD Schema.org para Course
function CourseJsonLd({ course }: { course: NonNullable<ReturnType<typeof getCourseById>> }) {
  const baseUrl = "https://cursosuneac.com.br"
  const hourOptions = course.hourOptions || [{ hours: 40, price: 95 }, { hours: 80, price: 155 }, { hours: 100, price: 185 }]
  const lowestPrice = Math.min(...hourOptions.map(o => o.price))
  const highestPrice = Math.max(...hourOptions.map(o => o.price))

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description.split("\n")[0],
    provider: {
      "@type": "Organization",
      name: "CURSOS UNEAC",
      sameAs: baseUrl,
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: lowestPrice,
      highPrice: highestPrice,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/curso/${course.id}`,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: `PT${hourOptions[0].hours}H`,
    },
    ...(course.instructor && {
      instructor: {
        "@type": "Person",
        name: course.instructor.replace(/^(Professor|Professora|Prof\.|Profa\.) /, ""),
      },
    }),
    educationalLevel: "Professional",
    inLanguage: "pt-BR",
    image: course.image.startsWith("http") ? course.image : `${baseUrl}${course.image}`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function CursoPage({ params }: CoursePageProps) {
  const course = getCourseById(Number.parseInt(params.id))

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main" className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Curso nao encontrado</h1>
            <p className="text-muted-foreground">O curso que voce esta procurando nao existe.</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const breadcrumbItems = [
    { label: "Cursos", href: "/cursos" },
    { label: course.category, href: `/categoria/${course.category.toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}` },
    { label: course.title },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <CourseJsonLd course={course} />
      <Header />
      <main id="main" className="flex-1">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <CourseDetail course={course} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
