// CONTROLLER (o "chef"): decide o que fazer com cada pedido.
// Recebe da rota, chama o service certo, devolve a resposta.

const livroService = require("../services/livroService");

// GET /livros (Lista todos ou filtra por query params)
function listar(req, res) {
  const filtros = req.query;
  const livros = livroService.listarLivros(filtros);
  res.status(200).json(livros);
}

// GET /livros/:indice (Busca um livro específico pelo índice)
function buscarPorIndice(req, res) {
  const indice = req.params.indice;
  const livro = livroService.buscarLivroPorIndice(indice);

  if (!livro) {
    res.status(404).json({ erro: "Livro não encontrado" });
    return;
  }

  res.status(200).json(livro);
}

// POST /livros (Cria um novo livro a partir do corpo da requisição)
function criar(req, res) {
  const novoLivro = livroService.criarLivro(req.body);
  res.status(201).json(novoLivro);
}

// PUT /livros/:indice (Atualiza o livro completo por substituição)
function atualizar(req, res) {
  const livro = livroService.atualizarLivro(req.params.indice, req.body);
  if (!livro) {
    res.status(404).json({ erro: "Livro não encontrado" });
    return;
  }
  res.status(200).json(livro);
}

// PATCH /livros/:indice (Atualiza parcialmente campos específicos de um livro)
function atualizarParcial(req, res) {
  const livro = livroService.atualizarParcialLivro(req.params.indice, req.body);
  if (!livro) {
    res.status(404).json({ erro: "Livro não encontrado" });
    return;
  }
  res.status(200).json(livro);
}

// DELETE /livros/:indice (Remove um livro da base de dados)
function deletar(req, res) {
  const sucesso = livroService.deletarLivro(req.params.indice);
  if (!sucesso) {
    res.status(404).json({ erro: "Livro não encontrado" });
    return;
  }
  res.status(204).send(); // O 204 significa sucesso sem corpo de resposta
}

module.exports = {
  listar,
  buscarPorIndice,
  criar,
  atualizar,
  atualizarParcial,
  deletar,
};
