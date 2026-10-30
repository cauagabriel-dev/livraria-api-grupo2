// CONTROLLER (o "chef"): decide o que fazer com cada pedido.
// Recebe da rota, chama o service certo, devolve a resposta.

const livroService = require("../services/livroService");

async function listar(req, res) {
  const filtros = req.query;
  const livros = await livroService.listarLivros(filtros);
  res.status(200).json(livros);
}

async function buscarPorId(req, res) {
  const id = req.params.id;
  const livro = await livroService.buscarLivroPorId(id);

  if (!livro) {
    res.status(404).json({ erro: "Livro não encontrado" });
    return;
  }

  res.json(livro);
};


async function criar(req, res) {
  // Trava para interceptar requisições sem Content-Type ou vazias e mandar 400
  if (!req.body || Object.keys(req.body).length === 0) {
    res
      .status(400)
      .json({ erro: "Falta o Content-Type ou o corpo está vazio" });
    return;
  }

  const { titulo, preco, estoque } = req.body;

  // Validações de segurança para a pasta de Erros
  if (!titulo || titulo.trim() === "") {
    res.status(400).json({ erro: "Título é obrigatório" });
    return;
  }

  if (typeof preco !== "number") {
    res.status(400).json({ erro: "Preço deve ser um número" });
    return;
  }

  if (preco < 0) {
    res.status(400).json({ erro: "Preço não pode ser negativo" });
    return;
  }

  const novoLivro = await livroService.criarLivro(req.body);
  const todos = livroService.listarTodos();
  const idGerado = todos.length - 1; // O ID vira exatamente a posição dele no array

  res.status(201).json({
    id: idGerado,
    ...novoLivro,
  });
}

async function atualizar(req, res) {
  const indice = req.params.indice;

  // TRAVA DE SEGURANÇA: Se o índice não for um número válido, retorna 400
  if (isNaN(indice)) {
    res.status(400).json({ erro: "O id enviado deve ser um número válido" });
    return;
  }

  const livro = await livroService.atualizarLivro(indice, req.body);
  if (!livro) {
    res.status(404).json({ erro: "Livro não encontrado" });
    return;
  }
  res.status(200).json({ id: Number(indice), ...livro });
}

async function atualizarParcial(req, res) {
  const indice = req.params.indice;
  const { estoque } = req.body;

  // TRAVA DE SEGURANÇA: Se o índice não for um número válido, retorna 400
  if (isNaN(indice)) {
    res.status(400).json({ erro: "O id enviado deve ser um número válido" });
    return;
  }

  // Se mandarem estoque menor que zero, barra com status 400
  if (estoque !== undefined && estoque < 0) {
    res.status(400).json({ erro: "Estoque não pode ser negativo" });
    return;
  }

  const livro = await livroService.atualizarParcialLivro(indice, req.body);
  if (!livro) {
    res.status(404).json({ erro: "Livro não encontrado" });
    return;
  }
  res.status(200).json({ id: Number(indice), ...livro });
}

async function deletar(req, res) {
  const indice = req.params.indice;

  // TRAVA DE SEGURANÇA: Se o índice não for um número válido, retorna 400
  if (isNaN(indice)) {
    res.status(400).json({ erro: "O id enviado deve ser um número válido" });
    return;
  }

  const sucesso = await livroService.deletarLivro(indice);
  if (!sucesso) {
    res.status(404).json({ erro: "Livro não encontrado" });
    return;
  }
  res.status(204).send(); // O 204 significa sucesso sem corpo de resposta
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  atualizarParcial,
  deletar,
};
