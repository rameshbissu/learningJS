/*
    the load event is fired when the whole page has loaded, including all dependen resources such as stylesheets and images. This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading.
    window.addEventListener('DOMContentLoaded',function(){
      // your code goes here
    })
    
*/



window.addEventListener("load", function () {
  console.log('Load will run second');
  const img = document.querySelector("img");
  console.log(img);
  console.log(img.width);
});


window.addEventListener("DOMContentLoaded", function () {
  console.log('DOMContentLoaded will run first');
  const img = document.querySelector("img");
  console.log(img);
  console.log(img.width);
});