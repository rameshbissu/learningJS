// call - runs instantly, arguments -list of items
// apply - runs instantly, arguments -array of items
// bind - assign, use later, arguments -list of items

const john = {
  name: "john",
  age: 24,
};

const susan = {
  name: "susan",
  age: 22,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `hello, i'm ${this.name} and i'am ${this.age} years old, I live in ${city},${country}`
  );
}

// assign, call it later

const susanGreet = greet.bind(susan, "toronto", "CA");
susanGreet();
