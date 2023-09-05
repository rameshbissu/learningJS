// Local Scope
// can not be access from outside code blocks
// if - NOT VAR

let name = "bobo";

function calculate() {
  const name = "john";
  const age = 25;
  // code goes here
  becomeGlobal = "global varibale";
}
calculate();
console.log(becomeGlobal);

if (true) {
  const name = "john";
}
{
  const name = "john";
  const special = "special";
}
console.log(special);//can not accessed
console.log(`my name is ${name} and i'am awesome`);
