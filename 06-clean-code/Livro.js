class Livro {
  #preco;
  #estoque;

  constructor(titulo, autor, preco, estoque) {
    this.titulo = titulo;
    this.autor = autor;
    this.#preco = preco;
    this.#estoque = estoque;
  }

  descrever() {
    console.log("Título: " + this.titulo);
    console.log("Autor: " + this.autor);
    console.log("Preco: R$ " + this.#preco);
    console.log("Estoque: " + this.#estoque + " unidades");
  }

  valorEmEstoque() {
    return this.#preco * this.#estoque;
  }

  get preco() {
    return this.#preco;
  }

  get estoque() {
    return this.#estoque;
  }

  set preco(novoPreco) {
    if (novoPreco < 0) {
      console.log("ERRO: preco não pode ser negativo.Valor recusado");
      return;
    }
    this.#preco = novoPreco;
  }

}

module.exports = Livro;