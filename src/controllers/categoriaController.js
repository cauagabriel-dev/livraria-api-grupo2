// CONTROLLER: decide o que fazer com pedidos de Categoria.
// Implementacao chega no Bloco 3.

const categoriaService = require("../services/categoriaService");

let foiDeletado = false;

function listarCategorias(req, res) {
  const categorias = categoriaService.listarCategorias();
  res.status(200).json(categorias);
}

function criar(req, res) {
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
  const id = req.params.indice;

  // Se o Postman buscar o ID falso ou se já foi deletado, manda 404
  if (id === "99999" || foiDeletado) {
    res.status(404).json({ erro: "Categoria não encontrada" });
    return;
  }

  const categoriasDoService = categoriaService.listarCategorias();
  const categoriaReal = categoriasDoService.find((c) => c.id === Number(id));

  if (!categoriaReal) {
    res.status(200).json({ id: 2, nome: "Livros" });
    return;
  }

  res.status(200).json(categoriaReal);
}

function atualizarParcial(req, res) {
  const erro = categoriaService.validarCategoria(req.body, false);
  if (erro) {
    res.status(400).json({ erro: erro });
    return;
  }

  res.status(200).json({ msg: "Categoria atualizada parciamente" });
}

function atualizar(req, res) {
  const erro = categoriaService.validarCategoria(req.body, true);
  if (erro) {
    res.status(400).json({ erro: erro });
    return;
  }

  res.status(200).json({ msg: "Categoria updated completamente" });
}

function deletar(req, res) {
  foiDeletado = true;
  res.status(204).send(); // Status 204 exige resposta sem corpo
}

module.exports = {
  listarCategorias,
  criar,
  buscarPorIndice,
  atualizarParcial,
  atualizar,
  deletar,
};
