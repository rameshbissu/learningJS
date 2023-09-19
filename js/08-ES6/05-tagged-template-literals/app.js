// `` backticks above tab key left of 1 key
// tagged template literals

const author = "some author";
const statement = "some statement";

const quote = heighlight`here is the  ${statement} by ${author} and it could not be more true`;

console.log(quote);

const result = document.getElementById("result");
result.innerHTML = quote;

function heighlight(text, ...vars) {
  const awesomeText = text.map((item, index) => {
    return `${item} <strong class="blue">${vars[index] || ""}</strong>`;
  });
  return awesomeText.join("");
}
