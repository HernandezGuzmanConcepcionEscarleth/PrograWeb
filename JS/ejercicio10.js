function convertir() {

    // Obtener el valor de grados Celsius
    let celsius = document.getElementById("celsius").value;

    // Validar que el campo no esté vacío
    if (celsius === "") {
        alert("Ingresa una temperatura");
        return;
    }

    // Convertir el valor a número
    celsius = parseFloat(celsius);

    // Realizar la conversión
    let fahrenheit = (celsius * 9 / 5) + 32;

    // Mostrar el resultado
    document.getElementById("fahrenheit").value = fahrenheit + " °F";
}