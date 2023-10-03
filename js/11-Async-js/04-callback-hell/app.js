// Make soup
// boil water 10 min
// chop carrots
// add carrots boil for 5min
// chop onion
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout,setTimer etc...
// callback, promises,asyn/await

boilWater();
console.log("chop carrots");

function boilWater(time) {
  console.log("boiling...");
  setTimeout(() => {
    console.log("done.");
    console.log("add carrots");
    setTimeout(() => {
      console.log("carrots done");
      console.log("add onions");
      setTimeout(() => {
        console.log("onion done");
      }, 500);
    }, 500);
    console.log("chop onion");
  }, 1000);
}
