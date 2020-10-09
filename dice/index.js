document.querySelector("button").addEventListener("click", handleClick);

var i = 0;
var j = 0;
var count = 0;

function handleClick() {
  var audio = new Audio('RollDice.mp3');
  audio.play();
  ++count;
  document.querySelectorAll("p")[2].innerText = "Round - " + count;
  var randNum1 = Math.floor((Math.random() * 10) % 6) + 1;
  var randImg1 = "images/dice" + randNum1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", randImg1);

  var randNum2 = Math.floor((Math.random() * 10) % 6) + 1;
  var randImg2 = "images/dice" + randNum2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randImg2);

  if (count > 20) {
    if (i > j) {
      document.querySelector("h1").innerHTML = "Player is Winner !!";
    } else if (j < i) {
      document.querySelector("h1").innerHTML = "CPU is Winner !!";
    } else {
      document.querySelector("h1").innerHTML = "Match Draw";
    }
    document.getElementsByClassName('dice')[0].style.visibility='hidden';
    document.getElementsByClassName('dice')[1].style.visibility='hidden';
    document.getElementsByClassName('dicebtn')[0].style.visibility='hidden';
    document.getElementsByClassName('play-again')[0].style.visibility='visible';
    return;
  }

    if (randNum1 > randNum2) {
      ++i;
      document.querySelector("h1").innerHTML = "Player WINS";
      document.querySelectorAll("p")[0].innerText = "Player" + " - " + i;
    } else if (randNum1 < randNum2) {
      ++j;
      document.querySelector("h1").innerHTML = "CPU WINS";
      document.querySelectorAll("p")[1].innerText = "CPU - " + j;
    } else {
      document.querySelector("h1").innerHTML = "DRAW";
    }


}
