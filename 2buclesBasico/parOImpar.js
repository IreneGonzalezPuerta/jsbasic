let numero = [1, 2, 3 ,4 , 5 , 6 , 7, 8 , 9, 10];




    for (let i = 0; i < numero.length; i++) {
            const element = numero[i];
            
        if ((numero[i]) % 2 === 0){
            return "El número "+ numero[i] + " es par.";
        }else {
            return "El número " + numero[i] + " es impar.";
        }
    };

    console.log(numero);
  

    

