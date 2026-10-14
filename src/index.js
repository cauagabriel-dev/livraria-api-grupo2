const express = require("express"); // Traz a biblioteca instalada
const routes = require("./routes"); // Traz o arquivo de rotas unificado
const logger = require("./middlewares/logger");

const app = express();
const PORTA = 3000;

// ⚠️ ESSA LINHA É OBRIGATÓRIA: Habilita o Express a ler JSON no req.body
app.use(express.json()); 
// Middleware de Log (executado antes de processar as rotas)
app.use(logger); 

// Carrega todas as rotas da aplicação
app.use(routes);

// Rotas básicas institucionais
app.get("/", (req, res) => {
  res.send("API da Livraria no ar!");
});

app.get("/sobre", (req, res) => {
  res.send("Livraria SENAI - Trabalho de PBE, turma 1-2026-SESI_DEV_OC_1");
});

// Inicialização do servidor
app.listen(PORTA, () => {
  console.log("Servidor rodando em http://localhost:" + PORTA);
});
