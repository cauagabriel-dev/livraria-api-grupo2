const express = require("express"); //Traz a biblioteca instalada

const app = express();
const PORTA = 3000;

app.get("/", (req, res) => {
  //res é requisição e res é resposta
  res.send("API da Livraria no ar!");
});

app.listen(PORTA, () => {
    console.log("Servidor rodando em http://localhost:" + PORTA);
});