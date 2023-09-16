// call - runs instantly, arguments -list of items

const john = {
  name: "john",
  age: 24,
  greet: function () {
    console.log(this);
    console.log(`hello, i'm ${this.name} and i'am ${this.age} years old`);
  },
};

const susan = {
  name: "susan",
  age: 22,
};

john.greet();

function greet() {
  console.log(this);
  console.log(`hello, i'm ${this.name} and i'am ${this.age} years old`);
}


greet.call(john);
greet.call(susan);
greet.call({ name: "perter", age: 50 });
john.greet.call(susan);
