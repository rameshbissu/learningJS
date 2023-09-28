// Three methods to convert objects into arrays
// Object.keys() - convert property names into array
// Object.values() - convert property values into array
// Object.entries() - convert both

const person = {
  name: "john",
  age: 25,
  status: "student",
};

const result = Object.entries(person);
// console.log(result);

// map method
const newResult = result.map((item) => {
  const [first, second] = item;
  // console.log(first, second);
  return first;
});
// console.log(newResult);

// for of
for(const[first,second] of result){
  // const[first,second] = item;
  console.log(first,second);
}
