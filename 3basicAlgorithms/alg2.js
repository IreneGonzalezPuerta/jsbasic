const numeros = [10, 3, 5, 20, 8];

let max = numeros [0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  
  console.log("El número más grande es:", max);