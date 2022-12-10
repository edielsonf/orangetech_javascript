/*
2) O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
    IMC = peso / (altura * altura)

Elabore um algorítimo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

IMC em adultos Condição:
 - Abaixo de 18.5 Abaixo o peso;
 - Entre 18.5 e 25 Peso Normal;
 - Entre 25 e 30 Acima do Peso
 - Entre 30 e 40 Obeso;
 - Acima de 40 Obesidade Grave;
*/

const peso = 70;
const altura = 1.70;

const imc = peso / (altura * altura);

console.log('Seu IMC é de: ', imc.toFixed(2));
console.log('Sua Condição é:');

if (imc < 18.5) {

    console.log('ABAIXO DO PESO');

} else if (imc >= 18.5 && imc < 25) {

    console.log('PESO NORMAL');

} else if (imc >= 25 && imc < 30) {

    console.log('ACIMA DO PESO');

} else if (imc >= 30 && imc < 40) {

    console.log('OBESO');

} else {

    console.log('OBESIDADE GRAVE');

}
