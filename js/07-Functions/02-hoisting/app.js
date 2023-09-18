// Hoisting
// function and var declarations are hoisted
// safer to access only after initialized

display();
console.log(display);
moreComplex();
console.log(moreComplex);
// console.log(firstName);
// console.log(lastName);
// console.log(random);

const firstName = "john";
let lastName = "jordan";
var random = "random";

function display(){
    console.log('hello world');
}

function moreComplex(){
    // console.log(`${firstName}, ${lastName}, ${random}`)
    console.log(`${random}`)
}