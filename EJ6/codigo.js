var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

const dni_num = prompt("Cual es número de tu dni?");
    var num_dni = dni_num;


if(num_dni < 0 || num_dni > 99999999){
    alert("El número proporcionado no es válido.");
}else{
    const dni_letra = prompt("Cual es la letra de tu dni?");
        var letra_dni_indicada = dni_letra;
        letra_dni_indicada= letra_dni_indicada.toUpperCase(letra_dni_indicada);

        var letra_dni_generada=num_dni%23;
        letra_dni_generada=letras[letra_dni_generada];

    if(letra_dni_generada == letra_dni_indicada){
        alert("DNI introducido correctamente.")
    }else{
        alert("La letra del DNI no es correcta.")
    }
}

