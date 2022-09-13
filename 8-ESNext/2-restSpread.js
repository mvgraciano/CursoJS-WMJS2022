// operador ... => rest (juntar) / spread(espalhar)

// rest com function
const func1 = (...params) => { console.log(params); }
func1(1, 2, 'a', true, 3)

// spread com objeto
const funcionario = { nome: 'Maria', salario: 2938.90 }
const clone = { ativo: true, ...funcionario }
console.log(clone);

// spread com array
const grupoA = ['Maria', 'João', 'Pedro'];
const grupoFinal = ['Ana', ...grupoA, 'Luiz']
console.log(grupoFinal);