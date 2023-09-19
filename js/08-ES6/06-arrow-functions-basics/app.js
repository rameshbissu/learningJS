// Arrow functions or fat arrow functions
// no name, always expression, assign to variable
// no function keyword
// 'this'

// function sayHi(){
//   console.log('hello');
// }
// sayHi()

// const hello = function(name){
//   console.log(`hello ${name}`);
// }
// hello('bob')

// function triple(value1,value2){
//   return value1 * value2 * 3;
// }

const sayHi = () => console.log("hello");
sayHi();


const double = value => value * 2;
const num = double(5)
console.log(num);


// two parameters and more than one line
const multiply = (num1,num2) => {
    const result = num1 * num2;
    // more code here
    return result;
}
const sum = multiply(5,10)
console.log(sum);


// return object
const object = () => ({name : 'john',age:25})
const person = object;
console.log(person);


// arrow function as callback functions
const numbers = [1,2,3,4,6]
const big = numbers.filter((number,index)=> {
    console.log(index);
   return number > 2
})
console.log(big);


//
const btn = document.querySelector('.btn')
btn.addEventListener('click',() => console.log('you clicked me'))