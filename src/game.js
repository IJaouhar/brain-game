'use strict';

function Game() {
  this.extClickCounter = 0;
  this.finishGame = 3;
  this.countDown = 2;
  this.counter = 0;
  this.state = 'pointsScreen';
  this.shapes = ["box", "pentagon", "hexagon", "rhombus", "parallelo", "trapezo", "start", "right-arrow", "left-arrow", "cross"];
  this.colours = ["blue-box", "pink-box", "yellow-box"];
  this.gameShapes = [];
  this.gameColours = [];
  this.shapeScore = [];
  this.colourScore = [];
};

Game.prototype.start = function() {
  this.pointsScreen(this.counter);
  
  var myvar = setInterval(function() {
  var setCountDown = document.querySelector(".count-down")
  setCountDown.innerText = this.countDown;

  if (this.countDown === 0) {
    
    if (this.state === 'pointsScreen') {
      this.gameScreen();
      this.state = 'gameScreen'
      this.countDown = 2;
      
      this.counter += 3;
    } else {
      this.pointsScreen(this.counter);
      this.state = 'pointsScreen'
      this.countDown = 2;
      this.finishGame--;
    }
  } else {
    this.countDown--;
    //counter.innerText = this.countDown;
  }
  if(this.finishGame === 0) {
  clearInterval(myvar);
  this.buildEndScreen();

  }
  setCountDown.innerText = this.countDown;

  }.bind(this),1000);


}

// Create arrays with random positions. 
Game.prototype.randomShapes = function() {

  for (var i = this.shapes.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var randomShapes = this.shapes[i];
    this.shapes[i] = this.shapes[j];
    this.shapes[j] = randomShapes;
  };
  return this.shapes;
}


Game.prototype.randomColourScore = function(){
  for (var i = 0; i < 3; i++) {
    this.colourScore.push(Math.floor(Math.random() * 10) + 1);
  }
  return this.colourScore;
} 


Game.prototype.randomColours = function() {

  for (var i = this.colours.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var randomColours = this.colours[i];
    var randomScore = this.colourScore[i];
    this.colours[i] = this.colours[j];
    this.colours[j] = randomColours;

    this.colourScore[i] = this.colourScore[j];
    this.colourScore[j] = randomScore;

    var coloursAndScores = {
      colours: this.colours,
      colourScore: this.colourScore,
      
    }
  }
return coloursAndScores;
}

// Add each loop 3 new shapes.
Game.prototype.randomGame = function() {
  if (this.counter === 0){
    for (var i = 0; i < 9; i++) {
      this.gameShapes.push(Math.floor(Math.random() * 3));
    }
  }
  if (this.counter === 3){
    this.gameShapes = [];
    for (var i = 0; i < 9; i++) {
      this.gameShapes.push(Math.floor(Math.random() * 6))
    }
  }
  if (this.counter === 6){
    this.gameShapes = [];
      this.gameShapes.push(Math.floor(Math.random() * 6))
    for (var i = 0; i < 9; i++) {
      this.gameShapes.push(Math.floor(Math.random() * 9))
    }
  }
  return this.gameShapes;
}
// Place colors random on screen.
Game.prototype.randomColoursGame = function() {
    for (var i = 0; i < 9; i++) {
      this.gameColours.push(Math.floor(Math.random() * 3));
    }
  return this.gameColours;
}
// scores
Game.prototype.randomShapeScore = function(){
  for (var i = 0; i < 9; i++) {
    this.shapeScore.push(Math.floor(Math.random() * 10) + 1);
  }
  return this.shapeScore;
}

Game.prototype.callGameScreen = function(setGameCallback) {
  this.gameScreen = setGameCallback;
};

Game.prototype.callPointsScreen = function(setPointsCallback) {
  this.pointsScreen = setPointsCallback;
};

Game.prototype.callOnGameOver = function(buildOnGameOverScreen) {
  this.buildEndScreen = buildOnGameOverScreen;
};

Game.prototype.setCallbacks = function(setGameCallback, setPointsCallback, buildOnGameOverScreen) {
  this.callGameScreen(setGameCallback);
  this.callPointsScreen(setPointsCallback);
  this.callOnGameOver(buildOnGameOverScreen);
  //this.printCountDown = printCountDown
};

