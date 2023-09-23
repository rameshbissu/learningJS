// default parameters, arrow function gotchas

sayHi(); // this also works
const john = "john";
const perter = "perter";

function sayHi(person = "susan") {
  console.log(`Hi ${person}`);
}

// sayHello()  this does not work
const sayHello = (person = "bob") => console.log(`Hello ${person}`);

sayHi();
sayHello();
