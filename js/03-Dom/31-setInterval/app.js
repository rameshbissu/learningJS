/*
    setInterval - runs function repeatedly, at specific intervals
    - pass function reference
    - duration in ms (1000 ms = 1second)
    - default 0, will cover more extensively in async/await section
    - returns unique identifier
    - clearInterval to cancel
*/

function showScore(name,score){
  console.log(`hello ${name}, your socre is ${score}`);

}

// setInterval(showScore,2000);
const firstID = setInterval(showScore,1000,'bob',45);
const secondID = setInterval(showScore,3000,'susan',69);

clearInterval(firstID)
