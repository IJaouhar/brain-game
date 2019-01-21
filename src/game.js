'use strict';

function Game() {
  this.extClickCounter = 0;
  this.finishGame = 3;
  this.countDown = 4;
  this.state = 'pointsScreen';
};

Game.prototype.start = function() {
  this.pointsScreen();
  
  var myvar = setInterval(function() {
    var setCountDown = document.querySelector(".count-down")
    setCountDown.innerText = this.countDown;

    if (this.countDown === 0) {
      if (this.state === 'pointsScreen') {
        this.gameScreen();
        this.state = 'gameScreen'
        this.countDown = 4;
        this.finishGame--;
      } else {
        this.pointsScreen();
        this.state = 'pointsScreen'
        this.countDown = 4;
      }
    } else {
      this.countDown--;
      console.log(this.countDown);
      //counter.innerText = this.countDown;
    }
    if(this.finishGame === 0) {
    console.log("Hola que hase");
    clearInterval(myvar);
    this.buildEndScreen();

  }
  setCountDown.innerText = this.countDown;
  console.log(setCountDown);

  }.bind(this),1000);

  
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

