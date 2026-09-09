const express = require("express"); //Traz a biblioteca instalada
const livroRoutes = require("./routes/livroRoutes"); //Traz o arquivo de rotas
const categoriaRoutes = require("./routes/categoriaRoutes"); //Traz o arquivo de rotas 

const app = express();
const PORTA = 3000;

app.use("/livros", livroRoutes); //Usa as rotas de livroRoutes para o caminho /livros
app.use("/categorias", categoriaRoutes); //Usa as rotas de categoriaRoutes para o caminho /categorias

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