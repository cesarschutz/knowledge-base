# 🔄 On-premise vs Cloud

## **Contexto** {#contexto}

🎯 **Introdução aos Modelos de Infraestrutura**

O professor inicia um novo capítulo para discutir três modelos fundamentais de infraestrutura: **On-Premise**, **Cloud** e **Híbrido**. Ele destaca que, ao contrário do que muitos pensam, muitas empresas ainda mantêm suas infraestruturas on-premise.

📋 **Definição dos Três Modelos**

* **On-Premise:**  
    
  * **Pronúncia:** O professor corrige a pronúncia comum, explicando que o correto é "on-premise" e não "on-prime-se".  
  * **Significado:** Significa "dentro de casa". A aplicação roda na infraestrutura da própria empresa, seja em um data center próprio ou em um data center que a empresa gerencia.


* **Cloud (Nuvem):**  
    
  * **Definição:** Soluções que rodam em ambientes de nuvem.  
  * **Tipos de Nuvem:**  
    * **Públicas:** Como Amazon (AWS), Azure, etc.  
    * **Privadas:** Empresas que criam e gerenciam sua própria infraestrutura de nuvem.


* **Modelo Híbrido:**  
    
  * **Definição:** Empresas que operam com uma parte da sua infraestrutura rodando on-premise e outra parte rodando na nuvem.

💡 **O Objetivo da Discussão: Quebrar o Viés da Nuvem**

O professor deixa claro que o objetivo não é demonizar o on-premise. Ele afirma que, infelizmente, muita gente pensa que rodar on-premise é uma "baita desvantagem". A intenção é entender os **contextos**, as vantagens e desvantagens de cada modelo, para que o aluno não seja "aquela pessoa que só pensa na nuvem", pois "as coisas não funcionam somente dessa forma".

## **On-premise** {#on-premise}

🏢 **O Que é o Modelo On-Premise?**

O professor define o modelo *on-premise* como aquele em que os softwares são instalados localmente na empresa ou em um data center que a empresa **gerencia e tem acesso físico**. A diferença crucial para a nuvem é que, no on-premise, você pode, por exemplo, ir fisicamente até o data center para trocar um HD, algo impossível no modelo da AWS.

💰 **Custos e Desafios do On-Premise**

* **Alto Custo Inicial (*Upfront*):** Antes mesmo de rodar qualquer software, a empresa precisa fazer um grande investimento inicial em máquinas, links de internet, aluguel de espaço em data center, etc. Por isso, este modelo raramente funciona para startups, que não têm essa "bala na agulha".  
    
* **Depreciação e Manutenção do Hardware:** O hardware possui **depreciação** e **exige manutenção**. É preciso calcular a depreciação no modelo de negócio e ter um plano para quando um componente físico (como um HD) queimar e precisar ser trocado.  
    
* **Necessidade de Profissionais Qualificados:** É preciso contratar pessoas com conhecimento específico em hardware, rede e software de virtualização. Muitas vezes, são profissionais diferentes para cada área, tornando o processo mais "artesanal".  
    
* **Escalabilidade Complexa:** Escalar é muito mais difícil do que na nuvem. Se um servidor começa a ficar sobrecarregado, é preciso comprar outro, pagando o custo *upfront*. O processo não é ágil como escalar de uma para mil instâncias em minutos.  
    
* **Alta Disponibilidade Complexa (Redundância Física):** Garantir alta disponibilidade real, com data centers fisicamente distantes, é um grande desafio. O professor cita dois exemplos:  
    
  1. **A História do Banco:** Um ex-chefe, VP de um banco, mostrou seu data center e revelou que toda aquela infraestrutura estava replicada em outro bairro de São Paulo para garantir a redundância.  
  2. **A Inundação em Porto Alegre:** Há cerca de 10 anos, uma inundação em Porto Alegre atingiu o data center de uma famosa empresa de hospedagem, tirando muitos clientes do ar. Isso ilustra o risco de desastres naturais. Em contraste, a AWS mantém suas zonas de disponibilidade a pelo menos 100km de distância umas das outras para mitigar esse risco.

👨‍🔧 **A Experiência Pessoal do Professor**

Para ilustrar a dificuldade, o professor compartilha sua experiência pessoal dos anos 2000 com sua própria empresa de hospedagem. Quando um servidor físico caía, era preciso ligar para o data center, esperar alguém ir trocar a peça, depois reinstalar o sistema operacional e lidar com compatibilidades. Era um processo "muito difícil" e caro.

## **On-premise Pt2** {#on-premise-pt2}

⚖️ **Uma Questão de Escolha, não de Vantagem**

O professor inicia enfatizando que os pontos a serem discutidos não são necessariamente "vantagens" ou "desvantagens", mas sim **escolhas**. O importante é que a empresa esteja ciente da escolha que está fazendo.

✅ **Flexibilidade e Controle do On-Premise**

* **Alto Controle:** A empresa tem controle total sobre o software, o hardware e os protocolos de segurança que deseja implementar.  
* **Alto Nível de Customização:** É possível customizar tudo, incluindo pedaços específicos do hardware da máquina.  
* **Acesso Físico:** Profissionais da empresa podem ter acesso físico às máquinas, o que é crucial para algumas empresas com dados sensíveis ou regulações específicas que exigem isso.  
* **Hardware Mais Barato e Poderoso:** Geralmente, o hardware que se pode adquirir para um ambiente on-premise é mais barato e poderoso do que as máquinas padrão que se contratam na nuvem.

🔗 **Integração e Performance**

* **Integração com Sistemas Legados:** É mais fácil integrar com sistemas legados, como os mainframes de bancos que rodam fisicamente no mesmo local há décadas.  
* **Menos Problemas de Latência:** A proximidade física dos componentes resulta em menor latência na comunicação.

📜 **Compliance e Regulações**

O modelo on-premise oferece mais flexibilidade para atender a regulamentações complexas. O professor cita exemplos:

* **Soberania de Dados:** Manter dados de cidadãos europeus em um local específico para cumprir a GDPR.  
* **PCI (Pagamentos):** Necessidade de ter hardware físico específico para criptografia em transações eletrônicas.  
* **HIPAA (Saúde nos EUA):** Softwares de saúde precisam seguir regulamentações estritas de privacidade, o que é mais fácil de controlar em um ambiente próprio.

💸 **Custos e Dependência (Lock-in)**

* **Custos Previsíveis:** Os custos com infraestrutura (data center, máquinas, link) são, em grande parte, fixos e não flutuam muito.  
* **Sem Vendor Lock-in:** A empresa não fica dependente de um provedor de nuvem específico. A máquina e o rack são seus, permitindo mais liberdade para trocar de fornecedor sem grandes multas (a não ser que haja um contrato de longo prazo com um data center). Você também não depende das flutuações de preço do mercado.  
* **Custo a Longo Prazo:** O professor destaca um ponto importante: **a longo prazo, se bem dimensionado, o custo do on-premise pode ser menor do que o de uma nuvem pública**. O custo inicial é alto, mas ele se paga ao longo dos anos. A nuvem, por outro lado, tem um custo inicial baixo, mas pode se tornar muito cara com o tempo.

🤔 **Contexto é Tudo: Startup vs. Multinacional**

A escolha do modelo depende do contexto. Para uma startup sem "bala na agulha", o on-premise provavelmente não faz sentido. Para uma multinacional com capital e necessidade de controle, pode ser a melhor opção.

💡 **A Vantagem Oculta da Nuvem**

O professor finaliza com uma ressalva crucial: embora o on-premise tenha esses benefícios, a nuvem oferece **serviços que você nunca terá no on-premise**. Essa diferença começa a "mudar a figura" da comparação, e ele antecipa que falará sobre isso nos próximos vídeos.

## **Cloud computing** {#cloud-computing}

☁️ **Introdução ao Cloud Computing e a Necessidade de Reflexão**

O professor inicia a discussão sobre Cloud, destacando que mesmo quem já trabalha com ela há anos pode ter insights ao revisitar os fundamentos. O "piloto automático" do dia a dia muitas vezes nos impede de pensar em conceitos, custos e outros aspectos importantes.

💸 **Os Desafios do Modelo Cloud**

* **Alto Custo a Longo Prazo:** O professor afirma que, ao longo do tempo, **a nuvem é cara**. Embora existam opções para baratear (instâncias spot, reservadas), certos serviços terão um custo elevado. Isso não é necessariamente uma desvantagem se o retorno sobre o investimento for alto, mas é um fato a ser considerado.  
    
* **Custo da Taxa de Transferência de Dados:** Este é um ponto que ele destaca como "muito custoso", baseado em experiência própria. Ele usa o exemplo dos vídeos do curso, armazenados no AWS S3, onde a taxa para transferir os dados do S3 para a CDN é "muito alta" e "muito cara".  
    
* **Migração e a "Armadilha" da Transferência:** Ele ilustra a complexidade da taxa de transferência com um cenário de migração: se você tem anos de dados no S3 e decide migrar para o Google Cloud, o custo para **tirar os dados** da AWS pode ser tão alto (milhões de dólares) que a migração se torna inviável. Ele menciona que, em alguns casos, o novo provedor pode "bancar" esse custo para atrair o cliente.  
    
* **Dificuldade em Prever Custos:** A gestão de custos na nuvem é tão complexa que o professor brinca que é preciso ter um "MBA" no assunto. As calculadoras de custo dos provedores exigem informações detalhadas (nº de requisições, taxa de transferência) que muitas vezes não se tem, tornando qualquer estimativa um "puro chute", especialmente com serviços elásticos.

🔒 **Dependência e Riscos**

* **Vendor Lock-in:** Usar serviços proprietários de um provedor, como o **DynamoDB** da AWS, gera um forte *lock-in*. Você fica "preso" àquele ecossistema, pois não consegue rodar esse serviço em outro provedor.  
    
* **Riscos de Segurança:** Em grandes organizações, gerenciar credenciais e acessos é extremamente complexo. A vasta quantidade de opções pode, por si só, gerar problemas. O professor cita o caso de grandes empresas que tiveram vazamentos de dados, não conseguiram identificar a origem e tiveram que **recriar toda a infraestrutura na nuvem**, ficando semanas fora do ar e com prejuízos bilionários.  
    
* **Controle Limitado e Compliance:**  
    
  * **Upgrades:** Você joga "dentro das 4 linhas" do provedor. Não é possível customizar hardware como no on-premise; você está limitado aos modelos pré-definidos.  
  * **Compliance:** Atender a certas regulamentações pode ser complexo, pois você depende das certificações e da infraestrutura do provedor.  
  * **Sistemas Legados:** A integração com sistemas legados (como mainframes de bancos) é mais complexa e exige um "esforço adicional", como o uso de VPNs para conectar a nuvem ao data center local.

💡 **Próximo Passo: As Vantagens "Apelativas" da Nuvem**

O professor conclui a aula anunciando que, apesar desses desafios, a nuvem tem vantagens "bem apelativas" que fizeram uma grande diferença no mundo da tecnologia, e que ele abordará esses pontos no próximo vídeo.

## **Cloud computing Pt2** {#cloud-computing-pt2}

🚀 **A Vantagem Principal: Baixo Custo Inicial**

O professor enfatiza que o **baixo custo inicial** é uma vantagem inegável da nuvem. Isso **democratizou o acesso a novos negócios**.

* **A Realidade Atual:** Hoje, uma startup pode começar sem gastar nada, usando os *free tiers* dos provedores. A barreira de entrada foi drasticamente reduzida.  
* **O Passado:** Antigamente, apenas grandes players, que eram os "únicos detentores da infraestrutura tecnológica", conseguiam entrar em certos mercados.

✅ **Outras Vantagens Cruciais da Nuvem**

* **Escalabilidade Simplificada:** Embora a nuvem seja cara, a capacidade de escalar é uma grande vantagem. É possível subir ou destruir milhares de máquinas em questão de minutos, algo que seria muito trabalhoso no on-premise.  
    
* **Acessibilidade e Amplitude de Serviços:**  
    
  * A nuvem oferece acesso não apenas a máquinas virtuais, mas a um vasto ecossistema de serviços de software, como bancos de dados, conversão de vídeo, streaming, cache e **Machine Learning**, coisas que seriam impossíveis ou exigiriam a compra de soluções caras no on-premise.


* **Alta Disponibilidade Simplificada:**  
    
  * **Regiões e Zonas de Disponibilidade (AZs):** Os provedores trabalham com esses dois conceitos. Uma **região** (ex: São Paulo) contém múltiplas **AZs**, que são data centers fisicamente distantes (ex: 100km um do outro) e conectados por fibra de alta velocidade. Isso permite criar uma infraestrutura altamente disponível, que sobrevive a desastres como uma enchente em um dos data centers, com apenas "dois cliques".  
  * **Alcance Global:** O uso de múltiplas **regiões** (São Paulo, EUA, Europa, Ásia) permite que a aplicação se torne global, armazenando dados onde for necessário para cumprir regulamentações locais (como a GDPR na Europa).


* **Menos Gestão de Pessoas e Hardware:**  
    
  * Você evita ter que contratar e gerenciar profissionais de data center, rede e hardware.  
  * Você não precisa se preocupar com a manutenção do hardware físico.


* **Pay-As-You-Go (Pague Conforme o Uso):**  
    
  * Este conceito está cada vez mais literal. Começou com máquinas virtuais (onde você ainda paga pela máquina ligada, mesmo que ociosa), mas evoluiu para **Funções como Serviço**, onde você paga apenas pelas requisições que utiliza, sem manter uma máquina ligada.


* **Serviços Gerenciados e Backups:**  
    
  * A nuvem oferece serviços gerenciados para tecnologias complexas como Kafka, Elastic e Redis, eliminando a necessidade de contratar DBAs ou especialistas para gerenciá-los.  
  * Existem serviços que automatizam backups, simplificando essa tarefa.


* **Recuperação Rápida de Desastres:** A combinação de múltiplas regiões e AZs permite uma recuperação muito mais rápida em caso de desastres.

🤝 **O Modelo de Responsabilidade Compartilhada**

O professor finaliza com um ponto crucial que muitas pessoas não conhecem: o **modelo de responsabilidade compartilhada**.

* **O que é:** O provedor de nuvem tem responsabilidade até um certo limite (ex: garantir que as máquinas físicas estejam funcionando). A partir daí, a responsabilidade é do cliente (ex: garantir a segurança *nessas* máquinas, fazer as configurações corretas).  
* **A Nuvem Não Faz Mágica:** A nuvem não vai resolver todos os seus problemas. É essencial entender este modelo para saber, quando um problema ocorrer, se a responsabilidade pela falha é sua ou do provedor.

## **Modelo Hibrido e Multicloud** {#modelo-hibrido-e-multicloud}

🌉 **O Modelo Híbrido**

O professor explica que o modelo híbrido pode ser visto de duas formas principais:

1. **Como um Modelo de Transição:** Uma empresa que tem uma infraestrutura on-premise e está migrando gradualmente para a nuvem, mantendo partes em ambos os ambientes durante o processo.  
2. **Como um Modelo Estratégico:** Uma empresa que escolhe intencionalmente manter o "melhor de dois mundos". Ela mantém on-premise os dados sigilosos, que exigem compliance ou sistemas legados que só rodam localmente. Ao mesmo tempo, utiliza a nuvem para serviços que seriam muito complexos de gerenciar internamente, como bancos de dados, Machine Learning, etc.

📈 **Uso Estratégico: Redução de Custos em Picos Sazonais**

Um grande benefício do modelo híbrido é lidar com a utilização sazonal.

* **O Problema:** Uma empresa mantém sua operação base em duas máquinas on-premise, o que é financeiramente viável. No entanto, na Black Friday, a demanda aumenta 10 vezes. Comprar 10 vezes mais hardware para usar apenas por uma semana seria um desperdício, pois o equipamento ficaria ocioso o resto do ano.  
* **A Solução Híbrida:** A empresa mantém sua base on-premise e, durante o evento sazonal, utiliza a nuvem para escalar massivamente. Ela paga uma conta alta de nuvem naquele mês, mas depois "desescala" e volta para sua operação mais barata, o que é muito mais econômico do que o investimento em hardware ocioso.

⚠️ **Complexidades e Desafios do Modelo Híbrido**

* **Integração Complexa:** Fazer os sistemas on-premise e da nuvem conversarem pode ser um grande desafio.  
* **Latência:** Garantir uma comunicação de baixa latência entre o ambiente on-premise e o provedor de nuvem é complexo.  
* **Profissionais Especializados:** O professor destaca que aqui "o bicho pega". A empresa precisa ter especialistas em **ambas as áreas**: profissionais que entendem de nuvem e profissionais que entendem de on-premise (hardware, rede, data center), o que "dobra" a necessidade de talentos.

🌐 **Conceito Relacionado: Multi-Cloud**

O professor introduz o conceito de **Multi-Cloud**, que é diferente de híbrido (on-premise \+ cloud).

* **O que é:** É quando uma empresa utiliza **diferentes provedores de nuvem ao mesmo tempo** (ex: AWS, Azure e Google).  
* **Por quê?**  
  * Para usar o serviço que faz mais sentido em cada provedor, seja por preço, por negociação de contrato ou porque um serviço específico é melhor em uma nuvem do que em outra.  
  * Para garantir um nível ainda maior de alta disponibilidade, utilizando regiões de diferentes provedores.  
* **A Hierarquia da Disponibilidade:** A escala de disponibilidade cresce: Zonas de Disponibilidade (AZs) \-\> Regiões \-\> Diferentes Clouds com suas próprias Regiões e AZs.
