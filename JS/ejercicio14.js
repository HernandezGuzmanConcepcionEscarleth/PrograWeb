function calcular() {

    // Obtener los números escritos
    let entrada = document.getElementById('numeros').value;

    // Verificar que el campo no esté vacío
    if (entrada === "") {
        alert("Por favor ingresa algunos números");
        return;
    }

    // Separar los números por comas
    let numeros = entrada.split(",").map(Number);

    // Verificar que todos sean números
    if (numeros.some(isNaN)) {
        alert("Ingresa solamente números separados por comas");
        return;
    }

    // Obtener el número mayor
    let mayor = Math.max(...numeros);

    // Obtener el número menor
    let menor = Math.min(...numeros);

    // Sumar todos los números
    let suma = numeros.reduce((total, numero) => total + numero, 0);

    // Calcular el promedio
    let promedio = suma / numeros.length;

    // Mostrar los resultados
    document.getElementById('mayor').value = mayor;
    document.getElementById('menor').value = menor;
    document.getElementById('promedio').value = promedio.toFixed(2);
}