const students = [
    {
        id: 1,
        name: 'peter',
        score: 80,
        favouriteSubject: 'math',
    },
    {
        id: 2,
        name: 'jane',
        score: 90,
        favouriteSubject: 'history',
    },
    {
        id: 3,
        name: 'anna',
        score: 86,
        favouriteSubject: 'math',
    },
    {
        id: 4,
        name: 'john',
        score:59,
        favouriteSubject: 'English',
    },
    {
        id: 5,
        name: 'susan',
        score: 40,
        favouriteSubject: 'art',
    },
]
// using map method to add new propert 'student' to the object in the array


const updatedStudents = students.map(function(newStudent){
     newStudent.role = 'student'
      return newStudent;
})
// console.log(updatedStudents);

// to get values greater than or equal to 80
const highScores = students.filter(function(student){
  return student.score >= 80;
})
// console.log(highScores);
//  trying to get a specific id of 3
specificId = students.find(function(student){
     return student.id ===3;
})
// console.log(specificId);

// find the sum of the student scores then dividing by array length to get average
// const averageScore = students.find(function(scoresTotal,student){
//      console.log(scoresTotal);
//     return scoresTotal + student.score;
// },0)/student.length;
// console.log(averageScore);

// math
// date
const months = [

    'January',
    'february',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'september',
    'october',
    'November',
    'December'

]
const days =[]
const time =new Date();

const month = date.getMonth();

console.log(time.getDate());
console.log(month);


