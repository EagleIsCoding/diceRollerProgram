// Dice Roller Program 

/**
 * Rolls a specified number of dice and displays the results.
 * 
 * This function retrieves the number of dice to roll from an input element with the ID "diceInput".
 * It then generates random values for each die, updates the text content of an element with the ID "diceResults"
 * to show the rolled values, and updates the inner HTML of an element with the ID "diceImgs" to display the corresponding dice images.
 * 
 * @function
 */
function rollDice() {
    const numDice = document.getElementById("diceInput").value;
    const diceResult = document.getElementById("diceResults");
    const diceImgs = document.getElementById("diceImgs");
    const values = [];
    const images = [];

    for (let i = 0; i < numDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="imgs/${value}.png">`);   
    }

    diceResult.textContent = `You rolled: ${values.join(", ")}`;
    diceImgs.innerHTML = images.join(" ");
}