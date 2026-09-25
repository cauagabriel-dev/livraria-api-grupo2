const livroService = require("./src/services/livroService");

console.log("=== 1. LISTA INICIAL ===");
console.log(livroService.listarLivros());

console.log("\n=== 2. TESTANDO PATCH (Atualização Parcial) ===");
const livroAtualizado = livroService.atualizarParcialLivro(0, { preco: 110.0 });
console.log("Livro após PATCH:", livroAtualizado);

console.log("\n=== 3. TESTANDO DELETE ===");
const deletado = livroService.deletarLivro(1);
console.log("Foi deletado?", deletado);

console.log("\n=== 4. LISTA FINAL DE LIVROS ===");
console.log(livroService.listarLivros());
