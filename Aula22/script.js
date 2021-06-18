// Tratamento de erros / Try catch finally


var num; // Maximo é 10

try {
    num=prompt("Digite um valor");
    if(num > 10) {
        throw new Error("Valor inválido, o valor maximo é 10.");
    }

} catch (e) {
    console.log("Erro: " + e.message)
    num = 10;
    
} finally {
    document.write("Valor: " + num);
}