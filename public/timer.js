
var timerValue; // the number we're counting down from
var timeLeft; // the number of seconds remaining
var timeUp; // whether we've run out of time yet

// this is internal
function countdown() {
  if (timeLeft == 0) {
    document.getElementById('time').innerHTML = '<b> Time is up!</b>';
    document.getElementById('beep').play();
    timeUp = true;
  } else {
    document.getElementById('time').innerHTML = '<b>' + timeLeft + '</b>';
    timeLeft = timeLeft - 1;
    setTimeout('countdown()', 1000);
  }
}

// this is to be called from the view
function countDownFrom(value) {
  timerValue = value;
  timeLeft = value;
  countdown();
}

// this is to be called on click anywhere
function reset() {
  timeLeft = timerValue;
  if (timeUp) {
    timeUp = false;
    countdown();
  }
}

document.body.addEventListener('click', reset, true);

