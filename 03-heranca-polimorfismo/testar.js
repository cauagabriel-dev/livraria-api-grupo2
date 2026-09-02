const LivroFisico = require("./LivroFisico");
const LivroDigital = require("./LivroDigital");

const l1 = new LivroFisico("Clean Code", "Robert C. Martin", 89.90, 12, 0.6);
const l2 = new LivroDigital("Eloquent JavaScript", "Marijn Haverbeke", 45.00, 999, 8);

l1.descrever();
console.log("Frete: R$ " + l1.calcularFrete().toFixed(2));

l2.descrever();
console.log("Frete: R$ " + l2.calcularFrete().toFixed(2));

console.log("");
console.log("=== POLIMORFISMO ==="); //O mesmo método, com o mesmo nome, mas, em dois conceitos diferentes
console.log("Frete do Livro Físico: R$ " + l1.calcularFrete().toFixed(2));
console.log("Frete do Livro Digital: R$ " + l2.calcularFrete().toFixed(2));