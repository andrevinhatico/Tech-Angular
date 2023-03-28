
// Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.

class Carro {
    marca;
    cor;
    gastoMedioPorKm = 0.1;    

    constructor(marca,cor,gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    
    calcularGastoDepercusso(distanciaEmKm, precoCombustivel) {
        
        let valorGasto = (distanciaEmKm * this.gastoMedioPorKm) * precoCombustivel;
        return valorGasto;

    }
}

const uno = new Carro('Fiat','Azul', 1 / 12);
const gol = new Carro('VW','Vermelho', 1 / 10);


console.log(uno.calcularGastoDepercusso(70,5));
console.log(gol.calcularGastoDepercusso(500,6));