import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <img src="/uneac-logo.jpg" alt="" className="w-[800px] h-auto" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Mais de 10 mil alunos formados</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-foreground">
            Transforme Sua Carreira com Cursos de <span className="text-primary">Excelência</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Certificados reconhecidos pelo MEC. Estude no seu ritmo, de qualquer lugar. Professores mestres e doutores.
            Invista no seu futuro profissional hoje.
          </p>

          {/* Benefits highlights */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Certificado reconhecido pelo MEC</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Progressão de Carreira</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Horas Complementares</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/cursos">Encontre Seu Curso Agora</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold px-8 py-6 text-lg bg-transparent">
              <Link href="/nossa-equipe">Conheça Nossa Equipe</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
