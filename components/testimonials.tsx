"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useEffect, useRef } from "react"

const testimonials = [
  {
    name: "Adejane Pinheiro Mendes",
    text: "Nossa tudo foi incrível, mas gostei muito da professora Renata",
    timeAgo: "6 meses atrás",
  },
  {
    name: "Celina Cardoso de Sá",
    text: "Foi muito boa aprendi mais e vou seguir aprendendo com todos esses excelente professores",
    timeAgo: "3 meses atrás",
  },
  {
    name: "Adriana Maria Brito Lopes",
    text: "Uma experiência excelente, professores com alto conhecimento na área, bem preparados. Tema bem explicado.",
    timeAgo: "7 meses atrás",
  },
  {
    name: "Alessandra Mallmann",
    text: "Estudar sempre é importante, ainda mais nós professores que estamos inseridos na sala de aula, tão diversa e dinâmica, precisamos estar atualizados para dar conta da demanda! Vou participar de outros cursos, sempre que possível! Ótimas contribuições.",
    timeAgo: "1 ano atrás",
  },
  {
    name: "Selma Moreira Lara Jorge",
    text: "Foi um curso maravilhoso, esclarecedor! Possibilitou com que as principais dúvidas a respeito da educação especial fossem sanadas e o assunto tratado de uma forma mais tranquila e calma para os professores da educação especial.",
    timeAgo: "1 ano atrás",
  },
  {
    name: "Carol Fernandes Fernandes",
    text: "Aprendi muito em tão pouco tempo, sou professora e com certeza levarei essas contribuições para minha vida na educação.",
    timeAgo: "1 ano atrás",
  },
  {
    name: "Rita Cordeiro de Oliveira Fernandes",
    text: "Todos os Cursos da UNEAC do qual tenho participado são excelentes. Muito bem organizado e os professores apresentam de forma clara, objetiva. Meus parabéns a todos envolvidos neste trabalho. Gratidão sem fim.",
    timeAgo: "7 meses atrás",
  },
  {
    name: "Rosmari Lima",
    text: "Os cursos que eu participei foram ótimos, os professores são bem preparados e dominam o conteúdo, isto é maravilhoso pois dependendo da dúvida eles vão além na explicação, não ficam enrolando. Os cursos também tem um grande diferencial, não tem no mercado, isso faz toda a diferença.",
    timeAgo: "2 anos atrás",
  },
  {
    name: "Anna Katz",
    text: "Adorei todos os cursos que já fiz. O certificado é de simples visualização e impressão. Tenho compartilhado os links com outras professoras que assim como eu também estão gostando. Muito obrigada.",
    timeAgo: "2 anos atrás",
  },
  {
    name: "Rita Marinho Ribeiro",
    text: "O curso foi muito bem explanado, com professores capacitados e muita informação que estávamos precisando veio com uma leveza nas palavras que só tenho a dizer Gratidão.",
    timeAgo: "1 ano atrás",
  },
  {
    name: "Arlice Monteiro",
    text: "Ótima experiência. Conhecimento nunca é demais e vocês da Uneac nos proporcionam momentos maravilhosos de aprendizado. Compartilhar, interagir e auxiliar na formação do professor é dar a oportunidade de melhorar o desenvolvimento profissional e de ensino. Obrigada.",
    timeAgo: "2 anos atrás",
  },
  {
    name: "Marcilene Silvia Garcia",
    text: "Excelente como sempre! Parabéns aos professores por nós proporcionar tanta sabedoria.",
    timeAgo: "1 ano atrás",
  },
  {
    name: "Valena Rodrigues",
    text: "O Instituto UNEAC oferta cursos de qualidade, com professores de excelência na teoria e práticas sobre as temáticas abordadas. E na modalidade Online de acesso a todos e em horários flexíveis no turno da noite. Muito bom para quem já trabalha e estuda.",
    timeAgo: "2 anos atrás",
  },
  {
    name: "Maria Aldete Souza",
    text: "Sou professora transcritora do CAP na UEES Dr José Tadeu Duarte Bastos na cidade de Santarém. Os cursos da UNEAC são apaixonantes. Todas as contribuições são enriquecedoras e de excelência. Falo como professora especialista em Educação Especial, mestrado em Matemática, atuante na modalidade desde 1999. Parabéns!",
    timeAgo: "2 anos atrás",
  },
  {
    name: "Ieda Colussi",
    text: "Quero manifestar meu contentamento, aproveitamento dos cursos que fiz na Uneac, são técnicos e professores habilitados, foi de grande importância na minha faculdade de Letras-Libras.",
    timeAgo: "2 anos atrás",
  },
  {
    name: "Tatiane Santos",
    text: "Experiência excelente com cursos maravilhosos. Essenciais na minha formação enquanto pedagoga em formação.",
    timeAgo: "2 anos atrás",
  },
  {
    name: "Márcia Barros",
    text: "Parabenizo a Uneac pela excelência de seus professores e cursos, garantindo qualidade ao processo de formação docente.",
    timeAgo: "2 anos atrás",
  },
]

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollInterval: NodeJS.Timeout

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += 1
        }
      }, 30)
    }

    startScroll()

    const handleMouseEnter = () => clearInterval(scrollInterval)
    const handleMouseLeave = () => startScroll()

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      clearInterval(scrollInterval)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            O que Nossos Alunos Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Mais de 8 mil avaliações positivas no Google com nota máxima. Veja o que nossos alunos dizem sobre a UNEAC
          </p>
        </div>

        <div ref={scrollRef} className="flex gap-6 overflow-x-hidden pb-4" style={{ scrollBehavior: "smooth" }}>
          {/* Duplicate testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card
              key={index}
              className="bg-background border-border/50 hover:shadow-md transition-shadow flex-shrink-0 w-[350px]"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground mb-6 leading-relaxed line-clamp-4">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.timeAgo}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
