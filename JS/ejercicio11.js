function calcular() {

    const kilometros = parseFloat(document.getElementById('kilometros').value);

    if (isNaN(kilometros)) {
        alert('Por favor ingresa un número');
        return;
    }

    // Convertir kilómetros a millas
    const millas = kilometros * 0.621371;

    console.log("Millas: " + millas);

    // Mostrar resultado
    document.getElementById('millas').value = millas.toFixed(2);
}