const hover = document.getElementById("hover");

const keyboardEvent = document.getElementById("keyboard-event");

const submit = document.getElementById("submit");

const blurField = document.getElementById("blur-input");

const startGame = document.getElementById("start-game");

const firstRoll = document.getElementById("dice-button");
const secondRoll = document.getElementById("second-dice-button");

const diceValue = document.getElementById("dice-roll");
const diceValueTwo = document.getElementById("second-dice-roll");

const winner = document.getElementById("winner");

//hover action
hover.addEventListener("mouseover", hoverAction);

function hoverAction() {
  document.getElementById("hover-space").innerHTML = "Thank you for hovering!!";
}

//Keyboard Event
keyboardEvent.addEventListener("keypress", keyboardDisplay);

function keyboardDisplay(e) {
  let letters = keyboardEvent.innerHTML;
  letters += e.key;
  document.getElementById("keyboard-space").innerHTML = letters;
}

//Form event

submit.addEventListener("click", submitFunction);

function submitFunction() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;

  if (firstname && lastname) {
    document.getElementById("form-display").innerHTML =
      "<strong>Congrats! Form submission was successful!!</strong>";
  } else {
    document.getElementById("error").innerHTML = "All fields are required";
  }
}

//Focus and Blur

blurField.addEventListener("focusin", blurFunction);
blurField.addEventListener("blur", blurFocus);

function blurFunction() {
  document.getElementById("blur-display").value = "The top row has focus";
}

function blurFocus() {
  document.getElementById("blur-display").value = "The top row has lost focus";
}

// Event Delegation
startGame.addEventListener("click", game);

let diceArray = [1, 2, 3, 4, 5, 6];

function game() {
  document.getElementById("dice-table").style.display = "block";

  firstRoll.addEventListener("click", rollOnce);

  function rollOnce() {
    let x = Math.floor(Math.random() * diceArray.length);
    document.getElementById("dice-roll").value = diceArray[x];
    return diceArray[x];
  }

  secondRoll.addEventListener("click", rollTwice);

  function rollTwice() {
    let y = Math.floor(Math.random() * diceArray.length);
    document.getElementById("second-dice-roll").value = diceArray[y];
    return diceArray[y];
  }

  winner.addEventListener("click", checkWin);

  function checkWin() {
    let score = diceValue.value + diceValueTwo.value;
    //let score = (diceArray[x]) + (diceArray[y]);

    if (score == 10) {
      document.getElementById("dice-feedback").innerHTML =
        "<strong>Nice Roll! You won a free pass!!</strong>";
    } else {
      document.getElementById("dice-feedback").innerHTML =
        "<strong>Oops! you got less than 10, Please try again!</strong>";
    }
  }
}
