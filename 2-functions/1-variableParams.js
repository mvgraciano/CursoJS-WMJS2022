// Arguments é um array contendo todos os parametros passados para uma function
function soma() {
    let soma = 0;
    for (arg in arguments) {
        soma += arguments[arg];
    }
    return soma;
}

const nums = [0, 8, 3, 7, 1, 2, 3.2];
console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));
console.log(soma(...nums));