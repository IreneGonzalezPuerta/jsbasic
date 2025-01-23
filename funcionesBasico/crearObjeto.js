
function crearObjeto (nombre, apellidos, edad, ocupacion) {
    const persona = {
        nombre: nombre,
        apellidos: apellidos,
        edad: edad,
        ocupacion: ocupacion,
    };
    return persona;
}

const persona1 = crearObjeto ("Irene", "Gonzalez", "32", "Programadora Junior");
console.log (persona1);

