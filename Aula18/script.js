// comando de loop/repetição FOR

// O FOR necessita de 3 parâmetros para ser feito
// FOR é muito usado em array (vetor)

var mochila = [
    ["Corda",1],
    ["Cura",10],
    ["Lanterna",1],
    ["Pilhas",20]
];

//        1º     2º    3º 
for( var l = 0; l < 4; l++) {
    for(var c = 0; c<2; c++){
        document.write(mochila[l][c] + " ");
    }
    document.write("<br>")
}

for(cont = 0; cont< 5; cont++) {
    document.write(num[cont] + "<br>");
}