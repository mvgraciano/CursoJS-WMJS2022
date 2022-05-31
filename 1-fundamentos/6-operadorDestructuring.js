// Atribuição via desestruturação (destructuring assignment)
function rand( {min = 0, max = 1000} ) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = {max: 50, min: 40};

console.log(rand(obj));
console.log(rand({min: 980}));
console.log(rand({}));

console.log('------------------------------------------------------------------');



function rand2( [min = 0, max = 1000] ) {
    if (min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;    
    return Math.floor(valor);
}

console.log(rand2([50, 45]));
console.log(rand2([992]));
console.log(rand2([, 10]));
console.log(rand2([]));