// Functions
//param - when declare/define
//placeholder,local vars
//arguments - when invoke/call/run
//use vars/values,multiple param,undefined
const bob = 'Bob'

function greet(name, second) {
  //logic
  console.log("hello there " + name);
  console.log(second)
}

greet(bob);
greet("susy",5);
greet("martin");
