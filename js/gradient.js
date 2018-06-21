var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var cssLine = document.querySelector("h3");
var body = document.getElementById("gradient-body");
var direction = document.getElementById("direction");
var random = document.getElementById("random");
var random1 = document.getElementById("random1");
var random2 = document.getElementById("random2");
var randomArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];


cssLine.textContent = "linear-gradient(" + direction.value + ", " + color1.value + ", " + color2.value + ");";

function backgroundGradient() {
  body.style.background = "linear-gradient(" + direction.value + ", " + color1.value + ", " + color2.value + ")";
  cssLine.textContent = "linear-gradient(" + direction.value + ", " + color1.value + ", " + color2.value + ")";
}

function randomColor1() {
  var dd = "#";
  for (i = 0; i < 6; i++) {
    var rr = randomArray[Math.floor(Math.random() * randomArray.length)];
    dd += rr;
  }
  body.style.background = "linear-gradient(" + direction.value + ", " + dd + ", " + color2.value + ")";
  cssLine.textContent = "linear-gradient(" + direction.value + ", " + dd + ", " + color2.value + ")";
  color1.value = dd;
}

function randomColor2() {
  var dd = "#";
  for (i = 0; i < 6; i++) {
    var rr = randomArray[Math.floor(Math.random() * randomArray.length)];
    dd += rr;
  }
  body.style.background = "linear-gradient(" + direction.value + ", " + color1.value + ", " + dd + ")";
  cssLine.textContent = "linear-gradient(" + direction.value + ", " + color1.value + ", " + dd + ")";
  color2.value = dd;
}

function randomColors() {
  var dd = "#";
  var dd2 = "#";
  for (i = 0; i < 6; i++) {
    var rr = randomArray[Math.floor(Math.random() * randomArray.length)];
    dd += rr;
  }
  for (i = 0; i < 6; i++) {
    var rr = randomArray[Math.floor(Math.random() * randomArray.length)];
    dd2 += rr;
  }
  body.style.background = "linear-gradient(" + direction.value + ", " + dd + ", " + dd2 + ")";
  cssLine.textContent = "linear-gradient(" + direction.value + ", " + dd + ", " + dd2 + ")";
  color1.value = dd;
  color2.value = dd2;
}

color1.addEventListener("input", backgroundGradient);
color2.addEventListener("input", backgroundGradient);
direction.addEventListener("input", backgroundGradient);
random.addEventListener("click", randomColors);
random1.addEventListener("click", randomColor1);
random2.addEventListener("click", randomColor2);