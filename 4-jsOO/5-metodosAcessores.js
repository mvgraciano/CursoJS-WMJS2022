// NADA IMPEDE QUE O VALOR SEJA ALTERADO DA MANEIRA CONVENCIONAL
const sequencia = {
    _valor: 1, // Convenção(somente) - para indicar que um valor deveria ser privado, ou seja,acessado somente pelo objeto
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 2333;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 10;
console.log(sequencia.valor);
sequencia._valor = 10;
console.log(sequencia._valor);