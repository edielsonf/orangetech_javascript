/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre de faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

Média = (nota_1 + nota_2 + nota_3) / 3;

Classificação
    - Média menor que 5, reprovação;
    - Média entre 5  e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const nota1 = 10;
const nota2 = 5;
const nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3;

console.log('A sua média foi: ', media.toFixed(2));
console.log('A sua classificação foi:');

if (media < 5) {

    const classificacao = 'REPROVADO';
    console.log(classificacao);

} else if (media > 7) {

    const classificacao = 'APROVADO';
    console.log(classificacao);

} else {

    const classificacao = 'RECUPERAÇÃO';
    console.log(classificacao);

}
