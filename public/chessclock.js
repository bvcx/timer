
var numPlayers;
var clocks;
var currentPlayerId;
var isPaused;

// this is internal
function countdown() {
  if (!isPaused) {
    clocks[currentPlayerId]++;
    currentPlayer().getElementsByClassName('clock')[0].innerHTML = '<b>' + clocks[currentPlayerId] +'</b>';
    setTimeout('countdown()', 1000);
  }
}

// this is to be called from the view
function setUpClocks(numberOfPlayers) {
  numPlayers = numberOfPlayers
  clocks = new Array(numberOfPlayers).fill(0);
  currentPlayerId = 0;
  isPaused = true;
  currentPlayer().className = 'active';
}

// this is to be called on click anywhere
function next() {
  if (!isPaused) {
    var pastPlayerId = currentPlayerId;
    currentPlayer().className = 'inactive';
    currentPlayerId = nextPlayerId();
    currentPlayer().className = 'active';
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

function nextPlayerId() {
  return (currentPlayerId + 1) % numPlayers
}

function currentPlayer() {
  var id = 'player_' + (currentPlayerId + 1);
  return document.getElementById(id);
}

// listeners:

document.getElementById('next').onclick = next;
document.getElementById('pause').onclick = pause;
