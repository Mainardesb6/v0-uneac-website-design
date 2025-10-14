import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
      {/* Background split with diagonal accent */}
      <div className="absolute inset-0 z-0">
        {/* Blue background (left side) */}
        <div className="absolute inset-0 bg-[#003366]" style={{ clipPath: "polygon(0 0, 62% 0, 52% 100%, 0 100%)" }} />

        {/* Cyan diagonal accent */}
        <div
          className="absolute inset-0 bg-[#00AEEF]"
          style={{ clipPath: "polygon(52% 0, 62% 0, 52% 100%, 42% 100%)" }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[85vh]">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8 py-12 lg:py-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white text-balance">
              A Excelência que seu Futuro Profissional Exige
            </h1>

            {/* MEC Badge */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00AEEF] flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-white" strokeWidth={3} />
              </div>
              <div>
                <p className="text-white font-semibold text-lg">Instituição</p>
                <p className="text-white font-semibold text-lg">Credenciada MEC</p>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#00AEEF] border-2 border-[#003366] flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00AEEF] border-2 border-[#003366] flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00AEEF] border-2 border-[#003366] flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-white font-semibold text-xl">+10.000 Alunos Formados</p>
            </div>

            {/* Supporting Text */}
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed max-w-xl">
              Cursos de ponta com certificado para você se destacar no mercado.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-white font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/cursos">Quero Transformar Minha Carreira</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#00AEEF] text-white hover:bg-[#00AEEF]/10 font-semibold px-8 py-6 text-base bg-transparent"
              >
                <Link href="/cursos">Ver Todos os Cursos</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Professional Image */}
          <div className="relative lg:flex justify-end items-center hidden">
            <div className="relative w-full max-w-md">
              <img src="/professional-woman-in-business-suit-with-arms-cros.jpg" alt="Profissional UNEAC" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
