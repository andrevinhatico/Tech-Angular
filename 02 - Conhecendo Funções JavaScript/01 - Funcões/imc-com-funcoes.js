
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return ('Abaixo do peso, IMC: ' + imc.toFixed(1));
    } else if (imc >= 18.5 && imc < 25) {
        return ('Peso normal, IMC: ') + imc.toFixed(1);
    } else if (imc >= 25 && imc < 30) {
        return ('Acima do peso, IMC: ' + imc.toFixed(1));
    } else if (imc >= 30 && imc < 40) {
        return ('Obeso, IMC: ' + imc.toFixed(1));
    } else {
        return ('Obesidade grave, IMC: ' + imc.toFixed(1));
    }
}

//Main
(function () {
    const peso = 60;
    const altura = 1.75

    const imc = calcularImc(peso, altura)
    console.log(classificarImc(imc));
})();





