"use strict";



var splashScreen;
var instructionScreen;
var pointsScreen;
var gameScreen;
var endScreen;



function playClick() {
  buildInstructionScreen();
}

function nextClick() {
  buildPointsScreen();
}

function timeOutPointsScreen() {
  buildGameScreen();
}

function timeOutGameScreen() {
  destroyGameScreen();
  builEndScreen();
  }

function roundGame() {
  destroyGameScreen();
  buildPointsScreen();
}

// DOM maniputations
//Build
function buildDom(html) {
  var target = document.getElementById("container")
  target.innerHTML = html;

  return target;
}

function destroyDom(target) {
  target.innerHTML = "";

}



function buildSplashScreen() {
  splashScreen = buildDom(`
    <h1>BRAINY GAME</h1>
    <img src="../PROYECTO BRAIN GAME/imagenes/logo.png" width="500px" height="auto">
    <a href="#" class="button">Let's play!!</a>
    `);

  splashScreen
    .querySelector(".button")
    .addEventListener("click", playClick);
}

function buildInstructionScreen() {
  instructionScreen = buildDom(`<h2>INSTRUCTIONS</h2>
    <div class="instruction-box">
      <p>This is a game to test how fast you are taking the best combination of colors and shapes to get the highest score</p>
      <div class="punctuations-box">
        <div class = "box"></div>
        <div class = "pentagon"></div>
        <div class = "hexagon"></div>
        <div class = "right-arrow"></div>
        <div class = "crost"></div>
        <div class = "left-arrow"></div>
        <div class = "start"></div>
        <div class = "rhombus"></div>
        <div class = "trapezo"></div>
      </div>
    </div>
    <div class="buttons">
      <a href="#" class="button">Next</a>
    </div>`);
    
    instructionScreen
      .querySelector(".button")
      .addEventListener("click", nextClick);
}

function buildPointsScreen() {
  pointsScreen = buildDom(`<h2>REMEMBER!!</h2>
  <div class="instruction-box">
    <p>Choose the combinations with the highest score and remember the shapes for the next game.</p>
    <div class="points-box">
      <div class = "box"></div>
      <div class = "colour-box blue-box"></div>
      <div class = "hexagon"></div>
      <div class = ""></div>
      <div class = ""></div>
      <div class = ""></div>
      <div class = "colour-box pink-box"></div>
      <div class = "rhombus"></div>
      <div class = "colour-box yellow-box"></div>
      <div class = ""></div>
      <div class = ""></div>
      <div class = ""></div>
      <div class="count-down">10</div>
    </div>
  </div>`);
    
    instructionScreen
      .querySelector(".button")
      .addEventListener("click", timeOutPointsScreen);
}


//Destroy
function destroySplashScreen() {
  splashScreen.remove();
}






function loadGame() {
  console.log("Start the game");
  buildSplashScreen();
}

window.addEventListener("load", loadGame());