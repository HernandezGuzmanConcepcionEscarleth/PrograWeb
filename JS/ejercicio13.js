function calcular() {

    const edad = parseFloat(document.getElementById('edad').value);

    if (isNaN(edad)) {
        alert('Por favor ingresa un número');
        return;
    }

    const puedevotar = (edad >= 18);

    if (puedevotar) {
        console.log("Puedes votar");
    } else {
        console.log("No puedes votar");
    }

    document.getElementById('puede-votar').value =
        puedevotar ? "Puedes votar" : "No puedes votar";
} 