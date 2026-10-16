const Livro = require("../models/Livro");

const livros = [];
let proximoId = 1;

function criarLivro(dados) {
  const novoLivro = new Livro(dados.titulo, dados.autor, dados.preco, dados.estoque, dados.categoria);
  novoLivro.id = proximoId;
  proximoId++;
  livros.push(novoLivro);
  return novoLivro;
}

criarLivro({ titulo: "Clean Code", autor: "Robert C. Martin", preco: 89.9, estoque: 12, categoria: { nome: "Tecnologia" } });
criarLivro({ titulo: "Eloquent JavaScript", autor: "Marijn Haverbeke", preco: 45.0, estoque: 20, categoria: { nome: "Tecnologia" } });

function buscarLivroPorId(id) {
  return livros.find((livro) => livro.id === Number(id));
}

function atualizarLivro(id, novosDados) {
  const livro = buscarLivroPorId(id);
  if (!livro) return null;

  livro.titulo = novosDados.titulo;
  livro.autor = novosDados.autor;
  livro.preco = novosDados.preco;
  livro.estoque = novosDados.estoque;
  return livro;
}

function atualizarParcialLivro(id, novosDados) {
  const livro = buscarLivroPorId(id);
  if (!livro) return null;

  if (novosDados.titulo !== undefined) livro.titulo = novosDados.titulo;
  if (novosDados.autor !== undefined) livro.autor = novosDados.autor;
  if (novosDados.preco !== undefined) livro.preco = novosDados.preco;
  if (novosDados.estoque !== undefined) livro.estoque = novosDados.estoque;
  return livro;
}

function deletarLivro(id) {
  const posicao = livros.findIndex((livro) => livro.id === Number(id));
  if (posicao === -1) return false;
  
  livros.splice(posicao, 1);
  return true;
}

function listarLivros(filtros) {
  return livros;
}

module.exports = {
  listarLivros,
  buscarLivroPorId,
  criarLivro,
  atualizarLivro,
  atualizarParcialLivro,
  deletarLivro,
};
