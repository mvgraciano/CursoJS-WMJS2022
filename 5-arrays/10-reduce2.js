const alunos = [
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.8, bolsista: false },
    { nome: "Ana", nota: 8.7, bolsista: true },
]

// Desafio - Todos os alunos são bolsistas?
todosBolsistas = alunos.map(aluno => aluno.bolsista).reduce((resultado, aluno) =>   resultado && aluno )
console.log(todosBolsistas);


// Desafio - Algum aluno é bolsistas?
algumBolsista = alunos.map(aluno => aluno.bolsista).reduce((resultado, aluno) => resultado || aluno )
console.log(algumBolsista);