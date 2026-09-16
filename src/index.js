const express = require("express"); //Traz a biblioteca instalada
// const categoriaRoutes = require("./routes/categoriaRoutes"); //Traz o arquivo de rotas 
const routes = require("./routes");
const logger = require("./middlewares/logger");

const app = express();
const PORTA = 3000;

app.use(logger); //Vem primeiro, porque tem a parte de logar a requisição antes de passar para as rotas
app.use(routes);

// app.use("/categorias", categoriaRoutes); //Usa as rotas de categoriaRoutes para o caminho /categorias

app.get("/", (req, res) => {
  //req é requisição e res é resposta
  res.send("API da Livraria no ar!");
});

app.get("/sobre", (req, res) => {
  res.send("Livraria SENAI - Trabalho de PBE, turma 1-2026-SESI_DEV_OC_1");
});

app.listen(PORTA, () => {
    console.log("Servidor rodando em http://localhost:" + PORTA);
});