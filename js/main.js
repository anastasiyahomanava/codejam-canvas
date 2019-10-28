window.addEventListener('load', function () {
  document.querySelector('.yellow-pic').addEventListener('change', drawYellowPicture);
  document.querySelector('.red-pic').addEventListener('change', drawRedPicture);
  document.querySelector('.rs-logo').addEventListener('change', drawRSS);
});

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const concat = (xs, ys) => xs.concat(ys);

const hexToRGBA = hexStr => [
  parseInt(hexStr.substr(0, 2), 16),
  parseInt(hexStr.substr(2, 2), 16),
  parseInt(hexStr.substr(4, 2), 16),
  255
];

function drawYellowPicture() {
  const flattenedRGBA = hexPixels.reduce(concat).map(hexToRGBA).reduce(concat);
  canvas.width = 4;
  canvas.height = 4;
  const imgData = new ImageData(Uint8ClampedArray.from(flattenedRGBA), 4, 4);
  context.putImageData(imgData, 0, 0);
}

function drawRedPicture() {
  const flattenedRGBA = rgbaPixels.reduce(concat).reduce(concat);
  canvas.width = 32;
  canvas.height = 32;
  const imgData = new ImageData(Uint8ClampedArray.from(flattenedRGBA), 32, 32);
  context.putImageData(imgData, 0, 0);
}

function drawRSS() {
  const img = new Image();
  img.src = './data/image.png';
  img.onload = function () {
    canvas.width = 256;
    canvas.height = 256;
    context.drawImage(img, 0, 0);
  }
};

