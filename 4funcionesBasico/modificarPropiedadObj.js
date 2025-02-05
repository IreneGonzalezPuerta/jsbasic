// Crea una función llamada cambiarEdad que reciba dos parámetros: un objeto persona y un número nuevaEdad.
// Dentro de la función, actualiza la propiedad edad del objeto persona con el valor de nuevaEdad.
// Muestra el objeto modificado en la consola.

function cambiarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
  }
  
  const persona2 = { nombre: "Luis", edad: 25, ocupacion: "Doctor" };
  cambiarEdad(persona2, 28);
  console.log(persona2);