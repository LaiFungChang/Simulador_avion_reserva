document.addEventListener('DOMContentLoaded', function() {
    const adultsInput = document.getElementById('adults');
    const childrenInput = document.getElementById('children');
    const infantsInput = document.getElementById('infants');
    const seats = document.querySelectorAll(".seat");
    const selectedSeatInput = document.getElementById("seats");

    function sumarPasajeros() {
        const adultos = parseInt(adultsInput.value) || 0;
        const niños = parseInt(childrenInput.value) || 0;
        const infantes = parseInt(infantsInput.value) || 0;
        
        return adultos + niños + infantes;
    }

    function actualizarDisponibilidadAsientos() {
        const totalPasajeros = sumarPasajeros();
        
        if (totalPasajeros > 0) {
            seats.forEach(asiento => {
                const asientoNumero = parseInt(asiento.dataset.value.substring(1));
                
                if (asientoNumero <= totalPasajeros) {
                    asiento.disabled = false;
                } else {
                    asiento.disabled = true;
                }
            });
        } else {
            // Si no hay pasajeros, deshabilitar todos los asientos
            seats.forEach(asiento => {
                asiento.disabled = true;
            });
        }
    }

    seats.forEach(seat => {
        seat.addEventListener("click", function() {
            seat.classList.toggle("seat-selected");
            selectedSeatInput.value = seat.getAttribute("data-value");
        });
    });

    adultsInput.addEventListener('input', function() {
        actualizarDisponibilidadAsientos();
    });

    childrenInput.addEventListener('input', function() {
        actualizarDisponibilidadAsientos();
    });

    infantsInput.addEventListener('input', function() {
        actualizarDisponibilidadAsientos();
    });

    // Llamar a la función inicial para establecer la disponibilidad inicial de asientos
    actualizarDisponibilidadAsientos();
});