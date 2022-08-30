Array.prototype.forEach2 = function(callback) {
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        callback(element, index, this);    
    }
}

const aprovados = ['Pedro', 'Ana', 'Julio', 'Willian'];

aprovados.forEach2((nome, index) => {
    console.log(`${index + 1}: ${nome}`);
});
