// Retorna uma nova instância através de uma factory
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}