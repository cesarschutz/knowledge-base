---
id: design-docs
title: 📄 Design Docs
slug: /mba-design-docs
---

# 📄 Design Docs

## 🎯 Apresentação e Fundamentos

**👨‍💼 Apresentação do Palestrante**  
Cássio Botaro, engenheiro de software no PicPay, com experiência em Design Docs em empresas como Magazine Luíza (Luísa Labs), Amazon e PicPay. Trabalhou no time de arquitetura do Magazine Luíza revisando Design Docs e teve oportunidade de escrever documentos na Amazon, empresa com forte cultura de documentação.

**📖 Definição e Conceito de Design Docs**  
Documentos relativamente informais criados pelos autores principais de um sistema de software antes de embarcar no projeto de codificação. Documentam a estratégia de implementação de alto nível, principais decisões de design com ênfase nas compensações (trade-offs). São documentos feitos pelo time (não apenas por tech leads ou arquitetos) com objetivo de tornar claro e compartilhado o conhecimento.

**⚡ Importância da Documentação**  
Quebra o estigma do Movimento Ágil sobre não escrever documentação. O problema não é a documentação em si, mas o Big Upfront Design (design antecipado excessivo) que causava atrasos. Dave Thomas afirma: "Big Upfront Design is dumb, mas não ter design nenhum é ainda mais idiota". Documentação é um elemento de comunicação essencial para compartilhar decisões técnicas e contexto com outras pessoas.

**💬 Contexto e Comunicação**  
Desenvolvedores costumam criticar código sem contexto, mas código sem contexto perde muito das tomadas de decisão. Documentação permite capturar o conhecimento prévio sobre uma solução, escrever sobre ela e fazer as compensações necessárias. É uma forma de comunicação que sempre deve considerar os outros - como se comunicar com outras pessoas e deixar decisões técnicas para quem possa vir olhar o sistema depois.

**🎯 Objetivos da Apresentação**  
Cobrir definição do design doc, estrutura, ferramentas, ciclo de vida, quando escrever e quando não escrever, outros tipos de documentos (RFCs, ADRs) e referências. A agenda inclui motivação, estrutura informal, ferramentas práticas, ciclo de vida do documento e casos de uso.

>📋 **REVISÃO DO TÍTULO**  
Apresentação do conceito de Design Docs como documentos informais de comunicação técnica, quebrando paradigmas do Movimento Ágil sobre documentação. Destaca a importância do contexto e comunicação em equipes de desenvolvimento, com foco na captura de decisões técnicas e compensações antes da implementação.

## 💡 Porque devemos utilizar

**🔍 Identificação Precoce de Problemas**  
Permite identificar problemas antes da codificação, quando ainda é barato corrigir. Experiência prática mostra que projetos já foram invalidados durante o levantamento por descobrir que peças principais não eram viáveis. A identificação precoce evita custos de implementação desnecessários.

**🤝 Alcançar Consenso Organizacional**  
Gera consenso em torno de uma organização ao envolver pessoas com entendimento dos domínios relevantes. Permite que times decidam entre alternativas (ex: banco relacional vs não-relacional) documentando as decisões. Novos membros do time podem ler documentos para entender o sistema rapidamente.

**🛡️ Consideração de Preocupações Transversais**  
Assegura consideração de questões como segurança, testabilidade, monitoramento, observabilidade e impactos em pessoas envolvidas. Mudanças em contratos de API podem impactar times consumidores. Documentação ajuda a identificar e mitigar esses impactos transversais.

**📈 Escalar Conhecimento**  
Remove conhecimento da cabeça de desenvolvedores individuais, evitando perda quando pessoas saem do time. Permite que conhecimento de engenheiros sêniores seja compartilhado com toda a organização, elevando o nível técnico geral. Forma uma base de memória organizacional das decisões tomadas.

**💼 Portfólio Técnico**  
Serve como artefato resumido no portfólio técnico dos desenvolvedores de software. Empresas como Google, Amazon, PicPay, Azul, Spotify utilizam Design Docs como critério para promoções. Documentos demonstram capacidade de design e documentação para cargos de maior senioridade.

**🏢 Cultura e Manutenção**  
A manutenção da documentação é desafiadora, mas essencial. Documentação desatualizada gera falsa sensação de controle. A solução é cultural - criar cultura generativa onde pessoas naturalmente revisam e atualizam documentos. Exemplo prático: antes de revisar fluxos, voltar ao documento e atualizá-lo.

>📋 **REVISÃO DO TÍTULO**  
Design Docs oferecem múltiplos benefícios: identificação precoce de problemas, consenso organizacional, consideração de impactos transversais, escalabilidade do conhecimento, formação de portfólio técnico e criação de memória organizacional. A manutenção requer cultura organizacional adequada.

## 📋 Estrutura: Como preencher

**🔄 Flexibilidade da Estrutura**  
As seções apresentadas são exemplos e recomendações, não um guia obrigatório a ser seguido. Se alguma seção não fizer sentido, pode ser ignorada. Não existe maneira certa ou errada de fazer - a informalidade permite adaptação ao contexto específico.

**📝 Cabeçalhos Essenciais**  
Incluem nome dos autores/co-autores, revisores, status do documento (rascunho, proposto, aprovado, rejeitado), data de criação/atualização e tags para indexação. Ferramentas como Confluence podem gerenciar controle de versão automaticamente.

**💡 Dicas para Cabeçalhos**  
Não deixar de atualizar o estado do documento. Envolver e pedir revisão para pessoas com maior senioridade das áreas relevantes (segurança, infraestrutura, plataforma) e times impactados. Incluir tags para facilitar busca e organização.

**👁️ Visão Geral**  
Texto breve de alto nível sobre o que o documento trata, permitindo que leitores decidam se devem continuar a leitura. Deve ser sucinto (máximo dois parágrafos), sem detalhes, mas com contexto suficiente para compreensão. Exemplo: "Apresenta a criação de um novo BFF para sistema de vendas online que irá oferecer aplicativo novo".

**🌍 Escopo e Contexto**  
Descreve o cenário onde o sistema está inserido, motivadores da escrita do documento e informações para entendimento do contexto do problema. Inclui tecnologias atuais, dívidas técnicas, problemas existentes - sem mencionar soluções ainda. Objetivo é atualizar leitores com conhecimento prévio, mas sem exigir muito conhecimento técnico específico.

**📚 Analogia Narrativa**  
Design doc é como contar uma história: começo (visão geral), meio (contexto e solução), fim (conclusões). A estrutura segue uma narrativa que introduz o cenário, apresenta o problema, mostra a solução e conclui com resultados esperados.

>📋 **REVISÃO DO TÍTULO**  
A estrutura do Design Doc é flexível e informal, com seções opcionais que servem como guias. Cabeçalhos incluem informações essenciais de autoria e status. Visão geral deve ser sucinta e contextual, enquanto escopo e contexto estabelecem o cenário do problema. A estrutura segue uma narrativa clara.

## 🎯 Objetivos e Fora do Escopo: O que vou incluir e o que não incluir

**📊 Definição de Objetivos**  
Objetivos são requisitos de negócio ou técnicos alcançados com a conclusão da tarefa. Devem ser metrificáveis para permitir verificação de sucesso. Exemplos: reduzir tempo de resposta, melhorar escalabilidade, aumentar taxa de conversão, facilitar manutenção.

**❌ Fora do Escopo**  
Pontos que não serão contemplados na solução atual. Pode incluir partes do sistema que permanecerão legadas, funcionalidades não implementadas neste momento, ou detalhes que serão tratados em outros projetos. Importante para não criar expectativas incorretas.

**📋 Formato e Apresentação**  
Ambos (objetivos e fora do escopo) devem ser apresentados em formato de lista, não texto corrido. Podem estar em seção única ou separadas. O importante é ser sucinto mas objetivo, evitando generalidades como "vai reduzir custos" em favor de "vai reduzir custo através da redução do tráfego".

**✅ Exemplo Prático de Objetivos**  
- Reduzir tempo de resposta do sistema para melhorar experiência do usuário
- Melhorar escalabilidade para atender demanda crescente
- Aumentar taxa de conversão oferecendo experiência mais rápida e intuitiva
- Facilitar manutenção isolando código legado e fornecendo camada de abstração

**🚫 Exemplo Prático de Fora do Escopo**  
- Criação de novas funcionalidades principais do sistema
- Implementação de segurança de alto nível no BFF (será especificado em outro projeto)
- Criação de solução de cache (pode ser implementada posteriormente)

**💡 Dicas para Definição**  
Objetivos devem ser metrificáveis e não negar o objetivo principal. Fora do escopo deve incluir apenas o que realmente não será contemplado, não requisitos básicos. Seja específico e factível para melhor compreensão dos leitores.

>📋 **REVISÃO DO TÍTULO**  
Objetivos definem o que será alcançado com a solução, devendo ser metrificáveis. Fora do escopo especifica o que não será tratado, evitando expectativas incorretas. Ambos devem ser apresentados em listas sucintas e objetivas, com exemplos práticos e específicos.

## 🏗️ O Design

**⭐ Parte Mais Crucial do Documento**  
Após estabelecer contexto, objetivos e não-objetivos, esta seção apresenta a solução técnica. Deve mostrar por que uma determinada solução atende melhor aos objetivos estabelecidos. É a parte mais longa e detalhada do documento.

**🏛️ Estrutura da Solução**  
Começa com visão geral da solução, depois entra em detalhes. Pode incluir diagramas com contexto, APIs afetadas, dados manipulados, códigos ou pseudocódigos, telas para contexto, payloads e diagramas de sequência para fluxos novos.

**⚖️ Foco nas Compensações**  
O ponto principal deve ser as compensações (trade-offs) - por que determinada decisão foi tomada. Soluções podem estar restritas a sistemas legados ou bibliotecas, resultando em soluções não ótimas. É importante focar na melhor solução possível considerando as limitações.

**📊 Utilização de Dados e Fatos**  
Não apenas afirmar "vamos reduzir o payload", mas trazer números específicos como "redução de 30% do payload". Usar dados factíveis para dar valor ao documento. Exemplo: "Hoje temos 10 mil chamadas, queremos reduzir para zero".

**🎨 Elementos Visuais Complementares**  
Diagramas são complementares, não substitutos de explicações. Sempre explicar a solução, não apenas colocar diagramas esperando que sejam autoexplicativos. Diagramas C4 podem ser úteis, mas sempre requerem explicação adicional.

**🔧 Exemplo Prático de Solução**  
Solução de BFF para reduzir payload em 30%, melhorar experiência do usuário, criar API específica para dispositivos móveis, desacoplar da API principal. Compensações incluem complexidade adicional, componente novo, aumento de tempo e custo de desenvolvimento, mas prós superam contras.

**📈 Diagramas e Fluxos**  
Pode incluir diagramas C4 mostrando componentes e interações, diagramas de sequência para fluxos específicos, e outros elementos visuais que enriqueçam a compreensão da solução. Exemplo: fluxo de requisição do aplicativo móvel → BFF → API → resposta otimizada.

>📋 **REVISÃO DO TÍTULO**  
A seção de Design é a mais crucial, apresentando a solução técnica detalhada. Deve focar nas compensações e decisões tomadas, utilizar dados factíveis, incluir elementos visuais complementares e explicar por que a solução escolhida atende aos objetivos. É a parte mais extensa do documento.

## 📝 RFC

**🔄 Comparação com Outros Documentos**  
Design Docs têm linha tênue com RFCs, ADRs e SADs. RFCs são mais técnicos e formais, focando em implementações específicas. ADRs documentam decisões arquiteturais de forma direta. Design Docs são mais amplos, incluindo contexto, problema e design completo.

**📏 Tamanho e Complexidade**  
Normalmente de uma a três páginas, dependendo da complexidade da solução. Pode ser simples como uma página ou mais complexo com três páginas. Soluções muito complexas podem gerar documentos maiores, mas o mais comum é manter-se conciso.

**🎯 Características Distintivas**  
Design Doc tem foco no design em si, não apenas na decisão. Inclui contexto completo, história do problema, soluções consideradas e implementação. ADR é mais direto sobre decisões arquiteturais. RFC é mais específico e técnico, com formalidade maior.

**🔄 Ciclo de Vida e Revisões**  
Design Docs incluem pedidos de comentários (revisões), similar aos RFCs. A linha entre documentos é tênue - podem ser bem similares dependendo do contexto. Design Docs podem conter RFCs internos para detalhes específicos de implementação.

**🔗 Integração entre Documentos**  
É possível ter Design Doc com RFC anexado para detalhes de implementação. Design Doc estabelece contexto e decisões de alto nível, enquanto RFC especifica detalhes técnicos finos. Ambos trabalham em conjunto para documentação completa.

**🎛️ Flexibilidade de Uso**  
Cada tipo de documento tem sua finalidade e público-alvo. Design Docs são mais informais e focados em comunicação, enquanto RFCs são mais formais e técnicos. A escolha depende do contexto organizacional e necessidades específicas.

>📋 **REVISÃO DO TÍTULO**  
RFCs, ADRs e Design Docs têm características similares mas propósitos distintos. Design Docs são mais amplos e informais, focando no design completo. Tamanho varia de uma a três páginas. Podem integrar-se com outros documentos para documentação completa e detalhada.

## 🔧 Ferramentas na prática

**🏢 Confluence - Wiki Corporativa**  
Ferramenta mais utilizada pelo palestrante, oferece integração com outras ferramentas como Jira. Permite organização hierárquica de documentos, indexação por tags, colaboração com comentários, histórico de revisões e criação de repositório central. Permite incluir documentos de times específicos no repositório central automaticamente.

**📄 Google Docs**  
Alternativa se a empresa já possui infraestrutura Google. Pode ser usado em drive compartilhado da empresa para centralizar Design Docs. Mais simples que Confluence, mas adequado se já disponível na organização.

**💻 GitHub/GitLab/BitBucket**  
Representantes de controle de versão que permitem manter documentos próximos ao código. Limitação: não são ideais para público não-desenvolvedor. Recomendação é preferir Confluence para melhor acesso de stakeholders e pessoas interessadas.

**🎨 Ferramentas de Diagramação**  
- **PlantUML**: Diagramas textuais que permitem revisões, gera diagramas automaticamente a partir de texto. Suporta sequência, caso de uso, C4 e outros.
- **Structurizr**: Baseado em diagramas como código, preferido para modelo C4. Permite gerar múltiplos diagramas a partir de um único modelo.
- **WebSequence**: Para diagramas de sequência e fluxos de caso de uso.

**🔄 Ciclo de Vida do Documento**  
Processo iterativo: escrever documento sozinho ou com co-autores → compartilhar com pessoas com conhecimento do problema → receber críticas e sugestões → ampliar público para maior senioridade → colocar no repositório central → continuar ciclo de revisões até estar confiante → iniciar implementação.

**⏰ Cultura e Timing**  
Não esperar até o prazo para começar a escrever. Iniciar quando empresa tem iniciativa nova, mesmo sem solução completa. Quanto mais cedo envolver pessoas, mais tempo para evoluir documento. Sobrecarga é diluída ao longo do tempo quando feito antecipadamente.

**📚 Documentação Viva**  
Termo para documentação sempre atualizada. Requer revisitar documentação a cada alteração no sistema. Cultura organizacional é essencial para manutenção consistente dos documentos.

>📋 **REVISÃO DO TÍTULO**  
Confluence é a ferramenta mais recomendada para Design Docs, oferecendo colaboração, indexação e organização hierárquica. Outras opções incluem Google Docs e controle de versão. Ferramentas como PlantUML, Structurizr e WebSequence auxiliam na criação de diagramas. O ciclo de vida é iterativo e requer cultura de documentação viva.

## ❌ Design Docs: Quando usar ou não usar

**🚫 Cultura Patológica**  
Não escrever quando a cultura da organização é patológica - decisões de cima para baixo sem discussão. Se implementação é imposta sem alternativas, documentação tem pouco benefício real. Não há compensações para documentar quando decisões são unilaterais.

**⚠️ Sobrecarga sem Benefício**  
Escrever documentos sem entender os benefícios gera ruído e pessoas insatisfeitas. Pode ser visto como burocracia desnecessária. A informalidade do Design Doc existe para evitar que se torne burocrático. É questão cultural de mostrar valor da documentação.

**🎯 Falta de Complexidade**  
Quando funcionalidade é muito simples e não há compensações significativas. Se há apenas uma maneira de fazer algo e é simples, não vale a pena escrever documento. Design Docs são para situações que requerem decisões e trade-offs.

**📚 Outros Tipos de Documentação**  
- **ADR (Architecture Decision Records)**: Documenta decisões arquiteturais específicas, mais direto e focado em decisões.
- **RFC (Request for Comments)**: Pedidos de comentários mais formais e técnicos, específicos para implementações.
- **Tutoriais**: Para documentar como fazer algo, útil para onboarding e processos.

**🛠️ Ferramentas e Recursos**  
Menciona ferramenta do Nate Price para ADR que permite criar decisões e fazer supersede (substituição). Modelo curto, rápido e simples, próximo ao código. Diferente do Design Doc que foca no design completo.

**🔗 Referências e Materiais**  
Inclui links para Design Docs do Google, introdução do PicPay, documentação efetiva, canal do YouTube do palestrante com visão de outras empresas (Azul, Shopify), e compilação de empresas que usam modelos RFC-like ou Design Docs-like.

**💡 Valor da Documentação**  
Documentação evita reuniões desgastantes, perda de foco e objetividade. Força pensamento mais detalhado sobre assuntos. Remove ruído de comunicação e clareia ideias. Mesmo decisões óbvias para alguns podem não ser claras para outros sem documentação adequada.

>📋 **REVISÃO DO TÍTULO**  
Design Docs não devem ser usados em culturas patológicas, quando há sobrecarga sem benefício claro, ou para funcionalidades muito simples. Outros documentos como ADR, RFC e tutoriais têm propósitos específicos. A documentação adequada remove ruído de comunicação e força pensamento detalhado.