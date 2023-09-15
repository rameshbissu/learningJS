// objects Basics

/*
    Objects are collections of key (property) value pairs. Property values can be strings, numbers, booleans, arrays and funcitons however if the property value is a function it's called a method
*/

// objects literal syntax, {}
// dot notation

const person = {
  name: "john",
  age: 25,
  married: false,
  siblings: ["anna", "perter"],
  greet: function (name) {
    console.log(`hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`hello, my name is ${name}`);
  },
};

console.log(person);
console.log(person.name);

const name = person.name;
console.log(name);
person.age = 60;

person.city = "chicago";

// delete property
// delete person.siblings;
const siblings = delete person.siblings;
console.log(siblings);


console.log(person);
