function logout() {
  window.history.back();
}
document.getElementById("logoutButton").addEventListener("click", logout);

const canvas = document.getElementById('drawingCanvas');
const context = canvas.getContext('2d');

context.lineCap = 'round';
context.lineJoin = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);


function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function draw(e) {
  if (!isDrawing) return;

    const color = document.getElementById('color').value;
    const thickness = document.getElementById('thickness').value;

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.lineWidth = thickness;
    context.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function stopDrawing() {
  isDrawing = false;
}

function saveCanvas() {
  const image = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = image;
  link.download = 'canvas.png';
  link.click();
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}


const container = document.getElementById('container');
const controls = document.getElementById('controls');
const canvasElem = document.getElementById('drawingCanvas');
const saveButton = document.getElementById('saveButton');
const clearButton = document.getElementById('clearButton');

saveButton.addEventListener('click', saveCanvas);
clearButton.addEventListener('click', clearCanvas);

anime({
  targets: container,
  translateY: [-100, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeOutQuad'
});

anime({
  targets: controls,
  translateY: [100, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeOutQuad',
  delay: 200
});

anime({
  targets: canvasElem,
  translateY: [100, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeOutQuad',
  delay: 400
});

anime({
  targets: '#buttons .button',
  translateY: [100, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeOutQuad',
  delay: anime.stagger(200)
});

anime({
  targets: '#titolo',
  translateY: [100, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeOutQuad',
  delay: anime.stagger(200)
});

anime({
  targets: '#descrizione',
  translateY: [100, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeOutQuad',
  delay: anime.stagger(200)
});