

var randam1 = Math.floor(Math.random() * 6) + 1;
var imageconcate = "images/" + "dice" + randam1 +".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",imageconcate);


var randam2 = Math.floor(Math.random()*6)+1;
var concate = "images/" + "dice" + randam2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",concate);


if(randam1 === randam2){
    // Draw
    document.querySelector("h1").innerHTML = "Draw";
}else if(randam1 > randam2){
    // player 1 won 
    document.querySelector("h1").textContent = "Player1 won";
}else {
    // player 2 won 
    document.querySelector("h1").textContent = "Player2 won";
}