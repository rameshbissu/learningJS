// Rest Operator ...
// gathers/collects the items

// arrays

const fruits = ["apple", "orange", "lemon", "banana", "pear"];
const [first, second, ...rest] = fruits;
// console.log(first, rest);

// objects
const person = { name: "john", lastName: "smith", job: "developer" };
const { job, ...restPerson } = person;
// const {...restPerson,job } = person;
// console.log(job,restPerson);

const textScores = [78, 39, 59, 79, 94, 50, 99, 92];

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  console.log(`${name}'s average score is ${total / scores.length}`);
};

getAverage(person.name, 78, 39, 59, 79, 94, 50, 99, 92, 97, 98);
getAverage(person.name, ...textScores);
