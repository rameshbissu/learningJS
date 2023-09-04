// Objects
// Objects - key/value pairs methods
// dot notation

 /* const person = {
  name: "Ramesh",
  lastName: "Bissu",
  age: 22,
  education: true,
  married: false,
  siblings: ["anna", "susan", "peter"],
  greeting() {
    console.log("Hello there!");
  },
};

const age = person.age;
console.log(age);
person.name = "Rit";

console.log(person.name);
console.log(person.siblings);
console.log(person.siblings[2]);
person.greeting();
*/


// Object Challenge ...


const car = {
  make : 'Audi',
  model : 'Q1',
  year : 2023,
  color : ['crystal grey','diamond white','sea green','coal black','venta black'],
  hybrid : true,
  drive(){
    console.log('Drive Fast')
  },
  stop(){
    console.log('Abs tecnology')
  },

}

console.log(car.make,car.model,car.year,car.color[0]);
car.drive();
car.stop();
