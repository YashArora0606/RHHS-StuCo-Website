var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = 800;

var c = canvas.getContext('2d');

var mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener('mousemove',
function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  canvas.width = window.innerWidth;
  drawImages();
})

img = new Image();
img.onload = function () {
  //console.log(mouse.x);
  drawImages();
}

function drawImages() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  c.fillStyle = 'rgba(0, 0, 0)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.globalAlpha = 0.15;
  for (var i = 0; i < 30; i++) {
    for (var j = 0; j < 9; j++) {
      var p1x = 86*i - 86/2;
      var p1y = 98*j - 98/2;
      var dist = Math.sqrt(((mouse.x - p1x)*(mouse.x - p1x)) + ((mouse.y - p1y)*(mouse.y - p1y)));
      if (dist/5 > 80) {
        dist = 80*5;
      }
      c.drawImage(img,0,0,img.width,img.height,86*i - 86/2, 98*j - 98/2, dist/5.5, dist/5);
    }
  }
  c.globalAlpha = 1.0;
}

img.src = "LogoWhite.png";
