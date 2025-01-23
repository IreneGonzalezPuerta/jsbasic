let numero = [1, 2, 3 ,4 , 5 , 6 , 7, 8 , 9, 10]

function parOImpar (numero){
    if ((numero) % 2 === 0){
        return "El número "+ numero + " es par.";
    }else {
        return "El número " + numero + " es impar.";
    }
};

console.log (parOImpar(numero [5]));