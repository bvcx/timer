
var numPlayers;
var clocks;
var currentPlayer;
var isPaused;

// this is internal
function countdown() {
  if (!isPaused) {
    clocks[currentPlayer]++;
    document.getElementById(currentPlayerId()).innerHTML = '<b>' + clocks[currentPlayer] +'</b>';
    setTimeout('countdown()', 1000);
  }
}

// this is to be called from the view
function setUpClocks(numberOfPlayers) {
  numPlayers = numberOfPlayers
  clocks = new Array(numberOfPlayers).fill(0);
  currentPlayer = -1;
  isPaused = false;
}

// this is to be called on click anywhere
function next() {
  if (!isPaused) {
    if (currentPlayer == -1) {
      currentPlayer = nextPlayer();
      countdown();
    } else {
      currentPlayer = nextPlayer();
    }
  }
}

// pause button
function pause() {
  if (isPaused) {
    isPaused = false;
    countdown();
  } else {
    isPaused = true;
  }
}

// helpers:

function nextPlayer() {
  return (currentPlayer + 1) % numPlayers
}

function currentPlayerId() {
  return 'player_' + (currentPlayer + 1);
}

// listeners:

document.getElementById('next').onclick = next;
document.getElementById('pause').onclick = pause;
