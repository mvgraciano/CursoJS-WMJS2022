// 1 - Crie uma função que retorne a string "Olá, " concatenada com um
// argumento text (a ser passado para a função) e com ponto de exclamação "!"
// no final.
console.log('Ex 1..');
const sayHello = (name) => `Olá, ${name}!`;
console.log(sayHello('Pot'));
console.log('\n//----------------------------------------------------------------------------//');

// 2 - Esreva uma função que receba a idade de uma pessoa em anos e retorne a
// mesma idade em dias.
// OBS: considere que um anos tem 365 dias. Desconsidere anos bissextos (com
// 366 dias) e desconsidere também  dias decorridos desde o último aniversário.
console.log('Ex 2..');
const calcularIdadeEmDias = (idade) => idade * 365;
console.log(calcularIdadeEmDias(25));
console.log(calcularIdadeEmDias(70));
console.log('\n//----------------------------------------------------------------------------//');

// 3 - Desenvolva uma função que recebe dois parâmetros, um é a quantidade de
// horas trabalhadas por um funcionário num mês, e o quanto ele recebe por
// hora. O retorno da função deve ser a string "Salário igual a R$ X", em que X
// é o quanto o funcionário ganhou no mês.
console.log('Ex 3..');
const calcularSalario = (horasTrabalhadas, valorHora) => `Salário igual a R$ ${horasTrabalhadas * valorHora}`;
console.log(calcularSalario(150, 40.5));
console.log('\n//----------------------------------------------------------------------------//');

// 4 - Crie uma função que receba um número (de 1 a 12) e retorne o mês
// correspondente como uma string. Por exemplo, se a entrada for 2, a função
// deverá retornar "fevereiro", pois este é o 2º mês
console.log('Ex 4..');
const retornaStrMes = numMes => {
	let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
		'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

	if (numMes < 1 || numMes > 12 || !Number.isInteger(numMes))
		return 'Mês inválido!';
	else
		return meses[numMes - 1];
};
console.log(retornaStrMes(8));
console.log('\n//----------------------------------------------------------------------------//');

// 5 - Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo
console.log('Ex 5..');
const primeiroEMaiorIgualSegundo = (num1, num2) => {
	if (typeof num1 != typeof num2) return false;

	return num1 >= num2
};
console.log(primeiroEMaiorIgualSegundo(0, 0));
console.log(primeiroEMaiorIgualSegundo(0, "0"));
console.log(primeiroEMaiorIgualSegundo(5, 1));
console.log('\n//----------------------------------------------------------------------------//');

// 6 - Escreva uma função que receba uma valor booleano ou numérico. Se o
// parâmetro fornecido for booleano, o retorno da função deverá ser o inverso.
// Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
// numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1,
// o retorno será -1. Se o parâmetro de entrada não for nenhum dos tipos acima,
// retorne "booleano ou número esperados, mas o parâmetro é do tipo ..."
console.log('Ex 6..');
const inversoBoolOuNumber = value => {
	const type = typeof value;

	if (type != "boolean" && type != "number") {
		return `bool ou number esperado, mas o  parâmetro é do tipo ${type}`;
	} else {
		if (type == "boolean") {
			return !value;
		} else {
			return value * -1;
		}
	}
};

console.log(inversoBoolOuNumber(true));
console.log(inversoBoolOuNumber("6"));
console.log(inversoBoolOuNumber(-2000));
console.log(inversoBoolOuNumber("code"));
console.log('\n//----------------------------------------------------------------------------//');

// 7 - Crie uma função que receba quatro números como parâmetro (numero,
// minimo, maximo, inclusivo) e retorne se o parâmetro número (o primeiro) está
// entre mínimo e máximo. Quando o parâmetro inclusivo for true, tenha "entre"
// como inclusivo, ou seja, considerando se número é igual a minimo ou a maximo.
// Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser
// false, portanto, a lógica será exclusiva, não considerando se número é igual
// a minimo ou a maximo.
console.log('Ex 7..');
const estaEntre = (numero, minimo, maximo, inclusivo = false) => {
	return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo;
}
console.log(estaEntre(10, 50, 100));
console.log(estaEntre(16, 100, 160));
console.log(estaEntre(3, 3, 150));
console.log(estaEntre(3, 3, 150, true));
console.log('\n//----------------------------------------------------------------------------//');

// 8 - Desenvolva uma função que recebe dois números inteiros não negativos e
// realize a multiplicação deles. Porém, não utilize o operador de multiplicação.
console.log('Ex 8..');
const multiplicar = (num1, num2) => {
	let result = 0;
	for (let i = 1; i <= num2; i++) {
		result += num1;
	}
	return result;
}
console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));
console.log('\n//----------------------------------------------------------------------------//');

// 9 - Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o
// elemento que repetirá, enquanto que o segundo será o número de vezes que
// haverá repetição. Um array será retornado.
console.log('Ex 9..');
const repetir = (element, qtt) => {
	const ret = [];
	for (let i = 0; i < qtt; i++) {
		ret.push(element);
	}
	return ret;
}
console.log(repetir("código", 2));
console.log(repetir(7, 3));
console.log('\n//----------------------------------------------------------------------------//');

// 10 -Elabore uma função que recebe um número como parâmetro e retorne um
// string com o símbolo "+" na quantidade especificada no parâmetro.
console.log('Ex 10..');
const simboloMais = (num) => {
	let strRet = '';
	for (let i = 0; i < num; i++) { strRet += '+'; }
	return strRet;
}
console.log(simboloMais(2));
console.log(simboloMais(4));
console.log('\n//----------------------------------------------------------------------------//');

// 11 -Crie uma função que recebe um array e retorne o primeiro e o último
// elemento desse array como um novo array;
console.log('Ex 11..');
const receberPrimeiroEUltimoElemento = (array) => {
	const ret = [];
	ret.push(array.shift());
	ret.push(array.pop());
	return ret;
}
console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]));
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]));
console.log('\n//----------------------------------------------------------------------------//');

// 12 - Quando temos um objeto e manipulamos seus atributos, adicionando,
// atualizando ou removendo-os, estamos apenas modificando-o, mas, em essência,
// o objeto continua o mesmo, ou seja a sua referência de memória é a mesma.
// Num projeto que você está trabalhando, você foi designado a refatorar
// diversas funções para que façam cópias de objetos e manipulem os dados
// dessas cópias, com o intuito de evitar efeitos indesejáveis em algumas
// situações devido a referências a objetos. Abaixo, está a descrição de uma
// dessas funções.
// Você escreverá uma função que recebe um objeto como primeiro parâmetro e,
// como segundo parâmetro, o nome de uma propriedade contida nesse objeto. Em
// seguida, retorne uma cópia desse objeto sem a propriedade especificada no
// segundo parâmetro.
console.log('Ex 12..');
const removerPropriedade = (obj, propRemove) => {
	const objRet = Object.assign({}, obj);
	delete objRet[propRemove];
	return objRet;
}

const obj1 = { a: 1, b: 2 };
const obj2 = {
	id: 20,
	nome: "Caneta",
	descricao: "Não preenchido"
};

console.log(removerPropriedade(obj1, "a"));
console.log(removerPropriedade(obj2, "descricao"));
console.log(Object.is(removerPropriedade(obj1, "a"), obj1));
console.log(Object.is(removerPropriedade(obj2, "descricao"), obj2));
console.log('\n//----------------------------------------------------------------------------//');

// 13 - Crie uma função que recebe um array de elementos e retorne um array
// somente com os números presentes no array recebido como parâmetro.
console.log('Ex 13..');
const filtrarNumeros = (array) => array.filter(el => typeof el == 'number');
console.log(filtrarNumeros(['Javascript', 1, '3', "Web", 20]));
console.log(filtrarNumeros(['A', 'C', "Web"]));
console.log('\n//----------------------------------------------------------------------------//');

// 14 - Desenvolva uma função que  recebe como parâmetro um objeto e retorne um
// array de arrays, em que cada elemento é um array formado pelos pares
// chave/valor que corresponde a um atributo do objeto.
console.log('Ex 14..');
const objetoParaArray = (obj) => Object.entries(obj);
console.log(objetoParaArray({ nome: "Maria", profissao: "Desenvolvedor" }));
console.log(objetoParaArray({ codigo: 11111, preco: 12000 }));
console.log('\n//----------------------------------------------------------------------------//');

// 15 - Elabore uma função que receba um array de números e retorne um array
// que tenha todos os números que são pares e que também tenham indices pares.
console.log('Ex 15..');
const paresEComIndicePar = (array) => array.filter((num, i) => num % 2 == 0 && i % 2 == 0);
console.log(paresEComIndicePar([1, 2, 3, 4]));
console.log(paresEComIndicePar([10, 70, 22, 43]));
console.log('\n//----------------------------------------------------------------------------//');

// 16 - A fim de manter o calendário anual ajustado com o movimento de
// translação da Terra, criou-se os anos bissextos, que têm 366 dias em vez dos
// 365 presentes nos anos normais.
// Para determinar se um ano é bissexto, é necessário saber se ele é multiplo
// de 4. Não pode ser multiplo de 100, exceto se for também múltiplo de 400.
// Com isso em mente, desenvolva uma função que recebe um número correspondente
// a um ano e retorna se ele é bissexto ou não.
console.log('Ex 16..');
const checarAnoBissexto = (ano) => {
	if (ano % 2 != 0) {
		console.log('Não é bisexto');
		return false;
	}

	if (ano % 400 == 0) {
		console.log('É bisexto');
		return true;
	}

	if (ano % 4 == 0 && parseInt(ano.toString().substring(2)) != '00') {
		console.log('É bisexto');
		return true;
	}

	console.log('Não é bisexto');
	return false;
}
console.log(checarAnoBissexto(2020));
console.log(checarAnoBissexto(2100));
console.log('\n//----------------------------------------------------------------------------//');

// 17 - Escreva uma função que receba um array de números e retorne a soma de
// todos os elementos desse array.
console.log('Ex 17..');
const somarNumeros = (array) => array.reduce((total, num) => total += num);
console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));
console.log('\n//----------------------------------------------------------------------------//');

// 18 - Você está trabalhando numa aplicação pessoal de controle de despesas.
// Na tela principal dessa aplicação, é possível adicionar produtos ou serviços,
// informando nome, categoria e preço. Uma funcionalidade que você está
// desenvolvendo no momento é a de somar o total de despesas.
// Crie uma função que recebe um array de produtos e retorne o total das despesas.
console.log('Ex 18..');
const despesasTotais = (array) => array.map(item => item.preco).reduce((total, preco) => total += preco);

const despesas1 = [
	{nome: 'Jornal online', categoria: 'Informação', preco: 89.99},
	{nome: 'Cinema', categoria: 'Entretenimento', preco: 150}
];
const despesas2 = [
	{nome: 'Galaxy S20', categoria: 'Eletronicos', preco: 3599.99},
	{nome: 'Macbook Pro', categoria: 'Eletronicos', preco: 30999.90}
];

console.log(despesasTotais(despesas1));
console.log(despesasTotais(despesas2));
console.log('\n//----------------------------------------------------------------------------//');

// 19 - Numa aplicação de investimento financeiro da qual você faz parte da
// equipe de desenvolvimento, pretende-se adicionar a funcionalidade de
// calcular a média de um conjunto de números informados pelo usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array
// com uma quantidade indeterminada de números e retorne a média simples desses
// números.
console.log('Ex 19..');
const calcularMedia = (array) => (array.reduce((total, num) => total += num)) / array.length;
console.log(calcularMedia([0, 10]));
console.log(calcularMedia([1, 2, 3, 4, 5]));
console.log('\n//----------------------------------------------------------------------------//');

// 20 - Faça uma função que recebe a base e a altura de um triângulo e retorne
// a área desse triângulo. A precisão deverá ser de duas casas decimais,
// arredondando se necessário.
console.log('Ex 20..');
const areaDoTriangulo = (base, altura) => (base*altura/2).toFixed(2);
console.log(areaDoTriangulo(10, 15));
console.log(areaDoTriangulo(7, 9));
console.log(areaDoTriangulo(9.25, 13.1));
console.log('\n//----------------------------------------------------------------------------//');

// 21 - Criar uma função que receba um array de números e retorne o menor
// número desse array;
console.log('Ex 21..');
const menorNumero = (array) => array.reduce((menor, num) => {
	if (num < menor)
		menor = num;
	return menor;
});
console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));
console.log('\n//----------------------------------------------------------------------------//');

// 22 - Desenvolva uma função que receba como parâmetro um número de 1 a 10.
// Internamente, na função, será gerado um número aleatório de 1 a 10. a função
// deverá retornar se o parâmetro de entrada foi igual ao número sorteado
// internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O
// número sorteado foi o X". Se não for igual, retorne "Que pena! O número
// sorteado foi o X". X é o número que foi sorteado.
console.log('Ex 22..');
const funcaoDaSorte = (num) => {
	const randNum = Math.ceil(Math.random() * 10);
	const word = randNum == num ? "Parabéns!" : "Que pena!";
	return `${word} O número sorteado foi o ${randNum}`;
	
};
console.log(funcaoDaSorte(10));
console.log(funcaoDaSorte(5));
console.log(funcaoDaSorte(5));
console.log('\n//----------------------------------------------------------------------------//');

// 23 - Crie uma função que receba uma string como parâmetro e conte quantas
// palavras tem nela.
console.log('Ex 23..');
const contarPalavras = (frase) => frase.split(' ').length;
console.log(contarPalavras("Sou uma frase"));
console.log(contarPalavras("Me divirto aprendendo a programar"));
console.log('\n//----------------------------------------------------------------------------//');

// 24 - Desenvolva uma função que recebe um caractere e uma string como
// parâmetros e retorne a quantidade de vezes que o caractere se repete na
// string. A função deverá ser case-sensitive, ou seja, irá diferenciar
// maiúsculas de minúsculas.
console.log('Ex 24..');
const contarChars = (char, string) => string.split("").filter(c => c == char).length;
console.log(contarChars("r", "A sorte favorece os audazes"));
console.log(contarChars("c", "Conhece-te a ti mesmo"));
console.log('\n//----------------------------------------------------------------------------//');

// 25 - A fim de criar um mecanismo de busca para a sua aplicação,você precisa
// iniciar criando uma função para identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como
// segundo parâmetro, um array de strings. A função deverá filtrar as palavras
// do array que contém nelas a string do primeiro parâmetro.
console.log('Ex 25..');
const buscarPalavrasSemelhantes = (palavra, array) => array.filter(item => item.indexOf(palavra) >= 0);
console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]));
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]));
console.log('\n//----------------------------------------------------------------------------//');

// 26 - Desenvolva uma função que receba uma string como parâmetro e retorne
// essa string somente com as consoantes, ou seja, sem vogais.
console.log('Ex 26..');
const removerVogais = (string) => {
	const vogais = ['a', 'e', 'i', 'o', 'u'];
	return string.split('').filter(letra => !vogais.includes(letra)).join('')
}
console.log(removerVogais("Cod3r"));
console.log(removerVogais("Fundamentos"));
console.log('\n//----------------------------------------------------------------------------//');

// 27 - Desenvolva uma função que recebe um objeto como parâmetro e retorne
// outro objeto que corresponde ao objeto rebebido como parâmetro, porém com as
// posições das chaves e valores invertidas.
console.log('Ex 27..');
const inverter = (obj) => {
	const pares = Object.entries(obj).map(par => par.reverse())
	return Object.fromEntries(pares);
}
console.log(inverter({a: 1, b: 2, c:3}));
console.log('\n//----------------------------------------------------------------------------//');

// 28 - Elabore uma função que recebe dois parâmetros: o primeiro é um array de
// números e o segundo é um número que especifica uma quantidade de dígitos.
// Essa função deverá retornar somente aqueles números do array que tem a
// quantidade de dígitos indicada pelo segundo parâmetro.
console.log('Ex 28..');
const filtrarPorQtdDigitos = (array, qtd) => array.filter(num => num.toString().length == qtd);
console.log(filtrarPorQtdDigitos([38, 2, 365, 10, 125, 11], 2));
console.log(filtrarPorQtdDigitos([5, 9, 1, 125, 11], 1));
console.log('\n//----------------------------------------------------------------------------//');

// 29 - Crie uma função que recebe um array de números e retorna o segundo
// maior número presente nesse array.
console.log('Ex 29..');
const segundoMaior = (array) => array.sort((a, b) => a - b).reverse()[1];
console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6]));
console.log('\n//----------------------------------------------------------------------------//');

// 30 - Elabore uma função que recebe um objeto com estudantes e suas notas. As
// notas de cada estudante estarão num array. Você deverá calcular a média da
// nota de cada aluno e retornar um objeto com os atributos nome e media, que
// indica o aluno que teve o melhor desempenho nas notas.
console.log('Ex 30..');
const somar = (array) => array.reduce((total, num) => total += num);
const media = (array) => somar(array) / array.length;
const receberMelhorAluno = (alunos) => {
	const alunosComMedias = Object.entries(alunos).map(aluno => {
		const chave = 0,
			  valor = 1;
		return {nome: aluno[chave], media: media(aluno[valor])}
	});

	const alunosOrdenados = alunosComMedias.sort((alunoA, alunoB) => alunoB.media - alunoA.media);
	const melhorAluno = alunosOrdenados.shift();
	return melhorAluno;
};

console.log(receberMelhorAluno({
	'Joao': [8, 7.6, 8.9, 6],
	'Mariana': [9, 6.6, 7.9, 8],
	'Carla': [7, 7, 8, 9]
}));
console.log('\n//----------------------------------------------------------------------------//');