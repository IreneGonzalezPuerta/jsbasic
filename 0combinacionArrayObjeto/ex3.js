const estudiantes = [
    { nombre: "Ana", edad: 20, calificaciones: 85 },
    { nombre: "Luis", edad: 22, calificaciones: 90 },
    { nombre: "Carlos", edad: 19, calificaciones: 78 },
  ];
  
  function calcularSumaCalificaciones(estudiantes) {
    let suma = 0;
    for (let i = 0; i < estudiantes.length; i++) {
      suma += estudiantes[i].calificaciones;
    }
    return suma;
  }
  
  const totalCalificaciones = calcularSumaCalificaciones(estudiantes);
  console.log("Suma total de calificaciones:", totalCalificaciones);
  
  