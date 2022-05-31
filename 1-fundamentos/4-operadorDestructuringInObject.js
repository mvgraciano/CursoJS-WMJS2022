// Atribuição via desestruturação (destructuring assignment)

/*
    A sintaxe de atribuição via desestruturação (destructuring assignment)
    é uma expressão JavaScript que possibilita extrair dados de arrays
    ou objetos em variáveis distintas.
 */

const pessoa = {
    nome: 'Beatriz',
    idade: 43,
    endereco: {
        rua: 'Rua da Beatriz',
        numero: 23,
        cep: '84939-000'
    },
};



const {nome, idade} = pessoa;
console.log([pessoa,  nome, idade]);
console.log("\n\n##################################################################\n\n");



const {nome: novoNome, idade: novaIdade} = pessoa;
console.log([novoNome, novaIdade]);
console.log("\n\n##################################################################\n\n");



const {sobrenome, vacinado = false} = pessoa;
console.log([sobrenome, vacinado]);


const {endereco: { rua, numero, cep }} = pessoa;
console.log([rua, numero, cep]);
