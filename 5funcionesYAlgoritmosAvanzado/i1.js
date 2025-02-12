
const findBestInClass = (course) => {
    let bestGrades = 0;
    let bestStudent = " ";

   schoolData.students.forEach ((student)=> { 
        let average = 0;
        const scores = student.score[course];
        if (scores) {
            scores.forEach((score)) => {
            average += score / scores.length;
            });
            if ( average > bestGrade) {
                bestGrade = average;
                bestStudent = student.name;
            }
        }      
    }
        
    return[bestGrade , bestStudent]      
}
        
        

    return [bestGrade, bestStudent];
        
}


findCourseChampion();