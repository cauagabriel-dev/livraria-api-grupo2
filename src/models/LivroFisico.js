const Livro = require("./Livro");

class LivroFisico extends Livro {
    #peso;

    constructor(titulo,autor, preco, estoque, peso) {
        super(titulo, autor, preco, estoque); //Chamando o construtor da classe Mãe
        this.#peso = peso;
    }

    get peso() {
        return this.#peso;
    }

    calcularFrete(){
        return this.#peso * 2.5;
    }

    descrever() {
        super.descrever();
        console.log("Tipo: Físico");
        console.log("Peso " + this.#peso + "kg");
    }
}

module.exports = LivroFisico;