// Functions, return, if, arrays, for loop

const gas = [20, 40, 100, 30];
const food = [20, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if(total > 100)
  {
    console.log(`whoa! you are spending way too much `)
    return total;
  }
  console.log(`you are good total is less than 100`)
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([103, 40, 5024, 3]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});
