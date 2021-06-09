// Maneiras de criar um Array(Vetor)
    //var cor = new Array();
    //var cor = [];

    // Manipular o Array(Vetor)
    var itens = ["Faca", "Corda", "Luvas", "Chave", "Lanterna", "Pederneira"];
    var mochila=[], mochila1 =[], mochila2=[], pos;
    var num = [5, 8, 4, 9, 7, 6, 3, 0, 2, 1];
    var numeros;

 
    // Ordenar em ordem crescente
    num.sort();

    // Reverte a ordem inserida em num
    num.reverse();
    // Faz o retorno de todos os elementos de um Array em uma string
    numeros=num.join();
    document.write(numeros + "<br>")
 
    document.write(num[0]+"<br>");
    document.write(num[1]+"<br>");
    document.write(num[2]+"<br>");
    document.write(num[3]+"<br>");
    document.write(num[4]+"<br>");
    document.write(num[5]+"<br>");
    document.write(num[6]+"<br>");
    document.write(num[7]+"<br>");
    document.write(num[8]+"<br>");
    document.write(num[9]+"<br>");

    
    // mochila.push para adicionar no final do Array
    //mochila.unshift para adicionar ao inicio do Array
    
    
    mochila1.push("Faca");
    mochila1.push("Corda");
    mochila1.push("Pederneira");
    mochila1.push("Chave");
    mochila1.push("Lanterna");
    mochila1.push("Pedra");

    mochila2.push("Arame");
    mochila2.push("Luvas");
    mochila2.push("Joelheira");
    mochila2.push("Meias");
    mochila2.push("Moeda");
    mochila2.push("Canivete");

    // Vai contatenar os vetores
    mochila=mochila1.concat(mochila2);

    document.write(mochila[0] + "<br>");
    document.write(mochila[1] + "<br>");
    document.write(mochila[2] + "<br>");
    document.write(mochila[3] + "<br>");
    document.write(mochila[4] + "<br>");
    document.write(mochila[5] + "<br>");
    document.write(mochila[6] + "<br>");
    document.write(mochila[7] + "<br>");
    document.write(mochila[8] + "<br>");
    document.write(mochila[9] + "<br>");
    document.write(mochila[10] + "<br>");
    document.write(mochila[11] + "<br>");
    
    // para mostrar o tamanho do vetor
    document.write("Tamanho da mochila 1: " + mochila1.length + "<br>");
    document.write("Tamanho da mochila 2: " + mochila2.length + "<br>");
    document.write("Tamanho das duas mochilas juntas : " + mochila.length + "<br>");


 
    // Mostrar a posição do intem dentro do Array (vetor) 
    document.write(mochila.indexOf("Lanterna") + "<br>");

    pos=mochila.indexOf("Pedra");

    if(pos < 0) {
        document.write("Íntem não está na mochila")
    } else {
        document.write("Ítem está na mochila<br> Posição: " + pos + "<br>")
    }
    
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
 