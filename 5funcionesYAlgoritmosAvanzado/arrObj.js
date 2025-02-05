const schoolData = {
    schoolName: "Highland Academy",
    yearFounded: 1995,
    students: [
      {
        id: "S101",
        name: "Emma Wilson",
        grade: 11,
        courses: ["Math", "Physics", "English", "Art"],
        scores: {
          Math: [92, 88, 95],
          Physics: [85, 89, 91],
          English: [89, 92, 88],
          Art: [95, 96, 98],
        },
        extracurriculars: ["Chess Club", "Photography"],
      },
      {
        id: "S102",
        name: "James Chen",
        grade: 10,
        courses: ["Biology", "History", "Math", "Music"],
        scores: {
          Biology: [90, 85, 88],
          History: [92, 89, 94],
          Math: [95, 91, 93],
          Music: [98, 96, 97],
        },
        extracurriculars: ["Band", "Science Club"],
      },
      {
        id: "S103",
        name: "Sofia Rodriguez",
        grade: 11,
        courses: ["Chemistry", "Math", "English", "History"],
        scores: {
          Chemistry: [87, 85, 90],
          Math: [88, 84, 86],
          English: [92, 95, 91],
          History: [89, 88, 90],
        },
        extracurriculars: ["Debate Team", "Student Council"],
      },
    ],
    teachers: [
      {
        id: "T01",
        name: "Dr. Sarah Miller",
        subjects: ["Math", "Physics"],
        roomNumber: "301",
        students: ["S101", "S102", "S103"],
      },
      {
        id: "T02",
        name: "Mr. Robert Brown",
        subjects: ["English", "History"],
        roomNumber: "204",
        students: ["S101", "S103"],
      },
    ],
    clubs: [
      {
        name: "Chess Club",
        supervisor: "T01",
        members: ["S101"],
        meetingDay: "Tuesday",
      },
      {
        name: "Science Club",
        supervisor: "T01",
        members: ["S102"],
        meetingDay: "Thursday",
      },
    ],
  };

let bestMarks = 0;
let subject = {};

function findCourseChampion (courses){ // Quiero una funcion que recorra en array students y dentro de students encuentre courses

    for ( let i = 0; i < students.courses.length; i ++){ // Mi intención es que primero recorra las materias que hay
        //Luego debería evaluar la nota media por materia
        if (students.scores[i] > bestMarks)
            
            bestMarks = students.score[i]
        }
    }

    findCourseChampion("Math");

    console.log ( "El estudiante mejor en ", findCourseChampion)