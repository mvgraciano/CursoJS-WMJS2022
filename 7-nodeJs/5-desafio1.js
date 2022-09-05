// Através da lista de funcionários obtida pela url "http://files.cod3r.com.br/curso-js/funcionarios.json"
// capture a mulher, chinesa, com o menos salário.

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const filtrarChinesas = (arrayFuncionarios) => arrayFuncionarios.filter(funcionario => funcionario.pais == 'China' && funcionario.genero == 'F')
const capturarChinesaMenorSalario = (arrayFuncionarios) => filtrarChinesas(arrayFuncionarios).reduce((funcionariaMenorSalario, funcionario) => {
    if (funcionario.salario < funcionariaMenorSalario.salario)
        funcionariaMenorSalario = funcionario;
    return funcionariaMenorSalario
});

axios.get(url).then(response => {
    const funcionarios = response.data;
    console.log(capturarChinesaMenorSalario(funcionarios));
})