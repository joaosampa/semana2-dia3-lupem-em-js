// FUNÇÃO, ORIENTADAS A EVENTOS, 
// ESTRUTURA: 

// prompt()
// alert()
// console.log()

// assinatura = somar, eperando o n1 e o n2 //// n1 e n2 são parametros

// return: retornar fora da função  

//  soma diversos items de um parametro:

function somar(){
    let soma= 0;
    for(let i = 0; i < arguments.length; i++){ 
    soma += arguments[i];
    }
    return soma;
}


function fazerEscadinha(){
    let material = prompt("Digite o materia");
    let qtdDegraus = Number(prompt("Digite a quantidade de degraus"));
    let escada = "";

for(let contador = 0; contador < qtdDegraus; contador++ ){
    escada += material;
    console.log(escada);
}
}


const subtrair = function(n1, n2){
    return n1- n2;
}


// Math =  grador de numeroa aleatorio, diversas funções inclusas

const gerarAleatorio = (min, max) => {
    return Math.floor(Math.random()*(max - min +1)) + min;
}


