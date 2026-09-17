// Obtener las tareas guardadas
function obtenerTareas(){

    let tareas = localStorage.getItem("tareas");

    if(tareas === null){
        return [];
    }

    return JSON.parse(tareas);
}


// Closure para manejar las tareas
const manejarTareas = (() => {

    // Agregar una tarea
    const agregar = (texto) => {

        let tareas = obtenerTareas();

        tareas.push(texto);

        localStorage.setItem(
            "tareas",
            JSON.stringify(tareas)
        );
    };


    // Eliminar una tarea
    const eliminar = (indice) => {

        let tareas = obtenerTareas();

        tareas.splice(indice, 1);

        localStorage.setItem(
            "tareas",
            JSON.stringify(tareas)
        );
    };


    return {
        agregar,
        eliminar
    };

})();


// Función para agregar una tarea
function agregarTarea(){

    let tarea = document.getElementById("tarea").value;

    // Validar campo vacío
    if(tarea === ""){

        Swal.fire({
            icon: "warning",
            title: "Campo vacío",
            text: "Escribe una tarea"
        });

        return;
    }

    manejarTareas.agregar(tarea);

    document.getElementById("tarea").value = "";

    renderizarTareas();
}


// Función para eliminar una tarea
function eliminarTarea(indice){

    Swal.fire({
        title: "¿Eliminar tarea?",
        text: "La tarea será eliminada",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar"

    }).then((resultado) => {

        if(resultado.isConfirmed){

            manejarTareas.eliminar(indice);

            renderizarTareas();

            Swal.fire(
                "Eliminada",
                "La tarea fue eliminada",
                "success"
            );
        }

    });
}


// Mostrar las tareas
function renderizarTareas(){

    let tareas = obtenerTareas();

    let lista = document.getElementById("listaTareas");

    lista.innerHTML = "";

    tareas.forEach((tarea, indice) => {

        lista.innerHTML += `
            <div class="tarea-item">

                <span>${tarea}</span>

                <button class="boton-eliminar"
                    onclick="eliminarTarea(${indice})">
                    Eliminar
                </button>

            </div>
        `;
    });
}


// Mostrar las tareas al abrir la página
renderizarTareas();