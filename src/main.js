"use strict";

function main() {
  var splashScreen;
  var instructionScreenHtml;
  var endScreen;
  var pointsScreen;
  var gameScreen;
  
  
  function playClick() {
    instructionScreen();
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

  function instructionScreen() {
    instructionScreenHtml = buildDom(`<h2>Let's see an example!!</h2>
    <p>Each color and shape has a score, you have to combine them to get the highest!!</p>
    <div class="instruction-box">
      <div class="points-box">
        <div class="pentagon">
        <span class="points">5</span>
        </div>
        <div class="cross">
          <span class="points">4</span>
        </div>
        <div class="left-arrow">
          <span class="points ">9</span>
        </div>
        <div class="pinkbox-demo">
          <span class="points">3</span>
        </div>
        <div class="bluebox-demo">
          <span class="points">7</span>
        </div>
        <div class="yellowbox-demo">
          <span class="points">8</span>
        </div>
      </div>
    </div>
    <div class="buttons">
        <a href="#" class="button">Next</a>
      </div>`);

      instructionScreenHtml
        .querySelector(".button")
        .addEventListener("click", buildInstructionScreen);
  }
  
  function buildInstructionScreen() {
    pointsScreen = buildDom(`<h2>INSTRUCTIONS</h2>
    <p>You have 3 choices to make in 10 seconds, with each new round 3 more shapes will be added.</p>
      <div class="instruction-box">
        <div class="punctuations-box">
          <div class = "pentagon pink-box"><span class="sum-points">5 + 3</span></div>
          <div class = "cross yellow-box"><span class="sum-points">4 + 8</span></div>
          <div class = "pentagon pink-box"><span class="sum-points">5 + 3</span></div>
          <div class = "cross pink-box"><span class="sum-points">4 + 3</span></div>
          <div class = "cross blue-box"><span class="sum-points">4 + 7</span></div>
          <div class = "left-arrow blue-box"><span class="sum-points">9 + 7</span></div>
          <div class = "left-arrow yellow-box"><span class="sum-points">9 + 8</span></div>
          <div class = "cross yellow-box"><span class="sum-points">4 + 8</span></div>
          <div class = "left-arrow blue-box"><span class="sum-points">9 + 7</span></div>
        </div>
      </div>
      <div class="buttons">
        <a href="#" class="button">Next</a>
      </div>`);
      
      pointsScreen
        .querySelector(".button")
        .addEventListener("click", setGameScreens);
  }
  
  


  function buildEndScreen() {
    endScreen = buildDom(`<h1>GAME HAS FINISHED</h1>
    <img src="imagenes/logo.png" width="200px" height="auto">
    <div class="buttons">
    <div class="your-score">0</div>
    <div class="max-score">0</div>
    <a href="#" id = "restart-button" class="button">Play again!!</a>
    </div>`);
  
    endScreen
      .querySelector(".button")
      .addEventListener("click", buildSplashScreen);
  }

  function setGameScreens() {

    var game = new Game();
    var shapes = game.randomShapes();
    game.randomColourScore();
    console.log(shapes);
    
    function buildPointsScreen(counter) {
      var colours = game.randomColours();
      pointsScreen = buildDom(`<h2>REMEMBER!!</h2>
      <div class="instruction-box">
        <div class="points-box">
          <div class=${shapes[0+counter].shape}>
          <span class="points">${shapes[0+counter].score}</span>
          </div>
          <div class="colour-box ${colours[0].colour}">
            <span class="points">${colours[0].score}</span>
          </div>
          <div class=${shapes[1+counter].shape}>
            <span class="points ">${shapes[1+counter].score}</span>
          </div>
          <div class="colour-box ${colours[1].colour}">
            <span class="points">${colours[1].score}</span>
          </div>
          <div class=${shapes[2+counter].shape}>
            <span class="points">${shapes[2+counter].score}</span>
          </div>
          <div class="colour-box ${colours[2].colour}">
            <span class="points">${colours[2].score}</span>
          </div>
        </div>
      </div>
      <div class="count-down">7</div>`);
    }
    
    function buildGameScreen() {
      var figures = game.randomGame();
      var colour = game.randomColoursGame();
      var colours = game.randomColours();
      gameScreen = buildDom(`<h2>Choose 3 to get the highest score</h2>
      <div class="game-box">
        <div id="click" class="${shapes[figures[0]].shape} ${colours[colour[0]].colour}" data-shape-score="${shapes[figures[0]].score}" data-colour-score="${colours[colour[0]].score}"></div>
        <div id="click" class="${shapes[figures[1]].shape} ${colours[colour[1]].colour}" data-shape-score="${shapes[figures[1]].score}" data-colour-score="${colours[colour[1]].score}"></div>
        <div id="click" class="${shapes[figures[2]].shape} ${colours[colour[2]].colour}" data-shape-score="${shapes[figures[2]].score}" data-colour-score="${colours[colour[2]].score}"></div>
        <div id="click" class="${shapes[figures[3]].shape} ${colours[colour[3]].colour}" data-shape-score="${shapes[figures[3]].score}" data-colour-score="${colours[colour[3]].score}"></div>
        <div id="click" class="${shapes[figures[4]].shape} ${colours[colour[4]].colour}" data-shape-score="${shapes[figures[4]].score}" data-colour-score="${colours[colour[4]].score}"></div>
        <div id="click" class="${shapes[figures[5]].shape} ${colours[colour[5]].colour}" data-shape-score="${shapes[figures[5]].score}" data-colour-score="${colours[colour[5]].score}"></div>
        <div id="click" class="${shapes[figures[6]].shape} ${colours[colour[6]].colour}" data-shape-score="${shapes[figures[6]].score}" data-colour-score="${colours[colour[6]].score}"></div>
        <div id="click" class="${shapes[figures[7]].shape} ${colours[colour[7]].colour}" data-shape-score="${shapes[figures[7]].score}" data-colour-score="${colours[colour[7]].score}"></div>
        <div id="click" class="${shapes[figures[8]].shape} ${colours[colour[8]].colour}" data-shape-score="${shapes[figures[8]].score}" data-colour-score="${colours[colour[8]].score}"></div>
      </div>
      <div class="count-down">7</div>`);

      var clickFigures = gameScreen.querySelectorAll('#click');
      clickFigures.forEach(function(item) {
        var max = Number(item.dataset.shapeScore) + Number(item.dataset.colourScore);
        item.addEventListener('click', onClickWorks);
        game.maxScore(max);
      })
      var counter = 0;

      function onClickWorks(event) {
        
        if (counter < 3){
          counter++;
          var shapeScore = parseInt(event.target.dataset.shapeScore);
          var colourScore = parseInt(event.target.dataset.colourScore);
          game.caculateScore(shapeScore, colourScore);
          }
        }
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