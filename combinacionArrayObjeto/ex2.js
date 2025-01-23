const students = [
    {name: "Jonny", age: 26},
    {name: "Eva", age: 24},
    {name: "Louisa", age: 15},
];


function MayoriaEdad(students) {
    const mayoresDeEdad = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].age >= 21) {
        mayoresDeEdad.push(students[i]);
      }
    }
    return mayoresDeEdad;
  }
  
  const resultado = MayoriaEdad(students);
  console.log(resultado);




  const students = [
    {name: "Jonny", age: 26},
    {name: "Eva", age: 24},
    {name: "Louisa", age: 15},
];


function MayoriaEdad(students) {
    const mayoresDeEdad = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].age >= 21) {
        mayoresDeEdad.push(students[i]);
      }
    }
    return mayoresDeEdad;
  }
  
  const resultado = MayoriaEdad(students);
  console.log(resultado);


