# Plano de Projeto — API REST de Gestão de Livraria

- **Escola:** SESI de Osvaldo Cruz
- **Disciplina:** Programação Back-End / Projetos de Software (PSOF) — Bloco 4
- **Professor:** Wagner Sabor
- **Grupo:** Grupo 2
- **Autores:**
  - Cauã Gabriel Oliveira da Silva — Nº 6 (Líder do Grupo / Scrum Master)
  - Ana Julia Ledier Del Passo — Nº 3
  - Laura Nunes Semensato — Nº 17
  - Yago Henrique Sanches Rodrigues — Nº 30
- **Data:** 18/11/2026

---

## 1. Visão Geral

Este documento apresenta o planejamento da **API REST** (Application Programming Interface — Interface de Programação de Aplicações) de gestão de uma livraria. O sistema organiza o cadastro de livros e categorias, permite filtros de busca, registra avaliações de leitores, controla um carrinho de compras com trava de idade (+18) e possui autenticação básica para administradores.

A aplicação foi construída em **Node.js** com **Express**, organizada no padrão **MVC** (Model-View-Controller — Modelo-Visão-Controle) e conectada a um banco de dados relacional **MySQL** (SGBD — Sistema Gerenciador de Banco de Dados).

---

## 2. Metodologia

Para organizar o trabalho do grupo, usamos o **Scrum** (quadro Kanban no GitHub Projects e Sprints semanais) junto com boas práticas de **Clean Code** e versionamento com **Git e GitHub**.

Escolhemos o Scrum porque o projeto foi evoluindo por etapas: primeiro fizemos a API funcionar em memória, depois adicionamos o tratamento de erros HTTP e, por último, migramos os dados para o MySQL sem quebrar o que já estava pronto.

---

## 3. Escopo

### 3.1. O que entra no projeto (Escopo Incluído)
- **CRUD** (Create, Read, Update, Delete — Criar, Ler, Atualizar e Deletar) completo de livros e categorias.
- Busca e filtro de livros por título, autor e categoria usando *Query Params*.
- Carrinho de compras com verificação de idade (+18) para livros com restrição.
- Cadastro e listagem de sinopses e avaliações feitas por leitores.
- Autenticação básica para proteger rotas administrativas.
- Padronização de respostas de erro HTTP (`400`, `404`, `500`) e consultas parametrizadas (`?`) no banco para evitar *SQL Injection*.

### 3.2. O que fica de fora (Escopo Excluído)
- **Telas / Front-end (web ou mobile):** o foco da entrega é apenas a API REST no back-end.
- **Pagamento online:** o sistema faz apenas a lógica do carrinho, sem cobrança ou checkout financeiro.
- **Login com redes sociais (OAuth / Google):** usamos apenas autenticação básica de administrador por conta do prazo da disciplina.

---

## 4. Requisitos

A tabela abaixo liga cada **Requisito Funcional (RF)** às suas *Issues* no GitHub Project e às horas estimadas:

| ID | Descrição do Requisito Funcional | Issue(s) | Estimativa |
| :--- | :--- | :---: | :---: |
| **RF001** | Cadastro, edição completa/parcial, listagem e exclusão de livros | `#04` | 40h |
| **RF002** | Pesquisa e filtragem de livros por título, autor ou categoria/gênero | `#08` | 24h |
| **RF003** | Gerenciamento de carrinho de compras com validação de restrição de idade (+18) | `#05` | 40h |
| **RF004** | Cadastro e consulta de avaliações breves e sinopses de leitores | `#09` | 24h |
| **RF005** | Autenticação básica de administradores e CRUD de categorias | `#03`, `#10` | 24h |
| **Infra** | Tarefas técnicas de base (`db.js`, `.env`, `livraria.sql` e middlewares de erro) | `#01`, `#02`, `#07` | *(Base técnica)* |

---

## 5. Riscos

Os riscos mapeados pelo grupo foram classificados por nível de impacto e possuem ações definidas caso aconteçam:

| ID | Descrição do Risco | Nível | Resposta (Estratégia + Ação) | Gatilho | Dono |
| :--- | :--- | :---: | :--- | :--- | :--- |
| **R01** | Atraso na entrega de tarefas por acúmulo de atividades escolares e prazos apertados | Alto | **Mitigar:** Dividir as entregas em Sprints curtas com revisão semanal e priorizar as rotas principais. | Atraso maior que 2 dias em alguma issue da Sprint. | Ana Julia |
| **R02** | Erros de integração entre a API (Node.js) e o MySQL (chaves estrangeiras e conexão) | Médio | **Mitigar:** Configurar `db.js`, o script `livraria.sql` e os middlewares de erro logo no início da Sprint 1. | Falha de conexão ou erro de *Foreign Key* nos testes do Postman. | Cauã Gabriel |
| **R03** | Mudança ou ajuste de regras de negócio durante o desenvolvimento | Médio | **Aceitar / Mitigar:** Validar as regras (restrição +18 e exclusão de categorias com livros) antes de programar. | Pedido de alteração de regra durante a revisão da semana. | Laura Nunes |

---

## 6. Cronograma

O andamento das tarefas e os responsáveis ficam registrados no **GitHub Project** do grupo:
- **Link do Quadro Kanban / Project:** `https://github.com/users/[usuario-do-grupo]/projects/[numero]` *(colocar o link real do Project)*

| Sprint | Período | Principais Entregas |
| :--- | :--- | :--- |
| **Sprint 1 — Base e Banco** | Semanas 1 e 2 | Configuração do projeto, banco `livraria.sql` (`#01`, `#02`), middlewares (`#07`) e CRUD de livros (`#04`). |
| **Sprint 2 — Regras e Relacionamentos** | Semanas 3 e 4 | CRUD de categorias (`#03`), filtros (`#08`), carrinho +18 (`#05`) e avaliações (`#09`). |
| **Sprint 3 — Segurança e Testes** | Semanas 5 e 6 | Autenticação admin (`#10`), testes no Postman Runner e revisão final dos documentos. |

---

## 7. Estimativa e Recursos

### 7.1. Por que escolhemos Pontos de Função
O grupo usou a estimativa por **Pontos de Função (PF)**, chegando a **19 PF**, que multiplicados por **8 horas/PF** dão **152 horas de desenvolvimento**. Escolhemos esse método porque ele calcula o tamanho do sistema de forma matemática a partir dos requisitos funcionais, sem depender de chutes baseados em uma única Sprint.

### 7.2. Recursos Utilizados
- **Equipamentos:** 4 notebooks próprios dos integrantes do grupo.
- **Ferramentas e Software:** VS Code, Node.js, MySQL Server 8.0, MySQL Workbench, Postman e GitHub (todos gratuitos).

---

## 8. Orçamento

Usando os valores de referência passados em aula (**R$ 40,00/h** para Desenvolvimento e **R$ 60,00/h** para Gestão/PO), mais **15%** para gestão (23h) e **15%** de reserva de contingência para cobrir os riscos R01, R02 e R03, o orçamento ficou assim:

| Bloco / Item | Detalhamento | Horas | Valor Unitário | Subtotal |
| :--- | :--- | :---: | :---: | :---: |
| **1. Pessoal — Desenvolvimento** | Equipe técnica (19 PF × 8h) | 152h | R$ 40,00 | R$ 6.080,00 |
| **1. Pessoal — Gestão / PO** | 15% sobre as horas de desenvolvimento | 23h | R$ 60,00 | R$ 1.380,00 |
| **2. Infraestrutura** | Notebooks próprios, localhost e internet | — | R$ 0,00 | R$ 0,00 |
| **3. Software e Serviços** | VS Code, Node.js, MySQL e GitHub | — | R$ 0,00 | R$ 0,00 |
| **Subtotal Base** | Soma dos blocos 1 + 2 + 3 | **175h** | — | **R$ 7.460,00** |
| **4. Reserva de Contingência** | 15% sobre o subtotal (riscos R01 a R03) | — | — | **R$ 1.119,00** |
| **TOTAL DO PROJETO** | **Valor final consolidado** | — | — | **R$ 8.579,00** |

---

## 9. Equipe e Papéis (Matriz RACI)

Para dividir bem as tarefas sem sobrecarregar ninguém, definimos a matriz **RACI** (**R** = Responsável por fazer; **A** = Aprovador final; **C** = Consultado; **I** = Informado):

| Atividade | Cauã Gabriel (Líder / Scrum Master) | Ana Julia (Requisitos / Doc) | Laura Nunes (QA / Back) | Yago Henrique (Git / Back) |
| :--- | :---: | :---: | :---: | :---: |
| Levantamento e revisão de requisitos | C | **A/R** | **R** | I |
| Modelagem do banco de dados (`livraria.sql`) | **A/R** | I | C | **R** |
| Rotas de livros (CRUD e busca) | **R** | C | **A/R** | I |
| Rotas de categorias (`categoriaController.js`) | I | **A/R** | **R** | C |
| Rotas do carrinho e regras de idade (+18) | **R** | C | **A/R** | C |
| Testes automatizados da API (Postman) | I | C | **A/R** | **R** |
| Gestão do Project no GitHub | C | **A/R** | I | **R** |
| Acompanhamento da matriz de riscos | C | **A/R** | C | C |
| Documento de Planejamento e Defesa Oral | **A/R** | **R** | **R** | **R** |

---

## Histórico de Versões

| Versão | Data | Autor(es) | O que foi feito |
| :--- | :--- | :--- | :--- |
| **1.0** | 06/11/2026 | Grupo 2 | Definição do orçamento, pontos de função e matriz RACI (Atividade 9). |
| **1.1** | 18/11/2026 | Grupo 2 (Liderança: Cauã Gabriel) | Conferência de rastreabilidade, ajustes das issues e fechamento do plano (Atividade 10). |