const express = require("express"); //Traz a biblioteca instalada
const routes = require("./routes");
const logger = require("./middlewares/logger");

// --- PARTE 4: Importar os novos middlewares ---
const naoEncontrado = require("./middlewares/naoEncontrado");
const tratarErros = require("./middlewares/tratarErros");

const app = express();
const PORTA = 3000;

app.use(express.json()); 

app.use(logger); //Vem primeiro, porque tem a parte de logar a requisição antes de passar para as rotas
app.use(routes);

app.get("/", (req, res) => {
  res.send("API da Livraria no ar!");
});

app.get("/sobre", (req, res) => {
  res.send("Livraria SENAI - Trabalho de PBE, turma 1-2026-SESI_DEV_OC_1");
});

// --- ATENÇÃO PARTE 4: Devem vir depois de todas as rotas e antes do listen ---
app.use(naoEncontrado); // Captura rotas inexistentes (404)
app.use(tratarErros);   // Captura erros inesperados de código (500)

app.listen(PORTA, () => {
    console.log("Servidor rodando em http://localhost:" + PORTA);
});
