/*
    setTimeout - runs function once after specific time
    - pass function reference
    - duration in ms (1000 ms = 1second)
    - default 0,will cover more extensively in async/await section
    - returns unique identifier
    - clearTimeout to cancel
    - on window object
*/

function sayHello() {
  console.log("hello john");
}
setTimeout(sayHello, 1000);

// will not work
// setTimeout(sayHello(),1000)

// alternative approach, ES6 arrow function
// setTimeout(function () {
//   console.log("hey bob");
// }, 2000);

// pass arguments
function showScore(name, score) {
  console.log(`hello ${name}, your score is ${score}`);
}

setTimeout(showScore, 2000, "Rohit", 55);

const firstID = setTimeout(showScore, 2000, "john", 24);
const secondId = setTimeout(showScore, 2000, "peter", 30);
console.log(firstID);
console.log(secondId);

clearTimeout(firstID);

