// String properties and methods
// wrapper string object, don't memorize methods

let text = " Peter Jordan";
let result = text.length;
console.log(result);

// String Length
console.log(text.length);
// To lower case
console.log(text.toLowerCase());
// To upper case
console.log(text.toUpperCase());
// To check charcter at specific index
console.log(text.charAt(0));
// To check charcter at last index
console.log(text.charAt(text.length - 1));
// To check index of a specific charcter
console.log(text.indexOf('J'));
// To ommit the white space from text start's
console.log(text.trim());
// To check if text starts from ____
console.log(text.startsWith('  Peter'));
// if text has white space and captilize then..
console.log(text.trim().toLowerCase().startsWith('peter'));
// To check if text has ____
console.log(text.includes('eter'));
// To slice the text
console.log(text.slice(0,5));
// To slice from the end of text
console.log(text.slice(-6));

