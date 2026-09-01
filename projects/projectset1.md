```javascript
##project 1 solution : PAGE COLOR CHANGER

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e)
    console.log(e);
    console.log(e.target);
    if (e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

```javascript
##project 2 solution : BMI GENERATOR

const form = document.querySelector('form');
//declaring height outside: this usecase will give you empty value
//const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      results.innerHTML = `BMI: ${bmi} <br>Under Weight`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `BMI: ${bmi} <br>Normal Range`;
    } else {
      results.innerHTML = `BMI: ${bmi} <br>Over Weight`;
    }
  }
});

```

```javascript
##project 3 solution : DIGITAL CLOCK
//METHOD 1: WE WILL USE THIS HERE
const clock = document.getElementById('clock');

//METHOD 2
//const clock = document.querySelector('#clock');

//let date = new Date();
//console.log(date.toLocaleTimeString());

//1)This gives output on console BUT does not update automatically, we need to refresh window to get the instantaneous time
//DO THIS INSTEAD: to set continous updation intervals
setInterval(function () {
  let date = new Date();
  console.log(date.toLocaleTimeString());
}, 2000); //1000 which in ms: to update every 1s ; to update every 2s: give input 2000 which in ms

//2)BUT, This gives output on console, not on the main window
//DO THIS INSTEAD: to get output on main window
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
```javascript
##project 4 solution : GUESS THE NUMBER

let randomNumber = parseInt(Math.random() * 100 + 1); //gives (random numbers between 0 and 1) * 10/100
//+ 1 : to ignore 0
//parseInt: to ignore decimal values

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas'); //result paragraphs

const p = document.createElement('p'); //paragragh element

let prevGuess = [];
let numGuess = 1; //number of guesses
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); //As this is a form, to stop values from going to the server, and keeping them here for use
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //validating the guess if it a number between 1 and 100
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 1) {
    alert(`Please enter a number more than 1`);
  } else if (guess > 100) {
    alert(`Please enter a number less. than 100`);
  } else {
    prevGuess.push(); //pushes number into array
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //check if value is low, high or equal to the random number to be guessed
  if (guess === randomNumber) {
    displayMessage(`Congratulations, you won! You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is tooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is tooo high`);
  }
}

function displayGuess(guess) {
  //clean the previous value, update the remaining guess array
  userInput.value = ''; //cleanup
  guessSlot.innerHTML += `${guess},  `; //pushes and shows all guess values
  numGuess++; //increases counter of guesses
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //print the message of lowOrHi query selector
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //to end game once all number of guesses are over
  userInput.value = '';
  userInput.setAttribute('disabled', ''); //attributes are set in key-value pairs, so we need to give one empty value for the 'disabled' key
  p.classList.add('button'); //Start button
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //to restart game after losing
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []; //reset , empties the array
    numGuess = 1; //restart the guess counter
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```