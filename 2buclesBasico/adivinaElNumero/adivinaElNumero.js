
const generateRandomNumber = (min, max ) => {
    return Math.floor(Math.random()*(max - min + 1)+ min);
};
const secretNumber = generateRandomNumber (0, 10);
console.log(secretNumber);

let intento = prompt ("Dime un número entre 0 y 10.");
let repeticiones = 1;

while (intento != secretNumber) {
    intento = prompt ("Dime un número entre 0 y 10.")
    
    if ( intento < secretNumber ) {

        alert ('¡Muy bajo!');
        
    } else if (intento > secretNumber) {
        alert ('¡Muy alto!');
        
    } else {
        alert ('Enhorabuena. Has ganado');
    }
};
