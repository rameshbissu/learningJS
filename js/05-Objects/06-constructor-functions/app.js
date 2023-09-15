/*
  Blue Print
  Factory Functions and Constructor functions
  Constructor Functions
  new - creates new object,points to it,omit return
*/

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} And i love React`
    );
  };
  console.log(this);
}
const john = new Person('john','anderson')
john.fullName();
const bob = new Person('bob','barleno')
bob.fullName();



// function createPerson(firstName, lastName) {
//   return {
//     firstName,
//     lastName,
//     fullName: function () {
//       console.log(
//         `My full name is ${this.firstName} ${this.lastName} And i love Js`
//       );
//     },
//   };
// }
