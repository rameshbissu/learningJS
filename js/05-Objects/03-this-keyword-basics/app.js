// this
// points to the left of the dot

const john = {
  firstName : 'John',
  lastName : 'Anderson',
  fullName : function(){
    console.log(this);
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  }
}
const bob = {
  firstName : 'Anna',
  lastName : 'Sanders',
  fullName : function(){
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  }
}

john.fullName();
bob.fullName();