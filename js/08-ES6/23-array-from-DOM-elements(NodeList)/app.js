// Array.from and Array.of - NOT ON THE PROTOTYPE
// from - return array object from any object with a length property or an iterable object
// from turns array-link/ish into array - string,nodeList,Set

const p = document.querySelectorAll("p");
const result = document.getElementById("result");
const second = document.getElementById("second");

let newText = Array.from(p);
console.log(newText);
newText = newText.map((item) => `<span>${item.textContent}</span>`).join(" ");
result.innerHTML = newText

const text = Array.from(document.querySelectorAll('p'),(item) => {
  return `<span>${item.textContent}</span>`
}).join(' ');

second.innerHTML = text;
