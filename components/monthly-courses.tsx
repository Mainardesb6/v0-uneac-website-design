"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, GraduationCap, MessageCircle } from "lucide-react"
import { createBrowserClient } from "@/lib/supabase/client"
import { InstagramVideoPlayer } from "@/components/instagram-video-player"

interface MonthlyCourse {
  id: number
  title: string
  description: string
  instructor: string
  dates: string
  time: string
  month: string
  year: number
  video_url: string | null
  whatsapp_message: string
}

export function MonthlyCourses() {
  const [courses, setCourses] = useState<MonthlyCourse[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createBrowserClient()

  useEffect(() => {
    async function fetchCourses() {
      const { data, error } = await supabase
        .from("monthly_courses")
        .select("*")
        .eq("month", "Outubro")
        .eq("year", 2025)
        .order("id", { ascending: true })

      if (error) {
        console.error("[v0] Error fetching monthly courses:", error)
      } else {
        setCourses(data || [])
      }
      setLoading(false)
    }

    fetchCourses()
  }, [])

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "5543996430458" // TODO: Replace with actual UNEAC WhatsApp number
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-6 bg-muted rounded w-3/4 mb-2" />
                <div className="h-4 bg-muted rounded w-1/2" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded" />
                  <div className="h-4 bg-muted rounded" />
                  <div className="h-4 bg-muted rounded w-5/6" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (courses.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">Nenhum curso mensal disponível no momento.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <Badge variant="secondary" className="text-lg px-4 py-2">
          {courses[0]?.month}/{courses[0]?.year}
        </Badge>
      </div>

      {courses[0]?.video_url && (
        <div className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Conheça Nossos Cursos de Outubro</h2>
            <p className="text-muted-foreground">
              Assista ao vídeo e descubra todos os detalhes sobre nossa programação
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <InstagramVideoPlayer videoUrl={courses[0].video_url} />
          </div>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {courses.map((course, index) => (
          <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-2 mb-2">
                <Badge variant="outline" className="shrink-0">
                  Curso {index + 1}
                </Badge>
              </div>
              <CardTitle className="text-xl leading-tight">{course.title}</CardTitle>
              <CardDescription className="flex items-center gap-2 mt-2">
                <GraduationCap className="h-4 w-4 shrink-0" />
                <span className="text-sm">{course.instructor}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary shrink-0" />
                  <span>{course.dates}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary shrink-0" />
                  <span>{course.time}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => handleWhatsAppClick(course.whatsapp_message)}>
                <MessageCircle className="mr-2 h-4 w-4" />
                Garantir Vaga
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">✨ Todos os cursos são reconhecidos pelo MEC</p>
      </div>
    </div>
  )
}
