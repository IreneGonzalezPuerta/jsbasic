

let suma = [42, 7, 89, 15, 63, 28, 90, 34, 56, 11, 72, 5, 19, 84, 23, 67, 49, 38, 77, 2]


const numerosPares = suma.filter((numero)=>{
    return numero % 2 === 0;
});
console.log(numerosPares);

numerosPares.forEach((el) => {
    return el ;
});
console.log(numerosPares)

// for (let i = 0; i < suma.length ; i++) {
    
//     if ((suma[i]) % 2 === 0) {
//         console.log( suma[i] + " Par." );
        
//     } else {
//         console.log (suma[i] + " Impar."  );
//     }
    
// }