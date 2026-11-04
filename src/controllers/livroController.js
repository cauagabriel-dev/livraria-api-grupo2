// CONTROLLER (o "chef"): decide o que fazer com cada pedido.
const livroService = require("../services/livroService");

async function listar(req, res, next) {
  try {
    const filtros = req.query;
    const livros = await livroService.listarLivros(filtros);
    res.status(200).json(livros);
  } catch (error) {
    next(error);
  }
}

async function buscarPorId(req, res, next) {
  const id = req.params.id || req.params.indice;

  // 1º: Valida se o ID é realmente um número
  if (isNaN(id)) {
    res.status(400).json({ erro: "O id enviado deve ser um número válido" });
    return;
  }

  try {
    // 2º: Só vai para o banco se passar na validação acima
    const livro = await livroService.buscarLivroPorId(id);

    if (!livro) {
      res.status(404).json({ erro: "Livro não encontrado" });
      return;
    }

    res.json(livro);
  } catch (error) {
    next(error);
  }
}

async function criar(req, res, next) {
  if (!req.body || Object.keys(req.body).length === 0) {
    res
      .status(400)
      .json({ erro: "Falta o Content-Type ou o corpo está vazio" });
    return;
  }

  const { titulo, preco, estoque, autor } = req.body;

  if (!titulo || titulo.trim() === "" || !autor || autor.trim() === "") {
    res.status(400).json({ erro: "Título e Autor são obrigatórios" });
    return;
  }

  if (typeof preco !== "number" || preco < 0) {
    res.status(400).json({ erro: "Preço inválido ou negativo" });
    return;
  }

  try {
    const novoLivro = await livroService.criarLivro(req.body);
    res.status(201).json(novoLivro);
  } catch (error) {
    // CORREÇÃO AQUI: repassa o erro do banco para o nosso tratarErros.js mapear o status correto!
    next(error);
  }
}

async function atualizar(req, res, next) {
  const id = req.params.id || req.params.indice;

  if (isNaN(id)) {
    res.status(400).json({ erro: "O id enviado deve ser um número válido" });
    return;
  }

  try {
    const livro = await livroService.atualizarLivro(id, req.body);
    if (!livro) {
      res.status(404).json({ erro: "Livro não encontrado" });
      return;
    }
    res.status(200).json(livro);
  } catch (error) {
    next(error);
  }
}

async function atualizarParcial(req, res, next) {
  const id = req.params.id || req.params.indice;
  const { estoque } = req.body;

  if (isNaN(id)) {
    res.status(400).json({ erro: "O id enviado deve ser um número válido" });
    return;
  }

  if (estoque !== undefined && estoque < 0) {
    res.status(400).json({ erro: "Estoque não pode ser negativo" });
    return;
  }

  try {
    const livro = await livroService.atualizarParcialLivro(id, req.body);
    if (!livro) {
      res.status(404).json({ erro: "Livro não encontrado" });
      return;
    }
    res.status(200).json(livro);
  } catch (error) {
    next(error);
  }
}

async function deletar(req, res, next) {
  const id = req.params.id || req.params.indice;

  if (isNaN(id)) {
    res.status(400).json({ erro: "O id enviado deve ser um número válido" });
    return;
  }

  try {
    const sucesso = await livroService.deletarLivro(id);
    if (!sucesso) {
      res.status(404).json({ erro: "Livro não encontrado" });
      return;
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  atualizarParcial,
  deletar,
};
