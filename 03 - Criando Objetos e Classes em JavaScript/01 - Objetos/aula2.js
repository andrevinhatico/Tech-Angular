class Pessoa {
    nome;
    idade;

    descrever() {
        console.log('Meu nome é', this.nome, 'e minha idade é', this.idade);
    }
}

const joao = new Pessoa();

joao.nome = 'João Silva';
joao.idade = 25;

const antonio = new Pessoa();

antonio.nome = 'Antonio Santos';
antonio.idade = 28;

console.log(joao);
console.log(antonio);

joao.descrever();
antonio.descrever();