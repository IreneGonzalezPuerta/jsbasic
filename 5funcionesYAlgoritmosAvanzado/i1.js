
// Implement the function findCourseChampion that takes a course name as an argument and returns the name of the student with the highest average score in that course.
// Tengo un JSON llamado schoolData que dentro tiene diferentes keys que definen lo que es el "Colegio".

//Tengo dudas para enfrentar esta práctica. Entiendo que dentro del json schoolData, necesito acceder a la key students, y dentro de este array, existen otros json que corresponden a los datos de diferentes estudiantes. Entonces necesito crear una función en la que yo pueda introduzca el "courses" que quiero ver y me devuelve el "name" del que tiene mejor "scores" en ella.  Entonces, no sé como plantear la función porque si sumo los scores para ver quien es el mejor, no entiendo como conseguir que al introducir el nombre de la asignatura me devuelva el nombre del mejor estudiante.


const findCourseChampion = (course) => {
    let bestGrades = 0;
    let bestStudent = " ";


    schoolData.students.forEach ((student)=> { 
        let average = 0;
        if(scores) {
            const scores = student.score[course];
            scores.forEach((score)) => {
            average += score / scores.length;
        });
        console.log(average);
        }
    }
});

    return [bestGrade, bestStudent];



    
};

findCourseChampion();