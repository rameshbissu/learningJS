// Closure
// closure gives you an access to an outer function's scope from an inner function
// make private variables with closures

function outer() {
  let privateVar = "secret";
  function inner() {
    console.log(`hello there secret is : ${privateVar}`);
  }
  return inner;
  inner();
}

outer()();

const value = outer();
console.log(value);
value();
