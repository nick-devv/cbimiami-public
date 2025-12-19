"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface PrivacyPolicyContentProps {
  enabled?: boolean;
}

export function PrivacyPolicyContent({ enabled = true }: PrivacyPolicyContentProps) {
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState<"privacy" | "terms">(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash === "#terms" || hash === "#termos") {
        return "terms";
      }
      if (hash === "#privacy" || hash === "#privacidade") {
        return "privacy";
      }
    }
    return "privacy";
  });

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === "#terms" || hash === "#termos") {
        setActiveTab("terms");
      } else if (hash === "#privacy" || hash === "#privacidade") {
        setActiveTab("privacy");
      }
    };

    checkHash();
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#terms" || hash === "#termos") {
        setActiveTab("terms");
      } else if (hash === "#privacy" || hash === "#privacidade") {
        setActiveTab("privacy");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleTabChange = (tab: "privacy" | "terms") => {
    setActiveTab(tab);
    const hash = tab === "privacy" ? "#privacy" : "#terms";
    window.history.pushState(null, "", `${pathname}${hash}`);
  };

  if (!enabled) return null;

  return (
    <section className="section">
      <div className="container max-w-5xl">
        {}
        <div className="mb-10">
          <div className="flex border-b border-white">
            <button
              onClick={() => handleTabChange("privacy")}
              className={`flex-1 bg-transparent px-4 py-3 text-center text-xl font-bold transition-colors ${
                activeTab === "privacy"
                  ? "border-b-[3px] border-primary text-primary"
                  : "text-primary-dark"
              }`}
            >
              Política de privacidade
            </button>
            <button
              onClick={() => handleTabChange("terms")}
              className={`flex-1 bg-transparent px-4 py-3 text-center text-xl font-bold transition-colors ${
                activeTab === "terms"
                  ? "border-b-[3px] border-primary text-primary"
                  : "text-primary-dark"
              }`}
            >
              Termo de uso
            </button>
          </div>
        </div>

        {}
        <div className="space-y-5">
          {activeTab === "privacy" ? <PrivacyContent /> : <TermsContent />}
        </div>
      </div>
    </section>
  );
}

function PrivacyContent() {
  return (
    <div className="space-y-5 text-primary-dark">
      <h1 className="text-center text-xl font-bold uppercase">GRUPO PRIMUM</h1>

      <div className="space-y-5 text-lg leading-relaxed text-primary-dark">
        <p>Seja bem-vindo(a) ao Grupo Primum!</p>

        <div>
          <h2 className="mb-5 text-2xl font-bold">1. Quem somos</h2>
          <p className="mb-4 text-lg text-primary-dark">
            O Grupo Primum é uma iniciativa educacional inovadora, dedicada a transformar a saúde por meio da educação. Composto por diversas instituições e plataformas, nosso propósito é oferecer soluções educacionais de excelência, preparando profissionais altamente capacitados nas mais diversas áreas. Nossas unidades incluem:
          </p>
          <ol className="ml-6 list-decimal space-y-2 text-lg text-primary-dark">
            <li className="text-primary-dark">
              <Link href="https://primum.edu.br/" className="text-primary-dark font-semibold underline hover:text-primary">
                Faculdade Primum:
              </Link>
              <span className="text-primary-dark">{" "}Como Instituição de Ensino Superior (IES) do grupo, devidamente credenciada pelo MEC, a Faculdade Primum é a única responsável pela concepção, execução e certificação de todos os seus cursos de graduação, pós-graduação e extensão. Seu portfólio acadêmico abrange:</span>
              <ul className="ml-6 mt-2 list-disc space-y-1 text-primary-dark">
                <li className="text-primary-dark">Graduação: Curso de Graduação em Serviço Social.</li>
                <li className="text-primary-dark">
                  Pós-Graduação e Extensão: Cursos desenvolvidos e certificados pela Faculdade Primum, que foram idealizados com a cooperação técnica das seguintes instituições das diferentes áreas do conhecimento:
                  <ul className="ml-6 mt-2 list-disc space-y-1 text-primary-dark">
                    <li className="text-primary-dark">
                      <Link href="https://pages.institutobws.com.br/" className="text-primary-dark font-semibold underline hover:text-primary">
                        Instituto BWS | Pele Saudável:
                      </Link>
                      <span className="text-primary-dark">{" "}Instituição colaboradora dos cursos de Pós-Graduação na área da Saúde.</span>
                    </li>
                    <li className="text-primary-dark">
                      <Link href="https://cbiofmiami.com/" className="text-primary-dark font-semibold underline hover:text-primary">
                        CBI of Miami:
                      </Link>
                      <span className="text-primary-dark">{" "}Instituição colaboradora dos cursos de Pós-Graduação, Profissionalizantes e de Extensão nas áreas da Saúde Mental e Psicoeducação.</span>
                    </li>
                    <li className="text-primary-dark">
                      <Link href="https://bbiofchicago.com/" className="text-primary-dark font-semibold underline hover:text-primary">
                        BBI of Chicago:
                      </Link>
                      <span className="text-primary-dark">{" "}Instituição colaboradora cursos de Pós-Graduação, Profissionalizantes e de Extensão em Negócios e Desenvolvimento de Competências Comportamentais, preparando líderes para os desafios do mercado.</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="text-primary-dark">
              <Link href="https://pages.aristo.com.br/" className="text-primary-dark font-semibold underline hover:text-primary">
                Aristo:
              </Link>
              <span className="text-primary-dark">{" "}Oferece treinamentos e preparações para concursos, com ênfase nas provas de Residência Médica e Revalidação de Diploma.</span>
            </li>
            <li className="text-primary-dark">
              <Link href="https://medq.com.br/" className="text-primary-dark font-semibold underline hover:text-primary">
                MedQ:
              </Link>
              <span className="text-primary-dark">{" "}Banco de questões e revisões, voltado para a preparação de candidatos à Residência Médica, com materiais atualizados e estratégicos.</span>
            </li>
            <li className="text-primary-dark">
              <Link href="https://www.territoriosaber.com/" className="text-primary-dark font-semibold underline hover:text-primary">
                Território Saber:
              </Link>
              <span className="text-primary-dark">{" "}Plataforma online com conteúdos de diversas áreas, elaborados por especialistas para promover o aprendizado contínuo.</span>
            </li>
          </ol>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">2. O propósito do documento</h2>
          <p className="text-lg">
            A Política de Privacidade aqui descrita busca demonstrar como os seus Dados Pessoais são tratados pelo Grupo Primum, reforçando o nosso compromisso com valores importantes, dentre os quais se destacam o bom relacionamento e a transparência com os Usuários, em linha com as disposições da Lei Geral de Proteção de Dados (Lei 13.709/18).
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">3. Definições</h2>
          <ol className="ml-6 list-decimal space-y-2 text-lg">
            <li>Grupo Primum: grupo educacional composto por diferentes Plataformas, criado para oferecer soluções inovadoras e transformar a educação e a saúde.</li>
            <li>Plataformas: conjunto de soluções educacionais e profissionais oferecido pelo Grupo Primum, com foco em saúde, educação médica, preparação para concursos e desenvolvimento de competências, atendendo às necessidades de aprendizado de diversos públicos.</li>
            <li>Usuário: aquele que utiliza uma das Plataformas do Grupo Primum, independentemente de login ou cadastro.</li>
            <li>LGPD: significa Lei Geral de Proteção de Dados (Lei 13.709/18).</li>
            <li>ANPD: refere-se à Autoridade Nacional de Proteção de Dados, órgão da administração pública responsável por zelar, implementar e fiscalizar o cumprimento da LGPD no Brasil.</li>
            <li>Dados Pessoais: qualquer informação que possa levar à identificação direta ou indireta de uma pessoa física, como nome, e-mail, telefone, endereço, CPF, documento de identidade.</li>
            <li>Dado Anonimizado: dado relativo a Titular que não possa ser identificado, considerando a utilização de meios técnicos razoáveis e disponíveis na ocasião do Tratamento.</li>
            <li>Anonimização: utilização de meios técnicos razoáveis e disponíveis no momento do Tratamento, por meio dos quais um dado perde a possibilidade de associação, direta ou indireta, a um indivíduo.</li>
            <li>Titular: pessoa natural a quem se referem os Dados Pessoais objeto do Tratamento.</li>
            <li>Tratamento de Dados Pessoais: considera-se Tratamento de Dado Pessoal a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avalição ou controle da informação, modificação, comunicação, transferência, difusão ou extração de dados de pessoas físicas.</li>
            <li>Controlador: pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao Tratamento de Dados Pessoais.</li>
            <li>Finalidade: o que o Grupo Primum objetiva a partir do Tratamento de Dados Pessoais.</li>
          </ol>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">4. A quem essa Política de Privacidade se aplica?</h2>
          <p className="text-lg">
            Esta Política de Privacidade se aplica a todos aqueles que utilizam as Plataformas do Grupo Primum, bem como àqueles que de alguma forma tenham seus Dados Pessoais tratados pelo Grupo Primum. A utilização da Plataforma pelo Usuário implica na aceitação desta Política de Privacidade.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">5. Quais Dados Pessoais são tratados?</h2>
          <p className="mb-4 text-lg">
            Os dados pessoais coletados incluem informações de identificação, contato, dados de navegação, informações de pagamento e outros dados necessários para a prestação dos serviços.
          </p>
          <div className="my-8 w-full">
            <Image
              src="/tabela01.png"
              alt="Tabela de Dados Pessoais"
              width={1086}
              height={698}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">6. Finalidade do Tratamento de Base Legal Adotada</h2>
          <div className="my-8 w-full">
            <Image
              src="/tabela02.png"
              alt="Tabela de Finalidades"
              width={1071}
              height={922}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">7. Com quem os dados dos clientes podem ser compartilhados?</h2>
          <p className="mb-4 text-lg">
            Seus dados podem ser compartilhados com nossos parceiros comerciais para práticas administrativas e outras finalidades detalhadas abaixo, com o objetivo de fornecer e aprimorar nossos serviços e produtos.
          </p>
          <p className="mb-4 text-lg">
            Por empresas parceiras entende-se não apenas aquelas indispensáveis para a atender às solicitações de serviço/produto, como também nossos fornecedores (inclusive de serviços de tecnologia, armazenamento em nuvem, ações de marketing, etc.) e outras que sejam necessárias para atender o Grupo Primum no âmbito de suas atividades, conforme descritas nesta Política.
          </p>
          <p className="mb-4 text-lg">
            O compartilhamento de dados com terceiros ocorrerá apenas quando necessário para a execução dos serviços contratados, sendo todos os contratos regidos pelas normas de proteção de dados do ordenamento jurídico brasileiro.
          </p>
          <p className="mb-4 text-lg">
            Abaixo trazemos situações em que pode haver o compartilhamento de informações com parceiros autorizados:
          </p>
          <ul className="ml-6 list-disc space-y-2 text-lg">
            <li>
              Execução dos processos envolvidos na venda do produto ou prestação de serviço: seus Dados Pessoais podem ser enviados para terceiros com finalidade de: (a) análise de crédito e antifraude; (b) processamento dos pagamentos de cartão de crédito; (c) registro do boleto de cobrança; e (d) entrega de produtos e serviços digitais em plataformas de terceiros.
            </li>
            <li>
              Cumprimento de obrigações legais: seus Dados Pessoais são estritamente necessários para o cumprimento de obrigações legais, que podem ser enviados para terceiros com finalidade de: (a) emissão de nota fiscal de venda de produtos e serviços; (b) cumprimento de obrigações legais federal, estaduais, municipais; e (c) atendimento a fiscalizações da ANPD.
            </li>
            <li>
              Marketing: alguns de seus Dados Pessoais poderão ser enviados para parceiros com finalidade de: (a) divulgação dos nossos produtos em outras Plataformas e mídias sociais; (b) divulgação dos nossos produtos em anúncios em outros portais de conteúdo; (c) personalização da oferta de produtos em nosso site; e (d) personalização de campanhas de marketing em nosso site. Vale ressaltar que informações completas de contato, endereço de cobrança e dados de pagamento não serão enviados para terceiros para ações de marketing.
            </li>
            <li>
              Estatísticas: as informações de pedidos, pagamento, endereço de entrega/cobrança e navegação, podem ser utilizadas de forma anonimizada para: (a) extrair estatísticas gerais de navegação e conversão do site; e (b) analisar comportamentos de navegação e estatísticas de uso do site.
            </li>
          </ul>
          <p className="mt-4 text-lg">
            Além disso, também existem outras hipóteses em que seus dados poderão ser compartilhados, entre elas: (a) determinação legal, requerimento, requisição ou ordem judicial, com autoridades judiciais, administrativas ou governamentais competentes; (b) caso de movimentações societárias, como fusão, aquisição e incorporação, de forma automática; e (c) proteção dos direitos do Grupo Primum em qualquer tipo de conflito, inclusive os de teor judicial.
          </p>
          <p className="mt-4 text-lg">
            É importante destacar que as Plataformas do Grupo Primum podem conter links para sites de terceiros, que possuem seus próprios Termos e Condições de Uso e Políticas de Privacidade. Ao acessar essas plataformas, o Usuário deve estar ciente de que o Grupo Primum não tem controle sobre elas e deve sempre revisar os Termos e Políticas de Privacidade de cada site para proteger seus direitos.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">8. Quais os direitos do Usuário?</h2>
          <p className="mb-4 text-lg">
            O Usuário tem direito de solicitar ao Grupo Primum informações referentes ao Tratamento de seus Dados Pessoais, por meio dos pedidos abaixo:
          </p>
          <ul className="ml-6 list-disc space-y-2 text-lg">
            <li>
              Confirmação da existência de Tratamento: os Titulares de Dados Pessoais podem entrar em contato a fim de confirmar se algum Dado Pessoal seu é tratado pelo Grupo Primum.
            </li>
            <li>
              Acesso aos dados: é direito dos Titulares requerer acesso aos dados existentes tratados pelo Grupo Primum.
            </li>
            <li>
              Correção de dados incompletos, inexatos ou desatualizados: os Titulares de dados podem solicitar ao Grupo Primum, a qualquer momento, a alteração de seus Dados Pessoais, no caso em que estejam incorretos, inexatos ou desatualizados. São exemplos: atualização de nome, alteração de telefone e endereço. É importante que os Dados Pessoais sejam precisos e atuais, assim, cabe ao Usuário manter o Grupo Primum informado nos casos em que seus Dados Pessoais precisem ser corrigidos.
            </li>
            <li>
              Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade a LGPD: o Titular poderá solicitar o bloqueio e a eliminação de seus Dados Pessoais. Tal solicitação só será negada pelo Grupo Primum nos casos em que o pedido não puder ser atendido ou nos casos em que for obrigatório ou permitido seu armazenamento, de acordo com as hipóteses elencadas no art. 7º da LGPD e demais dispositivos aplicáveis. Em razão de a Anonimização impedir a identificação do indivíduo, os Dados Anonimizados deixam de ser considerados Dados Pessoais e, portanto, passam a estar fora do escopo de aplicação da LGPD.
              <br />
              <br />
              Apesar de ser possível a exclusão integral da conta do Usuário, poderemos manter armazenados os Dados Pessoais que sejam necessários para cumprimento de obrigações legais ou regulatórias e/ou para o exercício regular de direitos em procedimentos judiciais ou administrativos, ou ainda fundamentado por outras bases legais previstas na LGPD, em linha com as normas de prescrição do direito brasileiro.
            </li>
            <li>
              Eliminação dos Dados Pessoais tratados com o consentimento do Titular: os Dados Pessoais dos Titulares serão eliminados após o cumprimento da finalidade, exceto nos determinados casos:
              <ol className="ml-6 mt-2 list-[lower-alpha] space-y-1">
                <li>cumprimento de obrigação legal ou regulatória pelo Grupo Primum;</li>
                <li>transferência a terceiro, desde que respeitados os requisitos de Tratamento de dados dispostos na LGPD; ou</li>
                <li>uso exclusivo do Grupo Primum, vedado seu acesso por terceiro, e desde que os Dados estejam Anonimizados.</li>
              </ol>
            </li>
            <li>
              Informação das entidades públicas e privadas com as quais ao Grupo Primum realizou compartilhamento de dados: é direito do Titular requerer acesso aos Dados Pessoais que forem encaminhados às entidades públicas e privadas.
            </li>
            <li>
              Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa: ao Grupo Primum está disponível para atender e auxiliar, de forma transparente, quaisquer dúvidas que possam existir em função do Tratamento dos Dados Pessoais dos Titulares, inclusive sobre os possíveis impactos decorrentes do não fornecimento do consentimento.
            </li>
            <li>
              Revogação do consentimento: o consentimento fornecido pelos Titulares dos Dados Pessoais poderá ser revogado a qualquer momento por meio de pedido escrito ao Grupo Primum através de procedimento gratuito quando esta for a base legal para o Tratamento dos dados.
            </li>
          </ul>
          <p className="mt-4 text-lg">
            Caso o Usuário deseje exercer qualquer dos direitos previstos nesta cláusula, deverá entrar em contato com o Grupo Primum, utilizando para tanto as informações de contato disponibilizadas nesta Política de Privacidade. O Grupo Primum adotará os melhores esforços para adoção das medidas necessárias dentro dos prazos indicados na LGPD e demais normas pertinentes.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">9. Por quanto tempo os dados do Usuário serão armazenados?</h2>
          <p className="mb-4 text-lg">
            O armazenamento de dados coletados pelo Grupo Primum reflete o nosso compromisso com a segurança e a privacidade dos seus dados. Os Dados Pessoais serão utilizados e armazenados durante o tempo necessário para a prestação do serviço ou para que as finalidades elencadas na presente Política de Privacidade sejam atingidas, considerando os direitos dos Titulares e dos Controladores.
          </p>
          <p className="mb-4 text-lg">
            De modo geral, seus dados serão mantidos enquanto a relação contratual entre o Usuário e o Grupo Primum perdurar. Findo o contrato, as informações do Usuário, incluindo Dados Pessoais de terceiros, serão armazenadas de acordo com as normas de prescrição do direito brasileiro, salvo se o Tratamento tiver como base o consentimento do Titular, que poderá ser revogado a qualquer tempo.
          </p>
          <p className="mb-4 text-lg">
            Após o prazo prescricional, os Dados Pessoais serão eliminados de nossas bases de dados ou Anonimizados, ressalvadas as hipóteses legalmente previstas no artigo 16 da LGPD, a saber: (a) cumprimento de obrigação legal ou regulatória pelo Controlador; (b) estudo por órgão de pesquisa, garantida, sempre que possível, a Anonimização dos Dados Pessoais; (c) transferência a terceiro, desde que respeitados os requisitos de Tratamento de dados dispostos nesta Lei; ou (d) uso exclusivo do Controlador, vedado seu acesso por terceiro, e desde que Anonimizados os Dados.
          </p>
          <p className="text-lg">
            Em outras palavras, informações pessoais que sejam imprescindíveis para o cumprimento de determinações legais, judiciais e administrativas e/ou para o exercício do direito de defesa em processos judiciais e administrativos serão mantidas pelo Grupo Primum, a despeito da exclusão dos demais dados.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">10. O que fazemos para manter os seus Dados Pessoais seguros?</h2>
          <p className="mb-4 text-lg">
            O Grupo Primum adota medidas de segurança administrativas e técnicas aptas a garantir a confidencialidade, a integridade e a inviolabilidade dos seus dados.
          </p>
          <p className="mb-4 text-lg">
            Para mantermos suas informações pessoais seguras, usamos ferramentas físicas, eletrônicas e gerenciais orientadas para a proteção da sua privacidade. Aplicamos essas ferramentas considerando a natureza dos Dados Pessoais coletados, o contexto e a finalidade do Tratamento e os riscos que eventuais violações geram para os direitos e liberdades do Titular dos dados coletados e tratados.
          </p>
          <p className="mb-4 text-lg">
            Entre as medidas que adotamos, destacamos as seguintes: (a) apenas pessoas autorizadas têm acesso a seus Dados Pessoais; (b) o acesso a seus Dados Pessoais é feito somente após o compromisso de confidencialidade; e (c) seus Dados Pessoais são armazenados em ambiente seguro e idôneo.
          </p>
          <p className="text-lg">
            Embora o Grupo Primum adote as melhores práticas para evitar incidentes de segurança, destacamos que nenhuma página virtual é inteiramente livre de riscos. Mesmo com todos os nossos protocolos de segurança, podem ocorrer incidentes resultantes de culpa exclusivamente de terceiros, como ataques cibernéticos de hackers gerados em decorrência da negligência ou imprudência do próprio Usuário.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">11. Recomendações de segurança</h2>
          <ol className="ml-6 list-decimal space-y-4 text-lg">
            <li>
              Senhas: sua senha de login é armazenada com criptografia forte, garantindo sua proteção. Contudo, é essencial que você não compartilhe sua senha com mais ninguém e que ela seja uma senha minimamente complexa para evitar tentativas de invasão.
              <br />
              <br />
              Atenção! O Grupo Primum não envia solicitações requisitando sua senha, seja por e-mail, telefone ou serviços de mensagens.
            </li>
            <li>
              E-mails enviados: o Grupo Primum utiliza canais oficiais de comunicação para enviar informações relacionadas a vendas, prestação de serviços e marketing. Para garantir uma comunicação segura, é importante verificar se os e-mails recebidos correspondem aos canais oficiais do Grupo Primum.
              <br />
              <br />
              Atenção! Os e-mails enviados pelo Grupo Primum não possuem anexos executáveis, como arquivos com extensões .exe, .bat, .scr ou outras associadas a vírus.
            </li>
          </ol>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">12. Política de Cookies</h2>
          <p className="mb-4 text-lg">
            O Grupo Primum faz uso de cookies para aprimorar a experiência dos usuários em suas Plataformas. Cookies são pequenos arquivos de texto enviados pela plataforma para o seu computador, contendo informações relacionadas à navegação do site e servem para auxiliar os usuários a navegar pelos sites com eficiência e a realizar certas funções.
          </p>
          <p className="mb-4 text-lg">
            Os cookies utilizados em nossa Plataforma podem possuir as seguintes funcionalidades:
          </p>
          <ul className="ml-6 list-disc space-y-2 text-lg">
            <li>
              Cookies Necessários: são necessários para que as Plataformas funcionem de maneira simples e eficiente, permitindo o gerenciamento de rede, um ambiente mais seguro e a acessibilidade. Sem esses cookies, algumas funcionalidades básicas podem não estar disponíveis.
            </li>
            <li>
              Cookies de Desempenho: ajudam o Grupo Primum a entender como os Usuários interagem com as Plataformas, fornecendo informações sobre as áreas visitadas, o tempo de visita e quaisquer problemas encontrados, como mensagens de erro. Esses dados permitem que o Grupo Primum melhore o desempenho da Plataforma.
            </li>
            <li>
              Cookies de Funcionalidade: permitem coletar informações relacionadas à usabilidade das Plataformas, possibilitando análises técnicas e estáticas. Esses cookies garantem que as Plataformas funcionem adequadamente e melhoram sua experiência de uso.
            </li>
            <li>
              Cookies Analíticos: esses cookies são usados para entender o comportamento dos usuários na Plataforma. Coletam dados como número de visitantes, taxa de rejeição e fontes de tráfego. As informações coletadas são agregadas e anonimizadas, com o objetivo de melhorar continuamente nossos serviços.
            </li>
            <li>
              Cookies de Publicidade: utilizados para apresentar anúncios relevantes e personalizados, com base no comportamento do Usuário nas Plataformas. Além disso, limitam o número de vezes que um mesmo anúncio é exibido e ajudam a medir a eficácia das campanhas publicitárias
            </li>
            <li>
              Outros Cookies: incluem aqueles que ainda estão em processo de classificação ou que possuem finalidades específicas diferentes das descritas acima. Esses cookies podem ser utilizados para funcionalidades experimentais ou análises adicionais.
            </li>
          </ul>
          <p className="mt-4 text-lg">
            Você pode, a qualquer tempo e sem nenhum custo, alterar as permissões, bloquear ou recusar os cookies. Todavia, note-se que ao desativar determinados cookies, você pode inviabilizar o funcionamento correto de alguns recursos da Plataforma.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">13. Modificações na Política de Privacidade</h2>
          <p className="mb-4 text-lg">
            O Grupo Primum poderá modificar, alterar ou substituir esta Política de Privacidade a qualquer momento, principalmente em função da adequação a eventuais alterações feitas em nossa Plataforma ou em âmbito legislativo. Recomendamos que você a revise com frequência.
          </p>
          <p className="text-lg">
            Eventuais alterações entrarão em vigor a partir da publicação em nossa Plataforma e sempre lhe notificaremos acerca das mudanças ocorridas.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">14. Contato</h2>
          <p className="text-lg">
            Para esclarecimentos, dúvidas, sugestões e solicitações relacionadas ao conteúdo desta Política de Privacidade, entre em contato por meio do endereço de e-mail:{" "}
            <Link href="mailto:dpo@primum.edu.br" className="text-primary-dark font-semibold underline hover:text-primary">
              dpo@primum.edu.br
            </Link>
          </p>
          <p className="mt-4 text-lg">
            Data da última atualização: 25 de setembro de 2025
          </p>
        </div>
      </div>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="space-y-5 text-primary-dark">
      <h1 className="text-center text-xl font-bold uppercase">GRUPO PRIMUM</h1>

      <div className="space-y-5 text-lg leading-relaxed">
        <div>
          <h2 className="mb-5 text-2xl font-bold">TERMOS DE USO DA PLATAFORMA EDUCACIONAL</h2>
          <p className="mb-4 text-lg">
            Bem-vindo à plataforma educacional do Grupo Primum | CBI of Miami. Estes Termos de Uso ("Termos") regem o seu acesso e utilização da nossa plataforma online, incluindo todo o conteúdo, recursos e funcionalidades oferecidas.
          </p>
        </div>

        {}
        <div className="my-6 rounded-br-sm rounded-tl-sm rounded-tr-sm border-l-8 border-secondary bg-secondary/10 p-5">
          <p className="text-lg text-primary-dark">
            <span className="font-bold">IMPORTANTE:</span>
            {" "}Estes Termos de Uso regulam exclusivamente a sua utilização da plataforma digital. A sua relação comercial, incluindo matrícula, pagamentos, valores, duração do curso, critérios de avaliação, emissão de certificado e políticas de cancelamento, é regida pelo Contrato de Prestação de Serviços Educacionais ("Contrato") celebrado entre você ("Aluno") e a Faculdade Primum.
          </p>
        </div>

        <p className="text-lg">
          Ao acessar ou utilizar a plataforma, o Usuário/Aluno declara ter lido, compreendido e concordado com estes Termos e com nossa Política de Privacidade.
        </p>

        <div>
          <h2 className="mb-5 text-2xl font-bold">1. DEFINIÇÕES</h2>
          <p className="mb-4 text-lg">1.1. Principais definições para o entendimento deste Termo:</p>
          <p className="mb-4 text-lg">
            <span className="font-semibold">Plataforma:</span> Refere-se ao ambiente virtual de aprendizagem (AVA), websites, aplicativos e demais tecnologias de propriedade da PRIMUM ENSINO SUPERIOR EM CIÊNCIAS HUMANAS E DA SAÚDE LTDA. (CNPJ n.º 18.634.348/0005-20) e da EDUCAÇÃO E NEUROCIÊNCIA TREINAMENTO LTDA. (CNPJ n.º 25.179.481/0001-75), doravante denominadas em conjunto como "Contratadas".
          </p>
          <p className="mb-4 text-lg">
            <span className="font-semibold">Usuário:</span> Pessoa física que, na condição de Aluno devidamente matriculado, recebe credenciais de acesso para utilizar a Plataforma.
          </p>
          <p className="mb-4 text-lg">
            <span className="font-semibold">Conteúdo:</span> Todas as videoaulas, materiais didáticos digitais, textos, imagens, apostilas, avaliações, fóruns e qualquer outra informação disponibilizada na Plataforma.
          </p>
          <p className="mb-4 text-lg">
            1.2. Estes Termos aplicam-se aos cursos de pós-graduação e cursos livres, ambos à distância, oferecidos pelo grupo educacional Primum, formado pela Faculdade Primum, Aristo, BBI of Chicago, CBI of Miami, MedQ e Território Educação, todos divididos e disponibilizados em módulos de 06 (seis) meses.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">2. OBJETO</h2>
          <p className="mb-4 text-lg">
            2.1. O objeto destes Termos é estabelecer as regras e condições para o uso da Plataforma pelo Usuário, permitindo-lhe o acesso ao Conteúdo educacional do curso no qual está matriculado.
          </p>
          <p className="mb-4 text-lg">
            2.2. O acesso ao Conteúdo é disponibilizado de forma remota, por meio de streaming, exigindo que o Usuário possua equipamento com acesso à internet e configuração mínima para sua correta visualização e funcionamento.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">3. CADASTRO E CONTA DE USUÁRIO</h2>
          <p className="mb-4 text-lg">
            3.1. O acesso à Plataforma é liberado após a efetivação da matrícula do Usuário, conforme as condições estabelecidas no Contrato de Prestação de Serviços Educacionais ("Contrato").
          </p>
          <p className="mb-4 text-lg">
            3.2. O Usuário é o único responsável pela veracidade e atualização dos dados cadastrais informados.
          </p>
          <p className="mb-4 text-lg">
            3.3. As credenciais de acesso (login e senha) são de uso pessoal, exclusivo e intransferível. O Usuário compromete-se a zelar pelo sigilo de suas credenciais, sendo integralmente responsável por todas as atividades que ocorrerem em sua conta.
          </p>
          <p className="mb-4 text-lg">
            3.4. O Usuário deverá notificar imediatamente as Contratadas sobre qualquer uso não autorizado de sua conta ou qualquer outra quebra de segurança. As Contratadas não serão responsáveis por perdas e danos resultantes do uso indevido da conta do Usuário por terceiros.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">4. REGRAS DE CONDUTA E USO DA PLATAFORMA</h2>
          <p className="mb-4 text-lg">4.1. Ao utilizar a Plataforma, o Usuário se compromete a:</p>
          <ul className="ml-6 list-disc space-y-2 text-lg">
            <li>Utilizar a Plataforma e seu Conteúdo exclusivamente para fins de aprendizado pessoal, não comerciais;</li>
            <li>Respeitar todos os membros da comunidade acadêmica, incluindo outros usuários, professores e colaboradores, abstendo-se de qualquer comportamento desrespeitoso, ofensivo, discriminatório ou que viole a privacidade alheia;</li>
            <li>Não compartilhar mensagens ou materiais de cunho ilegal, ofensivo, difamatório, ou que incite à violência ou ao ódio;</li>
            <li>Não tentar ou efetivamente invadir, sobrecarregar, ou comprometer a segurança e a integridade dos sistemas e da Plataforma; e</li>
            <li>Cumprir com as disposições do regimento interno e demais políticas acadêmicas da Instituição de Ensino, que complementam estes Termos.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">5. PROPRIEDADE INTELECTUAL</h2>
          <p className="mb-4 text-lg">
            5.1. Todo o Conteúdo disponibilizado na Plataforma, incluindo aulas, textos, marcas, logotipos e design, é de propriedade exclusiva das Contratadas ou de seus parceiros e é protegido pelas leis de Direitos Autorais, Propriedade Industrial (Intelectual) e de Proteção de Programas de Computador (Lei n.º 9.610/98; Lei n.º 9.279/96; e Lei n.º 9.609/1998).
          </p>
          <p className="mb-4 text-lg">5.2. É expressamente proibido ao Usuário:</p>
          <ul className="ml-6 list-disc space-y-2 text-lg">
            <li>Gravar, copiar, reproduzir, distribuir, transmitir, vender, licenciar ou de qualquer outra forma explorar o Conteúdo para qualquer finalidade que não seja o seu uso pessoal e educacional;</li>
            <li>Compartilhar suas credenciais de acesso com terceiros, permitindo que pessoas não matriculadas acessem o Conteúdo; e</li>
            <li>Remover, alterar ou ocultar qualquer aviso de direito autoral ou outra nota de propriedade intelectual presente no Conteúdo.</li>
          </ul>
          <p className="mb-4 text-lg">
            5.3. A violação do disposto nesta cláusula sujeitará o infrator às sanções civis e criminais cabíveis, além da possibilidade de rescisão imediata do seu acesso à Plataforma.
          </p>
          <p className="mb-4 text-lg">
            5.4. Licença de Uso: Ao aceitar estes Termos, o Usuário recebe uma licença de uso pessoal, não exclusiva, intransferível e revogável para acessar o Conteúdo da Plataforma enquanto mantiver seu vínculo acadêmico ativo e adimplente, conforme o Contrato.
          </p>
          <p className="mb-4 text-lg">
            5.5. Direito de Imagem: O Usuário autoriza as Contratadas a usarem sua imagem, som de voz e nome, de forma gratuita, sem qualquer limitação temporal e/ou territorial, nem restrição a qualquer tipo de mídia a ser veiculado, nos termos dispostos pelo Contrato.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">6. PRIVACIDADE E PROTEÇÃO DE DADOS PESSOAIS</h2>
          <p className="mb-4 text-lg">
            6.1. As Contratadas realizam o tratamento dos dados pessoais do Usuário em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei n.º 13.709/2018).
          </p>
          <p className="mb-4 text-lg">6.2. A coleta e o tratamento de dados são realizados com as seguintes finalidades principais:</p>
          <ul className="ml-6 list-disc space-y-2 text-lg">
            <li>Execução do Contrato de Prestação de Serviços Educacionais;</li>
            <li>Gerenciamento do acesso e da performance acadêmica na Plataforma;</li>
            <li>Cumprimento de obrigações legais e regulatórias (ex: MEC);</li>
            <li>Comunicação sobre assuntos acadêmicos e administrativos;</li>
            <li>Garantia da segurança da Plataforma e prevenção a fraudes.</li>
          </ul>
          <p className="mb-4 text-lg">
            6.3. Para informações detalhadas sobre como coletamos, usamos, compartilhamos e protegemos seus dados, bem como sobre os seus direitos como titular (acesso, correção, eliminação, etc.), consulte nossa Política de Privacidade, que é parte integrante destes Termos.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">7. LIMITAÇÃO DE RESPONSABILIDADE</h2>
          <p className="mb-4 text-lg">
            7.1. As Contratadas envidarão os melhores esforços para manter a Plataforma acessível e funcional. No entanto, não garantem o funcionamento ininterrupto e livre de erros, e não se responsabilizam por falhas técnicas, interrupções ou indisponibilidades decorrentes de problemas na rede de internet, nos equipamentos do Usuário ou por motivo de força maior.
          </p>
          <p className="mb-4 text-lg">
            7.2. Este Termo elenca e regula apenas as responsabilidades das Contratadas no que concerne à disponibilização do acesso do Usuário à Plataforma e ao Conteúdo. Questões de natureza acadêmica, pedagógica, financeira deverão ser tratadas conforme as disposições do Contrato celebrado entre o Usuário/Aluno e a Instituição de Ensino.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">8. VIGÊNCIA E CANCELAMENTO DO ACESSO</h2>
          <p className="mb-4 text-lg">
            8.1. Estes Termos entram em vigor na data do primeiro acesso do Usuário à Plataforma e permanecem válidos enquanto durar o seu vínculo acadêmico com a instituição.
          </p>
          <p className="mb-4 text-lg">8.2. O acesso do Usuário à Plataforma poderá ser suspenso ou cancelado pelas Contratadas, sem prejuízo das medidas contratuais cabíveis, nas seguintes hipóteses:</p>
          <ul className="ml-6 list-disc space-y-2 text-lg">
            <li>Violação de qualquer disposição destes Termos de Uso, especialmente das regras de conduta e de propriedade intelectual;</li>
            <li>Inadimplemento financeiro ou descumprimento de outras obrigações previstas no Contrato de Prestação de Serviços Educacionais;</li>
            <li>Requisição formal de cancelamento de matrícula pelo Usuário;</li>
            <li>Conclusão ou término do vínculo do Usuário com o curso.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">9. DISPOSIÇÕES GERAIS</h2>
          <p className="mb-4 text-lg">
            <span className="font-semibold">9.1. Alterações nos Termos:</span> As Contratadas poderão alterar estes Termos a qualquer momento. A nova versão será publicada na Plataforma, e o Usuário será notificado. A continuidade do uso da Plataforma após a notificação implicará na aceitação das novas condições.
          </p>
          <p className="mb-4 text-lg">
            <span className="font-semibold">9.2. Independência das Cláusulas:</span> Se qualquer cláusula destes Termos for considerada nula ou inválida, as demais cláusulas permanecerão em pleno vigor e efeito.
          </p>
          <p className="mb-4 text-lg">
            <span className="font-semibold">9.3. Comunicações:</span> Todas as comunicações oficiais relativas a estes Termos serão realizadas por meio do e-mail cadastrado pelo Usuário ou através de notificações na própria Plataforma.
          </p>
          <p className="mb-4 text-lg">
            <span className="font-semibold">9.4. Legislação e Foro:</span> Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de São Paulo, Estado de São Paulo, para dirimir quaisquer controvérsias oriundas deste documento, com renúncia expressa a qualquer outro, por mais privilegiado que seja, salvo nos casos em que a lei, especialmente o Código de Defesa do Consumidor, determine foro diverso.
          </p>
          <p className="mt-4 text-lg">
            <span className="font-bold">Data da última atualização:</span> 18 de novembro de 2025
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyContent;

