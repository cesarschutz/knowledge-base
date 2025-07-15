# 🧩 System Design e Design Docs

## **📄 Informações Gerais** {#📄-informações-gerais}

**Conteúdo \->** [Link do conteúdo do módulo](https://plataforma.fullcycle.com.br/courses/1aff9d87-e2c0-4589-8fa1-561c318f1bc6/403/183/182/conteudos?capitulo=182&conteudo=10574)  
**Arquivos \->** [Material complementar (Google Drive)](https://drive.google.com/drive/folders/199qAce_iEc7aP8l0ycS8TUeTf14v5xJl)  
**Material apresentado na aula \->** [Excalidraw (visual)](https://link.excalidraw.com/readonly/05gRMYJUyZ4FfzRyZ1cF)

## **📖 Leituras** {#📖-leituras}

- 🔗 [Companies that use RFCs or Design Docs](https://blog.pragmaticengineer.com/rfcs-and-design-docs/)
- 🔗 [How to write an effective design document](https://rinaarts.com/how-to-write-an-effective-design-document/)
- 🔗 [Uma introdução aos Design Docs (PicPay)](https://medium.com/inside-picpay/uma-introdu%C3%A7%C3%A3o-aos-design-docs-8590f28f4cc1)
- 🔗 [Design Docs at Google](https://www.industrialempathy.com/posts/design-docs-at-google/)
- 📄 [SD Interview Blueprint (PDF)](https://drive.google.com/file/d/1q51qsZuB9Nktwim9hgfPNr9JR5PBrggf/view)
- 📄 [Design Docs (PDF)](https://drive.google.com/file/d/1wlBNybGpCgFeTefJNlQ9OXsqTYXqoprx/view)
- 📝 [Questionário](https://drive.google.com/file/d/1YHWYfy2V-PO4ihy5cpRx104qTuJyeBPJ/view)
- 📝 [Anotações da Aula (Excalidraw)](https://link.excalidraw.com/readonly/05gRMYJUyZ4FfzRyZ1cF) 

## 🧩 **System Design e Design Docs (Resumo)**

### 🧠 System Design

#### 🚀 Introdução
- System Design é fundamental para mapear dependências, dimensionar recursos e antecipar trade-offs.
- Big Techs usam System Design tanto no dia a dia quanto em entrevistas, avaliando raciocínio estruturado.
- O objetivo do módulo é consolidar fundamentos, repertório para escolhas arquiteturais e preparar para entrevistas técnicas.
- O processo envolve pensar sistemicamente, simular soluções e justificar decisões.

#### 🧩 Entendendo os principais conceitos
- System Design é o processo de definir arquitetura, componentes, módulos, interfaces e dados para atender requisitos.
- Não é só desenhar diagramas, mas pensar intencionalmente sobre o problema e seguir etapas lógicas.
- O valor está em racionalizar definições, explorar múltiplas soluções, medir impactos e simular custos.
- Trabalha-se com aproximações, não precisão absoluta, para alinhar expectativas e tomar decisões fundamentadas.
- Exemplo: decidir entre usar ou não cache, ponderando custo e performance.

#### 🏢 System design nas Big Techs
- System Design é usado em entrevistas para avaliar como o candidato pensa, seu repertório técnico e capacidade de aprofundar.
- O processo exige seguir um passo a passo, fazer perguntas certas, admitir quando não sabe e propor alternativas.
- Comunicação estratégica é essencial: saber perguntar, assumir dúvidas e se posicionar com clareza.
- A pressão faz parte do processo, e a reação do candidato é avaliada (admite não saber, propõe alternativas, etc).

#### 🌍 System design no mundo real
- System Design é indispensável para arquitetos de soluções no dia a dia, não só em entrevistas.
- Ajuda a formalizar ideias, justificar decisões e comunicar soluções para públicos técnicos e não técnicos.
- Vai além de diagramas: envolve documentação, justificativas, avaliação de trade-offs e especificação.
- Exemplo: justificar o uso de Kafka, Redis ou outra tecnologia, sempre com argumentos técnicos.

#### 🧱 Os 6 elementos
- System Design não é só desenho; envolve técnica e raciocínio estruturado.
- Os seis elementos fundamentais são:
  1. Requisitos: entender o problema, objetivos e restrições.
  2. Plano de capacidade: dimensionar infraestrutura, throughput, volume de dados e picos.
  3. Modelagem de dados: identificar entidades, relações e tipo de banco adequado.
  4. Modelagem de API: definir operações principais do sistema.
  5. Desenho arquitetural: desenhar infraestrutura, serviços, componentes e cloud.
  6. Exploração e justificativa: defender escolhas técnicas com argumentos sólidos.
- O objetivo é desenvolver pensamento intencional, estruturado e justificado.

##### 1️⃣ Requisitos
- Entenda o problema, domínio e funcionalidades principais (core features) e de apoio (support features).
- Use conceitos de Domain Driven Design (DDD) para modelar funcionalidades.
- Separe requisitos funcionais (o que o sistema faz) e não funcionais (como o sistema se comporta).

##### 2️⃣ Plano de capacidade
- Planeje infraestrutura considerando requisições por segundo, throughput, volume de dados e picos.
- Essas respostas impactam linguagem, banco, arquitetura e cloud.

##### 3️⃣ Modelagem de dados
- Identifique entidades principais, relacione-as e escolha o tipo de banco (relacional, documento, chave-valor, grafo).

##### 4️⃣ Modelagem de API
- Defina operações principais (ex: endpoint de compra de ingressos), facilitando o entendimento dos stakeholders.

##### 5️⃣ Desenho arquitetural
- Desenhe infraestrutura, serviços, componentes e cloud. O desenho é parte do processo, não o todo.

##### 6️⃣ Exploração e justificativa
- Justifique cada escolha técnica (por que Redis? Por que Kafka?) com argumentos sólidos, fugindo do piloto automático.

#### 📋 Requisitos
- Divida requisitos em core features (razão de existir do sistema) e support features (funcionalidades auxiliares).
- Requisitos funcionais: o que o sistema faz.
- Requisitos não funcionais: atributos de qualidade (performance, segurança, escalabilidade, latência, tolerância a falhas).

#### ⚖️ Requisitos não funcionais e teorema CAP
- Requisitos não funcionais definem como o sistema se comporta.
- Exemplos: baixa latência, alta disponibilidade, escalabilidade, consistência dos dados.
- O teorema CAP mostra que só é possível escolher dois entre consistência, disponibilidade e tolerância à partição.
- Exemplos práticos: caixa eletrônico prioriza consistência, reservas de hotel priorizam disponibilidade.
- Decisões técnicas dependem de regras de negócio e devem ser justificadas.

#### 📊 Dados importantes
- Levante métricas como DAU (usuários ativos diários), requests por usuário, tamanho médio das requests, taxa de conversão, proporção leitura/escrita e picos de acesso.
- Esses dados fundamentam escolhas técnicas: tipo de banco, infraestrutura, arquitetura, gateway de pagamento, design de API.
- Considere sempre os picos de acesso para garantir resiliência.

#### 📐 Plano de capacidade
- Transforme estimativas em números concretos: requisições por segundo, volume de dados, throughput, storage e comportamento em picos.
- Use aproximações e notação científica para facilitar cálculos e evitar erros sob pressão.
- Trabalhe com ordens de grandeza para estimativas rápidas e justificáveis.

#### 🔢 Calculando requests por segundo
- Calcule requests por segundo (RPS) dividindo o total de requests pelo número de segundos do dia.
- Separe leituras e escritas para dimensionar corretamente a infraestrutura.
- Exemplo: 1 milhão de usuários, 5 requests/dia, 100.000 segundos/dia → 50 RPS (5 writes, 45 reads).

#### 🛒 Compras por segundo
- Calcule a quantidade de compras por segundo (CPS) usando a taxa de conversão.
- Exemplo: 5% de 1 milhão de usuários = 50.000 compras/dia → 0,5 CPS.
- Mesmo taxas baixas podem ser críticas e exigem alta confiabilidade.

#### 📡 Bandwidth
- Calcule a largura de banda multiplicando requests por segundo pelo tamanho médio dos pacotes.
- Exemplo: 50 RPS × 50 KB = 2,5 MB/s.
- Planeje infraestrutura de rede considerando médias e picos.

#### 💾 Storage (pt1)
- Calcule armazenamento necessário por segundo, dia, ano e cinco anos, considerando fator de replicação.
- Exemplo: 5 writes/s × 50 KB × 3 réplicas = 0,75 MB/s → 75 GB/dia → 27 TB/ano → 150 TB/5 anos.
- Apresente cálculos com clareza e justificativa.

#### 💾 Storage (pt2)
- Consolide estimativas de armazenamento ao longo do tempo.
- Use aproximações práticas e justifique cada número.
- Exemplo: 0,75 MB/s → 75 GB/dia → 27 TB/ano → 150 TB/5 anos.

#### 💡 Considerações
- Aproximações são esperadas e fazem parte do processo.
- O importante é demonstrar raciocínio estruturado, justificar decisões e adaptar cálculos ao contexto.
- Use seus próprios racionais e adapte exemplos conforme a realidade do sistema.

#### 📝 Exercicio
- Exercício prático: calcular o plano de capacidade de um sistema com 1Mi DAU, 1 request/dia, 20KB/request, 90% leitura, 10% escrita, replicação 3x.
- Pratique os cálculos de RPS, bandwidth e storage para fixar a metodologia apresentada. 