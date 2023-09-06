// select the element or group of elements of that we want
// Decide the effect we want to apply to the selection

// getElementsByClassName('className')
// HTMLCollection

const listItems = document.getElementsByClassName("special");
listItems[2].style.color = "blue";
console.log(listItems);
