---
sidebar_position: 1
---

# 📚 Resumo - Fundamentos de Arquitetura de Solução

> **Professor de Arquitetura de Software** - Este documento apresenta um resumo estruturado dos principais conceitos abordados no módulo de Fundamentos de Arquitetura de Solução, organizado de forma didática e visualmente atrativa.

:::info 📋 Sobre este Resumo
Este resumo foi criado para consolidar os conhecimentos essenciais do módulo, apresentando os conceitos mais importantes de forma clara e organizada. Cada seção corresponde a uma aula específica do curso.
:::

---

## 🧱 Fundamentos de Arquitetura de Solução

### 🎯 Visão Geral do Módulo

Este módulo estabelece os **fundamentos essenciais** para compreender e aplicar arquitetura de soluções em ambientes enterprise. O curso aborda desde conceitos básicos de software corporativo até padrões arquiteturais modernos.

### 🏗️ Principais Temas Abordados

- **Escalabilidade, disponibilidade, segurança e customização**
- **Padrões arquiteturais modernos** (microsserviços, serverless, CQRS)
- **AWS Well-Architected Framework**
- **Observabilidade** e seus pilares (logs, métricas e tracing)
- **Modelos on-premise, cloud e híbrido**
- **Ecossistema Cloud Native** através da CNCF
- **Documentos de arquitetura de solução (SAD)**

### 📚 Recursos de Aprendizado

| Tipo | Descrição |
|------|-----------|
| 📄 **Conteúdo** | [Link do conteúdo do módulo](https://plataforma.fullcycle.com.br/courses/1aff9d87-e2c0-4589-8fa1-561c318f1bc6/403/183/180/conteudos) |
| 📁 **Arquivos** | [Google Drive](https://drive.google.com/drive/folders/160-9qZ9XgtEeKsrOZozKcrZmhzaxmRb7) |

---

## 🏢 Software Enterprise

### 🎯 O que são Softwares Enterprise?

Sistemas usados por **grandes corporações, governos ou unidades de negócio** que lidam com:
- Alta complexidade e grande volume de usuários
- Integração entre setores
- Compliance e regras locais/globais
- Contabilidade e processos corporativos

### 🔄 Ecossistema Enterprise

O software enterprise faz parte de um ecossistema formado por:

:::tip 💡 A Tríade Essencial
**Pessoas + Processos + Tecnologia** = Ecossistema Enterprise Saudável
:::

### 🏗️ Características Fundamentais

#### 📈 Escalabilidade
- Manter capacidade de operação com aumento de usuários
- Suportar picos de carga (Black Friday, folha de pagamento)
- Escalar horizontalmente ou verticalmente com eficiência econômica

#### 🟢 Disponibilidade
- Funcionalidade certa disponível no momento certo
- Custo vs. disponibilidade (24/7 pode ser caríssimo)
- Estratégias de elasticidade sob controle

#### 🔐 Segurança
- Segurança de dados, operacional e de rede
- Autenticação e autorização robustas
- **Três pilares da autenticação:**
  - O que você sabe (senha)
  - O que você tem (token físico)
  - O que você é (biometria)

#### ⚙️ Customização e Modularização
- Sistemas adaptáveis ao modelo operacional
- Modularização por unidade de negócio
- Ferramentas No-Code e Low-Code

#### 🔗 Integração
- Comunicação entre múltiplos sistemas
- Gateways e barramentos de comunicação
- Streams de dados (Apache Kafka)

#### 👁️ Observabilidade
- Capacidade de inferir estado interno do sistema
- **Três pilares:**
  - **Logs:** Registro detalhado de eventos
  - **Métricas:** Monitoramento de performance
  - **Traces:** Rastreamento do caminho dos dados

---

## 🧠 Solution Architecture

### 🎯 O que é Arquitetura de Solução?

**Definição:** Define a estrutura, componentes, módulos e interfaces de uma solução de software, considerando requisitos funcionais e não funcionais.

:::info 📋 Requisitos Funcionais vs Não Funcionais
- **Funcionais:** O que o sistema faz (ações, funcionalidades)
- **Não funcionais:** Como o sistema se comporta (escalabilidade, performance, segurança)
:::

### 👤 Perfil do Arquiteto de Solução

#### 🧠 Conhecimentos Essenciais
- **Conhecimento de domínio** (contabilidade, saúde, logística)
- **Conhecimento técnico aprofundado**
- **Visão de contexto e restrições**
- **Visão holística e pragmática**

#### 🤝 Soft Skills
- **Adaptação a diferentes contextos**
- **Comunicação eficaz** (técnicos, diretores, jurídico)
- **Liderança com influência**
- **Pensamento estratégico**
- **Criatividade e jogo de cintura**
- **Inteligência emocional**
- **Trabalho em equipe**

### 📋 Princípios para Arquitetar uma Solução

| Princípio | Descrição |
|-----------|-----------|
| 🎯 **Alinhamento com objetivos de negócio** | Solução deve partir da necessidade do usuário final |
| 🧘‍♂️ **Flexibilidade** | Saber negociar, adaptar e decidir sob restrições |
| ♻️ **Reusabilidade** | Avaliar o que já existe antes de reinventar |
| 🔗 **Interoperabilidade** | Sistemas precisam conversar entre si |
| 🔧 **Manutenibilidade** | Fácil de manter, corrigir e evoluir |
| 📜 **Conformidade regulatória** | Seguir leis e normas regionais |
| 🧳 **Portabilidade** | Permitir migração entre ambientes |

### 💰 TCO (Total Cost of Ownership)

**Definição:** Custo completo de uma solução ao longo do tempo, incluindo:
- Desenvolvimento inicial
- Custos contínuos de manutenção
- Correções e atualizações
- Criação de novos recursos

:::warning ⚠️ Erro Comum
Muitas empresas consideram apenas o custo de desenvolvimento, ignorando o impacto financeiro a longo prazo.
:::

### 🏢 Enterprise Architecture vs Solution Architecture

| Aspecto | Enterprise Architecture | Solution Architecture |
|---------|------------------------|----------------------|
| **Escopo** | Visão da corporação como um todo | Foco em uma solução específica |
| **Função** | Define diretrizes gerais | Opera dentro dos limites estabelecidos |
| **Hierarquia** | Funciona como "guarda-chuva" | Está "embaixo" da corporativa |

---

## 🧩 Design Patterns

### 🎯 O que são Design Patterns?

**Definição:** Soluções comuns para diversos tipos de problema que já foram resolvidos por muitas pessoas de forma semelhante.

:::tip 💡 Aplicação
Muitos patterns se aplicam tanto à **Arquitetura de Solução** quanto à **Arquitetura de Software**.
:::

### 🏗️ N-Tier e N-Layered Architecture

#### 📋 Exemplo de Três Camadas (3-Tier)

1. **Presentation Layer:** Interface com o usuário (React, aplicações server-side)
2. **Application Layer:** Regras de negócio e orquestração
3. **Data Layer:** Bancos de dados (sharding, réplicas)

#### 🔄 Modelos de Comunicação

- **Closed-Layer:** Comunicação ponto a ponto seguindo hierarquia
- **Open-Layer:** Permite "bypass" em certas camadas

### 🏢 Multi-Tenant Architecture

**Definição:** Uma única instância serve múltiplos "inquilinos" com dados isolados.

#### 📊 Abordagens para Separação de Dados

1. **Bancos de Dados Separados:** Cada tenant tem seu próprio banco
2. **Tabelas Separadas:** Mesmo banco, tabelas diferentes por tenant
3. **Tabelas Compartilhadas:** Mesmas tabelas com `tenant_id`

### 🔥 Stateless vs Stateful

| Aspecto | Stateful | Stateless |
|---------|----------|-----------|
| **Sessões** | Guardadas no servidor | Serviço externo (Redis) |
| **Arquivos** | Salvos em pastas locais | Serviço de armazenamento (S3) |
| **Logs** | Escritos em arquivos locais | Enviados para stdout/stderr |
| **Escalabilidade** | Difícil de escalar | Fácil de escalar |

:::success ✅ Regra de Ouro
**"Se a sua aplicação não consegue subir e ser removida sem perder dados, você não pode escalar."**
:::

### ⚡ Serverless

**Definição:** Modelo onde você paga apenas pelo que realmente usa (sob demanda).

#### 🏗️ Exemplo de Arquitetura Serverless Completa

1. **Front-end:** S3 (armazenamento e tráfego)
2. **Gateway:** API Gateway (roteamento)
3. **Função:** Lambda (lógica de negócio)
4. **Logs:** CloudTrail (logs de acesso)
5. **Banco:** DynamoDB (operações de leitura/escrita)

### 🧩 Microsserviços

#### ⛓️ O Principal Desafio: Acoplamento

**Problemas a evitar:**
- Banco de dados compartilhado
- Comunicação síncrona (REST)

#### ✉️ Comunicação Assíncrona via Eventos

**Exemplo:** 
1. Serviço publica "Compra realizada"
2. Outro consome e publica "Compra aprovada"
3. Terceiro consome e publica "Nota fiscal emitida"

#### 👥 Principal Motivação: Fator Organizacional

- Equipes independentes
- Deploys sem afetar outras equipes
- Escalabilidade independente
- Tecnologias diferentes por serviço

:::warning ⚠️ Complexidades
- Maturidade organizacional necessária
- Observabilidade essencial (e cara)
- Troubleshooting mais difícil
- Cultura DevOps/SRE

### 🎯 CQRS (Command Query Responsibility Segregation)

**Definição:** Separação de responsabilidades entre operações de escrita (Commands) e leitura (Queries).

#### ⚙️ Command Stack vs Query Stack

| Stack | Responsabilidade | Característica |
|-------|------------------|----------------|
| **Command** | Operações de escrita | Não retorna dados |
| **Query** | Apenas consultas | Pode ignorar modelo de domínio |

#### 🗄️ Bancos de Dados Separados (Opcional)

- Banco SQL para escrita
- NoSQL (Cassandra) para leitura
- Mecanismo de sincronização entre eles

### ⚡ Cache

#### 🔄 Como Funciona

1. **Primeira requisição (Cache Miss):** Busca no cache → não encontra → vai ao banco → salva no cache
2. **Segunda requisição (Cache Hit):** Busca no cache → encontra → retorna diretamente

#### ⚠️ O Desafio: Invalidação

**Estratégias principais:**
- **Time-based:** Cache com tempo de vida fixo
- **LRU (Least Recently Used):** Remove item menos recente
- **MRU (Most Recently Used):** Remove item mais recente

---

## 🔁 Design Patterns (Parte 2)

### ⚙️ Configuration

**Problema:** Como alterar configurações em produção sem reiniciar a aplicação?

**Solução:** Endpoint específico que recarrega configurações em tempo real.

### 🔑 Secret Management

**Problema:** Credenciais expostas e não rotacionadas.

**Solução:** Sistemas dedicados (HashiCorp Vault, AWS Secrets Manager) que:
- Evitam exposição de credenciais
- Automatizam rotação de senhas
- Dificultam acesso direto de desenvolvedores

### ⚡ Circuit Breaker

**Analogia:** Disjuntor elétrico que protege sistemas.

#### 🚦 Estados do Circuito

1. **Fechado:** Comunicação normal
2. **Aberto:** Circuito "caiu", requisições bloqueadas
3. **Meio-Aberto:** Estado de teste para verificar recuperação

### 🆔 Sequencing

**Problema:** Geração de IDs em grande escala distribuída.

**Solução:** Serviço centralizado para gerar IDs únicos com características:
- Atômico
- Extremamente performático
- Logging de todas as operações

### 🚪 API Gateway

**Problema:** Gerenciar acesso a múltiplos microsserviços.

**Solução:** Ponto único de entrada com funcionalidades:
- **Roteamento:** Direcionar requisições para serviços corretos
- **Autenticação centralizada**
- **Conversão de dados e protocolos**
- **Manipulação de cabeçalhos**
- **Throttling e Rate Limiting**
- **Extensibilidade com plugins**

### 🎯 Arquitetura Baseada em Eventos

**Definição:** Trabalha de forma assíncrona, guiada por eventos.

#### 📋 Tipos de Eventos

1. **Event Notification:** Apenas notificação (post-it)
2. **Event-Carried State Transfer:** Dados completos (escritura)
3. **Event Sourcing:** Grava todas as mudanças de estado

#### 🌐 Orquestração vs Coreografia

- **Coreografia:** Fluxo natural e descentralizado
- **Orquestração:** Sistema controlador central

### 📢 Pub/Sub (Publish/Subscribe)

**Definição:** Padrão de mensageria com tópicos onde informações são publicadas e consumidas.

#### ✅ Principal Vantagem: Desacoplamento

- Publisher não conhece os subscribers
- Responsabilidade de inscrição é dos interessados
- "Inverte a dependência"

---

## ☁️ AWS Well-Architected Framework

### 🏗️ O Framework

**Definição:** Base de boas práticas para arquitetar soluções na nuvem da melhor maneira possível.

:::info 🌐 Aplicabilidade Universal
Apesar de ser da AWS, pode ser aplicado em outras nuvens e até infraestruturas on-premise.
:::

### 📊 Os 6 Pilares

| Pilar | Descrição |
|-------|-----------|
| ⚙️ **Excelência Operacional** | Execução e gerenciamento de sistemas |
| 🛡️ **Segurança** | Proteção de dados, sistemas e ativos |
| 🤝 **Confiabilidade** | Execução correta e consistente |
| 🚀 **Eficiência e Performance** | Uso eficiente de recursos |
| 💰 **Otimização de Custos** | Minimizar custos desnecessários |
| 🌱 **Sustentabilidade** | Impacto ambiental |

### ⚙️ Excelência Operacional

#### 🎯 Princípios

1. **Execute Operações como Código (IaC)**
   - Automatizar criação e gerenciamento de infraestrutura
   - Ferramentas: AWS CloudFormation, Terraform

2. **Faça Mudanças Frequentes, Pequenas e Reversíveis**
   - Mudanças pequenas têm menos chance de causar problemas
   - Facilita identificação de causa e reversão

3. **Refine os Procedimentos de Operação com Frequência**
   - Foco no processo, não na pessoa
   - Melhorar procedimentos manualmente

4. **Antecipe Falhas**
   - Pensar proativamente em cenários de falha
   - Ter planos de ação preparados

5. **Aprenda com Todas as Falhas**
   - Investigar a fundo após incidentes
   - Criar relatórios (post-mortem)

### 🛡️ Segurança

#### 🎯 Princípios

1. **Implemente uma Base de Identity Forte**
   - Granularidade de papéis e permissões
   - Conta root nunca deve ser usada

2. **Ative a Rastreabilidade (Traceability)**
   - Auditar tudo o que acontece
   - Logs de todas as ações

3. **Aplique Segurança em Todas as Camadas**
   - Múltiplos níveis de segurança
   - Subnets privadas para recursos críticos

4. **Proteja os Dados em Trânsito e Armazenados**
   - mTLS para dados em trânsito
   - Criptografia para dados armazenados

5. **Prepare-se para Eventos de Segurança**
   - Ter planos de ação para incidentes
   - Investigar e criar políticas preventivas

### 🤝 Confiabilidade

#### 🎯 Princípios

1. **Recupere-se Automaticamente de Falhas**
   - Auto cura (self-healing)
   - Circuit Breaker para proteção

2. **Teste os Procedimentos de Recuperação**
   - Simular falhas proativamente
   - Testar restauração de backups

3. **Escale Horizontalmente para Aumentar a Disponibilidade**
   - Preferir escalabilidade horizontal
   - Minimizar riscos de falha única

4. **Pare de Adivinhar a Capacidade**
   - Fazer testes de carga
   - Tomar decisões baseadas em dados

5. **Gerencie Mudanças de Forma Automatizada**
   - Automação de escalabilidade
   - ASG (Auto Scaling Group)

### 🚀 Eficiência e Performance

#### 🎯 Princípios

1. **Democratize Tecnologias Avançadas**
   - Aproveitar serviços gerenciados
   - Tecnologias complexas acessíveis

2. **Torne-se Global em Minutos**
   - Múltiplas regiões e AZs
   - Compliance com leis locais

3. **Use Arquitetura Serverless**
   - Ecossistema de serviços
   - Sem preocupação com operação

4. **Experimente com Mais Frequência**
   - Testar novos recursos
   - Cultura de experimentação

5. **Considere a "Mechanical Sympathy"**
   - Usar a ferramenta certa para o trabalho certo
   - Pensar em performance em 4 dimensões

---

## 📈 Observabilidade

### 🎯 Conceitos Básicos

**Definição:** Medida de quão bem os estados internos de um sistema podem ser inferidos a partir do conhecimento das saídas externas.

:::tip 💡 Mentalidade
Tratar o sistema como uma **caixa preta** - não é possível ver diretamente o que acontece internamente.
:::

### 📊 Observabilidade vs Monitoramento

| Aspecto | Monitoramento | Observabilidade |
|---------|---------------|-----------------|
| **Função** | Mostra **o quê** está errado | Permite perguntar **o porquê** |
| **Abordagem** | Saber o que procurar | Interpretar para entender causa raiz |
| **Foco** | Resultado final | Processo de investigação |

### 🏗️ Os Três Pilares (ou Pipes)

#### 📋 Logs
- **O que são:** Eventos que aconteceram no passado
- **Exemplo:** "usuário criado", "e-mail enviado"
- **Conteúdo:** Data, servidor, máquina, detalhes do erro

#### 📊 Métricas (Metrics)
- **O que são:** Medidas que podem ser agregadas
- **Exemplos:** "80% da memória RAM", "200 pessoas no site"

#### 👣 Rastreabilidade (Tracing)
- **O que é:** Rastrear caminho completo de uma requisição
- **Utilidade:** Identificar gargalos
- **Escopo:** Contexto de uma requisição específica

### 🛠️ Ferramentas Populares

#### 🔍 Elastic Stack
- **Natureza:** Majoritariamente open source
- **Componentes:** Elasticsearch, Kibana, Beats, Flee
- **Desafio:** Gerenciamento operacional complexo

#### ☁️ Ferramentas SaaS
- **Datadog:** Ferramenta "fantástica" com muitos serviços
- **New Relic:** Tradicional, se reinventou ao longo dos anos
- **Splunk:** Muito utilizada para gestão de logs
- **Dynatrace:** Ferramenta "muito boa" no mercado

#### 🌟 Cloud Native / Open Source

| Ferramenta | Foco | Características |
|------------|------|-----------------|
| **Prometheus** | Métricas | Modelo pull, Time Series Database |
| **Grafana** | Dashboards | Gratuita, dashboards da comunidade |
| **Jaeger** | Tracing distribuído | Projeto CNCF, muito popular |
| **Zipkin** | Tracing | Mais antigo, padrão de mercado |
| **Kiali** | Comunicação entre sistemas | Nasceu para Istio |

### 🌟 OpenTelemetry (OTel)

**Definição:** Projeto "muito promissor" e "futuro da observabilidade".

#### 🏗️ Componentes do Ecossistema

- **Especificações e Protocolos:** Como dados devem ser gerados
- **SDKs:** Kits prontos para diversas linguagens
- **Instrumentação Automática:** Geração automática de telemetria

#### ✅ Grandes Vantagens

1. **Independência de Vendor:** Mudar de provedor sem alterar código
2. **Roteamento Flexível:** Enviar dados para diferentes backends
3. **Desacoplamento:** Aplicação se comunica apenas com coletor

---

## 🔄 On-premise vs Cloud

### 🎯 Os Três Modelos

| Modelo | Definição |
|--------|-----------|
| **On-Premise** | "Dentro de casa" - infraestrutura própria |
| **Cloud** | Soluções que rodam em ambientes de nuvem |
| **Híbrido** | Parte on-premise, parte na nuvem |

### 🏢 On-Premise

#### 💰 Custos e Desafios

- **Alto custo inicial:** Investimento em máquinas, links, data center
- **Depreciação e manutenção:** Hardware exige manutenção
- **Profissionais qualificados:** Conhecimento específico necessário
- **Escalabilidade complexa:** Processo não ágil
- **Alta disponibilidade complexa:** Redundância física desafiadora

#### ✅ Vantagens

- **Alto controle:** Controle total sobre software e hardware
- **Customização:** Nível alto de personalização
- **Acesso físico:** Necessário para dados sensíveis
- **Hardware mais barato:** Geralmente mais poderoso
- **Integração com legados:** Mais fácil com sistemas antigos
- **Menos latência:** Proximidade física dos componentes
- **Compliance:** Flexibilidade para regulamentações
- **Custos previsíveis:** Fixos e não flutuam muito
- **Sem vendor lock-in:** Liberdade para trocar fornecedores

### ☁️ Cloud Computing

#### 💸 Desafios

- **Alto custo a longo prazo:** Pode se tornar muito cara
- **Taxa de transferência:** Muito custosa
- **Migração complexa:** Custos de saída podem inviabilizar
- **Dificuldade em prever custos:** Gestão complexa
- **Vendor lock-in:** Dependência de serviços proprietários
- **Riscos de segurança:** Gerenciamento complexo de credenciais
- **Controle limitado:** Dependência do provedor
- **Compliance:** Dependência das certificações do provedor

#### ✅ Vantagens

- **Baixo custo inicial:** Democratizou acesso a novos negócios
- **Escalabilidade simplificada:** Subir/destruir milhares de máquinas
- **Acessibilidade:** Vasto ecossistema de serviços
- **Alta disponibilidade:** Regiões e Zonas de Disponibilidade
- **Menos gestão:** Sem preocupação com hardware
- **Pay-As-You-Go:** Pague conforme o uso
- **Serviços gerenciados:** Backups automatizados
- **Recuperação rápida:** Múltiplas regiões e AZs

### 🌉 Modelo Híbrido

#### 🎯 Usos Estratégicos

1. **Modelo de Transição:** Migração gradual para nuvem
2. **Modelo Estratégico:** "Melhor de dois mundos"
3. **Redução de Custos:** Lidar com picos sazonais

#### ⚠️ Complexidades

- **Integração complexa:** Sistemas on-premise e nuvem conversando
- **Latência:** Comunicação de baixa latência
- **Profissionais especializados:** Necessidade de expertise em ambas áreas

### 🌐 Multi-Cloud

**Definição:** Utilizar diferentes provedores de nuvem ao mesmo tempo.

#### 🎯 Motivações

- Usar o melhor serviço de cada provedor
- Maior alta disponibilidade
- Negociação de contratos

---

## 🌐 Cloud Native

### 🎯 Definição

Soluções que **"nasceram diretamente para serem utilizadas na nuvem"** - projetadas para rodar em qualquer tipo de nuvem.

### 📈 Evolução da Computação

1. **Monothread:** Aplicações antigas em único núcleo
2. **Multithreading:** Paralelismo
3. **Sistemas distribuídos**
4. **Cloud Native:** Distribuídos por natureza

### 🧩 Características das Soluções Cloud Native

- **Modulares:** Módulos distribuídos em cluster
- **Aproveitam a nuvem:** Escalabilidade e alta disponibilidade
- **Portabilidade:** Roda da mesma forma em qualquer nuvem

### 🛠️ Exemplos de Soluções Cloud Native

| Categoria | Ferramentas |
|-----------|-------------|
| **Containerização** | Docker |
| **Orquestração** | Kubernetes, Helm |
| **Service Mesh** | Istio, Linkerd, Envoy |
| **Streaming** | Apache Kafka |
| **Observabilidade** | Prometheus, OpenTelemetry |
| **Serverless** | AWS Lambda |
| **GitOps** | Argo CD |
| **HashiCorp** | Vault, Consul, Terraform |

### 🌐 CNCF (Cloud Native Computing Foundation)

**Definição:** Fundação sem fins lucrativos que promove tecnologias open-source para aplicações cloud-native.

#### 🏗️ Estrutura

- **Parte da Linux Foundation**
- **Criada em 2015**
- **153 projetos** (número crescente)
- **Organiza conferências** de desenvolvedores

#### 🎓 Certificações

- **CKAD:** Certified Kubernetes Application Developer
- **CKA:** Certified Kubernetes Administrator
- **CKS:** Certified Kubernetes Security Specialist
- **KCNA:** Kubernetes and Cloud Native Associate
- **PCA:** Prometheus Certified Associate

### 📊 Tipos de Projetos

| Nível | Descrição | Perfil do Adotante |
|-------|-----------|-------------------|
| **Graduated** | Mais alto de maturidade, estável | Conservadores |
| **Incubating** | Meio termo, pode ser usado em produção | Pragmáticos |
| **Sandbox** | Inicial, promissor | Early adopters |
| **Archived** | Não "rolaram", descontinuados | - |

---

## 📑 Solution Architecture Document (SAD)

### 🎯 O que é o SAD?

Documento "controverso" que **norteia o trabalho final do arquiteto de solução**. Não é estático - varia conforme projeto e risco.

:::warning ⚠️ Regra Principal
**Quanto maior o risco, mais detalhes são necessários.**
:::

### ⚖️ Importância Contratual

O arquiteto é o "braço direito do comercial" em consultorias. O SAD funciona como **"prova"** sobre o que foi combinado.

### 📋 Componentes do SAD

- **Componentes Arquiteturais:** Tecnologias da solução
- **Módulos da Solução:** Partes funcionais do sistema
- **Interfaces de Comunicação:** Como sistemas se comunicam
- **Fluxo de Dados:** Diagramas de processos críticos

### 💰 SAD na Fase de Negociação

#### 🎯 Orçamento Cobrado
- **Cenário:** Projetos disruptivos e de alto risco
- **Solução:** Cobrar para fazer orçamento (PoC)
- **Cláusula Go/No-Go:** Proteção para ambas as partes

### 📄 Estrutura do SAD

#### 🎯 Introdução
- **Propósito:** Razão de existir do documento
- **Valor corporativo:** Vínculo com metas estratégicas
- **Escopo:** Fronteiras funcionais
- **Restrições:** Tempo, mão de obra, financeiro, regulatórias
- **Pressupostos:** Premissas do projeto

#### 🏛️ Visão Geral da Arquitetura
- **Descrição:** Principais pontos que farão diferença
- **Diagramas:** Alto nível mostrando solução como um todo
- **Padronização:** Importante para compreensão
- **Ferramentas:** UML, MDL, C4 Model

#### 📋 Requisitos Funcionais e Não Funcionais
- **Funcionais:** Como a aplicação vai funcionar
- **Não funcionais:** Atributos de qualidade (performance, escalabilidade)
- **Dilema:** Como definir para sistemas novos
- **Solução:** "Chute" responsável com validação

#### 📐 Detalhamento da Arquitetura
- **Diagramas detalhados:** Componentes se comunicando
- **Tecnologias:** Stack tecnológico específico
- **Integrações:** Sistemas internos e externos
- **Decisões e trade-offs:** Justificativas das escolhas

#### 🚀 Implementação
- **Metodologias:** Flexibilidade para equipes
- **Deployment:** Infraestrutura e processos
- **Testes:** Processos de qualidade além do desenvolvedor

#### 🔧 Operação e Gestão de Mudanças
- **Operação:** Quem e como vai operar
- **Monitoramento:** O que monitorar (além do hardware)
- **Manutenção:** Processos de manutenção

---

## 📝 Questionários

### 🏗️ Solution Architecture

| Pergunta | Resposta |
|----------|----------|
| **O que diz a lei de Conway?** | A estrutura de uma solução espelha a estrutura de comunicação da organização |
| **O que significa TCO?** | Total Cost of Ownership |
| **O que é observabilidade?** | Capacidade de monitorar o estado interno de um sistema |
| **Quais são os 3 pilares da observabilidade?** | Logs, Métricas e Traces |

### 🎯 Design Patterns

| Pergunta | Resposta |
|----------|----------|
| **O que significa CQRS?** | Command Query Responsibility Segregation |
| **Qual o objetivo do Circuit Breaker?** | Evitar falha geral do sistema em caso de erros recorrentes |
| **Qual o objetivo de um Sidecar?** | Componente independente que roda com a aplicação principal |

### ☁️ AWS Well-Architected Framework

| Pergunta | Resposta |
|----------|----------|
| **Quais são os 6 pilares?** | Excelência operacional, Segurança, Confiabilidade, Eficiência e performance, Otimização de custos, Sustentabilidade |
| **Qual o objetivo do pilar "Excelência operacional"?** | Focar na execução e gerenciamento de sistemas para agregar valor aos negócios |

### 🌐 Cloud Native

| Pergunta | Resposta |
|----------|----------|
| **O que é a CNCF?** | Organização sem fins lucrativos que promove tecnologias open-source para aplicações cloud-native |
| **Quais são os quatro estágios de projetos da CNCF?** | Graduated, Incubating, Sandbox e Archived |

---

:::success 🎉 Conclusão
Este resumo apresenta os fundamentos essenciais da arquitetura de solução, preparando profissionais para atuar como arquitetos capazes de alinhar tecnologia com objetivos de negócio em ambientes complexos e distribuídos.
::: 