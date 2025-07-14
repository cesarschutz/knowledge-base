# 🌐 Cloud Native

## **Introdução** {#introdução-1}

☁️ **Definição de Soluções Cloud Native**

O professor introduz o conceito de soluções **Cloud Native** como aquelas que **"nasceram diretamente para serem utilizadas na nuvem"**. São ferramentas e aplicações específicas que foram criadas *após* o surgimento do "momento cloud" e, por isso, são projetadas para rodar em qualquer tipo de nuvem.

📈 **A Evolução até o Cloud Native**

Para contextualizar, o professor descreve uma linha evolutiva da computação:

1. Aplicações antigas rodando em um único núcleo (**monothread**).  
2. Aplicações que evoluíram para usar **multithreading** e **paralelismo**.  
3. Sistemas que se tornaram **distribuídos**.  
4. E, finalmente, as soluções **Cloud Native**, que são distribuídas por natureza e aproveitam as capacidades da nuvem, como escalar e "desescalar" de forma dinâmica.

🗺️ **Roteiro do Capítulo**

O professor antecipa que este capítulo abordará o universo das soluções Cloud Native e também falará sobre a **CNCF (Cloud Native Computing Foundation)**, a fundação que rege muitos desses projetos.

## **Entendendo soluções Cloud Native** {#entendendo-soluções-cloud-native}

🎯 **O Que São Soluções Cloud Native?**

O professor aprofunda a definição: soluções cloud native não são apenas aplicações "jogadas" na nuvem. Elas são **desenhadas desde o início para tirar vantagem dos recursos da nuvem**, como alta disponibilidade, distribuição em múltiplas regiões, escalabilidade, etc. A mentalidade é criar algo já pensando que vai rodar em um ambiente distribuído.

🧩 **Características das Soluções Cloud Native**

* **Modulares:** Geralmente, são compostas por módulos que rodam de forma distribuída em máquinas e "nós" diferentes, formando um **cluster**.  
* **Aproveitam a Nuvem:** Por serem modulares, a nuvem pode potencializar sua operação. Se um módulo específico recebe muito acesso, a nuvem pode escalar apenas aquele módulo, garantindo alta disponibilidade, segurança e confiabilidade de forma eficiente.

📋 **Exemplos de Soluções Cloud Native**

O professor lista uma série de ferramentas e tecnologias que exemplificam o conceito:

* **Docker:** Permite empacotar uma aplicação em um contêiner que se comporta da mesma forma em qualquer nuvem ou máquina.  
* **Kubernetes:** Descrito como o **"sistema operacional da nuvem"**. É a base sobre a qual outras soluções cloud native rodam, gerenciando clusters, escalabilidade e alta disponibilidade.  
* **Ecossistema Kubernetes:**  
  * **Helm:** Para instalação de módulos no Kubernetes.  
  * **Istio e Linkerd:** Service meshes que rodam em cima do Kubernetes.  
  * **Envoy:** O proxy usado pelo Istio.  
* **Apache Kafka:** Um sistema de streaming de dados projetado para rodar de forma distribuída, com altíssima performance.  
* **Prometheus e OpenTelemetry:** Ferramentas de observabilidade que também são cloud native.  
* **AWS Lambda (e equivalentes):** Funções como serviço que já nasceram prontas para o ambiente de nuvem.  
* **Argo CD:** Ferramenta para deployments usando a abordagem de **GitOps**, onde o estado da aplicação no cluster é sincronizado com um repositório Git.  
* **Produtos da HashiCorp:**  
  * **Vault:** Para *Secret Management*.  
  * **Consul:** Para *Service Mesh* e *Service Discovery*.  
  * **Terraform:** Para provisionamento de infraestrutura como código (IaC).

💡 **A Onipresença do Cloud Native**

O professor conclui mostrando como essas ferramentas são comuns no dia a dia de uma empresa de tecnologia moderna. Ele cita que, em sua própria empresa, eles usam a maioria das ferramentas listadas (Docker, Kubernetes, Helm, Prometheus, OpenTelemetry, Lambda, Argo CD e Terraform), demonstrando que o ecossistema cloud native não é algo distante, mas sim a base da operação atual. Ele também reforça que uma das grandes vantagens é a portabilidade: uma solução como o Kubernetes roda da mesma forma na AWS, Google ou Azure.

## **CNCF** {#cncf}

🌐 **O Que é a CNCF (Cloud Native Computing Foundation)?**

O professor explica que a CNCF é uma fundação cuja missão é reunir **top developers, usuários finais e vendors** (empresas fornecedoras de serviços). Além disso, ela é responsável por organizar algumas das maiores conferências de desenvolvedores do mundo.

🏢 **Estrutura e Origem**

* A CNCF é parte da **Linux Foundation**, ou seja, não nasceu do nada, mas sim sob a égide de uma fundação já estabelecida.  
* É uma organização **sem fins lucrativos**, criada em 2015, com os primeiros projetos sendo incorporados no início de 2016\.

🔧 **O Papel da CNCF com os Projetos**

O papel mais importante da CNCF é atuar como um grande "hub" de projetos, desenvolvedores e empresas. Ela é responsável por diversos projetos famosos que estão "debaixo da sua asa".

* **Projetos Famosos:** **Kubernetes**, **Prometheus**, **OpenTelemetry**, **Envoy**, **Jaeger**, entre outros.  
* **Curadoria e Suporte:** A CNCF possui "comissões" que avaliam se um projeto pode entrar para a fundação. Uma vez aceito, ela dá suporte e ajuda a manter esses projetos vivos, juntando comunidades em torno deles.  
* **Crescimento:** No momento da gravação, a fundação contava com 153 projetos, um número que, segundo o professor, está sempre crescendo.

🎓 **Certificações da CNCF**

A CNCF também oferece diversos programas de certificação que servem para "balizar o mercado", ajudando as empresas a contratar profissionais qualificados. O professor lista algumas das principais certificações:

* **CKAD:** Certified Kubernetes Application Developer  
* **CKA:** Certified Kubernetes Administrator  
* **CKS:** Certified Kubernetes Security Specialist  
* **KCNA:** Kubernetes and Cloud Native Associate  
* **PCA:** Prometheus Certified Associate

## **Tipos de projetos** {#tipos-de-projetos}

🎓 **Os Três Níveis de Maturidade dos Projetos CNCF**

O professor explica que a CNCF categoriza os projetos sob sua tutela em três níveis distintos de maturidade, o que ajuda as empresas e desenvolvedores a entenderem o grau de risco que estão assumindo ao adotar uma tecnologia.

1. **Graduated (Graduado):**  
     
   * **O que é:** O nível mais alto de maturidade. São projetos que estão no ecossistema há muito tempo, são estáveis e foram **largamente testados** pela comunidade global.  
   * **Exemplo:** Kubernetes.  
   * **Perfil do Adotante:** Pessoas e empresas mais **conservadoras**, que só utilizam tecnologias comprovadamente maduras.

   

2. **Incubating (Em Incubação):**  
     
   * **O que é:** O "meio termo". São projetos que, embora novos, já estão mais maduros e muitos deles **podem ser utilizados em produção**. No entanto, ainda estão em constante desenvolvimento e não foram testados em um volume tão grande quanto os projetos graduados.  
   * **Perfil do Adotante:** Pessoas e empresas mais **pragmáticas**.

   

3. **Sandbox (Caixa de Areia):**  
     
   * **O que é:** O nível inicial. São projetos novos e promissores que a CNCF acredita que têm potencial e, por isso, decide dar suporte.  
   * **Riscos:** Podem mudar constantemente e **quebrar a compatibilidade** entre versões.  
   * **Perfil do Adotante:** **Early adopters**, descritos pelo professor como aquelas pessoas "malucas" que têm a coragem de colocar um projeto na versão 0.1 em produção.

💡 **O Que Significa o "Suporte" da CNCF?**

O professor esclarece o que significa para um projeto estar "debaixo da asa" da CNCF:

* **Processo de Aplicação:** Um projeto precisa ser submetido a uma comissão, que avalia se faz sentido adotá-lo.  
* **Suporte da Comunidade:** Se aceito, a CNCF ajuda a **mentorear, direcionar e divulgar** o projeto, juntando desenvolvedores e empresas em torno dele para que ele possa receber mais contribuições e crescer. É muito diferente de um desenvolvedor tentando divulgar um projeto sozinho.

📊 **A Evolução dos Projetos na CNCF (Gráfico)**

O professor apresenta um gráfico (com dados até janeiro de 2023\) que mostra o crescimento da CNCF desde 2016\. A análise do gráfico revela:

* Muitos projetos que começaram em *incubating* hoje são *graduated*.  
* A partir de 2020, houve um "boom" de projetos entrando no nível *sandbox*, mostrando o investimento da fundação em novas tecnologias promissoras.  
* Existem também os projetos **arquivados** (em cinza no gráfico), que são aqueles que "não rolaram" e foram descontinuados.

A conclusão é que, após essa explicação, todos estão "na mesma página" sobre o que é a CNCF, e o aluno não ficará mais perdido quando o tema for mencionado.

## **Questionário** {#questionário-3}

**Qual dos seguintes é um exemplo de dados de log?**  
Um registro de erros do sistema

**Qual é o objetivo do rastreamento distribuído (tracing) na observabilidade?**  
Rastrear a interação de componentes do sistema em um ambiente distribuído

**Qual é o benefício da observabilidade em relação à resolução de problemas?**  
A observabilidade ajuda a identificar a causa raiz de problemas no sistema

**Qual é a diferença entre métricas e logs na observabilidade?**  
Métricas são informações sobre o desempenho do sistema, enquanto logs registram a atividade e eventos relevantes de um aplicativo

**O que é o Prometheus?**  
Um sistema de monitoramento e alerta de métricas

**Qual é a principal diferença entre os mecanismos de push e pull para coletar métricas?**  
No push o sistema alvo envia as métricas ao servidor; no pull o servidor solicita as métricas ao sistema alvo

**Qual é o objetivo do OpenTelemetry?**  
Padronizar a coleta de dados de telemetria em ambientes distribuídos

**O que é um ambiente on-premise?**  
Computação local em que os recursos são gerenciados internamente pela organização

**O que é um ambiente de computação em nuvem pública?**  
Ambiente de nuvem cujos recursos são compartilhados entre várias organizações

**Qual é uma desvantagem do modelo on-premise em relação à nuvem?**  
Maior custo inicial para adquirir e implantar infraestrutura

**O que é a CNCF?**  
Organização sem fins lucrativos que promove tecnologias open-source para aplicações cloud-native

**Qual é a importância da CNCF para adoção de nuvem?**  
Promove padronização de tecnologias, aumentando a interoperabilidade entre plataformas

**Quais são os quatro estágios de projetos da CNCF?**  
Graduated, Incubating, Sandbox e Archived

**Qual a principal diferença entre os estágios Graduated e Incubating?**  
Projetos Graduated são mais maduros e possuem base de usuários maior que os Incubating

**Qual é o processo para iniciar um novo projeto na CNCF?**  
Qualquer pessoa pode submeter uma proposta; um comitê técnico avalia antes de aprovar ou rejeitar