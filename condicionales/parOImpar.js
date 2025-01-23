let numero = [10, 15, 22, 3, 40];


function parOImpar (numero){
    if ((numero) % 2 === 0){
        return "El número "+ numero + " es par.";
    }else {
        return "El número " + numero + " es impar.";
    }
};

console.log (parOImpar(numero [2]));