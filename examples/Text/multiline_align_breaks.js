var canvas;
var stage;

function init() {
  canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);

  stage = new createjs.Stage(canvas);

  var text;
  text = new txt.Text({
    text: "love me\nsome\npoiretone",
    font: "poiretone",
    align: txt.Align.TOP_LEFT,
    width: 400,
    height: 400,
    size: 100,
    x: 0,
    y: 0,
    debug: true
  });

  stage.addChild(text);

  text = new txt.Text({
    text: "love me\nsome\npoiretone",
    font: "poiretone",
    align: txt.Align.TOP_CENTER,
    width: 400,
    height: 400,
    size: 100,
    x: 410,
    y: 0,
    debug: true
  });

  stage.addChild(text);

  text = new txt.Text({
    text: "love me\nsome\npoiretone",
    font: "poiretone",
    align: txt.Align.TOP_RIGHT,
    width: 400,
    height: 400,
    size: 100,
    x: 820,
    y: 0,
    debug: true
  });

  stage.addChild(text);

  text = new txt.Text({
    text: "love me\nsome\npoiretone",
    font: "poiretone",
    align: txt.Align.MIDDLE_LEFT,
    width: 400,
    height: 400,
    size: 100,
    x: 0,
    y: 410,
    debug: true
  });

  stage.addChild(text);

  text = new txt.Text({
    text: "love me\nsome\npoiretone",
    font: "poiretone",
    align: txt.Align.MIDDLE_CENTER,
    width: 400,
    height: 400,
    size: 100,
    x: 410,
    y: 410,
    debug: true
  });

  stage.addChild(text);

  text = new txt.Text({
    text: "love me\nsome\npoiretone",
    font: "poiretone",
    align: txt.Align.MIDDLE_RIGHT,
    width: 400,
    height: 400,
    size: 100,
    x: 820,
    y: 410,
    debug: true
  });

  stage.addChild(text);

  text = new txt.Text({
    text: "love me\nsome\npoiretone",
    font: "poiretone",
    align: txt.Align.BOTTOM_LEFT,
    width: 400,
    height: 400,
    size: 100,
    x: 0,
    y: 820,
    debug: true
  });

  stage.addChild(text);

  text = new txt.Text({
    text: "love me\nsome\npoiretone",
    font: "poiretone",
    align: txt.Align.BOTTOM_CENTER,
    width: 400,
    height: 400,
    size: 100,
    x: 410,
    y: 820,
    debug: true
  });

  stage.addChild(text);

  text = new txt.Text({
    text: "love me\nsome\npoiretone",
    font: "poiretone",
    align: txt.Align.BOTTOM_RIGHT,
    width: 400,
    height: 400,
    size: 100,
    x: 820,
    y: 820,
    debug: true
  });

  stage.addChild(text);

  stage.update();
}
