// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// - À vista Débito, recebe 10% de desconto;
// - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// - Em duas vezes, preço normal de etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

function AplicarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor
    return (valor + valorDeAcrescimo).toFixed(2);
}

function AplicarDesconto(valor, percentuaDesc) {
    return (valor - (valor * (percentuaDesc / 100))).toFixed(2);
}

function ValorPagamento(formaPagamento, precoNormal) {

    switch (formaPagamento) {
        case 1:
            console.log('A vista Débito - 10% de Desconto. R$', AplicarDesconto(precoNormal, 10));
            break;
        case 2:
            console.log('A vista Dinheiro ou PIX - 15% de Desconto. R$', AplicarDesconto(precoNormal, 15));
            break;
        case 3:
            console.log('Em até 2 duas vezes, preço normal de etiqueta. R$', precoNormal.toFixed(2));
            break;
        case 4:
            console.log('Acima de duas vezes, preço normal de etiqueta mais juros de 10%. R$', AplicarJuros(precoNormal, 10));
            break;

        default:
            break;
    }

}


function main() {
    let precoNormal = 100;
    const formaPagmento = 4;

    ValorPagamento(formaPagmento, precoNormal);
}


main();


