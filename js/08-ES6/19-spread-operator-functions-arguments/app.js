// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// split into single items and copy them

const numbers = [34,53,6,7,234,786]

console.log(Math.max(...numbers));

const john = ['john','sanders']

const sayHello = (name,lastName) => {
  console.log(`hello ${name} ${lastName}`);
}

sayHello(...john)
