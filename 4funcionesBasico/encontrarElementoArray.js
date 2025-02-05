function encontrarElemento(elementos, elementoBuscado){
    return elementos.includes(elementoBuscado);
}

const numeros = [1 ,2 ,3 ,4 ,5 ]
const encontrado = encontrarElemento (numeros, 3 );
console.log(encontrado);

