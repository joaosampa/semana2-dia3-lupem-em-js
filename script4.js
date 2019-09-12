// EXERCICIOS DO FILME , LUPEM, LISTA NO CONSOLE.LOG

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