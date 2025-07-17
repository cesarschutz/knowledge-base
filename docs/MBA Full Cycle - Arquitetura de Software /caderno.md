---
sidebar_position: 1
---

# 📝 Caderno

## 🧩 System Design e Design Docs

### 🛠️ System Design na prática - 16/06/25

#### Conceitos-Chave

- **Plano de capacidade:** Processo de estimar a quantidade de requisições e o volume de armazenamento necessários para o sistema, garantindo que a infraestrutura suporte o crescimento e a demanda esperada ([veja a Calculadora de Projeção de Capacidade](../Arquitetura/Calculadora%20de%20Projeção%20de%20Capacidade)).
> *Exemplo: Calcular que um e-commerce precisa suportar 10.000 usuários simultâneos e armazenar 1TB de dados de produtos.*

- **Mensageria:** Utilização de sistemas como o Kafka para o envio de mensagens assíncronas, como e-mails, permitindo que operações que podem tolerar atrasos (ex: confirmação de compra de ingressos) sejam processadas de forma eficiente e desacoplada. 
> *Exemplo: Sistema de notificações que envia e-mails de confirmação de pedido sem bloquear a finalização da compra.*

- **Sequenciamento:** Execução das etapas de um processo em uma ordem lógica e previamente definida, assegurando que cada fase ocorra no momento apropriado.
> *Exemplo: Processo de checkout que primeiro valida o estoque, depois processa o pagamento e por último envia a confirmação.*

- **ACL (Anti-Corruption Layer):** Camada intermediária entre sistemas ou microsserviços, responsável por isolar e proteger o domínio principal de influências externas indesejadas, evitando a propagação de inconsistências.
> *Exemplo: Adaptador que converte dados de um sistema legado para o formato esperado pelo novo sistema, sem contaminar a arquitetura principal.*

- **Atomicidade:** Propriedade fundamental dos bancos de dados que garante que uma transação seja executada integralmente ou não seja executada, preservando a integridade dos dados.
> *Exemplo: Transferência bancária onde tanto o débito da conta origem quanto o crédito na conta destino devem ocorrer juntos, ou nenhum dos dois.*

- **Key-value store:** Tipo de banco de dados que armazena informações em pares de chave e valor, proporcionando alta performance para operações simples de leitura e escrita.
> *Exemplo: Redis armazenando sessões de usuário (chave: session_id, valor: dados da sessão) ou cache de produtos.*

- **API Design:** Processo de concepção e estruturação de APIs RESTful, visando clareza, padronização e facilidade de integração entre sistemas.
> *Exemplo: API de usuários com endpoints padronizados como GET /users, POST /users, PUT /users/\{id\}, DELETE /users/\{id\}.*

- **Throughput:** Medida da capacidade de processamento de um sistema, indicando a quantidade de operações realizadas em um determinado período; quanto maior o throughput, mais eficiente é o sistema.
> *Exemplo: Sistema que processa 1.000 transações por segundo vs. outro que processa apenas 100 transações por segundo.*

- **Risco vs. Documentação:** O nível de detalhamento da documentação deve ser proporcional ao risco do projeto. Projetos de maior risco exigem documentação mais completa; projetos de menor risco podem ser documentados de forma mais sucinta.
>*Exemplo: Sistema bancário (alto risco) precisa de documentação detalhada de segurança, enquanto um blog pessoal (baixo risco) pode ter documentação mínima.*

- **Trade-off:** Refere-se à necessidade de abrir mão de certos aspectos para obter outros mais vantajosos, buscando sempre o melhor equilíbrio estratégico para o projeto.
>*Exemplo: Escolher entre consistência forte (mais lenta) vs. consistência eventual (mais rápida) dependendo dos requisitos do negócio.*

---

 #### **Resumo do Processo de System Design:**

1. **Plano de capacidade** - Definir quantos usuários o sistema deve suportar, quantas requisições por segundo, volume de dados e recursos de infraestrutura necessários para atender à demanda atual e futura.

2. **Entendimento dos requisitos de engenharia** - Compreender profundamente os requisitos funcionais e não-funcionais, incluindo performance, escalabilidade, disponibilidade, segurança e restrições técnicas do projeto.

3. **Modelagem de dados** - Projetar a estrutura dos dados, relacionamentos entre entidades, esquemas de banco de dados e estratégias de armazenamento que suportem os requisitos do sistema.

4. **Tipos de bancos de dados** - Escolher e justificar os tipos de banco de dados apropriados (relacional, NoSQL, cache, etc.) baseado nos padrões de acesso, consistência e performance necessários.

5. **Modelagem da API** - Definir contratos de API, endpoints, formatos de dados, autenticação, autorização e documentação para facilitar a integração entre componentes do sistema.

6. **Métricas e monitoramento** - Estabelecer KPIs, logs, alertas e dashboards para acompanhar a saúde do sistema, performance e comportamento em produção.

7. **Análise contínua dos trade-offs da arquitetura** - Avaliar constantemente as decisões arquiteturais, considerando custos, complexidade, performance e manutenibilidade para otimizar o sistema.