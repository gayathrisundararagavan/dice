var randomNumber1 = Math.floor(Math.random() * 6) + 1;//1-6

var randomDiceImage = "dice"+randomNumber1+ ".jpg";//dice1.jpg to dice6.jpg

var randomImageSource = "images/" + randomDiceImage;//images/dice1.jpg - images/dice6.jpg

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 +".jpg";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if player1 wons

if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "🏳️ Player 2 wins!"
}
else if(randomNumber2 === randomNumber1){
  document.querySelector("h1").innerHTML = " Match Draws ";
}
else if(randomNumber2 < randomNumber1){
  document.querySelector("h1").innerHTML = "🏳️ Player 1 wins!"
}
