"use strict";

function main() {
  var splashScreen;
  var instructionScreen;
  var endScreen;
  var pointsScreen;
  var gameScreen;
  
  
  function playClick() {
    buildInstructionScreen();
  }
  
  // DOM maniputations
  //Build
  function buildDom(html) {
    var target = document.getElementById("container");
    target.innerHTML = html;
  
    return target;
  }
  
  function buildSplashScreen() {
    splashScreen = buildDom(`
      <h1>BRAINY GAME</h1>
      <img src="imagenes/logo.png" width="500px" height="auto">
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
          <div class = "cross"></div>
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
        .addEventListener("click", setGameScreens);
  }


  function buildEndScreen() {
    endScreen = buildDom(`<h1>GAME HAS FINISHED</h1>
    <img src="imagenes/logo.png" width="200px" height="auto">
    <div class="buttons">
      <a href="#" id = "restar-button" class="button">Play again!!</a>
    </div>`);
  
    endScreen
      .querySelector(".button")
      .addEventListener("click", buildSplashScreen);
  }

  function setGameScreens() {

    var game = new Game();
    var shapes = game.randomShapes();
    game.randomColourScore();

    function buildPointsScreen(counter) {
      var {colours, colourScore} = game.randomColours();
      var shapeScore = game.randomShapeScore();
      pointsScreen = buildDom(`<h2>REMEMBER!!</h2>
      <p>Choose the combinations with the highest score and remember the shapes for the next game.</p>
      <div class="instruction-box">
        <div class="points-box">
          <div class=${shapes[0+counter]}>
          <span class="points">${shapeScore[0+counter]}</span>
          </div>
          <div class="colour-box ${colours[0]}">
            <span class="points">${colourScore[0]}</span>
          </div>
          <div class=${shapes[1+counter]}>
            <span class="points ">${shapeScore[1+counter]}</span>
          </div>
          <div class="colour-box ${colours[1]}">
            <span class="points">${colourScore[1]}</span>
          </div>
          <div class=${shapes[2+counter]}>
            <span class="points">${shapeScore[2+counter]}</span>
          </div>
          <div class="colour-box ${colours[2]}">
            <span class="points">${colourScore[2]}</span>
          </div>
        </div>
      </div>
      <div class="count-down">2</div>`);
 
    }
    function onClickWorks() {
      console.log("hey");
    }
    
    function buildGameScreen() {
      var figures = game.randomGame();
      var colour = game.randomColoursGame();
      var {colours} = game.randomColours();
      gameScreen = buildDom(`<h2>Choose 3 to get the highest score</h2>
      <div class="game-box">
        <div id="click" class="${shapes[figures[0]]} ${colours[colour[0]]}"></div>
        <div id="click" class="${shapes[figures[1]]} ${colours[colour[1]]}"></div>
        <div id="click" class="${shapes[figures[2]]} ${colours[colour[2]]}"></div>
        <div id="click" class="${shapes[figures[3]]} ${colours[colour[3]]}"></div>
        <div id="click" class="${shapes[figures[4]]} ${colours[colour[4]]}"></div>
        <div id="click" class="${shapes[figures[5]]} ${colours[colour[5]]}"></div>
        <div id="click" class="${shapes[figures[6]]} ${colours[colour[6]]}"></div>
        <div id="click" class="${shapes[figures[7]]} ${colours[colour[7]]}"></div>
        <div id="click" class="${shapes[figures[8]]} ${colours[colour[8]]}"></div>
      </div>
      <div class="count-down">2</div>`);

      var clickFigures = gameScreen.querySelectorAll('#click');
      clickFigures.forEach(function(item) {
        item.addEventListener('click', onClickWorks);
      })
    }

    game.setCallbacks(buildGameScreen, buildPointsScreen, buildEndScreen);
    game.start();
  }
  
  function loadGame() {
    console.log("Start the game");
    buildSplashScreen();
  }

  loadGame();
}

window.addEventListener("load", main);