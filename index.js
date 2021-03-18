// code for dice 1

var x = Math.floor((Math.random() * 6) + 1);
console.log(x);

var srcString = "images/dice" + x + ".png";

var dice1 = document.getElementsByClassName("img1")[0];

dice1.setAttribute("src", srcString);

// code for dice 2

var y = Math.floor((Math.random() * 6) + 1);

var srcString2 = "images/dice" + y + ".png";

var dice2 = document.getElementsByClassName("img2")[0];

dice2.setAttribute("src", srcString2);

var winner = document.getElementsByTagName("h1")[0];

if(x > y){
  winner.innerHTML = "Player 1 Won";
}
else if(x === y){
  winner.innerHTML = "Draw";
}
else{
  winner.innerHTML = "Player 2 Won";
}
