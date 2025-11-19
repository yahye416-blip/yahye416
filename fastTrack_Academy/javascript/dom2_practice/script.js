// let firstH1 = document.getElementById("firstH1");
// firstH1.textContent = "lets learn Swedish"

let firstH1 = document.querySelector("#firstH1");
firstH1.textContent = "lets learn german";

let topH1s = document.getElementsByName("TopH1s");
topH1s[0].style.color = "blue";
topH1s[1].style.color = "blue";
topH1s[2].style.color = "blue";

let tagElements = document.getElementsByTagName("div");
tagElements[0].style.textTransform = "uppercase";
tagElements[1].style.textTransform = "lowercase";

// let bigFont = document.getElementsByClassName("bigFont");
// bigFont[0].style.color = "orange";
// bigFont[0].style.color = "yellow";

let bigFont = document.querySelectorAll(".bigFont");
bigFont[0].style.color = "orange";
bigFont[1].style.color = "yellow";

for (let i = 1; i <= 100; i++) {
  var secondH1 = document.createElement("h1");
  secondH1.textContent = i + " This h1 was created in JS";
  secondH1.style.color = "red";
  secondH1.style.fontSize = "50px";
  document.body.appendChild(secondH1);
}

// var paragraph1 = document.createElement("p")
// paragraph1.textContent = "this is a JS paragraph"
// document.body.appendChild(paragraph1)
