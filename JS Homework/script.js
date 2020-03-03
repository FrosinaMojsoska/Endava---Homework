let circle = document.getElementById("circle");

let numbersOfClicked = 0;
$("#circle").click(function () {

  numbersOfClicked++;
  changeColor(numbersOfClicked);

});


function changeColor(numbersOfClicked) {
  if (numbersOfClicked === 1) {
    circle.classList.remove("yellow");
    circle.classList.add("blue");

  }
  else if (numbersOfClicked === 2) {
    circle.classList.remove("blue");
    circle.classList.add("green");
  }
  else if (numbersOfClicked === 3) {
    circle.classList.remove("green");
    circle.classList.add("visible");

  }
}



function changePosition() {
  let x = Math.floor((Math.random() * 1000) + 1);
  let y = Math.floor((Math.random() * 200) + 1);
  //let b = "translate(" + a + "%, " + x + "%)";
  let b=`translate(${x}%,${y}%)`
  document.getElementById("circle").style.transform = b;
}

setInterval(changePosition, 1500);