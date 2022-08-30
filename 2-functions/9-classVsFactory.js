class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}
const p1 = new Pessoa('Bete');
p1.falar();

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = pessoa('João');
p2.falar();

function criarPessoa(nome) {
    this.nome = nome;

    this.falar = function() {
        console.log(`Meu nome é ${nome}`);
    }
}
const p3 = new criarPessoa('Mercedez');
p3.falar();