const contadorA = require('./6.1-instanciaUnica');
const contadorB = require('./6.1-instanciaUnica');

const contadorC = require('./6.2-instanciaNova')();
const contadorD = require('./6.2-instanciaNova')();

contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);