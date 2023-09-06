// Array-Challenge : reduce-2

const survey = students.reduce(function (survey, student) {
  // console.log(student.favoriteSubject)
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]) {
    survey[favSubject] += 1;
  } else {
    survey[favSubject] = 1;
  }
  return survey;
}, {});

console.log(survey);
