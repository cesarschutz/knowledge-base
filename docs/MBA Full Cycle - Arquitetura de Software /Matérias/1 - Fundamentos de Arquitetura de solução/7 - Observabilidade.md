# 📈 Observabilidade

## **Falando sobre Observabilidade** {#falando-sobre-observabilidade}

🎯 **Objetivo do Módulo: Fundamentos de Observabilidade**

O professor inicia um novo módulo sobre **Observabilidade**. Ele esclarece que o objetivo desta etapa é fornecer uma **ideia geral e os fundamentos** sobre o tema. Ele reforça que, por se tratar de um módulo de fundamentos, a visão será mais superficial, com um aprofundamento ("zoom") e mais detalhes práticos sendo abordados em módulos futuros.

🗺️ **Roteiro do Módulo: O Que Será Abordado**

O professor descreve os principais tópicos que serão cobertos para construir essa base de conhecimento:

* O que é e para que serve a observabilidade.  
* As principais diferenças entre observabilidade e monitoramento.  
* As principais ferramentas de mercado para a área.  
* Um destaque especial para o projeto **OpenTelemetry**, que ele descreve como "bem expressivo e com muito potencial".

## **Conceitos básicos** {#conceitos-básicos}

🎯 **Observabilidade e a Analogia da Caixa Preta**

O professor introduz a mentalidade da observabilidade: deve-se imaginar que quem observa o sistema (a solução) pode não ser a mesma pessoa que o desenvolveu. A solução, portanto, deve ser tratada como uma **caixa preta**. Não é possível ver diretamente o que acontece internamente; em vez disso, é preciso **inferir** ou **deduzir** o estado interno do sistema com base nos seus dados de entrada e, principalmente, de saída.

📋 **Definição Formal de Observabilidade**

O professor cita uma definição do site da New Relic, que vem da **Teoria de Controle**: "observabilidade é definida como uma medida de quão bem os estados internos de um sistema podem ser inferidos a partir do conhecimento das saídas externas desse sistema". De forma mais simples, é o **quão bem você pode entender seu sistema complexo**. O trabalho consiste em verificar constantemente os dados de saída para inferir o que está acontecendo internamente e, com base nisso, tomar decisões para melhorar os resultados.

💡 **Próximo Passo: Diferença entre Observabilidade e Monitoramento**

O professor finaliza a aula destacando um ponto de confusão comum: muitas pessoas pensam que observabilidade e monitoramento são a mesma coisa. Ele anuncia que a diferença entre esses dois conceitos será o tema do próximo vídeo, para deixar o assunto bem claro.

## **Observabilidade vs Monitoramento** {#observabilidade-vs-monitoramento}

📊 **O Papel do Monitoramento (ou Monitoração)**

O monitoramento nos mostra **que algo está errado**. Ele parte do princípio de que é preciso saber **com antecedência o que se deseja monitorar** e quais são os resultados esperados.

* **Exemplo Prático:** O professor usa o exemplo de monitorar a memória RAM de uma máquina. Não basta apenas olhar a memória; é preciso definir um parâmetro, como um alarme que avisa quando o uso ultrapassa 80%.  
* **Conceito Chave:** Para monitorar, você precisa saber o que procurar. A analogia usada é: "se você não sabe para onde quer ir, qualquer caminho vale".

💡 **A Função da Observabilidade**

Enquanto o monitoramento aponta o erro, a observabilidade nos permite **perguntar o porquê** de o erro estar acontecendo. Ela não mostra apenas o resultado final, mas permite **interpretar o que está acontecendo para entender a causa raiz** do problema. O objetivo é entender a razão do problema para poder ajustá-lo e fazer com que o sistema volte a operar dentro dos parâmetros monitorados.

🆚 **A Diferença Essencial: O Quê vs. O Porquê**

O professor resume a diferença, citando uma definição do artigo da New Relic, da seguinte forma:

* **Monitoramento:** Mostra **o quê** está errado.  
* **Observabilidade:** Permite perguntar **o porquê** está errado.

## **Pilares vs Pipes** {#pilares-vs-pipes}

🎯 **Os Três Pilares (ou Pipes) da Observabilidade**

O professor explica que para "perguntar o porquê" e entender o que acontece dentro do sistema, a observabilidade se apoia em três componentes fundamentais. Ele cita uma apresentação da Elastic que prefere chamar esses componentes de **"pipes" (canos)** em vez de "pilares", pois eles se conectam e fluem juntos, em vez de serem estruturas independentes.

📋 **Componente 1: Logs**

* **O que são:** Logs são **eventos**. E um evento é algo que aconteceu no passado (ex: "usuário criado", "e-mail enviado").  
* **Conteúdo:** Normalmente, os logs contêm informações completas, como a data, o servidor, a máquina e detalhes do erro, se houver. São eventos que os sistemas disparam para que possamos olhar.

📊 **Componente 2: Métricas (Metrics)**

* **O que são:** São quaisquer **medidas** ou dados que podem ser agregados.  
* **Exemplos:** "Uso de 80% da memória RAM", "média de uso de memória de 60%", "200 pessoas no site agora", "30 compras por minuto". Tudo que pode ser medido se enquadra como métrica.

👣 **Componente 3: Rastreabilidade (Tracing)**

* **O que é:** É a forma de **rastrear** o que está acontecendo dentro da "caixa preta". Permite ver o caminho completo de uma requisição pelas "entranhas" do software.  
* **Utilidade:** Ajuda a identificar gargalos. Exemplo: "essa requisição demorou porque a consulta ao banco de dados levou 5 segundos".  
* **Escopo e Contexto:** O tracing não mostra apenas o caminho, mas também o **escopo e o contexto** de uma requisição específica. Isso é crucial em um ambiente de microsserviços, onde uma única ação (como "criar uma nova conta") pode passar por vários sistemas. O tracing permite acompanhar essa requisição única através de todos os sistemas e identificar onde ocorreu um erro, mantendo o contexto da operação original.

🔗 **A Ideia dos "Pipes": A Interconexão dos Dados**

O ponto central da apresentação da Elastic é que logs, métricas e tracing não devem ser observados de forma separada, mas sim **em conjunto**. Eles se conectam, formando um "pipe" de informações.

* **Exemplo Prático:** Uma requisição dá erro.  
  * O **log** diz que foi um erro ao inserir no banco.  
  * No mesmo instante, as **métricas** mostram que a CPU do banco estava em 100%.  
  * E o **tracing** mostra qual foi o comando de inserção exato que falhou.  
* **O Poder do Contexto:** Olhar para esses três dados em conjunto fornece o **contexto** completo. Um simples log isolado ou uma métrica de CPU alta podem não significar muito, mas quando conectados, eles revelam a causa raiz do problema. É essa informação integrada que permite tomar a melhor decisão.

## **Ferramentas populares** {#ferramentas-populares}

🗺️ **Introdução e Objetivo da Aula**

O professor explica que o objetivo desta aula é dar um "overview" sobre as principais ferramentas de observabilidade do mercado. A ideia não é aprofundar em nenhuma delas, mas sim que o aluno, ao ouvir esses nomes em uma conversa, saiba do que se trata e para que servem, permitindo que ele "sente à mesa e converse". Ele também dá dois disclaimers importantes: 1\) Nenhuma empresa o pagou, não é propaganda; 2\) A ordem da lista não significa ranking de popularidade ou qualidade.

🔍 **Elastic Stack**

* **Natureza:** É uma solução majoritariamente **open source**. Você pode instalá-la e usá-la sem pagar.  
* **Componentes:** O nome "Elastic Stack" vem do **Elasticsearch**, um banco de dados otimizado para busca. O **Kibana** é o dashboard que lê os dados do Elasticsearch para visualização. Para enviar dados da sua aplicação para a stack, existem componentes como **Beats** e **Flee**.  
* **Modelo de Negócio:** A empresa **Elastic** oferece plugins pagos para o Kibana.  
* **Desafio Operacional:** O professor alerta que gerenciar os servidores do Elastic Stack **não é algo fácil ou trivial**. Por isso, muitas pessoas optam por usar o serviço **Elastic Cloud**, onde a empresa gerencia a infraestrutura para você (na AWS, Azure ou Google) em troca de uma taxa.

☁️ **Ferramentas SaaS Populares (Datadog, New Relic, Splunk, Dynatrace)**

* **Datadog:** Descrita como uma ferramenta "fantástica" com muitos serviços que complementam os pilares da observabilidade.  
* **New Relic:** Uma ferramenta "extremamente tradicional" que soube se reinventar ao longo dos anos, conhecida por apresentar as informações de forma simples e customizável.  
* **Splunk:** Outra ferramenta "fantástica", muito utilizada principalmente para a gestão de **logs**.  
* **Dynatrace:** Também citada como uma ferramenta "muito boa" no mercado.  
* **Estratégia Híbrida:** O professor menciona que conhece empresas que misturam ferramentas por questões de custo. Por exemplo, usam o **Elastic** para logs (que são caros e volumosos) e o **Datadog** para tracing, mesmo que isso cause uma perda de contexto por não ter tudo integrado.

🌟 *Ferramentas Cloud Native / Open Source (com asterisco)*\*

O professor destaca um grupo de ferramentas que são Cloud Native e Open Source, muito populares em grandes empresas.

* **Prometheus:**  
    
  * **Foco:** **Métricas** (dados agregados, contadores, histogramas).  
  * **Armazenamento:** Usa um banco de dados do tipo **Time Series Database**.  
  * **Modelo de Coleta:** O modelo do Prometheus é **pull**. Ou seja, a cada X segundos, ele acessa um endpoint na sua aplicação para "puxar" as métricas, ao contrário de outras ferramentas que usam um agente para "empurrar" (`push`) os dados.  
  * **Exporters:** Para monitorar coisas que não expõem um endpoint naturalmente (como o SO ou um banco MySQL), usam-se **exporters**. O exporter é um plugin que lê os dados da fonte (ex: MySQL) e os expõe em um endpoint para o Prometheus poder coletá-los.  
  * **Alarmes Inteligentes:** Seu sistema de alarme consegue entender o contexto. Exemplo: se o sistema cai (alarme 1), ele não dispara um segundo alarme por "baixo número de visitas", pois entende que a causa é a queda do sistema.


* **Grafana:**  
    
  * **Função:** Ferramenta gratuita para criar **dashboards**, normalmente utilizada em conjunto com o Prometheus para visualizar as métricas.  
  * **Flexibilidade:** Também consegue se conectar a outras fontes de dados, como o Splunk.  
  * **Dashboards da Comunidade:** Uma grande vantagem é a existência de dashboards prontos criados pela comunidade. Você pode pegar um código de dashboard para Kubernetes, por exemplo, e importá-lo, customizando apenas o que for necessário.


* **Jaeger:**  
    
  * **Foco:** **Tracing**, especialmente **tracing distribuído** para acompanhar uma requisição através de múltiplos microsserviços.  
  * **Origem:** É um projeto open source da **CNCF (Cloud Native Computing Foundation)** e muito popular.


* **Zipkin:**  
    
  * **Foco:** Também focado em tracing, é considerado mais antigo e "tradicional" que o Jaeger.  
  * **Padrão de Tracing:** O professor destaca um ponto crucial: o formato de dados do Zipkin se tornou um padrão de mercado. Ele conta a **experiência pessoal** de ter uma aplicação que enviava dados para o Zipkin e, para uma palestra na Oracle, ele conseguiu enviar os mesmos dados para a nuvem da Oracle (OCI) apenas **trocando o endpoint**, pois a OCI aceitava o mesmo padrão.


* **Kiali:**  
    
  * **Foco:** Rastreabilidade e visualização da **comunicação entre sistemas**.  
  * **Origem:** Nasceu para ser o sistema de rastreabilidade do **Service Mesh Istio**, rodando em cima dele para mostrar como os serviços se comunicam através dos proxies.  
  * **Evolução:** Hoje, o Kiali também é compatível com outros service meshes, como OpenShift, Linkerd e Consul.

## **OpenTelemetry** {#opentelemetry}

🌟 **OpenTelemetry (OTel): O Futuro da Observabilidade**

O professor apresenta o **OpenTelemetry** como um projeto "muito promissor" e, na sua opinião, o "futuro da observabilidade".

* **Origem:** É um projeto sério, mantido pela **CNCF (Cloud Native Computing Foundation)**, que nasceu da junção de dois projetos anteriores: **OpenTracing** (padrão para rastreamento) e **OpenCensus**.  
* **Objetivo Principal:** A ideia é criar um padrão unificado (especificações e protocolos) para telemetria. Quando todos os vendors (ferramentas de observabilidade) e aplicações seguem a mesma especificação, fica muito mais fácil padronizar e, crucialmente, trocar de um provedor para outro.

🛠️ **Componentes do Ecossistema OpenTelemetry**

* **Especificações e Protocolos:** Define como os dados de telemetria devem ser gerados e transmitidos.  
* **SDKs (Software Development Kits):** Kits de desenvolvimento prontos para diversas linguagens (Go, Java, Python, etc.) para que os desenvolvedores não precisem implementar a especificação do zero. Basta importar a biblioteca e usar.  
* **Instrumentação Automática:** O professor explica o conceito de **instrumentação**. Em vez de customizar o código da aplicação, ferramentas e SDKs do OTel podem gerar dados de telemetria de forma automática. Exemplo: passar um parâmetro na inicialização de uma aplicação Java para que a instrumentação do OTel "escute" a aplicação em tempo de execução e colete os dados.

🔄 **O Fluxo de Dados com OpenTelemetry e o Coletor**

O professor explica como os dados fluem da aplicação para o backend (a ferramenta de observabilidade como Datadog, New Relic, etc.), destacando o papel do **coletor**.

1. **Aplicação com SDK:** A aplicação usa o SDK do OTel para gerar os dados de telemetria.  
2. **O Coletor (Agente/Sidecar):** Em vez de enviar os dados direto para o backend, a aplicação os envia para um **coletor**.  
   * **Padrão Sidecar:** O professor faz uma conexão importante, apontando que o coletor, quando rodando no mesmo host que a aplicação, está implementando o padrão **Sidecar**.  
   * **Função do Coletor:** Ele não apenas recebe os dados, mas também pode **tratar e transformar** essas informações antes de enviá-las.  
   * **Coletor como Serviço:** Além do coletor-agente (sidecar), pode existir um segundo coletor rodando como um serviço centralizado (em outro pod, por exemplo), que recebe dados de múltiplos agentes.

✅ **As Grandes Vantagens de Usar o Padrão OTel**

* **Independência de Vendor (Vendor Lock-in):** Esta é a maior vantagem. Como os backends implementam a especificação OTel, você pode mudar de provedor (ex: do Elastic Stack para o AWS CloudWatch) **sem alterar o código da sua aplicação**. Basta mudar a configuração do endpoint no coletor. Isso dá um poder muito grande aos desenvolvedores.  
* **Roteamento Flexível:** O coletor pode enviar diferentes tipos de dados para diferentes backends simultaneamente. Exemplo: enviar métricas e tracing para o Backend 1 (Elastic) e apenas métricas para o Backend 2 (Datadog), tudo a partir de uma única fonte de dados da aplicação.  
* **Desacoplamento:** A aplicação não precisa fazer chamadas síncronas para múltiplos backends; ela se comunica apenas com o coletor, que gerencia o envio dos dados.

⚠️ **Status de Implementação dos SDKs**

O professor dá uma dica importante: o desenvolvimento do OpenTelemetry está em andamento. O status de implementação dos SDKs (para tracing, métricas e logs) varia por linguagem. Algumas linguagens já têm suporte estável para tracing e métricas, enquanto logs podem estar em alfa ou ainda não implementados. Ele recomenda sempre consultar o site oficial (**opentelemetry.io**) para verificar o status de cada linguagem antes de usar.