// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
// 

/* 
 * O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave
 * this definida com o valor fornecido, com uma sequência determinada de argumentos
 * precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.
 * 
 * O principal objetivo do método bind é alterar o contexto this de uma função
 * independente de onde a mesma esteja sendo chamada.
 * 
 */

const pessoa = {
    saudacao: 'Bom dia!',
    falar: function() {
        console.log(this.saudacao);
    }
}
pessoa.falar();

const falar = pessoa.falar
falar(); // conflito entre OO e funcional

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa();
falar();

// ###########################################################################################
// ###########################################################################################
// ###########################################################################################

function Pessoa() {
    this.idade = 0

    // const self = this;

    setInterval(function() {
        this.idade++;
        console.log(this.idade);
    }/*.bind(this)*/, 1000)
}
new Pessoa