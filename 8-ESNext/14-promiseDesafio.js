const fs = require('fs');
const path = require('path');

function lerArquivo(filePath) {
    return new Promise((resolve) => {
        fs.readFile(filePath, (_, conteudo) => resolve(conteudo.toString()))
    })
}

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
    .then(console.log)