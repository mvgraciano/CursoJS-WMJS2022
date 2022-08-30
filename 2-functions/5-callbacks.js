const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem callback
let notasBaixas = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}
console.log({'Notas baixas': notasBaixas});

// Com callback
notasAltas = notas.filter(function (nota) {return nota > 7})
console.log({'Notas altas': notasAltas});
