const students = [
    {name: "Jonny", age: 16},
    {name: "Eva", age: 14},
    {name: "Louisa", age: 15},
];

console.log(students);

function printStudents (students) {
    for (let i= 0;  i < students.length ; i++) {
        console.log(
            `Nombre: ${students[i].name}, Edad: ${students[i].age}`
          );
    } 
}

printStudents (students);
