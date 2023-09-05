// Refernce vs value
// Primitive Data Types
// String ,number,symbol,boolean,undefinec,null,
// array,functions,objects = object
// typeof

// when assigning primitive data type value to a variable any change are made directly to that value, without affecting origina value.

// when assigning non-primitive data types value to a variable is done by reference so any changes will affect all the refernces.

const number = 5;
let number2 = number;
number2 = 8;
console.log(`first number is : ${number}`);
console.log(`second number is : ${number2}`);

let person = { name: "bob" };
let person2 = person;
// let person2 = {...person};
person2.name = "susy";
console.log(`first person is : ${person.name}`);
console.log(`second person is : ${person2.name}`);
