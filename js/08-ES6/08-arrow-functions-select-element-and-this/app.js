// Arrow functions or fat Arrow functions
// reg function : 'this' refers parent, left of the dot
// arrow function : refers to it's current surrounding scope

const btn = document.querySelector(".btn");
btn.addEventListener("click", function ()  {
  console.log(this);
  this.style.color = "black";
  setTimeout(()=>{
    this.style.color = "black";
  },2000)
});


