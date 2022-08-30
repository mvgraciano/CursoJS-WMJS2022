// Literal
const obj1 = {
    nome: 'Literal'
}
console.log(obj1);

// Função
const obj2 = new Object();
obj2.nome = 'Função Object()';
console.log(obj2);

// Função construtora
const Produto = function (nome, preco, desconto) {
    this.nome = nome; // public
    // preco -> //private
    // desconto -> //private
    this.getPrecoComDesconto = () => {
        return preco * (1-desconto);
    }
}
const obj3 = new Produto('Função construtora', 2, 0.5);
console.log(obj3);

// Função Factory
function criarObj(nome, numero) {
    return {
        nome: nome,
        numero: numero,
        getNomeENum() {
            return `${nome}: obj${numero}`;
        }
    }
}
const obj4 = criarObj('Função Factory', 4);
console.log(obj4.getNomeENum());

// Object.create
const obj5 = Object.create(null);
obj5.nome = 'Object.create()';
console.log(obj5);

// From JSON
const obj6 =JSON.parse('{"nome": "Obj6"}');
console.log(obj6);