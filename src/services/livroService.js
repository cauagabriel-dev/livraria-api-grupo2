// SERVICE (o "cozinheiro"): executa a lógica de verdade.
const { db } = require("../config/db");

async function buscarLivroPorId(id) {
  const [linhas] = await db.query(
    "SELECT livros.*, categorias.nome AS categoria FROM livros LEFT JOIN categorias ON livros.categoria_id = categorias.id WHERE livros.id = ?",
    [id],
  );
  if (linhas.length === 0) return null;
  return linhas[0];
}

async function listarLivros(filtros = {}) {
  let sql =
    "SELECT livros.*, categorias.nome AS categoria FROM livros LEFT JOIN categorias ON livros.categoria_id = categorias.id WHERE 1=1";
  const params = [];

  // Filtro por Autor direto no MySQL
  if (filtros.autor) {
    sql += " AND LOWER(livros.autor) LIKE ?";
    params.push(`%${filtros.autor.toLowerCase()}%`);
  }

  // Filtro por Preço Máximo diretamente no MySQL
  if (filtros.precoMax) {
    sql += " AND livros.preco <= ?";
    params.push(Number(filtros.precoMax));
  }

  const [linhas] = await db.query(sql, params);
  return linhas;
}

function validarLivro(dados, completo) {
  if (!dados) return "Envie os dados do livro em JSON";

  if (completo) {
    if (!dados.titulo) return "O titulo e obrigatorio";
    if (!dados.autor) return "O autor e obrigatorio";
    if (dados.preco === undefined) return "O preco e obrigatorio";
    if (dados.estoque === undefined) return "O estoque e obrigatorio";
  }

  if (
    dados.categoria_id !== undefined &&
    dados.categoria_id !== null &&
    typeof dados.categoria_id !== "number"
  ) {
    return "O categoria_id deve ser um numero";
  }

  return null;
}

async function criarLivro(dados) {
  const [resultado] = await db.query(
    "INSERT INTO livros (titulo, autor, preco, estoque, categoria_id) VALUES (?, ?, ?, ?, ?)",
    [
      dados.titulo,
      dados.autor,
      dados.preco,
      dados.estoque,
      dados.categoria_id || null,
    ],
  );
  return await buscarLivroPorId(resultado.insertId);
}

async function atualizarLivro(id, dados) {
  const [resultado] = await db.query(
    "UPDATE livros SET titulo = ?, autor = ?, preco = ?, estoque = ?, categoria_id = ? WHERE id = ?",
    [
      dados.titulo,
      dados.autor,
      dados.preco,
      dados.estoque,
      dados.categoria_id || null,
      id,
    ],
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
  if (dados.categoria_id !== undefined) livro.categoria_id = dados.categoria_id;

  return await atualizarLivro(id, livro);
}

async function deletarLivro(id) {
  const [resultado] = await db.query("DELETE FROM livros WHERE id = ?", [id]);
  return resultado.affectedRows > 0;
}

module.exports = {
  validarLivro,
  listarLivros,
  buscarLivroPorId,
  criarLivro,
  atualizarLivro,
  atualizarParcialLivro,
  deletarLivro,
};
