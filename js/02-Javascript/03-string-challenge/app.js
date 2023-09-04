// STRING CHALLENGE...

function fullName({firstName, lastName}) {
  return `${firstName} ${lastName}`.toUpperCase();
}
// const result = fullName("ramesh", "bissu");
// const result2 = fullName("bissu", "ramesh");

// Refactor to object parameter
const result = fullName({firstName:'ramesh',lastName:'bissu'});
const result2 = fullName({firstName:'bissu',lastName:'ramesh'});

console.log(result);
console.log(result2);
