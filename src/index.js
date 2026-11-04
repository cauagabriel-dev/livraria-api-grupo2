require('dotenv').config(); // <-- LINHA ESTRUTURAL: Carrega o arquivo .env
const express = require('express');
const routes = require('./routes/index'); 
const tratarErros = require('./middlewares/tratarErros'); 

const app = express();

app.use(express.json());

// Ativa as rotas
app.use(routes);

// Ativa o tratador de erros por último
app.use(tratarErros);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
