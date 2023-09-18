// var, let, const
// define, update, redifine
// const cannot mutate primitive type

// define
var number = 100;
// console.log(number);
// updating
number = 200;
// console.log(number);
// redifine
var number = "orange";
// console.log(number);

let amount = 100;
// console.log(amount);
// update
amount = 200;
// console.log(amount);
// redifine *
// let amount = "orange";

const total = 100;
// console.log(total);
// update
// total = 200

const person = { name: "bob" };
person.name = "john";
console.log(person.name);
