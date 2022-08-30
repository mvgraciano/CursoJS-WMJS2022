// MANEIRAS FEITAS ANTERIORMENTE

// estrategia1 - Atributo OU
function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a+b+c;
}
console.log([soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)]);

// estrategia2,3 e 4
function soma2(a, b, c) {
    a = a != undefined ? a : 1; // Se não for implicito, tbm é valido pra null
    b = 1 in arguments ? b : 1; // Busca o indice 1 em arguments
    c = isNaN(c) ? 1 : c;
    return a+b+c;
}
console.log([soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0)]);


// PADRÃO es2015
function soma3(a = 1, b = 1, c = 1) {
    return a+b+c;
}
console.log([soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0)]);