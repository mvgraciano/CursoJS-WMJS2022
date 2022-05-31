// Object
const cliente = {
    nome: 'Paulo',
    idade: 23,
    endereco: {
        logradouro: 'Rua do Paulo',
        numero: 233
    }
}

cliente.peso = 77;
console.log(cliente);
console.log(cliente.peso);


function Obj(nome) {
    this.nome = nome;
    
    this.exec = () => console.log('Exec func...');
}

const obj = new Obj('Pedro');
console.log(obj.nome);

const obj2 = new Obj('Jose');
console.log(obj2.nome);
obj2.exec();