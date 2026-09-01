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
