const Categoria = require('./Categoria');
const Livro = require('./Livro');

const catTec = new Categoria("Tecnologia", "livros sobre programacao");
const l1 = new Livro("Clean Code", "Robert C. Martin", 89.90, 12, catTec);

l1.descrever();
console.log(l1.categoria.descricao);

const Carrinho = require('./Carrinho');
const l2 = new Livro(
    "Eloquent JavaScript", 
    "Marijn Haverbeke", 
    45.00, 
    999, 
    catTec
);

const carrinho = new Carrinho();
carrinho.adicionarLivro(l1);
carrinho.adicionarLivro(l2);

carrinho.listar();
console.log("Total: R$ " + carrinho.calcularTotal().toFixed(2));