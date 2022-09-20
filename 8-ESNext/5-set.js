// O SET não aceita repetição e não é indexado
const times = new Set();
times.add('Corinthians');
times.add('São Paulo').add('Palmeiras').add('Vasco');
times.add('Flamengo');
times.add('Corinthians');
console.log(1, times);
console.log(2, times.size);
console.log(3, times.has('Flamengo'));
console.log(4, times.delete('Flamengo'));
console.log(5, times.has('Flamengo'));

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'];
const nomesSet = new Set(nomes);
console.log(6, nomesSet);