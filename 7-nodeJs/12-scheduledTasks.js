const schedule = require('node-schedule')

// Agora temos um código para executar tarefas agendadas utilizando a função
// scheduleJob do módulo schedule do Node. Essa função recebe como parâmetro
// uma string de configuração no formato 'segundo minuto hora diaDoMês mês diaDaSemana',
// que indica quando uma função será executada.

// Essa string seta a execução do código para um exemplo específico envolvendo
// o dia e a hora em que a aula foi gravada, que é '*/5 * 11 * * 2', o que significa
// que a função será executada de 5 em 5 segundos, porém apenas durante a hora 11
// de uma terça-feira, e se você não estiver testando este exemplo em algum momento
// em que a hora é 11 em uma terça feira, o código não funcionará.

// Para resolver esse problema, basta mudar a string de configuração. Você pode optar
// por personalizá-la de acordo com o dia e hora que você está realizando o exercício,
// ou utilizar a string '*/5 * * * * *', que simplesmente executará o código de 5 em
// 5 segundos independente de minuto, hora, dia do mês, mês e dia da semana em que
// você está testando o algoritmo.

const task1 = schedule.scheduleJob('*/5 * 9 * * 1', function () {
    console.log('Executando task1!', new Date().getSeconds());
})

setTimeout(() => {
   task1.cancel();
   console.log('Cancelando tarefa1!'); 
}, 20000);




// Criar um objeto de regra para a repetição
const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)] //Seg-Sex
regra.hour = 9
regra.second = 30

const task2 = schedule.scheduleJob(regra, function () {
    console.log('Executando task2!', new Date().getSeconds());
})