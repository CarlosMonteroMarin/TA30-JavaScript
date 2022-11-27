
function comprobador(frase) {

    var resultado = "La cadena \"" + frase + "\" ";

    if (frase == frase.toUpperCase()) {
        resultado += "está formada sólo por mayúsculas";
    }
    else if (frase == frase.toLowerCase()) {
        resultado += "está formada sólo por minúsculas";
    }
    else {
        resultado += "está formada por mayúsculas y minúsculas";
    }

    return resultado;
}
var frase = prompt("Introduce una palabra o frase:");
alert(comprobador(frase));
