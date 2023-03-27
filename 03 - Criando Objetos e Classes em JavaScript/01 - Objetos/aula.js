

const pessoa = {
    nome: 'Jose Silva',
    idade: 25,
    cidade: 'Salvador',

    descrever: function () {
        console.log('Meu nome é', this.nome, 'e minha idade é', this.idade);
    }
};

// pessoa.descrever = function () {
//     console.log('Meu nome é', this.nome, 'e minha idadeé', this.idade);
// }


pessoa.descrever();


// pessoa['nome'] = 'teste';
// pessoa.nome = 'teste;'

// pessoa.altura = 1.85;

// delete pessoa.cidade;

// console.log(pessoa.nome);
// console.log(pessoa.idade);
// console.log(pessoa);