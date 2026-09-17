const input = document.getElementById("nuevoElemento");
const botonAgregar = document.getElementById("agregarBtn");
const lista = document.getElementById("lista");


//agregar un elemento
function agregarElemento(){


    const texto = input.value.trim();

    if(texto !== ""){

        //crear un nuevo elemento li
        const li = document.createElement("li");

        //agregar una clase
        li.classList.add("elemento");

        //crear el texto
        const textoNodo = document.createTextNode(texto);

        //agregar el texto al li
        li.appendChild(textoNodo);


        //botón eliminar
        const botonEliminar = document.createElement("button");

        botonEliminar.textContent = "Eliminar";

        botonEliminar.classList.add("boton-eliminar");


        //eliminar
        botonEliminar.addEventListener("click", function(){

            li.remove();

        });


        //agregar botón al li
        li.appendChild(botonEliminar);

        //agregar a la lista
        lista.appendChild(li);

        //limpiar el campo
        input.value = "";

    }else{

        alert("Escribe algo para agregar a la lista.");

    }
}


//botón agregar
botonAgregar.addEventListener("click", agregarElemento);