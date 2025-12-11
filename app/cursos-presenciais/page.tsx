"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Award,
  CreditCard,
  BookOpen,
  Star,
  CheckCircle2,
  MessageCircle,
  CalendarDays,
  Sparkles,
  TrendingUp,
  Heart,
} from "lucide-react"

const cursosPresenciais = [
  {
    id: 1,
    title: "Ventosaterapia",
    subtitle: "O poder da Ventosaterapia ao seu alcance!",
    description:
      "Aprenda na prática a técnica que reduz dores, melhora a circulação, alivia tensões e promove bem-estar — agora pode ser a sua nova habilidade profissional.",
    fullDescription:
      "A UNEAC oferece um curso completo de Ventosaterapia, com prática guiada, certificação reconhecida e metodologia pensada para quem quer atuar com segurança e resultados reais.",
    benefits: ["Aulas presenciais", "Certificação reconhecida", "Pagamento facilitado", "Conteúdo prático e acessível"],
    cta: "Inscreva-se agora e comece hoje mesmo sua jornada no universo das terapias integrativas!",
    videos: ["https://www.instagram.com/reel/DOPEkprDsxH/", "https://www.instagram.com/reel/DRPIRQLjkIN/"],
    image: "/images/courses/ventosaterapia.jpg",
    category: "Terapias Integrativas",
    spots: "Vagas Limitadas",
    highlight: "Mais Procurado",
  },
  {
    id: 2,
    title: "Massagem Relaxante",
    subtitle: "Comece 2026 com uma nova habilidade nas mãos!",
    description:
      "Se você quer iniciar o ano abrindo portas, conquistando novas oportunidades e aprendendo algo que realmente transforma vidas, o curso de Massagem Relaxante da UNEAC é o primeiro passo.",
    fullDescription:
      "Janeiro é o momento perfeito para investir em você e começar o ano fazendo aquilo que traz bem-estar — para você e para quem você atender.",
    benefits: ["Aulas presenciais", "Certificação reconhecida", "Pagamento facilitado", "Conteúdo prático e acessível"],
    cta: "Garanta sua vaga agora e comece 2026 com propósito, aprendizado e novas chances profissionais!",
    videos: ["https://www.instagram.com/reel/DRvDyWzDqCd/"],
    image: "/images/courses/massagem-relaxante.jpg",
    category: "Terapias Integrativas",
    spots: "Turma de Janeiro",
    highlight: "Últimas Vagas",
  },
]

export default function CursosPresenciaisPage() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)

  const whatsappNumber = "5543996430458"

  const handleInscricao = (courseName: string) => {
    const message = encodeURIComponent(
      `Olá! Vim do site da UNEAC e gostaria de fazer minha inscrição no curso de ${courseName}. Podem me ajudar?`,
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  }

  const handleConsultarData = (courseName: string) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no curso de ${courseName}. Quais são as datas disponíveis para as próximas turmas?`,
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section com fundo igual a home */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background com marca d'água UNEAC */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003366] via-[#004080] to-[#002244]">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' fontSize='24' fill='white' textAnchor='middle' dominantBaseline='middle' fontFamily='Arial, sans-serif' fontWeight='bold'%3EUNEAC%3C/text%3E%3C/svg%3E")`,
                backgroundSize: "200px 200px",
              }}
            />
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#00AEEF]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#00AEEF]/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#00AEEF] text-white px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Cursos Presenciais UNEAC
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Aprenda na Prática, <br />
              <span className="text-[#00AEEF]">Transforme sua Carreira</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Nossos cursos presenciais oferecem uma experiência de aprendizado única, com prática guiada por
              especialistas, certificação reconhecida e metodologia desenvolvida para quem busca resultados reais no
              mercado de trabalho.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-[#00AEEF]" />
                <span className="text-white text-sm font-medium">Certificação Reconhecida</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 text-[#00AEEF]" />
                <span className="text-white text-sm font-medium">Aulas Presenciais</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CreditCard className="w-5 h-5 text-[#00AEEF]" />
                <span className="text-white text-sm font-medium">Pagamento Facilitado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Escolha seu Curso</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Invista em você com cursos práticos que abrem portas para novas oportunidades profissionais
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {cursosPresenciais.map((curso) => (
              <div
                key={curso.id}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Badge de destaque */}
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <Badge className="bg-[#00AEEF] text-white font-semibold px-3 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    {curso.highlight}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <Badge variant="destructive" className="font-semibold px-3 py-1 animate-pulse">
                    {curso.spots}
                  </Badge>
                </div>

                {/* Imagem do curso */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={curso.image || "/placeholder.svg"}
                    alt={curso.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Categoria */}
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {curso.category}
                    </Badge>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{curso.title}</h3>
                  <p className="text-[#00AEEF] font-semibold text-lg mb-4">{curso.subtitle}</p>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{curso.description}</p>

                  <p className="text-foreground/80 mb-6 leading-relaxed">{curso.fullDescription}</p>

                  {/* Benefícios */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {curso.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Text */}
                  <div className="bg-gradient-to-r from-[#003366]/10 to-[#00AEEF]/10 rounded-lg p-4 mb-6 border-l-4 border-[#00AEEF]">
                    <p className="text-foreground font-medium text-sm">{curso.cta}</p>
                  </div>

                  {/* Botões de ação */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => handleInscricao(curso.title)}
                      className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-6 text-base"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Fazer Inscrição
                    </Button>
                    <Button
                      onClick={() => handleConsultarData(curso.title)}
                      variant="outline"
                      className="flex-1 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white font-semibold py-6 text-base"
                    >
                      <CalendarDays className="w-5 h-5 mr-2" />
                      Consultar Datas
                    </Button>
                  </div>

                  {/* Links dos vídeos */}
                  {curso.videos.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-2">Veja mais sobre o curso:</p>
                      <div className="flex flex-wrap gap-2">
                        {curso.videos.map((video, idx) => (
                          <a
                            key={idx}
                            href={video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-[#E4405F] hover:underline font-medium"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            Vídeo {idx + 1}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Por que escolher a UNEAC?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Mais do que certificação, oferecemos uma transformação profissional completa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#00AEEF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7 text-[#00AEEF]" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Prática Intensiva</h3>
              <p className="text-sm text-muted-foreground">
                Aprenda fazendo, com supervisão de especialistas experientes
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#00AEEF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-[#00AEEF]" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Certificação Válida</h3>
              <p className="text-sm text-muted-foreground">Certificado reconhecido para atuar profissionalmente</p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#00AEEF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7 text-[#00AEEF]" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Mercado em Alta</h3>
              <p className="text-sm text-muted-foreground">Área de terapias integrativas em constante crescimento</p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#00AEEF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-[#00AEEF]" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Transforme Vidas</h3>
              <p className="text-sm text-muted-foreground">Ajude pessoas a terem mais qualidade de vida e bem-estar</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#003366] to-[#004080]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Não perca essa oportunidade!</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            As vagas são limitadas e as turmas fecham rápido. Garanta seu lugar e comece sua jornada nas terapias
            integrativas.
          </p>
          <Button
            onClick={() => {
              const message = encodeURIComponent(
                "Olá! Vim do site da UNEAC e tenho interesse nos cursos presenciais de terapias integrativas. Podem me dar mais informações?",
              )
              window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
            }}
            size="lg"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-8 py-6 text-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar com um Consultor
          </Button>
        </div>
      </section>
    </div>
  )
}
