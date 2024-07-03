/* RECORDATORIOS
contains(class) --> verifica si el elemento tiene esa clase, si la tiene devuelv true sino false
e.target
*/


//Scrolls 

/* PANEL PRINCIPAL */

//boton reservar panel principal
let botonReservarPanelPrincipal = document.querySelector(".boton_reservar")
botonReservarPanelPrincipal.addEventListener("click", ()=>{
    //hacemos que se haga scroll al panel de resevacion
    document.querySelector(".reservation-form").scrollIntoView();
})

//boton registro panel principal
let botonRegistroPanelPrincipal = document.querySelector(".boton_registro")
botonRegistroPanelPrincipal.addEventListener("click", ()=>{
    document.querySelector(".registro-panel").scrollIntoView();
    despuesBotonRegistro()

})

/* Panel de reserva*/
let botonVolerPanelReserva = document.querySelector(".boton-volver-seccion-reservacion")
botonVolerPanelReserva.addEventListener("click" , ()=>{
    console.log("hola")
    document.querySelector(".section_img").scrollIntoView();
    borrarFormularioReserva()
})



function borrarFormularioReserva(){
    
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
        asiento.classList.remove("deshabilitado")
    })
    inputTipoAsiento.selectedIndex = 0
}






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

//agregamos la funcion al boton borrar
var inputBorrarReserva = document.querySelector("#botonBorrarReserva")
inputBorrarReserva.addEventListener("click" , borrarFormularioReserva
)

var inputTipoAsiento = document.querySelector("#tipoAsiento")
inputTipoAsiento.addEventListener("change", ()=>{
    //quitamos el estado de deshabilitado primero
    asientosHTML.forEach(asiento =>{
        asiento.classList.remove("deshabilitado")
    })
    let valorTipoAsiento = inputTipoAsiento.value;
    if (valorTipoAsiento == "Economico plus"){
        asientosHTML.forEach(asiento => {
            if (!asiento.classList.contains("plus")){
                asiento.classList.add("deshabilitado");
        }})
    }
    else if (valorTipoAsiento == "Economico bajo"){
        asientosHTML.forEach(asiento => {
            if(!asiento.classList.contains("bajo")){
                asiento.classList.add("deshabilitado")
            }
        })
    }
    else if(valorTipoAsiento == "Economico normal"){
        asientosHTML.forEach(asiento =>{
            if(asiento.classList.contains("bajo") || asiento.classList.contains("plus")){
                asiento.classList.add("deshabilitado")
            }
        })       
    }
})

//sacamos el resto de input's
var inputEquipajeRegistrado = document.querySelector("#registered-luggage")
var inputEquipajeMano = document.querySelector("#hand-luggage")
var inputAdultos = document.querySelector("#adults")
var inputNiños = document.querySelector("#children")
var inputInfantes = document.querySelector("#infants")

//agregamos las validaciones al boton guardar del panel de reserva y declaramos globalmente la columna del pago con porcentaje
var tablaPagoPorcentaje = document.querySelector("#tablaPagoPorcentaje")
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
    else{

        //Primero obtenemos las entradas de las tablas
        document.querySelector(".costos-panel").scrollIntoView();
        let tablaMaletaRegistrada = document.querySelector("#tablaMaletaRegistrada")
        let tablaMaletaRegistradaPago = document.querySelector("#tablaMaletaRegistradaPago")
        let tablaMaletaMano = document.querySelector("#tablaMaletaMano")
        let tablaMaletaManoPago = document.querySelector("#tablaMaletaManoPago")
        let tablaAdulto = document.querySelector("#tablaAdulto")
        let tablaAdultoPago = document.querySelector("#tablaAdultoPago")
        let tablaNiño = document.querySelector("#tablaNiño")
        let tablaNiñoPago = document.querySelector("#tablaNiñoPago")
        let tablaInfante = document.querySelector("#tablaInfante")
        let tablaInfantePago = document.querySelector("#tablaInfantePago")
        let tablaPago = document.querySelector("#tablaPago")
        let tablaTipoAsiento = document.querySelector("#tablaTipoAsiento")
        let tablaPorcentaje = document.querySelector("#tablaPorcentaje")

        //establecemos los valores de las tablas
        tablaTipoAsiento.textContent = inputTipoAsiento.value
        if(inputTipoAsiento.value == "Economico bajo"){tablaPorcentaje.textContent = "-10%"}
        if(inputTipoAsiento.value == "Economico normal"){tablaPorcentaje.textContent = "0%"}
        if(inputTipoAsiento.value == "Economico plus"){tablaPorcentaje.textContent = "10%"}

        tablaMaletaRegistrada.textContent = inputEquipajeRegistrado.value
        tablaMaletaMano.textContent = inputEquipajeMano.value
        tablaAdulto.textContent = inputAdultos.value
        tablaNiño.textContent = inputNiños.value
        tablaInfante.textContent = inputInfantes.value
        despuesDePagar()
    }
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
        if (inputTipoAsiento.value != "Economico normal" && inputTipoAsiento.value !="Economico bajo" && inputTipoAsiento.value !="Economico plus"){
            return null
        }
        //Obtenemos el asiento que desencadeno el evento
        var asientoDelEvento = e.target
        //verificamos si el asiento ya esta seleccionado para deseleccionarlo
        if (asientoDelEvento.classList.contains("seleccionado") ) {
            asientoDelEvento.classList.remove("seleccionado");
            //Quitamos el asiento del input
            inputAsientos.value = inputAsientos.value.replace(" "+asientoDelEvento.getAttribute("data-value"), "")
            return null
        }

        //verifica si el asiento esta ocupado o deshabilitdao, para que no haga nada
        if (asientoDelEvento.classList.contains("ocupado") || asientoDelEvento.classList.contains("deshabilitado")) {
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
var listaReservas = []
console.log("Estefan")
var contadorReservas = 1
class ReservaPersona{
    constructor(nombre,telefono,pasaporte,correo,tipoAsiento,equipajeRegistrado,equipajeMano,boletoAdulto,boletoNiño,boletoInfante,asiento ,cantidadAsientos ,pago){
        this.nombre = nombre;
        this.telefono = telefono;
        this.pasaporte = pasaporte;
        this.correo = correo;
        this.tipoAsiento = tipoAsiento;
        this.equipajeRegistrado = equipajeRegistrado;
        this.equipajeMano = equipajeMano;
        this.boletoAdulto = boletoAdulto;
        this.boletoNiño = boletoNiño;
        this.boletoInfante = boletoInfante;
        this.asiento = asiento;
        this.cantidadAsientos = cantidadAsientos;
        this.pago = pago;
        this.identificador = `ticket${contadorReservas}`
        contadorReservas += 1;
    }
}

function despuesDePagar(){
    //guardamos la informacion de la reserva en el array

    let nuevaReserva = new ReservaPersona(new String(inputContacto.value) , new String(inputTelefono.value) , new String(inputPasaporte.value) , new String(inputCorreo.value) , new String(inputTipoAsiento.value) , new String(inputEquipajeRegistrado.value) , new String(inputEquipajeMano.value ), new String(inputAdultos.value ), new String(inputNiños.value ), new String(inputInfantes.value) , new String(inputAsientos.value ), new Number(sumarPasajeros()) ,"500$")
    listaReservas.push(nuevaReserva)
    console.log(listaReservas)
    //Pasamos los asientos seleccionados a ocupados
    asientosHTML.forEach(asiento => {
        if (asiento.classList.contains("seleccionado")){
            asiento.classList.add("ocupado")
            asiento.classList.remove("seleccionado")
        }
        
    })
    borrarFormularioReserva()
}

function despuesBotonRegistro(){
    let fragmento = document.createDocumentFragment()
    let tablaRegistro = document.querySelector("#tablaRegistro")
    if(listaReservas.length != 0){
        listaReservas.forEach(reserva =>{
            //creamos las entradas de esta fila
            let fila = document.createElement("TR")
            fila.classList.add(reserva.identificador)
            let tdPasajero = document.createElement("TD")
            let tdEquipajeRegistrado = document.createElement("TD")
            let tdEquipajeMano = document.createElement("TD")
            let tdCantidadAsientos = document.createElement("TD")
            let tdAsientos = document.createElement("TD")

            //parte de los botones
            // Crear elementos HTML
            var tdVer = document.createElement('td');
            var tdEliminar = document.createElement('td');
            var botonVer = document.createElement('button');
            var botonEliminar = document.createElement('button');

            // Agregar clases a los botones
            botonVer.className = 'boton-ver';
            botonEliminar.className = 'boton-eliminar';

            // Agregar texto a los botones
            botonVer.textContent = 'Ver';
            botonEliminar.textContent = 'X';
            tdVer.appendChild(botonVer)
            tdEliminar.appendChild(botonEliminar)

            //rellenamos los datos
            tdPasajero.textContent = reserva.nombre
            tdEquipajeRegistrado.textContent = reserva.equipajeRegistrado
            tdEquipajeMano.textContent = reserva.equipajeMano
            tdCantidadAsientos.textContent = reserva.cantidadAsientos
            tdAsientos.textContent = reserva.asiento

            //agregamos los datos a la fila
            fila.appendChild(tdPasajero)
            fila.appendChild(tdEquipajeRegistrado)
            fila.appendChild(tdEquipajeMano)
            fila.appendChild(tdCantidadAsientos)
            fila.appendChild(tdAsientos)
            fila.appendChild(tdVer)
            fila.appendChild(tdEliminar)
            fragmento.appendChild(fila)
        })
    } //aqui termina el if
    tablaRegistro.innerHTML = ""
    tablaRegistro.appendChild(fragmento)
    let botonesEliminar = document.querySelectorAll(".boton-eliminar")
    botonesEliminar.forEach(eliminar => {
        eliminar.addEventListener("click", ()=>{
            let filaPadre = eliminar.parentElement.parentElement
            let ticket = filaPadre.className
            let reservaBorrar = null
            listaReservas.forEach(reserva=>{
                if (reserva.identificador == ticket){
                    reservaBorrar = reserva
                }
            });
            let asientosReserva = reservaBorrar.asiento
            asientosReserva = asientosReserva.trim()
            asientosReserva = asientosReserva.split(" ")
            asientosReserva.forEach(valorAsiento =>{
                asientosHTML.forEach(asiento =>{
                    if(asiento.getAttribute("data-value") == valorAsiento){
                        asiento.classList.remove("ocupado")
                    }
                })
            })
            listaReservas = listaReservas.filter(item => item!=reservaBorrar)
            tablaRegistro.removeChild(filaPadre)
        })
    })

}

