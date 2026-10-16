const Categoria = require("../models/Categoria");

const categorias = [];
let proximoId = 1;

function criarCategoria(dados) {
  const novaCategoria = new Categoria(dados.nome, dados.descricao);
  novaCategoria.id = proximoId;
  proximoId++;
  categorias.push(novaCategoria);
  return novaCategoria;
}

criarCategoria({ nome: "Tecnologia", descricao: "Livros sobre programação e desenvolvimento" });
criarCategoria({ nome: "Ficção", descricao: "Livros de histórias e romances fictícios" });

function buscarCategoriaPorId(id) {
  return categorias.find((cat) => cat.id === Number(id));
}

function atualizarCategoria(id, novosDados) {
  const categoria = buscarCategoriaPorId(id);
  if (!categoria) return null;

  if (novosDados.nome !== undefined) categoria.nome = novosDados.nome;
  return categoria;
}

function deletarCategoria(id) {
  const posicao = categorias.findIndex((cat) => cat.id === Number(id));
  if (posicao === -1) return false;

  categorias.splice(posicao, 1);
  return true;
}

function listarCategorias() {
  return categorias;
}

module.exports = {
  listarCategorias,
  buscarCategoriaPorId,
  criarCategoria,
  atualizarCategoria,
  deletarCategoria,
};
