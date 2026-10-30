// SERVICE (o "cozinheiro"): executa a logica de verdade.
// Buscar, calcular, validar.

const Livro = require("../models/Livro");
const { db } = require("../config/db");

const livros = [];

function listarTodos() {
  return livros;
}

async function buscarLivroPorId(id) {
  const [linhas] = await db.query("SELECT * FROM livros WHERE id = ?", [id]);
  return linhas[0];
}

// CORREÇÃO: Função assíncrona única e limpa para buscar do MySQL
async function listarLivros(filtros) {
  // Busca as linhas diretamente do banco de dados
  const [linhas] = await db.query("SELECT * FROM livros");
  let resultado = linhas;

  if (filtros.autor) {
    resultado = resultado.filter((livro) =>
      livro.autor.toLowerCase().includes(filtros.autor.toLowerCase()),
    );
  }
  if (filtros.precoMax) {
    resultado = resultado.filter(
      (livro) => livro.preco <= Number(filtros.precoMax),
    );
  }

  return resultado;
}

function criarLivro(dados) {
  const novoLivro = new Livro(
    dados.titulo,
    dados.autor,
    dados.preco,
    dados.estoque,
  );
  livros.push(novoLivro); // Adiciona um no final
  return novoLivro;
}

function atualizarLivro(id, dados) {
  const livro = livros.find((livro) => livro.id === Number(id));
  if (!livro) return null;

  livro.titulo = dados.titulo;
  livro.autor = dados.autor;
  livro.preco = dados.preco;
  livro.estoque = dados.estoque;
  return livro;
}

function atualizarParcialLivro(id, dados) {
  const livro = livros.find((livro) => livro.id === Number(id));
  if (!livro) return null;

  if (dados.titulo !== undefined) livro.titulo = dados.titulo;
  if (dados.autor !== undefined) livro.autor = dados.autor;
  if (dados.preco !== undefined) livro.preco = dados.preco;
  if (dados.estoque !== undefined) livro.estoque = dados.estoque;
  return livro;
}

function deletarLivro(id) {
  const posicao = livros.findIndex((livro) => livro.id === Number(id));
  if (posicao === -1) return false;

  livros.splice(posicao, 1);
  return true;
}

// CORREÇÃO: Exportação movida para fora de qualquer função, no escopo global do arquivo
module.exports = {
  listarTodos,
  listarLivros,
  buscarLivroPorId,
  criarLivro,
  atualizarLivro,
  atualizarParcialLivro,
  deletarLivro,
};
