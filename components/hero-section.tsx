import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#003366]">
      {/* Background with cyan diagonal accent in top right */}
      <div className="absolute inset-0 z-0">
        {/* Cyan diagonal accent - top right corner */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-[#00AEEF]"
          style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 70% 100%)" }}
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

            <div className="flex flex-wrap items-center gap-6 lg:gap-8">
              {/* MEC Badge */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#00AEEF] flex items-center justify-center ring-4 ring-[#00AEEF]/20">
                  <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">Instituição</p>
                  <p className="text-white font-semibold text-sm leading-tight">Credenciada MEC</p>
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-[#003366] flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#003366]" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-[#003366] flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#003366]" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-[#003366] flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#003366]" />
                  </div>
                </div>
                <p className="text-white font-semibold text-lg">+10.000 Alunos Formados</p>
              </div>
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
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base bg-transparent"
              >
                <Link href="/cursos">Ver Todos os Cursos</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Professional Image */}
          <div className="relative lg:flex justify-end items-center hidden">
            <div className="relative w-full max-w-md">
              <img
                src="/professional-woman-gray-suit.jpg"
                alt="Profissional UNEAC"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
