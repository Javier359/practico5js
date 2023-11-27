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