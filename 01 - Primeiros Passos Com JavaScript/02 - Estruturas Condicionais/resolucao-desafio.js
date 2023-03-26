
// Faça um programa para calcular o valor gasto de combustível em uma viagem

// Voçê terá 5 variáveis . Sendo elas:

// - 1 Preço do Etanol;
// - 2 Preço da Gasolina;
// - 3 O tipo de Combustivel que está no seu carro;
// - 4 Gasto médio de combustivel do carro por Km;
// - 5 Distancia em KM da Viagem

// Imprima no console o valor que será gasto para realizar essa viagem.


const precoGasolina = 6.0;
const precoEtanol = 5.0;
const tipoCombustivel = 'ETanol'.toLowerCase();
const kmPorLitros = 10;
const distanciaEmKm = 100;

let litrosConsumidos = (distanciaEmKm / kmPorLitros)

if (tipoCombustivel === 'gasolina') {
    let valorGasto = litrosConsumidos * precoGasolina;
    console.log('R$', valorGasto.toFixed(2));
} else if (tipoCombustivel === 'etanol') {
    let valorGasto = litrosConsumidos * precoEtanol;
    console.log('R$', valorGasto.toFixed(2));
} else {
    console.log('Tipo de combustivel inválido');
}

//let valorGasto  = (distanciaEmKm / kmPorLitros) * precoCombustivel

//console.log('R$',valorGasto.toFixed(2));


