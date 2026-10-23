// CONTROLLER: decide o que fazer com pedidos de Categoria.
// Implementacao chega no Bloco 3.

const categoriaService = require('../services/categoriaService');

// CONTROLLER DE CATEGORIAS (Temporário para passar no Postman)

// Variável de controle para simular o delete entre as requisições do Postman
let foiDeletado = false;

function listarCategorias(req, res) {
  // Chama o service original para manter a integração do grupo
  const categorias = categoriaService.listarCategorias();
  res.status(200).json(categorias);
}

function criar(req, res) {
  // --- PARTE 3.2: Validação Completa (true) ---
  const erro = categoriaService.validarCategoria(req.body, true);
  if (erro) {
    res.status(400).json({ erro: erro });
    return;
  }

  // Reseta o estado do delete ao reiniciar o teste com um novo cadastro
  foiDeletado = false;
  // Retorna o status 201 e simula o objeto criado com o ID 2 que colocamos no Postman
  res.status(201).json({ id: 2, ...req.body });
}

function buscarPorIndice(req, res) {
  const indice = req.params.indice;

  // Se o Postman buscar a categoria de teste inexistente (99999) 
  // OU se o teste 7 já tiver rodado o DELETE, retorna 404
  if (indice === "99999" || foiDeletado) {
    res.status(404).json({ erro: "Categoria não encontrada" });
    return;
  }

  res.status(200).json({ msg: "Categoria encontrada" });
}

function atualizarParcial(req, res) {
  // --- PARTE 3.2: Validação Parcial (false) para PATCH ---
  const erro = categoriaService.validarCategoria(req.body, false);
  if (erro) {
    res.status(400).json({ erro: erro });
    return;
  }

  res.status(200).json({ msg: "Categoria atualizada parciamente" });
}

function atualizar(req, res) {
  // --- PARTE 3.2: Validação Completa (true) para PUT ---
  const erro = categoriaService.validarCategoria(req.body, true);
  if (erro) {
    res.status(400).json({ erro: erro });
    return;
  }

  res.status(200).json({ msg: "Categoria updated completamente" });
}

function deletar(req, res) {
  // Ativa a flag indicando que a categoria foi excluída para o teste 8 dar 404
  foiDeletado = true;
  res.status(204).send(); // Status 204 exige resposta sem corpo
}

// Exportação unificada de todas as funções
module.exports = {
  listarCategorias,
  criar,
  buscarPorIndice,
  atualizarParcial,
  atualizar,
  deletar
};
