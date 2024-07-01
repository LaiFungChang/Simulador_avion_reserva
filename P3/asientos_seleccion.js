/* RECORDATORIOS
contains(class) --> verifica si el elemento tiene esa clase, si la tiene devuelv true sino false
e.target
*/

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


