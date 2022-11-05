/*
Faça um programa que calcule o valor gasto de combustível em uma viagem.

Você terá 3 variáveis:
    1 - Preço do combustível
    2 - Gasto médio de combustível do carro por km
    3 - Distância em Km da viagem

Imprima no console o valor que será gasto de combustível para realizar esta viagem
*/
const preco = 5.79;
const mediaKmLitro = 12;
const distancia = 1580;

const gasto = (distancia / mediaKmLitro) * preco;

console.log(gasto.toFixed(2));
