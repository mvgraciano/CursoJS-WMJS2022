const tecnologias = new Map();
tecnologias.set('react', { framework: false});
tecnologias.set('angular', { framework: true});
console.log(1, tecnologias.react);
console.log(2, tecnologias.get('react'));
console.log(3, tecnologias.get('react').framework);

const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Num']
]);

chavesVariadas.forEach((val, key) => {
    console.log(4, `key: ${key}\n`, `val: ${val}`);
})

console.log(5, chavesVariadas.has(123));
console.log(6, chavesVariadas.delete(123));
console.log(7, chavesVariadas.has(123));
console.log(8, chavesVariadas.size);

chavesVariadas.set(456, 'a');
chavesVariadas.set(456, 'b');
console.log(9, chavesVariadas);