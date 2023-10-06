const url = "./api/people.json";

fetch(url)
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

  