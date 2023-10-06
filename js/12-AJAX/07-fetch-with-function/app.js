const url = "./api/people.json";
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data);
      displayItem(data);
    })
    .catch((err) => console.log(err));
});

const displayItem = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
