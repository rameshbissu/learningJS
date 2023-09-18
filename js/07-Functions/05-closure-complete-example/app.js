// Closure

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`hey ${name} your balance is : ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`hey, ${name}, sorry not enough funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }
  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const john = newAccount("john", 200);
const bob = newAccount("bob", 2000);
john.showBalance();
john.deposit(5000);
john.deposit(10000);
john.withdraw(1000);
john.withdraw(100000);

bob.showBalance();
