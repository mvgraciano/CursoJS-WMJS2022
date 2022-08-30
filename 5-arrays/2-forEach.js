const aprovados = ['Pedro', 'Ana', 'Julio', 'Willian'];

aprovados.forEach((nome, indice, array) => {
    console.log(`${indice + 1}: ${nome}`);
    console.log(array);
});

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);