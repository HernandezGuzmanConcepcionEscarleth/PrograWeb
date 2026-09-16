// Arreglo donde se guardan los estudiantes
let estudiantes = [];

function agregar() {

    // Obtener los datos
    let nombre = document.getElementById('nombre').value;
    let calificacion = parseFloat(document.getElementById('calificacion').value);

    // Verificar que los campos tengan datos
    if (nombre === "" || isNaN(calificacion)) {
        alert("Ingresa el nombre y una calificación");
        return;
    }

    // Crear el objeto estudiante
    let estudiante = {
        nombre: nombre,
        calificacion: calificacion
    };

    // Agregar estudiante al arreglo
    estudiantes.push(estudiante);

    alert("Estudiante agregado");

    // Limpiar los campos
    document.getElementById('nombre').value = "";
    document.getElementById('calificacion').value = "";
}


function calcular() {

    // Verificar que existan estudiantes
    if (estudiantes.length === 0) {
        alert("Primero agrega estudiantes");
        return;
    }

    // Sumar las calificaciones
    let suma = estudiantes.reduce((total, estudiante) =>
        total + estudiante.calificacion, 0);

    // Calcular promedio
    let promedio = suma / estudiantes.length;

    // Obtener la calificación más alta
    let calificacionMayor = Math.max(
        ...estudiantes.map(estudiante => estudiante.calificacion)
    );

    // Obtener la calificación más baja
    let calificacionMenor = Math.min(
        ...estudiantes.map(estudiante => estudiante.calificacion)
    );

    // Buscar al estudiante con mayor calificación
    let estudianteMayor = estudiantes.find(
        estudiante => estudiante.calificacion === calificacionMayor
    );

    // Buscar al estudiante con menor calificación
    let estudianteMenor = estudiantes.find(
        estudiante => estudiante.calificacion === calificacionMenor
    );

    // Mostrar resultados
    document.getElementById('promedio').value = promedio.toFixed(2);
    document.getElementById('mayor').value = estudianteMayor.nombre;
    document.getElementById('menor').value = estudianteMenor.nombre;
}