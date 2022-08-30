var wolks = { modelo: 'Fusca', velMax: 100 }

console.log(wolks.__proto__);
console.log(wolks.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);

function MyObj() { }
console.log(typeof Object, typeof MyObj);
console.log(Object.prototype, MyObj.prototype);

console.log('----------------------------------------------------------');

// MANEIRA 1 - __proto__
// Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }
console.log([filho, filho.attr1, filho.attr2, filho.attr3]);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

// MANEIRA 2 - Object.setPrototypeOf()
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);
console.log([ferrari, volvo]);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());


console.log('----------------------------------------------------------');

// MANEIRA 3 - Object.create()
const pai1 = { nome: 'Pedro', corCabelo: 'Preto' };

const filha1 = Object.create(pai1);
filha1.nome = 'Ana';
console.log(filha1.corCabelo);

const filha2 = Object.create(pai1, {
    nome: {value: 'Bia', writable: false, enumerable: true}
});
console.log(filha2.nome);
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (const key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(`tem ${key}`) : console.log(`Por herança: ${key}`)
}
