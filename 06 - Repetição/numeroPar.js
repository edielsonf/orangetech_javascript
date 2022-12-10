/* Faça um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado */

const listaNum = ['2', '6', '7', '18' ];

for (let i = 0; i < listaNum.length; i++) {
    
    if (listaNum[i] % 2 === 0) {
        
        console.log(listaNum[i])

    }
    
}
