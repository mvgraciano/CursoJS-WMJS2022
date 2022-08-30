Array.prototype.map2 = function(callback) {
    const arrayRet = [];
    for (let i = 0; i < this.length; i++) {
        arrayRet.push(callback(this[i], i, this));
    }
    return arrayRet;
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

// Desafio - Retorne um array somente com os precos
const toObject = json => JSON.parse(json);
const retPreco = produto => produto.preco;
const precos = carrinho.map2(toObject).map2(retPreco)

console.log(precos);