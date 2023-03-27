class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log('Meu nome é', this.nome, 'e minha idade é', this.idade);
    }
}

const joao = new Pessoa('João Silva', 25);
const antonio = new Pessoa('Antonio Santos', 28);

console.log(joao);


// joao.descrever();
// antonio.descrever();