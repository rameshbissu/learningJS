// CONDITIONAL CHALLENGE...

const person1 = {
  name: "parul",
  age: 21,
  status: "resident",
};
const person2 = {
  name: "tushaar",
  age: 18,
  status: "tourist",
};

console.log("person 1");
if (person1.age > 18 && person1.status === "resident") {
  console.log("you are welecom!");
} else {
  console.log("you must be above 18 and a resident");
}

console.log("person 2");
if (person2.age > 18 && person2.status === "resident") {
  console.log("you are welecom!");
} else {
  console.log("you must be above 18 and a resident");
}
