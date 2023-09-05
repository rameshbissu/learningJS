// Callback functions,heigher order functions,functions as first class objects/citizerns

// functions are first class objects - stored in a variable (expression),passed as an argument to another function, return from the function (closure)

// Higher order function - accepts another fuction as an argument and returns another function as a result.

// Callback function - passed to a another function as an argument and executed inside that function

// function greetMorning(name){
//   const myName = 'john'
//   console.log(`Good morning ${name}, my name is ${myName}`)
// }
// function greetAfternoon(name){
//   const myName = 'john'
//   console.log(`Good afternoon ${name}, my name is ${myName}`)
// }

function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}
function afternoon(name) {
  return `Good afternoon ${name.repeat(3)}`;
}

function greet(name, cb) {
  const myName = "john";
  console.log(`${cb(name)}, my name is ${myName}`);
}

greet("bob", morning);
greet("peter",afternoon);
