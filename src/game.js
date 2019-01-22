'use strict';

function Game() {
  this.extClickCounter = 0;
  this.finishGame = 3;
  this.countDown = 10;
  this.counter = 0;
  this.state = 'pointsScreen';
  this.shapes = ["box", "pentagon", "hexagon", "rhombus", "parallelo", "trapezo", "start", "right-arrow", "left-arrow", "cross"];
  this.shapes = ["blue-box", "pink-box", "yellow-box"];

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
      this.countDown = 4;
      this.finishGame--;
      this.counter += 3;
    } else {
      this.pointsScreen(this.counter);
      this.state = 'pointsScreen'
      this.countDown = 4;
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


Game.prototype.randomShapes = function() {

  for (var i = this.shapes.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var randomShapes = this.shapes[i];
    this.shapes[i] = this.shapes[j];
    this.shapes[j] = randomShapes;
  };
  return this.shapes;
}

Game.prototype.randomShapes = function() {

  for (var i = this.shapes.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var randomShapes = this.shapes[i];
    this.shapes[i] = this.shapes[j];
    this.shapes[j] = randomShapes;
  };
  return this.shapes;
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

