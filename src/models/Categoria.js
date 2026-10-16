const TAMANHO_MINIMO_NOME_CATEGORIA = 3;

class Categoria {
    #nome;
    #descricao;

    constructor(nome, descricao) {
        this.#nome = nome;
        this.#descricao = descricao;
    }

    get nome() {
        return this.#nome;
    }

    get descricao() {
        return this.#descricao;
    }

    set nome(novoNome) {
        if (novoNome.length < TAMANHO_MINIMO_NOME_CATEGORIA) {
            console.log("ERRO: o nome da categoria precisa de pelo menos " + TAMANHO_MINIMO_NOME_CATEGORIA + " letras.");
            return;
        }
        this.#nome = novoNome;
    }

    descrever() {
        console.log("Categoria: " + this.#nome);
        console.log("Descricao: " + this.#descricao);
    }

    toJSON() {
        return {
            id: this.id, // 👈 ADICIONADO: O ID da categoria agora aparece na resposta
            nome: this.#nome,
            descricao: this.#descricao // 👈 ADICIONADO: Garante que a descrição também seja enviada
        };
    }
}

module.exports = Categoria;
