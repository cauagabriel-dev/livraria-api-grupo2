const categoriaService = require("../services/categoriaService");

function listar(req, res) {
  const categorias = categoriaService.listarCategorias();
  res.status(200).json(categorias);
}

function buscarPorId(req, res) {
  const id = req.params.id;
  const categoria = categoriaService.buscarCategoriaPorId(id);

  if (!categoria) {
    res.status(404).json({ erro: "Categoria não encontrada" });
    return;
  }

  res.status(200).json(categoria);
}

function criar(req, res) {
  const novaCategoria = categoriaService.criarCategoria(req.body);
  res.status(201).json(novaCategoria);
}

function atualizar(req, res) {
  const categoria = categoriaService.atualizarCategoria(req.params.id, req.body);
  if (!categoria) {
    res.status(404).json({ erro: "Categoria não encontrada" });
    return;
  }
  res.status(200).json(categoria);
}

function deletar(req, res) {
  const sucesso = categoriaService.deletarCategoria(req.params.id);
  if (!sucesso) {
    res.status(404).json({ erro: "Categoria não encontrada" });
    return;
  }
  res.status(204).send();
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  deletar,
};
