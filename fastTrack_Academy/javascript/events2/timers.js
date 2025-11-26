function function1() {
  console.log("hello");
  console.log("my name is Yahye");
}
// setTimeout(function1,10000)

let timer = setInterval(function1, 1000);

setTimeout(function () {
  clearInterval(timer);
}, 20000);
