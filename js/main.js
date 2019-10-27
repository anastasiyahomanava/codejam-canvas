var canvas = document.querySelector("canvas").getContext("2d");

var img = document.createElement('img');
img.src = './data/image.png';
img.addEventListener("load", function() {
  canvas.drawImage(img,20,10,256,128);
});

