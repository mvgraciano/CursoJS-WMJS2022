let p = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
});

const primeiroElemento = (array) => array[0];
const letraMinuscula = letra => letra.toLowerCase();

p
    .then(primeiroElemento)
    .then(primeiro => primeiro[0])
    .then(letraMinuscula)
    .then(console.log)