// 1 - Crie uma função que dado dois valores (passados como parâmetros) mostre no console
// a soma, subtração,multiplicação e divisão desses valores.
console.log('Ex 1..');
const calculator = function (num1, num2) {
	let soma = num1 + num2;
	let sub = num1 - num2;
	let mult = num1 * num2;
	let div = num1 / num2;
	console.log([
		`${num1} + ${num2} = ${soma}`,
		`${num1} - ${num2} = ${sub}`,
		`${num1} * ${num2} = ${mult}`,
		`${num1} / ${num2} = ${div}`
	]);
}
calculator(4, 3);
console.log('\n//----------------------------------------------------------------------------//');

// 2 - Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne
// sua classificação quanto ao tamanho de seus lados.
console.log('Ex 2..');
const classificaTriangulo = function (l1, l2, l3) {
	if (l1 == l2 && l2 == l3) {
		return 'Equilátero';
	}

	if (l1 == l2 || l1 == l3 || l2 == l3) {
		return 'Isósceles';
	}

	if (l1 != l2 && l1 != l3 && l2 != l3) {
		return 'Escaleno';
	}
}
console.log(classificaTriangulo(3, 3, 3));
console.log(classificaTriangulo(3, 2, 2));
console.log(classificaTriangulo(1, 2, 3));
console.log('\n//----------------------------------------------------------------------------//');

// 3 - Crie uma função que recebe dois parâmetros, base e expoente,
// e retorne a base elevada ao expoente.
console.log('Ex 3..');
const baseToExpoente = (base, exp) => Math.pow(base, exp);
console.log(baseToExpoente(3, 3));
console.log('\n//----------------------------------------------------------------------------//');

// 4 - Crie uma função que irá receber dois valores, o dividendo e o divisor. 
// A função deverá imprimir o resultado e o resto da divisão destes dois valores.
console.log('Ex 4..');
const restoDivisao = (dividendo, divisor) => dividendo % divisor;
console.log(restoDivisao(10, 5));
console.log(restoDivisao(10, 3));
console.log('\n//----------------------------------------------------------------------------//');

// 5 - Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004
// e retorne R$0,30 (observe a vírgula e o ponto).

console.log('Ex 5..');
const formataMonetario = (val) => { return `R$ ${val.toFixed(2).replace('.', ',')}` };
console.log(formataMonetario(0.30000000000000004));
console.log('\n//----------------------------------------------------------------------------//');

// 6 - Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros
// e tempo de aplicação. A primeira função retornará o montante da aplicação financeira
// sob o regime de juros simples e a segunda retornará o valor da aplicação sob o
// regime de juros compostos.
console.log('Ex 6..');
const calculoMontanteJurosSimples = function (capInicial, taxaJuros, tempoAplicacao) {
	const juros = capInicial * (taxaJuros / 100) * tempoAplicacao;
	const montante = juros + capInicial;
	let ret = `REGIME SIMPLES\n`;
	ret += `Cap. Ini.: ${capInicial}\n`;
	ret += `Taxa Juros: ${taxaJuros}\n`;
	ret += `Tempo aplicacao: ${tempoAplicacao}\n`;
	ret += `_________________________\n`;
	ret += `Montante final = ${montante} / Juros = ${juros}`;
	return ret;
};
const calculoMontanteJurosCompostos = function (capInicial, taxaJuros, tempoAplicacao) {
	const montante = capInicial * Math.pow((1 + (taxaJuros / 100)), tempoAplicacao);
	const juros = montante - capInicial;
	let ret = `REGIME COMPOSTO\n`;
	ret += `Cap. Ini.: ${capInicial}\n`;
	ret += `Taxa Juros: ${taxaJuros}\n`;
	ret += `Tempo aplicacao: ${tempoAplicacao}\n`;
	ret += `_________________________\n`;
	ret += `Montante final = ${montante.toFixed(2)} / Juros = ${juros.toFixed(2)}`;
	return ret;
};
console.log(calculoMontanteJurosSimples(1000, 10, 3));
console.log('\n#############################################\n');
console.log(calculoMontanteJurosCompostos(1000, 10, 3));
console.log('\n//----------------------------------------------------------------------------//');

// 7 - Elabore uma função cujo objetivo é resolver a fórmula de Bhaskara.  Como retorno deve
// ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés
// do vetor, um string com a frase: “Delta é negativo”.
console.log('Ex 7..');
const resolverBhaskara = function (a, b, c) {
	const delta = (b * b) - 4 * a * c;
	if (delta < 0) {
		return 'Delta é negativo';
	}

	const sqrtDelta = Math.sqrt(delta);

	const x1 = (-b + sqrtDelta) / (2 * a);
	const x2 = (-b - sqrtDelta) / (2 * a);
	console.log(x1, x2);
}
resolverBhaskara(4, 2, -6);
console.log('\n//----------------------------------------------------------------------------//');

// 8 - Pedro joga N jogos de basquete por temporada. Para saber como está ele está
// progredindo, ele mantém registro de todos os as pontuações feitas por jogo. Após
// cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu
// melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”,
// escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e
// quando fez seu pior jogo. (Número do pior jogo).
// Obs.: O primeiro jogo não conta como novo recorde do melhor
console.log('Ex 8..');
const verificarQtdRecordesEPiorJogo = function (strPontuacoes) {
	let pontuacoes = strPontuacoes.split(' ');
	pontuacoes = pontuacoes.map(a => parseInt(a));

	let menorPontuacao = record = parseInt(pontuacoes[0]);
	let jogoMenorPontuacao = 1;
	let qtdRecords = 0;

	for (let i in pontuacoes) {
		const pontuacao = parseInt(pontuacoes[i]);


		if (pontuacao < menorPontuacao) {
			menorPontuacao = pontuacao;
			jogoMenorPontuacao = parseInt(i) + 1;
		}

		if (pontuacao > record) {
			record = pontuacao;
			qtdRecords++;
		}
	}

	return [qtdRecords, jogoMenorPontuacao];
}

console.log(verificarQtdRecordesEPiorJogo("10 20 20 8 25 3 0 30 1"));
console.log(verificarQtdRecordesEPiorJogo("56 66 23 0 71 80 30 1 92 33"));
console.log('\n//----------------------------------------------------------------------------//');

/* 9 - Construa uma função para um sistema de notas de uma instituição que possui a seguinte
	política de classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo
	de 40 são reprovados. As notas possuem a seguinte regra de arredondamento: Se a diferença
	entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo
	múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta
	nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para 85,
	mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento
	eficiente, ou seja, que evite a reprovação do aluno. No caso de a nota ser 38, o
	arredondamento é possível pois atingirá 40 e o aluno será aprovado */
console.log('Ex 9..');
const calcularNotas = function (nota) {
	if (nota < 38) {
		return `Nota final: ${nota} / Situação: Reprovado`;
	} else {
		let ret = `Nota: ${nota}`;

		let proxMultiplo = 40;
		for (let i = proxMultiplo; i <= 100; i++) {
			if (i % 5 == 0 && i > nota) {
				proxMultiplo = i;
				break;
			}
		}
		if ((proxMultiplo - nota) < 3) {
			ret += ` / Nota arredondada: ${proxMultiplo}`;
		}

		ret += ' / Situação: Aprovado';

		return ret;
	}
}
console.log(calcularNotas(37));
console.log(calcularNotas(38));
console.log(calcularNotas(82));
console.log('\n//----------------------------------------------------------------------------//');

// 10 - Crie uma função que verifica se um número inteiro passado como parêmetro é
// divisível por 3 e retorne true ou false.
console.log('Ex 10..');
const eDivisivelPorTres = num => num % 3 == 0;
[0, 5, 12].forEach(num => console.log(eDivisivelPorTres(num)));
console.log('\n//----------------------------------------------------------------------------//');

// 11
console.log('Ex 11..');
const calculaBisexto = function (ano) {
	if (ano % 2 != 0) {
		console.log('Não é bisexto');
		return false;
	}

	if (ano % 400 == 0) {
		console.log('É bisexto  ');
		return true;
	}

	if (ano % 4 == 0 && parseInt(ano.toString().substring(2)) != '00') {
		console.log('É bisexto');
		return true;
	}

	console.log('Não é bisexto');
	return false;
}
calculaBisexto(1992)
console.log('\n//----------------------------------------------------------------------------//');

// 12 - Faça um algoritmo que calcule o fatorial de um número.
console.log('Ex 12..');
const calcularFatorial = num => {
	let fat = num;
	for (let i = num - 1; i > 0; i--) {
		fat *= i;
	}
	return fat;
}
console.log(`O fatorial de 5 é ${calcularFatorial(5)}`);
console.log('\n//----------------------------------------------------------------------------//');

// 13 - Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado
// o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7.
// Utilize a estrutura Switch.
console.log('Ex 13..');
const verificarDia = numDia => {
	switch (numDia) {
		case 1: case 7:
			console.log('Fim de semana');
			break;
		case 2: case 3: case 4: case 5: case 6:
			console.log('Dia útil');
			break;
		default:
			console.log('Dia inválido');
			break;
	}
}
verificarDia(1);
verificarDia(9);
verificarDia(5);
verificarDia(7);
console.log('\n//----------------------------------------------------------------------------//');

// 14 - Crie uma estrutura condicional switch que receba uma string com o nome
// de uma fruta e que possua três casos: Caso maçã, retorne no console: “Não
// vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de
// kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com
// estas três opções .Crie também um default, que retornará uma mensagem de
// erro no console.
console.log('Ex 14..');
const consultarFrutas = fruta => {
	console.log(`Fruta: ${fruta}`);
	switch (fruta) {
		case 'maçã':
			console.log('Não vendemos esta fruta aqui');
			break;
		case 'kiwi':
			console.log('Estamos com escassez de kiwis');
			break;
		case 'melancia':
			console.log('Aqui está, são 3 reais o quilo');
			break;
		default:
			console.log('Erro! Opção inválida!');
			break;
	}
}
consultarFrutas('maçã');
consultarFrutas('kiwi');
consultarFrutas('melancia');
consultarFrutas('banana');
console.log('\n//----------------------------------------------------------------------------//');

// 15 - Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um
// carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e
// caminhonetes. Utilizando uma estrutura switch, caso o comprador queira o hatch,
// retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
// que não prefere este modelo?”. Caso seja especificado um modelo que não está
// disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui”.
console.log('Ex 15..');
const consultarCarros = (tipoCarro) => {
	console.log(`Tipo escolhido: ${tipoCarro}...`);
	switch (tipoCarro) {
		case 'hatch':
			console.log('Compra efetuada com sucesso');
			break;
		case 'sedan': case 'motocicleta': case 'caminhonete':
			console.log('Tem certeza que não prefere este modelo?');
			break;
		default:
			console.log('Não trabalhamos com este tipo de automóvel aqui');
			break;
	}
}
consultarCarros('sedan');
consultarCarros('hatch');
consultarCarros('caminhonete');
consultarCarros('Motoneta');
console.log('\n//----------------------------------------------------------------------------//');

// 16 - Utilizando a estrutura do Switch faça um programa que simule uma
// calculadora básica. O programa recebe como parâmetros dois valores
// numéricos e uma string referente à operação e a realize com os valores
// numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3).
// A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’,
// ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas
console.log('Ex 16..');
const calculadora = (num1, operacao, num2) => {
	let result = 0;
	let valid = true;
	switch (operacao) {
		case '+':
			result = num1 + num2;
			break;
		case '-':
			result = num1 - num2;
			break;
		case '*':
			result = num1 * num2;
			break;
		case '/':
			result = num1 / num2;
			break;
		default:
			console.log(`Operador: ${operacao} - Operação inválida`);
			valid = false;
			break;
	}

	if (valid) {
		console.log(`${num1}${operacao}${num2} = ${result}`);
	}
}
calculadora(3, '+', 4);
calculadora(3, '-', 4);
calculadora(3, '*', 4);
calculadora(3, '/', 4);
calculadora(3, '&', 4);
console.log('\n//----------------------------------------------------------------------------//');

// 17 - Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano A - Aumento 10%
// Plano B - Aumento 15%
// Plano C - Aumento 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um
// funcionário e calcula e imprime o seu novo salário. Use a estrutura
// switch e faça um caso default que indique que o plano é inválido.
console.log('Ex 17..');
const calcularAumentoSalarial = (planoTrabalho, salario) => {
	let valid = true;
	let percAumento = 0;
	switch (planoTrabalho) {
		case 'A':
			percAumento = 1.1;
			break;
		case 'B':
			percAumento = 1.15;
			break;
		case 'C':
			percAumento = 1.2;
			break;
		default:
			console.log('Plano inválido');
			valid = false;
			break;
	}

	if (valid) {
		console.log(`
            Plano: ${planoTrabalho},
            Salário atual: ${salario},
            Novo salário: ${salario * percAumento}
        `);
	}
}
calcularAumentoSalarial('A', 1000);
calcularAumentoSalarial('B', 1000);
calcularAumentoSalarial('C', 1000);
calcularAumentoSalarial('F', 1000);
console.log('\n//----------------------------------------------------------------------------//');

// 18 - Faça um programa que leia um número entre 0 e 10, e escreva este número
// por extenso. Use o comando switch. Crie um case default que escreva ‘Número
// fora do intervalo.’
console.log('Ex 18..');
const escreverExtenso = num => {
	switch (num) {
		case 0:
			console.log('Zero');
			break;
		case 1:
			console.log('Um');
			break;
		case 2:
			console.log('Dois');
			break;
		case 3:
			console.log('Três');
			break;
		case 4:
			console.log('Quatro');
			break;
		case 5:
			console.log('Cinco');
			break;
		case 6:
			console.log('Seis');
			break;
		case 7:
			console.log('Sete');
			break;
		case 8:
			console.log('Oito');
			break;
		case 9:
			console.log('Nove');
			break;
		case 10:
			console.log('Dez');
			break;
		default:
			console.log('Número fora do intervalo');
			break;
	}
}
escreverExtenso(0);
escreverExtenso(3);
escreverExtenso(7);
escreverExtenso(65);
escreverExtenso(10);
console.log('\n//----------------------------------------------------------------------------//');

// 19
console.log('Ex 19..');
const caixa = (itemCode, qtd) => {
	let price = 0;
	let itemName = null;
	switch (itemCode) {
		case 100:
			price = 3;
			itemName = 'Cachorro Quente';
			break;
		case 200:
			price = 4;
			itemName = 'Hambúrguer';
			break;
		case 300:
			price = 5.5;
			itemName = 'Cheeseburguer';
			break;
		case 400:
			price = 7.5;
			itemName = 'Bauru';
			break;
		case 500:
			price = 3.5;
			itemName = 'Refrigerante';
			break;
		case 600:
			price = 2.8;
			itemName = 'Suco';
			break;
		default:
			price = 0;
			console.log('Item inválido!');
			break;
	}

	const total = (price * qtd).toFixed(2);
	if (price > 0) {
		console.log(`(${qtd}) ${itemName} ..... R$${total}`);
	}
}

caixa(200, 4);
caixa(100, 1);
caixa(600, 2);
caixa(400, 6);
caixa(700, 6);
console.log('\n//----------------------------------------------------------------------------//');

// 20 - Crie um programa para informar quais e quantas notas são necessárias para
// entregar o mínimo de cédulas para um determinado valor informado pelo usuário
// considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. Seu programa deve
// mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa
// deve informar apenas a seguinte informação (note que não foram exibidas
// informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s)
// de R$ 5. 3 nota(s) de R$ 1.
console.log('Ex 20..');
const analisarCedulas = valor => {
	let strResult = `Valor informado R$${valor} = `;

	if (valor > 0) {
		const cedulas = {};
		const valores = [100, 50, 10, 5, 1];

		valores.forEach(valorNota => {
			if (valorNota > 1)
				cedulas[valorNota] = Math.floor(valor / valorNota);
			else
				cedulas[valorNota] = valor;
			valor %= valorNota;
		});

		Object.entries(cedulas).reverse().forEach(([valor, qtd]) => {
			if (qtd > 0) {
				strResult += `${qtd} nota(s) de R$ ${valor}. `;
			}
		});
	} else {
		strResult += 'Valor inválido!';
	}

	console.log(strResult);
};
analisarCedulas(1470);
analisarCedulas(2786);
analisarCedulas(-1);
console.log('\n//----------------------------------------------------------------------------//');

// 21 - Criar um programa para identificar o valor a ser pago por um plano de
// saúde dada a idade do conveniado considerando que todos pagam R$ 100 mais
// um adicional conforme a seguinte tabela: 1) crianças com menos de 10 anos
// pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50;
// 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 4)
// conveniados acima de 60 anos pagam R$130

console.log('Ex 21..');
const calcularMensalidadePlano = idade => {
	let valorPlano = 100;

	if (Number.isInteger(idade) && idade > 0) {
		switch (true) {
			case (idade < 10):
				valorPlano += 80;
				break;
			case (idade >= 10 && idade < 30):
				valorPlano += 50;
				break;
			case (idade >= 30 && idade < 60):
				valorPlano += 95;
				break;
			case (idade >= 60):
				valorPlano += 130;
				break;
		}
		console.log(`Valor do plano: - R$ 100.00 + R$ ${(valorPlano - 100).toFixed(2)}(Variável idade) = Total:${(valorPlano).toFixed(2)}`);
	} else {
		console.log('Idade inválida');
	}
}
calcularMensalidadePlano(5);
calcularMensalidadePlano(15);
calcularMensalidadePlano(45);
calcularMensalidadePlano(66);
calcularMensalidadePlano('asd');
console.log('\n//----------------------------------------------------------------------------//');

// 22 - Criar uma função para calcular o valor a ser pago de anuidade de uma
// associação. A função recebe como parâmetro um inteiro que representa o mês
// (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade.
// A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros
// (sob o regime de juros compostos). O retorno deve ser o valor a ser pago
// para o respectivo mês escolhido.
console.log('Ex 22..');
const calcularTotalAnuidade = (mesPgto, valorAnuidade) => {
	if (mesPgto >= 1 && mesPgto <= 12) {
		let montante = 0;
		let mesesJuro = 0;
		// let valorJuros = 0;

		if (mesPgto > 1) {
			mesesJuro = mesPgto - 1;
			montante = valorAnuidade * Math.pow((1 + (5 / 100)), mesesJuro);
		} else {
			montante = valorAnuidade;
		}

		console.log(`Valor anuidade: ${valorAnuidade}, Mes Pgto: ${mesPgto}, Total: ${montante.toFixed(2)}`);
	} else {
		console.log('Mês informado é inválido!');
	}
}
calcularTotalAnuidade(3, 1000);
calcularTotalAnuidade(8, 100);
calcularTotalAnuidade(3, 200);
console.log('\n//----------------------------------------------------------------------------//');

// 23 - Escreva um algoritmo que leia o código de um aluno e suas três notas.
// Calcule a média ponderada do aluno, considerando que o peso para a maior nota
// seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas,
// a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5
// e "REPROVADO" se a média for menor que 5. Repita a operação até que o código
// lido seja negativo.
console.log('Ex 23..');
const calcularMediaPonderada = (cod, nota1, nota2, nota3) => {
	let ordered = [nota1, nota2, nota3].sort((a, b) => { return a - b });
	const [maior, mediana, menor] = ordered.reverse();
	const media = ((maior * 4) + (mediana * 3) + (menor * 3)) / (10);

	let ret = `Aluno: ${cod}\n`;
	ret += `Nota 1: ${nota1}\n`;
	ret += `Nota 2: ${nota2}\n`;
	ret += `Nota 3: ${nota3}\n`;
	ret += `Média: ${media}\n`;
	ret += `_________________________\n`;
	ret += `Resultado = ${media >= 5 ? 'APROVADO' : 'REPROVADO'}\n`;

	console.log(ret);
}
calcularMediaPonderada(1, 8, 5, 7);
calcularMediaPonderada(2, 5, 9, 6);
calcularMediaPonderada(3, 3, 4, 7);
calcularMediaPonderada(4, 6, 2, 4);
console.log('\n//----------------------------------------------------------------------------//');

// 24 -  Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while
console.log('Ex 24..');
const sayHelloWorld = () => {
	let i = 0;
	while (i <= 10) {
		console.log((i + 1) + ' Hello World!');
		i++;
	}
};
sayHelloWorld();
console.log('\n//----------------------------------------------------------------------------//');

// 25
console.log('Ex 25..');
const print1to50 = () => {
	let i = 1;
	while (i <= 50) {
		console.log(i);
		i++;
	}
}
print1to50();
console.log('\n//----------------------------------------------------------------------------//');

// 26 - Fazer um programa para encontrar todos os pares entre 1 e 100.
console.log('Ex 26..');
const findEvenNumber = () => {
	let i = 1;
	while (i <= 100) {
		if (i % 2 == 0) console.log(i);
		i++;
	}
}
findEvenNumber();
console.log('\n//----------------------------------------------------------------------------//');

// 27 - Construa uma função que receba como parâmetros as alturas e as taxas de
// crescimento anuais de duas crianças e calcule se existe uma criança menor,
// caso exista se a criança menor ultrapassará a maior e em quantos anos isso
// acontecerá. Utilize centímetros para as unidades de medida
console.log('Ex 27..');
const calcularCrescimento = (alt1, txCres1, alt2, txCres2) => {
	if (alt1 != alt2) {
		let [menor, txMenor, maior, txMaior] = alt1 < alt2 ? [alt1, txCres1, alt2, txCres2] : [alt2, txCres2, alt1, txCres1];

		if (txMenor > txMaior) {
			let anos = 0;
			while (menor < maior) {
				anos++;
				menor += txMenor;
				maior += txMaior;
			}
			console.log(`A criança menor ultrapassará a maior em ${anos} anos`);
		} else {
			console.log('A criança menor não ultrapassará a maior');
		}

	} else {
		console.log('Não existe uma criança menor!');
	}
}
calcularCrescimento(50, 8, 65, 6);
calcularCrescimento(55, 10, 65, 6);
console.log('\n//----------------------------------------------------------------------------//');

// 28 - Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares
console.log('Ex 28..');
const verificarQtdParImparArray = vetInteiros => {
	let impares = pares = 0;
	vetInteiros.forEach(num => { num % 2 == 0 ? pares++ : impares++; });
	console.log(`${pares} pares e ${impares} impares`);
}
verificarQtdParImparArray([439, 987, 988, 202, 70, 6, 933]);
console.log('\n//----------------------------------------------------------------------------//');

// 29 - Utilizando a estrutura de repetição for, faça uma função que percorra
// um vetor e conte quantos números deste vetor estão no intervalo [10,20]
// (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.
console.log('Ex 29..');
const verificarNumsIntervaloArray = vetInteiros => {
	let qtdIn = qtdOut = 0;
	for (let i = 0; i < vetInteiros.length; i++) {
		const num = vetInteiros[i];

		num >= 10 && num <= 20 ? qtdIn++ : qtdOut++;
	}
	console.log(`${qtdIn} valores dentro do intervalo 10..20 e ${qtdOut} fora.`);
}
verificarNumsIntervaloArray([439, 10, 987, 988, 15, 202, 14, 33, 70, 6, 20, 933]);
console.log('\n//----------------------------------------------------------------------------//');

// 30 -  Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
console.log('Ex 30..');
const verificarMinMaxInArray = vetInteiros => {
	let min = max = vetInteiros[0];
	let i = 0;
	do {
		if (vetInteiros[i] < min) {
			min = vetInteiros[i];
		}

		if (vetInteiros[i] > max) {
			max = vetInteiros[i];
		}

		i++;
	} while (i < vetInteiros.length);

	console.log(`${min} é o valor minimo e ${max} é o valor maximo do array`);
}
verificarMinMaxInArray([439, 10, 987, 988, 15, 202, 14, 33, 70, 6, 20, 933]);
console.log('\n//----------------------------------------------------------------------------//');

// 31 - Escrever um algoritmo que percorre um vetor de inteiros, conta quantos
// números negativos há nesse vetor e imprime a quantidade no console.
console.log('Ex 31..');
const contarNegativosInArray = vetInteiros => {
	let qtdNegativos = 0;
	vetInteiros.forEach(num => {
		if (num < 0) qtdNegativos++;
	})
	console.log(`O vetor possui ${qtdNegativos} valores negativos`);
}
contarNegativosInArray([439, -10, 987, -988, -15, 202, 14, 33, 70, -6, 20, 933]);
console.log('\n//----------------------------------------------------------------------------//');

// 32 -  Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros
console.log('Ex 32..');
const calcularMediaArray = vetInteiros => {
	// let soma = 0;
	// vetInteiros.forEach(num => {
	// 	soma += num;
	// })
	const soma = vetInteiros.reduce((total, num) => total += num, 0);
	console.log(`A media dos valores do array é ${soma / vetInteiros.length}`);
}
calcularMediaArray([439, 10, 987, 988, 15, 202, 14, 33, 70, 6, 20, 933]);
console.log('\n//----------------------------------------------------------------------------//');

// 33 - Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble.
// Cada um destes vetores deverá conter quatro valores, sendo o primeiro com
// valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras
// diferentes para unir os vetores, e mostre o resultado no console. Todos os
// elementos do vetor resultado deverão aparecer no console.
console.log('Ex 33..');
const vetorInteiro = [2, 4, 6, 8];
const vetorString = ['StrA', 'StrB', 'StrC', 'StrD'];
const vetorDouble = [1.3, 3.7, 5.6, 8.2];

const vetorGeral = vetorInteiro.concat(vetorString, vetorDouble);
console.log(vetorGeral);
console.log('\n//----------------------------------------------------------------------------//');

// 34 - Construa uma função que receberá duas Strings de tamanhos variados e que
// retornará True ou False caso todos os caracteres (independentemente de ser
// maiúsculo ou minúsculo) estejam contidos em ambas palavras
console.log('Ex 34..');
const verificarOcorrenciasEmDuasStrings = (str1, str2) => {
	for (let i = 0; i < str1.length; i++) {
		const letra = str1[i].toLowerCase();
		const letraUp = letra.toUpperCase();

		if (str2.indexOf(letra) < 0 && str2.indexOf(letraUp) < 0) {
			return false;
		}
	}

	for (let i = 0; i < str2.length; i++) {
		const letra = str2[i].toLowerCase();
		const letraUp = letra.toUpperCase();

		if (str1.indexOf(letra) < 0 && str1.indexOf(letraUp) < 0) {
			return false;
		}
	}

	return true;
}
console.log(verificarOcorrenciasEmDuasStrings('Banana', 'Abana'));
console.log(verificarOcorrenciasEmDuasStrings('Cebola', 'Cebolinha'));
console.log('\n//----------------------------------------------------------------------------//');

// 35 - Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente,
// o vetorPilha conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. Você deverá
// adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor
// pilha e mostrá-los no console. É importante lembrar que o método Push
// retorna somente o tamanho do Vetor. Ao final das operações imprima os
// vetores no console.
console.log('Ex 35..');
const vetorPilha = [1, 2, 3, 4, 5];
const vetorAdiciona = [6, 7, 8, 9, 10];
vetorAdiciona.forEach(num => {
	vetorPilha.push(num);
});
console.log(vetorPilha, vetorAdiciona);
console.log('\n//----------------------------------------------------------------------------//');

// 36 - Crie duas funções que recebem dois parâmetros, um vetor com apenas
// valores numéricos e um número inteiro. Faça com que a primeira função
// retorne outro vetor que será resultado da multiplicação de cada elemento
// pelo número passado como parâmetro. A segunda função fará o mesmo da
// primeira se e somente se o valor do elemento for maior que 5.
console.log('Ex 36..');
const vetorNumerico = [3, 5, 7, 11, 21];
const valMultiplicador = 5;

const multiplicarValsVetor = (vetor, intMultiplicador) => {
	return vetMultiplicado = vetor.map(val => val * intMultiplicador);
}

const multiplicarValsVetorMaioresCinco = (vetor, intMultiplicador) => {
	const vetRetorno = new Array();
	vetor.forEach(val => {
		if (val > 5)
			vetRetorno.push(val * intMultiplicador);
	});
	return vetRetorno;
}

console.log(multiplicarValsVetor(vetorNumerico, valMultiplicador));
console.log(multiplicarValsVetorMaioresCinco(vetorNumerico, valMultiplicador));
console.log('\n//----------------------------------------------------------------------------//');

// 37 - Escreva duas funções, uma para progressão aritmética e uma para
// progressão geométrica que recebam como parâmetros um número n (número de
// termo), a1(o primeiro termo) e r(a razão) e escreva os n termos, bem como
// a soma dos elementos.
console.log('Ex 37..');
const progressaoAritmetica = (numTermos, primeiroTermo, razao) => {
	const values = new Array();
	values.push(primeiroTermo);

	for (let i = 1; i < numTermos; i++) {
		values.push(values[i - 1] + razao);
	}

	const soma = values.reduce((soma, num) => soma + num);
	return `Razão: ${razao},
				A1: ${primeiroTermo},
				QtdTermos: ${numTermos},
				PA: [${values.join(', ')}],
				Soma: ${soma}`;
}

const progressaoGeometrica = (numTermos, primeiroTermo, razao) => {
	const values = new Array();
	values.push(primeiroTermo);

	for (let i = 1; i < numTermos; i++) {
		values.push(values[i - 1] * razao);
	}

	const soma = values.reduce((soma, num) => soma + num);

	return `Razão: ${razao},
				A1: ${primeiroTermo},
				QtdTermos: ${numTermos},
				PG: [${values.join(', ')}],
				Soma: ${soma}`;
}

console.log(progressaoAritmetica(5, 4, 4));
console.log(progressaoGeometrica(5, 4, 4));
console.log('\n//----------------------------------------------------------------------------//');

// 38 - Escreva uma função que receba dois parâmetros início e fim. Essa função
// deve imprimir todos os números ímpares que estão entre esses valores. Por
// padrão os valores devem ser 0 para início e 100 para fim. Atente para
// corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
console.log('Ex 38..');
const getImparesInInterval = (valIni = 0, valFim = 100) => {
	if (valIni > valFim) [valIni, valFim] = [valFim, valIni];

	const impares = new Array();
	for (let i = valIni; i < valFim; i++) {
		if (i % 2) impares.push(i);
	}
	return impares.join(', ');
}
console.log(getImparesInInterval());
console.log(getImparesInInterval(1, 20));
console.log('\n//----------------------------------------------------------------------------//');

// 39 - Crie uma função que receba dois vetores de igual tamanho e troque seus
// elementos de modo que o primeiro elemento do vetorA passe a ser o primeiro
// elemento do vetorB e vice versa e assim sucessivamente. Faça a troca sem
// utilizar uma variável auxiliar.
console.log('Ex 39..');
const trocarVetores = (vet1, vet2) => {
	return [vet1, vet2] = [vet2, vet1];
}
console.log(trocarVetores([1, 2, 3, 4], [5, 6, 7, 8]));
console.log(trocarVetores(['E', 'F', 'G', 'H',], ['A', 'B', 'C', 'D',]));
console.log('\n//----------------------------------------------------------------------------//');

// 40 - Faça uma função que receba como parâmetro um vetor de notas e mostre os
// conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D,
// de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de
// 9,0 a 10,0 o conceito A
console.log('Ex 40..');
const conceituarNotas = (vetorNotas) => {
	vetorNotas.map(nota => {
		let conceito = null;
		if (nota <= 4.9) conceito = 'D';
		if (nota >= 5 && nota <= 6.9) conceito = 'C';
		if (nota >= 7 && nota <= 8.9) conceito = 'B';
		if (nota >= 9) conceito = 'A';

		console.log(`Nota: ${nota} -> Conceito ${conceito}`);
	})
}
conceituarNotas([4, 5.4, 7.8, 9.5]);
console.log('\n//----------------------------------------------------------------------------//');