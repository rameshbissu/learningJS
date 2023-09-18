// Closure

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`hey ${name} your balance is : ${balance}`);
  }
  return showBalance;
}

newAccount('susan',500)();
const john = newAccount('john',200)
const bob = newAccount('bob',2000)
john();
bob();