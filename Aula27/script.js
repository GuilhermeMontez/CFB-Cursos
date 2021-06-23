// Formas diferente de apontar para o mesmo form

var fm = document.forms[0];
//var fm = document.forms.item(0).id;
//var fm = document.forms.namedItem("curso2").innerHTML;

var el = fm.elements;

for (var i = 0; i < el.length - 1; i++) {
  el[i].style.backgroundColor = "#ddd";
  //el[i].value = "Bob Dylan Boladão";
}

document.write(document.getElementById("curso1").elements[0].value);
