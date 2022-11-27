var n = prompt("Introduce un número:");
var resultado=n;
var acum=1;

for (let index = 1; index < n; index++) {
    resultado=resultado*(n-acum);
    acum++;
}
alert("El resultado factorial de "+n+" es: "+resultado)
console.log(resultado);
