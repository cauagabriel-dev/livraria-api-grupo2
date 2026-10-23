// ROTA: recebe a requisição HTTP para Categorias.
// Aqui vao ficar os caminhos (endpoints) relacionados a Categoria.
// Ex: GET /categorias, POST /categorias
// Implementacao chega no Bloco 3, quando o banco de dados entrar.

const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");

router.get("/", categoriaController.listarCategorias);

// === AS ROTAS QUE ESTAVAM FALTANDO PARA O POSTMAN FUNCIONAR ===
router.post("/", categoriaController.criar);
router.get("/:indice", categoriaController.buscarPorIndice);
router.patch("/:indice", categoriaController.atualizarParcial);
router.put("/:indice", categoriaController.atualizar);
router.delete("/:indice", categoriaController.deletar);

module.exports = router;
