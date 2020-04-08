const canvas = document.querySelector('.world');
const ctx = canvas.getContext('2d');

const sprite = {
  width: 102,
  height: 148,
  frames: 6,
  currentFrame: 0,
  x: 0,
  y: 0,
};

// Location of animation
let x = (canvas.width - sprite.width) / 2;
let y = (canvas.height - sprite.height) / 2;

let image;
let animation;

function init() {
  image = new Image();
  image.onload = imageLoaded;
  image.src = './guy.png';
}

function imageLoaded() {
  animation = new AnimationFrame(8, () => update());
  animation.start();
}

function draw() {
  ctx.beginPath();

  sprite.x = sprite.width * sprite.currentFrame;

  ctx.beginPath();
  ctx.drawImage(
    image,
    sprite.x,
    sprite.y,
    sprite.width,
    sprite.height,
    x,
    y,
    sprite.width,
    sprite.height
  );
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();

  // Update frame count
  sprite.currentFrame = ++sprite.currentFrame % sprite.frames;
}

init();
