import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"
import { courses } from "@/lib/courses-data"

interface CourseGridProps {
  category?: string
}

export function CourseGrid({ category }: CourseGridProps) {
  const filteredCourses = category ? courses.filter((course) => course.category === category) : courses

  if (filteredCourses.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Nenhum curso disponível nesta categoria no momento.</p>
            <Button asChild className="mt-6">
              <Link href="/cursos">Ver Todos os Cursos</Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {course.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold leading-tight text-balance">{course.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {course.description.split("\n")[0]}
                </CardDescription>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-primary">{course.price}</div>
                  <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href={`/curso/${course.id}`}>Saiba Mais</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
