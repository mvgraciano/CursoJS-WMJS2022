function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [min, max] = [max, min];

    return new Promise((resolve, reject) => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;

        if (numerosProibidos.includes(aleatorio)) {
            reject('Numero repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSenha(qtdNumeros, tentativas = 1) {
    try {
        const numeros = [];
        for (let _ of Array(qtdNumeros).fill()) {
            // await gerarNumerosEntre(1, 60, numeros);
            numeros.push(await gerarNumerosEntre(1, 60, numeros));
        }
        return numeros;
    } catch (error) {
        if (tentativas > 10) {
            throw "Não foi possível gerar";
        }

        return gerarMegaSenha(qtdNumeros, tentativas + 1);
    }
}

gerarMegaSenha(8)
    .then(console.log)
    .catch(console.log);