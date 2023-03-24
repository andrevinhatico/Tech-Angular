
const numero = 0;

const isNumeroPar = (numero % 2) === 0;

console.log(isNumeroPar);

if (numero === 0) {
    console.log('Numero Inválido!', numero );
} else if (isNumeroPar) {
    console.log('Eh par', numero);
} else {
    console.log('Eh impar', numero);
}
