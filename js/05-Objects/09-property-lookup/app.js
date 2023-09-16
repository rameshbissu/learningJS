/*
 Property Lookup
 If child does not have ask parent
 everything in JS is an object
*/

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  // this.bank = "Bank of America";
}

const john = new Account("john", 200);
const bob = new Account("bob", 0);

Account.prototype.bank = "CHASE";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`hello ${this.name}, your balance is ${this.balance}`);
};
// console.log(john.bank);
console.log(bob);
console.log({})
console.log([]);


// john.deposit(300);
// bob.deposit(1000);
