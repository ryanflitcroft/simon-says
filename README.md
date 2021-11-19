# simon says

*the game should work like this:*

1. seven panels should exist.

    * Each panel representing one color (red, orange, yellow, green, blue, indigo, violet).

1. game is initialized when player clicks the start button:

    * a variable, level, is assigned the value of 1.

    * a random color is chosen to be pushed to the array, gameSequence.

    * when a color is chosen, the panel which is represented by that color should be animated to demonstrate click event.

    * the player must click the panel matching that which was chosen for the game array.

    * the color that was clicked by the player is pushed to the array, playerSequence.

    * the first index of the array playerSequence is compared to the first index of the array gameSequence.

        * if the index of the arrays are of equal value, the next level is initialized.
        * if the index of the arrays are not of equal value, the game is reset, all values are cleared.

1. next level is initialized:

    * variable level is assigned the value of the previous level + 1.

    * the values of the array playerSequence are cleared.

    * a random color is chosen to be pushed to the array gameSequence.

        * each color in the array gameSequence should be animated as a click event, from index 0 forward.

    * the player must click the panel matching that which was chosen for the array gameSequence.

    * the first index of the array playerSequence is compared to the first index of the array gameSequence.
        * If the index of the arrays are not of equal value, the game is reset.
        * If the index of the arrays are of equal value:

    * while the length of the array playerSequence is less than or equal to the length of the gameSequence, and if the index of the arrays are of equal value:

        * the player must click the panel matching that which was chosen for the next index of array gameSequence.

        * the arrays again are compared.

        * if each index of the array playerSequence is equal to each index of the array gameSequence, next level is initialized.

## Plan for app.js

1. grab DOM elements:

    * panels (red, orange, yellow, green, blue, indigo, violet)

    * start button

1. initialize values:

    * let level

    * let gameSequence

    * let playerSequence

    * let gameColor

    * let playerColor

    * let colorRandom

    * let reset

1. write functions:

    * startGame()

        * when start button is clicked, function startGame() is called.

        * function levelUp() is called.

        * text content of start button is assigned the string value 'simon says + level'.

        * function gameClick() is called.

    * randomColor()
        * generates a random color to be assigned to variable colorRandom.

    * gameClick()
        * function randomColor() is called.
        * value of variable colorRandom is pushed to array gameSequence.

    * playerClick()
        * function randomColor() is called.
        * value of variable colorRandom is pushed to array playerSequence.
        * function compare() is called for each index of array playerSequence, while length of playerSequence is less than or equal to array gameSequence.

    * compare()
        * each index of array playerSequence is compared with each index of array gameSequence, while length of playerSequence is less than or equal to length of gameSequence.
        * if value returns true, function levelUp() is called.
        * if value returns false, function resetGame() is called.

    * levelUp()
        * value of variable level is assigned level + 1.
        * value of array playerSequence is assigned [].
        * function gameClick is called.

    * resetGame()
        * number value of each variable is assigned 0.
        * string value of each array is assigned [].
        * text content of start button is assigned the string value 'try again'.

        