const escola = [
    {
        nome: 'Turma M1',
        alunos: [
            {
                nome: 'Gustavo',
                nota: 8.2
            },
            {
                nome: 'Ana',
                nota: 9.3
            }
        ]
    },
    {
        nome: 'Turma M2',
        alunos: [
            {
                nome: 'Rebeca',
                nota: 8.9
            },
            {
                nome: 'Roberto',
                nota: 7.3
            }
        ]
    }
]

const getNotaDoAluno = aluno => aluno.nota;
const getNotasTurma = turma => turma.alunos.map(getNotaDoAluno);
const notas1 = escola.map(getNotasTurma);
console.log(notas1);
console.log([].concat([ 8.2, 9.3 ], [ 8.9, 7.3 ]));


// FLATMAP
Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotasTurma);
console.log(notas2);
