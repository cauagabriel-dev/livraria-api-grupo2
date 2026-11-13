// CONTROLLER: decide o que fazer com pedidos de Categoria.

const categoriaService = require("../services/categoriaService");

async function listarCategorias(req, res) {
  const categorias = await categoriaService.listarCategorias(req.query);
  res.status(200).json(categorias);
}

async function buscarPorId(req, res) {
  const id = Number(req.params.id);
  const categoria = await categoriaService.buscarCategoriaPorId(id);

  if (!categoria) {
    res.status(404).json({ erro: "Categoria não encontrada" });
    return;
  }

  res.status(200).json(categoria);
}

async function criar(req, res) {
  const erro = categoriaService.validarCategoria(req.body, true);
  if (erro) {
    res.status(400).json({ erro: erro });
    return;
  }

  const novaCategoria = await categoriaService.criarCategoria(req.body);
  res.status(201).json(novaCategoria);
}

async function atualizar(req, res) {
  const id = Number(req.params.id);
  const erro = categoriaService.validarCategoria(req.body, true);
  if (erro) {
    res.status(400).json({ erro: erro });
    return;
  }

  const atualizada = await categoriaService.atualizarCategoria(id, req.body);
  if (!atualizada) {
    res.status(404).json({ erro: "Categoria não encontrada" });
    return;
  }

  res.status(200).json(atualizada);
}

async function atualizarParcial(req, res) {
  const id = Number(req.params.id);
  const erro = categoriaService.validarCategoria(req.body, false);
  if (erro) {
    res.status(400).json({ erro: erro });
    return;
  }

  const atualizada = await categoriaService.atualizarParcialCategoria(
    id,
    req.body,
  );
  if (!atualizada) {
    res.status(404).json({ erro: "Categoria não encontrada" });
    return;
  }

  res.status(200).json(atualizada);
}

async function deletar(req, res) {
  const id = Number(req.params.id);
  const deletada = await categoriaService.deletarCategoria(id);

  if (!deletada) {
    res.status(404).json({ erro: "Categoria não encontrada" });
    return;
  }

  res.status(204).send();
}

module.exports = {
  listarCategorias,
  criar,
  buscarPorId,
  atualizarParcial,
  atualizar,
  deletar,
};
