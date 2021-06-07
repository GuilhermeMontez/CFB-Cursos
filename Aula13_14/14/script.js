// Maneiras de criar um Array(Vetor)
    //var cor = new Array();
    //var cor = [];

    // Manipular o Array(Vetor)
var itens = ["Faca", "Corda", "Luvas", "Chave", "Lanterna", "Pederneira"];
var mochila =[];

// mochila.push para adicionar no final do Array
//mochila.unshift para adicionar ao inicio do Array

mochila.push("Faca");
mochila.push("Corda");
mochila.push("Pederneira");
mochila.push("Chave");
mochila.push("Lanterna");
mochila.push("Pedra");

// Remover no final do Array
//mochila.pop();
// Remover no inicio do Array
//mochila.shift();
//remover no meio do Array, o primeiro numero indica onde ele vai começar a remover, o segundo numero quantos apartir dessa possição ele vai remover
mochila.splice(2,1);

document.write(mochila[0]+"<br>");
document.write(mochila[1]+"<br>");
document.write(mochila[2]+"<br>");
document.write(mochila[3]+"<br>");
document.write(mochila[4]+"<br>");
document.write(mochila[5]+"<br>");
