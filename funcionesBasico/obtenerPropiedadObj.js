function obtnerOcupacion (persona) {
    return persona.ocupacion
}
const persona3 = {nombre: "Alin", edad: "34", ocupacion: "autonomo"};
const ocupacion = obtnerOcupacion (persona3);
console.log (ocupacion);
