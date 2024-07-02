/* RECORDATORIOS
contains(class) --> verifica si el elemento tiene esa clase, si la tiene devuelv true sino false
e.target
*/

/* SECCION PRINCIPAL */

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



/*SECCION DEL PANEL DE RESERVACION*/
//obtenemos los botones
let botonRegistrar = document.querySelector(".boton_registro")

//añadimos el evento al boton reservar, para que se despliegue el menu de reserva
botonRegistrar.addEventListener("click", () =>{

    //obtenemos el panel de reservacion
    let registro = document.querySelector(".registro-panel")
    //hacemos que se renderice
    registro.style.display = "flex";

    //obtenemos el panel pincipal
    let pincipal = document.querySelector(".section_img")
    pincipal.style.display = "none"

    //obtenemos el panel de los botones de reserva
    let botones = document.querySelector(".action-buttons")
    botones.style.display = "flex"
})


/*BOTON VOLVER para ambos paneles*/ 
// Obtenemos todos los botones de volver
let botonesVolver = document.querySelectorAll(".boton-volver");

// Añadimos el evento a cada botón de volver
botonesVolver.forEach(boton => {
    boton.addEventListener("click", () => {
        // Obtenemos el panel principal
        let principal = document.querySelector(".section_img");
        // Mostramos el panel principal
        principal.style.display = "flex";

        // Obtenemos el panel de los botones de reserva
        let botones = document.querySelector(".action-buttons");
        botones.style.display = "flex";

        // Obtenemos todos los paneles que pueden estar visibles y los ocultamos
        let paneles = document.querySelectorAll(".reservation-panel, .registro-panel");
        paneles.forEach(panel => {
            panel.style.display = "none";
        });
    });
});

//obtenemos los botones
//guarda y redirige a panel de costos
let botonGuardar = document.querySelector(".boton-guardar")

//añadimos el evento al boton reservar, para que se despliegue el menu de reserva
botonGuardar.addEventListener("click", () =>{

    //obtenemos el panel de reservacion
    let costo = document.querySelector(".costos-panel")
    //hacemos que se renderice
    costo.style.display = "flex";

    //obtenemos el panel pincipal
    let registro = document.querySelector(".reservation-panel")
    registro.style.display = "none"

    //obtenemos el panel de los botones de reserva
    //let botones = document.querySelector(".action-buttons")
    //botones.style.display = "flex"
})

//obtenemos los botones
//guarda y redirige a panel de costos
let botonVolverReserva = document.querySelector(".boton-volver-reserva")
//añadimos el evento al boton editar reserva, para que se despliegue el menu de reserva
botonVolverReserva.addEventListener("click", () =>{
    

    //obtenemos el panel de reservacion
    let costo = document.querySelector(".costos-panel")
    //hacemos que se renderice
    costo.style.display = "none";
    
    //obtenemos el panel pincipal
    let registro = document.querySelector(".reservation-panel")
    registro.style.display = "flex"

    //obtenemos el panel de los botones de reserva
    //let botones = document.querySelector(".action-buttons")
    //botones.style.display = "flex"
})

/*

    Input del pasaporte con solo numeros

 inputPasaporte.addEventListener('input', function() {
    let value = this.value.trim(); // Obtener el valor del input y eliminar espacios en blanco al principio y al final
    let formattedValue = '';

    // Agregar los caracteres numéricos restantes hasta un máximo de 9 caracteres en total
    for (let i = 0; i < Math.min(value.length, 9); i++) {
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

    Input del telefono en formato Internacional

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
	if (formattedValue.length > 1){
		this.value = "+"
	}

    // Actualizar el valor del input
    this.value = formattedValue.substring(0,15);
});

    Cambiar la validacion del boton guardar --> inputTelefono.value.length < 12

*/

//validaciones panel contacto
//hacemos la validacion para el input del nombre
var inputContacto = document.querySelector("#contact")

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
var inputPasaporte = document.querySelector("#passport");
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
var inputTelefono = document.querySelector("#phone")
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

//sacamos el input del correo
var inputCorreo = document.querySelector("#email")
function validarCorreoElectronico(correo) {
    // Expresión regular para validar un correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}

//agregamos las validaciones al boton guardar del panel de reserva
var inputGuardarReserva = document.querySelector("#botonGuardarReserva")
//agregamos el evento al boton guardar
inputGuardarReserva.addEventListener("click" ,()=>{
    if (inputContacto.value == ""){
        alert("El contacto es invalido")
        return null
    }
    else if(inputPasaporte.value.length < 9){
        alert("Pasaporte incompleto")
        return null
    }
    else if(inputTelefono.value.length < 12){
        alert("telefono incompleto")
        return null
    }
    else if(!validarCorreoElectronico(inputCorreo.value)){
        alert("Correo invalido")
        return null
    }
    else if(inputAsientos.value.split(" ").length -1 != sumarPasajeros()){
        alert("Rellene los asientos")
        return null
    }
});

//agregamos la funcion al boton borrar
var inputBorrarReserva = document.querySelector("#botonBorrarReserva")
inputBorrarReserva.addEventListener("click" , ()=>{
    //obtenemos los inputs restantes de la parte de info vuelo
    let inputEquipajeRegistrado = document.querySelector("#registered-luggage")
    let inputEquipajeMano = document.querySelector("#hand-luggage")
    let inputAdultos = document.querySelector("#adults")
    let inputNiños = document.querySelector("#children")
    let inputInfantes = document.querySelector("#infants")

    //procedemos a borrar cada valor de los inputs
    inputContacto.value = ""
    inputPasaporte.value = ""
    inputTelefono.value = ""
    inputCorreo.value = ""
    inputEquipajeRegistrado.value = "0"
    inputEquipajeMano.value = "0"
    inputAdultos.value = "0"
    inputNiños.value = "0"
    inputInfantes.value = "0"
    inputAsientos.value = ""
    asientosHTML.forEach((asiento) =>{
        asiento.classList.remove("seleccionado")
    })

})



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
            inputAsientos.value = inputAsientos.value.replace(" "+asientoDelEvento.getAttribute("data-value"), "")
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
            if(contAsientos == 0){
                inputAsientos.value += asientoDelEvento.getAttribute("data-value")
            }
            else{
                inputAsientos.value += " " + asientoDelEvento.getAttribute("data-value")
            }
            asientoDelEvento.classList.add("seleccionado")
        }
    })
})


// cremaos el objeto ReservaPersona
var contadorReservas = 1
class ReservaPersona{
    constructor(nombre,pasaporte,boletoAdultos,boletoNiños,boletoInfantes, pago){
        this.nombre = nombre;
        this.pasaporte = pasaporte;
        this.boletoAdultos = boletoAdultos;
        this.boletoNiños = boletoNiños;
        this.boletoInfantes = boletoInfantes;
        this.pago = pago;
        this.identificador = `PersonaReserva${contadorReservas}`
        contadorReservas += 1;
    }
}
