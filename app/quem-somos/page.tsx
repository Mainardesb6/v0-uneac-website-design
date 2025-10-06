import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, MapPin, Phone, Heart, Lightbulb } from "lucide-react"

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Conheça a UNEAC</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa história, missão e compromisso com a educação de qualidade
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-4">Nossa História</h2>
                <p className="text-base text-muted-foreground leading-relaxed text-justify">
                  A União Educacional e Administrativa de Cursos (UNEAC) iniciou suas atividades em 2015, na cidade de
                  Jacarezinho, Paraná, com a oferta de cursos presenciais de pós-graduação e extensão. Devido à
                  crescente demanda, a empresa expandiu rapidamente sua atuação para outras cidades da região norte do
                  estado, como Cornélio Procópio, Carlópolis, Congonhinhas e Ibaiti, mantendo sua sede administrativa em
                  Jacarezinho.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed text-justify">
                  A partir de 2022, diante das transformações impostas pela pandemia, a UNEAC passou por um processo de
                  reestruturação e inovação, incorporando a modalidade de ensino online. Nesse contexto, passou a
                  ofertar cursos ao vivo e gravados, ampliando significativamente seu alcance. Essa mudança consolidou a
                  proposta de uma educação transformadora e acessível, permitindo que a instituição alcançasse
                  estudantes de diferentes regiões do Brasil, totalizando, ao longo dos anos, mais de dez mil alunos
                  atendidos.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Missão, Visão e Valores</h2>
                <p className="text-base text-muted-foreground leading-relaxed text-justify">
                  A UNEAC tem como missão promover educação continuada de excelência, pautada na qualidade pedagógica,
                  no compromisso social e na valorização do desenvolvimento humano. Sua visão consiste em consolidar-se
                  como referência no cenário educacional brasileiro, por meio da inovação e da democratização do acesso
                  ao conhecimento. Entre seus valores destacam-se a ética, a responsabilidade social, a valorização da
                  diversidade, a acessibilidade e a busca pela constante atualização científica e tecnológica.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Excelência Acadêmica</h2>
                <p className="text-base text-muted-foreground leading-relaxed text-justify">
                  A empresa possui um corpo docente altamente qualificado, formado por mestres, doutores e profissionais
                  reconhecidos em suas áreas de atuação, assegurando aos alunos uma formação de elevado padrão acadêmico
                  e alinhada às demandas do mercado. Além disso, a UNEAC não se restringe apenas a cursos pagos, mas
                  também promove iniciativas sociais por meio da oferta de cursos gratuitos, reafirmando seu compromisso
                  com a democratização do saber.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Inovação e Tecnologia</h2>
                <p className="text-base text-muted-foreground leading-relaxed text-justify">
                  No campo da inovação tecnológica, a instituição destaca-se pela utilização de recursos digitais
                  interativos e metodologias diferenciadas de ensino, que aproximam a experiência do aluno à prática
                  profissional. Sua atuação nas plataformas digitais, como Instagram e grupos de WhatsApp, fortaleceu a
                  divulgação e comercialização dos cursos. Contudo, em fevereiro de 2025, a UNEAC enfrentou o banimento
                  injustificado de sua conta no WhatsApp, episódio que acarretou significativo prejuízo financeiro. Após
                  a reversão da situação, a empresa investiu em novas estratégias de divulgação, incluindo o
                  fortalecimento de seu site institucional, que se consolidou como ferramenta estável e eficaz para
                  promoção de cursos e interação com os estudantes.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Nossa Relevância</h2>
                <p className="text-base text-muted-foreground leading-relaxed text-justify">
                  A relevância da UNEAC é, portanto, resultado de sua trajetória de crescimento contínuo, da qualidade
                  de seu corpo docente, do compromisso com a transformação social e do investimento constante em
                  inovação. Dessa forma, a instituição consolidou-se como um agente educacional de destaque, impactando
                  positivamente a vida de milhares de alunos em todo o território nacional.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-muted/30 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Entre em Contato</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">
                      Avenida Getúlio Vargas, 750 - Centro, Jacarezinho - PR
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">(043) 9 9643-0458</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  Entre em contato conosco ou com um de nossos coordenadores em suas respectivas cidades. Venha e faça
                  sua inscrição.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Missão</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Promover educação continuada de excelência com qualidade pedagógica e compromisso social
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Visão</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Consolidar-se como referência educacional através da inovação e democratização do conhecimento
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Valores</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Ética, responsabilidade social, diversidade, acessibilidade e atualização constante
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Impacto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Mais de 10 mil alunos atendidos em todo o território nacional desde 2015
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
