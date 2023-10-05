// Fetch built-in
// promised based
// XHR is not wrong, you can complete all upcoming examples and projects using XHR. Fetch is just alternative approach that has simpler and cleaner syntax. The end result is the same.Still get dynamically, behind the scenes.

const url = "./api/people.json";
// const response = fetch(url);
// console.log(response);

// fetch(url)
//   .then((res) => {
//     // response object
//     // useful prop and methods
//     // console.log(res);
//     // convert res into json data
//     // returns promise
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
