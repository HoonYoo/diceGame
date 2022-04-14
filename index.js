//change image1//

var randomNumber1 = Math.floor(Math.random()*6)+1; //1-6

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage1);

//change image2//

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);

//changing header//
var header = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  header.innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  header.innerHTML = "Player 2 wins! 🚩";
} else {
  header.innerHTML = "Draw!";
}
