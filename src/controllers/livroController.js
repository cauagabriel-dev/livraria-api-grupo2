// CONTROLLER (o "chef"): decide o que fazer com cada pedido.
// Recebe da rota, chama o service certo, devolve a resposta.
// Implementacao chega no Bloco 3.

const livroService = require("../services/livroService");

function listar(req, res) {
  const filtros = req.query;
  const livros = livroService.listarLivros(filtros);

  // Injeta o ID dinâmico baseado na posição para o Postman ler corretamente
  const livrosComId = livros.map((livro, indice) => ({
    id: indice,
    ...livro,
  }));

  res.status(200).json(livrosComId);
}

function buscarPorIndice(req, res) {
  const indice = req.params.indice;
  const livro = livroService.buscarLivroPorIndice(indice);

  if (!livro) {
    res.status(404).json({ erro: "Livro não encontrado" });
    return;
  }

  // Retorna o livro com o ID idêntico ao índice que o Postman chamou
  res.json({
    id: Number(indice),
    ...livro,
  });
}

function criar(req, res) {
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

  const novoLivro = livroService.criarLivro(req.body);
  const todos = livroService.listarTodos();
  const idGerado = todos.length - 1; // O ID vira exatamente a posição dele no array

  res.status(201).json({
    id: idGerado,
    ...novoLivro,
  });
}

function atualizar(req, res) {
  const livro = livroService.atualizarLivro(req.params.indice, req.body);
  if (!livro) {
    res.status(404).json({ erro: "Livro não encontrado" });
    return;
  }
  res.status(200).json({ id: Number(req.params.indice), ...livro });
}

function atualizarParcial(req, res) {
  const { estoque } = req.body;

  // Se mandarem estoque menor que zero, barra com status 400
  if (estoque !== undefined && estoque < 0) {
    res.status(400).json({ erro: "Estoque não pode ser negativo" });
    return;
  }

  const livro = livroService.atualizarParcialLivro(req.params.indice, req.body);
  if (!livro) {
    res.status(404).json({ erro: "Livro não encontrado" });
    return;
  }
  res.status(200).json({ id: Number(req.params.indice), ...livro });
}

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
