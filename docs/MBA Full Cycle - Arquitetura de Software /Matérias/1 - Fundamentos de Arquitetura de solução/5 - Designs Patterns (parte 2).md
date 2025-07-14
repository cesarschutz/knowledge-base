# 🔁 Designs Patterns (parte 2)

## **Configuration** {#configuration}

⚙️ **O Problema: Mudar Configurações em Produção**

O professor introduz o problema que o pattern resolve: como alterar configurações de uma aplicação em execução (ex: uma senha de banco de dados, uma chave de API) sem precisar refazer o deploy ou reiniciar todo o sistema?

* **A Abordagem Comum (e Falha):** A prática comum é armazenar essas credenciais em arquivos `.env` ou como variáveis de ambiente. Quando uma delas muda, a solução típica é alterar o valor e **reiniciar ("rebootar") a aplicação inteira**.  
* **A Consequência:** Essa abordagem causa downtime (a aplicação fica fora do ar durante o reinício) ou gasta um tempo desnecessário com um novo deploy para uma simples mudança de configuração.

🔧 **O Pattern Configuration: Atualização em Tempo de Execução**

Este pattern oferece uma solução para atualizar as configurações sem interrupção.

* **Como Funciona:** A aplicação expõe um endpoint específico (ex: `/configuration`). Quando um serviço externo envia uma requisição para este endpoint com as novas configurações, a aplicação é preparada para recebê-las.  
* **O "Pulo do Gato":** Ao receber a requisição, a aplicação **recarrega ou "dá um boot" somente nas configurações**, substituindo as antigas pelas novas em tempo real. O restante da aplicação continua rodando normalmente, sem precisar de um reinício completo.

🔄 **Flexibilidade e Vantagens**

* **Independente de Protocolo:** O professor destaca que o gatilho para a atualização não precisa ser uma requisição HTTP. Pode ser, por exemplo, uma **mensagem consumida de uma fila**. Toda vez que uma nova mensagem de configuração chega na fila, a aplicação a consome e recarrega suas variáveis.  
* **Conclusão do Professor:** A ideia é considerada "genial" porque elimina o tempo gasto com deploys desnecessários e, mais importante, evita o downtime da aplicação, permitindo que o sistema se reajuste dinamicamente.

## **Secret Management** {#secret-management}

🔑 **O Problema: Credenciais Expostas e Não Rotacionadas**

O professor inicia descrevendo problemas de segurança muito comuns nas empresas:

* **Senhas "voando":** Desenvolvedores pedindo senhas de banco de dados e APIs em chats como Slack.  
* **Falta de Rotação:** Senhas (inclusive de root) que não são alteradas por anos porque o processo de rotação é trabalhoso e gera desconforto.  
* **Acesso Indevido:** Desenvolvedores tendo acesso claro e transparente a credenciais sensíveis do ambiente de produção.

🛡️ **A Solução: Secret Management**

O pattern *Secret Management* resolve esses problemas através de sistemas ou serviços dedicados. O objetivo é:

* Evitar que credenciais fiquem expostas.  
* Automatizar o processo de rotação de senhas.  
* Dificultar o acesso direto de desenvolvedores a dados sensíveis.

🛠️ **Ferramentas e Serviços**

O professor cita exemplos de soluções para implementar o *Secret Management*:

* **HashiCorp Vault:** Uma solução onde você guarda todas as credenciais, e sua aplicação as acessa para aplicar no sistema quando necessário.  
* **AWS Secrets Manager (e equivalentes no GCP, Azure):** Um serviço gerenciado (*as a service*) que não só armazena os segredos de forma criptografada, mas também **automatiza a rotação de senhas** em serviços compatíveis (ex: um banco de dados da AWS).

❓ **Como a Aplicação Acessa a Senha?**

O professor explica que o acesso é simples. Usando um SDK (como o da AWS), a aplicação faz uma chamada com uma chave (ex: `get secret`) e recebe a senha.

🤔 **O Desenvolvedor Ainda Tem Acesso? A Separação de Ambientes**

Ele antecipa a dúvida: "Se a aplicação pode pegar a senha, o desenvolvedor também pode?". A resposta está na **separação de ambientes**:

* No ambiente de **desenvolvimento/staging**, o desenvolvedor tem acesso, mas são credenciais de teste.  
* No ambiente de **produção**, o software roda em um ambiente isolado. O desenvolvedor **não deve ter acesso** para logar na máquina ou dar um `console.log` para "printar" a credencial.  
* **Conclusão:** Se um desenvolvedor consegue fazer isso em produção, significa que a empresa tem uma **falha de procedimento**. É melhor ter um sistema de gerenciamento de segredos (mesmo que o dev tenha acesso) do que não ter nada e deixar as senhas fixas e expostas.

💡 **Conclusão: Uma Boa Prática Essencial**

Adotar um sistema de *Secret Management* é uma "super boa prática". Ele utiliza mecanismos de criptografia, ajuda a evitar muitas situações de risco e melhora drasticamente a segurança da aplicação.

## **Circuit breaker** {#circuit-breaker}

⚡ **O Que é um Circuit Breaker? A Analogia do Disjuntor**

O professor começa explicando o conceito usando uma analogia do dia a dia: o **disjuntor** elétrico de uma casa. Quando há uma sobrecarga de energia, o disjuntor "cai" (desarma) para interromper a corrente e evitar que os eletrodomésticos sejam danificados ("fritados"). O Circuit Breaker no mundo da tecnologia funciona exatamente da mesma forma, mas para proteger sistemas.

🐌 **O Problema: Um Serviço Lento é Pior que um Serviço Fora do Ar**

O pattern resolve um problema crítico em arquiteturas de microsserviços: o **efeito dominó** ou **cascata** causado por um serviço lento.

* **Cenário de Falha:** O Microsserviço 1 faz várias requisições ao Microsserviço 2, que começa a ficar lento e a demorar para responder. Consequentemente, o Microsserviço 1 também fica lento, aguardando as respostas. Isso se espalha por todo o ecossistema.  
* **A Pior Situação:** O professor enfatiza que **um microsserviço lento é pior do que um microsserviço fora do ar**.  
  * **Fora do Ar:** A requisição falha imediatamente (`connection refused`, erro 500), e o serviço chamador pode acionar seu plano de contingência e "seguir com a vida".  
  * **Lento:** A requisição fica "pendurada", aguardando uma resposta que não chega. Isso consome recursos do serviço chamador e o torna lento também, até que o serviço de destino finalmente saia do ar.

⚙️ **Como o Circuit Breaker Resolve o Problema**

Quando o Circuit Breaker detecta que o Microsserviço 2 está lento ou falhando, ele atua como o disjuntor: **"quebra" o canal de comunicação**. O resultado é que qualquer nova tentativa de chamada do Microsserviço 1 para o 2 receberá uma falha imediata, como se o serviço estivesse fora do ar, protegendo o Microsserviço 1 de ficar lento.

🚦 **Os Três Estados do Circuito**

O Circuit Breaker opera em três estados:

1. **Fechado (Closed):** O estado normal. A comunicação entre os serviços flui livremente.  
2. **Aberto (Open):** O estado de "falha". O circuito "caiu" e as requisições do Microsserviço 1 para o 2 são bloqueadas imediatamente, sem nem tentar a comunicação.  
3. **Meio-Aberto (Half-Open):** O estado de "teste". Após o circuito abrir, ele precisa saber quando o Microsserviço 2 se recuperou. Nesse estado, ele permite que uma requisição de teste passe. Se ela for bem-sucedida, ele envia mais algumas para confirmar a estabilidade. Se tudo estiver OK, o circuito volta para o estado **Fechado**. Se falhar, ele permanece **Aberto**. Este processo permite a **auto cura (*self-healing*)** do serviço problemático, pois dá a ele um tempo para processar suas tarefas pendentes sem receber uma nova enxurrada de requisições.

💡 **Implementação e Recomendações**

O professor menciona que existem duas formas de implementar o pattern:

1. No **serviço que recebe** a requisição (Microsserviço 2), que pode parar de aceitar conexões.  
2. No **serviço que chama** (Microsserviço 1), que para de enviar requisições ao detectar falhas.  
* **Recomendação Final:** A forma mais comum é o desenvolvedor implementar a lógica do Circuit Breaker diretamente, mas o professor **não recomenda** essa abordagem. A melhor prática é usar um **proxy** que gerencie isso automaticamente. Ele antecipa que este tópico será aprofundado mais para a frente, ao falar sobre **Service Mesh**.

## **Sequencing** {#sequencing}

🆔 **O Problema: Geração de IDs em Grande Escala**

O professor introduz um problema que parece bobo, mas não é: a **geração de IDs** em um ecossistema extremamente grande e distribuído.

* **Exemplo Prático:** Ele cita o Mercado Livre com seus 26.000 microsserviços, todos gerando IDs para transações o tempo todo, muitas vezes no mesmo segundo.  
* **O Risco:** O principal risco é a **colisão de IDs** (ter um ID repetido), o que seria "muito bizarro" e um "problema muito grave".  
* **Contexto:** Embora hoje exista o UUID (que, segundo o professor, ainda tem uma chance matemática de colidir), muitas empresas vêm de um legado onde os IDs eram sequenciais, tornando o problema ainda mais crítico.

⚙️ **A Solução: O Serviço de Sequencing**

O pattern *Sequencing* resolve este problema com uma abordagem centralizada. Em vez de cada microsserviço gerar seu próprio ID, ele chama um **serviço dedicado** que tem a única responsabilidade de gerar IDs únicos.

* **Como Funciona:** O Microsserviço 1 pede um ID e recebe "1". O Microsserviço 2 pede e recebe "2", e assim por diante.  
* **Características do Serviço:** Este serviço centralizador deve ter características específicas para funcionar corretamente:  
  1. **Atômico:** Precisa operar de forma atômica para evitar qualquer tipo de concorrência que possa gerar IDs repetidos.  
  2. **Extremamente Performático:** Como todos os serviços batem nele, ele precisa ser muito rápido.  
  3. **Logging:** Ele guarda o registro de qual microsserviço pediu qual ID e quando.

💡 **Conclusão: Uma Ideia Simples para um Problema Complexo**

O professor conclui que, embora a ideia possa parecer "loucura" ou um "exagero", ela é essencial em ambientes massivamente distribuídos e com alto volume de transações.

* **Simples, mas Eficaz:** A ideia do pattern é "extremamente simples", mas resolve um problema muito complexo que poderia dar uma "super bucha" (um grande problema).  
* **Não é Exagero:** Em um mundo com tantos serviços e transações por segundo, ter um serviço dedicado para gerar IDs é uma solução prática para evitar problemas catastróficos.

## **API Gateway** {#api-gateway}

🚪 **O Problema: Acessando um Mundo Distribuído**

O professor explica que, em um mundo com muitos microsserviços, cada um cumpre um papel e, muitas vezes, precisa ser acessado externamente pelo cliente.

* **A Dificuldade:** Gerenciar o acesso a múltiplos serviços (carrinho, checkout, catálogo), cada um com seu próprio IP ou rota, é complicado. Além disso, essa abordagem expõe a estrutura interna dos seus serviços para o usuário.

🎯 **A Solução: API Gateway como Ponto Central de Entrada**

O *API Gateway* atua como um ponto único de entrada para todas as requisições externas. Ele centraliza e gerencia o acesso à sua "malha de serviços".

* **Função Principal (Roteamento):** Sua função mais básica é o **roteamento**. Você configura regras como: "quando a requisição chegar em `/cart`, envie para o serviço de carrinho; quando chegar em `/checkout`, envie para o serviço de checkout".

✅ **Principais Funcionalidades e Vantagens**

O API Gateway vai muito além do simples roteamento, oferecendo uma gama de funcionalidades críticas:

* **Autenticação Centralizada:**  
    
  * Em vez de cada microsserviço ter que implementar sua própria lógica de autenticação, o API Gateway assume essa responsabilidade. Uma vez que a requisição passa pelo Gateway, os serviços internos podem partir do princípio de que ela é segura e já foi autenticada, simplificando o desenvolvimento.


* **Conversão de Dados e Protocolos:**  
    
  * O Gateway pode atuar como um tradutor. O professor exemplifica: um cliente envia um JSON para o Gateway, que o converte para XML antes de encaminhá-lo para um microsserviço legado que só entende XML.


* **Manipulação de Cabeçalhos (Headers):**  
    
  * É muito comum o Gateway modificar os cabeçalhos HTTP. Ele pode adicionar, remover ou alterar informações. Um caso de uso importante é adicionar um **`Correlation ID`** para rastrear uma única requisição através de múltiplos microsserviços, facilitando a observabilidade.


* **Throttling e Rate Limiting:**  
    
  * **Throttling:** O Gateway pode "segurar" o excesso de requisições para não sobrecarregar os serviços internos.  
  * **Rate Limiting:** Permite definir limites de requisições (ex: 100 requisições/segundo). Esses limites podem ser gerais (por IP) ou específicos para diferentes grupos de clientes, dando mais prioridade a alguns do que a outros.


* **Extensibilidade com Plugins:**  
    
  * API Gateways modernos são extensíveis. O professor cita como exemplo a capacidade de chamar uma função Lambda da AWS diretamente a partir do Gateway.

🛠️ **Soluções de API Gateway no Mercado**

O professor lista algumas das soluções disponíveis:

* **Provedores de Nuvem:** A própria AWS (e outros provedores) tem seu serviço de API Gateway.  
* **Soluções Proprietárias:** Empresas como Mulesoft oferecem soluções pagas.  
* **Open Source:** O **Kong** é citado como uma API Gateway open source muito famosa e funcional.

## **Arquitetura baseada em eventos** {#arquitetura-baseada-em-eventos}

🎯 **O Que é Event-Driven Architecture (EDA)?**

É uma arquitetura que trabalha de forma **assíncrona**, guiada por eventos. Em vez de um serviço chamar o outro diretamente (síncrono), um evento é publicado e outros sistemas reagem a ele. O professor destaca que essa abordagem é crucial para escalar a capacidade de processamento em sistemas distribuídos, como microsserviços. A regra fundamental é que eventos **sempre acontecem no passado** (ex: "usuário foi criado", "compra foi realizada").

📋 **Os Tipos de Eventos**

O professor explica que existem diferentes tipos de eventos, e entender essa diferença é crucial.

1. **Event Notification (Notificação de Evento):**  
     
   * **O que é:** É apenas uma **notificação** de que algo aconteceu. O evento é pequeno e contém informações mínimas (ex: `id=1, status=aprovado`).  
   * **Finalidade:** Serve apenas para notificar. Após o consumo, o evento é "jogado fora", pois não precisa ser armazenado.  
   * **Analogia do Professor:** Ele compara a um post-it que sua esposa joga na mesa com um recado ("jantar no japonês às 18h"). Ele lê a informação, entende a mensagem e joga o post-it no lixo, pois não precisa guardar aquele dado.

   

2. **Event-Carried State Transfer (Transferência de Estado via Evento):**  
     
   * **O que é:** Este evento carrega os **dados completos** da transação, não apenas uma notificação.  
   * **Finalidade:** Os dados completos são importantes para processamentos futuros ou armazenamento.  
   * **Analogia do Professor:** A diferença entre receber um post-it "casa comprada" e receber a **escritura da casa**. A escritura é um documento completo com todos os dados, que precisa ser guardado.

   

3. **Event Sourcing:**  
     
   * **O que é (a grosso modo):** É a prática de gravar **todas as mudanças de estado** (eventos) que acontecem no sistema em um banco de dados, desde o início.  
   * **Poder Principal:** Como você tem todo o histórico de alterações, você pode **reprocessar todos os eventos** desde o "dia 1" para chegar ao estado atual de qualquer entidade.  
   * **Exemplo do Banco:** Se o banco perder o seu saldo atual, ele pode recalculá-lo pegando todos os seus créditos e débitos desde a abertura da conta.  
   * **Exemplo da Plataforma:** Se a modelagem de dados de um sistema de alunos ficou ruim, pode-se criar um novo sistema, pegar todos os eventos do passado e reprocessá-los para chegar ao estado atual com a modelagem correta. O professor também menciona que se grava apenas o "delta" (a alteração de um estado para o outro).

🌐 **Orquestração vs. Coreografia**

O professor introduz duas formas de organizar o fluxo de eventos.

* **Coreografia:** É o fluxo "natural" e descentralizado. Um sistema gera um evento, outro reage e gera um segundo evento, um terceiro reage a esse, e assim por diante. Os sistemas se organizam entre si, sem um controlador central.  
    
* **Orquestração:** Existe um sistema **orquestrador central** que gerencia o fluxo.  
    
  * **Quando usar:** É necessário quando operações precisam acontecer em uma **ordem específica** e, crucialmente, quando é preciso **desfazer alterações** (compensação) caso algo dê errado no meio do processo.  
  * **Exemplo:** Se a emissão da nota fiscal falha no meio de uma compra, o orquestrador precisa coordenar as ações para "desfazer" os passos anteriores (estornar pagamento, devolver ao estoque, etc.), gerando eventos de compensação. O professor ressalta que isso é complexo, mas muito comum.

💡 **Conclusão: Eventos e Efeitos Colaterais**

Um evento emitido por um sistema pode ser o gatilho para outro. É importante entender que esses eventos geram **efeitos colaterais**, e muitas vezes esses efeitos precisam ser orquestrados para lidar com falhas e compensações.

## **Pub Sub** {#pub-sub}

📢 **O Que é Pub/Sub (Publish/Subscribe)?**

É um padrão de mensageria que serve como uma das formas de implementar uma arquitetura orientada a eventos (EDA). A ideia central é ter um **tópico** (ou canal), que funciona como um local central onde informações são publicadas e consumidas.

🔄 **Como Funciona o Fluxo**

O professor explica o fluxo de forma clara:

1. Um sistema (o **Publisher** ou **Producer**) envia uma mensagem para um tópico. Exemplo: O Sistema A publica a mensagem "Compra Aprovada".  
2. Múltiplos outros sistemas (os **Subscribers** ou **Consumers**) "escutam" esse tópico.  
3. Quando a mensagem chega no tópico, todos os sistemas que estão inscritos nele recebem uma cópia da mensagem para processá-la. Exemplo: O Sistema B pega a mensagem para gerar a nota fiscal, o Sistema C para dar baixa no estoque e o Sistema D para enviar um e-mail de confirmação.

✅ **A Principal Vantagem: Desacoplamento**

O grande benefício do Pub/Sub é o **desacoplamento** entre quem produz a informação e quem a consome.

* **Sem Pub/Sub (Insano):** O Sistema A teria que conhecer e enviar a mesma mensagem diretamente para os Sistemas B, C e D, o que seria "insano" e criaria uma forte dependência.  
* **Com Pub/Sub:** O Sistema A não precisa saber quem depende dele. Ele apenas publica a mensagem no tópico. A responsabilidade de se inscrever no tópico e consumir a mensagem é dos interessados (B, C e D). Isso "inverte a dependência".

🛠️ **Tecnologias e Terminologia**

* **Implementação:** O professor cita o **Apache Kafka** como um exemplo de sistema de streaming de dados extremamente poderoso que implementa este padrão.  
* **Terminologia:**  
  * **Publisher/Producer (Produtor):** O sistema que envia/publica a mensagem (Sistema A).  
  * **Subscriber/Consumer (Consumidor):** Os sistemas que se inscrevem e recebem/consomem a mensagem (Sistemas B, C e D).

## **Backend for frontend** {#backend-for-frontend}

🎯 **O Que é BFF (Backend for Frontend)?**

Não significa "Best Friend Forever", mas sim **Backend for Frontend**. A ideia principal é criar um backend específico para servir um frontend específico, trazendo **somente as informações que aquele frontend vai precisar e utilizar**. Nem mais, nem menos.

📱 **O Problema que Ele Resolve: Diferentes Clientes, Diferentes Necessidades**

O professor ilustra o problema usando o exemplo do YouTube:

* **Acesso via Desktop:** A interface mostra muitas informações: recomendações, playlists, vídeos de canais inscritos, etc.  
* **Acesso via Celular:** A tela é menor e o usuário não precisa de todas essas informações de uma vez. Além disso, a conexão pode ser lenta (3G/4G), e trafegar dados desnecessários seria ineficiente.

⚙️ **Como o BFF Funciona**

Em vez de um único backend genérico, cria-se um backend para cada tipo de cliente (ou "device"):

* Um BFF para o **Desktop** que retorna o conjunto completo de dados.  
* Um BFF para o **Celular** que retorna um conjunto de dados otimizado e menor, apenas com o essencial para aquela experiência.

O BFF atua como um intermediário: ele faz consultas internas aos microsserviços principais (que podem até retornar dados em excesso), mas ele **filtra e retorna somente as informações necessárias** para o tipo de frontend que ele atende.

💡 **Adendos e Abordagens Relacionadas**

O professor faz um adendo sobre duas tecnologias que podem ser usadas com uma ideia similar à do BFF:

1. **GraphQL:**  
     
   * O professor deixa claro: **"GraphQL não é BFF"**.  
   * No entanto, o conceito é parecido, pois com GraphQL o frontend pode especificar na requisição exatamente quais dados ele precisa, evitando que o backend retorne informações desnecessárias. O frontend "escolhe" o que vem.

   

2. **Next.js:**  
     
   * Em frameworks como o Next.js, há um servidor Node.js rodando "por baixo dos panos". Esse servidor pode atuar como um BFF, recebendo informações e retornando apenas o que faz sentido para o frontend que está sendo gerado estaticamente ou renderizado no servidor.

A conclusão é que a ideia do BFF é flexível e pode ser implementada de várias formas, mas o conceito central permanece: **um backend feito especificamente para retornar dados para um tipo de frontend em específico.**

## **Sidecars** {#sidecars}

🚗 **O Que é o Pattern Sidecar?**

O professor explica o conceito de *Sidecar* (literalmente, o "carro lateral" de uma motocicleta) como uma **aplicação auxiliar que fica "colada" junto à sua aplicação principal**, ajudando-a em tarefas específicas.

⚙️ **Como Funciona e Exemplos Práticos**

A ideia é desacoplar responsabilidades da aplicação principal, delegando-as para o Sidecar. O professor cita três exemplos claros de uso:

1. **Coleta de Logs:**  
     
   * **Cenário:** A aplicação principal gera logs para a saída padrão (`stdout`). Esses logs precisam ser enviados para um sistema centralizado, como o Elasticsearch.  
   * **Solução com Sidecar:** Em vez de a aplicação principal ter a lógica para se conectar e enviar os logs, um Sidecar fica monitorando o `stdout`. Toda vez que um log é escrito, o Sidecar o captura e o envia para o Elasticsearch. A aplicação principal só se preocupa em gerar o log.

   

2. **Autenticação mTLS (Mutual TLS):**  
     
   * **Cenário:** O Serviço A precisa se comunicar de forma segura com o Serviço B.  
   * **Solução com Sidecar:** Em vez de cada serviço gerenciar seus próprios certificados TLS, a comunicação é interceptada pelos seus respectivos Sidecars. O **Sidecar do Serviço A chama o Sidecar do Serviço B**, e eles negociam a autenticação mTLS, garantindo que os dados trafeguem criptografados. A aplicação principal não precisa se preocupar com a complexidade dos certificados.

   

3. **Controle de Tráfego:**  
     
   * **Cenário:** O Serviço A tenta acessar o Serviço B, mas não tem permissão.  
   * **Solução com Sidecar:** O Sidecar atua como um gatekeeper, bloqueando a tentativa de comunicação antes que ela chegue ao serviço de destino, aplicando as políticas de permissão.

💡 **Conclusão: A Função do Sidecar**

Em resumo, o Sidecar é uma aplicação que fica ao lado da aplicação principal para realizar tarefas auxiliares, como:

* Acessar serviços remotos.  
* Coletar logs.  
* Obter dados de configuração.  
* E qualquer outra funcionalidade que possa ser desacoplada da lógica de negócio principal.

A mensagem final é que, ao ouvir a expressão "botar um Sidecar", deve-se entender que uma aplicação auxiliar será instalada ao lado da aplicação principal para se comunicar com ela por algum objetivo específico.

## **Service Mesh** {#service-mesh}

🌐 **O Que é uma Service Mesh?**

O professor começa com a definição do site do Istio, uma popular ferramenta de Service Mesh: "Uma malha de serviço é uma camada de infraestrutura dedicada que você pode adicionar às suas aplicações". O ponto crucial dessa definição é que ela permite adicionar recursos de forma **transparente**, sem precisar alterar o código da sua aplicação.

💡 **A Conexão com Sidecars**

A "mágica" por trás da Service Mesh é o uso do pattern **Sidecar**. A Mesh utiliza esses "carros laterais" para interceptar a comunicação e injetar funcionalidades na camada de rede, em vez de na aplicação.

✅ **Funcionalidades Oferecidas pela Service Mesh**

A Service Mesh oferece uma gama de recursos que antes precisariam ser implementados no código da aplicação:

* **Gerenciamento de Tráfego:**  
  * **Controle de Acesso:** Bloquear a comunicação entre serviços (ex: A não pode acessar B) ou para a internet (políticas de egresso).  
  * **Retentativas (*Retries*):** Configurar automaticamente retentativas quando um serviço falha em responder.  
  * **Load Balancing Customizado:** Ir além do *round-robin* padrão e definir regras de balanceamento de carga (ex: 60% do tráfego para a máquina A, 40% para a B).  
* **Segurança:**  
  * **Autenticação mTLS:** Implementa comunicação criptografada entre serviços de forma transparente.  
  * **Políticas de Acesso (*Policy Enforcement*):** Define regras granulares sobre quem pode acessar o quê.  
* **Observabilidade:**  
  * Permite "observar" toda a comunicação entre os microsserviços (A chamando B, que chama C...), identificar gargalos, serviços degradados e entender o fluxo das requisições.  
* **Extensibilidade (ex: Circuit Breaker):**  
  * Permite adicionar funcionalidades como o *Circuit Breaker* na camada de rede, sem que o desenvolvedor precise implementá-lo.

🔧 **Como o Istio Funciona na Prática**

O professor usa o **Istio** como exemplo para explicar a arquitetura:

1. **O Proxy Envoy:** Em vez de instalar múltiplos Sidecars, o Istio instala apenas um proxy poderoso chamado **Envoy** ao lado de cada aplicação.  
2. **Comunicação Interceptada:** Toda a comunicação entre os serviços é interceptada pelos proxies. O Serviço A não fala diretamente com o Serviço B; ele fala com seu próprio Envoy, que então se comunica com o Envoy do Serviço B, que por sua vez entrega a requisição ao Serviço B.  
3. **O Control Plane:** O "cérebro" da Mesh é o **Control Plane**.  
   * **Coleta de Métricas:** Ele recebe dos proxies todos os dados de tráfego da rede, permitindo a observabilidade.  
   * **Distribuição de Configurações:** Quando uma nova configuração é feita (ex: uma nova regra de tráfego), o Control Plane a "publica" para todos os proxies Envoy, que a aplicam em tempo real.

Em resumo, a Service Mesh usa proxies Sidecar (como o Envoy) para criar uma camada de rede inteligente, gerenciada por um Control Plane, que injeta funcionalidades de forma transparente nas aplicações.

## **Questionário** {#questionário-1}

**Pergunta:** Qual a principal intenção ao implementar o padrão CQRS?  
**Resposta:** Separar a leitura e a gravação de dados em áreas distintas em uma aplicação

**Pergunta:** O que significa CQRS?  
**Resposta:** Command Query Responsibility Segregation

**Pergunta:** Qual é a principal diferença entre Event Notification e Event Carried State Transfer?  
**Resposta:** O Event Notification possui apenas as informações necessárias mudando o estado de um sistema, já o ECST possui todos os dados do evento ocorrido

**Pergunta:** Qual é o objetivo do Distributed Locking?  
**Resposta:** Garantir a consistência dos dados em um ambiente distribuído

**Pergunta:** Qual é o principal goal do padrão Circuit Breaker?  
**Resposta:** Evitar a falha geral do sistema em caso de erros recorrentes

**Pergunta:** No caso de um Cache usando LRU: Quais dados devem ser mantidos?  
**Resposta:** Os dados que tiveram acesso mais recentemente

**Pergunta:** Qual o objetivo de um Sidecar?  
**Resposta:** Um componente independente que roda em conjunto com a aplicação principal

**Pergunta:** Qual a diferença do Istio para o Envoy?  
**Resposta:** O Istio é um sistema de Service Mesh, já o Envoy um Proxy