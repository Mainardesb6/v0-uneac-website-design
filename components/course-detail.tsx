"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Monitor, CheckCircle, ShoppingCart, Award, TrendingUp, BookOpen, Briefcase } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"

interface Course {
  id: number
  title: string
  category: string
  duration: string
  modality: string
  price: string
  totalPrice: string
  image: string
  description: string
  targetAudience: string[]
  curriculum: {
    module: string
    topics: string[]
  }[]
  instructor?: string
}

interface CourseDetailProps {
  course: Course
}

const hourOptions = [
  { hours: 40, price: 95 },
  { hours: 80, price: 155 },
  { hours: 100, price: 185 },
]

export function CourseDetail({ course }: CourseDetailProps) {
  const [selectedHours, setSelectedHours] = useState(hourOptions[0])
  const { dispatch } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    const cartItem = {
      id: `${course.id}-${selectedHours.hours}`,
      courseId: course.id.toString(),
      title: course.title,
      hours: selectedHours.hours,
      price: selectedHours.price,
      category: course.category,
    }

    dispatch({ type: "ADD_ITEM", payload: cartItem })

    toast({
      title: "Curso adicionado ao carrinho!",
      description: `${course.title} (${selectedHours.hours}h) foi adicionado ao seu carrinho.`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Sticky Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="w-fit mx-auto mb-2">
                  {course.category}
                </Badge>
                <CardTitle className="text-xl font-bold text-balance">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-sm">Escolha a Carga Horária do seu Certificado</h3>
                  <div className="space-y-2">
                    {hourOptions.map((option) => (
                      <label
                        key={option.hours}
                        className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors ${
                          selectedHours.hours === option.hours
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="hours"
                            value={option.hours}
                            checked={selectedHours.hours === option.hours}
                            onChange={() => setSelectedHours(option)}
                            className="text-primary focus:ring-primary"
                          />
                          <span className="text-sm font-medium">{option.hours} horas</span>
                        </div>
                        <span className="text-sm font-semibold text-primary">R$ {option.price.toFixed(2)}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="text-center space-y-2 pt-4 border-t">
                  <div className="text-2xl font-bold text-primary">R$ {selectedHours.price.toFixed(2)}</div>
                  <div className="text-sm text-muted-foreground">Certificado de {selectedHours.hours} horas</div>
                </div>

                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Garanta Sua Vaga Agora</span>
                </Button>

                {/* Course Info */}
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">
                      <strong>Carga Horária:</strong> {selectedHours.hours} horas
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Monitor className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">
                      <strong>Modalidade:</strong> Online - Estude em qualquer lugar e conclua no seu ritmo
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">
                      <strong>Certificado:</strong> Emitido pela Faculdade Dom Bosco (Instituição de Ensino Superior
                      credenciada pelo MEC)
                    </span>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <h4 className="font-semibold text-sm text-foreground">Benefícios do Curso:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">Progressão de carreira</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">Adicional de qualificação</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">Licença capacitação</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">Valorização do currículo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">Horas complementares</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Column - Course Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Course Image */}
          <div className="aspect-video overflow-hidden rounded-lg">
            <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-full object-cover" />
          </div>

          {/* About the Course */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Sobre o Curso</h2>
            <div className="prose prose-gray max-w-none">
              {course.description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </section>

          {/* Instructor Section */}
          {course.instructor && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Professor(a)</h2>
              <Card className="bg-muted/30">
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">{course.instructor}</p>
                </CardContent>
              </Card>
            </section>
          )}

          {/* Curriculum */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Conteúdo Programático</h2>
            <Accordion type="single" collapsible className="w-full">
              {course.curriculum.map((module, index) => (
                <AccordionItem key={index} value={`module-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{module.module}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Target Audience */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Público-Alvo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.targetAudience.map((audience, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{audience}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
