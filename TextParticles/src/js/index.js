let c = new Candy('#c', 500, 500);
let width = CANVAS_WIDTH;
let height = CANVAS_HEIGHT;
let points = [];
let maxParticles = 10;
let pointSize = 6;

c.createScreenBuffer('osc');
let osc = c.screenBuffers.osc;

window.onload = function () {
  let url = 'https://avatars2.githubusercontent.com/u/73920733?s=460&u=793663f1374b9a530847e4a229a9d3119a442628&v=4';

  let mouse = new Vector(0, 0);


  let img = c.loadImage(url);
  img.setAttribute('crossOrigin', '');
  c.trypreload();
  c.preload = function () {
    animate();
  }

  c.noStroke();
  let count = 1;
  function animate() {
    c.clear('#151515');

    mouse.setXY(mouseX, mouseY);

    osc.image(img, 25, 25, width - 100, height - 50);

    if (count > 0) getPixelCoords();
    count--;

    for (let i = 0; i < points.length; i++) {
      points[i].behaviour(mouse);
      points[i].update();
      points[i].render();
    }
    c.loop(animate);
  }

}

