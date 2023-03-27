

const notas = [];

let soma = 0;

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(10);
notas.push(10);


//console.log(notas.length);

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota;    
}

const media = (soma / notas.length).toFixed(1);

console.log(media);

