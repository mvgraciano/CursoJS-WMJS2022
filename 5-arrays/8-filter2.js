Array.prototype.meuFilter = function (callback) {
    const arrayRet = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this))
            arrayRet.push(this[i]);
    }
    return arrayRet;
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo Plastico', preco: 18.99, fragil: false },
]

// Desafio - Filtrar os produtos acima de 500 reais e frágeis
const filtrarFrageis = produto => produto.fragil;
const filtrarCaros = produto => produto.preco >= 500;
console.log(produtos.meuFilter(filtrarFrageis).meuFilter(filtrarCaros));