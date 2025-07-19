---
id: solution-architecture
title: 🧠 Solution Architecture
slug: /mba-solution-architecture
---

# 🧠 Solution Architecture

## **O que é arquitetura de solução**   {#o-que-é-arquitetura-de-solução}

**🧭 Introdução à arquitetura de solução**  
Arquitetura de solução serve para **definir a estrutura, os componentes, os módulos e as interfaces** de uma solução de software, considerando tanto os **requisitos funcionais** quanto os **não funcionais**.

**⚙️ Requisitos funcionais vs não funcionais**

- **Funcionais**: o que o sistema faz (ações, funcionalidades)  
- **Não funcionais**: como o sistema se comporta (escalabilidade, hospedagem, deploy, performance, persistência etc.)

**🧱 Papel da arquitetura de solução**  
Além de estruturar a solução, ela:

- **Define ou sugere** a stack de tecnologias, plataformas, ferramentas e infraestrutura  
- **Cria uma blueprint** (mapa técnico) que orienta o desenvolvimento e a integração da solução  
- Serve como **guia para devs, arquitetos e stakeholders**

**🧠 Visão de alto nível**  
O arquiteto de solução precisa entender:

- O que a aplicação faz  
- Como ela faz  
- E como todas as partes se conectam com o negócio e outros sistemas

**📏 Quando se aplica?**

- Em sistemas **Enterprise**, com alta complexidade, integração, requisitos críticos de performance e segurança  
- Softwares pequenos e simples, geralmente, **não exigem** arquitetura de solução formal — um dev experiente costuma resolver

**📌 Conclusão:**  
A arquitetura de solução é o **mapa estratégico** que guia o desenvolvimento de sistemas complexos, garantindo alinhamento entre negócio, tecnologia e eficiência operacional.

## **Perfil da pessoa arquiteta de solução**   {#perfil-da-pessoa-arquiteta-de-solução}

**👤 Perfil da pessoa arquiteta de solução**  
A pessoa arquiteta de solução não precisa ser apenas técnica — ela precisa ter **bagagem**, **vivência de mercado** e **visão de negócio**.

**🧠 Conhecimento de domínio é essencial**

- O arquiteto precisa entender o **domínio da solução** (ex: contabilidade, saúde, logística)  
- Sem isso, a arquitetura fica genérica e desconectada do problema real  
- Experiência prática no negócio é indispensável

**🛠️ Conhecimento técnico aprofundado**

- Além do negócio, a pessoa precisa conhecer **tecnologias relevantes** para a solução  
- Deve ser capaz de **escolher e justificar stacks, ferramentas e padrões**

**📊 Visão de contexto e restrições**

- Um bom arquiteto entende:  
  - As **restrições de negócio**  
  - A **maturidade técnica da empresa**  
  - O **orçamento disponível**  
  - As **limitações operacionais**

**🌍 Visão holística e pragmática**

- As decisões arquiteturais nem sempre são ideais tecnicamente — muitas vezes são moldadas por **realidades financeiras e operacionais**  
- Um arquiteto de solução deve saber **equilibrar qualidade técnica com viabilidade do negócio**

**🏗️ Atuação em ambientes enterprise**

- Arquitetos de solução atuam em sistemas **complexos e críticos**, com:  
  - Integrações diversas  
  - Múltiplas tecnologias  
  - Times com culturas diferentes  
- Não são comuns em sistemas simples

**📌 Conclusão:**  
O arquiteto de solução é um profissional com **visão sistêmica**, que une **conhecimento técnico, entendimento de negócio e experiência prática** para entregar soluções robustas e realistas em ambientes enterprise.

## **Soft skills**   {#soft-skills}

**🧠 Soft skills da pessoa arquiteta de solução**  
Além do conhecimento técnico, o arquiteto de solução precisa de habilidades comportamentais para navegar em diferentes contextos, pessoas e realidades organizacionais.

**🔄 Adaptação a diferentes contextos**

- Deve estar pronto para atuar em projetos variados (ex: educação, chão de fábrica)  
- Ter **maturidade emocional** para lidar com mudanças de cenário e cultura

**🗣️ Comunicação eficaz**

- Precisa se comunicar com diversos públicos:  
  - Técnicos  
  - Diretores  
  - Jurídico  
  - Parceiros externos  
- Ter **fome de informação** e saber extrair insights do negócio  
- Comunicação não exige extroversão, mas exige clareza, empatia e abertura

**🧭 Liderança com influência**

- Atua como um líder técnico que **influencia sem impor**  
- Suas decisões impactam toda a cadeia de desenvolvimento  
- Um bom arquiteto **lidera pelo exemplo** e **gera confiança**

**📈 Pensamento estratégico**

- Pensa no **presente e no futuro da solução**  
- Avalia impactos de negócio, sustentabilidade e viabilidade  
- Questiona: “Quando isso se paga?”, “Qual o impacto a longo prazo?”

**🎨 Criatividade e jogo de cintura**

- Resolve problemas com criatividade e **workarounds inteligentes**  
- Precisa saber **fazer mais com menos**, otimizando tempo e recursos

**🧘 Inteligência emocional**

- Vai lidar com **pressão constante**, críticas e imprevistos  
- Precisa manter o equilíbrio emocional para **decidir bem e trabalhar em equipe**

**🤝 Trabalho em equipe**

- Ninguém cria uma solução complexa sozinho  
- Colaboração é essencial em ambientes enterprise  
- O tempo do programador solitário no porão acabou

**👂 Saber ouvir é essencial**

- Escutar stakeholders de todas as áreas:  
  - Domínio  
  - Desenvolvimento  
  - Gerência  
  - Diretoria  
  - Compliance  
- Quem fala mais do que ouve, tende a criar soluções desalinhadas com o negócio

**📌 Conclusão:**  
Ser arquiteto de solução vai muito além da técnica — exige **visão estratégica, comunicação clara, liderança colaborativa, equilíbrio emocional e humildade para ouvir** antes de agir.

## **Princípios para arquitetar uma solução** {#princípios-para-arquitetar-uma-solução}

**📌 Princípios que guiam a arquitetura de solução**

**🎯 Alinhamento com os objetivos de negócio**

- A solução deve partir da **necessidade do usuário final**, não da tecnologia por si só  
- Criar algo tecnicamente impressionante que **não gera valor real** é desperdício  
- Entender a estratégia da empresa é essencial para definir o que deve ser feito

**🧘‍♂️ Flexibilidade**

- Nem sempre será possível fazer “a melhor solução” tecnicamente  
- O arquiteto deve saber **negociar, adaptar e decidir sob restrições**  
- Ser resiliente sem cair no extremismo técnico

**♻️ Reusabilidade**

- Avaliar o que **já existe** antes de reinventar a roda  
- Reaproveitar soluções passadas, códigos legados ou componentes prontos  
- O foco deve ser **entregar valor**, não alimentar o ego tecnológico

**🔗 Interoperabilidade**

- Sistemas precisam **conversar entre si**  
- Mesmo que o sistema pareça isolado, ele terá que se integrar a outros  
- Arquiteturas como **hexagonal**, **ports & adapters** ajudam a construir soluções abertas à integração

**🔧 Manutenabilidade**

- O sistema precisa ser **fácil de manter, corrigir e evoluir**  
- Inclui:  
  - Debugs simples  
  - Deploys rápidos  
  - Recuperação eficiente em caso de falha  
- Exige visão integrada entre desenvolvimento, DevOps e operação

**📜 Conformidade regulatória**

- Soluções precisam seguir **leis e normas regionais e internacionais**  
- Ex: GDPR na Europa, LGPD no Brasil, regulamentações nos EUA  
- Não adianta tentar burlar: seguir regras é mandatório

**🧳 Portabilidade**

- Sistemas devem permitir **migração ou integração com outros ambientes**  
- Facilitar a **movimentação de dados e serviços entre sistemas distintos**  
- Domínios devem ser isolados sempre que possível para facilitar essa troca

**📌 Conclusão:**  
Uma boa arquitetura de solução é guiada por princípios que equilibram **negócio, técnica e realidade**. Não se trata apenas de escolher boas ferramentas, mas de **tomar decisões que funcionem de verdade no contexto da organização.**

## **Iniciando com TCO** {#iniciando-com-tco}

🎯 **Definição de uma Boa Arquitetura de Solução**   
Uma boa arquitetura deve tratar os casos de uso de negócio, a solução técnica e os serviços de infraestrutura como componentes separados. Essa separação é fundamental para calcular o Custo Total de Propriedade (TCO) e apresentar o impacto financeiro da solução para a gestão da empresa.

🤝 **O Papel do Arquiteto de Soluções**   
O arquiteto de soluções atua como um "vendedor" e é frequentemente o braço direito da área comercial. Ele participa de reuniões para dar suporte técnico, aprofundando a discussão quando necessário, com o objetivo de justificar e conseguir a aprovação da solução proposta perante a diretoria.

💰 **TCO (Total Cost of Ownership)**   
TCO, ou Custo Total de Propriedade, refere-se ao custo completo de uma solução ao longo do tempo. Ele não inclui apenas o desenvolvimento inicial, mas também os custos contínuos de manutenção, como correções, atualizações e criação de novos recursos. Um erro comum das empresas é considerar apenas o custo de desenvolvimento, ignorando o impacto financeiro a longo prazo.

事例 **Exemplo Prático: Apache Kafka vs. SQS**   
Um aluno propôs usar Apache Kafka em um projeto, mas não soube justificar o porquê além do "hype". O professor destacou que apenas a manutenção do Kafka representaria 50% do custo total do projeto ao longo do tempo. Uma solução mais simples e barata, como o Amazon SQS, resolveria o problema com um custo muito menor.

💡 **Insights e Conclusões**

* **Dinheiro é fundamental:** Não adianta criar uma solução mirabolante se ela for muito cara para manter.  
* **Cuidado com o viés e o "hype":** É preciso ter cuidado para não escolher tecnologias complexas e caras sem uma necessidade real. No exemplo, o aluno estava "cego" e "enviesado" para usar Kafka.  
* **Pense a longo prazo:** Um bom profissional deve ser capaz de responder à pergunta: "Quanto vai custar este projeto pelos próximos cinco anos?". Ignorar essa questão é um erro comum.

## **Aprofundando no TCO**   {#aprofundando-no-tco}

🎯 **Aprofundamento em TCO (Total Cost of Ownership)**   
O TCO é uma métrica financeira que representa o custo total de comprar, desenvolver e operar uma solução ao longo do tempo. Um arquiteto de soluções usa o TCO para avaliar se é melhor construir uma solução internamente ou comprar uma pronta no mercado, considerando que desenvolver é caro e, se uma solução externa mantiver o diferencial competitivo, a compra é uma opção viável.

📋 **Componentes e Custos da Operação**   
O TCO vai além da compra ou desenvolvimento. Ele inclui custos operacionais como:

* **Infraestrutura:** Servidores necessários para rodar a solução.  
* **Suporte:** Equipes para dar suporte tanto aos usuários finais quanto aos desenvolvedores.  
* **Observabilidade:** Ferramentas para garantir que o sistema está funcionando de forma confiável.  
* **Planos de Contingência:** O custo de ter planos A, B e C para lidar com falhas, inclusive de sistemas externos (ex: gateway de pagamento, SEFAZ), pois o impacto no negócio é responsabilidade da empresa.

💡 **Exemplo de Custo vs. Benefício: Netflix**   
O professor exemplifica o TCO com a Netflix. A empresa certamente poderia criar um modelo de recomendação de filmes ainda melhor do que o atual. No entanto, o custo computacional para rodar esse modelo "perfeito" provavelmente inviabilizaria o negócio. A conclusão é que, às vezes, é melhor ter um modelo "meia boca" que funciona e é financeiramente sustentável do que um modelo perfeito que é caro demais para manter.

🗂️ **Formatos de Custo Dentro do TCO**   
O professor detalha os custos que compõem o TCO em cinco etapas do ciclo de vida de uma solução:

1. **Aquisição:** O custo inicial de compra do software ou da tecnologia.  
2. **Implementação:** O custo para fazer a solução funcionar no ambiente da empresa, mesmo que seja um software de terceiro. Pode envolver consultores ou equipes dedicadas.  
3. **Manutenção:** O custo do dia a dia para manter a solução funcionando, corrigir bugs e fazer pequenas atualizações.  
4. **Operação:** O custo para garantir que a solução opere de forma estável e contínua.  
5. **Inativação:** O custo, muitas vezes esquecido, de *desligar* uma solução. Isso inclui migrar dados para outro sistema, custos de quebra de contrato, lidar com recursos contratados (como servidores alugados por longo prazo) e contratar pessoal para o processo de desativação.

## **Enterprise architecture vs solution architecture**   {#enterprise-architecture-vs-solution-architecture}

🏢 **Arquitetura Corporativa (Enterprise Architecture)**   
Possui uma visão da corporação como um todo, permeando toda a organização. Ela trabalha no planejamento e implementação da estrutura organizacional, considerando os três pilares do ecossistema enterprise: **pessoas, processos e tecnologia**. Sua principal função é definir as diretrizes gerais que devem ser seguidas por qualquer projeto ou solução desenvolvida na empresa.

📐 **Arquitetura de Soluções (Solution Architecture)**   
Tem o foco em uma solução ou sistema específico. Ela define a estrutura, as características, os comportamentos e, crucialmente, as relações de um sistema: com quais outros sistemas ele irá se comunicar e quem se comunicará com ele. Ela opera dentro dos limites estabelecidos pela Arquitetura Corporativa.

💡 **A Relação de Hierarquia**   
A Arquitetura Corporativa funciona como um **"guarda-chuva"** que norteia todas as Arquiteturas de Soluções. A Arquitetura de Soluções está "embaixo" da corporativa.

* **Exemplo prático:** Se a Arquitetura Corporativa define que a empresa deve usar ERPs externos e contratar consultores para implementá-los, o Arquiteto de Soluções, ao iniciar um novo projeto, já parte desse princípio. Ele está "amarrado" a essa tecnologia e ao tipo de profissional (terceirizado) que irá trabalhar na solução, pois essa é a diretriz geral da organização.

## **3 Camadas da arquitetura de solução**   {#3-camadas-da-arquitetura-de-solução}

🎯 **As Três Camadas da Arquitetura de Solução**   
O professor introduz a necessidade de pensar em três camadas distintas ao arquitetar uma solução, de forma análoga à separação de camadas no desenvolvimento de software. Essa abordagem estruturada evita que tudo vire "uma bagunça" e permite resolver problemas específicos de forma organizada.

📋 **Os Três Níveis Detalhados**   
Cada camada foca em um aspecto diferente do problema, e devem ser pensadas em sequência:

* **1\. Nível 0: Arquitetura Focada no Negócio** 📈  
    
  * **Objetivo:** Entender o problema a ser resolvido.  
  * **Questões abordadas:** O que é possível? Quais são os módulos? Quais os requisitos funcionais e não funcionais? Como a solução vai operar na empresa e quantas pessoas irão utilizá-la?


* **2\. Nível 1: Arquitetura Focada na Área Técnica** ⚙️  
    
  * **Objetivo:** Traduzir as necessidades do negócio em um plano de ação técnico.  
  * **Questões abordadas:** Como a solução será desenvolvida? Quais tecnologias serão usadas? Como funcionarão as integrações? Qual o custo? Quantos desenvolvedores serão necessários? O que será desenvolvido internamente e o que será integrado?


* **3\. Nível 2: Arquitetura Focada no Deployment** ☁️  
    
  * **Objetivo:** Definir a infraestrutura e como a solução será entregue e operada.  
  * **Questões abordadas:** Onde a solução vai rodar? Como serão as esteiras (CI/CD)? Como será garantida a qualidade e os testes?  
  * **Observação:** O professor destaca que muitos associam o Arquiteto de Soluções apenas a este nível (especialmente os de provedores de cloud como AWS e Google), mas esta é apenas a camada final do processo.

💡 **Insights e Conclusões**

* **Separação de Responsabilidades:** A principal vantagem de usar as três camadas é a capacidade de separar as preocupações. Isso permite tomar decisões mais assertivas para cada área (negócio, técnica, infraestrutura) sem misturar tudo e se perder.  
* **O Perfil do Bom Arquiteto:** Um bom arquiteto de soluções precisa dominar as três áreas. Ele deve saber:  
  1. Ouvir e pensar no **negócio**.  
  2. Entender como a solução será **desenvolvida** (área técnica).  
  3. Planejar como a solução será **entregue** e operada (infraestrutura/deployment).

## **Nível 0 Negócio**   {#nível-0-negócio}

🔭 **A Visão do Projeto (Nível 0: Negócio)**   
A "Visão" é o primeiro passo na camada de negócio e busca deixar claros os objetivos da solução de uma forma empírica e lógica, estabelecendo a sua "razão de existir". O arquiteto de soluções não pode ser como um desenvolvedor que apenas executa tarefas; ele precisa entender a visão geral do projeto para guiar as decisões.

📋 **Capturando uma Visão Abstrata**   
Muitas vezes, a visão não é algo que está escrito ou formalmente definido. Ela nasce de uma ideia geral de um diretor ou dono da empresa, que não conhece os detalhes técnicos. O trabalho do arquiteto é ter o "feeling" para entender e capturar essa visão, que muitas vezes é abstrata e precisa ser compreendida através de conversas e da experiência.

🎟️ **Exemplo Prático: Visão de uma Startup de Ingressos**   
O professor ilustra o conceito com um exemplo:

* **Visão:** Criar uma startup para venda de ingressos.  
* **Diferenciais da Visão:** O processo de compra deve ser extremamente simples e rápido (via celular/tablet), os ingressos devem ser mais baratos e o sistema deve incentivar o cliente a voltar sempre.  
* **Resultado:** Essa visão inicial define os objetivos principais que guiarão todas as decisões futuras no desenvolvimento da solução.

👥 **Visão e os Stakeholders**   
A visão também ajuda a identificar os **stakeholders**, que são todos os envolvidos e interessados no projeto (funcionários, clientes, parceiros, etc.). Ao entender a visão de alto nível, o arquiteto consegue mapear quais pessoas e grupos precisarão ser envolvidos para que a solução seja bem-sucedida.

💡 **Insights e Conclusões**

* A principal tarefa do arquiteto, neste nível, é conseguir captar o **"cerne"** de uma ideia geral e transformá-la em objetivos que guiarão o projeto.  
* A visão não é sobre detalhes técnicos, mas sobre entender o **"porquê"** da existência da solução e como ela impactará o negócio.  
* O arquiteto deve ser proativo em entender a visão, pois ela raramente será entregue de forma detalhada e pronta.

## **Nível 0 Escopo**   {#nível-0-escopo}

🎯 **Definindo o Escopo (Nível 0\)**   
Após a "Visão", o próximo passo no nível de negócio é definir o "Escopo". O escopo é onde os detalhes são definidos, estabelecendo os limites (ou *boundaries*) da solução. Ele especifica claramente até onde a solução vai, o que ela fará e, crucialmente, o que ela *não* vai entregar.

📋 **Componentes do Escopo**   
O escopo define de forma mais concreta:

* O problema exato que será resolvido.  
* Os requisitos funcionais e não funcionais.  
* Os componentes, sistemas e tecnologias que a solução irá utilizar.

⚖️ **Restrições e Pressupostos**   
O escopo também deve considerar dois fatores importantes que influenciam o design da solução:

* **Restrições:** Limitações que o projeto deve respeitar, podendo ser de negócio, tecnologia ou tempo.  
* **Pressupostos:** As condições ou premissas que são consideradas verdadeiras para que a solução seja viável. Por exemplo: para criar um sistema de ingressos baratos, o arquiteto pode partir do *pressuposto* de que terá parceiros e um desconto em um provedor de nuvem.

💡 **Insights e a Realidade do Arquiteto de Soluções**

* **Sequência Lógica:** A definição da visão e do escopo conclui o entendimento do negócio (Nível 0). Somente com isso bem definido é que se deve avançar para o Nível 1 (solução técnica).  
* **O Trabalho Real:** O professor enfatiza que a função de Arquiteto de Soluções **não tem glamour**. É um trabalho que envolve muita documentação, criação de diagramas, contato com fornecedores e cotações. Para muitas pessoas que vêm de uma área técnica e gostam de "botar a mão na massa", o trabalho pode ser considerado "massante", e elas talvez preferissem continuar como desenvolvedores ou arquitetos de software.

## **Domínio e contextos**   {#domínio-e-contextos}

🎯 **Domínio e Contexto: A Base do Negócio**   
Ao arquitetar uma solução na camada de negócios (Nível 0), é crucial focar 100% no **domínio** (o problema a ser resolvido) e no **contexto** em que a empresa se encontra. O professor enfatiza que não existe "fórmula mágica" e que o arquiteto de soluções precisa ter um conhecimento aprofundado do negócio antes de qualquer coisa, pois não se pode simplesmente "sair rabiscando e codificando".

👥 **Entendendo as Diferentes Perspectivas**   
É fundamental olhar o negócio pelo ponto de vista de seus diferentes participantes (vendedores, parceiros, departamentos). Cada área de uma empresa possui uma cultura própria e encara os problemas de maneira distinta. O professor menciona que abordará os conceitos de "view" e "view point" mais à frente.

💡 **O Risco do Boicote Cultural**   
Ignorar as diferentes perspectivas pode levar a um grande problema cultural e à baixa adoção da nova solução. O professor cita o exemplo de funcionários que ficam "muito bravos" e até **boicotam** novos sistemas. Isso acontece porque as decisões são tomadas "de cima para baixo", sem um aprofundamento nas perspectivas dos colaboradores que utilizarão a ferramenta no dia a dia. Entender o domínio e o contexto torna o processo de adoção "um pouquinho mais fácil".

🗣️ **Próximo Passo: A Linguagem**   
Ao entender o domínio e delimitar os contextos, a próxima etapa é pensar na **linguagem** falada na empresa. O professor antecipa que este será o tema do próximo vídeo, destacando sua extrema importância na definição de uma solução.

## **Domínio contextos e linguagem**   {#domínio-contextos-e-linguagem}

🎯 **A Linguagem Dentro do Domínio e Contexto**   
Continuando na camada de negócio, o professor foca na importância da **linguagem**. Ele afirma que esta não é uma discussão filosófica, mas "ciência pura". O ponto central é que diferentes áreas e departamentos dentro de uma mesma empresa usam palavras diferentes para se referir à mesma entidade, e ignorar isso é um erro grave na arquitetura de uma solução.

📋 **Exemplo Prático: Ingresso vs. Ticket**   
Para ilustrar o problema, o professor usa o exemplo de uma empresa de venda de ingressos:

* A área de **Vendas** chama o produto de **"ingresso"**.  
* A área de **Suporte** e os **Parceiros** (que cadastram os eventos) chamam o mesmo produto de **"ticket"**.  
* **Conflito:** Essa diferença causa confusão. Um vendedor não entenderia o comando "criar um novo ticket". Uma conversa entre Suporte e Parceiros sobre "um novo ticket" seria ambígua, pois não ficaria claro se é um ticket de suporte ou um ingresso para um evento.

💡 **Insights e Conclusões**

* **Falha Anunciada:** Ignorar a linguagem específica de cada área significa **falhar na solução antes mesmo de começar a pensar nos pontos técnicos**. A solução acabaria sendo construída com a "cabeça do arquiteto" e não com a visão dos funcionários que a utilizarão.  
* **Conexão com DDD:** O professor conecta essa ideia diretamente ao conceito de **Linguagem Ubíqua** (ou universal) do Domain-Driven Design (DDD), mostrando que a modelagem do negócio está intrinsecamente ligada à linguagem falada na organização.  
* **Dica Prática: Criar um Glossário:** A recomendação prática é **criar um glossário** por área ou por tipo de stakeholder. Isso funciona como um dicionário para entender a comunicação de cada grupo, sendo vital inclusive para futuras integrações de sistemas.  
* **A Importância dos Fundamentos:** O professor finaliza reforçando que, embora o tema possa parecer "blá blá blá" por não envolver código, entender esses fundamentos é o que realmente faz a diferença e separa um bom profissional.

## **Lei de Conway**   {#lei-de-conway}

⚖️ **A Lei de Conway**  
O professor introduz um princípio fundamental: a estrutura organizacional da empresa afeta diretamente a forma como os sistemas são desenvolvidos e arquitetados. Este princípio é conhecido como a **Lei de Conway**.

📋 **Definição e Exemplos da Lei**

* **A Definição:** A lei afirma que "o design de um sistema é influenciado pela estrutura organizacional do grupo que o produz". Em outras palavras, a arquitetura de um sistema reflete os limites sociais e a estrutura de comunicação do grupo que o criou.  
* **Exemplo 1 (Estrutura da Equipe):** Se uma equipe é dividida em especialistas de front-end, back-end e banco de dados (DBA), a aplicação resultante provavelmente será organizada da mesma forma: um front-end, um back-end e um banco de dados.  
* **Exemplo 2 (Monólitos vs. Microsserviços):** Uma equipe acostumada a desenvolver sistemas monolíticos terá dificuldade em criar uma arquitetura de microsserviços real. A tendência é que eles acabem criando "sistemas monolíticos de forma distribuída", pois a forma de pensar e se comunicar da equipe leva a um alto acoplamento entre os serviços.

💡 **Insights e Conclusões**

* **O RH define a arquitetura?** O professor cita uma tirinha humorística que conclui: se a Lei de Conway é verdadeira e o RH define a estrutura da organização, então, no final das contas, o RH define a arquitetura do software. Embora seja uma brincadeira, reflete a verdade por trás do princípio.  
* **Reflexão Prática:** O professor incentiva os alunos a pensarem nas empresas onde trabalharam e observarem como o reflexo da estrutura da equipe era visível no produto final gerado.  
* **O Papel do Arquiteto:** É muito difícil fugir da Lei de Conway. Portanto, a tarefa do arquiteto é entender o negócio e a estrutura organizacional para **antever** como isso afetará o software. Essa antecipação ajuda a não cair em "ciladas" durante o projeto do sistema.

## **View viewpoints**   {#view-viewpoints}

🎯 **Diferença Fundamental: View vs. Viewpoint**   
O professor introduz dois conceitos essenciais para a documentação de arquitetura, explicando a diferença crucial entre eles:

* **View (Visão):** É a **representação** de um ou mais aspectos estruturais de uma arquitetura. É o resultado, o artefato que ilustra como a solução aborda as preocupações de um stakeholder. Em resumo, é *o que* se está vendo (ex: um diagrama).  
* **Viewpoint (Ponto de Vista):** É a **perspectiva** a partir da qual uma *view* é construída. É a coleção de padrões e convenções que define *quem* são as partes interessadas (stakeholders) e quais são suas preocupações. Em resumo, é a "lente" através da qual se olha.

📱 **Exemplo Prático: O Celular**   
Para clarificar a diferença, o professor usa o exemplo de olhar para um celular. A mesma coisa (o celular) gera diferentes visões dependendo do ponto de vista de quem olha:

* **Ponto de Vista do Engenheiro de Software:** Ele olha e pensa no sistema operacional, na bateria, etc.  
* **Ponto de Vista do Designer:** Ele olha e pensa no peso, nas formas (*shapes*), no software usado para modelar.  
* **Outros Pontos de Vista:** O mesmo se aplica a um fabricante de vidro, um desenvolvedor, um profissional de logística, etc. Cada um tem um ponto de vista diferente e precisa de informações diferentes.

💡 **Implicações para o Arquiteto de Soluções**

* **Múltiplas Perspectivas:** Ao criar uma solução, o arquiteto invariavelmente terá que olhar para a mesma coisa sob diversos pontos de vista.  
* **Agradar a Todos:** O objetivo é "agradar" diversas áreas e stakeholders. Para isso, o arquiteto precisa se colocar no lugar dessas pessoas e criar *views* (representações) que mostrem como a solução atende às preocupações de cada *viewpoint* (ponto de vista).  
* **Próximo Passo:** O professor antecipa que o próximo tópico, um documento antigo chamado **"quatro mais um" (4+1)**, ajudará a entender melhor e aplicar os conceitos de View e Viewpoints.

## **4+1**   {#4+1}

🎯 **O Modelo 4+1 de Arquitetura de Software**   
O professor introduz um modelo clássico de documentação, uma "blueprint" ou "planta arquitetural", criado em 1995, chamado **4+1 View Model of Software Architecture**. A ideia central é que diferentes *viewpoints* (pontos de vista) podem ser usados para descrever um sistema, todos amarrados por um **cenário** específico.

📋 **As Visões (Views) na Prática: Exemplo da Compra de Ingresso**   
Para ilustrar como o modelo funciona, o professor usa o cenário de "processo de compra de um ticket" e descreve como diferentes visões seriam aplicadas a ele:

* **Visão Lógica:** Mostraria cada "pedaço" do sistema, as condições e a estrutura lógica do processo de compra.  
* **Visão de Processo:** Focaria em como o processo de compra flui dinamicamente: o usuário compra, o sistema envia um e-mail, se comunica com o gateway de pagamento, trata sucessos e falhas, etc.  
* **Visão Física:** Focaria na infraestrutura: onde os dados serão armazenados, como a solução irá escalar, quais servidores serão utilizados, etc.  
* **Visão de Desenvolvimento:** O ponto de vista de quem irá construir a solução.

💡 **Insights e Conclusões**

* **Flexibilidade do Modelo:** O professor expressa sua opinião pessoal de que não é necessário seguir rigidamente as quatro visões propostas (lógica, processo, física, desenvolvimento). O mais importante é pensar: "que ponto de vista é interessante e que vai fazer sentido para os demais stakeholders?". O modelo deve ser adaptado à realidade do projeto.  
* **O Objetivo é a Clareza:** O uso de diferentes visões, quando aplicável, torna a solução mais fácil de ser visualizada e compreendida por diferentes pessoas envolvidas.  
* **Próximo Passo:** O professor conclui anunciando que, embora haverá um módulo específico sobre documentação (*design docs*), ele já quer "levantar a bola" sobre o tema no próximo vídeo.

## **The “4+1” View Model of Software Architecture**   {#the-“4+1”-view-model-of-software-architecture}

link: [https://mbafullcycle.s3.us-east-1.amazonaws.com/system-design/The\_41\_View\_Model\_of\_Architecture.pdf](https://mbafullcycle.s3.us-east-1.amazonaws.com/system-design/The_41_View_Model_of_Architecture.pdf) 

## **Risco vs Documentação**   {#risco-vs-documentação}

🤔 **O Dilema da Documentação**   
O professor aborda uma pergunta muito comum para qualquer profissional, especialmente arquitetos: "Até que ponto eu tenho que documentar as coisas que eu faço?".

⚖️ **A Resposta: Tudo Depende do Risco**   
A resposta para a pergunta não é fixa; ela é totalmente proporcional ao **risco** da solução. A regra geral é:

* Quanto **maior o risco**, maior a necessidade de documentar, de analisar múltiplos pontos de vista e de ter um "double check" em cada etapa.  
* Quanto **menor o risco**, menor a necessidade de formalização e documentação.

📋 **Exemplos Práticos: Risco Baixo vs. Risco Alto**   
O professor usa dois exemplos contrastantes para ilustrar o conceito:

* **Baixo Risco (CRUD para Padaria 🥖):** Um sistema simples, de fácil manutenção e com baixo impacto em caso de falha. Neste cenário, criar uma documentação extensa com múltiplos pontos de vista (padeiro, caixa) provavelmente não vale a pena, pois o risco é baixo.  
* **Alto Risco (Transferência Bancária 🏦):** Um sistema complexo em um banco, que se conecta com o Banco Central, mainframes, microsserviços, Kafka, etc. O risco de uma falha é altíssimo e pode ter consequências graves. Portanto, este tipo de solução exige um alto nível de documentação e formalização.

💡 **Insights e a "Crise" do Arquiteto**

* O professor alerta que é muito comum, principalmente para quem está começando na carreira de arquiteto (seja de solução ou de software), querer documentar absolutamente tudo, mesmo um CRUD simples de baixo impacto.  
* Ele compara esse comportamento à "crise de paternidade" de um desenvolvedor com design patterns, onde se tenta aplicar padrões em todos os lugares, mesmo sem necessidade.  
* A recomendação final é usar o **bom senso**: reflita sobre o risco que a solução representa para a organização como um todo e, a partir daí, decida se a documentação é necessária e qual deve ser o seu nível de detalhe.

## **Questionário** {#questionário}

✅ **O que diz a lei de Conway?**  
A estrutura de uma solução de software espelhará a estrutura de comunicação da organização que a construiu.

✅ **O que o modelo de visão "4+1" representa na arquitetura da solução?**  
Um conjunto de visualizações de arquitetura que fornecem diferentes perspectivas sobre uma solução de software.

✅ **O que significa TCO no contexto da tecnologia?**  
Total Cost of Ownership

✅ **Qual é a diferença entre arquitetura de solução e arquitetura corporativa?**  
A arquitetura da solução é focada nas necessidades de tecnologia de unidades de negócios específicas (BU), enquanto a arquitetura corporativa é focada nas necessidades de tecnologia da organização como um todo.

✅ **O que é observabilidade?**  
A capacidade de monitorar o estado interno de um sistema.

✅ **Quais são os 3 pilares da observabilidade?**  
Logs, Métricas e Traces.