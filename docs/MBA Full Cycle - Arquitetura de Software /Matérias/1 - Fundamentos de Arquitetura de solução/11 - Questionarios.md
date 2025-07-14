# 📝 Questionário

## 🏗️ Solution Architecture

---

**❓ O que diz a lei de Conway?**

> **Resposta:**
> A estrutura de uma solução de software espelhará a estrutura de comunicação da organização que a construiu.

---

**❓ O que o modelo de visão "4+1" representa na arquitetura da solução?**

> **Resposta:**
> Um conjunto de visualizações de arquitetura que fornecem diferentes perspectivas sobre uma solução de software.

---

**❓ O que significa TCO no contexto da tecnologia?**

> **Resposta:**
> Total Cost of Ownership

---

**❓ Qual é a diferença entre arquitetura de solução e arquitetura corporativa?**

> **Resposta:**
> A arquitetura da solução é focada nas necessidades de tecnologia de unidades de negócios específicas (BU), enquanto a arquitetura corporativa é focada nas necessidades de tecnologia da organização como um todo.

---

**❓ O que é observabilidade?**

> **Resposta:**
> A capacidade de monitorar o estado interno de um sistema.

---

**❓ Quais são os 3 pilares da observabilidade?**

> **Resposta:**
> Logs, Métricas e Traces.

---

## 🎯 Designs Patterns

---

**❓ Qual a principal intenção ao implementar o padrão CQRS?**

> **Resposta:**
> Separar a leitura e a gravação de dados em áreas distintas em uma aplicação

---

**❓ O que significa CQRS?**

> **Resposta:**
> Command Query Responsibility Segregation

---

**❓ Qual é a principal diferença entre Event Notification e Event Carried State Transfer?**

> **Resposta:**
> O Event Notification possui apenas as informações necessárias mudando o estado de um sistema, já o ECST possui todos os dados do evento ocorrido

---

**❓ Qual é o objetivo do Distributed Locking?**

> **Resposta:**
> Garantir a consistência dos dados em um ambiente distribuído

---

**❓ Qual é o principal goal do padrão Circuit Breaker?**

> **Resposta:**
> Evitar a falha geral do sistema em caso de erros recorrentes

---

**❓ No caso de um Cache usando LRU: Quais dados devem ser mantidos?**

> **Resposta:**
> Os dados que tiveram acesso mais recentemente

---

**❓ Qual o objetivo de um Sidecar?**

> **Resposta:**
> Um componente independente que roda em conjunto com a aplicação principal

---

**❓ Qual a diferença do Istio para o Envoy?**

> **Resposta:**
> O Istio é um sistema de Service Mesh, já o Envoy um Proxy

---

## ☁️ AWS Well-Architecture Framework

---

**❓ Quais são os 6 pilares do AWS Well-Architected Framework?**

> **Resposta:**
> Excelência operacional, Segurança, Confiabilidade, Eficiência e performance, Otimização de custos, Sustentabilidade

---

**❓ Qual o objetivo do pilar "Excelência operacional" no AWS Well-Architected Framework?**

> **Resposta:**
> Focar na execução e no gerenciamento de sistemas para agregar valor aos negócios

---

**❓ Qual das opções é um benefício do uso do AWS Well-Architected Framework?**

> **Resposta:**
> Ele fornece uma abordagem padronizada para avaliar cargas de trabalho segundo melhores práticas

---

**❓ Qual é uma finalidade do pilar "Confiabilidade" no AWS Well-Architected Framework?**

> **Resposta:**
> Garantir que os sistemas possam se recuperar automaticamente de falhas

---

**❓ Qual é a finalidade do pilar "Eficiência e Desempenho" no AWS Well-Architected Framework?**

> **Resposta:**
> Focar no uso eficiente de recursos para atender aos requisitos de carga de trabalho

---

**❓ Qual das opções a seguir é um exemplo de prática recomendada pelo AWS Well-Architected Framework?**

> **Resposta:**
> Usar várias zonas de disponibilidade para garantir alta disponibilidade e tolerância a falhas

---

## 🌐 Cloud Native

---

**❓ Qual dos seguintes é um exemplo de dados de log?**

> **Resposta:**
> Um registro de erros do sistema

---

**❓ Qual é o objetivo do rastreamento distribuído (tracing) na observabilidade?**

> **Resposta:**
> Rastrear a interação de componentes do sistema em um ambiente distribuído

---

**❓ Qual é o benefício da observabilidade em relação à resolução de problemas?**

> **Resposta:**
> A observabilidade ajuda a identificar a causa raiz de problemas no sistema

---

**❓ Qual é a diferença entre métricas e logs na observabilidade?**

> **Resposta:**
> Métricas são informações sobre o desempenho do sistema, enquanto logs registram a atividade e eventos relevantes de um aplicativo

---

**❓ O que é o Prometheus?**

> **Resposta:**
> Um sistema de monitoramento e alerta de métricas

---

**❓ Qual é a principal diferença entre os mecanismos de push e pull para coletar métricas?**

> **Resposta:**
> No push o sistema alvo envia as métricas ao servidor; no pull o servidor solicita as métricas ao sistema alvo

---

**❓ Qual é o objetivo do OpenTelemetry?**

> **Resposta:**
> Padronizar a coleta de dados de telemetria em ambientes distribuídos

---

**❓ O que é um ambiente on-premise?**

> **Resposta:**
> Computação local em que os recursos são gerenciados internamente pela organização

---

**❓ O que é um ambiente de computação em nuvem pública?**

> **Resposta:**
> Ambiente de nuvem cujos recursos são compartilhados entre várias organizações

---

**❓ Qual é uma desvantagem do modelo on-premise em relação à nuvem?**

> **Resposta:**
> Maior custo inicial para adquirir e implantar infraestrutura

---

**❓ O que é a CNCF?**

> **Resposta:**
> Organização sem fins lucrativos que promove tecnologias open-source para aplicações cloud-native

---

**❓ Qual é a importância da CNCF para adoção de nuvem?**

> **Resposta:**
> Promove padronização de tecnologias, aumentando a interoperabilidade entre plataformas

---

**❓ Quais são os quatro estágios de projetos da CNCF?**

> **Resposta:**
> Graduated, Incubating, Sandbox e Archived

---

**❓ Qual a principal diferença entre os estágios Graduated e Incubating?**

> **Resposta:**
> Projetos Graduated são mais maduros e possuem base de usuários maior que os Incubating

---

**❓ Qual é o processo para iniciar um novo projeto na CNCF?**

> **Resposta:**
> Qualquer pessoa pode submeter uma proposta; um comitê técnico avalia antes de aprovar ou rejeitar

---

## 📋 Solution Architecture Document

---

**❓ Sobre o SAD, é correto afirmar que:**

> **Resposta:**
> É um documento responsável por nortear várias áreas da empresa – técnica, comercial e gestão – sobre o projeto a ser executado.

---

**❓ Quais são os principais requisitos funcionais?**

> **Resposta:**
> Features de valor, recursos, funcionalidades

---

**❓ A frase sobre mensageria e diagrama pertence a qual etapa do SAD?**

> **Resposta:**
> Detalhamento da arquitetura

---

**❓ Marque a opção que lista requisitos não funcionais:**

> **Resposta:**
> Escalabilidade, performance, segurança

---

**❓ Premissas que fazem parte do tópico "Implementação":**

> **Resposta:**
> I, III, IV

---

**❓ Plano de contingência, riscos potenciais e risco de grande impacto pertencem a qual etapa?**

> **Resposta:**
> Recuperação de desastres

---

**❓ É responsabilidade do arquiteto indicar no SAD custos operacionais e tecnológicos?**

> **Resposta:**
> Verdadeiro

---