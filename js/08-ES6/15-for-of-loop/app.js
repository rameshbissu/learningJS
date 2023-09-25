// for of - loops through the values of an iterable object
// string, array,map,set etc - NOT OBJECT
// unlike forEach - we can use break,continue

const fruits = ["apple", "orange", "banana", "peach"];
const longName = "john smith pepper III";
let shortName = "";

for (const letter of longName) {
  // console.log(letter);
  if (letter === " ") {
    continue;
  } else {
    shortName += letter;
  }
}
// console.log(shortName);

for (const fruit of fruits) {
  if (fruit === "banana") {
    // break;
    continue;
  }
  console.log(fruit);
}
