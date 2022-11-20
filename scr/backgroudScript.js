const canvas = document.getElementById('canvas2');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);
let gameSpeed = 10;
// let gameFrame =0;

const backgroudLeyer1 = new Image();
backgroudLeyer1.src = `/pictures/layer-1.png`;
const backgroudLeyer2 = new Image();
backgroudLeyer2.src = `/pictures/layer-2.png`;
const backgroudLeyer3 = new Image();
backgroudLeyer3.src = `/pictures/layer-3.png`;
const backgroudLeyer4 = new Image();
backgroudLeyer4.src = `/pictures/layer-4.png`;
const backgroudLeyer5 = new Image();
backgroudLeyer5.src = `/pictures/layer-5.png`;

window.addEventListener('load', function () {
  const slider = document.getElementById('slider');
  slider.value = gameSpeed;
  const showGameSpeed = document.getElementById('showGameSpeed');
  showGameSpeed.innerHTML = gameSpeed;
  slider.addEventListener(`change`, function (e) {
    gameSpeed = e.target.value;
    showGameSpeed.innerHTML = e.target.value;
  });

  class Layer {
    constructor(image, speedModifier) {
      this.x = 0;
      this.y = 0;
      this.width = 2400;
      this.height = 700;
      // this.x2 = this.width;
      this.image = image;
      this.speedModifier = speedModifier;
      this.speed = gameSpeed * this.speedModifier;
    }
    update() {
      this.speed = gameSpeed * this.speedModifier;
      // this.x =(gameFrame * gameSpeed) % this.width;

      if (this.x <= -this.width) {
        this.x = 0;
        //   this.x = this.width + this.x2 - this.speed;
      }
      // pierszy sposób
      // if (this.x2 <= -this.width) {
      //   this.x2 = this.width + this.x - this.speed;
      // }
      this.x = Math.floor(this.x - this.speed);
      // this.x2 = Math.floor(this.x2 - this.speed);
    }
    draw() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      ctx.drawImage(
        this.image,
        this.x + this.width,
        this.y,
        this.width,
        this.height
      );
    }
  }
  const layer4 = new Layer(backgroudLeyer4, 0.5);
  const layer5 = new Layer(backgroudLeyer5, 0.2);
  const layer1 = new Layer(backgroudLeyer1, 0.6);
  const layer2 = new Layer(backgroudLeyer2, 0.8);
  const layer3 = new Layer(backgroudLeyer3, 1);
  const gameObjects = [layer1, layer2, layer3, layer4, layer5];
  // let x = 0;
  // let x2 = 2400;

  function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.forEach((object) => {
      object.update();
      object.draw();
    });
    //   layer4.update();
    //   layer4.draw();
    //   layer5.update();
    //   layer5.draw();
    //   layer1.update();
    //   layer1.draw();
    //   layer2.update();
    //   layer2.draw();
    //   layer3.update();
    //   layer3.draw();
    //   ctx.drawImage(backgroudLeyer4, x, 0);
    //   ctx.drawImage(backgroudLeyer4, x2, 0);
    //   if (x < -2400) x = 2400 + x2 - gameSpeed;
    //   else x -= gameSpeed;
    //   if (x2 < -2400) x2 = 2400 + x - gameSpeed;
    //   else x2 -= gameSpeed;
    requestAnimationFrame(animate);
  }
  animate();
});
