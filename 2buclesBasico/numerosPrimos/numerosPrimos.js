// Números Primos en un Rango
// Descripción
// Escribe un programa en JavaScript que busca los numeros primos entre el 9 y el 9999. El programa debe encontrar y devolver un array con todos los números primos en ese rango.

// Requisitos
// Usar un bucle para iterar a través del rango de números.
// Usar condicionales para verificar si un número es primo.
// Un número primo es aquel que solo es divisible por 1 y por sí mismo.
// Introducir los numeros primos en un array y sacarlos por consola.

function divisoresNumero (numero) {
    const divisores = [ ]
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            divisores.push(i)
        }
    }
    return divisores
}

function numeroPrimo (numero) {
    const divisores = divisoresNumero(numero)
    let esNumeroPrimo = true
    for (let i = 1; i < divisores.length ;i++) {
        if ( divisores[i] !== 1 && divisores[i] !== numero) {
            esNumeroPrimo = false
        }
    }
    return esNumeroPrimo
}


const numerosPrimos = []

for (let i = 9; i <= 9999; i++){
    if (numeroPrimo(i) === true) {
        numerosPrimos.push(i)
    }

}
console.log(numerosPrimos);