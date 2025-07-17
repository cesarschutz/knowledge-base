---
sidebar_position: 1
---

# 🤖 Prompts IA 

## 🗣 Transcrições

<details>
<summary><strong>🗣 Converter transcrição de aula em markdown</strong></summary>

```markdown
tema_da_aula = [[COLOQUE AQUI O TEMA DA AULA]]
transcricao_da_aula = [[COLE AQUI A TRANSCRIÇÃO COMPLETA DA AULA]]

Você é um especialista no tema: **{{tema_da_aula}}**.  
Use apenas esse tema como contexto.

Seu objetivo: registrar **todos os tópicos abordados na aula**, de modo **compacto, completo e técnico**, mantendo a ordem e fidelidade ao texto.

INSTRUÇÕES ESTRITAS:
1. Atue como especialista em **{{tema_da_aula}}**.
2. Não use títulos de nível maior (ex: `#`).
3. Não use linhas horizontais (`---`).
4. Para cada tópico, na ordem exata da transcrição, use **este formato exato**:

   [emoji] **Título do Tópico:**␣␣

     Explicação objetiva e fiel, baseada **única e exclusivamente** no conteúdo da aula.  
    *(compacta; sem repetir exemplos ou linguagem redundante)*

   - **O título NÃO deve ter tabulação.**
   - **O texto explicativo deve começar com tabulação** (4 espaços) para organização visual.
   - Dois espaços no final da linha do **título**, antes da quebra.
   - Linha em branco entre título e explicação.
   - Sem espaços extras em outras linhas.

5. Inclua **todos os tópicos** abordados — não é um resumo, é uma versão enxugada, porém completa.
6. **Não adicione conteúdo externo ou inferências** — só use `transcricao_da_aula`.
7. Mantenha a **ordem original inteira da aula**.
8. Use jargões e termos técnicos pertinentes ao tema.
9. **Imprima toda a saída DENTRO de um bloco de código Markdown** (```) — para facilitar a cópia.

<document>{{transcricao_da_aula}}</document>
```
</details>
