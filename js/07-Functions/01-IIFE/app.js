// IIFE Immediately- Invoked Function expression
// older approach - new Modules
// simple approach to avoid global scope pollution
// good way at protecting the scope of your function and the variables within it.

// global namespace, extra steps

const num1 = 30;
const num2 = 50;
function add() {
  console.log(`sum is ${num1 + num2}`);
}
add();

(function(){
    const num3 = 40;
    const num4 = 20;
    console.log(`sum is ${num3 + num4}`);
})();

(function(){
    const num3 = 40;
    const num4 = 20;
    console.log(`sum is ${num3 + num4}`);
})();

// pass arguments
(function(num3,num4){
    console.log(`sum is ${num3 + num4}`);
})(309,44);

// return/assign to variable
const result = (function(num3,num4){
    console.log(`sum is ${num3 + num4}`)
    return num3 + num4;
})(50,102)

console.log(result);
