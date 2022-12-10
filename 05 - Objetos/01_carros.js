/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedio;

    constructor (marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;

    }

    valorRodar(qtdKm,precoCombustivel) {
        const consumoKm = 1 / this.gastoMedio;
        return (qtdKm * consumoKm * precoCombustivel)
    }
}

const gol = new Carro('Volks', 'Preto', 12);
const celta = new Carro('Chevrolet', 'Prata', 14);

console.log(gol.valorRodar(70, 5));
console.log(celta.valorRodar(70, 5))