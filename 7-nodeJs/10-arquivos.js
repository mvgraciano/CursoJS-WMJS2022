const fs = require('fs');
// console.log(fs);

// LEITURA ----------------------------------------------------------------------------------------
const caminho = __dirname + '/arquivo.json';

// > Sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);

// > Assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    if (!err) {
        const config = JSON.parse(conteudo);
        console.log(`${config.db.host}:${config.db.port}`);
    }
});

// Alternativa pra file.json
const config = require('./arquivo.json')
console.log(config);


// ESCRITA ----------------------------------------------------------------------------------------
const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!');
});
