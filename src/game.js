"use strict";



var splashScreen;
var instructionScreen;
var pointsScreen;
var gameScreen;
var endScreen;
var nextClickCounter = 0;
var finishGame = 3;

function playClick() {
  buildInstructionScreen();
}

function nextClick() {
  nextClickCounter++;
  if (nextClickCounter > finishGame){
    buildEndScreen();
  } else {
    buildPointsScreen();
  }
}

function timeOutPointsScreen() {
    buildGameScreen();
}

function roundGame() {
  destroyGameScreen();
  buildPointsScreen();
}

// DOM maniputations
//Build
function buildDom(html) {
  var target = document.getElementById("container");
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
  <p>This is a game to test how fast you are taking the best combination of colors and shapes to get the highest score</p>
    <div class="instruction-box">
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
  <p>Choose the combinations with the highest score and remember the shapes for the next game.</p>
  <div class="instruction-box">
    <div class="points-box">
      <div class = "box">
        <span class="points"></span>
      </div>
      <div class = "colour-box blue-box">
        <span class="points"></span>
      </div>
      <div class = "hexagon">
        <span class="points"></span>
      </div>
      <div class = "colour-box pink-box">
        <span class="points"></span>
      </div>
      <div class = "rhombus"></div>
      <div class = "colour-box yellow-box">
        <span class="points"></span>
      </div>
    </div>
  </div>
  <div id="count-down">2</div>`);

    var countDown = 1;
    var myvar = setInterval(function() {
      var counter = document.getElementById("count-down");
      
      if (countDown === 0) {
        timeOutPointsScreen();
        clearInterval(myvar);
      } else {
        countDown--;
        counter.innerText = countDown;
        return counter;
      }},1000);
}

function buildGameScreen() {
  gameScreen = buildDom(`<h2>Choose 3 to get the highest score</h2>
  <div class="game-box">
    <div class = "box"></div>
    <div class = "colour-box blue-box"></div>
    <div class = "hexagon"></div>
    <div class = "rhombus"></div>
    <div class = "colour-box yellow-box"></div>
    <div class = "colour-box pink-box"></div>
    <div class = "rhombus"></div>
    <div class = "colour-box yellow-box"></div>
  </div>
  <div id="count-down">2</div>`);

  var countDown = 1;
    var myvar = setInterval(function() {
      var counter = document.getElementById("count-down");
      
      if (countDown === 0) {
        nextClick ();
        clearInterval(myvar);
      } else {
        countDown--;
        counter.innerText = countDown;
        return counter;
      }},1000);
}

function buildEndScreen() {
  endScreen = buildDom(`
  <h1>GAME HAS FINISHED</h1>
  <img src="../PROYECTO BRAIN GAME/imagenes/logo.png" width="200px" height="auto">
  <div class="buttons">
    <a href="#" class="button">Play again!!</a>
    <a href="#" class="button">Finish</a>
  </div>`);

  endScreen
    .querySelector(".button")
    .addEventListener("click", buildSplashScreen);
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