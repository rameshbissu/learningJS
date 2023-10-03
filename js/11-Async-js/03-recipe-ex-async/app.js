// Make soup
// boil water 10 min
// chop carrots
// add carrots boil for 5min
// chop onion
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout,setTimer etc...

boilWater(0)

console.log('chop carrots');

function boilWater(time) {
  console.log("boiling...");
  setTimeout(() => {
    console.log("done.");
  }, time);
}
