// Numbers
// loosely typed = don't declare type

// const number = 34;
// const number2 = 2.459;

// const add = number + number2;
// const sub = number - number2;
// const mul = number * number2;
// const divide = number / number2;

// console.log(add);
// console.log(sub);
// console.log(mul);
// console.log(divide);
// console.log(number);
// console.log(number2);

// +=, -=, /=, *=, ++, --, %

// modulus (%) operator returns the remainder after integer division

let number = 40;

number += 5; //number = number + 5 -> 45
console.log(number); //log the number
number = 40; // reasign the value to number 40 for further example so we would not be in confusion

number -= 5; //number = number - 5 -> 35
console.log(number);
number = 40;

number /= 5; //number = number / 5 -> 8
console.log(number);
number = 40;

number *= 5; //number = number * 5 -> 200
console.log(number);
number = 40;

number++; //number = number + 1 -> 41
number++;
number++;
console.log(number);
number = 40;

number--; //number = number - 1 -> 39
number--;
number--;
console.log(number);
number = 40;

console.log(number % 3); // give us a remainder after division

// proper sturcture of the equations
const random1 = 4 + 6 + 10 * 10; //110
const random2 = (4 + 6 + 10) * 10; //200

console.log(random1);
console.log(random2);

// Number challenge....

const score1 = 57;
const score2 = 85;
const score3 = 36;

const total = score1 + score2 + score3;
const average = total / 3;

console.log(`Total score : ${total} And Average score : ${average}`);

//...
const plates = 20;
const people = 7;
let remainingPlates = plates % people;
remainingPlates++;
const message = "There are " + remainingPlates + " plates available";
console.log(message);
