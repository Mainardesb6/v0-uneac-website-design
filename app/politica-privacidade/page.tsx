import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Política de Privacidade</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Última atualização: Fevereiro de 2025</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-gray">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A UNEAC - União Educacional e Administrativa de Cursos (CNPJ: 19.993.130/0001-09) está comprometida com
                a proteção da privacidade e dos dados pessoais de seus usuários. Esta Política de Privacidade descreve
                como coletamos, usamos, armazenamos e protegemos suas informações pessoais em conformidade com a Lei
                Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">2. Dados Coletados</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Coletamos os seguintes tipos de dados:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Dados de identificação: nome completo, CPF, RG, data de nascimento</li>
                <li>Dados de contato: e-mail, telefone, endereço</li>
                <li>Dados acadêmicos: formação, área de atuação, instituição de ensino</li>
                <li>Dados de navegação: endereço IP, cookies, páginas visitadas</li>
                <li>Dados de pagamento: informações de transações financeiras (processadas por terceiros seguros)</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">3. Finalidade do Uso dos Dados</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Utilizamos seus dados para:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Processar matrículas e emitir certificados</li>
                <li>Comunicar informações sobre cursos, eventos e novidades</li>
                <li>Melhorar nossos serviços e experiência do usuário</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Prevenir fraudes e garantir a segurança da plataforma</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartilhamento de Dados</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais. Seus
                dados podem ser compartilhados apenas com:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Instituições parceiras para emissão de certificados (Faculdade Dom Bosco de Cornélio Procópio)</li>
                <li>Processadores de pagamento para transações financeiras</li>
                <li>Autoridades governamentais quando exigido por lei</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">5. Segurança dos Dados</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não
                autorizado, perda, destruição ou alteração. Utilizamos criptografia, firewalls e controles de acesso
                rigorosos.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">6. Seus Direitos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">De acordo com a LGPD, você tem direito a:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Revogar o consentimento</li>
                <li>Solicitar a portabilidade dos dados</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Utilizamos cookies para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar
                conteúdo. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">8. Retenção de Dados</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política,
                salvo quando a lei exigir um período de retenção mais longo.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">9. Alterações nesta Política</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças
                significativas por e-mail ou através de aviso em nosso site.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contato</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato conosco:
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
