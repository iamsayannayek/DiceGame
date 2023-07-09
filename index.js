// Dice 1:

let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let rImg = "dice" + randomNumber1 + ".png";
let randImg = "images/" + rImg;

let image1 = document.querySelector(".img1");
image1.setAttribute("src", randImg);

// Dice 2:
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let rImg1 = "dice" + randomNumber2 + ".png";
let randImageSource = "images/" + rImg1;

let image2 = document.querySelector(".img2");
image2.setAttribute("src", randImageSource);

//For Winning
// Player 1 wins:
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Win 🎇";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Win 🎇";
} else {
  document.querySelector("h1").textContent = "Match Draw ";
}
