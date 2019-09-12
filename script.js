// let filmes= ['star', 'wars', 'naruto', 'one', "chong"]
// let i = 0;

// console.log ('while');
// for(let j = 0; j < filmes.length; j++){
//     console.log(filmes[j]);
//     i++;
// }

// console.log('FOR');
// for(let j = 0; j <filmes.length; j++){
//     console.log(filems[j]);
// }
// // FOR IN , asume o indice a pocisão

// console.log("FOR IN");

// for(let indice in filmes){
//     console.log(filmes[indice]);
// }

// // FOR OF

// console.log("FOR OF")

// for(let filme of filmes){
//     console.log(filme);
// }

//////////////////////////////////////////////////////////////////

// pedir idade do usuario
// mostrar so os filmes que ele pode assistir

let idade = Nunber(prompt ("digite sua idade"));

while(idade < 0 || isNaN(idade)){
    alert("Idade invalida. Digite novamente")
}

let filmes = [
    {titulo: "Invocação do Mal", classificado: 16},
    {titulo: "Sharkboy e Lavagirl", classificado: 0},
    {titulo: "Senhor dos aneis", classificado: 12},
    {titulo: "Ninja Assasino", classificado: 18},
    {titulo: "Velozes e Furiosos", classificado: 18},
];
for(let filme of filmes){
    // console.log(filme);
    if( idade >= filme.classificado){
        console.log ("pode assitir", filme.titulo)
    }
}