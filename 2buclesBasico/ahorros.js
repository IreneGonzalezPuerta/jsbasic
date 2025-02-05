// Crea una variable llamada ahorros e inicialízala con 0.
// Usa un bucle while que se ejecute indefinidamente.
// Dentro del bucle:
// Solicita al usuario que ingrese un monto a través de prompt() (o simula entradas si prompt no está disponible).
// Si el usuario escribe "salir", termina el bucle.
// Convierte la entrada a un número y súmala a la variable ahorros.
// Muestra el monto actual de los ahorros.
// Al finalizar el bucle, muestra un mensaje con el total de los ahorros.
let ahorros = 0;

while (ahorros <= 0) {
    const response = prompt('Ingresa tu dinero aquí');
// al no marcar un ritmo ni un principio el bucle es infinito.  
if(response === "salir") {
    break;
} else {
    ahorros += response
}

}