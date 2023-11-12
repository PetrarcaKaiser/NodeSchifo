function logout() {
  window.history.back();
}
document.getElementById("logoutButton").addEventListener("click", logout);

var count=0;
var token=0;
var token1=0;
var token2=0;
var azione=0;
var azione1=0;
var winX=0;
var winO=0;
var tieC=0;
var all=0;
const array = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var x;
function closeNote(){
  document.getElementById("note").style.display = "none";
}
function notes(){
  document.getElementById("note").style.display = "block";
}

function crediti(){
  document.getElementById("social").style.display = "inline";
}
function closeCredit(){
  document.getElementById("social").style.display = "none";
}

function clickBot(x){
  var bot;
  const nextturno = document.getElementById("ris").textContent;
  if(x == 'B1') {
    bot = document.getElementById("B1");
    array[0] = 1;
  }
  if(x == 'B2') {
    bot = document.getElementById("B2");
    array[1] = 1;
  }
  if(x == 'B3') {
    bot = document.getElementById("B3");
    array[2] = 1;
  }
  if(x == 'B4') {
    bot = document.getElementById("B4");
    array[3] = 1;
  }
  if(x == 'B5') {
    bot = document.getElementById("B5");
    array[4] = 1;
  }
  if(x == 'B6') {
    bot = document.getElementById("B6");
    array[5] = 1;
  }
  if(x == 'B7') {
    bot = document.getElementById("B7");
    array[6] = 1;
  }
  if(x == 'B8') {
    bot = document.getElementById("B8");
    array[7] = 1;
  }
  if(x == 'B9') {
    bot = document.getElementById("B9");
    array[8] = 1;
  }
  if(bot.textContent == 'O' || bot.textContent == 'X'){
    return;
  }
  if(nextturno == 'X'){
    bot.textContent = 'O';
    document.getElementById("ris").textContent = "O";
    count++;
    if(token == 1){
      cpu();
    }
    if(token == 2){
      cpuPlus();
    }
    isWin();
    isTie();
    document.getElementById("conta").textContent = count;
  } else {
    bot.textContent = 'X';
    document.getElementById("ris").textContent = "X";
    count++;
    isWin();
    isTie();
    document.getElementById("conta").textContent = count;
  }
}

function gamestart(){
  document.getElementById("grid-container").style.display = "none";
  document.getElementById("tris0").style.display = "inline";
  document.getElementById("tris").style.display = "inline";
  document.getElementById("testo1").style.display = "inline";
  document.body.style.backgroundColor = black;
  
}

function menu(){
  document.getElementById("grid-container").style.display = "grid";
  document.getElementById("tris0").style.display = "none";
  document.getElementById("tris").style.display = "none";
  document.getElementById("testo1").style.display = "none";
  document.body.style.backgroundImage = "url('https://giffiles.alphacoders.com/168/168285.gif')";
}
function reset() {
  document.getElementById("conta").textContent = "0";
  count = 0;
  azione1 = 0;
  azione = 0;
  document.getElementById("ris").textContent = "X";
  document.getElementById("B1").textContent = "/";
  document.getElementById("B2").textContent = "/";
  document.getElementById("B3").textContent = "/";
  document.getElementById("B4").textContent = "/";
  document.getElementById("B5").textContent = "/";
  document.getElementById("B6").textContent = "/";
  document.getElementById("B7").textContent = "/";
  document.getElementById("B8").textContent = "/";
  document.getElementById("B9").textContent = "/";
  document.getElementById("chat").textContent = "";
  document.getElementById("B1").style.backgroundColor = "black";
  document.getElementById("B2").style.backgroundColor = "black";
  document.getElementById("B3").style.backgroundColor = "black";
  document.getElementById("B4").style.backgroundColor = "black";
  document.getElementById("B5").style.backgroundColor = "black";
  document.getElementById("B6").style.backgroundColor = "black";
  document.getElementById("B7").style.backgroundColor = "black";
  document.getElementById("B8").style.backgroundColor = "black";
  document.getElementById("B9").style.backgroundColor = "black";
  document.getElementById("B1").style.color = "white";
  document.getElementById("B2").style.color = "white";
  document.getElementById("B3").style.color = "white";
  document.getElementById("B4").style.color = "white";
  document.getElementById("B5").style.color = "white";
  document.getElementById("B6").style.color = "white";
  document.getElementById("B7").style.color = "white";
  document.getElementById("B8").style.color = "white";
  document.getElementById("B9").style.color = "white";
}
function resetAll() {
  document.getElementById("conta").textContent = "0";
  count = 0;
  document.getElementById("ris").textContent = "X";
  document.getElementById("B1").textContent = "/";
  document.getElementById("B2").textContent = "/";
  document.getElementById("B3").textContent = "/";
  document.getElementById("B4").textContent = "/";
  document.getElementById("B5").textContent = "/";
  document.getElementById("B6").textContent = "/";
  document.getElementById("B7").textContent = "/";
  document.getElementById("B8").textContent = "/";
  document.getElementById("B9").textContent = "/";
  document.getElementById("chat").textContent = "";
  document.getElementById("cx1").textContent = "0";
  document.getElementById("co1").textContent = "0";
  document.getElementById("cp1").textContent = "0";
  document.getElementById("all1").textContent = "0";
  document.getElementById("B1").style.backgroundColor = "black";
  document.getElementById("B2").style.backgroundColor = "black";
  document.getElementById("B3").style.backgroundColor = "black";
  document.getElementById("B4").style.backgroundColor = "black";
  document.getElementById("B5").style.backgroundColor = "black";
  document.getElementById("B6").style.backgroundColor = "black";
  document.getElementById("B7").style.backgroundColor = "black";
  document.getElementById("B8").style.backgroundColor = "black";
  document.getElementById("B9").style.backgroundColor = "black";
  document.getElementById("B1").style.color = "white";
  document.getElementById("B2").style.color = "white";
  document.getElementById("B3").style.color = "white";
  document.getElementById("B4").style.color = "white";
  document.getElementById("B5").style.color = "white";
  document.getElementById("B6").style.color = "white";
  document.getElementById("B7").style.color = "white";
  document.getElementById("B8").style.color = "white";
  document.getElementById("B9").style.color = "white";
  token = 0;
}
function friend(){
  token = 0;
  document.getElementById("mode2").textContent = "Friend";
}

function isWin(){
  const orizzontale1 = document.getElementsByClassName("o1");
  if(orizzontale1[0].textContent == 'O' && orizzontale1[1].textContent == 'O' && orizzontale1[2].textContent == 'O' || orizzontale1[0].textContent == 'X' && orizzontale1[1].textContent == 'X' && orizzontale1[2].textContent == 'X'){
    if(orizzontale1[0].textContent == 'O'){
      document.getElementById("chat").textContent = "HA VINTO TEAM O";
      winO++;
      document.getElementById("co1").textContent = winO;
    }
    if(orizzontale1[0].textContent == 'X'){
      document.getElementById("chat").textContent = "HA VINTO TEAM X";
      winX++;
      document.getElementById("cx1").textContent = winX;
    } 
    all++;
    document.getElementById("all1").textContent = all;
    orizzontale1[0].style.backgroundColor = "white"; 
    orizzontale1[0].style.color = "black";
    orizzontale1[1].style.backgroundColor = "white"; 
    orizzontale1[1].style.color = "black";
    orizzontale1[2].style.backgroundColor = "white"; 
    orizzontale1[2].style.color = "black";
    return;
  }
  const orizzontale2 = document.getElementsByClassName("o2");
  if(orizzontale2[0].textContent == 'O' && orizzontale2[1].textContent == 'O' && orizzontale2[2].textContent == 'O' || orizzontale2[0].textContent == 'X' && orizzontale2[1].textContent == 'X' && orizzontale2[2].textContent == 'X'){
    if(orizzontale2[0].textContent == 'O'){
      document.getElementById("chat").textContent = "HA VINTO TEAM O";
      winO++;
      document.getElementById("co1").textContent = winO;
    }
    if(orizzontale2[0].textContent == 'X'){
      document.getElementById("chat").textContent = "HA VINTO TEAM X";
      winX++;
      document.getElementById("cx1").textContent = winX;
    }
    all++;
    document.getElementById("all1").textContent = all;
    orizzontale2[0].style.backgroundColor = "white"; 
    orizzontale2[0].style.color = "black";
    orizzontale2[1].style.backgroundColor = "white"; 
    orizzontale2[1].style.color = "black";
    orizzontale2[2].style.backgroundColor = "white"; 
    orizzontale2[2].style.color = "black";
    return;
  }
  const orizzontale3 = document.getElementsByClassName("o3");
  if(orizzontale3[0].textContent == 'O' && orizzontale3[1].textContent == 'O' && orizzontale3[2].textContent == 'O' || orizzontale3[0].textContent == 'X' && orizzontale3[1].textContent == 'X' && orizzontale3[2].textContent == 'X'){
    if(orizzontale3[0].textContent == 'O'){
      document.getElementById("chat").textContent = "HA VINTO TEAM O";
      winO++;
      document.getElementById("co1").textContent = winO;
    }
    if(orizzontale3[0].textContent == 'X'){
      document.getElementById("chat").textContent = "HA VINTO TEAM X";
      winX++;
      document.getElementById("cx1").textContent = winX;
    } 
    all++;
    document.getElementById("all1").textContent = all;
    orizzontale3[0].style.backgroundColor = "white"; 
    orizzontale3[0].style.color = "black";
    orizzontale3[1].style.backgroundColor = "white"; 
    orizzontale3[1].style.color = "black";
    orizzontale3[2].style.backgroundColor = "white"; 
    orizzontale3[2].style.color = "black";
    return;
  }
  const verticale1 = document.getElementsByClassName("v1");
  if(verticale1[0].textContent == 'O' && verticale1[1].textContent == 'O' && verticale1[2].textContent == 'O' || verticale1[0].textContent == 'X' && verticale1[1].textContent == 'X' && verticale1[2].textContent == 'X'){
    if(verticale1[0].textContent == 'O'){
      document.getElementById("chat").textContent = "HA VINTO TEAM O";
      winO++;
      document.getElementById("co1").textContent = winO;
    }
    if(verticale1[0].textContent == 'X'){
      document.getElementById("chat").textContent = "HA VINTO TEAM X";
      winX++;
      document.getElementById("cx1").textContent = winX;
    } 
    all++;
    document.getElementById("all1").textContent = all;
    verticale1[0].style.backgroundColor = "white"; 
    verticale1[0].style.color = "black";
    verticale1[1].style.backgroundColor = "white"; 
    verticale1[1].style.color = "black";
    verticale1[2].style.backgroundColor = "white"; 
    verticale1[2].style.color = "black";
    return;
  }
  const verticale2 = document.getElementsByClassName("v2");
  if(verticale2[0].textContent == 'O' && verticale2[1].textContent == 'O' && verticale2[2].textContent == 'O' || verticale2[0].textContent == 'X' && verticale2[1].textContent == 'X' && verticale2[2].textContent == 'X'){
    if(verticale2[0].textContent == 'O'){
      document.getElementById("chat").textContent = "HA VINTO TEAM O";
      winO++;
      document.getElementById("co1").textContent = winO;
    }
    if(verticale2[0].textContent == 'X'){
      document.getElementById("chat").textContent = "HA VINTO TEAM X";
      winX++;
      document.getElementById("cx1").textContent = winX;
    } 
    all++;
    document.getElementById("all1").textContent = all;
    verticale2[0].style.backgroundColor = "white"; 
    verticale2[0].style.color = "black";
    verticale2[1].style.backgroundColor = "white"; 
    verticale2[1].style.color = "black";
    verticale2[2].style.backgroundColor = "white"; 
    verticale2[2].style.color = "black";
    return;
  }
  const verticale3 = document.getElementsByClassName("v3");
  if(verticale3[0].textContent == 'O' && verticale3[1].textContent == 'O' && verticale3[2].textContent == 'O' || verticale3[0].textContent == 'X' && verticale3[1].textContent == 'X' && verticale3[2].textContent == 'X'){
    if(verticale3[0].textContent == 'O'){
      document.getElementById("chat").textContent = "HA VINTO TEAM O";
      winO++;
      document.getElementById("co1").textContent = winO;
    }
    if(verticale3[0].textContent == 'X'){
      document.getElementById("chat").textContent = "HA VINTO TEAM X";
      winX++;
      document.getElementById("cx1").textContent = winX;
    } 
    all++;
    document.getElementById("all1").textContent = all;
    verticale3[0].style.backgroundColor = "white"; 
    verticale3[0].style.color = "black";
    verticale3[1].style.backgroundColor = "white"; 
    verticale3[1].style.color = "black";
    verticale3[2].style.backgroundColor = "white"; 
    verticale3[2].style.color = "black";
    return;
  }
  const diagonale1 = document.getElementsByClassName("d1");
  if(diagonale1[0].textContent == 'O' && diagonale1[1].textContent == 'O' && diagonale1[2].textContent == 'O' || diagonale1[0].textContent == 'X' && diagonale1[1].textContent == 'X' && diagonale1[2].textContent == 'X'){
    if(diagonale1[0].textContent == 'O'){
      document.getElementById("chat").textContent = "HA VINTO TEAM O";
      winO++;
      document.getElementById("co1").textContent = winO;
    }
    if(diagonale1[0].textContent == 'X'){
      document.getElementById("chat").textContent = "HA VINTO TEAM X";
      winX++;
      document.getElementById("cx1").textContent = winX;
    } 
    all++;
    document.getElementById("all1").textContent = all;
    diagonale1[0].style.backgroundColor = "white"; 
    diagonale1[0].style.color = "black";
    diagonale1[1].style.backgroundColor = "white"; 
    diagonale1[1].style.color = "black";
    diagonale1[2].style.backgroundColor = "white"; 
    diagonale1[2].style.color = "black";
    return;
  }
  const diagonale2 = document.getElementsByClassName("d2");
  if(diagonale2[0].textContent == 'O' && diagonale2[1].textContent == 'O' && diagonale2[2].textContent == 'O' || diagonale2[0].textContent == 'X' && diagonale2[1].textContent == 'X' && diagonale2[2].textContent == 'X'){
    if(diagonale2[0].textContent == 'O'){
      document.getElementById("chat").textContent = "HA VINTO TEAM O";
      winO++;
      document.getElementById("co1").textContent = winO;
    }
    if(diagonale2[0].textContent == 'X'){
      document.getElementById("chat").textContent = "HA VINTO TEAM X";
      winX++;
      document.getElementById("cx1").textContent = winX;
    } 
    all++;
    document.getElementById("all1").textContent = all;
    diagonale2[0].style.backgroundColor = "white"; 
    diagonale2[0].style.color = "black";
    diagonale2[1].style.backgroundColor = "white"; 
    diagonale2[1].style.color = "black";
    diagonale2[2].style.backgroundColor = "white"; 
    diagonale2[2].style.color = "black";
    return;
  }
}
function isTie(){
  if(count == 9){
    tieC++;
    all++;
    document.getElementById("chat").textContent = "[PAREGGIO]";
    document.getElementById("cp1").textContent = tieC;
    document.getElementById("all1").textContent = all;
    reset();
  }  
  if(count == 10){
    tieC++;
    document.getElementById("chat").textContent = "[PAREGGIO]";
    document.getElementById("cp1").textContent = tieC;
    document.getElementById("all1").textContent = all;
    reset();
  } 
}

function cpu1(){
  token = 1;
  document.getElementById("mode2").textContent = "CPU";
}
function cpu() {
  cerca();
}

function cpuPlus1(){
  token = 2;
  document.getElementById("mode2").textContent = "CPU+";
}
function cpuPlus2(){
  if(document.getElementById("B1").textContent == 'O' && document.getElementById("B2").textContent == 'O' && document.getElementById("B3").textContent == '/') {
   document.getElementById("B3").textContent = 'X';
   document.getElementById("ris").textContent = 'X'; 
    azione1 = 1;
    return;
  }
  if(document.getElementById("B1").textContent == 'O' && document.getElementById("B3").textContent == 'O' && document.getElementById("B2").textContent == '/') {
    document.getElementById("B2").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  }
  if(document.getElementById("B2").textContent == 'O' && document.getElementById("B3").textContent == 'O' && document.getElementById("B1").textContent == '/') {
    document.getElementById("B1").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  } // RIGA 1
  if(document.getElementById("B4").textContent == 'O' && document.getElementById("B5").textContent == 'O' && document.getElementById("B6").textContent == '/') {
    document.getElementById("B6").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  }
  if(document.getElementById("B4").textContent == 'O' && document.getElementById("B6").textContent == 'O' && document.getElementById("B5").textContent == '/') {
    document.getElementById("B5").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  }
  if(document.getElementById("B5").textContent == 'O' && document.getElementById("B6").textContent == 'O' && document.getElementById("B4").textContent == '/') {
    document.getElementById("B4").textContent = 'X';
   document.getElementById("ris").textContent = 'X'; 
    azione1 = 1;
    return;
  } // RIGA 2
  if(document.getElementById("B7").textContent == 'O' && document.getElementById("B8").textContent == 'O' && document.getElementById("B9").textContent == '/') {
    document.getElementById("B9").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  }
  if(document.getElementById("B7").textContent == 'O' && document.getElementById("B9").textContent == 'O' && document.getElementById("B8").textContent == '/') {
    document.getElementById("B8").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  }
  if(document.getElementById("B8").textContent == 'O' && document.getElementById("B9").textContent == 'O' && document.getElementById("B7").textContent == '/') {
    document.getElementById("B7").textContent = 'X';
   document.getElementById("ris").textContent = 'X'; 
    azione1 = 1;
    return;
  } // RIGA 3
  if(document.getElementById("B1").textContent == 'O' && document.getElementById("B4").textContent == 'O' && document.getElementById("B7").textContent == '/') {
    document.getElementById("B7").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  }
  if(document.getElementById("B1").textContent == 'O' && document.getElementById("B7").textContent == 'O' && document.getElementById("B4").textContent == '/') {
    document.getElementById("B4").textContent = 'X';
   document.getElementById("ris").textContent = 'X'; 
    azione1 = 1;
    return;
  }
  if(document.getElementById("B4").textContent == 'O' && document.getElementById("B7").textContent == 'O' && document.getElementById("B1").textContent == '/') {
    document.getElementById("B1").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  } // COLONNA 1
  if(document.getElementById("B2").textContent == 'O' && document.getElementById("B5").textContent == 'O' && document.getElementById("B8").textContent == '/') {
    document.getElementById("B8").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  }
  if(document.getElementById("B2").textContent == 'O' && document.getElementById("B8").textContent == 'O' && document.getElementById("B5").textContent == '/') {
    document.getElementById("B5").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  }
  if(document.getElementById("B5").textContent == 'O' && document.getElementById("B8").textContent == 'O' && document.getElementById("B2").textContent == '/') {
    document.getElementById("B2").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  } // COLONNA 2
  if(document.getElementById("B3").textContent == 'O' && document.getElementById("B6").textContent == 'O' && document.getElementById("B9").textContent == '/') {
    document.getElementById("B9").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  }
  if(document.getElementById("B3").textContent == 'O' && document.getElementById("B9").textContent == 'O' && document.getElementById("B6").textContent == '/') {
    document.getElementById("B6").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  }
  if(document.getElementById("B6").textContent == 'O' && document.getElementById("B9").textContent == 'O' && document.getElementById("B3").textContent == '/') {
    document.getElementById("B3").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  } // COLONNA 3
  if(document.getElementById("B1").textContent == 'O' && document.getElementById("B5").textContent == 'O' && document.getElementById("B9").textContent == '/') {
    document.getElementById("B9").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  }
  if(document.getElementById("B1").textContent == 'O' && document.getElementById("B9").textContent == 'O' && document.getElementById("B5").textContent == '/') {
    document.getElementById("B5").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  }
  if(document.getElementById("B5").textContent == 'O' && document.getElementById("B9").textContent == 'O' && document.getElementById("B1").textContent == '/') {
    document.getElementById("B1").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  } // DIAGONALE 1
  if(document.getElementById("B3").textContent == 'O' && document.getElementById("B5").textContent == 'O' && document.getElementById("B7").textContent == '/') {
    document.getElementById("B7").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  }
  if(document.getElementById("B3").textContent == 'O' && document.getElementById("B7").textContent == 'O' && document.getElementById("B5").textContent == '/') {
    document.getElementById("B5").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  }
  if(document.getElementById("B5").textContent == 'O' && document.getElementById("B7").textContent == 'O' && document.getElementById("B3").textContent == '/') {
    document.getElementById("B3").textContent = 'X';
    document.getElementById("ris").textContent = 'X';
    azione1 = 1;
    return;
  } // DIAGONALE 2
  cpuPlus3();
  azione1=0;
}
function cpuPlus3(){
  if(document.getElementById("B1").textContent == 'X' && document.getElementById("B2").textContent == 'X' && document.getElementById("B3").textContent == '/') {
   document.getElementById("B3").textContent = 'X';
   document.getElementById("ris").textContent = 'X'; 
   azione = 1;
   return; 
  }
  if(document.getElementById("B1").textContent == 'X' && document.getElementById("B3").textContent == 'X' && document.getElementById("B2").textContent == '/') {
    document.getElementById("B2").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  }
  if(document.getElementById("B2").textContent == 'X' && document.getElementById("B3").textContent == 'X' && document.getElementById("B1").textContent == '/') {
    document.getElementById("B1").textContent = 'X';
    document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  } // RIGA 1
  if(document.getElementById("B4").textContent == 'X' && document.getElementById("B5").textContent == 'X' && document.getElementById("B6").textContent == '/') {
    document.getElementById("B6").textContent = 'X';
    document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  }
  if(document.getElementById("B4").textContent == 'X' && document.getElementById("B6").textContent == 'X' && document.getElementById("B5").textContent == '/') {
    document.getElementById("B5").textContent = 'X';
    document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  }
  if(document.getElementById("B5").textContent == 'X' && document.getElementById("B6").textContent == 'X' && document.getElementById("B4").textContent == '/') {
    document.getElementById("B4").textContent = 'X';
   document.getElementById("ris").textContent = 'X'; 
    azione = 1;
    return;
  } // RIGA 2
  if(document.getElementById("B7").textContent == 'X' && document.getElementById("B8").textContent == 'X' && document.getElementById("B9").textContent == '/') {
    document.getElementById("B9").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  }
  if(document.getElementById("B7").textContent == 'X' && document.getElementById("B9").textContent == 'X' && document.getElementById("B8").textContent == '/') {
    document.getElementById("B8").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  }
  if(document.getElementById("B8").textContent == 'X' && document.getElementById("B9").textContent == 'X' && document.getElementById("B7").textContent == '/') {
    document.getElementById("B7").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  } // RIGA 3
  if(document.getElementById("B1").textContent == 'X' && document.getElementById("B4").textContent == 'X' && document.getElementById("B7").textContent == '/') {
    document.getElementById("B7").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  }
  if(document.getElementById("B1").textContent == 'X' && document.getElementById("B7").textContent == 'X' && document.getElementById("B4").textContent == '/') {
    document.getElementById("B4").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  }
  if(document.getElementById("B4").textContent == 'X' && document.getElementById("B7").textContent == 'X' && document.getElementById("B1").textContent == '/') {
    document.getElementById("B1").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  } // COLONNA 1
  if(document.getElementById("B2").textContent == 'X' && document.getElementById("B5").textContent == 'X' && document.getElementById("B8").textContent == '/') {
    document.getElementById("B8").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  }
  if(document.getElementById("B2").textContent == 'X' && document.getElementById("B8").textContent == 'X' && document.getElementById("B5").textContent == '/') {
    document.getElementById("B5").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  }
  if(document.getElementById("B5").textContent == 'X' && document.getElementById("B8").textContent == 'X' && document.getElementById("B2").textContent == '/') {
    document.getElementById("B2").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  } // COLONNA 2
  if(document.getElementById("B3").textContent == 'X' && document.getElementById("B6").textContent == 'X' && document.getElementById("B9").textContent == '/') {
    document.getElementById("B9").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  }
  if(document.getElementById("B3").textContent == 'X' && document.getElementById("B9").textContent == 'X' && document.getElementById("B6").textContent == '/') {
    document.getElementById("B6").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  }
  if(document.getElementById("B6").textContent == 'X' && document.getElementById("B9").textContent == 'X' && document.getElementById("B3").textContent == '/') {
    document.getElementById("B3").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  } // COLONNA 3
  if(document.getElementById("B1").textContent == 'X' && document.getElementById("B5").textContent == 'X' && document.getElementById("B5").textContent == '/') {
    document.getElementById("B9").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  }
  if(document.getElementById("B1").textContent == 'X' && document.getElementById("B9").textContent == 'X' && document.getElementById("B5").textContent == '/') {
    document.getElementById("B5").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  }
  if(document.getElementById("B5").textContent == 'X' && document.getElementById("B9").textContent == 'X' && document.getElementById("B1").textContent == '/') {
    document.getElementById("B1").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  } // DIAGONALE 1
  if(document.getElementById("B3").textContent == 'X' && document.getElementById("B5").textContent == 'X' && document.getElementById("B7").textContent == '/') {
    document.getElementById("B7").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  }
  if(document.getElementById("B3").textContent == 'X' && document.getElementById("B7").textContent == 'X' && document.getElementById("B5").textContent == '/') {
    document.getElementById("B5").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  }
  if(document.getElementById("B5").textContent == 'X' && document.getElementById("B7").textContent == 'X' && document.getElementById("B3").textContent == '/') {
    document.getElementById("B3").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    azione = 1;
    return;
  } // DIAGONALE 2
  cerca();
  azione = 0;
}
function cpuPlus0(){
  if(count == 1){
    if(document.getElementById("B1").textContent == 'O' || document.getElementById("B3").textContent == 'O' || document.getElementById("B7").textContent == 'O' || document.getElementById("B9").textContent == 'O'){
      document.getElementById("B5").textContent = 'X';
      document.getElementById("ris").textContent = 'X';    
      count++;
      return;
    }
  }
  if(count == 1){
    if(document.getElementById("B5").textContent == 'O' || document.getElementById("B2").textContent == 'O' || document.getElementById("B4").textContent == 'O' || document.getElementById("B6").textContent == 'O' || document.getElementById("B8").textContent == 'O'){
      document.getElementById("B9").textContent = 'X';
      document.getElementById("ris").textContent = 'X';    
      count++;
      return;
    }
  }
  if(count == 1){
    if(document.getElementById("B2").textContent == 'O' || document.getElementById("B4").textContent == 'O' || document.getElementById("B6").textContent == 'O' || document.getElementById("B8").textContent == 'O'){
      document.getElementById("B5").textContent = 'X';
      document.getElementById("ris").textContent = 'X';    
      count++;
      return;
    }
  }  
  cpuPlus2();
  count++;
}
function cpuPlus() {
  cpuPlus0();
}
function cerca(){
  count++;
  if(document.getElementById("B1").textContent == '/'){
    document.getElementById("B1").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    return;
  }
  if(document.getElementById("B2").textContent == '/'){
    document.getElementById("B2").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
    return;
  }
      if(document.getElementById("B3").textContent == '/'){
         document.getElementById("B3").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
         return;
      }
      if(document.getElementById("B4").textContent == '/'){
        document.getElementById("B4").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
         return;
      }
      if(document.getElementById("B5").textContent == '/'){
         document.getElementById("B5").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
         return;
      }
      if(document.getElementById("B6").textContent == '/'){
         document.getElementById("B6").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
         return;
      }
      if(document.getElementById("B7").textContent == '/'){
         document.getElementById("B7").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
         return;
      }
      if(document.getElementById("B8").textContent == '/'){
         document.getElementById("B8").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
         return;
      }
      if(document.getElementById("B9").textContent == '/'){
         document.getElementById("B9").textContent = 'X';
   document.getElementById("ris").textContent = 'X';
         return;
      }
}  