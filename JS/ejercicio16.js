const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => a / b;


const calcularOperacion = (operacion) => {

    
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    
    if(numero1 === "" || numero2 === ""){
        Swal.fire({
            icon: "warning",
            title: "Campos vacíos",
            text: "Ingresa los dos números"
        });
        return;
    }

    
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    if(isNaN(numero1) || isNaN(numero2)){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Ingresa valores numéricos"
        });
        return;
    }

    let resultado;


    if(operacion === "suma"){
        resultado = sumar(numero1, numero2);
    }

    else if(operacion === "resta"){
        resultado = restar(numero1, numero2);
    }

    else if(operacion === "multiplicacion"){
        resultado = multiplicar(numero1, numero2);
    }

    else if(operacion === "division"){

        if(numero2 === 0){
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se puede dividir entre cero"
            });
            return;
        }

        resultado = dividir(numero1, numero2);
    }

    
    document.getElementById("resultado").value = resultado;
};