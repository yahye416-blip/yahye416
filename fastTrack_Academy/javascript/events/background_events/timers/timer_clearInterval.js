
function sayMyName() {
console.log("yahye h");
}
 //setTimeout(sayMyName,2000);
 //setInterval(sayMyName,2000);

 let timer = setInterval(sayMyName,3000);


  function cancelNameTimer() {
 clearInterval (timer);
 }
setTimeout(cancelNameTimer , 10000);

//setTimeout(function, delay);
//setInterval(function, interval);    Runs a function repeatedly at a specified time interval.


