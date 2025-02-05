const estudiantes = [
    { nombre: "Ana", edad: 20, calificaciones: 85 },
    { nombre: "Luis", edad: 22, calificaciones: 90 },
    { nombre: "Carlos", edad: 19, calificaciones: 78 },
  ];
  
  function buscarEstudiantePorNombre(estudiantes, nombreBuscado) {
    for (let i = 0; i < estudiantes.length; i++) {
      if (estudiantes[i].nombre === nombreBuscado) {
        return estudiantes[i];
      }
    }
    return "Estudiante no encontrado";
  }
  
  const estudianteEncontrado = buscarEstudiantePorNombre(estudiantes, "Luis");
  console.log(estudianteEncontrado);