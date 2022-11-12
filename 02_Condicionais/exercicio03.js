/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
 - À vista Débito, recebe 10% de desconto;
 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
 - Em duas vezes, preço normal de etiqueta sem juros;
 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
const precoProduto = 100;
const formaPgto = 'parcela3Mais';
const qtdParcela = 3;

if (formaPgto === 'debito') {

    const precoPagar = precoProduto - (precoProduto * 10 / 100);
    console.log('O preço a pagar é R$ ', precoPagar.toFixed(2));

} else if (formaPgto === 'dinheiro' || formaPgto === 'pix') {

    const precoPagar = precoProduto - (precoProduto * 15 / 100);
    console.log('O preço a pagar é R$ ', precoPagar.toFixed(2));

} else if (formaPgto === 'parcela2x') {

    const precoPagar = precoProduto;
    const precoParcela = precoProduto / 2;
    console.log('O preço a pagar é R$ ', precoPagar.toFixed(2));
    console.log('O valor da parcela é R$ ', precoParcela.toFixed(2));

} else if (formaPgto == 'parcela3Mais') {

    const precoPagar = precoProduto + (precoProduto * 10 / 100);
    const precoParcela = precoPagar / qtdParcela;
    console.log('O preço a pagar é R$ ', precoPagar.toFixed(2));
    console.log('O valor da parcela é R$ ', precoParcela.toFixed(2));

} else {

    console.log('Opção Inválida');
    
}
