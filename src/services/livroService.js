// // SERVICE (o "cozinheiro"): executa a logica de verdade.
// // Buscar, calcular, validar.

// const { db } = require("../config/db");

// function listarTodos() {
//   return livros;
// }

// async function buscarLivroPorId(id) {
//   const [linhas] = await db.query("SELECT * FROM livros WHERE id = ?", [id]);
//   return linhas[0];
// }

// // CORREÇÃO: Função assíncrona única e limpa para buscar do MySQL
// async function listarLivros(filtros) {
//   // Busca as linhas diretamente do banco de dados
//   const [linhas] = await db.query("SELECT * FROM livros");
//   let resultado = linhas;

//   if (filtros.autor) {
//     resultado = resultado.filter((livro) =>
//       livro.autor.toLowerCase().includes(filtros.autor.toLowerCase()),
//     );
//   }
//   if (filtros.precoMax) {
//     resultado = resultado.filter(
//       (livro) => livro.preco <= Number(filtros.precoMax),
//     );
//   }

//   return resultado;
// }

// async function criarLivro(dados) {
//   const [resultado] = await db.query(
//     "INSERT INTO livros (titulo, autor, preco, estoque) VALUES (?, ?, ?, ?)",
//     [dados.titulo, dados.autor, dados.preco, dados.estoque],
//   );
//   return await buscarLivroPorId(resultado.insertId);
// }

// async function atualizarLivro(id, dados) {
//   const [resultado] = await db.query(
//     "UPDATE livros SET titulo = ?, autor = ?, preco = ?, estoque = ? WHERE id = ?",
//     [dados.titulo, dados.autor, dados.preco, dados.estoque, id],
//   );
//   if (resultado.affectedRows === 0) return null;
//   return await buscarLivroPorId(id);
// }

// async function atualizarParcialLivro(id, dados) {
//   const livro = await buscarLivroPorId(id);
//   if (!livro) return null;

//   if (dados.titulo !== undefined) livro.titulo = dados.titulo;
//   if (dados.autor !== undefined) livro.autor = dados.autor;
//   if (dados.preco !== undefined) livro.preco = dados.preco;
//   if (dados.estoque !== undefined) livro.estoque = dados.estoque;
//   return await atualizarLivro(id, livro);
// }

// async function deletarLivro(id) {
//   const [resultado] = await db.query("DELETE FROM livros WHERE id = ?", [id]);
//   return resultado.affectedRows > 0;
// }

// // CORREÇÃO: Exportação movida para fora de qualquer função, no escopo global do arquivo
// module.exports = {
//   listarTodos,
//   listarLivros,
//   buscarLivroPorId,
//   criarLivro,
//   atualizarLivro,
//   atualizarParcialLivro,
//   deletarLivro,
// };

// SERVICE (o "cozinheiro"): executa a lógica de verdade.
const { db } = require("../config/db");

async function buscarLivroPorId(id) {
  const [linhas] = await db.query("SELECT * FROM livros WHERE id = ?", [id]);
  if (linhas.length === 0) return null;
  return linhas[0];
}

async function listarLivros(filtros) {
  const [linhas] = await db.query("SELECT * FROM livros");
  let resultado = linhas;

  if (filtros && filtros.autor) {
    resultado = resultado.filter((livro) =>
      livro.autor.toLowerCase().includes(filtros.autor.toLowerCase()),
    );
  }
  if (filtros && filtros.precoMax) {
    resultado = resultado.filter(
      (livro) => livro.preco <= Number(filtros.precoMax),
    );
  }

  return resultado;
}

async function criarLivro(dados) {
  const [resultado] = await db.query(
    "INSERT INTO livros (titulo, autor, preco, estoque) VALUES (?, ?, ?, ?)",
    [dados.titulo, dados.autor, dados.preco, dados.estoque],
  );
  return await buscarLivroPorId(resultado.insertId);
}

async function atualizarLivro(id, dados) {
  const [resultado] = await db.query(
    "UPDATE livros SET titulo = ?, autor = ?, preco = ?, estoque = ? WHERE id = ?",
    [dados.titulo, dados.autor, dados.preco, dados.estoque, id],
  );
  if (resultado.affectedRows === 0) return null;
  return await buscarLivroPorId(id);
}

async function atualizarParcialLivro(id, dados) {
  const livro = await buscarLivroPorId(id);
  if (!livro) return null;

  if (dados.titulo !== undefined) livro.titulo = dados.titulo;
  if (dados.autor !== undefined) livro.autor = dados.autor;
  if (dados.preco !== undefined) livro.preco = dados.preco;
  if (dados.estoque !== undefined) livro.estoque = dados.estoque;

  return await atualizarLivro(id, livro);
}

async function deletarLivro(id) {
  const [resultado] = await db.query("DELETE FROM livros WHERE id = ?", [id]);
  return resultado.affectedRows > 0;
}

module.exports = {
  listarLivros,
  buscarLivroPorId,
  criarLivro,
  atualizarLivro,
  atualizarParcialLivro,
  deletarLivro,
};
