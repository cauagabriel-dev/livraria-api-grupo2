// ROTA: recebe a requisição HTTP para Categorias.
// Aqui vao ficar os caminhos (endpoints) relacionados a Categoria.
// Ex: GET /categorias, POST /categorias
// Implementacao chega no Bloco 3, quando o banco de dados entrar.

const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

router.get('/', categoriaController.listarCategorias);

module.exports = router;