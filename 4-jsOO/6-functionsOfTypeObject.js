const pessoa = {
    nome: 'Marcelo',
    idade: 2,
    peso: 74
}

// keys() + values()
console.log('keys()', Object.keys(pessoa));
console.log('values()', Object.values(pessoa), '\n');

// entries()
console.log('entries()');
console.log(Object.entries(pessoa));
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

// defineProperty()
console.log('\ndefineProperty()');
Object.defineProperty(pessoa, 'dataNasc', {
    enumerable: true,
    writable: false,
    value: '01/01/2020'
})
pessoa.dataNasc = '31/12/2000';
console.log(Object.keys(pessoa));
console.log(pessoa.dataNasc + '\n');

// Object.assign() (ES6)
console.log('assign()');
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, b: 4 }
const obj = Object.assign(dest, o1, o2);
console.log(obj, '\n');

// Object.freeze()
console.log('freeze()');
Object.freeze(obj);
obj.c = 5;
console.log(obj);
