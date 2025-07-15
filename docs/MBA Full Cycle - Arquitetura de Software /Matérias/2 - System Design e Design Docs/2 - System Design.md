# 🧠 System Design

## 🚀 **Introdução**

👋 **Abertura do módulo** – Saudação inicial e comunicação de kick-off do novo ciclo de aprendizagem.

🎯 **Foco no System Design** – Disciplina crítica para mapear dependências, dimensionar recursos e antecipar trade-offs na definição de soluções.

📊 **Valor estratégico** – Big Techs aplicam System Design tanto no dia a dia de engenharia quanto como filtro no pipeline de recrutamento, avaliando a capacidade de raciocínio estruturado do candidato.

🧠 **Raciocínio como KPI** – Performance analítica, clareza de pensamento e habilidade de decompor problemas são métricas-chave nesse contexto.

🏗️ **Outcome do módulo** – Entregar base conceitual robusta que habilite:
* Compreensão dos fundamentos de System Design.  
* Consolidação de repertório para escolhas arquiteturais assertivas.  
* Upskilling visando readiness para entrevistas de alto nível.  

📈 **Roadmap de evolução** – Gradualmente ampliar visão, entender modelos de cálculo, custos e premissas que antecedem o blueprint final da aplicação.  

🚀 **Call to action** – Internalizar práticas tradicionais, exercitar pensamento sistêmico e preparar-se para entregar arquitetura de missão crítica sem surpresas.

## 🧩 **Entendendo os principais conceitos**

:::caution
⚠️ **Disclaimer inicial** – Esta etapa do curso será **altamente prática**. A abordagem será mão na massa, com foco em execução, mas também haverá breves retornos a conceitos teóricos sempre que necessário para fixação.
:::

📚 **Base conceitual rápida** – Alguns slides serão usados para alinhar conceitos, mas o foco principal será a aplicação prática do conteúdo.

🧱 **Objetivo desta parte** – Compreender, na essência, o que é System Design, sua finalidade e funcionamento.

📋 **Agenda do módulo**:

* O que é System Design e sua importância.  
* Fundamentos principais.  
* Requisitos e análise do problema.  
* Planejamento de capacidade.  
* Modelagem de dados.  
* Aplicação prática do processo completo.

:::info
🔍 **Definição objetiva** –  
System Design é o processo de **definição da arquitetura, componentes, módulos, interfaces e dados** necessários para atender aos requisitos de um sistema.  
👉 Ou seja: **é o processo para definir a arquitetura**. Ponto.
:::

📉 **Erro comum no mercado** –  
Pensar que System Design é só "desenhar caixinhas". Isso é raso e incorreto. O verdadeiro valor está em **pensar intencionalmente** sobre o que precisa ser resolvido.

💡 **Importância real do processo** –  
O System Design nos obriga a **seguir etapas lógicas**, evitando decisões precipitadas como adicionar load balancer e app sem pensar.  
Cada etapa existe para **forçar reflexão estratégica sobre o problema real**.  
O foco é **racionalizar as definições que realmente importam**.

📝 **Não é documentação detalhada** –  
Trabalharemos com **aproximações**, não com precisão absoluta. O objetivo é **dar base para decisões** e **alinhar expectativas com os stakeholders**.

🧠 **Exercício mental constante** –  
Ao seguir cada etapa, você começa a:

* Explorar múltiplas soluções para o mesmo problema.  
* Medir impacto de curto e longo prazo.  
* Simular custos e implicações de escolhas técnicas.

📊 **Exemplo prático** –  
Preciso de alta performance → penso em cache em memória → entrega resultado rápido.  
Mas: **cache em memória é caro**.  
E se eu **não usar cache?**  
Qual impacto de performance e custo?  
System Design te leva a **colocar tudo na balança** e escolher com embasamento.

📈 **Conclusão desta etapa** –  
System Design é sobre **pensar processos**, **simular soluções** e **tomar decisões intencionais**.  
É o raciocínio que te permite **projetar soluções sustentáveis** hoje, amanhã e nos próximos anos.

## 🏢 **System design nas Big Techs**

📌 **Resumo do vídeo anterior** – Já introduzimos a ideia central do System Design e vamos aprofundar progressivamente com conceitos e prática ao longo do módulo.

:::note
🧠 **Parêntese importante** –  
Big Techs utilizam System Design em seus processos seletivos. Mas por quê?

🔍 **Objetivo das entrevistas com System Design**:

* Avaliar **como você pensa**, não apenas o resultado final.  
* Entender seu **repertório técnico** diante de soluções propostas.  
* Medir sua **capacidade de aprofundar** tecnicamente em temas citados.  
* Verificar **como você deduz e aproxima números**, e qual é a lógica por trás da sua abordagem.
:::

⚠️ **Realidade prática** –  
Se você fizer hoje uma prova de System Design, a chance de falhar é alta.  
Por quê? Porque é **técnica**, não é mágica.  
Existe **um passo a passo**: 1, 2, 3, 4... que deve ser seguido para chegar a uma boa solução.

🎓 **Problema comum** –  
A maioria não conhece os principais passos e técnicas, acaba rabiscando soluções.  
Às vezes acerta, mas **na maioria falha** por falta de método.

🏛️ **Diferença nas Big Techs** –

* A exigência é alta.  
* As contas precisam ser **facilitadas com aproximações**.  
* O raciocínio precisa ser claro, rápido e eficiente.

🔧 **Você vai aprender aqui**:

* Técnicas para tornar sua vida mais fácil nesses cenários.  
* Métodos para raciocinar sob pressão.  
* Como **pensar melhor e deduzir com lógica**.

:::tip
🗣️ **Capacidade de comunicação** –  
System Design é um teste de **comunicação estratégica**, não só de arquitetura.  
Você será avaliado por:

* Saber fazer **as perguntas certas**.  
* Saber **assumir quando não sabe**.  
* Saber **se posicionar com clareza**.

🧩 **Comunicar é perguntar bem** –  
Saber perguntar é parte da arte do System Design.  
Fazer boas perguntas é mais importante do que dar respostas precipitadas.
:::

🧪 **Pressão e reação** –  
Durante o processo, será avaliada sua reação ao ser confrontado:

* Você mente?  
* Você paralisa?  
* Você admite não saber?  
* Você propõe alternativas?

📉 **Autoconhecimento técnico** –  
Muitos não sabem como reagem sob pressão.  
Se você **não tiver técnica**, não conseguirá pensar direito e nem se expressar bem.

## 🌍 **System design no mundo real**

🌍 **System Design no mundo real** –  
System Design **não é apenas para processos seletivos**.  
Ele é essencial para quem projeta sistemas no dia a dia.  
Se você é arquiteto de soluções, **essa ferramenta é indispensável**.

🏢 **Uso corporativo** –  
Empresas como Google, Microsoft e outras grandes corporações **adotam técnicas e etapas** específicas de System Design.  
Cada uma com sua abordagem, mas com um ponto em comum: **estrutura e lógica no raciocínio arquitetural**.

:::info
🧰 **Ferramenta de expressão do arquiteto** –  
System Design é **a linguagem do arquiteto de soluções**.  
Diante da complexidade de um sistema, expressar-se de forma organizada é vital para garantir entendimento.  
É o que **torna suas ideias acessíveis e claras** para todos os envolvidos.

🧠 **Reflexão e convicção** –  
Formalizar suas ideias com System Design dá a você:

* Tempo para refletir com mais profundidade.  
* Clareza para justificar decisões.  
* Convicção técnica ao apresentar uma solução.
:::

:::tip
🔁 **Analogia com TDD (Test Driven Development)** –  
Assim como escrever o teste antes do código te força a pensar melhor,  
**estruturar o System Design antes da implementação aumenta a qualidade da solução**.
:::

💼 **System Design também vende** –  
No papel de arquiteto, você vai participar de reuniões:

* Com time comercial.  
* Com áreas técnicas.  
* Com stakeholders não técnicos.

📈 **Sua arma? O System Design.**  
É ele que vai **traduzir a complexidade técnica em algo compreensível e confiável**.

🗂️ **Conjunto de artefatos, não só desenho** –  
System Design não se resume a diagramas.  
Ele envolve:

* Especificação.  
* Documentação.  
* Justificativa de decisões.  
* Avaliação de trade-offs.

💬 **Justificativas importam** –  
Exemplo: "Vamos usar Apache Kafka."

* Por quê?  
* Quais vantagens?  
* Quais trade-offs?  
  O System Design te obriga a responder essas perguntas com fundamento.

📌 **Conclusão desta etapa** –  
Fazer System Design é:

* Pensar com método.  
* Comunicar com clareza.  
* Vender a solução.  
* Justificar cada decisão com lógica.

## 🧱 **Os 6 elementos**

❓ **System Design é só desenho?**  
Definitivamente **não**.  
Desenhar é apenas **uma etapa** do processo.  
System Design envolve **muito mais técnica e raciocínio estruturado**.

:::info
🧩 **O que compõe um bom System Design?**  
Wesley destaca **seis elementos fundamentais** para se fazer System Design com qualidade:

1️⃣ **Requisitos**  
Antes de tudo: **entenda o problema**.

* Por que essa solução está sendo criada?  
* Quais os objetivos?  
* Quais restrições existem?  
  Evite sair executando ordens sem questionar.  
  Arquitetar exige **contexto e entendimento claro dos requisitos**.

2️⃣ **Plano de capacidade**  
Planejar a infraestrutura e dimensionar recursos exige:

* Quantidade de requisições por segundo?  
* Qual o throughput esperado?  
* Qual o volume de dados?  
* Existirão picos?  
  Essas respostas impactam **linguagem, banco, arquitetura e cloud**.

3️⃣ **Modelagem de dados**  
Não precisa ser um ER completo.  
Mas precisa:

* Identificar as principais entidades.  
* Mapear relações relevantes.  
* Escolher o tipo certo de banco:  
  - Relacional  
  - Documento  
  - Chave-valor  
  - Grafo

4️⃣ **Modelagem de API**  
Definir as **principais operações que o sistema vai expor**.  
Exemplo:  
Para vender ingressos, é esperado um endpoint como `comprarIngressos` com:

* Dados do cliente  
* Qual ingresso  
* Quantidade  
  Stakeholders precisam **visualizar com clareza as ações principais do sistema**.

5️⃣ **Desenho arquitetural**  
Finalmente, **é hora de desenhar**:

* Infraestrutura  
* Serviços  
* Componentes  
* Cloud providers  
  O desenho é **parte do System Design**, não o System Design inteiro.
:::

:::caution
6️⃣ **Exploração e justificativa**  
Essa é a **etapa mais negligenciada**.

* Por que Redis?  
* Por que Kafka?  
* Por que não outra solução?  
  Você precisa **conseguir defender cada escolha com argumentos técnicos**.  
  Aqui entra o verdadeiro valor do arquiteto:  
  **sair do piloto automático e justificar com propriedade.**
:::

📌 **Reflexão final** –  
A maioria das decisões em projetos é tomada **por convenção ou repetição**.  
O System Design te força a sair disso e pensar:

* Faz sentido nesse contexto?  
* Posso justificar essa escolha?  
* Existem opções melhores?

🎯 **Objetivo** –  
Desenvolver um pensamento **intencional, estruturado e justificado**.  
System Design é a ferramenta para isso.

🚀 Vamos nessa!

## 📋 **Requisitos**

🧱 **1º Elemento: Requisitos**  
Antes de tudo, é preciso **entender o problema e o propósito do sistema**.  
Sem requisitos, não há norte. Não se trata de voltar ao modelo waterfall,  
mas sim de **ter clareza do domínio e das funcionalidades que importam**.

:::note
🔍 **O que são os Requisitos no System Design?**

🎯 **Core Features e Domínio da Aplicação**

* Qual é o domínio do sistema?  
* Qual a razão dele existir?  
* Quais são suas funcionalidades principais?

👉 Aqui entra o conceito de **Domain Driven Design (DDD)**:

* Primeiro, compreendemos o domínio.  
* Depois, modelamos as funcionalidades com base nele.

Exemplo:  
Se o sistema for um e-commerce, o domínio é "venda de produtos online".  
A Core Feature é permitir ao cliente realizar uma compra.

🛠️ **Support Features (Funcionalidades de apoio)**  
São funcionalidades **auxiliares que sustentam as principais**.

* Exemplo: sistema de pagamento.  
  - Ele não é o foco principal, mas **é essencial para viabilizar a venda**.  
* Outro exemplo: envio de e-mails, relatórios, autenticação.

📎 **Resumo da divisão de requisitos**:

* **Core Features** → Razão de existir do sistema.  
* **Support Features** → Funcionalidades auxiliares que tornam as principais viáveis.
:::

:::info
⚖️ **Requisitos Funcionais vs Não Funcionais**

📌 **Funcionais** – O que o sistema faz.  
📌 **Não Funcionais** – Como o sistema se comporta:

* Performance  
* Segurança  
* Escalabilidade  
* Latência  
* Tolerância a falhas
:::

## ⚖️ **Requisitos não funcionais e teorema CAP**

🧱 **Requisitos Não Funcionais**  
Agora que já definimos as funcionalidades principais e de suporte, é hora de pensar nos **atributos de qualidade** do sistema – os chamados **requisitos não funcionais**.

🔍 **O que são?**  
São características que definem **como** o sistema se comporta, não o que ele faz.  
Exemplos comuns:

⚡ **Baixa latência**  
O sistema precisa ser rápido.

🔁 **Alta disponibilidade**  
O sistema não pode ficar fora do ar – principalmente em momentos críticos, como abertura de vendas.

📈 **Escalabilidade**  
Capacidade de crescer conforme a demanda – exemplo: auto scale na nuvem.

✅ **Consistência dos dados**  
Garantia de que os dados estejam corretos, principalmente em situações de concorrência.

⚠️ **Conflito entre requisitos: é possível ter tudo ao mesmo tempo?**  
💡 Não. Aqui entra o **Teorema CAP**.

:::caution
📚 **Teorema CAP** – Você só pode escolher **dois dos três** pilares abaixo:

1. **Consistência** (C) – Todos os nós veem os mesmos dados ao mesmo tempo.  
2. **Disponibilidade** (A) – O sistema responde sempre, mesmo em falhas.  
3. **Tolerância à Partição** (P) – O sistema continua operando mesmo se houver falha de comunicação entre nós.
:::

:::note
🔄 **Exemplo prático:**

🏧 **Caixa eletrônico**  
Dois usuários tentando sacar o mesmo saldo ao mesmo tempo.  
Para garantir **consistência**, o sistema precisa **ficar indisponível temporariamente** para um deles.

🏨 **Reserva de hotel via Booking/Hotels.com**  
Múltiplos canais com bancos de dados diferentes.  
A decisão do sistema: **priorizar disponibilidade**, aceitando uma **consistência eventual**.  
Se houver conflito (mesmo quarto reservado duas vezes), uma **resolução posterior é necessária**.

🏦 **Saldo x Extrato em bancos**

* Saldo e extrato podem vir de bancos diferentes.  
* Você vê o saldo atualizado antes de ver a transação no extrato.  
* **Disponibilidade é garantida, consistência é eventual.**
:::

🤝 **Decisões técnicas x decisões de negócio**  
Esses trade-offs **não são puramente técnicos**.  
A escolha entre consistência e disponibilidade depende de **regras de negócio**.

🧠 O papel do arquiteto (ou do candidato em entrevista) é:

* Apontar o conflito.  
* Explicar as implicações.  
* Perguntar: “O que você prefere neste cenário específico?”

📌 **Resumo dos principais atributos para nosso sistema de ingressos**:

* ⚡ **Baixa latência** – Experiência fluida ao comprar ou consultar ingressos.  
* 🔁 **Alta disponibilidade** – O sistema deve funcionar 24/7, especialmente em horários de pico.  
* 📈 **Escalabilidade horizontal** – Capacidade de crescer em eventos de alta demanda.  
* ✅ **Consistência dos dados** – Crítica para **não vender o mesmo ingresso para duas pessoas**.

🚨 Mas: **consistência e disponibilidade totais são mutuamente excludentes em redes distribuídas**. A consistência pode ser **eventual** dependendo da decisão de negócio.

## 📊 **Dados importantes**

📊 **Plano de Capacidade: hora de mensurar o tráfego**  
Agora que temos os **requisitos funcionais e não funcionais**, chegou o momento de pensar em **quantidade, volume e comportamento de acesso**.

Essa é uma etapa **fundamental** do System Design, pois permite dimensionar corretamente:

* **Infraestrutura**  
* **Banda**  
* **Throughput** - ou simplesmente taxa de transferência é a quantidade de dados transferidos de um lugar a outro, ou a quantidade de dados processados em um determinado espaço de tempo.  
* **Escalabilidade**  
* **Tipos de banco de dados e tecnologias**

:::note
📌 **Dados importantes para dimensionamento**

👥 **DAU (Daily Active Users)**

* Estimativa: **1 milhão de usuários por dia**

🔁 **Requests por usuário**

* Estimativa: **5 requisições por usuário/dia**  
* Total: **5 milhões de requisições/dia**

📦 **Tamanho médio de cada request**

* 50KB por request  
* Total diário estimado:  
  `5 milhões x 50KB = 250 GB/dia de tráfego transacional`

💰 **Taxa de conversão (compra de ingresso)**

* Estimativa: **5% dos usuários diários compram ingresso**  
* Total de compras/dia: **50.000 transações**

🔄 **Proporção de leitura vs escrita (READS vs WRITES)**

**write - sistema de log**  
**read - netflix**

* Estimativa: **9:1**  
* A cada 10 requests:  
  - 9 são leituras (consultas, buscas, navegação)  
  - 1 é escrita (compra, pagamento, cadastro)

🧠 **Raciocínio estratégico por trás desses dados**

* Esses números são **estimativas**, mas servem como base para tomada de decisão.  
* Em microsserviços, o padrão pode variar:  
  - Serviço de catálogo → muito mais leitura  
  - Serviço de checkout → mais gravação

📌 **Essas métricas influenciam diretamente**:

* Escolha do banco de dados  
* Tamanho da infraestrutura necessária  
* Tipo de arquitetura (ex: leitura separada de escrita)  
* Gateway de pagamento adequado  
* Design da API e otimizações de banda

⚠️ **Não esquecer dos picos de acesso!**

* Eventos especiais (ex: shows do Sandy & Júnior) causam explosões de tráfego.  
* O sistema deve ser projetado para **resistir a esse estresse**, mesmo que de forma elástica e temporária.

🧭 **Checklist do plano de capacidade**:

- [x] DAU (usuários ativos por dia)  
- [x] Requests por usuário  
- [x] Tamanho médio das requests  
- [x] Taxa de conversão  
- [x] Leitura vs escrita  
- [x] Picos de acesso
:::

🎯 **Conclusão**  
Nunca avance para as decisões de arquitetura sem ter esses números em mente.  
Eles **fundamentam todas as escolhas técnicas** que virão na sequência.

## 📐 **Plano de capacidade**

📐 **Entrando no Plano de Capacidade**  
Finalizamos a etapa de requisitos e agora partimos para uma área mais **técnica e quantitativa**: o **plano de capacidade**.

Aqui vamos calcular:

* Quantidade de requisições por segundo  
* Volume de dados trafegados  
* Throughput estimado  
* Consumo de storage diário, anual, quinquenal  
* Comportamento em picos

🎯 **Importante**: essa etapa é **decisiva em entrevistas e no mundo real**.  
Sem entender essas métricas, **todo o restante do System Design perde base sólida**.

:::tip
💬 **Dica prática**: pergunte tudo!  
Não sabe quantos acessos terão? Pergunte.  
Não sabe a taxa de conversão? Pergunte.  
Evite fazer suposições vazias.

🧠 **Erro comum: querer ser exato**  
Em contextos de pressão (ex: entrevista), a tentativa de fazer contas com precisão pode te travar.  
Você perde tempo, erra conta e compromete seu raciocínio.  
Solução? **Use técnicas de aproximação.**
:::

:::info
📊 **Usando Notação Científica no System Design**

✏️ **Por que usar?**  
Fazer contas com múltiplos zeros em tempo real é **ineficiente e arriscado**.  
A notação científica simplifica, agiliza e reduz erros.

📚 **Exemplos de base**:

* 1.000 = 10³  
* 10.000 = 10⁴  
* 100.000 = 10⁵  
* 1.000.000 = 10⁶

📌 **Exemplos práticos**:

* 7.000 = 7 × 10³  
* 95.000 = 9.5 × 10⁴

🔢 **Operações básicas com notação científica**

✅ **Multiplicação**  
Exemplo: 10⁵ × 10³ = 10⁸  
**Soma os expoentes**

✅ **Divisão**  
Exemplo: 10⁵ ÷ 10³ = 10²  
**Subtrai os expoentes**

📏 **Conversões úteis**  
Essenciais para cálculo de tráfego, banda e armazenamento:

* **Mega → Giga**: ÷ 10³  
* **Giga → Tera**: ÷ 10³  
* **Mega → Tera**: ÷ 10⁶

![][image3]
:::

🧾 **Resumo: o que aprendemos até aqui**

* Trabalhar com **ordens de grandeza** é mais produtivo do que com números absolutos.  
* Com notação científica, conseguimos fazer **estimativas rápidas** com boa precisão.  
* Isso vai nos ajudar **no próximo vídeo**, quando iniciaremos os cálculos reais do plano de capacidade.

## 🔢 **Calculando requests por segundo**

📐 **Plano de Capacidade: iniciando os cálculos reais**  
Chegou a hora de **transformar estimativas em números concretos**, com base nos dados levantados anteriormente.

Vamos calcular:

* Requests por segundo  
* Proporção de leitura vs escrita  
* E aplicar **notação científica** para facilitar tudo

💡 Lembre-se: o plano de capacidade precisa **dar visibilidade clara sobre volume, tráfego e esforço técnico**.  
Sem isso, o System Design vira achismo.

:::note Cálculo de RPS

🔢 **Revisando os dados principais**

* 👥 1 milhão de usuários ativos por dia → 10⁶  
* 🔁 Cada usuário faz 5 requests → 5 × 10⁶ requests por dia  
* ⏱️ Quantos segundos tem um dia?  
  - Exato: 86.400  
  - Mas usaremos **100.000 segundos (10⁵)** como arredondamento para simplificar

📈 **Requests por segundo (RPS)**  
Vamos ao cálculo:

* `5 × 10⁶ requests / 10⁵ segundos = 5 × 10¹ = 50 RPS`  
  ✅ Resultado: **50 requests por segundo**

🧠 Muito mais fácil que dividir 5.000.000 / 86.400 na mão.  
**Notação científica = velocidade + clareza + menos erros**

🔁 **Dividindo por tipo de operação**

* Writes = 10% do total → `50 ÷ 10 = 5 RPS`  
* Reads = 90% → `50 - 5 = 45 RPS`

📊 **Resumo prático**

* 📌 Total de RPS: 50  
* ✍️ Writes por segundo: 5  
* 🔍 Reads por segundo: 45

![][image4]
:::

:::tip
🎯 **Conclusão**

Essa técnica te permite:

* Raciocinar rápido  
* Evitar erros com zeros  
* Justificar escolhas com números confiáveis mesmo sob pressão
:::

## 🛒 **Compras por segundo**

🛒 **Plano de Capacidade: Quantidade de Compras por Segundo**

Agora que já calculamos os **requests por segundo**, vamos descobrir a **quantidade de compras** que acontecem no sistema.

:::note Cálculo de Compras por Segundo (CPS)

📌 **Premissas**

* 🧍‍♂️ 1 milhão de usuários por dia → 10⁶  
* 💳 5% dos usuários realizam uma compra  
* ⏱️ Tempo de referência: 1 dia \= 10⁵ segundos (100.000 segundos)

📊 **Etapa 1: calcular total de compras por dia** `5% de 10⁶ = 5 × 10⁴ compras/dia = 50.000`

📊 **Etapa 2: calcular compras por segundo (CPS)** Fórmula:  
`CPS = compras por dia / segundos por dia`  
Aplicando:  
`(5 × 10⁴) / (10⁵) = 5 × 10⁻¹ = 0.5`

✅ **Resultado: 0.5 compras por segundo**

🔢 **Notas úteis**

* `10⁻¹ = 0.1`  
* `5 × 10⁻¹ = 0.5`

📈 **Resumo da etapa**

* Total de compras por dia: **50.000**  
* Compras por segundo: **0.5 CPS**

![][image5]
:::

:::info
Essa taxa de transação é **relativamente baixa** em comparação com o volume geral de requests,  
mas ela é **crítica** para o sucesso do negócio e **deve ser protegida com alta confiabilidade**.
:::

## 📡 **Bandwidth**

📡 **Plano de Capacidade: Bandwidth (Taxa de Transferência de Dados)**

Agora vamos calcular a **quantidade de dados trafegados por segundo** no sistema, com base no volume de requisições.

:::note Cálculo de Bandwidth

📌 **Premissas**

* 🔁 50 requests por segundo (RPS)  
* 📦 Cada request trafega 50 KB

📊 **Fórmula** `Bandwidth (KB/s) = RPS × Tamanho do pacote (KB)`

📐 **Cálculo** `50 RPS × 50 KB = 2.500 KB/s`

📏 **Convertendo para MB/s** `2.500 KB ÷ 1.000 = 2.5 MB/s`

🧠 **Usando notação científica (opcional)** `(2.500 × 10³) / (10³) = 2.500 MB/s`

✅ **Resultado final: 2.5 MB por segundo**

:::


:::info
🎯 **Conclusão** Esse valor representa o **volume médio de tráfego transacional** por segundo.  
Atenção: esse cálculo **não considera picos**, CDN, headers ou payloads adicionais. É uma **base para planejamento**.  
![][image6]

📌 Bandwidth é simples:

* Quantidade de requests por segundo  
  ×  
* Tamanho médio da resposta
:::

## 💾 **Storage (pt1)**

💾 **Plano de Capacidade: Storage (Armazenamento de Dados)**

Chegamos à parte de cálculo de **storage**, talvez a mais "chata" — não por ser difícil, mas por exigir atenção e múltiplas etapas. Vamos estruturar tudo com clareza.

:::note Cálculo de Storage (Parte 1)

📌 **Fórmula base do cálculo de storage** `Storage = Writes por segundo × Tamanho da request × Replication Factor`

📊 **Dados do sistema**

* ✍️ Writes por segundo: 5 RPS  
* 📦 Tamanho médio de cada write: 50 KB  
* 🔁 Replication Factor: 3 (mantemos 3 cópias dos dados) (para logs poderia não ter replication factor)

📐 **Cálculo do storage por segundo** `5 × 50 × 3 = 750 KB/s`  
`750 KB ÷ 1.000 = 0.75 MB/s`

✅ **Resultado: 0.75 MB por segundo de gravação**

📅 **Convertendo para Storage por dia**

Sabemos que:

* 1 dia ≈ `10⁵` segundos (100.000 segundos)

📐 Cálculo: `Storage por dia = 0.75 × 10⁵ = 75.000 MB/dia = 75 GB/dia`

📆 **Convertendo para Storage por ano**

Fórmula:  
`Storage por ano = Storage por segundo × (10⁵ × 365)`  
`= 0.75 × 3.65 × 10⁷ = 2.7375 × 10⁷ MB`

Convertendo: `2.7375 × 10⁷ MB ÷ 1.000 = 27.375 TB/ano`

🔁 **Arredondando para facilitar**  
Use o valor aproximado:  
`Storage por ano ≈ 3.65 × 10⁷ MB`

📆 **Storage para 5 anos**

Fórmula:  
`5 anos ≈ 5 × 3.65 × 10⁷ = 1.825 × 10⁸ MB`  
Mas para simplificar:

📌 Arredonde:  
`5 anos ≈ 2 × 10⁸ MB`  
Ou seja:  
`Storage para 5 anos = 0.75 × 2 × 10⁸ = 1.5 × 10⁸ MB = 150 TB`

📈 **Resumo final**

* 💾 Storage por segundo: **0.75 MB**  
* 📅 Por dia: **75 GB**  
* 📆 Por ano: **27.375 TB (≈ 30 TB)**  
* 📆 5 anos: **150 TB (com arredondamento)**

![][image7]

:::

:::

:::tip
🎯 **Conclusão** Mesmo com aproximações, você consegue apresentar cálculos com clareza, justificativa e agilidade.  
**É isso que importa em entrevistas e no dia a dia corporativo.**
:::

## 💾 **Storage (pt2)**

💾 **Plano de Capacidade: Armazenamento por Dia, Ano e 5 Anos**

Chegou a hora de consolidar todas as estimativas de **disco necessário ao longo do tempo**, usando os racionais que montamos nos vídeos anteriores. Vamos fazer isso de forma limpa e prática.

:::info Resumo do Cálculo de Storage

📌 **Premissas**

* 💽 Escrita por segundo: `0.75 MB/s`  
* 🔁 1 dia \= `10⁵` segundos  
* 🗓️ 1 ano \= `3.65 × 10⁷` segundos  
* ⏳ 5 anos ≈ `2 × 10⁸` segundos  
* 📦 Mega para Giga \= ÷ `10³`  
* 📦 Mega para Tera \= ÷ `10⁶`

---

📅 **Storage por Dia**

Fórmula:  
`Storage = 0.75 × 10⁵`

Convertendo de MB para GB:  
`(0.75 × 10⁵) ÷ 10³ = 0.75 × 10² = 75 GB/dia`

✅ **Resultado: 75 GB por dia**

---

📆 **Storage por Ano**

Fórmula:  
`Storage = 0.75 × 3.65 × 10⁷ = 2.7 × 10⁷ MB`

Convertendo para Terabytes:  
`(2.7 × 10⁷) ÷ 10⁶ = 2.7 × 10¹ = 27 TB/ano`

✅ **Resultado: 27 Terabytes por ano**

---

📆 **Storage em 5 Anos**

Fórmula:  
`Storage = 0.75 × 2 × 10⁸ = 1.5 × 10⁸ MB`

Convertendo para Terabytes:  
`(1.5 × 10⁸) ÷ 10⁶ = 1.5 × 10² = 150 TB`

✅ **Resultado: 150 Terabytes em 5 anos**

---

📈 **Resumo Geral**

* 📅 Por dia → **75 GB**  
* 📆 Por ano → **27 TB**  
* 📆 5 anos → **150 TB**

![][image8]

:::

:::

:::tip
🔍 **Conclusão**

Apesar de parecer trabalhoso no início, trabalhar com **notação científica e aproximações práticas** torna as contas viáveis, rápidas e confiáveis — especialmente em contextos de entrevista ou discussões técnicas de alto nível.
:::

## 💡 **Considerações**

📌 **Considerações Finais sobre Plano de Capacidade**

Antes de encerrarmos essa etapa, é essencial alinhar algumas premissas e mentalidades importantes para trabalhar corretamente com System Design.

:::info Premissas e Mentalidades

🧮 **Aproximação é parte do jogo**

Não existe precisão absoluta nesse tipo de análise. Trabalhar com **aproximações conscientes** é o caminho esperado, inclusive em entrevistas técnicas. O objetivo não é acertar o número exato, mas demonstrar **raciocínio estruturado**.

🔁 **Use seus próprios racionais**

Se você não gostou dos arredondamentos apresentados (como considerar 1 dia \= `10⁵` segundos), sinta-se à vontade para **criar suas próprias aproximações**. O essencial é ter um **modelo mental claro** para seguir.

🎯 **Exemplo não é regra**

Usamos 50 KB por request como valor base. Poderia ser 20 KB, 80 KB ou outro valor específico de acordo com o seu contexto. O foco aqui não é o número em si, mas a **metodologia de cálculo**.

🔍 **Relevância dos dados de entrada**

Todos os nossos cálculos dependem de dados funcionais e não funcionais:

* 📌 Número de usuários ativos  
* 📌 Taxa de requisições por usuário  
* 📌 Tamanho médio por requisição  
* 📌 Fator de replicação  
* 📌 Frequência de gravações vs leituras  
* 📌 Horizonte de tempo (1 dia, 1 ano, 5 anos...)

:::


:::note
📐 **Conclusão**

O importante é ter uma base. Com poucos dados e os racionais certos, você já consegue **sair do zero** e montar um plano de capacidade confiável, defendendo suas decisões com clareza.

📁 **Este material está disponível para consulta futura. Use como referência ou adapte conforme sua realidade.**
:::

## 📝 **Exercicio**

Plano de capacidade na prática  
Olá,  
Agora é a sua vez de calcular o plano de capacidade do sistema.  
Os dados necessários para o cálculo são os seguintes:

\- 1Mi DAU (Daily Active Users)  
\- Cada usuário faz 1 requests  
\- Cada request resulta em 20KB  
\- Reads vs Writes: 9:1  
\- Replication factor 3

Use as anotações feitas nas aulas e responda o questionário a seguir.

📊 Projeção de Capacidade

**Usuários Ativos Diários (DAU):** 1.000.000 usuários/dia  
**Requests por usuário:** 1 request/dia  
**Tamanho médio por request:** 20 KB  
**Proporção Read/Write:** 90% leitura • 10% escrita  
**Fator de replicação:** 3 réplicas

🚀 Performance

**Capacidade de requisições (RPS):** `10 rps`

DAU           `*` Requests por usuário      `=` Requests por dia  
Requests por dia `/` Requests segundos por dia `= RPS`

`10^6` DAU          `* 1`    Requests por usuário       `= 10^6 requests por dia`  
`10^6` Requests por dia `/ 10^5` Requests segundos por dia  `= 10^1 = 10 RPS`

**Largura de banda necessária (Bandwidth):** `0,2 MB/s`  
`10 requests por segundo`   
`20 KB cada request`  
`10 * 20 = 200 KB/s = 0,2 MB/s`

📦 Armazenamento

`200 KB/s`  
`10 % de escrita = 20 KB/s se storage`  
`20 KB/s se storage * 3 réplicas = 60 KB/s de storage`

**Storage por segundo:** `60 KB/s (60 KB / 1000 = 0,06 MB/s ou 6*10^-2 MB/s)`  
**Storage por dia:** `(6 * 10^-2) * (10^5) = 6 * 10^3 MB`   
             `6 * 10^3 MB  = (6 * 10^3) / (10^3) = 6 = 6 GB`  
**Storage por ano:** `6GB (dia) * 365 dias/ano = 2190 GB = 2,19 TB`  
**Storage em 5 anos:** 2,19 TB/ano \* 5 \= `10,95 TB`

