var num, cont;

num = 0;
while(num<10) {
    document.write("Adoleta" + "<br>");
    num++
}

document.write("<hr>")

num = 10;
while(num--) {
    document.write("Manga" + "<br>");
}

document.write("<hr>")

num = true;
cont=0;
while(num) {
    document.write("Rabanete" + "<br>");
    cont++

    if(cont > 9) {
        num=false;
    }
}