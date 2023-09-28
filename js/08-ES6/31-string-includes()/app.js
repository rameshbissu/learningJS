// String,includes() - checks if a string contains another string.

const products = [
  {
    title: "high-back bench"
  },
  {
    title: "albany table"
  },
  {
    title: "accent chair"
  },
  {
    title: "wooden table"
  },
];

const text = 'a'
const filteredProducts = products.filter(product => product.title.toLowerCase().includes(text))
console.log(filteredProducts);


// const firstName = "john";

// // const result = firstName.includes('j',0)
// const product = {
//   title: "wooden table",
// };
// const result = product.title.includes('Wo')
// console.log(result);
