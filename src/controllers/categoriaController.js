// CONTROLLER: decide o que fazer com pedidos de Categoria.
// Implementacao chega no Bloco 3.

const categoriaService = require('../services/categoriaService');

function listarCategorias(req, res) {
  const categorias = categoriaService.listarCategorias();
  res.json(categorias);
}

module.exports = { listarCategorias };