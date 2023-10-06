// JSON - JavaScript Object Notation
const btn = document.querySelector(".btn");
const url = "./api/people.json";
btn.addEventListener("click", () => {
  getData(url);
});

function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    // console.log(xhr);
    if (xhr.readyState === 4 && xhr.status === 200) {
      // parse
      // stringify

      const data = JSON.parse(xhr.responseText);
      const displayData = data
        .map((item) => {
          return `<p>${item.name}</p>`;
        })
        .join("");
      const el = document.createElement("div");
      el.innerHTML = displayData;
      document.body.appendChild(el);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };
  xhr.send();
}
