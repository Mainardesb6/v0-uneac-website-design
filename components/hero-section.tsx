import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, TrendingUp, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted">
      <div className="absolute inset-0 z-0 opacity-5">
        <img src="/uneac-logo.jpg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Award className="h-4 w-4" />
            Mais de 10 mil alunos formados
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Transforme Sua Carreira com Cursos de <span className="text-primary">Excelência</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl text-pretty">
            Certificados reconhecidos pelo MEC. Estude no seu ritmo, de qualquer lugar. Professores mestres e doutores.
            Invista no seu futuro profissional hoje.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span>Certificado reconhecido pelo MEC</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Progressão de Carreira</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span>Horas Complementares</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="text-base">
              <Link href="/cursos">Encontre Seu Curso Agora</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
              <Link href="/nossa-equipe">Conheça Nossa Equipe</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
