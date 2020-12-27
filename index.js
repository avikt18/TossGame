var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);
var imagesource1 = "images/dice" + randomNumber1 + ".png";
var imagesource2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src",imagesource1);
document.querySelector(".img2").setAttribute("src",imagesource2);

//If player 1 Wins
 if(randomNumber1 > randomNumber2){
   
    document.querySelector("h1").innerHTML = "Player 1 Wins";

}
//if Player 2 Wins
else if(randomNumber1 < randomNumber2){
   
    document.querySelector("h1").innerHTML = "Player 2 Wins";

}

else{
    document.querySelector("h1").innerHTML = "Draw!"
}