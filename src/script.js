numberOfSnow = 100;
var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

function random(min, max) {
  return min + Math.random() * (max - min + 1);
}

function Snow(x, y, size, opacity, speedX, speedY) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.opacity = opacity;
  this.speedY = speedY * -1;
  this.speedX = Math.sin(speedX);
  this.drawSnow = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    context.fillStyle = "rgba(255, 255, 255, " + this.opacity + ")";
    context.fill();
  };
}

var snow = [];
var width = window.innerWidth;
var height = window.innerHeight;

for(var i = 0; i < numberOfSnow; i++) {
  snow[i] = new Snow(random(1, width), random(1, height), random(0.5, 4.2), Math.random(), random(-11, 11), random(7, 15));
}

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for(var i = 0; i < snow.length; i++) {
    snow[i].drawSnow();
    snow[i].x += snow[i].speedX;
    snow[i].y -= snow[i].speedY;
    if(snow[i].y > height) {
      snow[i].x = random(1, width);
      snow[i].y = 0;
    }
  }
}

setInterval(update, 30);