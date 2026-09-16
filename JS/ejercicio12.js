function calcular() {

    const pesos = parseFloat(document.getElementById('pesos').value);

    if (isNaN(pesos)) {
        alert('Por favor ingresa un número');
        return;
    }

    // Tipo de cambio utilizado
    const tipoCambio = 18.50;

    // Convertir pesos a dólares
    const dolares = pesos / tipoCambio;

    console.log("Dólares: " + dolares);

    // Mostrar resultado
    document.getElementById('dolares').value = dolares.toFixed(2);
}