const produto = new Object
produto.nome = "Cadeira"
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto);

delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 99000,
    proprietario: {
        nome: 'Raul',
        idade: 54,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 443
        }
    },
    condutores: [
        {
            nome: 'Junior',
            idade: 19
        },
        {
            nome: 'Ana',
            idade: 43
        }
    ],
    calcularValorSeguro: function(){
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av. XV';
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores);
