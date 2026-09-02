const LivroFisico = require("./LivroFisico");
// const LivroDigital = require("./LivroDigital");

const livro1 = new LivroFisico("Clean Code", "Robert C. Martin", 89.90, 12, 0.6);
// const livro2 = new LivroDigital("Eloquent JavaScript", "Marijn Haverbeke", 45.00, 999, 8);

livro1.descrever();
console.log("Frete: R$ " + livro1.calcularFrete().toFixed(2));

// livro2.descrever();
// console.log("Frete: R$ " + livro2.calcularFrete().toFixed(2));

// console.log("");
// console.log("=== POLIMORFISMO ==="); //O mesmo método, com o mesmo nome, mas, em dois conceitos diferentes
// console.log("Frete do Livro Físico: R$ " + livro1.calcularFrete().toFixed(2));
// console.log("Frete do Livro Digital: R$ " + livro2.calcularFrete().toFixed(2));