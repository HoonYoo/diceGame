//changing first dice//

var randomNumberforDice1 = Math.floor(Math.random()*6)+1; //generating 1-6

var randomDiceImage1 = "images/dice" + randomNumberforDice1 + ".png"; //images/dice1.png-images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage1);

//changing second dice//

var randomNumberforDice2 = Math.floor(Math.random()*6)+1;//generating 1-6

var randomDiceImage2 = "images/dice" + randomNumberforDice2 + ".png"; //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);

//changing header//

var header = document.querySelector("h1");
if (randomNumberforDice1 > randomNumberforDice2) {
  header.innerHTML = "🚩 Winner: Player 1";
} else if (randomNumberforDice2 > randomNumberforDice1) {
  header.innerHTML = "Winner: Player 2 🚩";
} else {
  header.innerHTML = "Draw!";
}
