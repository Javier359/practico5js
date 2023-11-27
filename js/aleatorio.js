let numeroMagico;
let juegoIniciado = false;

// Función para generar un número aleatorio entre 1 y 100
function generarNumeroMagico() {
    numeroMagico = Math.floor(Math.random() * 100) + 1;
}
// Función para actualizar el mensaje de pista según la suposición del usuario
function actualizarMensajePista(mensaje) {
    const hintElemento = document.getElementById("hint");
    hintElemento.textContent = mensaje;
}
// Event listener para el botón "Comenzar el juego"
document.getElementById("startGame").addEventListener("click", function() {
    generarNumeroMagico();
    juegoIniciado = true;
    actualizarMensajePista("¡El juego ha comenzado! Adivina un número entre 1 y 100.");
});

// Event listener para el botón "Enviar"
document.getElementById("submitGuess").addEventListener("click", function() {
    if (juegoIniciado) {
        const suposicionUsuario = parseInt(document.getElementById("userGuess").value);
        if (!isNaN(suposicionUsuario) && suposicionUsuario >= 1 && suposicionUsuario <= 100) {
            comprobarAdivinanza(suposicionUsuario);
        } else {
            alert("Ingresa un número válido entre 1 y 100.");
        }
    } else {
        alert("Primero debes comenzar el juego.");
    }
});
// Función para comprobar si el usuario adivinó el número
function comprobarAdivinanza(suposicionUsuario) {
    if (suposicionUsuario === numeroMagico) {
        actualizarMensajePista("¡Felicidades! Adivinaste el número.");
        juegoIniciado = false;
    } else if (suposicionUsuario < numeroMagico) {
        actualizarMensajePista("El número que ingresaste es menor al número mágico.");
    } else {
        actualizarMensajePista("El número que ingresaste es mayor al número mágico.");
    }
}