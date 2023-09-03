// Arrays, Function and Objects
// expressions - another way define a function
// create a variable assign to function (not vlaue), use var
// diff - hoisting, use - arrow func, liraries,

// function definition/declaration
// function addValues(num1, num2) {
//   return num1 + num2;
// }

// const firstValue = addValues(3, 4);
// const secondValue = addValues(12, 42);

// function expression
// const add = function (num1, num2) {
//   return num1 + num2;
// };

// const thirdValue = add(5,2)
// const values = [firstValue, secondValue, add(5, 3)];
// console.log(values);

// const multiply = (num1, num2) => num1 + num2;
// exports.nameOfMethod = function () {};

// Function Challenge....

// function calculateTotal(subTotal, tax) {
//   return subTotal + tax;
// }

//refactor calculateTotal to function expression
const calculateTotal = function (subTotal, tax) {
  return subTotal + tax;
};

const order1 = calculateTotal(485, 20);
const order2 = calculateTotal(3835, 180);
const order3 = calculateTotal(1085, 95);

console.log(order1, order2, order3);
