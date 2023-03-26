
// function escrevaMeuNome(nome) {
//     console.log('Meu nome é:', nome);
// }


// escrevaMeuNome('Carlos');
// escrevaMeuNome('André');


function verificaMaiorIdade(idade) {
    if (idade >= 18) {
        return ('É maior de idade: ' + idade);
    } else {
        return ('É menor de idade: ' + idade)
    }
}

(function () {
    const idade = 19;
    console.log(verificaMaiorIdade(idade));
})();

