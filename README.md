# Brainy Game
## Description
Simple game base on DOM and CSS. 
The main objective of the game is to give the player a score related to speed and mental agility, doing simple mathematical calculations and choosing the objects with the highest score.

## MVP (DOM)
Player will receive a screen with the different choices of colours and forms with the different scores. It will have a short time to see what are the highest score and then screen will change. There will be the different forms with colours, player will have 3 choices to do in 4 seconds getting a score from the taken choices. 

## Backlog
### Choose poinst.
- Choose randomly the points for the objects a colour.

### Print in the screen.
- Print in the screen the objects and colours that had been choose randomly.

### Time/choices.
- Player will have a limit time and number of choices to do.

### New score.
- Second scores in advance won’t be random. They will depend on the previous user choices.
	figureChooser()

### Final screen.
- Final screen will show the total score and the user most chosen objects and colors. 

## Data structure
### Game
game.js 
```
	function Game(){
	  figures
	  score
	  timeOut
	  clickOut
	}
	clearScores()
	drawScores()
	clearGame()
	drawGame()
	start()
	randomFigures()
	timeOut()
	scoreCounter()
  figureClick()
  ```

### Figures
figures.js
```
	Function Figures (){
		colour
		shape
    points
	}
	draw()
```

## States y States Transitions
Definition of the different states and their transition (transition functions)

### SplashScreen
- Start screen.
- Start button to take you game screen.
- Function to destroy start screen and launch game screen.
### GameScreen
- Game screen.
- Score.
- Grid where print the figures.
- Top bar with the figures, colours and values.
- Time counter.
- Function to destroy game screen and launch game over.
### GameoverScreen
- Game over screen.
- Score.
- Player profile.
- Restart button.
- Function to destroy Game over screen and launch game screen.
- Finish button.

## Task
- Choose project.
- Decide technology.
- Create folders.
- Create GITHUB repository.
- Readme.txt.
- Design functional structure.
- Create HTML and CSS.
- Create Js Classes and functions.
- Test.
- Improve.

## Links
https://trello.com/b/t8CO6kLh/juego-dom

## Git
https://github.com/mavericucu/brain-game

## Slides
URls for the project presentation (slides) Link Slides.com
