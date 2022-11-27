
var numero = prompt("Introduce un número:");

function comprobador(numero) {
    if(numero%2==0){
        return alert("El número "+numero+" es par."); 
    }else{
        return alert("El número "+numero+" es impar.")
    }
}

comprobador(numero)