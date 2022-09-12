const os = require('os');

const anonimo = process.argv.indexOf('-a') !== -1 // -a = flag da chamada via node
console.log(anonimo);

if (anonimo) {
    process.stdout.write(`Fala anônimo!${os.EOL}`);
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace(`${os.EOL}`, '');

        process.stdout.write(`Fala ${nome}!!${os.EOL}`)
        process.exit()
    })
}