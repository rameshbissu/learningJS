// call - runs instantly, arguments -list of items
// apply - runs instantly, arguments -array of items

const john = {
  name: "john",
  age: 24,
};

const susan = {
  name: "susan",
  age: 22,
};


function greet(city,country) {
  console.log(this);
  console.log(`hello, i'm ${this.name} and i'am ${this.age} years old, I live in ${city},${country}`);
}

// CALL..
// greet.call(john,'san diego','US');
// greet.call(susan,'san diego','US');
// greet.call({ name: "perter", age: 50 },'san diego','US');

// CALL..
greet.apply(john,['san diego','US']);
greet.apply(susan,['san diego','US']);
greet.apply({ name: "perter", age: 50 },['san diego','US']);
