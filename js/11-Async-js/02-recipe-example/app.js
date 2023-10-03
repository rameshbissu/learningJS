// Make soup
// boil water 10 min
// chop carrots
// add carrots boil for 5min
// chop onion
// add onion boil for 5 min

boilWater(10000);
console.log("chop carrrot");
boilWater(5000);
console.log("chop onion");
boilWater(5000);

function boilWater(time) {
  console.log("boiling...");
  for (let i = 0; i < time; i++) {
    console.log("still not done...");
  }
  console.log("done.");
}
