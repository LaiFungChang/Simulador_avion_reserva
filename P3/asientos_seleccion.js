/* RECORDATORIOS
contains(class) --> verifica si el elemento tiene esa clase, si la tiene devuelv true sino false
e.target
*/

/* Seccion principal */

//obtenemos los botones
let botonRegistro = document.querySelector(".boton_registro")
let botonReservar = document.querySelector(".boton_reservar")

//añadimos el evento al boton reservar, para que se despliegue el menu de reserva
botonReservar.addEventListener("click", () =>{

    //obtenemos el panel de reservacion
    let reservacion = document.querySelector(".reservation-panel")
    //hacemos que se renderice
    reservacion.style.display = "flex";

    //obtenemos el panel pincipal
    let pincipal = document.querySelector(".section_img")
    pincipal.style.display = "none"

    //obtenemos el panel de los botones de reserva
    let botones = document.querySelector(".action-buttons")
    botones.style.display = "flex"
})


/*Seccion del panel de reservacion */

//validaciones panel contacto

//hacemos la validacion para el input del nombre
let inputContacto = document.querySelector("#contact")

inputContacto.addEventListener('input', function() {
    let filteredValue = '';
    // Recorrer cada caracter del valor actual del input
    for (let i = 0; i < this.value.length; i++) {
        let char = this.value[i];
        // Verificar si el caracter es una letra o un espacio
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === ' ') {
            filteredValue += char; // Agregar el caracter al valor filtrado
        }
    }
    // Establecer el valor filtrado de vuelta en el input
    this.value = filteredValue;
});


//hacemos la validacion para el input del pasaporte
let inputPasaporte = document.querySelector("#passport");
inputPasaporte.addEventListener('input', function() {
    let value = this.value.trim(); // Obtener el valor del input y eliminar espacios en blanco al principio y al final
    let formattedValue = '';

    // Convertir los primeros tres caracteres a mayúsculas y filtrar solo letras
    for (let i = 0; i < Math.min(value.length, 3); i++) {
        let char = value[i];
        if (char >= 'a' && char <= 'z') {
            char = char.toUpperCase(); // Convertir a mayúsculas si es minúscula
        }
        if (char >= 'A' && char <= 'Z') {
            formattedValue += char;
        }
    }

    // Agregar los caracteres numéricos restantes hasta un máximo de 9 caracteres en total
    for (let i = 3; i < Math.min(value.length, 9); i++) {
        let char = value[i];
        if (char >= '0' && char <= '9') {
            formattedValue += char;
        }
    }

    // Limitar a un máximo de 9 caracteres
    formattedValue = formattedValue.substring(0, 9);

    // Actualizar el valor del input
    this.value = formattedValue;
});


//hacemos la validacion para el input del telefono
let inputTelefono = document.querySelector("#phone")
inputTelefono.addEventListener('input', function() {
    let value = this.value.trim(); // Obtener el valor del input y eliminar espacios en blanco al principio y al final
    let formattedValue = '';

    // Filtrar y formatear solo caracteres numéricos
    for (let i = 0; i < value.length; i++) {
        let char = value[i];
        // Verificar si el caracter es un número del 0 al 9
        if (char >= '0' && char <= '9') {
            formattedValue += char;
        }
    }

    // Aplicar el formato "0000-0000000"
    if (formattedValue.length > 4) {
        formattedValue = formattedValue.substring(0, 4) + '-' + formattedValue.substring(4, 11);
    }

    // Actualizar el valor del input
    this.value = formattedValue;
});







//Funcion que suma la cantidad de pasajeros
function sumarPasajeros() {
    const adultsInput = document.getElementById('adults');
    const childrenInput = document.getElementById('children');
    const infantsInput = document.getElementById('infants');
    const adultos = parseInt(adultsInput.value) || 0;
    const niños = parseInt(childrenInput.value) || 0;
    const infantes = parseInt(infantsInput.value) || 0;
    
    return adultos + niños + infantes;
}


var asientosHTML = document.querySelectorAll(".seat")
var inputAsientos = document.getElementById("seats")

//Obtenemos los inputs de la cantidad de pasajeros
const adultsInput = document.getElementById('adults');
const childrenInput = document.getElementById('children');
const infantsInput = document.getElementById('infants');
//Los almacenamos en una lista
var todosLosInputs = [adultsInput , childrenInput , infantsInput]

//agregamos una funcion en los inputs para que cada vez que se modifique, se deseleccionen los asientos
todosLosInputs.forEach((input)=>{
    input.addEventListener("input", ()=>{
        inputAsientos.value = ""
        asientosHTML.forEach((asiento) =>{
            asiento.classList.remove("seleccionado")
        })
    })
})


//Se le agrega las funcionalidades a cada asiento, para que se puedan elegir, deseleccionar y asi
asientosHTML.forEach(asiento => {
    asiento.addEventListener("click" , function(e) {

        //Obtenemos el asiento que desencadeno el evento
        var asientoDelEvento = e.target

        //verificamos si el asiento ya esta seleccionado para deseleccionarlo
        if (asientoDelEvento.classList.contains("seleccionado") ) {
            asientoDelEvento.classList.remove("seleccionado");
            //Quitamos el asiento del input
            inputAsientos.value = inputAsientos.value.replace(asientoDelEvento.getAttribute("data-value"), "")
            return null
        }

        //verifica si el asiento esta ocupado, para que no haga nada
        if (asientoDelEvento.classList.contains("ocupado")) {
            return null
        }

        //si el asiento esta libre, procedemos a hacer validaciones
        let contAsientos= sumarPasajeros();
        let contAsientosSelect = 0;

        //contamos la cantidad de asientos seleccionados
        asientosHTML.forEach(asiento =>{
            if (asiento.classList.contains("seleccionado")) {
                contAsientosSelect += 1;
            }
        })
        //verificamos que la cantidad de los asientos seleccionados, no pase que la cantidad proporcionada por el usuario
        if (contAsientos > contAsientosSelect) {
            inputAsientos.value += " " + asientoDelEvento.getAttribute("data-value")
            asientoDelEvento.classList.add("seleccionado")
        }
    })
})


