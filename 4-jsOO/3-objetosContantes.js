const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro';
console.log(pessoa);

// pessoa = {'Ana'}; -> ERRO!

Object.freeze(pessoa);
pessoa.nome = 'Maria';
pessoa.endereco = 'Rua abc';
delete pessoa.nome;
console.log(pessoa);

const pessoaConstant = Object.freeze({nome: 'João'});
console.log(pessoaConstant);
