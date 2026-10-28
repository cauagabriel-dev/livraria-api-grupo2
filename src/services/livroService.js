// SERVICE (o "cozinheiro"): executa a logica de verdade.
// Buscar, calcular, validar.

const Livro = require("../models/Livro");
// Importa a conexão pool do MySQL
const { db } = require("../config/db");

// Array temporário em memória (será substituído por completo nas próximas aulas)
const livros = [
  new Livro("Clean Code", "Robert C. Martin", 89.9, 12),
  new Livro("Eloquent JavaScript", "Marijn Haverbeke", 45.0, 20),
];

function listarTodos() {
  return livros;
}

function buscarLivroPorIndice(indice) {
  return livros[indice];
}

// Transformada em ASSÍNCRONA para buscar os dados direto do MySQL
async function listarLivros(filtros) {
  // O "await" faz a API esperar o MySQL responder a query.
  // [linhas] recebe o array de registros vindo da tabela de livros.
  const [linhas] = await db.query("SELECT * FROM livros");
  
  let resultado = linhas;

  // Aplica os filtros sobre os dados vindos do banco de dados
  if (filtros) {
    if (filtros.autor) {
      resultado = resultado.filter((livro) =>
        livro.autor.toLowerCase().includes(filtros.autor.toLowerCase())
      );
    }

    if (filtros.precoMax) {
      resultado = resultado.filter(
        (livro) => livro.preco <= Number(filtros.precoMax)
      );
    }

    if (filtros.estoqueMin) {
      resultado = resultado.filter(
        (livro) => livro.estoque >= Number(filtros.estoqueMin)
      );
    }
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

function atualizarLivro(indice, dados) {
  const livro = livros[indice];
  if (!livro) return null;

  livro.titulo = dados.titulo;
  livro.autor = dados.autor;
  livro.preco = dados.preco;
  livro.estoque = dados.estoque;
  return livro;
}

function atualizarParcialLivro(indice, dados) {
  const livro = livros[indice];
  if (!livro) return null;

  if (dados.titulo !== undefined) livro.titulo = dados.titulo;
  if (dados.autor !== undefined) livro.autor = dados.autor;
  if (dados.preco !== undefined) livro.preco = dados.preco;
  if (dados.estoque !== undefined) livro.estoque = dados.estoque;
  return livro;
}

function deletarLivro(indice) {
  const livro = livros[indice];
  if (!livro) return false;

  livros.splice(indice, 1);
  return true;
}

module.exports = {
  listarTodos,
  listarLivros,
  buscarLivroPorIndice,
  criarLivro,
  atualizarLivro,
  atualizarParcialLivro,
  deletarLivro,
};
