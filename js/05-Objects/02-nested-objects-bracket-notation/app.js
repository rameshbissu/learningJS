// objects Basics
// set variable as property value
// dot notation vs bracket notation
const age = 75;
let random = "random-value";
random = "age";

const person = {
  name: "john",
  age,
  married: true,
  siblings: ["anna", "perter"],
  greet: function (name) {
    console.log(`hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`hello, my name is ${name}`);
  },
  job: {
    title: "developer",
    company: {
      name: "coding addict",
      address: "123 main street",
    },
  },
  "random-value": "random",
};

console.log(person.job.title);
console.log(person.job.company.address);

console.log(person);
console.log(person["random-value"]);
console.log(person[random]);
// console.log(person['job']);
