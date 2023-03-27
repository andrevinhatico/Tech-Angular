// Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 10.
// Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado

// Dados de entrada:
// 5
// 50
// 10
// 98
// 23

// Saida: 98

const { gets, print } = require('./funcoes-aux');

let maiorValor = 0;
let quantidadeDeAlunos = gets();



//print(gets());

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado
    }
}






print(maiorValor);
