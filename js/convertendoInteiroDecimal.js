//Convertendo para inteiro
a = "10";
document.write("A variável a é do tipo " + typeof a + "<br>");
a = parseInt(a)
document.write("A variável a agora é do tipo " + typeof a + "<br>");
document.write("Valor de a: " + a + "<br>");
b = "12.45";
document.write("<br>A variável b é do tipo " + typeof b + "<br>");
document.write("Valor de b: " + b + "<br>");
b = parseInt(b);
document.write("A variável b agora é do tipo " + typeof b + "<br>");
document.write("Valor de a: " + a + "<br>");
document.write("Valor de b: " + b + "<br>");

// Convertendo para ponto flutuante
c = "10.999999";
document.write("<br>A variável c é do tipo " + typeof c + "<br>");
c = parseFloat(c)
document.write("A variável c agora é do tipo " + typeof c + "<br>");
document.write("Valor de c: " + c + "<br>");

// Escolhendo o número de casas

d = 10.65789;
document.write("<br>O valor de d é " + d.toFixed(2));