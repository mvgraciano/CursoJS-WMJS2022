console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Capoeira mata um!'.reverse());

Array.prototype.first = function() {
    return this[0]
}
console.log([5,9,11].first());

console.log('_____________________________________________________');

function Aula(nome, videoId) {
    this.nome = nome
    this.videoId = videoId
}
const aula1 = new Aula('Bem Vindo', 123);
const aula2 = new Aula('Aula2', 456);
console.log([aula1, aula2]);


//  simulando o new
function novo(f, ...params) {
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params)
    return obj;
}
const aula3 = novo(Aula, 'Bem Vindo', 123);
const aula4 = novo(Aula, 'Aula2', 456);
console.log([aula1, aula2]);