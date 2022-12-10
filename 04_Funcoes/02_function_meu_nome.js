function escreverNome(nome){
    return 'Olá ' + nome + '!!!';
}

function verificarIdade(idade){
    if (idade >= 18) {
        console.log(escreverNome('Edielson') + ' Você é maior de idade!');
    } else {
        console.log(escreverNome('Edielson') + ' Você é menor de idade!');
    }
}

verificarIdade(18);
verificarIdade(25);
verificarIdade(16);
