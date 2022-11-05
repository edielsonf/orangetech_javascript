/*
Faça um programa que calcule o valor gasto de combustível em uma viagem.

Você terá 5 variáveis:
    1 - Preço do Etanol
    2 - Preço da Gasolina
    3 - O tipo de combustível que está no carro
    4 - Gasto Médio de combustível do carro
    5 - Distância em Km da viagem

Imprima no console o valor que será gasto de combustível para realizar esta viagem
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
let typeCombustivel = 'gasolina';
const mediaKmLitro = 10;
const distancia = 100;

if (typeCombustivel === 'etanol') {
    const gasto = (distancia / mediaKmLitro) * precoEtanol;
    console.log(gasto.toFixed(2));
} else if (typeCombustivel === 'gasolina') {
    const gasto = (distancia / mediaKmLitro) * precoGasolina;
    console.log(gasto.toFixed(2));
} else {
    console.log('Opção Inválida');
}
