// SERVICE: executa a lógica de Categoria.
// Implementacao chega no Bloco 3.

const Categoria = require("../models/Categoria");

const categorias = [
  new Categoria("Ficção Científica"),
  new Categoria("Programação"),
  new Categoria("Romance"),
];

function listarCategorias() {
  return categorias;
}

function validarCategoria(dados, completo) {
  if (!dados) return "Envie os dados da categoria em JSON";

  if (completo && !dados.nome) return "O nome e obrigatorio";

  if (
    dados.nome !== undefined &&
    (typeof dados.nome !== "string" || dados.nome.length < 3)
  ) {
    return "O nome deve ter pelo menos 3 letras";
  }

  return null;
}

// CORREÇÃO: Exporte todas as funções juntas em um único objeto!
module.exports = {
  listarCategorias,
  validarCategoria,
  // Se tiver outras funções (ex: criarCategoria), adicione-as aqui também
};
