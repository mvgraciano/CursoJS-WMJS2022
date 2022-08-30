function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20;
global.desc = 0.1;

console.log(getPreco())
console.log(produto.getPreco())

console.log('// _________________________________________________________________________ //');

const carro = { preco: 49990, desc: 0.20}
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

// O Call chama a função passando diretamente o objeto e os parametros
console.log(getPreco.call(carro, 0.17, '$'))
// O Apply chama a função passando o objeto e um array contendo os parametros da funcao
console.log(getPreco.apply(carro, [0.17, 'US$']));
console.log(getPreco.apply(global, [0.17, 'US$']));