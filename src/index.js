const express = require("express");
const routes = require("./routes");
const logger = require("./middlewares/logger");

// Traz os middlewares para segurar os erros da API
const naoEncontrado = require("./middlewares/naoEncontrado");
const tratarErros = require("./middlewares/tratarErros");

const app = express();
const PORTA = 3000;

// Avisa o Express para aceitar e entender formato JSON
app.use(express.json());

// O logger roda primeiro para registrar os acessos antes de mandar pras rotas
app.use(logger);
app.use(routes);

app.get("/", (req, res) => {
  res.send("API da Livraria no ar!");
});

app.get("/sobre", (req, res) => {
  res.send("Livraria SENAI - Trabalho de PBE, turma 1-2026-SESI_DEV_OC_1");
});

// Segurança: Se tentar entrar em rota que não existe, manda o 404 customizado
app.use(naoEncontrado);

// Segurança máxima: Pega os erros 500 e também mata o erro de falta de Content-Type dando 400!
app.use(tratarErros);

app.listen(PORTA, () => {
  console.log("Servidor rodando em http://localhost:" + PORTA);
});
