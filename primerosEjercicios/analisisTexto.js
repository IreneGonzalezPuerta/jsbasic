let color ="amarillo"

console.log (color.length)

if (color.length > 5) {
    console.log("El "+ color + " tiene más de 5 letras")
}


let largoAmarillo = (color.length >= 5);
console.log(largoAmarillo);

let empiezaPorVocal =( color.startsWith ('a','e','i','o', 'u'))
console.log(empiezaPorVocal);

let correcto = (largoAmarillo && empiezaPorVocal);

if (correcto) {
    console.log ("El color es correcto")
}else{
    console.log ("El color no cumple con los parámetros esperados")
}