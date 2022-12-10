function aplicarDesconto(precoProduto,desconto){
    return precoProduto - (precoProduto * desconto / 100);
}

function calcularJuros(precoProduto,juros){
    return precoProduto + (precoProduto * juros / 100);
}

console.log('Formas de Pagamento');
console.log('1 - Dinheiro ou PIX');
console.log('2 - Débito');
console.log('3 - Parcelado 2x');
console.log('4 - Parcelado 3x ou mais');

const formaPgto = 4;
const valorProduto = 100;
const qtdParcela = 3;

if (formaPgto === 1){

    console.log('O Preço final é: R$ ' + aplicarDesconto(valorProduto,15));

} else if (formaPgto === 2){

    console.log('O Preço final é: R$ ' + aplicarDesconto(valorProduto,10));

} else if (formaPgto === 3){

    console.log('O Preço final é: R$ ' + valorProduto);
    console.log('O valor das prestações será: R$ ' + calcularJuros(valorProduto,0) / 2);

} else if (formaPgto === 4){

    console.log('O Preço final é: R$ ' + valorProduto);
    console.log('O valor das prestações será: R$ ' + calcularJuros(valorProduto,0) / qtdParcela);

}