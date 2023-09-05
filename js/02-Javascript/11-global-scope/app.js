// Global scope vs local scope
// any variable outside code block {} is said to be in global scope
// can be access anywhere in the program
// gotchas : name collisions, modify by mistake

let name = "bobo";
name = "peter";
function calculate() {
  //some other code...
  console.log(name);
  name = "orange";
  function inner(){
    name = 'inner name vlaue'
    console.log(`this is from inner function ${name}`)
  }
  inner();
}
calculate();
if (true) {
  //some other code...
  console.log(name);
  name = "pants";
}
console.log(`my name is ${name} and i'am awesome`);
