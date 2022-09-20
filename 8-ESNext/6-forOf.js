for (let letra of "CursoJS") {
    console.log(1, letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(2, i);
}

for (let assunto of assuntosEcma) {
    console.log(3, assunto);
}

const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promise', { abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(4, assunto);
}

for (let chave of assuntosMap.keys()) {
    console.log(5, chave);
}

for (let valor of assuntosMap.values()) {
    console.log(6, valor);
}

for (let [chave, valor] of assuntosMap.entries()) {
    console.log(7, chave, valor);
}

const set = new Set(['a', 'b', 'c'])
for (let letra of set) {
    console.log(8, letra);
}