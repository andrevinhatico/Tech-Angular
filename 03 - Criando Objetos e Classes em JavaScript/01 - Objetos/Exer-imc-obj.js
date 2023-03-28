// Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// do seu IMC;

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome,peso,altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {
        let imc = this.calcularImc();

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
}

const jose = new Pessoa('Jose',70,1.75);
const joao = new Pessoa('Joao',105,1.75);
const vitor = new Pessoa('Vitor',60,1.69);


console.log(jose.nome ,'-', jose.classificarImc());
console.log(joao.nome ,'-',joao.classificarImc());
console.log(vitor.nome ,'-',vitor.classificarImc());