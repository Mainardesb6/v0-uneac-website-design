"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { InstagramVideoPlayer } from "@/components/instagram-video-player"
import {
  MapPin,
  Award,
  CreditCard,
  BookOpen,
  Star,
  CheckCircle2,
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
    image: "/images/courses/massagem-relaxante-profissional.jpg",
    category: "Terapias Integrativas",
  
  },
]

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function CursosPresenciaisPage() {
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted">
          <div className="absolute inset-0 z-0 opacity-5">
            <img src="/uneac-logo.jpg" alt="" className="w-full h-full object-contain" />
          </div>

          <div className="container relative z-10 px-4 py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <Badge className="bg-primary/10 text-primary px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Cursos Presenciais UNEAC
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
                Aprenda na Prática, <span className="text-primary">Transforme sua Carreira</span>
              </h1>

              <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl text-pretty leading-relaxed">
                Nossos cursos presenciais oferecem uma experiência de aprendizado única, com prática guiada por
                especialistas, certificação reconhecida e metodologia desenvolvida para quem busca resultados reais no
                mercado de trabalho.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Certificação Reconhecida</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Aulas Presenciais</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Pagamento Facilitado</span>
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

            <div className="space-y-16 max-w-6xl mx-auto">
              {cursosPresenciais.map((curso, index) => (
                <div
                  key={curso.id}
                  className="group relative bg-card rounded-2xl overflow-hidden shadow-lg border border-border"
                >
                  

                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                    {/* Video Section */}
                    <div
                      className={`bg-gradient-to-br from-primary/5 to-background p-6 md:p-8 pt-16 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                    >
                      <div className="space-y-6">
                        {curso.videos.map((videoUrl, idx) => (
                          <div key={idx} className="max-w-lg mx-auto">
                            <InstagramVideoPlayer videoUrl={videoUrl} />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8 pt-16 lg:pt-8">
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

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          onClick={() => handleInscricao(curso.title)}
                          className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-6 text-base"
                        >
                          <WhatsAppIcon className="w-5 h-5 mr-2" />
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
                    </div>
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
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Prática Intensiva</h3>
                <p className="text-sm text-muted-foreground">
                  Aprenda fazendo, com supervisão de especialistas experientes
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Certificação Válida</h3>
                <p className="text-sm text-muted-foreground">Certificado reconhecido para atuar profissionalmente</p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Mercado em Alta</h3>
                <p className="text-sm text-muted-foreground">Área de terapias integrativas em constante crescimento</p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Transforme Vidas</h3>
                <p className="text-sm text-muted-foreground">
                  Ajude pessoas a terem mais qualidade de vida e bem-estar
                </p>
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
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              Falar com um Consultor
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
