import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function TermosUsoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Termos de Uso</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Última atualização: Fevereiro de 2025</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-gray">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ao acessar e utilizar o site da UNEAC - União Educacional e Administrativa de Cursos (CNPJ:
                19.993.130/0001-09), você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não
                concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">2. Descrição dos Serviços</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A UNEAC oferece cursos de extensão online nas áreas de Educação, Educação Especial, Filosofia, História,
                Letras, Libras, Saúde e Educação Ambiental. Os certificados são emitidos pela Faculdade Dom Bosco de
                Cornélio Procópio, instituição de ensino superior credenciada pelo MEC.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">3. Cadastro e Conta do Usuário</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para acessar determinados serviços, você deve criar uma conta fornecendo informações precisas, completas
                e atualizadas. Você é responsável por:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Manter a confidencialidade de sua senha</li>
                <li>Todas as atividades realizadas em sua conta</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">4. Matrículas e Pagamentos</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As matrículas são confirmadas após o pagamento integral do curso. Os valores e condições de pagamento
                estão especificados em cada curso. Não oferecemos reembolso após o início do curso, exceto em casos
                previstos em lei ou mediante análise individual.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">5. Certificados</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Os certificados são emitidos digitalmente após a conclusão do curso e aprovação nas avaliações, quando
                aplicável. O certificado é válido em todo o território nacional e pode ser utilizado para progressão de
                carreira, licença capacitação, horas complementares e valorização do currículo.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">6. Propriedade Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Todo o conteúdo disponibilizado nos cursos (textos, vídeos, imagens, materiais didáticos) é de
                propriedade da UNEAC ou de seus parceiros e está protegido por leis de direitos autorais. É proibida a
                reprodução, distribuição ou uso comercial sem autorização prévia.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">7. Conduta do Usuário</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ao utilizar nossos serviços, você concorda em:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Não violar leis ou regulamentos aplicáveis</li>
                <li>Não compartilhar credenciais de acesso com terceiros</li>
                <li>Não copiar, distribuir ou modificar conteúdos protegidos</li>
                <li>Não utilizar o site para fins fraudulentos ou maliciosos</li>
                <li>Respeitar outros usuários e professores</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A UNEAC não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais decorrentes do
                uso ou impossibilidade de uso de nossos serviços, incluindo, mas não se limitando a, problemas técnicos,
                interrupções de serviço ou perda de dados.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">9. Modificações nos Termos</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em
                vigor imediatamente após sua publicação no site. O uso continuado dos serviços após as modificações
                constitui aceitação dos novos termos.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">10. Rescisão</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Podemos suspender ou encerrar sua conta e acesso aos serviços a qualquer momento, sem aviso prévio, em
                caso de violação destes Termos de Uso ou por qualquer outro motivo que consideremos apropriado.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">11. Lei Aplicável</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa
                decorrente destes termos será submetida ao foro da comarca de Jacarezinho, Paraná.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">12. Contato</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Para dúvidas ou questões sobre estes Termos de Uso, entre em contato conosco:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 mb-6">
                <li>
                  <strong>E-mail:</strong> cursosjacarezinho@gmail.com
                </li>
                <li>
                  <strong>WhatsApp:</strong> (43) 99643-0458
                </li>
                <li>
                  <strong>Endereço:</strong> Avenida Getúlio Vargas, 785 - Centro, Jacarezinho - PR
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
