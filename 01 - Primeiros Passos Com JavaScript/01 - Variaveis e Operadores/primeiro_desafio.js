

// Faça um programa para calcular o valor gasto de combustível em uma viagem

// Voçê terá três variáveis . Sendo elas:

// - 1 Preço do Combustível;
// - 2 Gasto médio de carro por KM;
// - 3 Distancia em KM da viagem;

// Imprima no console o valor que será gasto de combustivel para realizar essa viagem.



const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

let valorGasto  = (distanciaEmKm / kmPorLitros) * precoCombustivel

console.log('R$',valorGasto.toFixed(2));