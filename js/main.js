window.addEventListener('load', function() {
  document.querySelector('.yellow-pic').addEventListener('change', drawYellowPicture);
  document.querySelector('.red-pic').addEventListener('change', drawRedPicture);
  document.querySelector('.rs-logo').addEventListener('change', drawRSS);
  document.querySelector('rs-logo').dispatchEvent(new Event('change'));
});

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

function drawRSS() {
  let img = new Image();
  img.onload = function() {
    context.drawImage(img, 20, 10, 256, 128);
  }
  img.src = './data/image.png';
};

function drawYellowPicture() {

}

function drawRedPicture() {

}

