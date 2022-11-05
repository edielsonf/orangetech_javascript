const num = 10;

const isnumPar = (num % 2) === 0;

if (num === 0) {
    console.log('O Número informado é inválido')
} else if (isnumPar) {
    console.log('O Número é Par')
} else {
    console.log('O Número é Ímpar')
 }
