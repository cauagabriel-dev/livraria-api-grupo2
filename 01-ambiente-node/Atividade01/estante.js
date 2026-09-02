// ===== LIVRO 1 =====

const livro1 = {
  titulo: "Clean Code",
  autor: "Robert C. Martin",
  preco: 89.9,
  estoque: 12,
};

console.log("-----------------------------------");

// ===== LIVRO 2 — TROQUE os quatro valores abaixo =====
const livro2 = {
  titulo: "Memórias Póstumas de Brás Cubas",
  autor: "Machado de Assis",
  preco: 62.9,
  estoque: 120,
};

console.log("-----------------------------------");

const livro3 = {
  titulo: "O Pequeno Príncipe",
  autor: "Antoine de Saint-Exupéry",
  preco: 30.0,
  estoque: 80,
};

// Esta linha entrega os dois livros para os outros arquivos usarem
module.exports = { livro1, livro2, livro3 };