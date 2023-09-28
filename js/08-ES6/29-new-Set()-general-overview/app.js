// Set object - stores a collection of unique values of any type

// new Set()
// add(value)
// delete(value)
// clear()
// has(value)

// iterators
// entries(),keys(),vlaues(),forEach();

const unique = new Set();

const random = "third";


// add()
unique.add("first");
unique.add("second");
unique.add(random);
unique.add("first");
unique.add(5);


// delete();
// const result = unique.delete('third')
// console.log(result);
const result = unique.delete('five')
// console.log(result);


// has()
// const isValue = unique.has('five')
// console.log(isValue);
const isValue = unique.has(5)
// console.log(isValue);


// clear()
// unique.clear();


console.log(unique);
