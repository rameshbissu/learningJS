/*
    innerWidth - The read-only window property the interior width of the window in pixels

    innerHeight - the read-only property of the window interface returns the interior height of the window in pixels

    The element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
*/

console.log('height : ' + window.innerHeight);
console.log('height : ' + window.innerWidth);

const btn = document.querySelector('.btn')
const box = document.querySelector('.box')

btn.addEventListener('click',function(){
  const values = box.getBoundingClientRect()
  console.log(values);
})