// Arrays and for loop
const names = ["anna", "susy", "bob", "susan", "harry"];
const lastName = "shakeandbake";
let newArray = [];

// for loop
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
  const fullName = `${names[i]} ${lastName}`;
  newArray.push(fullName);
}
console.log(names);
console.log(newArray);
