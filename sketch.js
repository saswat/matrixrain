// let kata;
const kataSize = 60;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // kata = new Kata(width / 2, 0, random(5, 10));
  // kata.setRandomKata();
  textSize(kataSize);
}

function draw() {
  background(0);
  kata.render();
}

function Kata(x, y, speed) {
  this.x = x;
  this.y = y;
  this.value;
  this.speed = speed;

  this.setRandomKata = function () {
    this.value = String.fromCharCode(0x30A0 + round(random(0, 96)));
  };
  this.render = function () {
    fill(0, 250, 45);
    text(this.value, this.x, this.y);
    this.rain();
    this.setRandomKata();
  };

  this.rain = function () {
    if (this.y >= height) {
      this.y = 0;
    } else {
      this.y += this.speed;
    }
    this.y = (this.y >= height) ? 0 : this.y += this.speed;
  };
}

function Stream() {
  this.katas = [];
  this.kataLength = round(random(6, 36));
  this.speed = random(2, 24);
  this.kataGen = function () {
    const y = 0;
    const x = width / 2;

    for (let i = 0; i <= this.kataLength; i++) {
      kata = new Kata(x, y, this.speed);
      kata.setRandomKata();
      this.katas.push(kata);
      y -= kataSize;
    }
  };
}
