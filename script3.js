// INTRODUÇÃO AO FOR / WHILE / FOR IN / FOR OF 
// LUPENS / LAÇOS

// WHILE 

console.log ('while');
for(let j = 0; j < filmes.length; j++){
    console.log(filmes[j]);
    i++;
}

// FOR 

console.log('FOR');
for(let j = 0; j <filmes.length; j++){
    console.log(filems[j]);
}


// FOR IN , asume o indice a pocisão

console.log("FOR IN");

for(let indice in filmes){
    console.log(filmes[indice]);
}

// FOR OF

console.log("FOR OF")

for(let filme of filmes){
    console.log(filme);
}