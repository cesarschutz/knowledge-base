# 📑 Solution Architecture Document

## **Introdução ao SAD** {#introdução-ao-sad}

📄 **O Que é o SAD (Solution Architecture Document)?**

O professor introduz o SAD como o tópico final do módulo, descrevendo-o como um documento "controverso" que **norteia o trabalho final do arquiteto de solução**. Ele não é um documento estático; seu tamanho e nível de detalhe variam de acordo com o projeto, seguindo uma regra principal: **quanto maior o risco, mais detalhes são necessários**. É um documento que serve não apenas a fins técnicos, mas também para ajudar gestores e outros stakeholders a entenderem o que será implementado.

⚖️ **A Importância Contratual e o Risco do Documento**

O professor enfatiza que o arquiteto de solução é o "braço direito do comercial", especialmente em consultorias. Nesse contexto, o SAD funciona como uma **"prova"** sobre o que foi combinado com o cliente.

* **A Analogia:** Ele usa a expressão "pau que bate em Chico, bate em Francisco" para ilustrar que o documento pode ser usado tanto a favor da empresa (para justificar cobranças por escopo não previsto) quanto contra ela (se a entrega não corresponder ao combinado).  
* **A Consequência:** Por causa desse risco, o documento precisa ser **extremamente transparente**, especificando claramente o que será e o que não será entregue.

🗺️ **Objetivo do Capítulo e Conexão com Outros Módulos**

* **O Plano:** O objetivo deste capítulo é apresentar os **principais tópicos** que compõem um SAD. O professor avisa que não criarão um documento do zero, pois é uma tarefa grande e dependente de um contexto de projeto. Ele menciona a existência de templates para não começar do zero e que deixará links como referência.  
* **Conexão Futura:** Este módulo de fundamentos será complementado por um módulo futuro focado em **System Design e Design Docs**, que trará conhecimentos mais específicos (como diagramas) que são parte de um SAD.

## **Visão geral sobre o SAD** {#visão-geral-sobre-o-sad}

📄 **O Que é o SAD (Solution Architecture Document)?**

O professor explica que o SAD é um documento que descreve a arquitetura de uma solução, sendo muito comum tanto em empresas de produto quanto, e especialmente, em **empresas de consultoria**. Ele não é estático e pode ser construído ao longo do projeto, com partes sendo desenvolvidas já na fase de negociação para dar suporte à área comercial.

📋 **Componentes e Conteúdo do SAD**

O documento geralmente cobre:

* **Componentes Arquiteturais:** As tecnologias que compõem a solução (ex: RabbitMQ, Apache Kafka, PostgreSQL).  
* **Módulos da Solução:** As partes funcionais do sistema (ex: Módulo de Checkout, API Gateway, Área Administrativa).  
* **Interfaces de Comunicação:** Como um sistema se comunica com outro (não se refere à interface gráfica do usuário).  
* **Fluxo de Dados:** Diagramas que mostram como os dados fluem através do sistema em processos críticos (ex: do carrinho ao checkout, ao envio de e-mail). O professor ressalta que não é preciso mapear 100% dos fluxos, apenas os mais críticos, pois alguns são óbvios.

💡 **Cada Caso é um Caso: A Sensibilidade do Arquiteto**

Um ponto crucial é que três projetos idênticos em três empresas diferentes terão três SADs diferentes. Isso ocorre porque cada organização tem sua própria cultura, contexto, restrições e limitações. Um bom arquiteto de solução é aquele que tem a **sensibilidade** para adaptar o projeto à estrutura e à realidade da empresa naquele momento.

💰 **O SAD na Fase de Negociação e o "Orçamento Cobrado"**

O professor quebra a ideia de que o SAD só é criado após a contratação. Ele compartilha uma experiência pessoal para ilustrar um cenário comum em projetos disruptivos e de alto risco:

* **O Cenário:** Há 15 anos, em um projeto com tecnologias experimentais e sem precedentes no mundo, era impossível dar um orçamento direto ao cliente.  
* **A Solução (Orçamento Cobrado):** A consultoria propõe cobrar para fazer o orçamento. Esse "orçamento pago" envolve a criação de uma **prova de conceito (PoC)** para validar a viabilidade da solução.  
* **Exemplo Prático:** A consultoria cobra, por exemplo, R$ 500 mil para criar a PoC. Isso envolve viagens, contratação de tecnologias e trabalho da equipe. Após a PoC, eles chegam com o orçamento final (ex: R$ 10 milhões).  
* **A Cláusula "Go / No-Go":** Para proteger ambas as partes, o contrato inclui essa cláusula. Se o cliente aprova ("Go"), os R$ 500 mil pagos pela PoC podem ser deduzidos do valor final. Se o cliente desiste ("No-Go"), a consultoria fica com o valor e entrega toda a documentação da PoC para o cliente, que pode usá-la com outros fornecedores.  
* **Conclusão:** Muitas vezes, o SAD (ou partes dele) é gerado **antes da contratação**, seja em um orçamento cobrado ou para dar mais conforto e visibilidade ao cliente para que ele possa aprovar o projeto internamente.

👥 **O Documento como Ferramenta para Todos os Stakeholders**

O SAD serve como referência para os mais diversos tipos de stakeholders, desde gestores e a área financeira até a equipe técnica. Ele dá clareza a todos os envolvidos.

🏛️ **Documentação vs. Burocracia**

O professor finaliza com uma reflexão importante sobre governança:

* **Não Confunda:** Documentação não deve ser confundida com burocracia.  
* **A Lógica da Governança:** Quanto menor a empresa, menos governança e mais flexibilidade. Quanto maior a empresa, mais governança e controle são necessários para evitar o caos e permitir o crescimento sustentável. É por isso que empresas grandes são mais lentas para tomar decisões: são muitas áreas (jurídico, TI, etc.) e processos envolvidos para garantir a ordem.

## **Introdução** {#introdução-2}

📄 **Cada SAD é Único: Documente o que Importa**  
Arquitetura é o que importa. O template varia conforme porte, risco e contexto organizacional. Regra de ouro: quanto maior o risco ou o tamanho do projeto, maior o nível de detalhamento exigido.

📋 **Introdução**

- **Propósito:** razão de existir do documento e da solução.  
  *Exemplo:* “Descrever a arquitetura do sistema de venda de ingressos para grandes shows, garantindo alta disponibilidade.”  
- **Valor corporativo:** vínculo direto com metas estratégicas (time-to-market, compliance, escalabilidade).

🎯 **Escopo da Solução**

- **Fronteiras funcionais:** o que a solução cobre e o que fica fora.  
  *Exemplo:* pagamentos, wallet, portal para parceiros cadastrarem eventos.  
- **Critérios de sucesso:** KPIs de capacidade, desempenho e disponibilidade.

⚖️ **Restrições**

- **Tempo:** go-live irredutível em 4 meses.  
- **Mão de obra:** equipe majoritariamente Ruby; stack definida.  
- **Financeiro:** budget fixo de US$ 500 k.  
- **Regulatórias:** LGPD e PCI-DSS.  
  *Justificativa:* expõem por que certas escolhas, mesmo subótimas, são necessárias.

💡 **Pressupostos**

- Equipe de 20 devs full-time alocada.  
- Desconto cloud negociado para tráfego de dados.  
- Integrações externas operacionais no sandbox na sprint 1\.

➡️ Documente apenas o que impacta decisão arquitetural; o resto é ruído operacional.

## **Visão geral da arquitetura** {#visão-geral-da-arquitetura}

🏛️ **A Seção "Visão Geral da Arquitetura"**

Após a introdução, o próximo passo no SAD é apresentar a **visão geral da arquitetura**. O professor explica que esta seção deve descrever os **principais pontos que farão a diferença** durante o projeto, sem necessariamente detalhar tudo.

* **Exemplo do que incluir:** "O projeto terá três módulos principais, que utilizarão um componente de banco de dados. Utilizaremos a gateway de pagamento X e precisaremos levar em conta a concorrência."

📊 **O Papel dos Diagramas**

Para suportar a descrição textual, são criados **diagramas de alto nível** que mostram a solução como um todo se comportando. O professor aborda os seguintes pontos sobre diagramação:

* **A Importância da Padronização:**  
    
  * O professor alerta que diagramas podem ser "muito loucos", com cada pessoa usando uma notação diferente (um usa um boneco para o cliente, outro usa uma bolinha; um tipo de seta para síncrono, outro para assíncrono). A padronização é recomendável para que todos consigam entender os diagramas facilmente.


* **Ferramentas e Opinião Pessoal:**  
    
  * Ele menciona diferentes abordagens como **UML**, **MDL** e o **C4 Model**.  
  * O professor dá sua opinião pessoal, baseada em um ano e meio de estudo intenso: uma das melhores formas de fazer diagramação de alto nível é usando o **C4 Model**. Ao mesmo tempo, ele defende o **UML**, dizendo que é "fantástico" apesar de ser "demonizado" por muitos.  
  * **O Objetivo Final:** A diagramação serve para **comunicar**. Se o diagrama é claro para quem vai ler, ele cumpriu seu papel.


* **Tipos de Diagramas nesta Seção:**  
    
  * **Diagrama de Componentes:** Mostra os principais componentes da arquitetura e como eles se relacionam entre si.  
  * **Diagrama de Fluxo:** Descreve uma sequência de ações. "Uma requisição bate aqui e acontece isso. Depois acontece isso. Se der certo, vai para esse lado; se não der certo, vai para aquele outro lado."

💡 **Foco no que Importa**

O professor finaliza com um alerta importante: **documente o que importa**. Ele critica a tendência de gastar tempo excessivo documentando partes triviais e procrastinar nas partes que realmente importam.

* **Exemplo "Bobo":** Ele cita o caso de alguém que cria um "super documento" apenas para descrever o CRUD de uma simples página de FAQ.

## **Requisitos funcionais e não funcionais** {#requisitos-funcionais-e-não-funcionais}

📋 **O Tópico "Cabeludo": Requisitos**

O professor introduz a seção de requisitos como a parte mais "cabeluda" do SAD. Ele alerta que a definição de requisitos pode ser um processo longo e complexo, especialmente em abordagens mais tradicionais, onde meses eram gastos nisso antes de escrever qualquer código. O grande desafio é que os requisitos mudam constantemente.

✅ **Requisitos Funcionais**

* **O que são:** Referem-se a **como a aplicação vai funcionar**. São os recursos, funcionalidades (*features*) e as regras de negócio que agregam valor e geram diferencial competitivo.  
* **O que incluir:** As principais funcionalidades do sistema, como elas operam e o que se espera delas.  
* **Foco no que Importa:** O professor usa novamente o exemplo do FAQ. Ele é uma *feature*, mas não agrega tanto valor quanto o processo de "realizar uma compra". Portanto, embora o FAQ deva ser listado, ele não precisa ser detalhado com a mesma profundidade que um requisito crítico como o de compra.

⚙️ **Requisitos Não Funcionais**

* **O que são:** São os atributos de qualidade do sistema, também chamados de *Cross-cutting* (pois "cortam" a aplicação do início ao fim).  
* **Exemplos:** Performance, escalabilidade, segurança e disponibilidade.  
* **Perguntas a serem respondidas:** "Quantas pessoas vão acessar?", "Qual a performance esperada?", "Como vou guardar dados de cartão? Preciso ser PCI compliant?".

🤔 **O Dilema: Como Definir Requisitos Não Funcionais para um Sistema Novo?**

O professor aborda uma pergunta clássica e difícil: "Como eu vou calcular a performance ou a escalabilidade de um sistema que nunca foi ao ar?". Ele explica que a abordagem muda dependendo do contexto:

1. **Empresas Consolidadas:** Geralmente já têm um histórico de dados, projeções de tráfego, picos e sazonalidade, o que permite fazer uma previsão mais precisa.  
     
2. **Empresas Novas (ou novas áreas de negócio):** Quando não há dados históricos, a realidade é que **você vai ter que "dar um chute"**.

💡 **O "Chute" com Responsabilidade**

O professor defende que "chutar" não é um problema, desde que seja um chute responsável e validado.

* **Não é só chutar:** Não basta dizer "vou botar tanto de máquina". A pergunta correta é: "se eu colocar tanto de máquina, quantas requisições ela vai aguentar? Qual o *throughput*? Qual a latência?".  
* **Valide com Testes:** Dê o seu chute, mas em seguida, faça **testes de carga e de performance** para validar suas suposições. Isso permite criar uma projeção baseada em dados reais, mesmo que o sistema nunca tenha ido ao ar.  
* **Conclusão:** Mesmo que você tenha que escalar mais tarde, você não partiu do "momento zero"; você já tem uma ideia de como o sistema se comporta sob carga. Em resumo: se precisar chutar, chute, mas **traga dados** para embasar sua decisão.

## **Detalhamento da arquitetura** {#detalhamento-da-arquitetura}

📐 **A Seção "Design da Arquitetura"**

O professor explica que esta seção desce um nível em relação à visão geral. Agora, o foco é em **como** a solução será construída, com quais tecnologias e como elas se relacionarão. Ele deixa claro que, embora seja o design da *arquitetura* (nível mais alto), ele influencia diretamente o design do *software*.

📋 **Componentes do Design da Arquitetura**

* **Diagramas Detalhados e Descrição:**  
    
  * Neste ponto, os diagramas se tornam mais detalhados, mostrando os componentes se comunicando.  
  * **Exemplo:** "Minha aplicação manda uma mensagem para um tópico. Esse tópico processa o pagamento e manda uma mensagem para o sistema de estoque. Se der erro, acontece isso."


* **Descrição das Tecnologias Utilizadas:**  
    
  * Aqui se especifica o *stack* tecnológico.  
  * **Exemplo:** "O backend será em **Go**, que envia uma mensagem para o **RabbitMQ**. Isso se comunica com um sistema de predição em **Python**, que usa um modelo de Machine Learning e armazena os dados em formato **Parquet** no **S3**."


* **Como Funcionam as Integrações:**  
    
  * É preciso deixar claro quais são os sistemas internos, quais são os sistemas externos com os quais eles se comunicam e quais são os *vendors* (fornecedores) envolvidos.  
  * **Exemplo:** "Vamos usar o Cassandra ou o DynamoDB? Qual a vantagem de cada um? Como faremos a integração?"


* **Decisões e Trade-offs:**  
    
  * O professor ressalta que, embora sejam poucos pontos, eles dão “muito trabalho”. É neste momento que se tomam as decisões importantes, levando em conta a equipe disponível, os custos, as vantagens e desvantagens de cada tecnologia.

💡 **O Perfil do Arquiteto: Conservador vs. Arrojado**

* **Conservador:** prefere usar tecnologias que “já funcionam, já estão testadas e aprovadas”, especialmente em projetos grandes.  
* **Arrojado:** quando as restrições são muito grandes ou o projeto é disruptivo, é preciso usar tecnologias mais novas ou até experimentais. O professor cita um projeto de 15 anos atrás que reutilizou uma tecnologia de identificação de armas para um objetivo totalmente diferente dentro de uma bola.

🍚 **A Força do “Arroz e Feijão”**

Citando Jeff Bezos, o professor conclui: o segredo do sucesso muitas vezes não está em adotar o que é novo, mas em **fazer cada vez melhor aquilo que você já faz bem e que importa para o negócio**.

* **Exemplo da Amazon:** permitir que as pessoas comprem rápido e recebam o produto o mais rápido possível — todo o resto é “cosmético”.  
* **A Lição:** faça muito bem o “arroz e feijão”. Se for um pilar do seu negócio, isso fará toda a diferença.

## **Implementação** {#implementação}

🚀 **A Seção "Implementação"**

Nesta seção do SAD, o foco é em **como** a solução será construída, entregue e mantida. O professor aborda os principais tópicos que compõem esta parte do documento.

📋 **Tópico 1: Metodologias de Desenvolvimento e Ferramentas**

* **O Dilema:** Muitas pessoas pensam que é preciso definir rigidamente a metodologia (Scrum, etc.). No entanto, o professor argumenta que isso está mudando.  
* **A História do Facebook:** Ele conta que, ao visitar a sede do Facebook e perguntar sobre a metodologia, a resposta foi: "isso pouco importa". O importante é que equipes pequenas (de 8 a 12 pessoas) se virem para entregar da melhor forma possível. Cada equipe trabalha à sua maneira.  
* **A Tendência:** As empresas devem fornecer um "norte", mas cada vez mais os times têm flexibilidade para se organizar. Portanto, o SAD pode ou não detalhar a metodologia, dependendo da cultura da empresa.

🏗️ **Tópico 2: Processos de Deployment e Infraestrutura**

* **Ponto Crítico:** Este é um tópico que não pode ser ignorado.  
* **Infraestrutura:** A discussão volta aos fundamentos: será on-premise ou cloud? Qual cloud?  
* **A Negociação com Cloud Providers:** O professor desmistifica a tabela de preços dos provedores. Ele explica que para grandes empresas, aquele **não é o preço final**. Uma empresa senta com um gerente de contas, fecha um contrato de longo prazo e consegue preços "muito reduzidos". O arquiteto de solução não negocia, mas é ele quem fornece a estimativa de infraestrutura necessária para a negociação.  
* **Processo de Deployment:** Depende do contexto, das ferramentas que a empresa já possui e de como os desenvolvedores estão acostumados a trabalhar.

🧪 **Tópico 3: Processos de Teste de Qualidade**

* **Além do Teste do Desenvolvedor:** O professor faz uma distinção importante. Ele parte do princípio de que todo desenvolvedor **já deve testar seu próprio código**. O "processo de teste de qualidade" aqui se refere à atuação da equipe de QA (*Quality Assurance*).  
* **Exemplo de Metodologia de QA:** Toda nova *feature* sobe para um ambiente isolado, permitindo que a equipe de QA teste apenas aquela funcionalidade específica, sem a interferência de outras em desenvolvimento.  
* **Cobertura de Testes:** É comum definir um *guideline* no processo, como exigir "70% de cobertura de testes" para que o pipeline de CI/CD possa prosseguir.  
* **Contexto é Tudo:** O professor finaliza lembrando que nada é simples. Se o projeto é uma solução nova em cima de um sistema legado de 30 anos que tem apenas 20% de cobertura de testes, a abordagem e as expectativas precisam ser ajustadas a essa realidade.

## **Operação e gestão de mudanças** {#operação-e-gestão-de-mudanças}

🔧 **A Seção "Operação e Manutenção"**

O professor explica que esta seção do SAD trata do **"dia a dia"** da solução, ou seja, como ela será operada depois de estar funcionando.

👥 **Tópico 1: Operação (Quem e Como)**

* **Definindo Responsabilidades:** O documento deve especificar **quem vai operar** a aplicação e como isso vai funcionar, pois isso muda toda a dinâmica do projeto.  
* **Dois Modelos Culturais:**  
  1. **Devs Operam:** Em muitas empresas, os próprios desenvolvedores operam a aplicação, usando dashboards e revezando-se em plantões (*on-call*).  
  2. **Equipe de Operação Dedicada:** Em outras, existe uma área de operação separada. O desenvolvedor nem chega perto; se ocorre um erro, a equipe de operação tenta resolver e só aciona o desenvolvedor se necessário.

📊 **Tópico 2: Monitoramento**

* **Saber o que Monitorar:** O professor reforça que monitoramento não é automático. Antes de tudo, é preciso **saber o que monitorar**.  
* **Além do Hardware:** Não se trata apenas de monitorar se um servidor está no ar ou não. É crucial monitorar **métricas específicas da aplicação** que reflitam o negócio.  
* **Exemplo:** Monitorar o *throughput* de uma API ou o tempo de emissão de uma nota fiscal. Se o sistema, que normalmente faz 500 compras por segundo, passa a fazer apenas 50, é um sinal de catástrofe que só é detectado pelo monitoramento do que importa para o negócio.

⚙️ **Tópico 3: Processos de Manutenção**

* **Manutenção Abrangente:** A manutenção não inclui apenas o software, mas também a aplicação de *patches* de segurança e outras atualizações.  
* **O Dilema do Horário:** O professor aborda a polêmica da "manutenção de madrugada". Ele reconhece a crítica de que isso pode ser sinal de imaturidade da empresa.  
* **A Realidade do Risco:** No entanto, ele argumenta que, em sistemas ultracríticos (como o da Visa, que processa cartões 24/7), a escolha do horário de manutenção é uma forma de **mitigar riscos**. Se o pico de uso é às 13h, faz sentido realizar uma manutenção crítica em um horário de menor movimento, mesmo que seja de madrugada. Nem sempre é sobre imaturidade, mas sobre gestão de risco.

🚑 **Tópico 4: Processos de Recuperação de Desastres**

* **A Premissa:** "Coisas ruins vão acontecer. Sistemas vão cair. Indisponibilidades vão aparecer."  
* **O Plano B:** É essencial ter um plano de recuperação para os cenários de falha mais óbvios.  
* **O Teste é Fundamental:** Não basta ter um backup; é preciso **testar o processo de recuperação**. "Quanto tempo demorou para restaurar o banco de dados da última vez que você testou?". O tempo de recuperação medido no teste deve ser comparado com o que é aceitável para o negócio.

🔄 **Tópico 5: Processo de Gerenciamento de Mudanças**

* **O Problema:** Em sistemas grandes com muitas equipes, uma mudança não comunicada pode causar um caos. Exemplo: uma equipe muda o padrão de uma API sem saber que outras 10 equipes a utilizavam, quebrando o sistema para todos.  
* **A Solução:** Ter um processo definido para gerenciar mudanças críticas. Isso pode envolver um documento (template) que descreve o que vai mudar, qual o impacto e quais equipes precisam ser comunicadas.

## **Recuperação de desastres** {#recuperação-de-desastres}

🚨 **A Seção "Riscos e Estratégias de Mitigação"**

O professor destaca esta como uma das seções mais importantes do documento. A mentalidade aqui é que **coisas ruins acontecem o tempo todo**, e a responsabilidade pela solução é do arquiteto, mesmo que a falha seja de um sistema de terceiros.

🔪 **A Analogia da Cirurgia**

Para ilustrar a responsabilidade do arquiteto, ele usa uma frase poderosa: **"A cirurgia aconteceu com total êxito, mas o paciente não sobreviveu."** Não adianta sua aplicação estar perfeita se um componente externo, como uma gateway de pagamento, falha e derruba a solução como um todo. O arquiteto é pago para fazer as coisas funcionarem, independentemente da origem do problema.

📋 **Componentes da Seção**

* **Riscos Potenciais:** É a identificação de possíveis pontos de falha que podem afetar a solução, sejam eles internos ou externos.  
    
* **Riscos de Grande Impacto (Exemplo do SEFAZ):**  
    
  * **O Cenário:** Um e-commerce gigante como o Mercado Livre, que emite milhões de notas fiscais por dia, depende do sistema do **SEFAZ**. Se o caminhão não tiver o DANFE (nota fiscal impressa) em mãos, ele não pode sair para a entrega.  
  * **O Risco:** O sistema do SEFAZ cai por não aguentar o volume de emissões. Isso **para toda a operação da empresa**, mesmo que a aplicação interna esteja "bonitinha".  
  * **Mitigação:** O arquiteto não precisa resolver o problema do SEFAZ, mas precisa ter um plano para **quando ele voltar**. Por exemplo, criar filas de prioridade: uma para produtos com entrega no mesmo dia e outra para entregas futuras. Quando o sistema voltar, a fila prioritária é processada primeiro.


* **Planos de Contingência:**  
    
  * **Foco no que Importa:** É impossível criar planos para tudo. Os planos de contingência devem ser criados para as falhas **óbvias e que importam**. Se o banco de dados cair é uma falha óbvia, logo, precisa de um plano.  
  * **O Perigo das "Coisas Pequenas":** O professor alerta que, com o tempo, percebe-se que falhas em componentes aparentemente pequenos e não críticos podem derrubar todo o sistema. Ele conta a experiência de um "sistemão" de vídeo que dependia de uma chamada de API para um "sisteminha" que só retornava 1 ou 0\. Quando o sisteminha caiu, o sistema principal inteiro caiu junto, pois ninguém monitorava a parte "pequena".  
  * **A Responsabilidade do Arquiteto:** O arquiteto, por saber o que realmente importa, deve antecipar esses riscos e documentar os planos de contingência, mesmo que seja impossível prever tudo.

## **Tecnologias, custos e pessoal** {#tecnologias,-custos-e-pessoal}

💰 **A Seção "Custos, Tecnologia e Pessoal"**

O professor explica que esta seção do SAD deve trazer uma previsão dos recursos necessários para o projeto.

* **Previsão de Custos:** O arquiteto precisa estimar os custos, lembrando do conceito de **TCO (Total Cost of Ownership)**, que inclui tanto a implementação quanto a manutenção.  
* **Tecnologia e Pessoal:** É preciso definir a equipe necessária. "Vou precisar apenas de pessoas técnicas? Gerentes de projeto? Designers de interface? Quantas pessoas?".  
* **Acurácia e Experiência:** O professor reconhece que essa previsão nem sempre será 100% acertada, mas a precisão aumenta com a experiência do arquiteto em projetos similares.

🚶‍♂️ **A Seção "Próximos Passos"**

Esta parte do documento responde à pergunta: **"Por onde a gente começa?"**. Ela define a ordem de execução do projeto e inclui quaisquer observações gerais que sejam importantes para o início dos trabalhos.

💡 **Conclusões e Dicas Finais sobre o SAD**

* **Burocracia Necessária:** O professor admite que o SAD pode ser visto como "uma baita burocracia" e uma "perda de tempo". No entanto, ele é **muito necessário** em grandes empresas e consultorias, principalmente para **proteger a empresa** que presta o serviço.  
* **Foco no que Importa:** A principal dica é focar no que realmente importa para o projeto. Não se deve gastar tempo com "firulas tecnológicas" em um documento de tão alto nível, a não ser que o projeto seja extremamente experimental. Na maioria das vezes, o **"arroz com feijão funciona muito bem"**.  
* **Uso de Templates:** Raramente um arquiteto precisa criar um SAD do zero. As empresas geralmente já têm seus próprios templates e metodologias. O professor menciona que deixará alguns links de referência.

🎓 **Finalização do Módulo e Mensagem para os Alunos**

* **Conexão com Módulos Futuros:** O professor lembra que este é um módulo de fundamentos e que haverá um módulo específico sobre **System Design e Design Docs** que aprofundará esses conceitos.  
* **Importância do Conhecimento:** Ele reconhece que o conteúdo do capítulo foi "denso pra caramba", mas que é crucial. Mesmo para quem não vai atuar como arquiteto, entender a complexidade por trás de um projeto ajuda a ter insights importantes que muitas vezes são ignorados no dia a dia do desenvolvimento.  
* **Amadurecimento do Desenvolvedor:** A mensagem final é que este conhecimento ajuda a gerar um **grau de amadurecimento**, especialmente para o desenvolvedor que costuma focar apenas na tecnologia e na implementação. Ele passa a entender que o desenvolvimento é apenas o "depois" de um longo processo de planejamento, documentação e negociação.

## **Questionário** {#questionário-4}

**Sobre o SAD, é correto afirmar que:**  
É um documento responsável por nortear várias áreas da empresa – técnica, comercial e gestão – sobre o projeto a ser executado.

**Quais são os principais requisitos funcionais?**  
Features de valor, recursos, funcionalidades

**A frase sobre mensageria e diagrama pertence a qual etapa do SAD?**  
Detalhamento da arquitetura

**Marque a opção que lista requisitos não funcionais:**  
Escalabilidade, performance, segurança

**Premissas que fazem parte do tópico “Implementação”:**  
I, III, IV

**Plano de contingência, riscos potenciais e risco de grande impacto pertencem a qual etapa?**  
Recuperação de desastres

**É responsabilidade do arquiteto indicar no SAD custos operacionais e tecnológicos?**  
Verdadeiro