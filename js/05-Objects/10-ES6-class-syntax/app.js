/*
 ES6 classes - syntactic sugar
 prototypal inheritance
*/

class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }
  bank = "Chase";
  deposit(amount) {
    this.balance += amount;
    console.log(`hello ${this.name}, your balance is ${this.balance}`);
  }
}

const john = new Account("john", 0);
console.log(john);
console.log(john.name);
john.deposit(500);
console.log(john.bank);

const bob = new Account("john", 700);
console.log(bob);
console.log(bob.name);
bob.deposit(1000);
console.log(bob.bank);
