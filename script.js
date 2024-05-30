
const arrImage = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
  ];

  var random1 = Math.floor(Math.random() * arrImage.length);
  var random2 = Math.floor(Math.random() * arrImage.length);
  
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".img1").src = arrImage[random1];
    document.querySelector(".img2").src = arrImage[random2];
  });

  if(random1>random2){
    document.querySelector(".container h1").innerHTML="Player 1 wins";
  }
else{
    document.querySelector(".container h1").innerHTML="Player 2 wins";
}