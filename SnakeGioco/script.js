var casella = 25;
var riga = 20;
var colonna = 20;
var campo;
var gioco;

var x = casella * 5;
var y = casella * 5;

var direzioneX = 0;
var direzioneY = 0;

var corpoSnake = [];

var ciboX;
var ciboY;

var time = 150;

var gameOver = false;

var count = 0;

// mediaquery
var schermo = window.matchMedia("(max-width: 576px)");

start();
setInterval(update, time);

function start() {
  board = document.getElementById("campo");
  board.height = riga * casella;
  board.width = colonna * casella;
  context = board.getContext("2d");
  placeFood();
  document.addEventListener("keyup", changeDirection);
  // update();
}

function update() {
  if (gameOver == true) {
    return;
  }

  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "red";
  context.fillRect(ciboX, ciboY, casella, casella);

  if (x == ciboX && y == ciboY) {
    corpoSnake.push([ciboX, ciboY]); // Aggiorna l'array mettendo un nuovo valore alla fine
    placeFood();
    count++;
    document.getElementById("count").textContent = count;
  }

  for (let i = corpoSnake.length - 1; i > 0; i--) {
    corpoSnake[i] = corpoSnake[i - 1];
  }
  if (corpoSnake.length) {
    corpoSnake[0] = [x, y];
  }

  context.fillStyle = "blue";
  x += direzioneX * 25;
  y += direzioneY * 25;
  context.fillRect(x, y, casella, casella);
  for (let i = 0; i < corpoSnake.length; i++) {
    context.fillRect(
      corpoSnake[i][0],
      corpoSnake[i][1],
      casella,
      casella
    );
  }

  // condizioni di gameover
  if (
    x < 0 ||
    x > colonna * casella - 25 ||
    y < 0 ||
    y > riga * casella - 25
  ) {
    gameOver = true;
    document.getElementById("nickname").textContent = "???";
    document.getElementById("title").textContent = "Game Over";
    addScore();
  }

  for (let i = 0; i < corpoSnake.length; i++) {
    if (x == corpoSnake[i][0] && y == corpoSnake[i][1]) {
      gameOver = true;
      document.getElementById("nickname").textContent = "???";
      document.getElementById("title").textContent = "Game Over";
      addScore();
    }
  }
}

// Modifica la direzione dello snake a seconda del tasto premuto
function changeDirection(e) {
  if (e.code == "ArrowUp" && direzioneY != 1) {
    direzioneX = 0;
    direzioneY = -1;
  } else if (e.code == "ArrowDown" && direzioneY != -1) {
    direzioneX = 0;
    direzioneY = 1;
  } else if (e.code == "ArrowLeft" && direzioneX != 1) {
    direzioneX = -1;
    direzioneY = 0;
  } else if (e.code == "ArrowRight" && direzioneX != -1) {
    direzioneX = 1;
    direzioneY = 0;
  }
}

function changeDirection2(e) {
  if (e == 1 && direzioneY != 1) {
    direzioneX = 0;
    direzioneY = -1;
  } else if (e == 2 && direzioneY != -1) {
    direzioneX = 0;
    direzioneY = 1;
  } else if (e == 3 && direzioneX != 1) {
    direzioneX = -1;
    direzioneY = 0;
  } else if (e == 4 && direzioneX != -1) {
    direzioneX = 1;
    direzioneY = 0;
  }
}

// Piazza cibo utilizzando la libreria Math
function placeFood() {
  // (0-1) * colonna -> (0-19.9periodico) -> (0-19) * 25
  ciboX = Math.floor(Math.random() * colonna) * casella;
  ciboY = Math.floor(Math.random() * riga) * casella;
}

function rst() {
  gameOver = false;
  corpoSnake.length = 0;
  x = casella * 5;
  y = casella * 5;
  direzioneX = 0;
  direzioneY = 0;
  start();
  count = 0;
  document.getElementById("count").textContent = 0;
  document.getElementById("title").textContent = "Snake";
  document.getElementById("nickname").textContent = "???";
}

function rstAll() {
  rst();
  scores = [];
  document.getElementById("scoreboard").textContent = "";
}

function nick() {
  let name = document.getElementById("name").value;
  if (name != "") {
    document.getElementById("nickname").textContent = name;
  } else {
    document.getElementById("nickname").textContent = "???";
  }
}

// array di punteggi
let scores = [];

// funzione per aggiungere un punteggio
function addScore() {
  // recupera il nome e il punteggio inseriti
  let name = document.getElementById("name").value;
  let score = parseInt(count);
  if (name == "") {
    name = "???";
  }

  // aggiungi il punteggio all'array
  scores.push({ name: name, score: score });

  // ordina l'array in ordine decrescente di punteggio
  scores.sort(function (a, b) {
    return b.score - a.score;
  });

  // se ci sono più di 10 punteggi, rimuovi l'ultimo
  if (scores.length > 10) {
    scores.pop();
  }

  // visualizza la classifica
  let scoreboard = document.getElementById("scoreboard");
  scoreboard.innerHTML = "";
  for (let i = 0; i < scores.length; i++) {
    let li = document.createElement("li");
    li.innerText = scores[i].name + ": " + scores[i].score;
    scoreboard.appendChild(li);
  }

  // salva i punteggi nel localStorage
  localStorage.setItem("scores", JSON.stringify(scores));

  // resetta i campi di input
  document.getElementById("name").value = "";
  document.getElementById("score").value = "";
}

// carica i punteggi dal localStorage all'avvio
window.addEventListener("load", function () {
  let savedScores = localStorage.getItem("scores");
  if (savedScores) {
    scores = JSON.parse(savedScores);

    let scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = "";
    for (let i = 0; i < scores.length; i++) {
      let li = document.createElement("li");
      li.innerText = scores[i].name + ": " + scores[i].score;
      scoreboard.appendChild(li);
    }
  }
});

function logout() {
  window.history.back();
}
document.getElementById("logoutButton").addEventListener("click", logout);
