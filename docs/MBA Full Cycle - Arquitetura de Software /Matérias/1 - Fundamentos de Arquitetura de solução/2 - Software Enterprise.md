# 🏢 Software Enterprise

## **Softwares enterprise** {#softwares-enterprise}

**🧱 Antes da Arquitetura de Solução, vem o contexto**

- Arquitetura de Solução geralmente é aplicada em **ambientes corporativos**, especialmente quando se fala em **Softwares Enterprise**.

**💼 O que são Softwares Enterprise?**

- São sistemas usados por **grandes corporações**, **governos** ou **unidades de negócio** (BUs) dentro dessas organizações.  
- Lidam com alta complexidade, grande volume de usuários, integração entre setores, compliance, contabilidade e regras locais/globais.

**🌍 Exemplos práticos**

- **Multinacionais** com operações em vários países precisam de sistemas que respeitem leis, impostos e processos locais — isso exige software robusto e altamente integrado.  
- Até **pequenas ou médias empresas** que atuam globalmente podem precisar de software enterprise, pois lidam com desafios semelhantes em escala reduzida.

**🧭 Importância da definição**

- A ideia é alinhar o vocabulário: sempre que o instrutor falar “**Software Enterprise**” durante o curso, ele está se referindo a esse tipo de sistema complexo e corporativo.  
- Pode haver outras definições por aí, mas no contexto do curso, é essa a abordagem.

## **Ecossistema enterprise** {#ecossistema-enterprise}

**🧩 Software Enterprise faz parte de um ecossistema**  
O software **não vive isolado**. Ele está inserido em um **ecossistema empresarial** formado por:

- **Pessoas**  
- **Processos**  
- **Tecnologia**

**🔁 A tríade essencial: Pessoas, Processos e Tecnologia**  
Pessoas precisam de **processos claros** para trabalhar bem.  
Processos são **modelados e automatizados** dentro dos sistemas.  
A tecnologia é o **meio para executar e conectar** tudo isso.

**🧭 Governança: não é burocracia, é sobrevivência**  
A Governança cuida da **organização e funcionamento saudável** da empresa.  
Garante:

- **Eficiência operacional**  
- **Conformidade com leis e normas**  
- **Clareza sobre responsabilidades e estruturas**

Sem governança, tudo vira caos: a operação pode **parar**.

**🧠 O papel do arquiteto de soluções**  
Deve ter uma visão **de alto nível** do ecossistema.  
Considera:

- **Restrições de negócio**  
- **Leis e regulamentações**  
- **Limites orçamentários e de equipe**

Ajuda a **alinhar tecnologia com estratégia organizacional**.

**📌 Conclusão:**  
Software Enterprise \= **Pessoas \+ Processos \+ Tecnologia**  
O Arquiteto de Soluções garante que tudo isso funcione **em sinergia, com governança e propósito**.

## **Escalabilidade** {#escalabilidade}

**🧠 Entendendo as características de um Software Enterprise**  
Agora que já temos a visão do ecossistema Enterprise, é hora de focar nas **características comuns** desses sistemas.  
Essas características impactam diretamente o negócio e devem ser consideradas ao **modelar ou propor uma solução**.

**🔄 O papel do arquiteto de soluções**  
Não é só pensar na técnica — o arquiteto deve entender:

- O **contexto da empresa**  
- O **mercado em que ela atua**  
- E como a solução vai **entregar valor continuamente**

**📈 Escalabilidade: a primeira grande característica**  
Um Software Enterprise precisa ser **escalável**, ou seja:

- Manter sua **capacidade de operação**, mesmo com aumento de usuários ou integrações.  
- Suportar **picos de carga** (ex: folha de pagamento, Black Friday, gateways de pagamento).  
- Conseguir escalar **horizontalmente ou verticalmente**, com **eficiência econômica**.  
- Exemplo prático: um sistema que responde em 100ms com 1 usuário deve manter performance semelhante com 10.000 usuários.

**⚙️ Escalabilidade também envolve:**

- Adição ou remoção de hardware sob demanda  
- Manutenção da **qualidade de serviço** e das **métricas de performance**  
- Garantia de que o sistema esteja sempre **operacional e resiliente**

**📌 Conclusão:**  
A **escalabilidade** é uma característica essencial de qualquer Software Enterprise. Ela garante que o sistema acompanhe o crescimento da empresa sem perder desempenho — e isso é só o começo. No próximo passo, vamos explorar outras qualidades fundamentais.

## **Disponibilidade** {#disponibilidade}

**🟢 Disponibilidade vai muito além de “o sistema está no ar”**  
A princípio, parece simples: disponibilidade é manter o sistema acessível a qualquer momento.  
Mas, quando se aprofunda, surgem **questões de custo, estratégia e eficiência operacional**.

**💰 Custo vs. Disponibilidade**  
Manter um sistema disponível **24/7** pode ser **caríssimo**.  
É essencial avaliar:

- Qual o **nível de disponibilidade necessário**  
- Se vale a pena manter tudo no ar o tempo todo  
- Alternativas mais econômicas (ex: **funções serverless**, como lambdas que sobem sob demanda)

**⚙️ Estratégias para disponibilidade eficiente**

- **Elasticidade sob controle**: escalar apenas quando faz sentido  
- **Entender o que realmente precisa estar disponível**  
- Exemplo: gerar relatórios pesados em tempo real pode sair caro e prejudicar todo o sistema

**🕓 Disponibilidade real ≠ Funcionalidade em tempo real**

- Um sistema pode estar no ar, mas nem todas as **funcionalidades** estão disponíveis no momento desejado  
- Exemplo: ver saldo do banco é imediato, mas extrato de 12 meses pode ser entregue por e-mail depois

**⚖️ Trade-offs e alinhamento com o negócio**

- Decidir entre **disponibilizar tudo em tempo real** ou **agendar entregas assíncronas** depende do custo e da prioridade  
- É necessário alinhar expectativas com o usuário e **negociar o que é realmente importante**

**👥 Decisão estratégica e colaborativa**

- Essas decisões não cabem só ao arquiteto de soluções  
- Envolvem **entendimento profundo do negócio**, das **prioridades** e das **limitações técnicas e financeiras**

**📌 Conclusão:**  
Disponibilidade não é só sobre um sistema funcionando — é sobre a **funcionalidade certa estar disponível no momento certo**, com **custo viável** e **alinhamento com a estratégia do negócio**.

## **Segurança** {#segurança}

**🔐 Segurança: a terceira grande característica de um Sistema Enterprise**  
Segurança não é só senha e criptografia. Em sistemas corporativos, envolve uma abordagem muito mais ampla:

- **Segurança de dados**  
- **Segurança operacional**  
- **Autenticação e autorização**  
- **Segurança de rede**  
- **Compartilhamento de informações**

**🚨 A ameaça pode vir de dentro ou de fora**  
Tanto **colaboradores internos** quanto **sistemas externos** podem representar riscos.  
Por isso, é essencial ter:

- **Processos bem definidos**  
- **Governança corporativa estruturada**  
- **Controles para evitar abusos ou falhas humanas**, inclusive em cargos altos como gerentes ou diretores

**🔑 Três pilares da autenticação segura**  
Quando falamos de autenticação, pense sempre em três fatores combinados:

- **O que você sabe** (ex: senha)  
- **O que você tem** (ex: token físico, pendrive)  
- **O que você é** (ex: biometria, digital, rosto)

Quanto mais camadas forem exigidas, maior a segurança — especialmente para **operações sensíveis e críticas**.

**🧩 Segurança é mais do que tecnologia**  
Ela depende também de:

- **Pessoas bem treinadas**  
- **Processos inteligentes**  
- **Tecnologias alinhadas com governança**

A união desses elementos garante que o sistema se mantenha **seguro, coeso e resiliente**, mesmo em ambientes complexos.

**📌 Conclusão:**  
Segurança em Sistemas Enterprise vai muito além da TI. É um trabalho integrado entre **processos, pessoas e tecnologia**, sempre com foco em proteger dados e operações de ponta a ponta.

## **Customização e modularização** {#customização-e-modularização}

**⚙️ Customização e modularização: um tema polêmico, mas essencial**  
Sistemas Enterprise precisam ser **customizados** para garantir eficiência, mas também **modularizados** para atender diferentes áreas do negócio.

**🏗️ Arquitetura de solução vai além do que os devs constroem**  
Ela envolve:

- Sistemas legados e proprietários  
- Soluções amplamente utilizadas no mercado  
- Integrações com produtos prontos (como ERPs e CRMs)

**📉 Quando a padronização mata o diferencial competitivo**  
No passado, empresas precisavam **se adaptar aos sistemas** e não o contrário.  
Um exemplo real:

- Uma empresa em crise trocou sistemas customizados por uma solução pronta  
- Isso eliminou seu diferencial competitivo  
- Resultado: a empresa foi vendida e desapareceu do mercado

**🛠️ Hoje o cenário é diferente**

- As empresas exigem que os sistemas se **adaptem ao seu modelo operacional**  
- Soluções como SAP, Salesforce e outras permitem **altos níveis de customização**  
- Modularização por unidade de negócio é prática comum

**💸 Customizar tem custo, mas o mercado está mais flexível**

- Há mais opções e tecnologias disponíveis  
- O advento de **SaaS (Software as a Service)** trouxe soluções mais acessíveis  
- Ex: Salesforce permite padronização com alto nível de customização no acesso à informação

**🧩 No-Code e Low-Code estão mudando o jogo**

- Facilitam a criação de **soluções rápidas e pontuais** sem depender da matriz ou de longos ciclos de desenvolvimento  
- Permitem que **usuários treinados criem sistemas internos** com agilidade  
- Ex: uso de Microsoft Access para criar sisteminhas internos que resolvem dores operacionais

**🚀 O impacto dessas ferramentas**

- Aceleram a inovação dentro das empresas  
- Reduzem custos e backlogs  
- Permitem atender demandas locais **sem burocracia**

**📌 Conclusão:**  
A combinação de **customização, modularização e ferramentas Low-Code/No-Code** permite que Sistemas Enterprise sejam mais adaptáveis, ágeis e focados nas necessidades reais do negócio — sem perder eficiência.

## **Integração** {#integração}

**🔗 Integração: inevitável em Sistemas Enterprise**  
Diferente de pequenos sistemas, em ambientes Enterprise a **integração entre softwares** é regra, não exceção.  
Isso ocorre porque:

- Há **múltiplos módulos e necessidades específicas**  
- Existem **vendors diferentes**, soluções próprias e de terceiros  
- Sistemas precisam **"conversar" entre si** de forma eficiente

**🧠 Três perguntas essenciais sobre integração**

1. Os sistemas que estou desenvolvendo se comunicam entre si?  
2. Eles conseguem se integrar com sistemas de terceiros desenvolvidos fora da empresa?  
3. Soluções externas contratadas são **fáceis de integrar**, com **baixo custo** e boa compatibilidade com os sistemas atuais?

**🏗️ Ferramentas e padrões de integração**  
Hoje em dia, o mercado oferece muitas soluções para reduzir a complexidade da integração:

- **Gateways e barramentos de comunicação**  
- **Streams de dados**, como Apache Kafka \+ Kafka Connect  
- Integrações entre áreas diversas, como **estoque, chão de fábrica, apps mobile e até mainframes**

**💼 Profissionais especializados só em integração**  
Há profissionais focados exclusivamente em **integrações complexas**, usando ferramentas como Kafka para:

- Sincronizar dados em tempo real  
- Ligar sistemas legados a soluções modernas  
- Suportar ambientes altamente distribuídos

**📌 Conclusão:**  
Integração é uma característica crítica dos Sistemas Enterprise. Ela exige **planejamento, conhecimento técnico** e **as ferramentas certas** para garantir que todas as peças da empresa estejam realmente conectadas.

## **Observabilidade** {#observabilidade}

**👁️ Observabilidade: enxergando o que está por trás das caixas pretas**  
Sistemas Enterprise integram múltiplos componentes — muitos deles são **black boxes**.  
**Observabilidade** é a capacidade de:

- Inferir se um sistema está funcionando corretamente com base em suas **entradas e saídas**  
- **Detectar falhas**, **quebras de confiança** e **problemas de integração** com base em dados reais

**🛠️ O que compõe a observabilidade?**

- **Logs**: registro detalhado de eventos  
- **Métricas**: monitoramento de performance, latência, throughput  
- **Traços**: rastreamento do caminho dos dados entre sistemas  
  Esses elementos ajudam a entender o comportamento do sistema **em tempo real**.

**📉 Sem observabilidade, não há garantia de funcionamento**  
Se você não tem acesso a logs, métricas e performance, não consegue:

- Saber se um sistema está saudável  
- Investigar falhas  
- Resolver bugs complexos em integrações

**👨‍💻 Devs cada vez mais responsáveis pela observabilidade**  
Antes, esse era um tema restrito à operação.  
Hoje, com o modelo **DevOps** e a cultura de **ownership**, os desenvolvedores:

- Participam diretamente da observabilidade  
- Conseguem interpretar erros e falhas com mais profundidade que o time de infraestrutura

**📌 Conclusão:**  
Observabilidade é **fundamental** em Sistemas Enterprise.  
Ela garante **visibilidade, rastreabilidade e confiabilidade** em ecossistemas distribuídos e altamente integrados — e é uma **responsabilidade compartilhada** entre times de desenvolvimento e operação.