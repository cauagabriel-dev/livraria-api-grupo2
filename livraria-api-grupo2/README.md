# 📚 API de Gestão da Livraria (SA1)

Projeto desenvolvido durante as aulas de Programação Back-End (UC - PBE), turma SESI/SENAI.

---

# API de Gestão da Livraria — Grupo 2
Projeto da UC de Programação Back-End — Curso Técnico em Desenvolvimento de Sistemas
Escola SENAI "Santo Paschoal Crepaldi" — Turma 1-2026-SESI_DEV_OC_1

---

## Integrantes
- Ana Júlia Ledier Del Passo — @anapasso-spec
- Cauã Gabriel Oliveira da Silva - @cauagabriel-dev 
- Laura Nunes Semensato — @laurasemensato
- Yago Henrique Sanches Rodrigues — @yagomx25

---

## Divisão de responsabilidades
| Bloco | Integrante | O que ficou sob responsabilidade dele(a) |
|---|---|---|
| Bloco 1 | *(a preencher)* | *(a preencher)* |
> Esta tabela é atualizada **a cada bloco**, com rodízio de responsabilidades entre os

---

## Tecnologias
- Node.js
- npm

---

## 📌 Resumo do Bloco 2 - Consolidação do Processo

### 1. 📐 Diagrama UML
O diagrama de classes do sistema reflete a arquitetura do banco e das entidades do sistema (com suporte às classes do diretório `src/models/`).

![Diagrama do Projeto](docs/diagrama-uml.png)

---

### 2. 🗂️ Estrutura do Esqueleto MVC
O projeto foi estruturado seguindo o padrão **MVC (Model-View-Controller)** e preparado para a integração com o Express:

```text
livraria-api-grupo2/
├── docs/
├── src/
│   ├── controllers/      # Camada de controle (requisições e respostas)
│   │   ├── categoriaController.js
│   │   └── livroController.js
│   ├── models/           # Entidades e regras de negócio/dados
│   ├── routes/           # Mapeamento das rotas da API
│   │   ├── categoriaRoutes.js
│   │   └── livroRoutes.js
│   ├── services/         # Camada de serviços e lógica da aplicação
│   │   ├── categoriaService.js
│   │   └── livroService.js
│   └── index.js          # Ponto de entrada (Servidor Express)
├── .gitignore
├── package.json
└── README.md