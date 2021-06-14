var fruta ;
fruta = prompt("Digite o nome de uma fruta: ");

switch(fruta){
    case "Morango":
        alert("Fruta boa para coctel");
        break;
    case "Laranja":
        alert("Fruta boa para suco");
        break;
    case "Banana":
        alert("Fruta ótima para uma vitamina");
        break;
    default:
        alert("Fruta desconhecida");
        break;
}