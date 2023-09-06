// Array-Challenge : reduce

const averageScore = students.reduce(function (scoresTotal,student) {
  return scoresTotal + student.score;
},0)/students.length;

console.log(averageScore);