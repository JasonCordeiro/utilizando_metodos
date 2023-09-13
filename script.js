//Exercicio 1
function substituiPalavra(frase, palavraAntiga, palavraNova){
    const novaFrase = frase.replaceAll(palavraAntiga, palavraNova);

    return novaFrase;
}

const fraseInicial = "estou muito longe de casa";
//console.log(fraseInicial);
//console.log(substituiPalavra(fraseInicial, "longe", "distante"));

//Exercicio 2
function calculeMedia (nota1, nota2, nota3){
    const media = ((nota1 + nota2 + nota3) / 3).toFixed(1);

    return `A média do aluno é ${media}.`;
}

//console.log(calculeMedia(3, 3, 4))
//"A média do aluno é <media>."

//Exercicio 3

function valorTotal(valorUnitario, quantidade){
    let valorTotal = 0;

    if(quantidade >= 10){
        valorTotal = quantidade * valorUnitario * 0.8;
    }
    else if(quantidade >= 5){
        valorTotal = quantidade * valorUnitario * 0.9;
    }
    else{
        valorTotal = quantidade * valorUnitario;
    }

    return valorTotal.toFixed(2)
}

console.log(valorTotal(10, 2));