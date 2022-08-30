const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

// Desafio - Retorne um array somente com os precos
const precos = carrinho.map(item => {
    item = JSON.parse(item)
    return item.preco
});

console.log(precos);