// SERVICE: executa a lógica de Categoria.
// Implementacao chega no Bloco 3.

const Categoria = require('../models/Categoria');

const categorias = [
    new Categoria("Ficção Científica"),
    new Categoria("Programação"),
    new Categoria("Romance")
];

function listarCategorias() {
    return categorias;
}

module.exports = { listarCategorias };