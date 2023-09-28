// Three methods to convert objects into arrays
// Object.keys() - convert property names into array
// Object.values() - convert property values into array
// Object.entries() - convert both

const person = {
  name: "john",
  age: 25,
  status: "student",
};

const keys = Object.keys(person);
console.log(keys);
