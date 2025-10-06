import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Heart, BookOpen, Users, Landmark, Brain, Scale, Hand, Leaf } from "lucide-react"

const categories = [
  {
    title: "Educação Especial",
    description: "Especialização em atendimento educacional especializado e inclusão",
    icon: Users,
    href: "/categoria/educacao-especial",
  },
  {
    title: "Educação",
    description: "Formação pedagógica e metodologias de ensino modernas",
    icon: GraduationCap,
    href: "/categoria/educacao",
  },
  {
    title: "Saúde",
    description: "Especialização em diversas áreas da saúde e bem-estar",
    icon: Heart,
    href: "/categoria/saude",
  },
  {
    title: "Letras",
    description: "Aprofundamento em linguística, literatura e ensino de idiomas",
    icon: BookOpen,
    href: "/categoria/letras",
  },
  {
    title: "História",
    description: "Estudos históricos, patrimônio cultural e ensino de história",
    icon: Landmark,
    href: "/categoria/historia",
  },
  {
    title: "Filosofia",
    description: "Pensamento crítico, ética e fundamentos filosóficos",
    icon: Brain,
    href: "/categoria/filosofia",
  },
  {
    title: "Direito",
    description: "Formação jurídica e especialização em áreas do direito",
    icon: Scale,
    href: "/categoria/direito",
  },
  {
    title: "Libras",
    description: "Língua Brasileira de Sinais e comunicação inclusiva",
    icon: Hand,
    href: "/categoria/libras",
  },
  {
    title: "Educação Ambiental",
    description: "Sustentabilidade, meio ambiente e consciência ecológica",
    icon: Leaf,
    href: "/categoria/educacao-ambiental",
  },
]

export function CourseCategories() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Navegue por Área de Conhecimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Escolha a área que mais se alinha com seus objetivos profissionais e acadêmicos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </CardDescription>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    <Link href={category.href}>Ver Cursos</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
