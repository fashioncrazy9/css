var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    HEIGHT = window.innerHeight,
    WIDTH = window.innerWidth,
    TO_RADIANS = Math.PI / 360;
    
var raf = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

function clear(style) {
  ctx.save();
  ctx.fillStyle = style || 'rgba(0,0,0,0.01)';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.restore();
}

function square(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(WIDTH/2 + x, HEIGHT/2 + y, w, h);
  ctx.closePath();
  ctx.fill();
}

function circle(x, y, w, h) {
  ctx.beginPath();
  ctx.arc(WIDTH/2 + x, HEIGHT/2+ y, w, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}

canvas.width = WIDTH;
canvas.height = HEIGHT;

var offsetX = 0,
    offsetY = 0;

function draw() {
  clear();
  
  offsetX+= 8;
  offsetY++;
  var x = Math.sin(WIDTH + offsetX * TO_RADIANS) * WIDTH/4;
  var y = Math.sin(HEIGHT + offsetY * TO_RADIANS) * HEIGHT/4;
  
  ctx.fillStyle = 'cyan';
  circle(x, y, 2, 10);
//   offsetX += 2;
  
  
  raf(draw, 16);
}

clear('black');
draw();