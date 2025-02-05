const numeros = [1, 2, 3, 4, 5, 6];
let contador = 0;

for (let i = 0 ; i <numeros.length; i++) {
    if (numeros[i] % 2 === 0 ) {
    contador++
 }
}

console.log ("Cantidad de números pares:", contador)

