const sports = ['Futebol', 'Handebol', 'Volei', 'Judô'];
console.log(2, sports);

// POP()
sports.pop();
console.log(6, sports);

// PUSH()
sports.push('Natação');
console.log(10, sports);

// SHIFT()
sports.shift();
console.log(14, sports);

// UNSHIFT()
sports.unshift('Tenis');
console.log(18, sports);

// SPLICE() - PODE ADICIONAR E REMOVER ELEMENTOS
sports.splice(2, 0, 'Golf', 'Surf'); // ADD
console.log(22, sports);

sports.splice(1, 1); // REMOVE
console.log(25, sports);

// SLICE()
const sports2 = sports.slice(2);
console.log(29, sports2);

const sports3 = sports.slice(2, 4);
console.log(32, sports3);