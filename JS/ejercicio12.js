function calcular() {

    const pesos = parseFloat(document.getElementById('pesos').value);

    if (isNaN(pesos)) {
        alert('Por favor ingresa un número');
        return;
    }

    const tipoCambio = 18.50;

    //pesos a dólares
    const dolares = pesos / tipoCambio;

    console.log("Dólares: " + dolares);

    //resultado
    document.getElementById('dolares').value = dolares.toFixed(2);
}