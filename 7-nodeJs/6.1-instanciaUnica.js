// Por padrão, o node faz cache dos módulos, retornando sempre uma mesma instância
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}