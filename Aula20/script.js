var num= 10;

// Não será executado por que o valor da variavel não respeita as condições
/*
while(num < 10) {
    document.write("Bob <br>")
    num++
}
*/
 // Será executado ao menos uma vez
do {
    document.write("Bob <br>")
    num++;

} while(num < 10);