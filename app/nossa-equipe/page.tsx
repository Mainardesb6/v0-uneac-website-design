import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Heart, Lightbulb, Users } from "lucide-react"

export default function NossaEquipePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossa Equipe</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça as pessoas que tornam a UNEAC uma referência em educação de qualidade
            </p>
          </div>
        </section>

        {/* Director Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="border-primary/20">
                <CardContent className="p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Photo */}
                    <div className="md:col-span-1">
                      <div className="aspect-square rounded-lg overflow-hidden bg-white">
                        <img
                          src="/images/maria-rita-martins.png"
                          alt="Maria Rita Martins - Diretora UNEAC"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <h3 className="text-xl font-bold text-foreground">Maria Rita Martins</h3>
                        <p className="text-sm text-muted-foreground">Fisioterapeuta e Pedagoga</p>
                        <div className="flex justify-center gap-2 mt-2">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            Especialista em Docência
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Biography */}
                    <div className="md:col-span-2 space-y-4">
                      <div className="prose prose-gray max-w-none">
                        <p className="text-base text-muted-foreground leading-relaxed text-justify">
                          Sou fisioterapeuta e pedagoga, especialista em Docência do Ensino Superior, com mais de seis
                          anos de experiência como professora universitária. Nesse mesmo período, atuo também como
                          diretora da UNEAC Cursos, onde coordeno e organizo cursos de capacitação voltados para
                          profissionais e estudantes da saúde e da educação.
                        </p>

                        <p className="text-base text-muted-foreground leading-relaxed text-justify">
                          Minha trajetória combina a prática clínica com a paixão pelo ensino, o que me levou a
                          aprofundar conhecimentos em diferentes áreas da fisioterapia — e também em projetos de caráter
                          educacional e psicopedagógico, abrangendo temas como TDAH, ABA, DUA na educação infantil e
                          avaliação psicoeducacional.
                        </p>

                        <p className="text-base text-muted-foreground leading-relaxed text-justify">
                          Acredito na educação como ferramenta de transformação e busco unir ciência, prática e didática
                          para formar alunos e colegas de profissão preparados para os desafios do mercado e
                          comprometidos com a construção de uma sociedade mais justa e humana. Tenho orgulho de atuar de
                          maneira interdisciplinar, transitando entre saúde e educação, e de investir constantemente em
                          inovação, qualidade e impacto social nos projetos que desenvolvo.
                        </p>

                        <p className="text-base text-muted-foreground leading-relaxed text-justify">
                          E acima de tudo, sou mãe da Malu em tempo integral, aprendendo diariamente com a maternidade
                          sobre resiliência, empatia e amor incondicional — valores que também levo para minha vida
                          profissional e acadêmica.
                        </p>

                        <p className="text-base text-muted-foreground leading-relaxed text-justify font-medium">
                          Quem sou eu? Uma mulher que acredita no poder do conhecimento, na força da dedicação e na
                          importância de cuidar das pessoas em todas as dimensões: corpo, mente e coração.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Excelência</h3>
                    <p className="text-sm text-muted-foreground">
                      Compromisso com a qualidade acadêmica e profissional
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Empatia</h3>
                    <p className="text-sm text-muted-foreground">Cuidado e atenção com cada aluno e profissional</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Inovação</h3>
                    <p className="text-sm text-muted-foreground">Métodos modernos e tecnologia educacional</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Comunidade</h3>
                    <p className="text-sm text-muted-foreground">Construindo uma rede de profissionais qualificados</p>
                  </CardContent>
                </Card>
              </div>

              {/* Faculty Section */}
              <div className="mt-16">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                  Corpo Docente de Excelência
                </h2>
                <Card className="bg-muted/30">
                  <CardContent className="p-8">
                    <p className="text-lg text-muted-foreground leading-relaxed text-center text-justify max-w-3xl mx-auto">
                      Nossa equipe é formada por <strong>mestres, doutores e especialistas</strong> reconhecidos em suas
                      áreas de atuação. Cada curso conta com professores altamente qualificados que dominam o conteúdo e
                      vão além nas explicações, garantindo uma formação de elevado padrão acadêmico alinhada às demandas
                      do mercado.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
