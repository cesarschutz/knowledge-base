# 🅰️ Angular

## 📖 Sobre o Angular

O Angular é um framework web robusto desenvolvido pelo Google que permite criar aplicações web modernas e escaláveis. Este documento serve como base de conhecimento sobre conceitos, configurações e melhores práticas do Angular.

---

## 🛠️ Configurações do Angular CLI

Esta seção explica aspectos técnicos fundamentais do Angular CLI que são comuns durante a criação de um novo projeto.

### 📦 SSR (Server-Side Rendering)

#### ❓ O que é?

SSR (Server-Side Rendering) é uma técnica em que o conteúdo da página é renderizado no **servidor** antes de ser enviado ao navegador. No Angular, isso é implementado com o **Angular Universal**.

O servidor pré-processa os componentes Angular, gera o HTML completo e o envia ao cliente. Assim, o navegador recebe o conteúdo já renderizado.

#### 🎁 Benefícios

- **Melhor SEO**: Ideal para aplicações que precisam ser indexadas por buscadores.
- **Performance percebida superior**: Reduz o tempo até o conteúdo visível.
- **Acessibilidade**: Funciona mesmo em navegadores sem suporte total a JavaScript.

#### ⚠️ Desvantagens

- **Maior complexidade de infraestrutura**: requer um servidor Node.js para servir as páginas.
- **Maior tempo de build** e necessidade de lidar com renderizações no lado servidor.
- Não é necessário em todas as aplicações.

#### 📌 Quando usar?

- Sites públicos, blogs, landing pages, portais indexáveis.
- Aplicações onde SEO e performance inicial são cruciais.

#### ❌ Quando evitar?

- Aplicações internas, painéis administrativos, sistemas fechados.
- Ambientes onde SEO não é relevante e a simplicidade operacional é mais importante.

---

### ⚙️ Zone.js

#### ❓ O que é?

`zone.js` é uma biblioteca usada pelo Angular para **interceptar operações assíncronas** (como eventos, timers, chamadas HTTP) e automaticamente acionar o **ciclo de detecção de mudanças (change detection)**.

Isso permite que o Angular saiba quando precisa atualizar o DOM com base nas alterações de estado da aplicação.

#### 🔍 Como funciona?

Zone.js "envolve" chamadas assíncronas com um contexto especial. Quando a chamada termina, ele notifica o Angular para verificar o que mudou e atualizar a interface.

#### 🎁 Vantagens

- **Desenvolvimento reativo sem esforço**.
- Dispensa chamadas manuais a `ChangeDetectorRef`.
- Suporte a forms, pipes e componentes com atualização automática.

#### 🧪 Aplicação Zoneless (sem zone.js)

Angular permite hoje criar apps **sem zone.js** como experimento ("zoneless mode"). Nesse caso:

- A detecção de mudanças precisa ser manual (usando signals, observables ou `ChangeDetectorRef`).
- Exige domínio avançado do ciclo de vida e controle fino do DOM.

#### 📌 Quando manter Zone.js?

- Em projetos padrão Angular.
- Quando se prioriza produtividade e simplicidade.

#### ⚠️ Quando considerar zoneless?

- Aplicações altamente performáticas.
- Ambientes com grande volume de atualizações assíncronas personalizadas.
- Casos onde o controle manual oferece vantagens.

---

### 🔐 Analytics do Angular CLI

#### ❓ O que é?

O Angular CLI pode, opcionalmente, enviar **dados de uso anônimos e estatísticos** para o time de desenvolvimento do Angular no Google.

Esses dados são **pseudonimizados**, sem dados pessoais ou sensíveis.

#### 📊 O que é enviado?

- Comandos do CLI utilizados (ex: `ng serve`, `ng generate`)
- Versões do Angular e dependências
- Sistema operacional e ambiente de execução

#### 🎯 Objetivo

- Ajudar a equipe do Angular a entender como o framework é usado na prática.
- Guiar decisões de roadmap com base em uso real.

#### ⚠️ Considerações

- Nenhum dado de projeto, código-fonte ou usuário é enviado.
- A funcionalidade é opcional e pode ser desativada a qualquer momento.

#### 🔧 Comandos úteis

```bash
ng analytics off   # Desativa envio de dados
ng analytics on    # Ativa envio de dados
```

---