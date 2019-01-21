'use strict';

function Game() {
  this.extClickCounter = 0;
  this.finishGame = 3;
  this.countDown = 3;
  this.state = 'pointsScreen';
};

Game.prototype.start = function() {
  this.pointsScreen();

  var myvar = setInterval(function() {
    if (this.countDown === 0) {
      if (this.state === 'pointsScreen') {
        this.gameScreen();
        this.state = 'gameScreen'
        this.countDown = 3;
        this.finishGame--;
      } else {
        this.pointsScreen();
        this.state = 'pointsScreen'
        this.countDown = 3;
      }
    } else {
      this.countDown--;
      console.log(this.countDown);
      //counter.innerText = this.countDown;
    }
  }.bind(this),1000);

  if(this.finishGame === 0) {
    clearInterval(myvar);
    this.buildEndScreen();

  }
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
  this.callOnGameOver(buildOnGameOverScreen)
  //this.printCountDown = printCountDown
};

