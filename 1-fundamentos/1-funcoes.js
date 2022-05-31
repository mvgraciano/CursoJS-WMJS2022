const [num1, num2] = [2, 3];

// Function
function multiplicar(num1, num2) {
    return num1 * num2;
}
console.log(multiplicar(num1, num2));

// Atribuição de function
const imprimirSoma = function(num1, num2) {
    console.log(num1+num2);
}
imprimirSoma(num1, num2);

// Arrow function
const somar = (num1, num2) => {
    return num1+num2;
}
console.log(somar(num1, num2));

// Retorno Implicito
const subtrair = (num1, num2) => num1 - num2;
console.log(subtrair(num1, num2));

const imprimir = value => console.log(value);
imprimir([num1, num2]);