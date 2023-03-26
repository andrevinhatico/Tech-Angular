

function sayMyName(name) {
    console.log('Your name is: ' + name);
}


sayMyName('João')
sayMyName('Pedro')



function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);


function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor
    return valor + valorDeAcrescimo;
}


console.log('R$', incrementarJuros(100, 20).toFixed(2));
console.log('R$', incrementarJuros(100, 28).toFixed(2));
console.log('R$', incrementarJuros(100, 10).toFixed(2));
