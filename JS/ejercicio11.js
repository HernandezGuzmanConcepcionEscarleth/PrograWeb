function calcular() {

    const kilometros = parseFloat(document.getElementById('kilometros').value);

    if (isNaN(kilometros)) {
        alert('Por favor ingresa un número');
        return;
    }

    //kilómetros a millas
    const millas = kilometros * 0.621371;

    console.log("Millas: " + millas);

    //resultado
    document.getElementById('millas').value = millas.toFixed(2);
}