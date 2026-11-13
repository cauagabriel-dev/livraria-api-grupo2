// ROTA: recebe a requisição HTTP para Categorias.
// Aqui vao ficar os caminhos (endpoints) relacionados a Categoria.
// Ex: GET /categorias, POST /categorias

const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");

router.get("/", categoriaController.listarCategorias);
router.post("/", categoriaController.criar);
router.get("/:id", categoriaController.buscarPorId);
router.patch("/:id", categoriaController.atualizarParcial);
router.put("/:id", categoriaController.atualizar);
router.delete("/:id", categoriaController.deletar);

module.exports = router;
