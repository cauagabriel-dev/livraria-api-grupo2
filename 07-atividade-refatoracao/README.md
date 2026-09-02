# Atividade 08 — Refatoração e Code Review

## 📝 Resumo da Refatoração (Clean Code)

Durante esta atividade, foram aplicadas melhorias de refatoração e boas práticas de Clean Code no projeto:

1. **Extração de Números Mágicos:**
   - `Funcionario.js`: Extraído `0.1` para a constante `PERCENTUAL_BONUS`.
   - `LivroFisico.js`: Extraído `2.5` para a constante `TAXA_FRETE_POR_KG`.
   - `Categoria.js`: Extraído `3` para a constante `TAMANHO_MINIMO_NOME`.
   - `Livro.js`: Extraído `0` para a constante `PRECO_MINIMO`.

2. **Divisão de Métodos e Responsabilidades:**
   - `Carrinho.js`: O método `listar()` foi quebrado em métodos menores, criando a função auxiliar `exibirItem(livro)` para isolar a formatação da exibição. O cálculo do total foi otimizado usando `.reduce()`.

3. **Correção de Herança e Limpeza:**
   - Corrigido o repasse do argumento `categoria` na chamada do `super(...)` nas classes `LivroFisico.js` e `LivroDigital.js`.
   - Removidos comentários redundantes e desnecessários que apenas explicavam a sintaxe básica do código.

---

## 🔍 Code Review entre Pares

### 1. Atuando como Revisor (Análise da classe `LivroFisico.js` do colega)
- **Item 2 (Números Mágicos):** Identificado o valor `2.5` solto no cálculo de frete. Recomendada a criação de `TAXA_FRETE_POR_KG`.
- **Item 4 (Herança/Duplicação):** O `super()` não repassava a `categoria`, o que geraria erro no `descrever()`. Recomendada a correção no construtor.
- **Item 7 (Comentários):** Removido comentário óbvio na chamada do `super()`.

### 2. Atuando como Revisado (Análise do colega na minha classe `Carrinho.js`)
- **Item 3 (Métodos Pequenos):** O colega apontou que `listar()` acumulava o cabeçalho e a formatação das linhas.
- **Ação tomada:** Extraído o método `exibirItem(livro)` para deixar o `listar()` focado apenas na iteração.

---

## 📊 Tabela da Auditoria (Checklist de Clean Code)

| Item do checklist | Classe 1: `Funcionario.js` | Classe 2: `LivroFisico.js` |
| :--- | :---: | :---: |
| **1. Nomes claros** | ✅ | ✅ |
| **2. Sem números mágicos** | ⚠️ | ⚠️ |
| **3. Métodos pequenos** | ✅ | ✅ |
| **4. Sem duplicação** | ✅ | ⚠️ |
| **5. Dados protegidos** | ✅ | ✅ |
| **6. Um arquivo, uma classe** | ✅ | ✅ |
| **7. Comentários úteis** | ✅ | ⚠️ |

---

## ✅ Checklist de Entrega

- [x] Ao menos uma constante mágica extraída
- [x] Ao menos um método longo quebrado em métodos menores
- [x] Checklist de 7 itens preenchido para ao menos 2 classes
- [x] Participação como revisor e como revisado
- [x] Comentários da revisão específicos
- [x] `git push` executado com sucesso