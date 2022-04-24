const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
greed();
function greed(){
    let w = canvas.clientWidth * 0.95;
    let h = canvas.clientHeight;
    let x =20;
    let y = 20;
    ctx.beginPath();
    ctx.strokeStyle = '#3873fd56';
    for (let i = 0; i<= w; i += x){
        ctx.moveTo(i,0);
        ctx.lineTo(i,h);
    
    }
    for (let i = 0; i<= h ;i += y){
        ctx.moveTo(0,i);
        ctx.lineTo(canvas.clientWidth,i);

    }
    ctx.lineWidth = 2;  
    ctx.stroke();
}

function draw(e) {
    
  if (isDrawing) {
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 55%)`;
  ctx.beginPath();
  
  ctx.moveTo(lastX, lastY);
 
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (hue >= 320) {
    hue = 20;
  }
  if (ctx.lineWidth >= 80 || ctx.lineWidth <= 1) {
    direction = !direction;
    
  }
  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

  
} else return; 
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
//  тест ->
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchstart', draw);
canvas.addEventListener('touchcancel', () => isDrawing = false);
canvas.addEventListener('touchend', () => isDrawing = false);