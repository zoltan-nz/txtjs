var canvas;
var stage;

function init() {
  canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  stage = new createjs.Stage(canvas);

  var text = new txt.Text({
    text: "1\n2345\n6789 01",
    font: "lato",
    align: 4,
    tracking: 0,
    lineHeight: 38.4,
    ligatures: false,
    width: 65,
    height: 150,
    size: 32,
    debug: true,
    x: 50,
    y: 50
  });
  text.scaleX = text.scaleY = 10;

  stage.addChild(text);

  stage.update();
}
