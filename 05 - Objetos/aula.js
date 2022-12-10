class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - this.anoDeNascimento
    }
}

function compararPessoas(p1, p2) {

    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) do que ${p2.nome}`);
    }
    else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) do que ${p1.nome}`);
    } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const lilian = new Pessoa('Lilian',30);
const edielson = new Pessoa('Edielson', 35);

compararPessoas(edielson, edielson);
