/*
  Blue Print
  Factory Functions and Constructor functions
  Factory Functions
*/
// this
// points to the left of the dot

// const john = {
//   firstName : 'John',
//   lastName : 'Anderson',
//   fullName : function(){
//     console.log(this);
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   }
// }
// const bob = {
//   firstName : 'Anna',
//   lastName : 'Sanders',
//   fullName : function(){
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   }
// }

function createPerson(firstName,lastName) {
  return {
    firstName,
    lastName,
    fullName: function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} And i love Js`
      );
    },
  };
}


const john = createPerson('RB','bissu');
john.fullName();
const bob = createPerson('tal','jordan');
bob.fullName();
const kalie = createPerson('kali','mac');
kalie.fullName();
