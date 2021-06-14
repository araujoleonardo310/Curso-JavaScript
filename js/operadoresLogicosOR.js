var logico;
var num1 = 25;
var num2 = 30;
logico = (num1 != num2) || (num1 > num2);
document.write(logico + "<br>");
document.write("Alterando num1: ");
num1 = 30;
logico = (num1 != num2) || (num1 > num2);
document.write(logico + "<br>");
