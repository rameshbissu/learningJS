// Arrow functions or fat Arrow functions
// reg function : 'this' refers parent, left of the dot
// arrow function : refers to it's current surrounding scope

const bob = {
  firstName: "bob",
  lastName: "smith",
  sayName: function () {
    console.log(this);
    setTimeout( () => {
        console.log(this)
      console.log(`Hello, my name is ${self.firstName} ${self.lastName}`);
    }, 2000);
  },
};

const anna = {
  firstName: "anna",
  lastName: "sanders",

  sayName: () => {
    console.log(this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

bob.sayName();
// anna.sayName();
