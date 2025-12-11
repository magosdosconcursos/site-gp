import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Gabaritei Pedagogia',
  description: 'Política de Privacidade e Proteção de Dados - Gabaritei Pedagogia. Conheça como tratamos seus dados pessoais de acordo com a LGPD.',
}

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[var(--b1)] via-[var(--b2)] to-[var(--b3)] py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-8 text-center">
          Política de Privacidade
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <p className="mb-4">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </p>
            <p className="mb-4">
              A <strong>Gabaritei Pedagogia</strong>, inscrita no CNPJ sob o nº <strong>60.295.217/0001-06</strong>,
              está comprometida em proteger a privacidade e os dados pessoais de seus usuários, em conformidade com a
              Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
            <p>
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações
              pessoais quando você interage com nosso site e serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4 mt-8">
              1. Informações que Coletamos
            </h2>
            <p className="mb-3">Podemos coletar as seguintes categorias de informações:</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">1.1. Dados Fornecidos por Você</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Dados de Contato:</strong> Nome, e-mail, telefone e outras informações fornecidas através de formulários de contato.</li>
              <li><strong>Dados de Comunicação:</strong> Informações compartilhadas via WhatsApp, e-mail ou outros canais de comunicação.</li>
              <li><strong>Dados de Interesse:</strong> Informações sobre cursos de interesse e preferências educacionais.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">1.2. Dados Coletados Automaticamente</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas, tempo de permanência no site.</li>
              <li><strong>Cookies:</strong> Utilizamos cookies para melhorar a experiência do usuário e realizar análises estatísticas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4 mt-8">
              2. Como Utilizamos Seus Dados
            </h2>
            <p className="mb-3">Utilizamos suas informações pessoais para as seguintes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Prestação de Serviços:</strong> Responder às suas solicitações de informações sobre nossos cursos.</li>
              <li><strong>Comunicação:</strong> Enviar informações relevantes sobre cursos, promoções e atualizações (mediante seu consentimento).</li>
              <li><strong>Melhoria dos Serviços:</strong> Analisar o uso do site para aprimorar nossos serviços e conteúdos.</li>
              <li><strong>Cumprimento Legal:</strong> Atender obrigações legais e regulatórias.</li>
              <li><strong>Segurança:</strong> Proteger nossos sistemas contra fraudes e acessos não autorizados.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4 mt-8">
              3. Base Legal para o Tratamento de Dados
            </h2>
            <p className="mb-3">O tratamento de seus dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consentimento:</strong> Quando você nos fornece seus dados voluntariamente através de formulários.</li>
              <li><strong>Execução de Contrato:</strong> Para fornecimento de informações sobre cursos e serviços solicitados.</li>
              <li><strong>Legítimo Interesse:</strong> Para análise e melhoria de nossos serviços.</li>
              <li><strong>Obrigação Legal:</strong> Para cumprimento de obrigações fiscais e regulatórias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4 mt-8">
              4. Compartilhamento de Dados
            </h2>
            <p className="mb-3">
              Não vendemos, alugamos ou comercializamos seus dados pessoais. Podemos compartilhar suas informações apenas nas seguintes situações:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Prestadores de Serviços:</strong> Com parceiros que nos auxiliam na operação do site e prestação de serviços (ex: plataformas de pagamento como Hotmart).</li>
              <li><strong>Obrigações Legais:</strong> Quando exigido por lei, decisão judicial ou autoridade competente.</li>
              <li><strong>Proteção de Direitos:</strong> Para proteger nossos direitos, propriedade ou segurança, bem como de nossos usuários.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4 mt-8">
              5. Armazenamento e Segurança dos Dados
            </h2>
            <p className="mb-3">
              Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado,
              perda, destruição ou alteração:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Criptografia de dados em trânsito e em repouso.</li>
              <li>Controles de acesso restrito aos dados.</li>
              <li>Monitoramento contínuo de segurança.</li>
              <li>Políticas de segurança da informação rigorosas.</li>
            </ul>
            <p className="mt-4">
              Seus dados serão armazenados pelo tempo necessário para as finalidades descritas nesta política ou conforme exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4 mt-8">
              6. Seus Direitos sob a LGPD
            </h2>
            <p className="mb-3">Você possui os seguintes direitos em relação aos seus dados pessoais:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Confirmação e Acesso:</strong> Confirmar a existência de tratamento e acessar seus dados.</li>
              <li><strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
              <li><strong>Anonimização, Bloqueio ou Eliminação:</strong> Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.</li>
              <li><strong>Portabilidade:</strong> Solicitar a portabilidade de seus dados a outro fornecedor.</li>
              <li><strong>Eliminação:</strong> Solicitar a eliminação de dados tratados com base no consentimento.</li>
              <li><strong>Revogação do Consentimento:</strong> Revogar seu consentimento a qualquer momento.</li>
              <li><strong>Oposição:</strong> Opor-se ao tratamento de dados realizado com base em legítimo interesse.</li>
            </ul>
            <p className="mt-4">
              Para exercer seus direitos, entre em contato conosco através dos canais indicados na seção "Contato".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4 mt-8">
              7. Cookies e Tecnologias Similares
            </h2>
            <p className="mb-3">
              Utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação, analisar o tráfego do site e
              personalizar conteúdos. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
            </p>
            <p>
              Ao continuar navegando em nosso site, você concorda com o uso de cookies conforme descrito nesta política.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4 mt-8">
              8. Links para Sites de Terceiros
            </h2>
            <p>
              Nosso site pode conter links para sites de terceiros (como plataformas de pagamento e redes sociais).
              Não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos que você leia as políticas
              de privacidade de cada site que visitar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4 mt-8">
              9. Alterações nesta Política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. A data da última atualização será sempre indicada
              no início deste documento. Recomendamos que você revise esta política regularmente para se manter informado sobre
              como protegemos seus dados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4 mt-8">
              10. Contato e Encarregado de Dados (DPO)
            </h2>
            <p className="mb-3">
              Para exercer seus direitos, esclarecer dúvidas ou fazer reclamações sobre o tratamento de seus dados pessoais,
              entre em contato conosco:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="mb-2"><strong>Gabaritei Pedagogia</strong></p>
              <p className="mb-2">CNPJ: 60.295.217/0001-06</p>
              <p className="mb-2">E-mail: contato@gabariteipedagogia.com.br</p>
              <p className="mb-2">WhatsApp: Disponível através do formulário de contato no site</p>
            </div>
            <p className="mt-4">
              Você também pode entrar em contato com a Autoridade Nacional de Proteção de Dados (ANPD) para esclarecimentos
              adicionais ou para apresentar reclamações.
            </p>
          </section>

          <section className="mt-8 pt-6 border-t border-gray-300">
            <p className="text-center text-gray-600 italic">
              Esta Política de Privacidade está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/"
            className="inline-block px-8 py-3 bg-[var(--primary)] text-white font-bold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Voltar ao Início
          </a>
        </div>
      </div>
    </main>
  )
}
