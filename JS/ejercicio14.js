function calcular() {

    //numeros
    let entrada = document.getElementById('numeros').value;

    if (entrada === "") {
        alert("Por favor ingresa algunos números");
        return;
    }

    //numeros por coma
    let numeros = entrada.split(",").map(Number);

    //validar que sean numeros
    if (numeros.some(isNaN)) {
        alert("Ingresa solamente números separados por comas");
        return;
    }

    //numero mayot
    let mayor = Math.max(...numeros);

    //número menor
    let menor = Math.min(...numeros);

    //sumar todos los números
    let suma = numeros.reduce((total, numero) => total + numero, 0);

    //calcular el promedio
    let promedio = suma / numeros.length;

    //resultados
    document.getElementById('mayor').value = mayor;
    document.getElementById('menor').value = menor;
    document.getElementById('promedio').value = promedio.toFixed(2);
}