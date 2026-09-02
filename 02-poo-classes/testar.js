const Livro = require("./Livro");

const livro1 = new Livro ("Clean Code", "Robert C. Martin", 89.9, 12);
const livro2 = new Livro("O Pequeno Príncipe", "Saint-Exupéry", 34.9, 5);

// console.log(livro1.titulo);
// console.log(livro2.titulo);

// livro1.descrever();

// const valor = livro1.valorEmEstoque();
// console.log("Valor total em estoque: R$ " + valor);

// console.log(livro1.preco);
// console.log(livro1.estoque);

livro1.preco = 99.9; // válido → aceita
console.log(livro1.preco);

livro1.preco = 50; // inválido → recusa
console.log(livro1.preco);

const Categoria = require("./Categoria");

console.log("");
console.log("===== CATEGORIAS =====");
console.log("");

const cat1 = new Categoria("Tecnologia", "livros sobre programacao");
const cat2 = new Categoria("Literatura", "romances e contos");

cat1.descrever();
console.log("");
cat2.descrever();
console.log("");
console.log("----- testando o setter -----");
cat1.nome = "TI"; // invalido: menos de 3 letras
console.log("Nome agora: " + cat1.nome);
cat1.nome = "Tecnologia da Informacao"; // valido
console.log("Nome agora: " + cat1.nome);