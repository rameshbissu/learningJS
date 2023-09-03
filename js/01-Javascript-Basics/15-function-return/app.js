// Arrays, Function and Objects
// return
// default undefined, shortcuts, igonres after
// 1 inch 2.54cm

const wallHeight = 80;

function calculate(value) {
  // const newValue = value * 2.54;
  
  return value * 2.54;
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimension = [width, height];
console.log(dimension);
