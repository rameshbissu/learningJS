// Array-Challenge : filter

const highScores = students.filter(function (student) {
  // Way 1.
  // if(student.score >= 80){
  //   return student;
  // }

  // Way 2.
  // if(student.score >= 80) return student;

  // Way 3.
  return student.score >= 80;
});

console.log(highScores);
