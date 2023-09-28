// Array.from and Array.of - NOT ON THE PROTOTYPE
// from - return array object from any object with a length property or an iterable object
// from turns array-link/ish into array - string,nodeList,Set

const udemy = "udemy";
// console.log(Array.from(udemy));

function countTotal() {
  //   console.log(arguments);
  let total = Array.from(arguments).reduce(
    (total, currNum) => (total += currNum),
    0
  );
  console.log(total);
}

countTotal(67, 48, 10);
