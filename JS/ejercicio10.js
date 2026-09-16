        function calcular() {
            const celsius = parseFloat(document.getElementById('grado-celsius').value);
            if (isNaN(celsius)) {
                alert('Por favor ingresa un número');
                return;
            }
            const fahrenheit = (celsius * 9 / 5) + 32;
            document.getElementById('grado-fahrenheit').value = fahrenheit.toFixed(2);
        }