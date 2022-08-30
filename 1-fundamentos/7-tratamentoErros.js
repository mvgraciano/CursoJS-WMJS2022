function gritarNome(obj) {
    try {        
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (error) {
        tratarErroELancar(error);
    } finally {
        console.log('finalizando...');
    }
}

function tratarErroELancar(error) {
    // throw 500;
    // throw false;
    // throw new Error('Ops.. Error!');
    throw {
        nome: error.name,
        msg: error.message,
        date: new Date
    }
}


const obj = {name: 'Bruno'}
gritarNome(obj);

const obj2 = {nome: 'Bruno'}
gritarNome(obj2);